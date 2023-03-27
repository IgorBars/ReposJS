/* JawaScript - Exercise. Конструктор объекта - калькулятор */
'use strict';

alert("Start Exercise_constr_Calc_obj");


function Calculator() {

    this.read = function() { // при созд объ добавит метод в него (в this)
        this.a = +prompt("Вв. a:", 0);//при созд объ добавит свойство а в него
        this.b = +prompt("Вв. a:", 0);
    };
    
    this.sum = function () {
        return this.a + this.b;
    };
    
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


alert("End");