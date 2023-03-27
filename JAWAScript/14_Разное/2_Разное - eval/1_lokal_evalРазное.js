/* JawaScript - 1_lokal_evalРазное
eval имеет отдельное окружение и доступ к внешнему окружению
*/
'use strict';

alert("Start 1_lokal_evalРазное");

let a = 1;

function f() {
    let a = 5;
    eval("alert(a)");
}

f();    //  5


alert("End");

