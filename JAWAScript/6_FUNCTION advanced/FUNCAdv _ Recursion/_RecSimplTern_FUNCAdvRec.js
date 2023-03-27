/* JawaScript - Рекурсия и стек */
'use strict';
/*

*/
alert("Start _RecSimpl_FUNCAdvRec");


function pow(x, n) {
    
      return ( n == 0 ) ? 1: x * pow(x, n - 1);
}

alert( pow(2, 0) ); // 1
alert( pow(2, 1) ); // 2
alert( pow(2, 3) ); // 8


alert("End");
