/* JawaScript - которая принимает массив объектов со свойством age 
и возвращает средний возраст */
'use strict';

alert("Start getAverageAge_2021_ArrayDate");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//     let sum = 0;
//     for(let i = 0; i <= users.length - 1; i++ ) {
//         sum += users[i].age;
//     }
//     return sum / users.length;
// }

function getAverageAge(users) {
       
    return users.reduce((sum, users) => sum + users.age, 0) / users.length;

}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


alert("End");
