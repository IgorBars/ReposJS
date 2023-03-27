/* JawaScript - 6_ReadError_ValidationError2_usersError

*/
'use strict';

alert("Start 6_ReadError_ValidationError2_usersError");

class ReadError extends Error {
    constructor(message, cause) {
        super(message, cause);
        this.message = message;
        this.cause = cause;
        this.name = "ReadError";
    }
}

class Validation extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation";
    }
}

class PropertyRequiredError extends Validation {
    constructor(property) {
        super("Відсутнє поле: " + property);
        this.property = property;
        this.name = "PropertyRequiredError";
    }
}

function validateUser(user) {
    if(!user.name) {
        throw new PropertyRequiredError ("name");// кидаємо помилки валідації нижнього рівня (PropertyRequiredError)
    }
    if(!user.age) {
        throw new PropertyRequiredError ("age");
    }
}

function readUser(json) {
    let user;

    try {                                   // try-catch-ловушка нижнього рівня для JSON-перетворення
        user = JSON.parse(json);

    } catch(err) {
        if(err instanceof SyntaxError) {   // кидаємо помилки нижнього рівня (ReadError) (із нижньорівневих SyntaxError)
            throw new ReadError("Помилка синтаксису JSON", err);
        } else {
            alert("Тут могла б бути невизначена помилка JSON");
            throw err;                      // прокидуємо невизначені низькорівневі помилки
        }
    }

    try {                                   // try-catch-ловушка нижнього рівня для validateUser
        validateUser(user);

    } catch(err) {
        if(err instanceof Validation) {   // кидаємо помилки нижнього рівня (ReadError) (із нижньорівневих PropertyRequiredError)
            throw new ReadError("Помилка валідації", err);
        } else {
            alert("Тут могла б бути невизначена помилка валідації");
            throw err;                      // прокидуємо невизначені низькорівневі помилки
        }
    }
    alert(user.name + ": " + user.age);     // перевірка роботи коду без помилок
}

try {                                               // try-catch-ловушка верхнього рівня
    // readUser( '{"name": "Alex", "age": 29}' );   // Корректний JSON
    // readUser( '{"name": "Alex"}' );              // Помилка валідації
    readUser('{bad json}');                         // Помилка синтаксису JSON
    
} catch(err) {
    if(err instanceof ReadError) {           // ловимо усі помилки з нижнього рівня ((ReadError) і невизначені прокинуті)
        alert(err.message);
        alert("Вихідна помилка: " + err);
    } else {
        alert("Тут могла б бути невизначена помилка");
        throw err;                          // прокидуємо невизначені помилки
    }
}
 


alert("End");

