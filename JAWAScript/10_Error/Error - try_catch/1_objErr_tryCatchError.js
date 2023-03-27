/* JawaScript - 1_objErr_tryCatchError
Ошибки парсинга и setTimeout не обрабатываются!
ОБрабатываются исключения!

JavaScript-движок сначала читает код, а затем исполняет его. Ошибки, которые возникают во время фазы чтения, 
называются ошибками парсинга. Их нельзя обработать (изнутри этого кода), потому что движок не понимает код.

Таким образом, try..catch может обрабатывать только ошибки, которые возникают в корректном коде. 
Такие ошибки называют «ошибками во время выполнения», а иногда «исключениями».
*/
'use strict';

alert("Start 1_objErr_tryCatchError");

try {
  lalala; // ошибка, переменная не определена!

} catch(err) { // <-- объект ошибки, можно использовать другое название вместо err
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...: 16:3  -стек вызовов)
  
    // Можем также просто вывести ошибку целиком
    // Ошибка приводится к строке вида "name: message"
    alert(err); // ReferenceError: lalala is not defined
}



alert("End");

