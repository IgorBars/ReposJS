/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start Sort_ArrayMethodsHomework");

let vasya = { name: "Вася", surname: "Пупкин", id: 105, ip: "E", retiredate: "March 12, 2014" };
let petya = { name: "Петя", surname: "Иванов", id: 35, ip: "C", retiredate: "June 2, 2023" };
let masha = { name: "Маша", surname: "Петрова", id: 3, ip: "B", retiredate: "December 20, 2036" };
let yulia = { name: "Юля", surname: "Санина", id: 44, ip: "D", retiredate: "April 30, 2020" };
let nastia = { name: "Настя", surname: "Гуркина", id: 5, ip: "A", retiredate: "April 10, 2022" };

let users = [vasya, petya, masha, yulia, nastia];
users.forEach(item => alert(item.id + item.ip + " " + item.name + " "
 + item.surname + " " + item.retiredate));
// let num = [23, 56, 76, 32, 13];
// alert(num);


// let wort = ["Sara", "Bob", "Bully", "Amy", "Alex"];
// alert("wort" + wort);
// wort.sort();             //простая строчная сортировка массива строк
// alert("wort" + wort);


// num.sort(function(a, b) { // числовая сортировка function-return массива чисел
//     return a - b;
// }
// );
// alert(num);

// num.sort((a, b) => //числовая сортировка стрелкой массива чисел
//     a - b
// );
// alert(num);


users.sort((item1, item2) => // числовая сортировка массива объектов по дате
    new Date (item1.retiredate) - new Date (item2.retiredate)
);



// users.sort((item1, item2) => // числовая сортировка массива объектов
//     item1.id - item2.id
// );

// users.forEach(item => alert(item.id + item.ip + " " + item.name + " "
//  + item.surname + " " + item.retiredate));

//*строчная сортировка массива объектов по свойству ip
// users.sort(function(item1, item2) {
//     if (item1.ip.toLowerCase() > item2.ip.toLowerCase()) return 1;
//     if (item1.ip.toLowerCase() < item2.ip.toLowerCase().toLowerCase()) return -1;
//     return 0
// }   
// );

//строчная сортировка массива объектов по свойству name
// users.sort(function(item1, item2) {
//     if (item1.name.toLowerCase() > item2.name.toLowerCase()) return 1;
//     if (item1.name.toLowerCase() < item2.name.toLowerCase().toLowerCase()) return -1;
//     return 0
// }   
// );



users.forEach(item => alert(item.id + item.ip + " " + item.name + " "
 + item.surname + " " + item.retiredate));

alert("End");
