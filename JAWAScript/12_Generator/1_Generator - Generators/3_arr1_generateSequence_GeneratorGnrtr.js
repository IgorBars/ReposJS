/* JawaScript - 3_arr1_generateSequence_GeneratorGnrtr
...generateSequence() превращает перебираемый объект-генератор
 в массив элементов
*/
'use strict';
alert("Start 3_arr1_generateSequence_GeneratorGnrtr");


function* generatorGnr() {
    yield 1;
    yield 2;
    yield 5;
}

// generatorGnr() -возвращает объект-генератор [object Generator] - массив
// Расширим массив оператором расширения ...
let arrGen = [0, ...generatorGnr()];      // ... - расшаривает перебираемьій об'ьект

alert(arrGen); // 0,1,2,5
alert([...generatorGnr()]); // 1,2,5




alert("ПАМ'ЯТКА");                 // ПАМ'ЯТКА
//Оператор "Остаточные параметры" обозначается через три точки ...
// ... - буквально это значит: «собери (оставшиеся) параметры и положи их в массив ххх».

function argum(...arg) {     // из получаемьіх аргументов образуется массив arg ( [1, 3, 5, 7, 9] )
    alert(arg);              // 1,3,5,7,9
}
argum(1, 3, 5, 7, 9);



// "Оператор расширения" ... - «расширяет» ("расшаривает") перебираемый объект arr в список аргументов.
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)



alert("End");

