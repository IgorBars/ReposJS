/* JawaScript - 6_onerror_tryCatchError
                                              Глобальный catch
  В случае необработанной ошибки можно присвоить функцию специальному 
свойству  window.onerror,
*/
'use strict';

alert("Start 6_onerror_tryCatchError");

window.onerror = function(message, url, line, col, error) {   //   будет вызвана в случае необработанной ошибки.
    alert(`${message}\n В ${line}:${col} на ${url}`);
};         


try {                                           //  ловим ошибки штатно (trу...catch)
  unref = 100;
} catch (e){ alert("unref error: " + e); }


function readData() {
  badFunc();                                  // Ой, что-то пошло не так!
}

readData();                                   // тут сработает подстраховка (window.onerror)


alert("End");

