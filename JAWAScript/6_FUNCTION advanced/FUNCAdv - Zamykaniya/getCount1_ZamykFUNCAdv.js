/* JawaScript - Замыкания */
'use strict';


alert("Start getCount1_ZamykFUNCAdv");

function makeCounter() {
    let count = 0;
  
    return function() {
      return ++count; // есть доступ к внешней переменной "count"
    };
}
// створюємо    function counter() {return ++count;} із псевдореальним лекс оточенням у межах блоку makeCounter

let counter = makeCounter();  
// counter -глобальна змінна, отже доступна будь-де
  
//  доступ з-під блоку if(){} до зовнішньої (для counter) змінної count (у створеному "рідному" лексичному псевдореальному оточенні у межах блоку makeCounter)
if(true) {
    alert( counter() ); // 1
    alert( counter() ); // 2
    alert( counter() ); // 3
}
  
function getCount() {
    return counter();
}
//  доступ з-під блоку getCount(){}  до зовнішньої (для counter) змінної count (у створеному "рідному" лексичному псевдореальному оточенні у межах блоку makeCounter)
alert( getCount() ); // 4



alert("End");
