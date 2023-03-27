/* JawaScript - Ex_classClock_basicSintaxClass 

*/
'use strict';
alert("Start orig_clock_basicSintaxClass");  // ЗАПУСКАТЬ В КОНСОЛИ!!!

class Clock {
        constructor({ template }) {          // переменная template в фигурньіх скобках {} для деструктивного присваивания
    // constructor( template ) {              // вариант с простой переменной
        this.templ = template;                // присваиваем string-значение template в свойство об'ьекта templ
    }
    
    // timer;                                 // можна задати властивість явно

    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.templ
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);                  // неявне "об'явлення" властивості timer
    };// setInterval єкранирует this, но стрел.функц берет this снаружи
  
}

let clock = new Clock({template: 'h:m:s'});         // об'єкт {template: 'h:m:s'}
// let clock = new Clock('h:m:s');                  // вариант с простой переменной

alert(Object.getOwnPropertyNames(Clock));           // length,name,prototype
alert(Object.getOwnPropertyNames(clock));           // timer,templ                    (властивості об'єкту clock)
alert(Object.getOwnPropertyNames(Clock.prototype)); // constructor,render,stop,start

clock.start();


alert("End");

