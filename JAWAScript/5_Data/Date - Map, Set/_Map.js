/* JawaScript - Map -двумерный массив пар кл-зн, образованный через new Map() */
'use strict';

alert("Start _Map");

let map = new Map();

let map1 = new Map([[11, "Aple"], [22, "Tomato"], [33, "Potato"]]);
alert(map1.get(11));            //  Aple
for(let char of map1.keys())    //
alert("map1 keys: " + char);    // 11, 22, 33
for(let char of map1.values())
alert("map1 values: " + char);  // Aple, Tomato, Potato
for(let char of map1.entries())
alert("map1 entries: " + char); //11: Aple, 22: Tomato, 33: Potato

//  метод Object.fromEntries получает массив пар ключ-значение и 
// возвращает объект
let obj_from_map1 = Object.fromEntries(map1);
for(let char in obj_from_map1)
alert("obj_from_map1: " + char);//вывод ключей объекта obj_from_map1
alert("obj_from_map1[\"11\"]: " + obj_from_map1["11"]);//строчное свойство объекта цифрами в записи через точку не работает

let obj1 = {"name1": "name 1"};
obj1.name2 = "name 2";

map.set(1, "1&");
map.set(2, "2&");

//alert("obj(1)" + obj(1)); //так нельзя
alert("obj1[\"name1\"]: " + obj1["name1"]);//строчное свойство объекта строкой и в кв скобках
alert("obj1.name2: " + obj1.name2);//строчное свойство объекта строкой и через точку

//alert("map(1)" + map(1)); // так нельзя
//alert("map[1]" + map[1]); // так нельзя
alert("map.get(2): " + map.get(2));

alert("NEW"); 

//метод Object.entries получает объект и возвращает МАССИВ ПАР ключ-значение
let map_from_obj1 = new Map(Object.entries(obj1));

map_from_obj1.set("name3", "name3");

alert(map_from_obj1.get("name1"));  //  "name 1"

for(let char of map_from_obj1)

alert("map_from_obj1 char: " + char);   // name1: name 1, name2: name 2, name3: "name3

alert("End"); 
