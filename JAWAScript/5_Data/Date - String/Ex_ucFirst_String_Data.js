/* JawaScript - вернуть строку с первой заглавной буквой .toUpperCase()*/
'use strict';

alert("Start Ex_ucFirst_String_Data");

function ucFirst(str) {

    if (!str) return str; //пров на пустую строку(для нее .toUpperCase() не раб)

    return str[0].toUpperCase() + str.slice(1,);
}

alert(ucFirst(""));
alert(ucFirst("str collbeck")); // Str collbeck

alert("End");
