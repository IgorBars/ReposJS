/* JawaScript - 2_global_evalРазное
Чтобы выполнить строку кода с помощью eval в глобальной области видимости, 
используйте window.eval(code).
*/
'use strict';

alert("Start 2_global_evalРазное");

let a = 1;

{
    let a = 5;

    window.eval( "alert(a)" ); // 1 -(глобальная переменная, не смотря на блочное расп)
}





alert("End");

