/* JawaScript - 3_arr_generateSequence_GeneratorGnrtr
Так как генераторы являются перебираемыми объектами, мы можем использовать всю связанную с ними функциональность, 
например оператор расширения ...:
*/
'use strict';

alert("Start 3_arr_generateSequence_GeneratorGnrtr");


function* generateSequence () {
  yield 1;
  yield 2;
  yield 3;
}

let sequenceArr = [0, ...generateSequence ()];  // ... - расшаривает перебираемьій об'ьект в список его значений
//...generateSequence() превращает перебираемый объект-генератор в список его значений

alert(sequenceArr); // 0, 1, 2, 3



alert("End");

