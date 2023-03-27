/* JawaScript - Замыкания. Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

 */
'use strict';


alert("Start objCounter_FUNCAdv");

function Counter() {  // конструктор об'єкту
    let count = 0;
  
    this.up = function() {  // метод об'єкту
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}

// Створюємо об'єкт counter з методами up, down (з власним лексичним псевдореальним оточенням і початковим значенням count = 0)
let counter = new Counter();  


alert( counter.up() ); //    1
alert( counter.up() ); //    2
alert( counter.down() ); //  1



alert("End");
