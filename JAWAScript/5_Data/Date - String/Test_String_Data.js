/* JawaScript - Test проверка на память урока */
'use strict';

alert("Start Test_String_Data");

alert( 'Österreich'.localeCompare('Zealand') ); // -1
alert( 'A'.localeCompare('Z') ); // -1
alert( 'Z'.localeCompare('A') ); //  1

let str = "string";
alert(`"string"[3] ${"string"[3]}`);
alert(`str[0] ${str[0]}`);
alert(`str[0].toUpperCase():   ${str[0].toUpperCase()}`);  // S

// alert(`str:  ${str}`);
// let str1 = str.toUpperCase();
// alert(`str1:  ${str1}`);

let str2 = "";
for(let key of str) {
  str2 += key.toUpperCase();
}
alert(`str2: += key.toUpperCase():   ${str2}`); // STRING

let str3 = str[0].toUpperCase() + str.slice(1,);
alert(`str3: str[0].toUpperCase() + str.slice(1,):    ${str3}`); // String


alert("End");
