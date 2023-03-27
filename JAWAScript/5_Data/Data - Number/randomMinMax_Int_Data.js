/* JawaScript - случайное целое число от Min до Max */
'use strict';

alert("Start randomMinMax_Int_Data");

//Расширяем относительный диапазон выше макс и ниже мин значений на 0.5
// для равновероятного округления
function randomMinMax(min, max) {
    let numRandom = Math.round(min - 0.5 + (max - min + 1) * Math.random());
    alert(`numRandom: ${numRandom}`);
}

randomMinMax(+prompt("Min?:", ), prompt("Max?:", ));

alert("End");
