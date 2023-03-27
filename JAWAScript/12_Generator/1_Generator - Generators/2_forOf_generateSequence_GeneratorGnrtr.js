/* JawaScript - 2_forOf_generateSequence_GeneratorGnrtr
По наличию метода next(), генераторы являются перебираемыми объектами.
*/
'use strict';

alert("Start 2_forOf_generateSequence_GeneratorGnrtr");


// если мы хотим, чтобы были все значения при переборе через for..of, то надо возвращать их через yield:
function* GeneratorGnrtr () {
  yield 1;
  yield 2;
  yield 3;  // yield замість return для {"value":1,"done":false} для виводу також останнього значення
}

let generator = GeneratorGnrtr();

for(let value of generator) {
    alert(value);             // 1    2     3
}
 


alert("End");

