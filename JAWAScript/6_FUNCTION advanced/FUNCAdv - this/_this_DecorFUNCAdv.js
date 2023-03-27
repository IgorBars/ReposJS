/* JawaScript - _this_DecorFUNCAdv.
    Як зберегти (передати) this в setTimeout
 */
'use strict';

alert("Start _this_DecorFUNCAdv");

let user = {
    firstName: "Вася",
    sayHi() {
      alert(`Привет, ${this.firstName}!`);
    },
};

setTimeout(user.sayHi, 1000);                 // Привет, undefined!
//   let f = user.sayHi;
// setTimeout(f, 1000); // контекст user потеряли
//Метод setTimeout в браузере имеет особенность: он устанавливает this=window


// обернуть вызов в анонимную функцию, создав замыкание:
setTimeout(() => user.sayHi(), 1000); // Привет, Вася!

alert("End");
