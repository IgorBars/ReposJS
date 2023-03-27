/* JawaScript - 1symbol_znakomctvo_obj */
'use strict';

alert("Start 1symbol_znakomctvo_obj");

// Символ - это переменная, хранящая ссылку на своё имя(описание)

let id1 = Symbol("id");
let id2 = Symbol("id");

let id1_clon = id1;   //Копируем ссылку на тот же символ

alert(`Символы:  ${id1 == id2}`); // false
alert(`Один cимвол:  ${id1 === id1_clon}`); // true

//  Многократные вызовы команды Symbol.for с одним и 
//  тем же аргументом возвращают один и тот же символ.
let id = Symbol.for("id");
let idAgain = Symbol.for("id");
alert(`Один cимвол:  ${id === idAgain}`); // true


let obj1 = {name: "Alex"};
let obj2 = {name: "Alex"};

let obj1_clon = obj1;   //Копируем ссылку на тот же объект

alert(`Объекты:  ${obj1 == obj2}`); // false
alert(`Один объект:  ${obj1 === obj1_clon}`); // true


let id3 = Symbol("id_name");
alert(id3.toString()); // Symbol(id_name) - неявное преобразование не работает
alert(id3.description); // id_name




alert("End");

