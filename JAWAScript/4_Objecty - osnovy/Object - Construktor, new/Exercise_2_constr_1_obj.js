/* JawaScript - Два конструктора создают один объект */
'use strict';

alert("Start Exercise_2_constr_1_obj");

function A() { return {}; }

function B() { return a; }

let a = new A();
let b = new B();

alert( a == b ); // true



// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

alert("End");