/* JawaScript - Ex_operand_vstrProtoPrototype
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Зачем в решении второй задачи необходима переадресация вызова, если и без него будет корректно работать?

    -здесь можно и без него, но если бы функция f() НЕ ПРИНИМАЛА АРГУМЕНТЬІ, а просто что-то делала бы внутри с переменными 
    и надо было бы извлечь их и использовать в другой функции, то нужно было бы указать на область видимости. 
    Такое при работе с классами часто происходит.
*/
'use strict';
alert("Start Ex_operand_vstrProtoPrototype");


function f() {                               // не приймає аргументи у параметри
    alert(this.operand1 + this.operand2);   // але отримує їх як свої властивості через обгортку
}

function m() {
    alert(this.operand1 - this.operand2);
}

Function.prototype.defer = function(ms) {   // для лексичного оточення обгортки не приймаємо ф-ю (бо вона є у самому this)
    const func = this;                      // тож для функціонального сприйняття коду присвоїмо this у змінну func
    return function (operand1, operand2) {  // 
        func.operand1 = operand1;
        func.operand2 = operand2;
        setTimeout(() => func.apply(func), ms);
    }
};




// function f(operand1, operand2) {    // тут приймає аргументи
//     alert(operand1 + operand2);
// }

// function m(operand1, operand2) {
//     alert(operand1 - operand2);
// }

// Function.prototype.defer = function(ms) {   // для лексичного оточення обгортки пне приймаємо ф-ю (бо вона є у самому this)
//     const func = this;                  // тож для функціонального сприйняття коду присвоїмо this у змінну func
//     return function (...args) {
        
//         setTimeout(() => func.apply(func, args), ms);
//     }
// };



f.defer(1000)(1, 2);    // 3
m.defer(2000)(6, 1);    // 5




alert("End");

