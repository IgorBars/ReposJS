/* JawaScript - _GeneratorGnrtr
создать функцию-генератор pseudoRandom(seed), 
которая получает seed и создаёт генератор с указанной формулой.
*/
'use strict';

alert("Start HWRandom_GeneratorGnrtr");

// let previous = 1;
// let next;
// function f() {
//     next = previous * 16807 % 2147483647;
//     alert(next);
//     previous = next;
// }
// f(); // 16807
// f(); // 282475249
// f(); // 1622650073
// alert("!: " + 16807 * 16807); // 282475249
// alert("!!: " + 16807 * 16807 * 16807); // 4747561509943



function* pseudoRandom(seed) {
    let next;
    let previous = seed;
    
    while (true) {
        yield next = previous * 16807 % 2147483647;
        previous = next;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
alert(generator.next().value); // 984943658
alert(generator.next().value); // 1144108930

alert("End");

