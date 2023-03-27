/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start Calculator_ArrayMethodsHomework");


function Calculator() {

    this.methods = {            //внутрішній объект "methods" з 2-мя свойствами
        "+": (a, b) => a + b,   //свойство - стрелочная колбек-функция
        "-": (a, b) => a - b
    }

    this.addMethod = function(name, func) {//метод, кот добавляет свойства -
                                            // -колбек-функции в this.methods
        this.methods[name] = func; //имя свойства: name;   тело св: func
    }

    this.calculate = function(string) {
        let splstring = string.split(" ");

        let op = splstring[1]; // op хранит стр. значения свойств this.method
        let a = +splstring[0];
        let b = +splstring[2];

        return this.methods[op](a, b);
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);  // как this.method, только вне
powerCalc.addMethod("/", (a, b) => a / b); // имя св: "/"; тело св: (a, b) => a / b
powerCalc.addMethod("**", (a, b) => a ** b);

alert(powerCalc.calculate("2 ** 3")); // 8

alert( powerCalc.calculate("2 / 3") );

alert("End");
