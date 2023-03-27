/* JawaScript - getset2_DefineProperties_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';
alert("Start getset2_DefineProperties_accessPropObjKonfigProp");

let user = {};

Object.defineProperties(user, {
  _name: { value: 'John', configurable: true },                 // writable: false
  name: {
    get() {
      return this._name;
    },

    set(val) {
        // this._name = val;                                    ПОМИЛКА! _name: writable: false
        Object.defineProperty(this, '_name', { value: val });   //  ?
    },
  },
});

user.name = 'Alex'; alert("user.name: " + user.name);          // Alex
user.name = 'Ann'; alert("user.name: " + user.name);           // Ann   ?
// user._name = 'Max';                                         // ПОМИЛКА! _name: writable: false
alert("user._name: " + user._name);                            // Ann

// let descriptors = Object.getOwnPropertyDescriptors(user, 
//     "name",
//     "age"
// );

// alert(JSON.stringify(descriptors, null, 2));
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

// alert(Object.keys(user));           // name     (серед ключів тільки name, у ключа age: enumerable: false)

// user.name = "John";
// user.age = 39;

// alert(user.name);   // John
// alert(user.age);    // 39 

// user.name = "Ann";
// user.age = 37;

// alert(user.name);   // John
// alert(user.age);    // 39 

// // delete user.age;   // помилка (неможна видаляти властивість з флагом configurable: false)
// delete user.name;
// alert(user.name);   // undefined (не має такої властивості)


alert("End");

