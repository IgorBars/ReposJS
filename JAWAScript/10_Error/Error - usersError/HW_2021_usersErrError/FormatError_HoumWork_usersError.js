/* JawaScript - _usersError

*/
'use strict';

alert("Start FormatError_HoumWork_usersError");

class FormatError extends SyntaxError {
    constructor(message) {
        super (message);
        // this.name = "FormatError";
        this.name = this.constructor.name;
    }
}

let err = new FormatError("ошибка форматирования");// gen Er

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)


alert("End");

