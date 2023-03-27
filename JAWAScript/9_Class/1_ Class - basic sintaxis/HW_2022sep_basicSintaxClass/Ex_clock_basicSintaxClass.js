/* JawaScript - Ex_clock_basicSintaxClass 

*/
'use strict';
alert("Start Ex_clock_basicSintaxClass");  // ЗАПУСКАТЬ В КОНСОЛИ!!!



// ((((((помилково всі змінні об'явлені через this))))))
class Clock {
    // function Clock({ template }) {
    constructor(template) {                 // параметр template приймаємо у constructor параметрів
      this.template = template;
      // console.log(this.template);
    }                                       // без роздільних ; для методів
  
    timer = 0;                              // об'ява властивості без let/this
  
    render() {                              // без let/this скорочений синтаксис методу
      this.date = new Date();               // А В МЕТОДІ ЗМІННА ОБ'ЯВЛЯЄТЬСЯ ЧЕРЕЗ this !!!
  
      this.hours = this.date.getHours();
      if (this.hours < 10) this.hours = '0' + this.hours;
  
      this.mins = this.date.getMinutes();
      if (this.mins < 10) this.mins = '0' + this.mins;
  
      this.secs = this.date.getSeconds();
      if (this.secs < 10) this.secs = '0' + this.secs;
  
      this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);
  
      console.log(this.output);
    }
  
    stop() {                              // без let/this скорочений синтаксис методу
      clearInterval(this.timer);
    }
  
    start() {                              // без let/this скорочений синтаксис методу
      this.render();
      this.timer = setInterval(() => this.render(), 1000);  // setInterval єкранирует this, но стрел.функц берет this снаружи
    }
}

// let clock = new Clock({template: 'h:m:s'});
let clock = new Clock('h:m:s');
clock.start();


alert("End");

