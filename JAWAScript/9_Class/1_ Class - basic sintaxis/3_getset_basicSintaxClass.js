/* JawaScript - 3_getset_basicSintaxClass 
class MyClass {                 <=      function MyFunc() {} - синтаксис дещо схожий до функції-конструктора об'єкту
  prop = value;
  constructor() { this.name }
  method1() { this.prop }
  method2() { this.prop }
  ...
}
*/
'use strict';
alert("Start 3_getset_basicSintaxClass");


class User {
    isadmin = false;                       // isadmin  -задана властивість у кожному створюваному User об'екті.

    constructor(name, nicname) {
        this.name = name;                  // new Викликає сеттер name і записує значення у властивість об'екта _name.
        this.nicname = nicname;                 // nicname  - унікальна властивість об'екта (ініціюється із параметрів User).
    }

    set name(volumen) {                         // сеттер у складі метода-аксесора name (зберігається у User.prototype)
        if( volumen.length < 3 ) {alert("Имя слишком короткое"); return;}
        this._name = volumen;                   // _name властивість об'єкта    (доступна через аксесор name)
    }

    get name() {                                 // геттер у складі метода-аксесора name (зберігається у User.prototype)
        return this._name;
    }
    
}

new User("An", "Bo");                           // Имя слишком короткое

let alex = new User("Alex", "Alek");
// alert("_name:" + alex._name);

alert(alex.isadmin);                            // false
alert(alex.name);                               // Alex
alert(alex.nicname);                            // Alek
alert(User.prototype.constructor.name);         // User     (User.name)

alert(Object.getOwnPropertyNames(alex));            // isadmin,_name,nicname    (властивості у складі об'єкту alex)
alert(Object.getOwnPropertyNames(User.prototype));  // constructor,name         (name - як getset-метод )



alert("End");

