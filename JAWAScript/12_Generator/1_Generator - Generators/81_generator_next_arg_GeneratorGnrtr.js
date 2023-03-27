/* JawaScript - 81_generator_next_arg_GeneratorGnrtr

*/
'use strict';

alert("Start 81_generator_next_arg_GeneratorGnrtr");

function* gen() {
    
    let result1 = yield "2 + 2 = ?"; // (*)   Передаём вопрос во внешний код и ожидаем ответа
    alert("result1: " + result1);     // очікує інструкції generator.next(ХХХ) з аргументом

    let result2 = yield "2 + 3 = ?";
    alert("result2: " + result2);

    let result3 = yield "2 + 4 = ?";
    alert("result3: " + result3);
  }
  
  let generator = gen();
  
  let question = generator.next().value; // <-- yield возвращает значение
  alert("outside: value: " + question); // 2 + 2 = ?
  
  alert("outside: value: " + generator.next(4).value); // 2 + 3 = ?

  alert("outside: value: " + generator.next(5).value); //  2 + 4 = ?

  alert("outside: done: " + generator.next(6).done); // true

// generator.next(4).value; - (generator.next(4) - вводимо дані в генератор.    .value - отримуємо дані з генератора)

alert("End");

