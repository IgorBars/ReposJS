/* JawaScript - 1_ToBoolean*/

// однострочный комментарий

'use strict';

alert("Start 1_ToBoolean");

// к false приводятся  0, пустая строка, null, undefined и NaN (интуитивно «пустые»)

alert("Boolean(1): "  + Boolean(1) ); // true
alert("Boolean(0): " + Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true  !
alert( Boolean(" ") ); // true  !

alert("End");   