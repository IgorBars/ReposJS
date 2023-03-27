/* JawaScript - Ex_FormatError_usersErrError
Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

Класс должен поддерживать свойства message, name и stack.
*/
'use strict';

alert("Start Ex_FormatError_usersErrError");

class FormatError extends SyntaxError {
    constructor(message) {
        super(name);
        this.name = this.constructor.name;
        this.message = message;
    }
}

let err = new FormatError("ошибка форматирования");

alert( err.message );    // ошибка форматирования
alert( err.name );       // FormatError
alert( err.stack );      // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)


alert("End");

