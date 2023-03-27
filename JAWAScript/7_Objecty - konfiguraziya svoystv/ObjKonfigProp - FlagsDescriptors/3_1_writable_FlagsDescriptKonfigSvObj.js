/* JawaScript - 3_1_writable_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

значение флага      writable: false     - делает свойство user.name доступным только для чтения
 */
'use strict';

alert("Start 3_1_writable_FlagsDescriptKonfigSvObj");
 // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

let user = {
    name: "John"    // writable: true, enumerable: true, configurable: true
};

Object.defineProperty(user, "name", {
    writable: false   // enumerable: true, configurable: true
});

user.name = "Pete";  // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'


alert("End");