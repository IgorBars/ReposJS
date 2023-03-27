/* JawaScript - _BigIntРазное
BigInt – это специальный числовой тип, который предоставляет возможность работать с целыми числами произвольной длины.
*/
'use strict';
alert("Start _BigIntРазное");


const bigint1 = 1234567890123456789012345678901234567890n;  // можно добавить n в конец числового литерала

//можно вызвать функцию BigInt, которая создаст число типа BigInt из переданного аргумента. 
// Аргументом может быть число, строка и др.
const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // то же самое, что и 10n


alert(1n + 2); // Error: Cannot mix BigInt and other types
//Мы должны явно их конвертировать: используя либо BigInt(), либо Number(), например:

let bigint = 1n;
let number = 2;

// конвертируем number в bigint
alert(bigint + BigInt(number)); // 3

// конвертируем `bigint` в number
alert(Number(bigint) + number); // 3




alert("End");

