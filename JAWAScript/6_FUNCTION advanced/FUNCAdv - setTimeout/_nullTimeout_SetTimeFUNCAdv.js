/* JawaScript - _nullTimeout_SetTimeFUNCAdv.

    Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func)
 */
'use strict';

alert("Start _nullTimeout_SetTimeFUNCAdv");

    // ф-ю    () => alert("Мир")     вписьіваем в планировщик без запускающих скобок()
setTimeout(() => alert("Привет, Мир")); // данная инструкция вьіполнится сразу по окончании всего скрипта (после alert("End");

(() => alert("Мир"))(); // так вьіглядит стрелка с alert с запускающими скобками

alert("Привет, John");

alert("Привет, Tom");
  


alert("End");