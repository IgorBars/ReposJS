/* JawaScript - 4probros1_tryCatchError
                                  Проброс исключения
В нашем случае try..catch предназначен для выявления ошибок, связанных с некорректными данными. 
Но по своей природе catch получает все свои ошибки из try. Здесь он получает неожиданную ошибку, 
но всё также показывает то же самое сообщение "JSON Error". Это неправильно и затрудняет отладку кода.

Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.
*/
'use strict';

alert("Start 4probros1_tryCatchError");              // така побудова роздільно обробляє помилки
//«проброс исключения»


let json = '{ "age": 30 }'; // данные неполны
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // ЕСЛИ ОШИБКА - СЛЕДУЮЩИЙ КОД НИКОГДА НЕ ВЬІПОЛНИТСЯ
  }

  blabla(); // неожиданная ошибка ReferenceError

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {

    alert( "JSON Error: " + e.message );

  } else {                                 // если не "SyntaxError"

      try {                              // встраиваем в else блок try/catch для неожиданной ошибки ReferenceError
        throw e;

      } catch(e) {
          alert( "Undefined Error: " + e.message ); // Undefined Error: blabla is not defined
      }
  }
}



alert("End");

