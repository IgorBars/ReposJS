/* JawaScript - Ex_toUpperCase_String_Data*/
// Скрипт изМенения регистра любой буквы в любом слове

'use strict';

alert("Start Ex_toUpperCase_String_Data");


function ucFirst(str, k) {

    let string = "";
    let i = 0;

    for (let char of str) {
        
        if (i != k) string = string + char;
        else {string = string + str[k].toUpperCase()};
        i++;
    }
     return string;
}

alert( ucFirst( prompt("Введите строку", "string"), prompt("Введите позицию", 0) ) );


alert("End");
