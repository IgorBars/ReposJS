/* JawaScript - проверка идеи стирания инф в weakMap после уничтожения
объекта, который является ключом к этой инф*/
'use strict';

alert("Start weakMap1_WeakMapSet");

let kacheMap = new Map();          // user: count                                           ВАРІАНТ З MAP

function counter(user) {

    let count = kacheMap.get(user) || 0;

    kacheMap.set(user, count + 1);
}

let john = {"name": "John"};

counter(john);
alert( kacheMap.get(john) ); // 1
counter(john);
alert( kacheMap.get(john) ); // 2

alert( "kacheMap.size: " + kacheMap.size );       // (1 для Map)

kacheMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`);              // [object Object]: 2
});



// після знищення об'єкта, у Map зберігаються і сам ОБ'ЄКТ як ключ, і ДАНІ для цього ключа


john = null;
alert( "john =null: kacheMap.get(john): " + kacheMap.get(john) );       // undefined
alert( "john =null: kacheMap.has(john): " + kacheMap.has(john) );       // false
alert( "john =null: kacheMap.size: " + kacheMap.size + "!!!");       // (1 для Map) РОЗМІР ЗАЛИШИВСЯ ПОПЕРЕДНІЙ
kacheMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`);              // [object Object]: 2
});

let entries = Array.from(kacheMap.entries());
alert(entries);                             // [object Object],2
for(let [key, value] of entries) {

    alert("key " + key); alert("value " + value);   // key [object Object]     value 2 
}

for(let [key, value] of kacheMap.entries()) {

    alert("key " + key); alert("value " + value);   // key [object Object]     value 2 
}



alert("End");
