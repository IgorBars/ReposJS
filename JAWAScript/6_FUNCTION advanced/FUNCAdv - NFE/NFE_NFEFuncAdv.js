/* JawaScript - NFE_NFEFuncAdv.
Function Expression */
'use strict';

alert("Start NFE_NFEFuncAdv");

let sayHi = function fun(who) { // додаємо внутрішнє ім'я (fun) вкладеній функції (буде працювати у внутрішньому оточенні)

    if (who) {

        alert(`Hi, ${who}`);  // 
    } else {
        fun("Guest");        // тепер можна звернутися до самої себе по імені
    }
};


sayHi("John");     // Hi, John

sayHi();            // Hi, Guest

let wellcom = sayHi;    // навіть при зміні назви вкладена функція працює, бо має внутрішнє ім'я (fun) і звертання іде до нього,
sayHi = null;           // а не шукається у зовнішньому оточенні, за відсутності у внутрішньому

wellcom("John");     // Hi, John

wellcom();            // Hi, Guest




alert("End");