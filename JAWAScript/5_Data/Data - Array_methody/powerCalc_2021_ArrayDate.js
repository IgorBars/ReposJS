/* JawaScript -  расширяемый калькулятор  */
'use strict';

alert("Start powerCalc_2021_ArrayDate");


function Calculator() {
    this.methods = {            // Объект "methods" с методами "+" и "-"
        "+": (a, b) => a + b,   // Метод "+" объекта "methods"
        "-": (a, b) => a - b,
    };

    this.calculate = function(str) {    // метод "calculate" конструктора 
        let arr = str.split(" "),
        a = +arr[0],
        op = arr[1],                    // коми, бо немає об'яв     let a, let op, let b
        b = +arr[2]

        if ( !this.methods[op] || isNaN(a) || isNaN(b) ) {return NaN;}
        
    return this.methods[op](a, b);  //op -переменная с названием метода ("+")
    // метод объекта this.methods
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


alert("End");
