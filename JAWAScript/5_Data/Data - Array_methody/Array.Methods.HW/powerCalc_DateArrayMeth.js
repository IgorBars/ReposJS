/* JawaScript - powerCalc_DateArrayMeth
Создайте функцию конструктор Calculator.

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и 
функцию с двумя аргументами func(a,b), которая описывает его.
*/
'use strict';

alert("Start powerCalc_DateArrayMeth");



function Calculator() {
    
    this.methods = {                // внутрішній об'єкт з властивостями-методами

        "+": (a, b) => a + b,

        "-": (a, b) => a - b
    };

    this.calculate = function(str) {

        let arr = str.split(" ");

        let a = +arr[0];

        let op = arr[1];

        let b = +arr[2];

        if( !this.methods[op] || isNaN(a) || isNaN(b) ) {

            return "Невірний ввід";
        }

        return this.methods[op](a, b);    
    };

    this.addMethod = function(str, funс) {

        this.methods[str] = funс;
    };
}


let calc = new Calculator;
alert( calc.calculate("7 - 3") );              // 4

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);

alert( powerCalc.calculate("2 * 3") );        // 6

powerCalc.addMethod("**", (a, b) => a ** b);

alert( powerCalc.calculate("2 ** 3") );        // 8

alert("End");
