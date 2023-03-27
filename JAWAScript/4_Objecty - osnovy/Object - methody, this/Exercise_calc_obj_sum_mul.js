/* JawaScript - калькулятор с методами - сохр, сум, умн */
'use strict';

alert("Start Exercise_calc_obj_sum_mul");

let calculator = {                  // созд. объект
    read() {
        this.a = +prompt("Вв а:");  // сохр в свойства объ. calculator
        this.b = +prompt("Вв b:");
    },

    sum() {
        return this.a + this.b; // значения из свойств объ. calculator
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


alert("End");