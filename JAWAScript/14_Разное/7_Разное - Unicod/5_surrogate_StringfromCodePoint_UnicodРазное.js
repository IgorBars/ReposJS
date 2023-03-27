/* JawaScript - 5_surrogate_StringfromCodePoint_UnicodРазное

ДЛЯ РАБОТЬІ С СУРРОГАТНЬІМИ ПАРАМИ в JavaScript были добавлены методы 
    - String.fromCodePoint()    => 😂       (получаем строчное представление символа из кода)
    - str.codePointAt()         => 128514    (получаем код символа из его строчного представления)

По сути, они аналогичны String.fromCharCode и str.charCodeAt, но они правильно обрабатывают суррогатные пары.
*/
'use strict';
alert("Start 5_surrogate_StringfromCodePoint_UnicodРазное");


// // charCodeAt не учитывает суррогатные пары, поэтому он выдает коды для 1-й части 𝒳:
// alert( '𝒳'.charCodeAt(0).toString(16) ); // d835

// один символ с "длинным" (более 2 байт) unicode-кодом
alert( '𝒳'.codePointAt(0) );            // 119987
alert( String.fromCodePoint(119987) );  // 𝒳

// codePointAt учитывает суррогатные пары
alert( '𝒳'.codePointAt(0).toString(16) ); // 1d4b3, считывает обе части суррогатной пары


// //При этом, если брать с позиции 1 (а это здесь скорее неверно), то они оба возвращают только 2-ю часть пары:
// alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3
// alert( '𝒳'.codePointAt(1).toString(16) ); // dcb3
// // бессмысленная 2-я половина пары


alert( '😂'.codePointAt() );           // 128514    (или '😂'.codePointAt(0))
alert( String.fromCodePoint(128514) );  // 😂

alert( '😁'.codePointAt() );           // 128513
alert( String.fromCodePoint(128513) );  // 😁

alert( '🗾'.codePointAt() );           // 128510
alert( String.fromCodePoint(128510) );  // 🗾

alert( '🗼'.codePointAt() );           // 128508
alert( String.fromCodePoint(128508) );  // 🗼

alert( '𩷶'.codePointAt() );           // 171510
alert( String.fromCodePoint(171510) );  // 𩷶

alert( '歶'.codePointAt() );           // 27510
alert( String.fromCodePoint(27510) );  // 歶

alert("End");

