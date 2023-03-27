/* JawaScript - Замыкания */
'use strict';


alert("Start HW_objCounter_ZamykFUNCAdv");


function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}

// Створюємо об'єкт counter з методами up, down (з власним лексичним псевдореальним оточенням і початковим значенням count = 0)
let counter = new Counter();
  
alert( counter.up() );   // 1
alert( counter.up() );   // 2
alert( counter.down() ); // 1

alert("End");
 