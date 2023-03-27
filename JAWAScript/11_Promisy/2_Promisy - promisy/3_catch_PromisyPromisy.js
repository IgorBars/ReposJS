/* JawaScript - 3_catch_PromisyPromisy
                                            catch - обработчик только результата-ошибки
Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента обработчика then: 
.then(null, errorHandlingFunction). 

Или можно воспользоваться методом-обработчиком .catch(errorHandlingFunction), который сделает то же самое короче
*/
'use strict';
alert("Start 3_catch_PromisyPromisy");


let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// promise.catch(f)   это то же самое, что    promise.then(null, f)
promise.catch(alert); // Error: Ошибка!     ( = promise.then(null, alert) )



alert("End");

