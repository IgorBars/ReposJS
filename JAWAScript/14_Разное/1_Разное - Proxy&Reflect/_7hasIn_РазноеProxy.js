/* JawaScript - Proxy_Разное            «В диапазоне» с ловушкой «has»
Мы бы хотели использовать оператор in, чтобы проверить, что некоторое число находится в указанном диапазоне.
Ловушка has перехватывает вызовы in.
*/
'use strict';

alert("Start _7hasIn_РазноеProxy");

let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {    //проксируем об'ьект ловушкой has(target, prop) для обновленной работьі     key in obj
    has(target, prop) {       // prop - запрашиваемое (проверяемое свойство)
      return prop >= target.start && prop <= target.end
    }
});

alert(5 in range); // true
alert(50 in range); // false




alert("End");

