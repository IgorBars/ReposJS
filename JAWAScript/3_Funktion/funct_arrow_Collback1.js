/* JawaScript - funct_arrow_Collback1 стрелочные функции */

// однострочный комментарий

'use strict';

function ask (question, yes, no){
    if (confirm(question)) yes ()
    else no ();
}
ask ("Вам меньше 18?",
() => alert ("Здравствуй!"),
() => alert ("Здравствуйте!")
);



