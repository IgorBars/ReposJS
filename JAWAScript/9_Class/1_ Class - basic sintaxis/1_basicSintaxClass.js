/* JawaScript - 1_basicSintaxClass 
                                        СИНТАКСИС КЛАСУ
На практике нам часто надо создавать много объектов одного вида, например пользователей, товары или что-то ещё.

Как мы уже знаем из главы Конструктор, оператор "new", с этим может помочь new function.

Но в современном JavaScript есть и более продвинутая конструкция «class», которая предоставляет новые возможности, 
полезные для объектно-ориентированного программирования.

class MyClass {            function MyFunc() {} - синтаксис дещо схожий до функції-конструктора об'єкту
  prop = value;
  constructor() { ... }         <= constructor - головний метод об'єкту для ініціалізації об'єкту
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
*/
'use strict';

alert("Start 1_basicSintaxClass");

class User {                        // function MyFunc() {}         - але без області параметрів ()
        
    constructor(name) {             // область параметрів () у constructor
        this.name = name;
    }
// В конструктор поміщають зазвичай властивості, що можуть мати різноманітні вхідні значення параметра при створенні об'єкту
// Властивості, які ініціюються без вхідних параметрів (або 0) - поміщають за межами constructor.


    isadmin = false;                // let isadmin = false;         - але без  let / this  у назві властивостей

    Sayname() {                     // this.samemethod() {}         - але без this у назві методів
        alert(this.name);
    }                               // методи не відділяються     - ;
}

let user = new User("Alex");

alert(user.isadmin);               // false

user.Sayname();                    // Alex



alert("End");

