/* JawaScript - checkSpam - проверка строки на спам */


'use strict';

alert("Start Ex_checkSpam1_String_Data");

function checkSpam(str, substr1, substr2) {
    if (!str) return str;
    let Lowerstr = str.toLowerCase();  //переводим в нижний регистр для нечувствительности к регистру
    let Lowersubstr1 = substr1.toLowerCase();
    let Lowersubstr2 = substr2.toLowerCase();
    return Lowerstr.includes(Lowersubstr1) ||
            Lowerstr.includes(Lowersubstr2);
  }
  
alert( checkSpam( prompt("Введите строку", 
"stringrteu wretruwtef erwyetwter erwteuryet"), 
prompt("Введите спам1", "viagra"),
prompt("Введите спам2", "XXX"),) );

alert("End");
