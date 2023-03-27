/* JawaScript - setTimeout_declarFunc_arrowFuncFUNCAdv.

У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи, в лекс. окружении внешн ф-ии.

Звичайна функція (Function Declaration) у forEach і setTimeout екранується і лишається без this .

 */
'use strict';

alert("Start setTimeout_declarFunc_arrowFuncFUNCAdv");
// для Function Declaration у setTimeout мусимо передавати через обгортку також додаткові змінні this, arguments

function defer(f, ms) {

    return function(...args) {  // обгортка мусить передати arguments через додаткову змінну args у setTimeout

      let ctx = this;  alert("ctx: " + ctx); // мусимо створити додаткову змінну ctx для передачі this у setTimeout

      setTimeout(function() {          // setTimeout екранує this, arguments, але ми передали їх змінними args, ctx
        return f.apply(ctx, args);
      }, ms);
    };
}// тобто у обгортці записуємо у локальні змінні this і args,
// а потім використовуємо ці змінні у setTimeout у "безголовій" Function Declaration


function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000); // обгортка, як приймач попередніх даних із лексичного оточення defer- sayHi і t-затримки

// обгорнута ф-ція приймає на обробку лише свої "текучі" дані ("John") у аргументи:
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды

// // this тут не використовуєм (ф-я - не метод об'єкту)

alert("End");
