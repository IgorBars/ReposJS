/* JawaScript - 1_getOwnPropertyDescriptor_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

Метод Object.getOwnPropertyDescriptor позволяет получить значение свойства и все его флаги..
 */
'use strict';


alert("Start 1_getOwnPropertyDescriptor_FlagsDescriptKonfigSvObj");

let user = {
    name: "John"        // по умолчанию у создаваемьіх литеральной нотацией свойств  значение флагов: true
};

// объект "descriptor", так называемый «дескриптор свойства» содержит значение свойства и все его флаги.
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');


alert( JSON.stringify(descriptor, null, 2) );  // null, 2 - для роздруківки у стовпчик
/* дескриптор свойства:
{
"value": "John",
"writable": true,        // по умолчанию у создаваемьіх литеральной нотацией свойств  значение флагов: true
"enumerable": true,
"configurable": true
}
*/

alert("End");