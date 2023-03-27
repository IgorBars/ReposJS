/* JawaScript - 3_3_configurable_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

configurable: false   - флаг неконфигурируемого свойства

Неконфигурируемое свойство не может быть удалено.

Например, свойство Math.PI – только для чтения, неперечислимое и неконфигурируемое:
 */
'use strict';

alert("Start 3_3_configurable_FlagsDescriptKonfigSvObj");


let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// Math.PI = 3;     // Ошибка –  свойство только для чтения не может быть изменено ("writable": false)

// delete Math.PI   // тоже не сработает (Неконфигурируемое свойство не может быть удалено)("configurable": false)

// Object.defineProperty(Math, "name", {configurable: true} ); // тоже не сработает (все флаги-фтрибутьі нельзя изменять)


                                                // !!!
// Установить значение флага    configurable: false   возможно лишь единождьі !!!

//Определение свойства как неконфигурируемого – это дорога в один конец. Мы не сможем отменить это действие, 
//потому что defineProperty не работает с неконфигурируемыми свойствами.    !!!

alert("End");