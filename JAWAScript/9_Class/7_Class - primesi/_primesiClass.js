/* JawaScript - _primesiClass
Примесь – это класс, методы которого предназначены для использования в других классах, причём без наследования от примеси.
 */
'use strict';
alert("Start _primesiClass"); 

// примесь
let sayHiMixin = {
    sayHi() {
      alert(`Привет, ${this.name}`);
    },
    sayBye() {
      alert(`Пока, ${this.name}`);
    }
};

// использование:
class User {
    constructor(name) {
      this.name = name;
    }
}

// копіюєм методи із об'єкту sayHiMixin у об'єкт User.prototype (саме там зберігаються методи User)
// за допомогою методу класу Object
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!



/*
*/
alert("End");

