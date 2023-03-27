/* JawaScript - 2_newUser_basicSintaxClass 

class MyClass {                 <=      function MyFunc() {} - синтаксис дещо схожий до функції-конструктора об'єкту
  prop = value;
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  ...
}
*/
'use strict';

alert("Start 2_newUser_basicSintaxClass");

function Func() {}
alert(typeof(Func));                          // function


class User {
  constructor (name) {this.name = name}
  sayHi() { alert(this.name); }
}
alert(typeof(User));                          // function
alert(User.constructor);                      // function Function() { [native code] }      (моя реализация при об'ьявлении)


/*Вот что на самом деле делает конструкция class User {...}:

1. Создаёт функцию с именем User, которая становится результатом объявления класса. 
    (Код функції -це метод constructor (функція буде пустою, якщо такого метода нема. -Зберігається у User.)
2. Створює прототип класу - об'єкт User.prototype:
*/
alert(Object.getOwnPropertyNames(User.prototype));  // constructor,sayHi  (!!!)
/**/
let john = new User("John"); // - далі створюємо new об'єкт john

/*(метод constructor спрацьовує один раз у момент виклику new User("John") (при створенні чергового об'єкту))
2. При створенні об'єкту john оператор new одноразово викликає метод constructor і ініціалізує створюваний об'єкт
                                                      (в нашому випадку -зберігає у об'єкті властивість name).


                          ВАЖЛИВО !
1. На відміну від "new Function()", при створенні об'єкту "new Сlass()" всі методи (напр. sayHi) зберігаються в User.prototype:

    User.prototype {
      constructor: User,  (рідна властивість за замовчуванням посилається на class User)
      sayHi: function     (всі методи із об'явленого класу, крім метода constructor)
      ...
    }
Таким чином після створення об'єкту при виклику методу він буде взятий з User.prototype.

2. Всі властивості об'єкту (також набуті з своїх методів, з методів прототипів) зберігаються у самому об'єкті.
*/


// Рідна властивість constructor у прототипі класу/об'єкту передбачувано вказує на конструктор класу User
alert(User.prototype.constructor);// == User        // class User {
                                                    //    constructor (name) {this.name = name}
                                                    //    sayHi() { alert(this.name); }
                                                    // }


// тепер у прототипі рівно 2 властивості: - рідна властивість constructor   і   добавлений метод класу sayHi:
alert(Object.getOwnPropertyNames(User.prototype));   // constructor, sayHi    <=(constructor: User, sayHi())

// a у обєкті тепер 1 властивість name:
alert(Object.getOwnPropertyNames(john));             // name: john  - значення "john" записано у властивість name 
                                                     // у момент виклику new User("John") реалізацією методу constructor 

// Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех 
//методов в "prototype".

// И это хорошо, так как если мы проходимся циклом for..in по объекту, то обычно мы не хотим при этом получать методы класса.

alert("End");

