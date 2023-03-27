/* JawaScript - Ex_RebbitExtendsObj_statSvClass 
Все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

    // метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true

Виправити "class Rabbit extends Object"
*/
'use strict';
alert("Start Ex_RebbitExtendsObj_statSvClass");


class Rabbit extends Object {
    constructor(name) {
        super();
      this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // (Ошибка)


alert("End");

