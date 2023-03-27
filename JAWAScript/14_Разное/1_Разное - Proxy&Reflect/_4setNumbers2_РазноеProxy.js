/* JawaScript - Proxy_Разное
Валидация с ловушкой «set»
методы массива push и unshift и другие внутри себя используют операцию [[Set]], которая перехватывается прокси

С пом  return Reflect.get  возвращаем в код свойство target.prop
С пом  return Reflect.іet  возвращаем в код true при удачной операции записи
*/
'use strict';

alert("Start _4setNumbers2_РазноеProxy");
// используем Reflect.set(target, prop, val) для простотьі


let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val !== 'number') {
        return false;                           //  для генерации ошибки записи
    } else {
        return Reflect.set(target, prop, val);  // -Reflect обращается к внутреннему set (кот также возвр штатньій инвариант)
      }
  }
});

try {
    numbers.push(1); // добавилось успешно в Reflect.set(target, prop, val)
    numbers.push(2); // добавилось успешно в Reflect.set(target, prop, val)
    alert("Длина: " + numbers.length); // 2

    numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
    alert("Длина: " + numbers.length); // 
    alert("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");
} catch(er) { alert(er.message); }



alert("End");

