/* JawaScript - Proxy_Разное
Object.keys, цикл for..in и большинство других методов, которые 
работают со списком свойств объекта, используют внутренний метод [[OwnPropertyKeys]]
 (перехватываемый ловушкой "ownKeys")

Чтобы Object.keys возвратил свойство,нужно либо чтобы свойство в объекте физически 
было, причём с флагом enumerable, либо перехватить вызовы [[GetOwnProperty]] 
(это делает ловушка getOwnPropertyDescriptor), 
и там вернуть дескриптор с enumerable: true.
*/
'use strict';

alert("Start _5ownKeysNewProp_РазноеProxy");
// возвратим новое свойство, которого нет в оригинальном об'ьекте
let user = { };

user = new Proxy(user, {
//"Вьізьіваем метод для об'ьекта (target=user), возвращая новьіе свойства"
  ownKeys(target) { // вызывается 1 раз для получения списка свойств
    return ['takyh', 'vlastyvostey', 'sche', "ne_bulo"];
  },

  //"Вьізьіваем метод для каждого свойства об'ьекта (target=user: prop...), 
  //возвращая дескрипторьі свойств(enumerable,configurable) с требуемьіми значениями"
  getOwnPropertyDescriptor(target, prop) { // вызывается для каждого свойства
    return {
      writable: true, // чтобьі можно бьіло присвоить св-ву зн
      enumerable: true,
      configurable: true,
      
      /* ...другие флаги, возможно, "value: ..." */
    };
  }

});

alert( Object.keys(user) );                         // takyh,vlastyvostey,sche,ne_bulo

for(let key in user) alert(`key: ${key}`);          // key: takyh      key: vlastyvostey     ...
user.takyh = "Новое_свойство"; alert(user.takyh);   // Новое_свойство
alert(user.svoystv);
//  получение дескриптора нужно перехватывать в ситуациях отсутствия в объекте нужного свойства.

alert("End");

