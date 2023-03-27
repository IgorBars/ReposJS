/* JawaScript - тест преобр строки к числу */


'use strict';
alert("Start Test_str_unar_conc_Data");

let empty = "";
let str = " 01string"; 

alert(`"str" ${empty}`);    //  ""   => ""
alert(`"str" ${str[0]}`);   //  " "  => " "
alert(`"str" ${str[1]}`);   //  0
alert(`"str" ${str[2]}`);   //  1
alert(`"str" ${str[3]}`);   //  s

alert(`"str" ${+empty}`);   //  ""  => 0
alert(`"str" ${+str[0]}`);  //  " " => 0
alert(`"str" ${+str[1]}`);  //  "0" => 0
alert(`"str" ${+str[2]}`);  //  "1" => 1
alert(`"str" ${+str[3]}`);  //  "S" => NaN

alert(`"str" ${empty + str[0]}`);   //  " "
alert(`"str" ${empty + +str[0]}`);  //  "0"

alert(`"str" ${empty + str[1]}`);   //  "0"
alert(`"str" ${empty + +str[1]}`);  //  "0"

alert("End");