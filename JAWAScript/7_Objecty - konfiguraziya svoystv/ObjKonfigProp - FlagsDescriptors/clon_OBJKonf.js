/* JawaScript - clon_OBJKonf Конфигурация свойств объекта
 - клонирование объекта.

 */
'use strict';

alert("Start clon_OBJKonf");

let user = {
    name: "Alex",
    age: 39,
  };

let cloneUser = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

alert(cloneUser.age);  // 39
alert(cloneUser.name); // Alex

alert("End");

// let clonUser = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user, {
//     "name": {value: "Alex", writable: true, enumerable: true, configurable: true},
//     "age": {value: 39, writable: true, enumerable: true, configurable: true},
//   }
// ));