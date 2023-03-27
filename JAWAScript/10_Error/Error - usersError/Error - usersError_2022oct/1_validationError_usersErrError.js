/* JawaScript - 1_validationError_usersErrError

*/
'use strict';

alert("Start 1_validationError_usersErrError");

class ValidationError extends Error {
    constructor(message) {              // штатньій конструктор должен принимать message в параметрьі
        super(message);                 // вызываем родительский конструктор(опр. поля: message, name, stack)
        this.name = "ValidationError";  // переопр поле name ("Error" => "ValidationError")
    }
}

function test(){
    throw new ValidationError("Упс!");
}

try {
    test();

}   catch(error) {
        if(error instanceof ValidationError) {
            alert(error.message);
            alert(error.name);
            alert(error.stack);

    } else {
        alert("Ошибка не определена");
        throw error;                    // пробрасьіваем нашу случайную ошибку дальше
    }

}


alert("End");

