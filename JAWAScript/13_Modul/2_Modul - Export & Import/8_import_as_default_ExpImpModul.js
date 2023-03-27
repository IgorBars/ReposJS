/* JawaScript - 8_import_as_default_ExpImpModul            import as default 
Если мы импортируем всё как объект import *, тогда его свойство default – как раз и будет экспортом по умолчанию:
*/
'use strict';
alert("Start 8_import_as_default_ExpImpModul"); 


// 📁 main.js
import * as user from './user.js';

let User = user.default; // экспорт по умолчанию
new User('John');


alert("End");

