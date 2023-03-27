/* JawaScript - Calculatorrrr_Array*/
'use strict';

alert("Start Calculatorrrr_ArrayDate");



function Calculator() {                         //  Конструктор объекта Calculator
        this.methods = {                        // свойство methods объекта Calculator = об'єкт со свойствами-методами
                "+": (a, b) => a + b,           // метод "+"
                "-": (a, b) => a - b,
                //"*": (a, b) => a * b,
                //"/": (a, b) => a / b,
                //"**": (a, b) => a ** b

        }
        this.calculate = function(str) {        // собственно метод объекта Calculator
                let split = str.split(" ");
                let a = +split[0];
                let op = split[1]; 
                let b = +split[2]; 
                if(!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
                else return this.methods[op](a, b);       
        }
        this.addMethod = function(name, func) {
                return this.methods[name] = func;
        }
}

let calc = new Calculator;
alert(`Result: ${calc.calculate("3 + 7")}`); // 10
alert(`Result: ${calc.calculate("3 - 7")}`); // -4
//alert(`Result: ${calc.calculate("d + 7")}`); // NaN
//alert(`Result: ${calc.calculate("3 & 7")}`); // NaN

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 3");
alert( result ); // 8


alert("End");
