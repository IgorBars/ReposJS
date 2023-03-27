/* JawaScript - cicle_for_break*/

// однострочный комментарий

'use strict';


let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');


  alert(!value);
  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );