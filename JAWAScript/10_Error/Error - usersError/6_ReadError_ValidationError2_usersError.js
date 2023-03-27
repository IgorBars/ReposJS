/* JawaScript - 6_ReadError_ValidationError2_usersError

Обернем исключения
    - обернем также и readUser(json) в месте ее исползования 
     классом обобщения ошибок ReadError
*/
'use strict';

alert("Start 6_ReadError_ValidationError2_usersError");

class ReadError extends Error {     // буде містити інф помилки нижнього рівня:
    constructor (massage, cause) {              // massage -повідомлення err.message нижнього рівня
                                                //   cause -помилка err нижнього рівня
        super(massage);
        this.name = "ReadError";
        this.cause = cause;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Відсутнє поле: " + property);
        this.name = "PropertyRequiredError";
    }
}

function validateUser(user) {                    // нижній рівень (створення помилки)
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
}

function readUser(json) {           // тут загорнемо усі низькорівневі помилки у нашу верхньорівневу ReadError
    let user;

    try {
        user = JSON.parse(json)     // user визначаємо навмисно поза болоком для користування після блоків try, catch
    } catch(err) {
        if (err instanceof SyntaxError) {                           // (помилка SyntaxError з'явилася десь на нижньому рівні)
            throw new ReadError("Помилка синтаксису JSON", err);   // обгортаємо помилкою вищого рівня ReadError
        } else {
            alert("Тут могла б бути невизначена помилка JSON");
            // throw err;                                           // прокидуємо випадкову невизначену помилку
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Помилка валідації", err);           // обгортаємо помилкою вищого рівня ReadError
        } else {
            alert("Тут могла б бути невизначена помилка валідації");
            // throw err;                                           // прокидуємо випадкову невизначену помилку
        }
    }
    alert(user.name + ": " + user.age);                             // робочий код без пломилок
}


try {                                                               // Обгортаємо try-блоком виклик ф-ї
    // readUser('{ "name": "Alex", "age": 38 }');                   // без помилок
    readUser('{"name": "Alex"}');                                   // помилка валідації
    // readUser('{bad json}');                                      // помилка синтаксису JSON 
    
    } catch (e) {
        if (e instanceof ReadError) {
            alert(e);                               // ReadError: Помилка валідації // (ReadError: Помилка синтаксису JSON)
            alert("Вихідна помилка: " + e.cause);   // Вихідна помилка: PropertyRequiredError: Відсутнє поле: age
                                                    //(Вихідна помилка: SyntaxError: Expected property name or '}' in JSON at position 1)
        } else {
            alert("Тут могла б бути невизначена помилка");
            throw e;
        }
    }



alert("End");

