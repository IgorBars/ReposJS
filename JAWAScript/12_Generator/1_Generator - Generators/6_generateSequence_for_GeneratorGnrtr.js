/* JawaScript - 6_generateSequence_for_GeneratorGnrtr
Функция для генерации последовательности чисел
*/
'use strict';
alert("Start 6_generateSequence_for_GeneratorGnrtr");


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

let generator = generateSequence(1, 10);    // созд перебираемый объект
let genArr = [...generator];                // получаем оператором расширения список значений

alert(genArr);  // 1,2,3,4,5,6,7,8,9,10     (массив)


alert("End");

