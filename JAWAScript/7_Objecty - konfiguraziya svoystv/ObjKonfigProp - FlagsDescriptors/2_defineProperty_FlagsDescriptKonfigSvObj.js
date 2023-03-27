/* JawaScript - 2_defineProperty_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

Метод Object.defineProperty(obj, propertyName, descriptor) - для задания/изменения флагов.

    Если свойство существует, Object.defineProperty обновит его флаги.

    В противном случае метод создаёт новое свойство с указанным значением и флагами; 
если какой-либо флаг не указан явно, ему присваивается значение false.

 */
'use strict';

alert("Start 2_defineProperty_FlagsDescriptKonfigSvObj");


let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  writable: true                         // вказаному явно флагу присвоюєм значення true.
});                                     // не вказаним явно флагам присвоюється значення false.

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": true,
  "enumerable": false,                         // не вказаним явно флагам були присвоєні значення false.
  "configurable": false
}
*/

Object.defineProperty(user, "name", {
  writable: false,
  //configurable: true                        // при спробі змінити configurable:false => true => ПОМИЛКА
});
alert( JSON.stringify(descriptor, null, 2 ) );                              
/*
{
  "value": "John",
  "writable": true,       // при спробі змінити флаги, коли configurable: false =>  без змін (але без ПОМИЛКИ)
  "enumerable": false,
  "configurable": false
}
*/


delete user.name; alert(user.name);          // ПОМИЛКА - заборонено видаляти властивість при    configurable: false


alert("End");