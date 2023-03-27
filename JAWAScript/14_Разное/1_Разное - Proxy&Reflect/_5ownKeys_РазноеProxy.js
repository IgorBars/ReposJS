/* JawaScript - Proxy_Разное
-   Object.getOwnPropertyNames(obj) возвращает не-символьные ключи.
-   Object.getOwnPropertySymbols(obj) возвращает символьные ключи.
-   Object.keys/values() возвращает не-символьные ключи/значения с флагом enumerable (подробнее про флаги свойств было в главе Флаги и дескрипторы свойств).
-   for..in перебирает не-символьные ключи с флагом enumerable, а также ключи прототипов.

Object.keys, цикл for..in и большинство других методов, которые 
работают со списком свойств объекта, используют внутренний метод [[OwnPropertyKeys]],
перехватываемый ловушкой "ownKeys"

 используем ловушку ownKeys, чтобы цикл for..in по объекту, 
 равно как Object.keys и Object.values пропускали(не видели) свойства, 
 начинающиеся с подчёркивания _
*/
'use strict';

alert("Start _5ownKeys_РазноеProxy");

let user = {
    name: "Вася",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
      // return Object.keys(target).filter(key => !key.startsWith('n'));
      return Object.keys(target).filter(key => !key.startsWith('_'));
    } // исключаем ключи с подчеркиванием !!!
});

// ownKeys исключил _password
for(let key in user) alert(key); // name, затем: age

// аналогичный эффект для этих методов:
alert( Object.keys(user) ); // name,age
alert( Object.values(user) ); // Вася,30


// а вот оператор in продолжает определять _password (для него ловушка has)
alert( "_password" in user ); // true

alert("End");

