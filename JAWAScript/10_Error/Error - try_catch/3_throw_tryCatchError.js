/* JawaScript - 3_throw_tryCatchError

Оператор throw генерирует ошибку.

В JavaScript есть множество ВСТРОЕННЬІХ КОНСТРУКТОРОВ для стандартных ошибок:
 Error, SyntaxError, ReferenceError, TypeError. 

Синтаксис: 
let error = new Error(message);
let error = new SyntaxError(message);
let error = new ReferenceError(message);

*/
'use strict';

alert("Start 3_throw_tryCatchError");
                                                    //Оператор throw
// Для встроенных ошибок (не для любых объектов, только для ошибок), свойство name – это в точности имя конструктора. 
// А свойство message берётся из аргумента.
let error = new Error(" Ого, ошибка! o_O");

alert(error.name); // Error
alert(error.message); //  Ого, ошибка! o_O

// В нашем случае отсутствие свойства name – это ошибка, ведь пользователи должны иметь имена.
// Сгенерируем её:
let json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); //  оператор throw генерирует ошибку SyntaxError с сообщением message.
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}


alert("End");

