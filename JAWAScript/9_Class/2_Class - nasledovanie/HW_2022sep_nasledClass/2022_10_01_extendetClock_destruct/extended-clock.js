/* JawaScript - extended-clock 
*/
'use strict';


class ExtendedClock extends Clock {
    constructor( options ) {   // приймає у options об'єкт {template: 'h:m:s', precision: 5000}

            // передаємо у змінну options класу-прототипу Clock об'єкт {template: 'h:m:s', precision: 5000}
        super( options );    

            // з об'єкту {template: 'h:m:s', precision: 5000} деструктивно присвоює змінну precision
        let { precision = 1000 } = options;  // за замовчуванням: precision = 1000

        this.precision = precision;             // присвоєння значення змінної precision у властивість this.precision
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}




