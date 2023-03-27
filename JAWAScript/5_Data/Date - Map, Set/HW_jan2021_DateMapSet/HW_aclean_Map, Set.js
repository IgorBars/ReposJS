/* JawaScript - HW_aclean_Map, Set*/
'use strict';

alert("Start HW_aclean_Map, Set");

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    

// function aclean(arr) {

//     let arrMap = new Map();

//     for(let word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         arrMap.set(sorted, word); //значения содинаковыми ключами перезаписываются
//     }

//     return Array.from(arrMap.values());//итерируемый объект значений из объекта Map 
// }

// alert( aclean(arr) );


function aclean(arr) {//с пом Object (только для строчных элементов массива)
    let sortobj = {};
    let valueobj = {};

    for (let i = 0; i < arr.length; i++) {
      let sortedStr = arr[i].toLowerCase().split("").sort().join("");
      sortobj[sortedStr] = arr[i];// т.к. св sortedStr явл str, можно исп объект
    }// значения содинаковыми ключами перезаписываются
  
    valueobj = Object.values(sortobj);

    alert( "valueobj: " + valueobj );

    return valueobj;
}
  
  
alert( aclean(arr) );

alert("End"); 
