/* JawaScript - 3_u10FFFF_UnicodРазное          \u{X…XXXXXX}    - шестнадцатеричное значение от 1 до 6 байт от 0 до 10FFFF

Вместо X…XXXXXX должно быть шестнадцатеричное значение от 1 до 6 байт от 0 до 10FFFF  (максимальная точка кода, определенная стандартом Юникод). 

Эта нотация позволяет нам легко представлять все существующие символы Юникода.
*/
'use strict';
alert("Start 3_u10FFFF_UnicodРазное");


alert( "\u{20331}" ); // 佫, редкий китайский иероглиф (длинный Юникод)
alert( "\u{20331}" ); // 𠌱, китайский иероглиф с этим кодом
alert( "\u{1F60D}" ); // 😍, символ улыбающегося лица (ещё один длинный Юникод)


alert("End");

