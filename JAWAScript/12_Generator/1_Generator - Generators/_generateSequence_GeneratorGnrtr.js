/* JawaScript - _generateSequence_GeneratorGnrtr
Генераторы могут порождать множество значений (yield) одно за другим, по мере необходимости.

 yield - значення, що генерується
*/
'use strict';

alert("Start _generateSequence_GeneratorGnrtr");


function* generateSequence() {
  yield 1;                        // передаєм аргумент у yield без дужок  !!!
  yield 2;
  return 3;
}

// Функции-генераторы ведут себя не так, как обычные. Когда такая функция вызвана, она не выполняет свой код. 

// Вместо этого она ВОЗВРАЩАЕТ специальный объект, так называемый «генератор», для управления её выполнением.
let generator = generateSequence();

alert(generator); // [object Generator]


let value1 =  generator.next(); // при вьізове метода .next() во внешний код с пом очередного yield возвращается об'ьект

alert(JSON.stringify(value1)); // {"value":1,"done":false}   ((done - виконано))

alert(value1.value); // 1
 


alert("End");

