/* JawaScript - 3_33_configurable_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

configurable: false   - флаг неконфигурируемого свойства

Неконфигурируемое свойство не может быть удалено.

Например, свойство Math.PI – только для чтения, неперечислимое и неконфигурируемое:
 */
'use strict';

alert("Start 3_33_configurable_FlagsDescriptKonfigSvObj");

let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    writable: true,
    enumerable: true
});                                     // не указанньім явно флагам присваивается значення false.

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": false
}
*/

Object.defineProperty(user, "name", {
    writable: false,                // только для writable допускается один раз изменение значення true => false.
    // enumerable: false,           /* при попьітке изменить enumerable даже на ухудшение:true => false => ОШИБКА */
    //configurable: true                        /* при попьітке изменить configurable:false => true => ОШИБКА */
});

descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );                              
/*
{
  "value": "John",
  "writable": false,
  "enumerable": true,
  "configurable": false
}

*/
// Object.defineProperty(user, "name", {
//     writable: true               /* при попьітке повторно изменить writable (false => true) => ОШИБКА */
// });

descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );



alert("End");