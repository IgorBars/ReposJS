/* JawaScript - funct_Expr_Collback*/

// однострочный комментарий

'use strict';

function ask(Question, yes, no)
{
    if(confirm(Question)) yes();
    else no();
}

function showOk()   // функция - колбэк
{
    alert("Вы согласились");
}
function showCancel()
{
    alert("Вы отказались");
}

ask("Подтвердите согласие", showOk, showCancel);//вызов с колбэками в аргументе


// kurz 
ask(
    "Подтвердите согласие",
    function() {alert("Вы согласились!")},  //анонимные колбэки
    function() {alert("Вы отказались!")}
)

alert("End");