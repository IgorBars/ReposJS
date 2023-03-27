/* JawaScript - setTimeout_declarFunc_arrowFuncFUNCAdv.

У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи, із лексичного оточення 
зовнішньої функції.

У стрелочных функций также нет переменной arguments.
 */
'use strict';

alert("Start setTimeout_declarFunc_arrowFuncFUNCAdv");


function defer(f, ms) {
    return function() { // функція-обгортка із this, arguments у своєму лексичному оточенні
                                                
      setTimeout(() => f.apply(this, arguments), ms)        // setTimeout екранує this, arguments
    };  //але стрілкова функція за замовчуванням бере  this, arguments  із зовнішнього контексту (із обгортки)
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);

sayHiDeferred("John"); // "John" у складі arguments із обгортки бере за замовчуванням стрілкова функція 

// this тут не використовуєм (ф-я - не метод об'єкту)

alert("End");
