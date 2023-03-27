/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start sortByAge_ArrayMethodsHomework");


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
arr.forEach(it => alert(it.name + " " + it.age));

function sortByAge(arrey) {

    arrey.sort((arrey1, arrey2)  => (arrey1.age > arrey2.age)? 1: -1);
}
// function sortByAge(arrey) {

//     arrey.sort((arrey1, arrey2)  => arrey1.age - arrey2.age);
// }

// let sortByAge = (arrey) => {

//     arrey.sort((arrey1, arrey2)  => arrey1.age - arrey2.age)
// };

sortByAge(arr);

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
arr.forEach(it => alert(it.name + " " + it.age));


alert("End");
