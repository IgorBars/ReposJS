/* JawaScript - Простые числа*/

// однострочный комментарий

'use strict';

let n = +prompt("Введите диапазон", 10);
N:for(let i = 2; i <= n; i++){
        for(let k = 1; k < i; k++){
            if(( !( i % k )) && k != 1) continue N;
        }
        alert(i);
    } 
alert("Готов!");
    
 n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}