/* JawaScript - _statMethod_statSvojstvaClass 
*/
'use strict';
alert("Start _statMethod_statSvojstvaClass");

class User {
    constructor(name){
        this.name = name;
    }
// В конструктор поміщають зазвичай властивості, що можуть мати різноманітні вхідні значення параметра при створенні об'єкту
// Властивості, які ініціюються без вхідних параметрів (або 0) - поміщають за межами constructor.
    Method() {                // звичайний метод класу належить об'єкту (має this = об'єкт user)
      alert(this.name);
    }
}

let user = new User("Alex");
user.Method();                 // Alex    (як ім'я об'єкту)

class Animal {
    constructor(name){
        this.name = name;
    }
    static staticMethod() {   // статичний метод класу належить самому класу (має this = клас Animal)
      alert(this.name);
    }
    // static staticMethod2() {
    //   this.staticMethod();       // викличемо статичний метод класу
    // }
}

let animal = new Animal("Alex");
// animal.staticMethod();            // undefined      (об'єкт не має такого методу)
Animal.staticMethod();               // Animal         (як метод класу)
Animal.staticMethod2();               // Animal         (як метод класу)

// class Animal {
//   constructor(name){
//       this.name = name;
//   }
// }
// Animal.staticMethod = function() {   // фактично той самий статичний метод (присвоюємо зовні класу Animal як об'єкту)
//   alert(this.name);
// }

alert("End");

