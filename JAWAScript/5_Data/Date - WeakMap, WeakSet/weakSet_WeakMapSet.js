/* JawaScript - WeakMapSet*/
'use strict';

alert("Start weakSet_WeakMapSet");

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
alert(".has(john): " + visitedSet.has(john)); // true

// проверим, заходил ли Pete?
alert(".has(Pete): " + visitedSet.has(pete)); // true

// проверим, заходила ли Mary?
alert(".has(mary): " + visitedSet.has(mary)); // false

john = null;

// проверим, есть ли в списках John?
alert("john = null => .has(john): " + visitedSet.has(john)); // false

// проверим, есть ли в списках Pete?
alert("Pete = null => .has(Pete): " + visitedSet.has(pete)); // true

alert("End");
