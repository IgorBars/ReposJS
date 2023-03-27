/* JawaScript - 2_if*/

// однострочный комментарий

'use strict';

alert("Start 2_if");

function ask(question, ju, age18, age19, old) 
{
    let age = +prompt(question); // + изм тип со string на number
    if ( age < 18 ) ju();
    else if ( age == 18 ) age18();
    else if ( age == 19 ) age19();
    else old();
    alert(`Тип question: ${typeof(question)}`);   // string
    alert(`Тип age: ${typeof(age)}`);   // string/number(+) (object при отмене=null)
    alert(`Тип ju: ${typeof(ju)}`);   // function
    alert(`Тип ask: ${typeof(ask)}`);   // function
    let x; alert(`Тип x: ${typeof(x)}`);//  undefined
}

// Самостоятельная нстр if отменяет выполнение ТОЛЬКО СЛЕДУЮЩЕЙ ЗА УСЛОВИЕМ ИНСТРУКЦИИ
//  НО не влияет на последующие.
// Инстр else отменяет выполнение ТОЛЬКО СЛЕДУЮЩЕЙ ЗА НЕЙ ИНСТРУКЦИИ при вып условия if

// т.е все инстр else будут проигнорированы предстоящим выполненным усл if

ask("Сколько Вам лет?", // вызов функции ask(question, ju, age18, age19, old)
() => alert("Привет"),      //коллбэки, объявляемые при вызове
() => alert("Здравствуйте, с 18-летием!"),
() => alert("Здравствуйте, с 19-летием!"),
() => alert("Здравствуйте")
);

for (let i = 0; i < 5; i++) {
    console.log("value,", i);
  }

  alert("End");