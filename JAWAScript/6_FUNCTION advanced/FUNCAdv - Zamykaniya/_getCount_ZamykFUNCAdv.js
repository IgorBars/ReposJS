/* JawaScript - Замыкания */
'use strict';


alert("Start _getCount_ZamykFUNCAdv");

function funcDekl() {
    let value = 123;
  
    return function funInside() { alert(value); } // місце народження funInside. Тут вона отроимує посилання на тутешнє Lexical Env
}
  
let funInside = funcDekl(); // момент народження funInside. Момент фотознімку рідного Lexical Env із значеннями локальних змінних змінних на даний момент

funInside();    // 123  

alert("End");
 