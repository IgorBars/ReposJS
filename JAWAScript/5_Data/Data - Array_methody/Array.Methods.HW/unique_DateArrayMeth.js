/* JawaScript - unique_DateArrayMeth
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
'use strict';

alert("Start unique_DateArrayMeth");




function unique(arr) {

    let obj = {};

    let uniqArr = [];

    for (let el of arr) {

        obj[el] = 0;
    }

    for (let key in obj) {

        uniqArr.push(key);    
    }

    return uniqArr;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
alert( unique(strings) ); // кришна, харе, :-O

alert("End");
