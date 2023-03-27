/* JawaScript - getAverageAge_DateArrayMeth
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
*/
'use strict';

alert("Start getAverageAge_DateArrayMeth");

function getAverageAge(arr) {

    return arr.reduce( (sum, item) => sum + item.age, 0 ) / arr.length; // arr.length в тілі функції не вираховується!

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );

alert("End");
