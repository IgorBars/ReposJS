/* JawaScript - 2_uXXXX_UnicodРазное            \uXXXX  - 2-байтовые коды (4 шестнадцатеричные цифры)
                                                (4-значная шестнадцатеричная нотация)

Изначально JavaScript был основан на кодировке UTF-16, которая предусматривала только 2 байта на один символ. 

Все часто используемые символы имеют 2-байтовые коды (4 шестнадцатеричные цифры)
В большинстве европейских языков буквы, цифры и основные унифицированные идеографические наборы CJK 
(CJK – от китайской, японской и корейской систем письма) имеют 2-байтовое представление.

Вместо XXXX должны быть указаны ровно 4 шестнадцатеричные цифры со значением от 0000 до FFFF. 
В этом случае \uXXXX – это символ, Юникод которого равен XXXX.
*/
'use strict';
alert("Start 2_uXXXX_UnicodРазное");


alert( "\xA9" );                 // ©, символ авторского права

alert( "\u00A9" );                // ©, то же самое, что \xA9, используя 4-значную шестнадцатеричную нотацию (Юникод 00A9)

alert( "\u044F" );                 // я, буква кириллического алфавита (Юникод 044F)

alert( "\u2191" );                  // ↑, символ стрелки вверх
alert('↑'.charCodeAt());            // 8593 (charCode 8593)
alert( String.fromCharCode(8593) );  // ↑

alert( "\ua1f1" );                   // ꇱ
alert('ꇱ'.charCodeAt());             // 41457
alert( String.fromCharCode(41457) ); // ꇱ

alert("End");

