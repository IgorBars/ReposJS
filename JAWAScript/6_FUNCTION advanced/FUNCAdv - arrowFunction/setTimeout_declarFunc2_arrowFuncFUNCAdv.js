/* JawaScript - setTimeout_declarFunc2_arrowFuncFUNCAdv.

 */
'use strict';

alert("Start setTimeout_declarFunc2_arrowFuncFUNCAdv");


let john = {
    name: "John",
    sayHi() {                         // для показового використання this в якості функції візьмемо метод об'єкту
        alert('Hello, ' + this.name);
    }
};

function defer(f, ms) {
    return function(...args) {
      let ctx = this;                 
                                    alert("ctx: " + ctx);             // ctx: [object Object] - об'єкт john
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    };
}

john.sayHi = defer(john.sayHi, 2000);   // створюєм обгортку для потрібних попередніх даних john.sayHi, t

john.sayHi();                           // выводит "Hello, John" через 2 секунды



alert("End");
