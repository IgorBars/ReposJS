/* JawaScript - delay_DecorFUNCAdv.
Создайте декоратор delay(f, ms), который задерживает 
каждый вызов f на ms миллисекунд.
 */
'use strict';

alert("Start delay_DecorFUNCAdv");

let worker = {
    slow() {
        return "test";
      },

      f(x, y) {
        alert("Called with: " + x +"," + y);
        alert( "Context: " + this.slow() );
        alert( "серия отработана");
      }
};
  
function delay (func, ms) {

    return function (...args) {
        //если вынуждены в ф прописывать параметры - объявляем её в ретерне
        // setTimeout( func.apply(this, arguments), ms );      //
        setTimeout(() => func.apply(this, args), ms);           //
        // setTimeout(() => func.call(this, ...args), ms);         //

        // let savedThis  = this;
        // setTimeout(function() {
        //     func.call(savedThis , ...args)}, ms);
    };
}

worker.f1000 = delay(worker.f, 1000);
worker.f1500 = delay(worker.f, 1500);
// let fDecor = delay(worker.f, 2000);

worker.f1000(1, 2); // показывает "test" после 1000 мс
worker.f1500(3, 4); // показывает "test" после 1500 мс


// let timerId = setTimeout(f, 1000, "test");

alert("End");
