/* JawaScript - Class 

*/
'use strict';

alert("Start RebbitExtendsObj_ClassStatSv");

class Rabbit extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') ); // Ошибка


alert("End");

