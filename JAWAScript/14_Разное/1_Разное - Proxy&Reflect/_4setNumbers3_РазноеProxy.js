/* JawaScript - Proxy_Разное
Валидация с ловушкой «set»
методы массива push и unshift и другие внутри себя используют операцию [[Set]], которая перехватывается прокси

С пом  return Reflect.get  возвращаем в код свойство target.prop
С пом  return Reflect.set  возвращаем в код true при удачной операции записи
*/
'use strict';

alert("Start _4setNumbers3_РазноеProxy");


let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      alert("Неверньій тип данньіх"); // Предупреждаем (вариант без генерации ошибки)
      return true;                    // возвращаем инвариант чтобьі код не падал
    }
  }
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
alert("Длина: " + numbers.length); // 2

numbers.push("тест"); // Неверньій тип данньіх (ловушка set на прокси вернула предупреждение о незаписи)





alert("End");

