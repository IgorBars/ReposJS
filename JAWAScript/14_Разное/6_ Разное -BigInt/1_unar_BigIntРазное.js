/* JawaScript - 1_unar_BigIntРазное
К BigInt числам нельзя применить унарный оператор +

Унарный оператор +value является хорошо известным способом конвертировать произвольное значение value в число.

Данный оператор не поддерживается при работе с BigInt числами.
*/
'use strict';
alert("Start 1_unar_BigIntРазное");



let bigint = 1n;

alert( +bigint ); // SyntaxError: Unexpected identifier




alert("End");

