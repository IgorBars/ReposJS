/* JawaScript - 1_ObjectCreate_MethodyProtoPrototype

*/
'use strict';
alert("Start 1_ObjectCreate_MethodyProtoPrototype");


let animal = {

    eats: true
}

let bird = {

    fly: true
}

let rabbit = Object.create(animal);

alert(rabbit.eats);                              // true

alert(Object.getPrototypeOf(rabbit) == animal); // true

Object.setPrototypeOf(rabbit, bird);            // змінимо прототип rabbit з animal на bird

alert(rabbit.fly);                               // true




alert("End");

