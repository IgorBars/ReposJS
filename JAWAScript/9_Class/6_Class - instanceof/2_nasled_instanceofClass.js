/* JawaScript - 2_nasled_instanceofClass
Большая часть классов не имеет метода Symbol.hasInstance. 
В этом случае используется стандартная логика: проверяется, 
равен ли Class.prototype одному из прототипов в прототипной цепочке obj.
 */
'use strict';
alert("Start 2_nasled_instanceofClass"); 


class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Animal.prototype (нет совпадения)
// rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)



alert("End");

