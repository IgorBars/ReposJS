/* JawaScript - func_bind_double_DecorFUNCAdv.
    Як зберегти  this при передачі методу об'єкту

у функций есть встроенный метод bind, который позволяет зафиксировать this.
    let boundFunc = func.bind(context, [arg1], [arg2], ...);
 */
'use strict';

alert("Start func_bind_double_DecorFUNCAdv");


// Например, у нас есть функция умножения mul(a, b):
function mul(a, b) {
    return a * b;
}

// Давайте воспользуемся bind, чтобы создать функцию double на её основе:
let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

// Вызов mul.bind(null, 2) создаёт новую функцию double, которая передаёт вызов mul, фиксируя null как контекст,
// и 2 – как первый аргумент. Следующие аргументы передаются как есть.

// B данном случае мы на самом деле не используем this. Но для bind это обязательный параметр, 
// так что мы должны передать туда что-нибудь вроде null.

alert("End");
