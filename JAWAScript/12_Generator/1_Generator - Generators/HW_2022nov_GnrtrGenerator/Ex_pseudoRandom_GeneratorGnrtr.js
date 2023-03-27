/* JawaScript - Ex_pseudoRandom_GeneratorGnrtr
next = previous * 16807 % 2147483647
Cоздать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой
*/
'use strict';
alert("Start Ex_pseudoRandom_GeneratorGnrtr");


function* pseudoRandom(seed) {

    let previous = seed;

    while (true) {

        previous = previous * 16807 % 2147483647;

        yield previous;
    }
}


let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
alert(generator.next().value); // 984943658
alert(generator.next().value); // 1144108930



let count = 0;
for (let val of pseudoRandom(1)) { // перебор итерированного об'ьекта - сеяного генератора псевдослучайньіхчисел циклом for..of
    alert(count + ": " + val);
    if (++count == 10) {            // зупинимося на 10-ти ітераціях    (count++ - включно)
        break;
    }
}
 


alert("End");

