/* JawaScript - 5_imp_as_ExpImpModul            imp as 
Мы также можем использовать as, чтобы импортировать под другими именами.
*/
'use strict';
alert("Start 5_imp_as_ExpImpModul"); 


// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!



alert("End");

