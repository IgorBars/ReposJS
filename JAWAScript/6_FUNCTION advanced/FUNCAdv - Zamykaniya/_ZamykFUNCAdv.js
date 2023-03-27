/* JawaScript - Замыкания */
'use strict';


alert("Start _ZamykFUNCAdv");

// let name = "John";
// function sayHi() {
//   alert("Hi, " + name);
// }
// sayHi(); // John
// name = "Pete"; // (*)
// sayHi(); // Pete

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

 // момент народження counter1. Момент фотознімку рідного "Lexical Env 1" із значеннями локальних змінних на даний момент
let counter1 = makeCounter();
 // момент народження counter2. Момент фотознімку рідного "Lexical Env 2" із значеннями локальних змінних на даний момент
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0 (независимо)



alert("End");
