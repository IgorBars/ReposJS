/* JawaScript - Простые числа 1 */

// однострочный комментарий

'use strict';

alert("Start прост");

let n = 10;
next: for(let i = 2; i <= n; i++){

    for(let j = 2; j < i; j++){

        if(i % j == 0) continue next;
    }
    alert("простое: " + i);
}
