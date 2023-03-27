/* JawaScript - Замыкания */
'use strict';


alert("Start getCount5_ZamykFUNCAdv");


function f() {
    let value = Math.random();
  
    return function() { alert(value); };
}
  
  // три функции в массиве, каждая из них ссылается на лексическое окружение
  // из соответствующего вызова f()
let arr = [f(), f(), f()];
arr[0]();
arr[1]();
arr[2]();

alert("End");
 