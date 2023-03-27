/* JawaScript - проверка идеи стирания инф в weakMap после уничтожения
объекта, который является ключом к этой инф*/
'use strict';

alert("Start weakMap2_WeakMapSet");

let kacheWeakMap = new WeakMap();          // user: count                                           ВАРІАНТ З WEAKMAP

function counter(user) {

    let count = kacheWeakMap.get(user) || 0;

    kacheWeakMap.set(user, count + 1);
}

let john = {"name": "John"};

counter(john);
alert( kacheWeakMap.get(john) ); // 1
counter(john);
alert( kacheWeakMap.get(john) ); // 2

alert( "kacheMap.has(john): " + kacheWeakMap.has(john) );               // true



// після знищення об'єкта, у WeakMap ЗНИЩУЄТЬСЯ і сам ОБ'ЄКТ як ключ, і ДАНІ для цього ключа


john = null;
alert( "john =null: kacheMap.get(john): " + kacheWeakMap.get(john) );       // undefined
alert( "john =null: kacheMap.has(john): " + kacheWeakMap.has(john) );    // false



alert("End");
