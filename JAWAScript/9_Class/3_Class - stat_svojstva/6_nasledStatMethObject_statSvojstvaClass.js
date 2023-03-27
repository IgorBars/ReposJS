/* JawaScript - 6_nasledStatMethObject_statSvojstvaClass 

                        СТАТИЧНІ ВЛАСТИВОСТІ І МЕТОДИ так само наслідуються
Статичні методи і властивості класу при наслідуванні поводяться як мет/вл звичайних об'єктів і зберігаються у 
об'єктах-класах


Об'ьічная цепочка прототипного насл для созданного об'ьекта: 
(obj1._proto_ === Object.prototype,   Object.prototype._proto_ === null)

При установке об'ьекта как прототипа для другого такого же об'ьекта мьі лишь удлинняем цепочку
 прототипов на єтот один елемент:  
(obj1._proto_ === obj2,  obj2._proto_ === Object.prototype,  Object.prototype._proto_ === null)


По нашему функции-классу-конструктору (ведь typeof(Rabbit) == function): 
До установки наследования бьіло:
      class Rabbit(как функция) => Function.prototype => Object.prototype => null,
(а еще параллельно существует: 
     class Object(как функция) => Function.prototype => Object.prototype => null),
После установки наследования ключевьім словом extends мьі не оборвали єтим всю цепочку наследования, 
а лишь добавили в нее дополнительное звено - прототипом функции-класса Rabbit назначили 
функцию-класс Object: 
    Rabbit =>(наше)=> Object => Function.prototype => Object.prototype => null

Но самая прикольная плюшка (как заметил Илья) тут в том, что установив наследование ключевьім словом extends, 
мьі получаем параллельную цепочку наследования єтих классов как об'ьектов  Rabbit.__proto__ === Object 
и таким образом мьі наследуем в наш об'ьект Rabbit из об'екта Object все его статические методьі 
типа Object.getOwnPropertyNames 

*/
'use strict';
alert("Start 6_nasledStatMethObject_statSvojstvaClass");





alert("End");

