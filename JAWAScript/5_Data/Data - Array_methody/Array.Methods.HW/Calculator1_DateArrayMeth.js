/* JawaScript - Calculator1_DateArrayMeth
Создайте функцию конструктор Calculator.

Pеализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и 
возвращает результат. Метод должен понимать плюс + и минус -.
*/
'use strict';

alert("Start Calculator1_DateArrayMeth");



function Calculator() {
    
    this.methods = {                        // внутрішній об'єкт "methods"з властивостями-методами

        "+": (a, b) => a + b,

        "-": (a, b) => a - b
    };

    this.calculate = function(str) {

        this.arr = str.split(" ");

        this.a = +this.arr[0];

        this.op = this.arr[1];

        this.b = +this.arr[2]; 
        
        if( !this.methods[this.op] || isNaN(this.a) || isNaN(this.b) ) {
        // !this.methods[this.op] - якщо немає такої властивості
            return "Невірний ввід";
        }

        return this.methods[this.op](this.a, this.b);    
    };
}


let calc = new Calculator;

alert( calc.calculate("7 > 3") ); // 10
alert( calc.calculate("7 - 3") ); // 4

alert("End");
