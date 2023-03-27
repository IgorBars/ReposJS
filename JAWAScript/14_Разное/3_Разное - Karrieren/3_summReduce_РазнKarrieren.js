/* JawaScript - 3_SummatorReduce_РазнKarrieren

*/
'use strict';

alert("Start 3_Summator_РазнKarrieren");



//  пример функции суммирования произвольного к-ва аргументов:
const sum = (a, b, c, ...N) => N.length ? a + b + c + N.reduce((sum, current) => sum + current) : a + b + c

alert(sum(1, 2, 3, 4, 5, 6, 7));    //28





alert("End");

