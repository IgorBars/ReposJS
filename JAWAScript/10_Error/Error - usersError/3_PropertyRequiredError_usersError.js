/* JawaScript - 3_PropertyRequiredError_usersError
                                                    Дальнейшее наследование
Класс ValidationError является слишком общим. Много что может пойти не так. 
Свойство может отсутствовать или иметь неверный формат (например, строка как значение возраста age).

Поэтому ДЛЯ ОТСУТСТВУЮЩИХ СВОЙСТВ СОЗДАДИМ БОЛЕЕ КОНКРЕТНЬІЙ КЛАСС ОШИБОК PropertyRequiredError. 
Он будет нести дополнительную информацию о свойстве, которое отсутствует.
*/
'use strict';

alert("Start 3_PropertyRequiredError_usersError");

class ValidationError extends Error { // 
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
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
    if (err instanceof ValidationError) {       // Обробляємо очікувану помилку PropertyRequiredError

      alert("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
      alert(err.name);                          // PropertyRequiredError
      alert(err.property);                      // name

    } else if (err instanceof SyntaxError) {    // Обробляємо очікувану помилку SyntaxError
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

