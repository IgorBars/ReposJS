/* JawaScript - 1_generateSequence_GeneratorGnrtr
Генераторы могут порождать (yield) множество значений
 одно за другим, по мере необходимости.
*/
'use strict';

alert("Start 1_generateSequence_GeneratorGnrtr");

function* generateSequence () {
    yield 1;
    yield 2;
    return 3    // якщо return => yield         - видача об'єкта {"value":3,"done":false}
} 

let generator = generateSequence (); 
alert(generator);   // [object generator]

let one = generator.next();

alert(one); // [object Object] -{value: значение из yield, done: false/true}
alert( JSON.stringify(one) ); // {"value":1,"done":false}


alert( JSON.stringify(one.value) ); // 1

let two = generator.next();
alert( JSON.stringify(two.value) ); // 2

let three = generator.next();
alert( JSON.stringify(three) ); // {"value":3,"done":true}        (done - виконано)


let vor = generator.next();     // подальші виклики не дадуть результату value, тільки об'єкт {"done":true}
alert( JSON.stringify(vor) );   // {"done":true}

alert("End");

