/* JawaScript - funct_EXPR*/

// однострочный комментарий

'use strict';

function ask(question, yes, no) {                     // Function Declaration
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },           // Function Expression
    function() { alert("Вы отменили выполнение."); }    // Function Expression
  );


  // Exersise Function arrow
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),           // Function arrow
    () => alert("Вы отменили выполнение.")    // Function arrow
  );



  //  динамическое создание функции:
    let age = prompt("Сколько Вам лет?", 18);

    let welcome = (age < 18) ?
    function() { alert("Привет!"); } :
    function() { alert("Здравствуйте!"); };

    welcome();