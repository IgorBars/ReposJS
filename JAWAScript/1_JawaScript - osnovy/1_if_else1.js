/* JawaScript - 1_if_else - Определить знак числа */

// однострочный комментарий

'use strict';

alert("Start 1_if_else1");

let value = prompt("Введите число (-, +, 0)", 0);

if (value < 0) {
    alert("-1");
    }
    else if (value == 0) {
        alert("0"); 
    }
    else if (value > 0) {
        alert("1"); 
    }

alert("End");