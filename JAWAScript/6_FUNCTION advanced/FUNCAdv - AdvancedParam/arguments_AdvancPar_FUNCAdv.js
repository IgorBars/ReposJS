/* JawaScript arguments_AdvancPar_FUNCAdv       - «Псевдо-масив» arguments

// ЦЕ ВЖЕ ЗАСТАРІЛИЙ ОПЕРАТОР           (дивися оператор остаточних параметрів ...rest)

Как получить значения аргументов, которых нет в списке параметров?

Доступ к ним осуществляется через «псевдо-массив» arguments.
*/
'use strict';


alert("Start arguments_AdvancPar_FUNCAdv");

function sayHi() {
    for (var i = 0; i < arguments.length; i++) {
      alert( "Привет, " + arguments[i] );
    }
}

sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

// Частая ошибка новичков – попытка применить методы Array к arguments. Это невозможно:



// Дело в том, что arguments – это не массив Array.

// В действительности, это обычный объект, просто ключи числовые и есть length. Такие объекты называют «псевдомассивами».
//На этом сходство заканчивается. Никаких особых методов у него нет, и методы массивов он тоже не поддерживает.

// Впрочем, никто не мешает сделать обычный массив из arguments, например так:
let args = [];
for (let i = 0; i < arguments.length; i++) {
  args[i] = arguments[i];
}

alert("End");