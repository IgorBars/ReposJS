/* JawaScript - funct_arrow стрелочные функции */

// однострочный комментарий

'use strict';

//function sayHi(Question)              // Объявление Declaration функции
//{
    //if (confirm(Question)) alert ("Hi");
    //else alert ("Good Bye");
//}


let sayHi = (Question) => {if (confirm(Question)) alert(Question + "Hi");};

sayHi("Cогласие?");