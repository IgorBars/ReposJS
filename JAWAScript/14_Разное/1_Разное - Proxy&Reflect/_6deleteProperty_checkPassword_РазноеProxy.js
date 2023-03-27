/* JawaScript - _6deleteProperty_checkPassword_РазноеProxy
Применим прокси, чтобы защитить свойства, начинающиеся на _, от доступа извне.
*/
'use strict';
alert("Start _6deleteProperty_checkPassword_РазноеProxy"); // с методом проверки защищенного свойства

let user = {
    name: "Вася",
    _password: "***",
    checkPassword(value) {
        // метод объекта должен иметь доступ на чтение _password
        return value === this._password;
      }
};
  
user = new Proxy(user, {
    get(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
      }// разрешение чтения функцией проверки пароля 
    },  // с контекстом оригинального объекта target, то есть обращение метода к оригинальному об'ьекту user 
    set(target, prop, val) { // перехватываем запись свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        target[prop] = val;
        return true;
      }
    },
    deleteProperty(target, prop) { // перехватываем удаление свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        delete target[prop];
        return true;
      }
    },
    ownKeys(target) { // перехватываем попытку итерации
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});
  
  // "get" не позволяет прочитать _password
try {
    alert(user._password); // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "set" не позволяет записать _password
try {
    user._password = "test"; // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "deleteProperty" не позволяет удалить _password
try {
    delete user._password; // Error: Отказано в доступе
} catch(e) { alert(e.message); }



// "ownKeys" исключает _password из списка видимых для итерации свойств
for(let key in user) alert(key); // name, checkPassword




alert(user.name); // Вася

try {
    alert("checkPassword: " + user.checkPassword("Вася"));  // checkPassword: false
} catch(e) { alert(e.message); }

try {
    alert("checkPassword: " + user.checkPassword("***"));  // checkPassword: true
} catch(e) { alert(e.message); }
  
  

alert("End");

