/* JawaScript - 2_instanceofValidationError_usersError
Використання власного класу помлок ValidationError при обробці даних json.

Используем instanceof для проверки конкретного типа ошибки
*/
'use strict';

alert("Start 2_instanceofValidationError_usersError");

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("Нет поля: age"); // Генеруємо помилку ValidationError всередині ф-ї
  }
  if (!user.name) {
    throw new ValidationError("Нет поля: name");
  }

  return user;
}

  
try {
  // let user = readUser(`{ "name": "John", "age": 30 }`);
  let user = readUser('{ "age": 25 }');
  alert(user.name + ": " + user.age);

} catch (err) {

  if (err instanceof ValidationError) {   // instanceof - ("наслідується від ValidationError")
    alert("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name

  } else if (err instanceof SyntaxError) { // (*) или else if (err.name == "SyntaxError")
    alert("JSON Ошибка Синтаксиса: " + err.message);

  } else {
    alert("Ошибка не определена!");
    throw err; // неизвестная ошибка, пробросить исключение (**)
  }           // НЕ ЗАБЫТЬ обернуть код с этим throw в window.onerror (try...catch)
}


alert("End");

