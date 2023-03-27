/* JawaScript - 5_Polyfill1_vstrProtoPrototype

 */
'use strict';
alert("Start 5_Polyfill1_vstrProtoPrototype"); 

let fruits = [1, 2, 3];
alert( fruits.length );         // 3
alert( [ 1, 2, 3].join("La") ); // 1La2La3

let arr = [ , , ];
alert(arr.length);              // 2 (ожидаем 3 - поколичеству запятьіх между елементами)
alert( [ , , ].join("La") );    // La

alert("End");

