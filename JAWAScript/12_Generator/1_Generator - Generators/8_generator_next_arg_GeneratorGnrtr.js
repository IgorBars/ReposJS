/* JawaScript - 8_generator_next_arg_GeneratorGnrtr
yield – дорога в обе стороны: он не только возвращает результат наружу, но и может передавать значение извне в генератор.

Чтобы это сделать, нам нужно вызвать generator.next(arg) с аргументом. Этот аргумент становится результатом yield.
*/
'use strict';
alert("Start 8_generator_next_arg_GeneratorGnrtr");


function* gen() {
    // Передаём вопрос во внешний код и ожидаем ответа
    let result = yield "2 + 2 = ?"; // (*)
  
    alert(result);                  //  4
}

let generator = gen();

let question = generator.next().value; // <-- yield возвращает значение   (ми можемо повернути значення yield ІЗ ГЕНЕРАТОРА)

generator.next(4);                    //  --> передаём через yield значение 4 в result (В ГЕНЕРАТОР)



alert("End");

