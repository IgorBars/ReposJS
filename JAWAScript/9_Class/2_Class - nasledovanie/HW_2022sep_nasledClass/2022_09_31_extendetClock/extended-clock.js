/* JawaScript - Ex_ExtendedClock_nasledClass 
*/
'use strict';


class ExtendedClock extends Clock {
    constructor({ template }, precision) {
        super({ template });
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let extendedClock = new ExtendedClock({ template: 'h:m:s' }, 5000);

extendedClock.start();


alert("End");

