/* JawaScript - str_Dostup_k_simv_Data - Доступ к символам*/
'use strict';

alert("Start str_Dostup_k_simv_Data");

let str = "str";
alert(`str[0]: ${str[0]}`);

let k = 0;
for (let i of str) {
    alert(`str[${k}] = ${i}`);
    k++;
}


str = `Hello`;
// получаем первый символ
alert(`получаем первый символ "Hello"[0]: ${`Hello`[0]}`); // H
alert(`получаем первый символ str[0]: ${str[0]}`); // H
alert(`получаем первый символ str.charAt(0): ${str.charAt(0)}`); // H

// получаем последний символ
alert(`получаем последний символ str[str.length - 1]: ${str[str.length - 1] }`); // o


alert("End");
