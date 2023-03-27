/* JawaScript - Exercise. Конструктор Accumulator */
'use strict';

alert("Start Exercise_constr_Accumul_obj");


function Accumulator(st_value) {

    this.value = st_value;

    this.read = function() {
        this.value += +prompt("Вв. ч.- Сколько нужно добавить?: ", 0);
    };
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert("value: " + accumulator.value); // выведет сумму этих значений


alert("End");


