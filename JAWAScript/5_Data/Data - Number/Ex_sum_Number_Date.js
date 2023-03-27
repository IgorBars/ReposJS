/* JawaScript - Ex_sum_Number_Date */
'use strict';

alert("Start Ex_sum_Number_Date");

let sum = +prompt("Вв ч а", ) + +prompt("Вв ч b", ); 
alert(sum); 



//Методы Math.round и toFixed, согласно документации, округляют 
//до ближайшего целого числа: 0..4 округляется в меньшую сторону, 
//тогда как 5..9 в большую сторону.

//Например:

alert( 1.35.toFixed(1) ); // 1.4



alert( 6.35.toFixed(1) ); // 6.3        ???
alert( 7.35.toFixed(1) ); // 7.3        ???

alert( 6.35.toFixed(20) ); // 6.34999999999999964473    !!!

alert( Math.round(7.35 * 10)/10 ); // 7.4


alert("End");
