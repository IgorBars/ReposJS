/* JawaScript - _setInterval_SetTimeFUNCAdv.

    
 */
'use strict';

alert("Start _setInterval_SetTimeFUNCAdv");


function sayHi() {

    alert("Hi");
}

let timerId = setInterval( sayHi, 1500 );  // sayHi - без дужок виклику() !!!

let timerId1 = setTimeout( () => { clearInterval(timerId); alert("Stop"); }, 6000 );
  
// Спочатку виконається код без setTimeout, setInterval
// Після нього через 1500мс почне періодично виконуватися планувальник setInterval (з періодом 1500мс), 
// Через 6000мс планувальник setTimeout зупинить дію планувальника setInterval


alert("End");