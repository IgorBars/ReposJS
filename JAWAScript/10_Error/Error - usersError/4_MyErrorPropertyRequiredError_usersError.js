/* JawaScript - 4_MyErrorPropertyRequiredError_usersError
Створимо допоміжний клас, від якого можна наслідувати коротшим кодом класу:
*/
'use strict';

alert("Start 4_MyErrorPropertyRequiredError_usersError");

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;            // тепер у наслідниках у конструкторі не потрібно перевизначати ім'я
    }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        this.property = property;
    }
}
  
  // Применение
function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  
    return user;
}
  
  // Рабочий пример с try..catch
  
try {
  // let user = readUser(`{ "name": "John", "age": 30 }`);
  let user = readUser('{ "age": 25 }');
  alert(user.name + ": " + user.age);

} catch (err) {
    if (err instanceof ValidationError) {

      alert("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
      alert(err.name);                          // PropertyRequiredError
      alert(err.property);                      // name

    } else if (err instanceof SyntaxError) {
      alert("Ошибка синтаксиса JSON: " + err.message);

    } else {
        alert("Ошибка не определена!");
      throw err;                                // неизвестная ошибка, повторно выбрасьіваем исключение
    }
}

//Новый класс PropertyRequiredError очень просто использовать: 
//необходимо указать только имя свойства new PropertyRequiredError(property). 
//Сообщение для пользователя message генерируется конструктором.

alert("End");

