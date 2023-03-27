/* JawaScript - 3_PropertyRequiredError_json_usersErrError

*/
'use strict';

alert("Start 3_PropertyRequiredError_json_usersErrError");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Відсутнє поле: " + property);
        this.property = property;
        this.name = "PropertyRequiredError";
    }
}

function readDate(json) {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new PropertyRequiredError("name");
    }
    if(!user.age) {
        throw new PropertyRequiredError("age");
    }
    return user;
}

try {
    // let user = readDate( '{"name": "Tom", "age": 29}' );
    // let user = readDate( '{"name": "Tom"}' );
    let user = readDate( '{"age": 29}' );
    alert(user.name + ": " + user.age);

} catch(err) {

    if(err instanceof ValidationError) {
        alert("Помилка даних: " + err.message)
        alert(err.name);
        alert(err.stack);

    } else if(err instanceof SyntaxError) {
        alert("Помилка синтаксису JSON: " + err.message)

    } else {
        alert("Невизначена помилка");
        throw err;
    }    
}


alert("End");

