/* JawaScript - Что нужно поправить в коде, чтобы вызов keys.push сработал? */

// реализация c Map
'use strict';

alert("Start HW_keyspush_MapSet_Data");

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");  // keys.push() - метод массивов
alert("keys[1]: " + keys[1]); 

alert("End"); 
