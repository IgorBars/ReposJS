/* JawaScript - 3_clone_proto_MethodyProtoPrototype

Створити клон об'єкту obj з тим самим як у нього прототипом (властивістю [[Prototype]] на прототип obj)

[ альтернатива Object.defineProperties({}, Object.getOwnPropertyDescriptors(user)) + властивість [[Prototype]]]
*/
'use strict';
alert("Start 3_clone_proto_MethodyProtoPrototype");

let animal = {eats: true};                     // прототип

let rabbit = Object.create(animal, {           // оригінальний об'єкт (+ власт jump) rabbit з прототипом animal
    "jump": {
        value: true,
        configurable: true
    }
});

// клон об'єкту rabbit i з його ж прототипом:
let cloneRabbit = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit)); 

let descrCloneRabbit = Object.getOwnPropertyDescriptors(cloneRabbit);

alert(JSON.stringify(descrCloneRabbit,  null, 4));
/* дескриптор свойств:
{
"value": "jump",
"writable": false,        // по умолчанию у создаваемьіх Object.defineProperty свойств значение флагов: false
"enumerable": false,
"configurable": true
}
*/

alert("End");

