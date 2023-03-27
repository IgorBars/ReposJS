/* JawaScript - 1_import_module_dynamicImportModul                import(module)

Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, 
содержащий все его экспорты.

Использовать его мы можем динамически в любом месте кода, например, так:
*/
'use strict';
alert("Start 1_import_module_dynamicImportModul"); 


let modulePath = prompt("Какой модуль загружать?"); // './say.js'

import(modulePath)                                  // import('./say.js') 
  .then(obj => {/*<объект модуля>*/})
  .catch(err => {/*<ошибка загрузки, например если нет такого модуля>*/})





alert("End");

