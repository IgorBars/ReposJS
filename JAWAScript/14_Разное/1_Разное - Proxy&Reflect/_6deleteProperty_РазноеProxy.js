/* JawaScript - Proxy_Разное
Применим прокси, чтобы защитить свойства, начинающиеся на _, от доступа извне.
*/
'use strict';
alert("Start _6deleteProperty_РазноеProxy");

let user = {
    name: "Вася",
    _password: "***"
};

user = new Proxy(user, {
    get(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*) -если метод, подвязьіваем его напрямую к оригинальному объекту target
      }// разрешение чтения функцией проверки пароля - метод проксированного об'ьекта привязьіваем к оригинальному об'ьекту
    },  // (к контексту оригинального объекта target) 
    set(target, prop, val) { // перехватываем запись свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        target[prop] = val;
        return true;        // не забьіваем инвариант для set-ловушки
      }
    },
    deleteProperty(target, prop) { // перехватываем удаление свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        delete target[prop];
        return true;        // не забьіваем инвариант для deleteProperty-ловушки
      }
    },
    ownKeys(target) { // перехватываем попытку итерации
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "get" не позволяет прочитать _password
try {
  alert(user._password); // Error: Отказано в доступе (чтения свойства)
} catch(e) { alert(e.message); }

// "set" не позволяет записать _password
try {
  user._password = "test"; // Error: Отказано в доступе (записи в свойство)
} catch(e) { alert(e.message); }

// "deleteProperty" не позволяет удалить _password
try {
  delete user._password; // Error: Отказано в доступе (удаления свойства)
} catch(e) { alert(e.message); }

// "ownKeys" исключает _password из списка видимых для итерации свойств
for(let key in user) alert(key); // name

// метод самого объекта, например user.checkPassword(), должен иметь доступ к свойству _password:
user = {
  // ...
  checkPassword(value) {
    // метод объекта должен иметь доступ на чтение _password
    return value === this._password;
  }
}
//Вызов user.checkPassword() получает проксированный объект user в качестве this (объект перед точкой становится this), 
//так что когда такой вызов обращается к this._password, ловушка get вступает в действие 
//(она срабатывает при любом чтении свойства), и выбрасывается ошибка.

//Поэтому мы привязываем контекст к методам объекта – оригинальный объект target в строке (*). 
//Тогда их дальнейшие вызовы будут использовать target в качестве this, без всяких ловушек.


alert("End");

