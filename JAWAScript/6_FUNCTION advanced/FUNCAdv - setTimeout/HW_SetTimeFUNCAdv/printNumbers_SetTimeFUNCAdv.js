/* JawaScript - printNumbers_SetTimeFUNCAdv.
printNumbers(from, to), которая выводит число каждую секунду, 
начиная от from и заканчивая to.
    
 */
'use strict';

alert("Start printNumbers_SetTimeFUNCAdv");

// function printNumbers(from, to) {
//     let num = from;
//     let timerId = setInterval(() => {alert(num);
//         if (num == to) clearInterval(timerId);
//         num++;
//     }, 1000);  
// }
// printNumbers(2, 5);


// реализация setInterval рекурсией:
function printNumbers(from, to) {
    let num = from;
    setTimeout(function recFun() {
        alert(num);
        if (num < to) setTimeout(recFun, 1000);
        num++;
    }, 1000);
}
printNumbers(2, 5);

alert("End");