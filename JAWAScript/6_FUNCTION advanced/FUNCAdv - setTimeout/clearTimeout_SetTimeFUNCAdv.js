/* JawaScript - clearTimeout_SetTimeFUNCAdv     timerId

    
 */
'use strict';

alert("Start clearTimeout_SetTimeFUNCAdv");


let timerId1 = setTimeout(() => alert("Hi-Hi"), 2500 );
let timerId = setTimeout( 'alert("Hi")', 4000 );        // String-запис у setTimeout

alert(timerId1);
alert(timerId);


// clearTimeout(timerId);  // вимикаємо планувальник ф-ї   alert("Hi")

  
// Спочатку виконається код без setTimeout
// Після нього виконається планувальник setTimeout


alert("End");