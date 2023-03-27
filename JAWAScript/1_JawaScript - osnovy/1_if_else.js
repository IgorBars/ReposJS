/* JawaScript - 1_if_else */

// однострочный комментарий

'use strict';

alert("Start 1_if_else");

let year = prompt("Публикация ECMAScript-2015", 2015);

if ( year == 2015 ) {   // исполняется при TRUE, не исполняется при FALSE

    alert("Верно");
} else {                // исполняется при FALSE, не исполняется при TRUE

    alert("Неверно");
}


year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

alert("End");