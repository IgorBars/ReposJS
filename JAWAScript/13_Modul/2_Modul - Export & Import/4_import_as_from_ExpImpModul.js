/* JawaScript - 4_import_as_from_ExpImpModul           import * as 
если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя import * as <obj>.
*/
'use strict';
alert("Start 4_import_as_from_ExpImpModul"); 



// 📁 main.js
import * as say from './say.js';    // импорт всего из файла say.js

say.sayHi('John');                  // более длинньіе имена функций: say.sayHi() вместо sayHi()
say.sayBye('John');






// Но явное перечисление (import {sayHi, sayBye} from './say.js';) импортов делает код более понятным, позволяет увидеть, 
//что именно и где используется. Это упрощает поддержку и рефакторинг кода.


alert("End");

