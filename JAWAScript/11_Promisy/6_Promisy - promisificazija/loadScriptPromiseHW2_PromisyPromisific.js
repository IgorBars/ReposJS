/* JawaScript - _PromisyPromisific

*/
'use strict';

alert("Start loadScriptPromiseHW2_PromisyPromisific"); //  
// Промисифицируем calc(a, b, callback)

function calc(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

calc(2,2,sum => {
  let double = sum ** 2;
  console.log(double); // 16 -> (2 + 2)^2 
})


// Промисифицируем
function calc(a, b) {
  return new Promise(resolve => resolve(a + b));
}

calc(2, 2).then(sum => {
  return sum ** 2;
}).then(console.log) // 16 -> (2 + 2)^2 

alert("End");
