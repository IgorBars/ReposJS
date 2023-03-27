/* JawaScript - 6_exp_as_ExpImpModul            exp as 
Мы также можем использовать as, чтобы импортировать под другими именами.
*/
'use strict';
alert("Start 6_exp_as_ExpImpModul"); 


// 📁 say.js
export {sayHi as hi, sayBye as bye};

//...

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!         (а не say.sayHi)
say.bye('John'); // Bye, John!


alert("End");

