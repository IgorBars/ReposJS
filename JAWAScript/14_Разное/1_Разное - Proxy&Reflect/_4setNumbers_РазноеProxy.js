/* JawaScript - Proxy_Разное
Валидация с ловушкой «set»
методы массива push и unshift и другие внутри себя используют операцию [[Set]], которая перехватывается прокси
(перехватив внутреннюю операцию [[Set]], мьі ее нарушаем/отменяем. Поєтому должньі полностью восстановить
необходимьій алглритм взаимодействия - а именно вернуть инвариант)
*/
'use strict';

alert("Start _4setNumbers_РазноеProxy");

let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;  // - инвариант, иначе - ошибка TypeError !!!
    } else {
      return false; // инвариант (будет сгенерирована ошибка TypeError)
    }
  }
});

try {
    numbers.push(1); // добавилось успешно
    numbers.push(2); // добавилось успешно
    alert("Длина: " + numbers.length); // 2

    numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
    alert("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");
} catch(er) { alert(er.message); }



alert("End");

