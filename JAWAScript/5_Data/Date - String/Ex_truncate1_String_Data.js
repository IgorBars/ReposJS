/* JawaScript - обрезать цитату, добавив троеточие */


'use strict';

alert("Start Ex_truncate1_String_Data");

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
  str.slice(0, maxlength - 1) + '…' : str;
  }
  
alert( truncate( prompt("Введите строку", 
"stringrteu wretruwtef erwyetwter erwteuryet"), 
prompt("Введите длину", 20) ) );

alert("End");
