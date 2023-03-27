/* JawaScript - Calculator_DateArrayMeth
Создайте функцию конструктор Calculator.

Pеализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и 
возвращает результат. Метод должен понимать плюс + и минус -.
*/
'use strict';

alert("Start Calculator_DateArrayMeth");



function Calculator() {
    
    this.methods = {                        // об'єкт з властивостями-методами

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
}


let calc = new Calculator;

alert( calc.calculate("7 > 3") ); // 10
alert( calc.calculate("7 - 3") ); // 4

alert("End");
