/* JawaScript - проверить на спам */
'use strict';

alert("Start Ex_checkSpam_String_Data");

function checkSpam(str) {
    if (!str) return str;   //пров на пустую строку(для нее .toLowerCase() не раб)
    return str.toLowerCase().includes("viagra") || // ищем первый true
    str.toLowerCase().includes("xxx") ||
    str.toLowerCase().includes("rab");
}

alert(`buy ViAgRA now:  ${checkSpam('buy ViAgRA now')}`);     //== true
alert(`free xxxxx:  ${checkSpam('free xxxxx')}`);             //== true
alert(`innocent rabbit:  ${checkSpam("innocent rabbit")}`);   //== true
alert(`innocent robbit:  ${checkSpam("innocent robbit")}`);   //== false 

alert("End");
