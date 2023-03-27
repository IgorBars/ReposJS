/* JawaScript - orig_clock_basicSintaxClass 

*/
'use strict';
alert("Start orig_clock_basicSintaxClass");  // ЗАПУСКАТЬ В КОНСОЛИ!!!

// function Clock({ template }) {           // констр об'єкту приймає параметр об'єкт { template }
function Clock( template ) {                // констр об'єкту приймає параметр string-змінна  template

// timer і render при створенні об'єкту стають його унікальним лексичним оточенням, але невидимі користувачу

    let timer;                      // локальна змінна конструктора Clock, унікальне лексичне оточення кожного об'єкту
  
    function render() {             // функція конструктора Clock, унікальне лексичне оточення кожного об'єкту
      let date = new Date();        // date - локальна змінна конструктора Clock, унікальне лексичне оточення кожного об'єкту
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {              // метод об'єкту
      clearInterval(timer);               // timer без this, бо локальна змінна не самого об'єкту, а його лексичного оточення
    };
  
    this.start = function() {             // метод об'єкту
      render();                           // render без this, бо функція не самого об'єкту, а його лексичного оточення
      timer = setInterval(render, 1000);
    };
  
}

// let clock = new Clock({template: 'h:m:s'});
let clock = new Clock('h:m:s');

alert(Object.getOwnPropertyNames(Clock));          // length,name,prototype
alert(Object.getOwnPropertyNames(clock));          // stop,start - властивості об'єкту clock
alert(Object.getOwnPropertyNames(Clock.prototype)); // constructor

clock.start();


alert("End");

