/* JawaScript - camelize_DateArrayMeth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
*/
'use strict';

alert("Start camelize_DateArrayMeth");

// function camelize(str) {

//     let arr = str.split("-");

//     for(let i = 1; i <= arr.length - 1; i++) {

//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
    
//     return arr.join("");

// }

function camelize(str) {

    return str.split("-")

    .map((word, index) => index === 0? word: word[0].toUpperCase() + word.slice(1))
    
    
    .join("");
}





alert( camelize("background-color") ); // 'backgroundColor';
alert( camelize("list-style-image") );// 'listStyleImage';
alert( camelize("-webkit-transition") ); // 'WebkitTransition';

alert("End");
