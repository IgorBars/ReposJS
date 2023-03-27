/* JawaScript - func_bind_setTimeout_DecorFUNCAdv.
    Як зберегти  this при передачі методу об'єкту

у функций есть встроенный метод bind, который позволяет зафиксировать this.
    let boundFunc = func.bind(context);
 */
'use strict';

alert("Start func_bind_setTimeout_DecorFUNCAdv");


let user = {
    firstName: "Вася",
    sayHi() {
      alert(`Привет, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)

sayHi(); // Привет, Вася!

setTimeout(sayHi, 1000); // Привет, Вася!



// В строке (*) мы берём метод user.sayHi и привязываем его к user. Теперь sayHi – это «связанная» функция, 
// которая может быть вызвана отдельно или передана в setTimeout (контекст всегда будет правильным).
alert("End");
