/* JawaScript - 7_kompositionGenerators_GeneratorGnrtr
                                      Композиция генераторов
Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой 
(осуществлять их композицию).
*/
'use strict';
alert("Start 7_kompositionGenerators_GeneratorGnrtr");


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // заготовка для "0..9"
    yield* generateSequence(48, 57); //вложенньій генератор (послед-ность чисел 48...57)

    // заготовка для "A..Z"
    yield* generateSequence(65, 90);
  
    // заготовка для "a..z"
    yield* generateSequence(97, 122);
}
  
let str = '';

// let PasswordCodes = generatePasswordCodes();
// for(let code of PasswordCodes) {

for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);       // 
}
  
alert(str); // 0..9A..Za..z
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

// Директива yield* делегирует выполнение другому генератору.
// Композиция генераторов – естественный способ вставлять вывод одного генератора в поток другого. 
//Она не использует дополнительную память для хранения промежуточных результатов.

alert(String.fromCharCode(122)); // z (получаем символ по его коду врукопашную)



alert("End");

