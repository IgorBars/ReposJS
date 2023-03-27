/* JawaScript - Ex_Calc_evalРазное
Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.
*/
'use strict';

alert("Start Ex_Calc_evalРазное");

let a = +prompt("Введите для арифм вьіражения а:", "5"); 
let b = +prompt("Введите для арифм вьіражения b:", "10");

let calculator = 'prompt("Введите арифм вьіражение:", "a + b");';


let expression = eval(calculator);

alert( eval(expression) );




alert("End");

