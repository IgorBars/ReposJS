/* JawaScript  -запрашивать ввод, пока не число */
'use strict';

alert("Start Ex_readNumber_Data");

function readNumber() {
    let num;
    do {
        num = prompt("Вв а?:", );
    }
     while( !isFinite(num) );
    return (num === "" || num === null) ? null: +num;
}

alert(`return a: ${readNumber()}`);          

alert("End");
