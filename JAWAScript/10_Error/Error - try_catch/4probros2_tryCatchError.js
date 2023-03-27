/* JawaScript - 4probros2_tryCatchError
*/
'use strict';

alert("Start 4probros2_tryCatchError");


//ловим проброс снаружи
function readData() {
    let json = '{ "age": 30 }';
  
    try {

      if (!user.name) {
        throw new SyntaxError("Данные неполны: нет имени"); // НІКОЛИ НЕ СПРАЦЮЄ
      }

      blabla(); // ошибка!

    } catch (e) {

        if (e.name == "SyntaxError") {

          alert( "JSON Error: " + e.message );

        } else {

            throw e; // проброс исключения (не знаю как это обработать)
        }
    }
}
  
  //  => поэтому оборачиваем еще раз в try...catch)
try {
  readData();

} catch (e) {
    alert( "Внешний catch поймал: " + e ); // поймал!       ( ЗОВНІЩНІЙ try  СПОЧАТКУ ЛОВИТЬ поза внутрішнім)
}


alert("End");

