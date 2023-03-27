/* JawaScript - pockets_NasledProto 
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему 
пути: pockets → bed → table → head.
*/
'use strict';
alert("Start pockets_NasledProto");


let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pillow);  // 2
alert(bed.glasses);  // 1

alert("End");

