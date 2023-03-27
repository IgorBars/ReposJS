/* JawaScript - newFunc_NEWFuncAdv.

    Kогда функция создаётся с использованием new Function, в её [[Environment]] 
записывается ссылка HE на внешнее лексическое окружение, в котором она была 
создана (Замикання), а на глобальное. Поэтому такая функция имеет доступ только 
к глобальным переменным.
 */
'use strict';

alert("Start newFunc_NEWFuncAdv");

let a = 4;
let b = 5;

function sayHi() {
    let a = 1;                                          // недоступна локальна змінна для  f
    let b = 2;                                          // недоступна локальна змінна для  f
    let f = new Function ('s', 'l', 'return s + l');
    return f;
}


alert( sayHi()(a, b) ); // спочатку виконується sayHi(), потім повертається f і виконується         ( f(a, b) )
  
alert("End");