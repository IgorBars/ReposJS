/* JawaScript - Замыкания. Независимы ли счётчики? */
'use strict';


alert("Start makeCounter_FUNCAdv");

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
   //При каждом вызове makeCounter() у каждой дочерней функции, хранящейся в 
   // переменных counter - создаётся своё независимое внешние лексическое 
   // окружение, у каждого из которых свой собственный count.
  
  alert( counter() ); // 0
  alert( counter() ); // 1
 
  alert( counter2() ); // ? 0
  alert( counter2() ); // ? 1



alert("End");
