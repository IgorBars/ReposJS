/* JawaScript - 2_validationError_json_usersErrError

*/
'use strict';

alert("Start 2_validationError_json_usersErrError");

class ValidationError extends Error {
    constructor (message) {
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError("Нет поля name");
    }
    if (!user.age) {
        throw new ValidationError("Нет поля age");
    }
    return user;
}

try {
    // readUser( '{name: "Tom"}' );                      // ошибка синтаксиса
    readUser( '{"name": "Tom"}' );

}   catch(err) {
        if(err instanceof ValidationError) {
            alert(`${err.name}: ${err.message}`);
            
        } else if (err instanceof SyntaxError) { // (*)
            alert("JSON Ошибка Синтаксиса: " + err.message);

        } else {
            alert("Ошибка не определена");
            throw err;                              // пробрасьіваем нашу случайную ошибку дальше
        }
}


alert("End");

