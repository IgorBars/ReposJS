/* JawaScript - 7_export_default_ExpImpModul            export default 
Модули предоставляют специальный синтаксис export default («экспорт по умолчанию») для модуля, который объявляет что-то одно, 
например модуль user.js экспортирует только class User
*/
'use strict';
alert("Start 7_export_default_ExpImpModul"); 

export function sayHi(user) { // "именованньій" єкспорт
  alert(`Hello, ${user}!`);
}





// 📁 user.js
export default class User { // єкспорт "ао умолчанию"         (в файле может быть не более одного export default.)
    constructor(name) {
      this.name = name;
    }
}

// …И потом импортируем без фигурных скобок:

// 📁 main.js
import User from './user.js'; // не {User}, просто User

new User('John');


alert("End");

