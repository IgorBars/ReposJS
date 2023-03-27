/* JawaScript - cicle_for_continue*/

// однострочный комментарий

'use strict';

let i = 10;
i= +prompt("Введите число 1", 18);
alert(i);

if (i > 5) {
    alert(i);
    i= +prompt("Введите число 1", 18);
  } else {
    continue;
    
  }