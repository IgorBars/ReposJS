/* JawaScript - 5_ReadError_ValidationError_usersError
Зручніше отримувати загальну помилку (а уточнювати подробиці по потребі).
Унаслідуємо від узагальнюючого класу помилок ReadError.

Обернем исключения и readUser(json) в месте ее исползования классом обобщения ошибок ReadError
*/
'use strict';

alert("Start 5_ReadError_ValidationError_usersError");

class ReadError extends Error {   //  класс обобщения ошибок
    constructor(message, cause) {
      super(message);
      this.cause = cause;         // сохраним ссылку на исходную ошибку в свойстве cause
      this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {   // функция валидации (полей объекта)
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}
  

function readUser(json) {       //осн ф-я пров синтаксиса и валидации (включает ф-ю валидации)
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);// генер обобщ ош со свойством cause - объектом SyntaxError
    } else {                        
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);// генер обобщ ош со свойством cause - объектом ValidationError
    } else {
      throw err;
    }
  }
  alert(user.name + ": " + user.age);
}
  
try { // оборачиваем все исключения в месте выполн ф-и readUser('{...}')
  // readUser('{ "name": "John", "age": 30 }');
  readUser('{"age": 25}');

} catch (e) {
  if (e instanceof ReadError) {           // подхватываем все ошибки из нижнего уровня
    alert(e);                             // ReadError: Ошибка валидации
    alert("Исходная ошибка: " + e.cause); // Исходная ошибка: Error: name

  } else {
    throw e;
  }
}
//В приведённом выше коде readUser работает так, как описано – функция 
//распознаёт синтаксические ошибки и ошибки валидации и выдаёт вместо них 
//ошибки ReadError (неизвестные ошибки, как обычно, пробрасываются).

//Т.Е. функция ловит низкоуровневые исключения и создаёт одно 
//«высокоуровневое» исключение вместо разных низкоуровневых.


//Во внешней обертке (внешн catch) не нужно перечислять все возможные типы ошибок

alert("End");
