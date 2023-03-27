/* JawaScript - Function_Expr_Collback_Kurz*/

// однострочный комментарий

'use strict';

function ask(Question, yes, no) //  параметрами заводим функции
{
    if(confirm(Question)) yes(); // это видно по содержанию здесь - yes()
    else no();                  // no() - с вызывающими скобками
}

ask("Подтвердите согласие",
     function(){alert("Вы согласились")},   // анонимные коллбэки
     function(){alert("Вы отказались")});