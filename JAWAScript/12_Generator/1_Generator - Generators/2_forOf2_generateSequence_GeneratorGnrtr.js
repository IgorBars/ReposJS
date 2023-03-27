/* JawaScript - 2_forOf2_generateSequence_GeneratorGnrtr
Функции-генераторы являются перебираемыми объектами
*/
'use strict';

alert("Start 2_forOf2_generateSequence_GeneratorGnrtr");

function* GeneratorGnrtr() {
    yield 1;
    yield 2;
    yield 3;
}

//перебираем for of возвращеннsй объект генератора
let generator = GeneratorGnrtr();
for(let value of generator)                             // переменная generator с об'ьектом-генератором
alert(value); // 1, 2, 3



// перебираем for of сам объект генератора (он ведь ВОЗВРАЩАЕТ ОБ'ЬЕКТ-ГЕНЕРАТОР)
for(let value of GeneratorGnrtr())                      // функция-генератор GeneratorGnrtr(), возвращающая объект-генератор
alert(value); // 1, 2, 3



alert("End");

