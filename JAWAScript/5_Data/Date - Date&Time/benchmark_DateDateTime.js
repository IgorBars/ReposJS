/* JawaScript - Объект Time 
// АВТОИСПРАВЛЕНИЕ ДАТЫ
*/


'use strict';

alert("Start benchmark_DateDateTime");


function diffSubtract(date1, date2) {   // ввираховуємо різницю без перетворення
    return date2 - date1;
}
  
function diffGetTime(date1, date2) {   // ввираховуємо різницю з перетворенням у ms
    return date2.getTime() - date1.getTime();
}
  
function bench(f) {
    let date1 = new Date(0);   // дата 1 січ 1970 
    let date2 = new Date();    // теперішня дата
  
    let start = Date.now();                             // початок бенчу
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;                          // час виконання бенчу
}
  
  let time1 = 0;
  let time2 = 0;
  // добавляем для "разогрева" перед основным циклом
  bench(diffSubtract);                                  // одноразовий запуск diffSubtract
  bench(diffGetTime);                                   // одноразовий запуск diffGetTime


  // ОСНОВНИЙ ТЕСТ
  // bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'Итоговое время diffSubtract: ' + time1 ); // 126
  alert( 'Итоговое время diffGetTime: ' + time2 );  // 9





alert("End");

