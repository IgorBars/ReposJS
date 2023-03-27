/* JawaScript - HW_keys_Map, Set*/
'use strict';

alert("Start HW_keys_Map, Set");

let map = new Map();

map.set("name1", "John");
map.set("name2", "Alex");

let keys = Array.from(map.keys()) ;
alert("keys.length: " + keys.length); 
alert("keys: " + keys);

keys.pop("name2");
alert("keys.length: " + keys.length);
alert("keys: " + keys);
keys.push("more");
alert("keys: " + keys);

alert("End"); 
