/* JawaScript - Замыкания */
'use strict';


alert("Start getCount2_ZamykFUNCAdv");

function makeCounter() {
    let count = 0;
    ++count;
  
    return function() {
      return ++count; // есть доступ к внешней переменной "count"
    };
}
  
let counter = makeCounter();  // створюємо    function counter() {return ++count;} 
alert( counter() ); // 2    доступ з-під блоку if(){} до зовнішньої змінної count (з "рідного" лексичного оточення makeCounter)
alert( counter() ); // 3


let counter2 = makeCounter();  // створюємо    function counter() {return ++count;} 
alert( counter2() ); // 2    
alert( counter2() ); // 3   доступ з-під function getCount() {}  до зовнішньої змінної count (з "рідного" лексичного оточення makeCounter)

// Важливо розуміти!   - змінна count є локальною для makeCounter. В момент створення counter створюється копія змінної count
//   у копії лексичного псевдореального оточення вцілому для даного counter у межах блоку makeCounter. 
// Ця копія лексичного псевдореального оточення НЕ ЗАЛЕЖИТЬ від поточних змін у реальному makeCounter.

// Якщо ж використати якусь зовнішню (для makeCounter) змінну - вона не належатиме до лексичного псевдореального оточення counter
// => її значення непередбачуване для counter у його конкретному лексичному псевдореальному оточенні.

// ДИВИСЬ HW_shooters_ZamykFUNCAdv  - ЗАДАЧУ ПРО СТРІЛЬЦІВ

alert("End");
