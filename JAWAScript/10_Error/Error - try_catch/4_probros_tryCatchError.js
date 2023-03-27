/* JawaScript - 4_probros_tryCatchError

В нашем случае try..catch предназначен для выявления ошибок, связанных с некорректными данными. Но по своей природе catch 
получает все свои ошибки из try. Здесь он получает неожиданную ошибку, но всё также показывает то же самое сообщение "JSON Error". 
Это неправильно и затрудняет отладку кода.

*/
'use strict';

alert("Start 4_probros_tryCatchError"); 
//«проброс исключения»


let json1 = '{ "age": 30 }'; // данные неполны

try {
  user = JSON.parse(json1); // <-- забыл добавить "let" перед user

  // ...
} catch(err) {
    alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (не JSON ошибка на самом деле)
}



let json = '{ "age": 30 }';              // данные неполны
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla();                             // неожиданная ошибка ReferenceError

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );

  } else {
      throw e;                            // проброс исключения
                                          //(но так код падает(throw не в try), нужно обернуть еще раз try...catch)
  }
}



alert("End");

