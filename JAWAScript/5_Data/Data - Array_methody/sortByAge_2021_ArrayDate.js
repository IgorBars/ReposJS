/* JawaScript - принимает массив объектов со свойством age и 
сортирует их по нему */
'use strict';

alert("Start sortByAge_2021_ArrayDate");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "AМаша", age: 28 };

let arr = [ vasya, petya, masha ];
alert(arr[0].name); // Вася
alert(arr[1].name); // Петя
alert(arr[2].name); // Маша

function sortByAge(users) {

    users.sort((item1, item2) => ( 
        item1.age - item2.age,
        item1.name > item2.name ? 1 : -1
    ));
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

alert("End");
