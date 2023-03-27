/* JawaScript - Деструктурирующее присваивание 
Деструктуризация массива */
// присваивание переменным значений из массива
//При присваивании от массива - шаблон переменных(скобки у переменных), как у массива!
'use strict';

alert("Start Destruct_Arr_DataDestrAss");

// let [fname, sname] = ["Ilya", "Korkman"];
let [fname, sname] = "Ilya Korkman".split(" ");
let [firstname, , titel] = "Julius Caesar Consul of the Roman Republic".split(" ");

alert("fname:  " + fname);
alert("sname:  " + sname);
alert("firstname:  " + firstname);  // Julius
alert("titel:  " + titel);          // Consul

let [a, b, c] = "abc";  // мы можем использовать любой перебираемый объект
alert("Set!");
let [one, two, three] = new Set([1, 2, 3]);
alert(`${a} ${b} ${c}`);
alert(`${one} ${two} ${three}`);

alert("Object!"); // Присваивайте чему угодно с левой стороны
let user = {};  // Объект
[user.name, user.surname] = "Ilya Kantor".split(' ');//массиву свойств объекта

alert(user.name); // Ilya
alert(user.surname); // Kantor

alert("цикл for-of Объекта");
    // Массиву ключ-значение в цикле for-of Объекта
    //ключи и значения Объекта придется преобразовать в массив методом
    //Object.entries(user)
user = {
    name: "John",
    age: 30
  };

for (let [key, value] of Object.entries(user)) { // цикл по ключам и значениям
    alert(`${key}: ${value}`); // name:John, затем age:30
}

alert("цикл for-of Map");
    // Массиву ключ-значение в цикле for-of Map-a
// Map - это массив, значит не нуждается в преобразовании в массив, как Объект
user = new Map();
user.set("name", "John");    // [ ["name", "John"] ]
user.set("age", "30");       // [ ["name", "John"], ["age", "30"] ]

for (let [key, value] of user) {    // user == user.entries() ( map.entries() )
  alert(`${key}: ${value}`); // name:John, затем age:30
}




alert("Остаточные параметры «…» ");
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Обратите внимание, что `rest` является массивом.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

let [...arr_rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
for(let char of arr_rest) alert("все Остаточные параметры: " + char);




alert("значения по умолчанию");
let [name3 = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name3);    // Julius (из массива)
alert(surname); // Anonymous (значение по умолчанию)

alert("End");
