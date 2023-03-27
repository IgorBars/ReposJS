/* JawaScript - _eval
Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического 
выражения и возвращает результат его вычисления.
*/
'use strict';

alert("Start HWCalc_eval");



function simplcalc() {

    let doArifm = prompt( 'Введите арифметическое вьіражение', "22 + 33 / 2" );

    let result = eval( doArifm );

    alert(result);
}

simplcalc();




alert("End");

