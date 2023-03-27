/* JawaScript - Function_arrow_Collback стрелочные функции */

// однострочный комментарий

'use strict';

function ask(question, ju, old)
{
    if (prompt(question) <= 18 ) ju();
    else old();
    
}

ask("Сколько Вам лет?",
() => alert("Привет"),      //коллбэки, объявляемые при вызове
() => alert("Здравствуйте")
);

// Самый короткий код с пом Function Expression и Function arrow
let wellcam = (prompt("Укажите Ваш возраст") ) <= 18 ? () => alert("Привет"):
() => alert("Здравствуйте");

wellcam();
