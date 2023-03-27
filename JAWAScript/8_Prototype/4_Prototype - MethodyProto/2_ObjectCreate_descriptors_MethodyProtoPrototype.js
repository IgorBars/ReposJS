/* JawaScript - 2_ObjectCreate_descriptors_MethodyProtoPrototype

*/
'use strict';
alert("Start 2_ObjectCreate_descriptors_MethodyProtoPrototype");


let animal = {
    eats: true
};

let rabbit = Object.create(animal, {
    "jump": {                           // синтаксис Object.defineProperty
        value: true
    }
});

alert(rabbit.jump); // true

let descrRab = Object.getOwnPropertyDescriptors(rabbit);

alert(JSON.stringify(descrRab,  null, 4));
/* дескриптор свойств:
{
"value": "jump",
"writable": false,        // по умолчанию у создаваемьіх Object.defineProperty свойств значение флагов: false
"enumerable": false,
"configurable": false
}
*/

alert("End");

