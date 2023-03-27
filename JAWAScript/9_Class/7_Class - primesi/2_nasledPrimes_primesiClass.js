/* JawaScript - 2_nasledPrimes_primesiClass
Примеси могут наследовать друг друга.
 */
'use strict';
alert("Start 2_nasledPrimes_primesiClass"); 

let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
};

let sayHiMixin = {
    
    sayHi() {
      // вызываем метод родителя
      super.say(`Привет, ${this.name}`);
    },
    sayBye() {
      super.say(`Пока, ${this.name}`);
    }
};

Object.setPrototypeOf(sayHiMixin, sayMixin); // sayHiMixin наследует от sayMixin

class User {
    constructor(name) { // при створенні об'єкту вхідний авраметр: ім'я
      this.name = name;
    }
}

// копіюємо методи у об'єкт User.prototype, але кожен з них має приховану властивість [[HomeObject], яка вказує на obj sayHiMixin 
Object.assign(User.prototype, sayHiMixin);
// тому виклик super буде шукати об'єкт-прототип для об'єкту sayHiMixin (не для класу User)

new User("Вася").sayHi(); // Привет, Вася!

/*
Так как super ищет родительские методы в [[HomeObject]].[[Prototype]], это означает sayHiMixin.[[Prototype]], 
а не User.[[Prototype]].
(для цього фокусу потрібно копіювати саме методи, а не functions)
*/
alert("End");

