/* JawaScript - Замыкания */
'use strict';


alert("Start getCount3_ZamykFUNCAdvі");

function makeCounter(cou) {
    let count = cou;    // значення при виклику makeCounter() !!!
  
    return function() {
      return ++count; // есть доступ к внешней переменной "count", значення якої буде на момент створення counter(){return ++count;}
    };
}
  
let counter = makeCounter(1);  // створюємо counter(){return ++count;}. Значення змінної із рідного ЛО (при народженні) count = 1
alert( counter() ); // 2
alert( counter() ); // 3


let counter2 = makeCounter(5);  // створюємо counter(){return ++count;} з значенням псевдореальної змінної count = 5 
alert( counter2() ); // 6    
alert( counter2() ); // 7



alert("End");
 