/* JawaScript - _12bindPrivatValue_РазноеProxy
Внутри себя объект хранит данные о приватньіх полях во внутренних слотов [[...Data]]. 
JavaScript не использует [[Get]]/[[Set]] при доступе к ним.
Прокси не имеет такого слота.

class User {
  #name = "Гость";

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {});

alert(user.getName()); // Ошибка при попьітке вьізвать геттер для приватного поля


К счастью, есть способ исправить это:    привязать свойства-методьі к оригинальному объекту
*/
'use strict';
alert("Start _12bindPrivatValue_РазноеProxy");


class User {
    #name = "Гость";
  
    getName() {
      return this.#name;
    }
}

let user = new User();

user = new Proxy(user, {
    get(target, prop, receiver) {
      let value = Reflect.get(...arguments);       // не просто возвр прочитанное свойство с пом Reflect.get
      return typeof value == 'function' ? value.bind(target) : value;
    }
});

alert(user.getName()); // Гость


//  Однако, такое решение имеет ряд недостатков, о которых уже говорилось: методу передаётся оригинальный объект, 
//который может быть передан куда-то ещё, и это может поломать всю функциональность проксирования.

alert("End");

