/* JawaScript - 74_export_as_default_ExpImpModul            export as default 
модуль user.js экспортирует одну сущность «по умолчанию» и несколько именованных (редкий, но возможный случай):
*/
'use strict';
alert("Start 74_export_as_default_ExpImpModul"); 


// 📁 user.js
export default class User {
    constructor(name) {
      this.name = name;
    }
}

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}



//Вот как импортировать экспорт по умолчанию вместе с именованным экспортом:

// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');


alert("End");

