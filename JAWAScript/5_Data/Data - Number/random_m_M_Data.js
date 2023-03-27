/* JawaScript - random_m_M_Data случайное число от Min до Max*/
'use strict';

alert("Start random_m_M_Data");

function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


alert("End");
