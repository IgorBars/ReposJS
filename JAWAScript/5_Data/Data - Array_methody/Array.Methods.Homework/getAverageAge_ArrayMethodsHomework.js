/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start getAverageAge_ArrayMethodsHomework");


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// function getAverageAge(arrey) {
//     let sumage = 0;
//     arrey.forEach(element => {
//         sumage += +element.age;
//     });
//     let averAge = sumage / arrey.length;
//     return averAge;
// }return

// function getAverageAge(arrey) {

//     return arrey.map(item => item.age).reduce((sum, current) => 
//     sum + current, 0) / arrey.length;
//     }

function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
      }

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

alert("End");
