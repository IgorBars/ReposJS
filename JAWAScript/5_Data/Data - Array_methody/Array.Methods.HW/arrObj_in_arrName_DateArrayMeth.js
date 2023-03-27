/* JawaScript - arrObj_in_arrName_DateArrayMeth
Трансформировать массив объектов в массив имён
*/
'use strict';

alert("Start arrObj_in_arrName_DateArrayMeth");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

//  метод .map()    повертає массив результатів
let names = users.map( item => item.name );

alert( names ); // Вася, Петя, Маша

alert("End");
