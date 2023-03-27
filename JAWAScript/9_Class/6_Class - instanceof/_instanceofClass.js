/* JawaScript - _instanceofClass
Оператор instanceof вертає true, если obj принадлежит классу Class или наследующему от него.
 */
'use strict';
alert("Start _instanceofClass"); 


class Rabbit {}
let rabbit = new Rabbit();


alert( rabbit instanceof Rabbit );       // true  (як об'єкт класу Rabbit)

class WhiteRabbit extends Rabbit {}
let whiteRabbit = new WhiteRabbit();

alert( whiteRabbit instanceof Rabbit ); // true  (як об'єкт класу WhiteRabbit, що наслідує клас Rabbit)
alert( whiteRabbit instanceof Object ); // true  (як об'єкт класу WhiteRabbit, що наслідує клас Object)


// Также это работает с функциями-конструкторами:
function Mous() {}

alert( new Mous() instanceof Mous ); // true




alert("End");

