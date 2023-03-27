/* JawaScript -  расширяемый калькулятор  */
'use strict';

alert("Start powerCalc1_2021_ArrayDate");
let result;

function Calculator() {

    this.methods = {
        "+": (a, b) => (a + b),
        "-": (a, b) => (a - b),
    };

    this.calculate = function(str) {
        let spl = str.split(" ");   // обрезки в массив spl
        let a = +spl[0];
        let op = spl[1];
        let b = +spl[2];

        if ( isNaN(a) || isNaN(b) || !((op == "+") || (op == "-") 
            || (op == "*") || (op == "/") || (op == "**")) ) {
            return "Неверный ввод"; 
        }
        
        return this.methods[op](a, b);  // Вызов метода (methods) в методе
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
alert(`calc.calculate("3 + 7"):  ${calc.calculate("3 + 7")}`); // 10
// alert(`calc.calculate("3 + d"):  ${calc.calculate("3 + d")}`); // Неверный ввод
// alert(`calc.calculate("3 a 7"):  ${calc.calculate("3 a 7")}`); // Неверный ввод

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);  // добавляем расширенный метод
powerCalc.addMethod("/", (a, b) => a / b);  // добавляем расширенный метод
powerCalc.addMethod("**", (a, b) => a ** b); // добавляем расширенный метод

result = powerCalc.calculate("2 * 3");
alert( result ); // 6
// result = powerCalc.calculate("2 a 3");  //Неверный ввод
// result = powerCalc.calculate("2 \ 3");  //Неверный ввод
result = powerCalc.calculate("2 / 3");
alert( result ); // 0.6666666666666666

result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


alert("End");
