/* JawaScript - 1_macro_count_microMacroTaskRaznoe               

В работе только Script - макрозадача (код целиком от начала до последней инструкции). Очереди микро- и макрозадач - пустьіе
*/

'use strict';
alert("Start 1_macro_count_microMacroTaskRaznoe");


let i = 0;

let start = Date.now();

function count() {

  // делаем тяжёлую работу
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert("Done in " + (Date.now() - start) + 'ms');
}

count();



alert("End");