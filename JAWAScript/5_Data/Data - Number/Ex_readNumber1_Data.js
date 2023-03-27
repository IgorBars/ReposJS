/* JawaScript  -запрашивать ввод, пока не число */
'use strict';

alert("Start Ex_readNumber1_Data");

function readNumber() {
    let num;
    do{
        num = prompt("Вв ч:");
    } while( !isFinite(num));//пров на число, Esc(null=>0) и на Пустой Ввод (""=>0)

    if(num === null || num === "") return null;
    return +num;
}

alert(`Result:  ${readNumber()}`);

alert("End");
