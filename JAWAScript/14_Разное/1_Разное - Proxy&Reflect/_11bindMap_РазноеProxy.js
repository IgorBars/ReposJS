/* JawaScript - Proxy_Разное
Внутри себя объект типа Map хранит все данные во внутреннем слоте [[MapData]]. 
Прокси не имеет такого слота. Встроенный МЕТОД Map.prototype.set пытается получить 
доступ к своему внутреннему свойству this.[[MapData]], но так как this=proxy, 
то не может его найти и завершается с ошибкой.

Есть способ исправить это:    привязать свойства-методьі к оригинальному Map
*/
'use strict';

alert("Start _11bindMap_РазноеProxy");


let map = new Map();

let proxy = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments); // не просто возвр прочитанное свойство с пом Reflect.get
    return typeof value == 'function' ? value.bind(target) : value;
    // а пров его тип, и если функция (напр map.set) - привяз ее к оригинальному Map
  }
});

proxy.set('test', 1);
alert(proxy.get('test')); // 1 (работает!)


// Сейчас всё сработало, потому что get привязывает свойства-функции, такие как map.set, 
//к оригинальному объекту map. Таким образом, когда реализация метода set попытается получить 
//доступ к внутреннему слоту this.[[MapData]], то всё пройдёт благополучно.




alert("End");

