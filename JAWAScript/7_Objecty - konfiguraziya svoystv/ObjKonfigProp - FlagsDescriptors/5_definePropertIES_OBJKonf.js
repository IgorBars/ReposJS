/* JawaScript - 5_definePropertIES_OBJKonf 
- Изменение флагов конфигурации (скрытых атрибутов) свойств объекта
writable, enumerable, configurable 

Mетод Object.defineProperties(obj, descriptors) позволяет определять множество свойств сразу.

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
*/
'use strict';

alert("Start 5_definePropertIES_OBJKonf");

let user = {};

Object.defineProperties(user, {
    "name": {value: "Alex", configurable: true, enumerable: true},      // writable: false
    "age": {value: 39, configurable: true}           // enumerable: false,  writable: false
});

alert("user.name: " + user.name);      // Alex
alert(JSON.stringify(user, null, 2));   // свойства объекта (не выводятся, если флаг enumerable - false)
/*
{
"name": "Alex"
}
*/

let descriptors = Object.getOwnPropertyDescriptors(user, // дескриптор свойств объекта c флагами конфигураци
    "name",
    "age"
);

alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "name":{
        "value": "Alex",
        "writable": false,
        "enumerable": true,
        "configurable": true
    },
    "age":{
        "value": 39,
        "writable": false,
        "enumerable": false,
        "configurable": true
    }
}
*/

Object.defineProperties(user, {
    "name": {value: "Alex", writable: true},                // (configurable: true, enumerable: true)
    "age": {value: 39, writable: true, enumerable: true}    // (configurable: true)
});

descriptors = Object.getOwnPropertyDescriptors(user, 
    "name",
    "age"
);

alert(JSON.stringify(descriptors, null, 2)); // дескриптор свойств объекта c флагами конфигураци
/* дескриптор свойств:
{
    "name":{
        "value": "Alex",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "age":{
        "value": 39,
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}
*/


alert("End");

