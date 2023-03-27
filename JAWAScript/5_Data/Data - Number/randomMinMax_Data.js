/* JawaScript - randomMinMax_Data случайное число от Min до Max*/
'use strict';

alert("Start randomMinMax_Data");


function randomMinMax(min, max) {
    let numRandom = min + (max - min) * Math.random();
    alert(`numRandom: ${numRandom}`);
}

randomMinMax(+prompt("Min?:", ), prompt("Max?:", ));

alert("End");
