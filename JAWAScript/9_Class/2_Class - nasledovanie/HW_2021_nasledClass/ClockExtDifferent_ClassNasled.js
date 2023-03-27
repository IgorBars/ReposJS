/* JawaScript - Class 
Расширенные часы. Всего 3 файла (.html + .js (2шт.))
Запуск .html -файлом ClockDifferent_ClassNasled
*/
'use strict';

//  Запускать .html -файл!(ClockDifferent_ClassNasled)
// Смотреть - в отладчике! (F12)

class ClockExtDifferent extends Clock {// options - объект со свойствами template, precision, stopInterval
  // в этом классе деструктурирующим присваиванием присваиваем 
  // соотв. значения свойств precision и stopInterval объекту let {precision = 1000, stopInterval = 5000}
    constructor (options) {
        super(options); // передаем объект options в родительский класс
        let {precision = 1000, stopTimeout = 5000} = options;
        this.precision = precision;
        this.stopTimeout = stopTimeout;
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
      setTimeout(() => this.stop(), this.stopTimeout);
    }

}


alert("End");

