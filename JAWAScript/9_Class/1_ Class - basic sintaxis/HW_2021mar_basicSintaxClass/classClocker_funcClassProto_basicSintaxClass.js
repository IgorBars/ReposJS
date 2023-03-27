/* JawaScript - classClocker_funcClassProto_basicSintaxClass 

*/
'use strict';

alert("Start classClocker_funcClassProto_basicSintaxClass");    // ЗАПУСКАТЬ В КОНСОЛИ!!!

class Clocker {
    
    constructor({ template }) {
      this.template = template;              // this. - чтобы было видно в целом Clocker
    }

    render() {
      let date = new Date();                 // let - чтобы не было видно вне render
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {                // метод "останова"
      clearInterval(this.timer);
    }
  
    start() {                // метод "запуска"
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    }
  
  }
  
  let clocker = new Clocker({template: 'h:m:s'});
  
  clocker.start();
  setInterval(() => clocker.stop(), 10000); // останавливаем через 10 сек

alert("End");

