/* JawaScript - случайное целое число от Min до Max */
'use strict';

alert("Start randomMinMax_Int1_Data");

function randomInt(min, max) {
    return Math.round(Math.random() * (max + 1 - min) + min - 0.5);
}

alert( randomInt(1, 100) );
alert( randomInt(1, 100) ); 
alert( randomInt(1, 100) ); 

alert("End");
