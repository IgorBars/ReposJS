/* JawaScript - 4_getOwnPropertyDescriptorS_OBJKonf

Object.getOwnPropertyDescriptorS    - Получение всех свойств объекта с флагами конфигурации (скрытыми атрибутами)
writable, enumerable, configurable 

Object.getOwnPropertyDescriptors(user, 'name', 'age')   або     Object.getOwnPropertyDescriptors(user)
*/
'use strict';

alert("Start 4_getOwnPropertyDescriptorS_OBJKonf");

let user = {
    name: "Alex",
    age: 39
};

alert(JSON.stringify(user, null, 2));   // видимые свойства объекта (+ for..in  и Object.keys)
/*
{
"name": "Alex",
"age": 39
}
*/


let descriptors = Object.getOwnPropertyDescriptors(user, 
    "name",
    "age"
);

alert(JSON.stringify(descriptors, null, 2));    // дескриптор свойств объекта
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

descriptors = Object.getOwnPropertyDescriptors(user);
alert(JSON.stringify(descriptors, null, 2));    // дескриптор свойств объекта


alert("End");

