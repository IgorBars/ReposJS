/* JawaScript - Class 

В коде ниже класс Rabbit наследует Animal.

К сожалению, объект класса Rabbit не создаётся. Что не так?
*/
'use strict';

alert("Start Rabbit_ClassNasled");

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
        constructor(name){
        super(name)             //обязательно при наследовании класса
        this.created = new Date();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);
  alert(rabbit.created );

alert("End");

