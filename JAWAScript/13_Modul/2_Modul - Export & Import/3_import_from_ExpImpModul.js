/* JawaScript - 3_import_from_ExpImpModul           Импорт в фигурных скобках
Обычно мы располагаем список того, что хотим импортировать, в фигурных скобках import {...}
*/
'use strict';
alert("Start 3_import_from_ExpImpModul"); 



// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!




alert("End");

