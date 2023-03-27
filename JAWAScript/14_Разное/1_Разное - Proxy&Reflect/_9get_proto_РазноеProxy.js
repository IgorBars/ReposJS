/* JawaScript - _9get_proto_РазноеProxy               Прокси об'ьєкта с геттером
Наследуем об'ьєкт admin от проксированного об'ьєкта с геттером -  userProxy.

Т. к. в об'ьекте   admin   свойство   name  отсутствует, поиск направляется
в прототип - userProxy. Его ловушка get обращается к оригинальному об'ьекту
target= user  - к его геттеру  get name(). Поєтому єтот геттер  get name() вьідает имя 
своего (оригинального) об'ьекта.
*/
'use strict';
alert("Start _9get_proto_РазноеProxy");

let user = {
    _name: "Гость",
    get name() {
      return this._name;
    }
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop]; // (*) target = user, поєтому прокси-get возвращает user.name  (ЗДЕСЬ ПРОБЛЕМА)*
    }
});

let admin = {
    __proto__: userProxy,
    _name: "Админ"
};

// Ожидается: Админ
alert(admin.name); // выводится Гость (?!?)



//Именно для исправления таких ситуаций нужен receiver, третий аргумент ловушки get. 
//В нём хранится ссылка на правильный контекст this, который нужно передать геттеру. В данном случае это admin.

alert("End");

