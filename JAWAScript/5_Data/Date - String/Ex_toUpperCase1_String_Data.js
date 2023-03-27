/* JawaScript - Ex_toUpperCase1_String_Data*/
// Скрипт изМенения регистра любой буквы в любом слове

'use strict';

alert("Start Ex_toUpperCase1_String_Data");

function ucFirst(str, k) {
    if (!str) return str;
  
    return str.slice(0, k) + 
            str[k].toUpperCase() + 
            str.slice(++k, );
  }
  
alert( ucFirst( prompt("Введите строку", "stringrteu wretruwtef erwyetwter erwteuryet"), prompt("Введите позицию", 0) ) );

alert("End");
