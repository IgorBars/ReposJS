/* JawaScript - обрезать цитату, добавив троеточие */
'use strict';

alert("Start Ex_truncate_String_Data");

function truncate(str, maxlength) {
    if( str.length < maxlength ) return str;
    return str.slice( 0, maxlength - 3) + "...";
}

alert(truncate("", 20)); 
alert(truncate("Всем привет!", 20)); //"Всем привет!"
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // "Вот, что мне хотело…"



alert("End");
