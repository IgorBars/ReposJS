/* JawaScript - getset_DefineProperties_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';

alert("Start getset_DefineProperties_accessPropObjKonfigProp");

let user = {};

Object.defineProperties( user, {
    "name": { get() {return this._name;}, set(value) {this._name = value;}, enumerable: true, configurable: true },
    "age": { get() {return this._age;}, set(value) {this._age = value;} }  // enumerable: false, configurable: false
});

let descriptors = Object.getOwnPropertyDescriptors(user, 
    "name",
    "age"
);

alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "name":{
        "enumerable": false,
        "configurable": false
    },
    "age":{
        "enumerable": false,
        "configurable": false
    }
}
*/

// Object.defineProperty(user, 'age', {
//     enumerable: true                                // Ошибка! (age: configurable: false)
// });

alert(Object.keys(user));           // name     (серед ключів тільки name, у ключа age: enumerable: false)

user.name = "John";
user.age = 39;

alert(user.name);   // John
alert(user.age);    // 39 

user.name = "Ann";
user.age = 37;

alert(user.name);   // John
alert(user.age);    // 39 

// delete user.age;   // помилка (неможна видаляти властивість з флагом configurable: false)
delete user.name;
alert(user.name);   // undefined (не має такої властивості)
alert("End");

