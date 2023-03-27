/* JawaScript - _classConstr_basicSintaxClass 

        КЛАС - КОНСТРУКТОР ОБ'ЄКТУ

    - без області параметрів    (вона в constructor);
    - constructor з областю параметрів ( напр. призначення імені);
    - скорочений синтаксис методів:   sayHi() {...}  (як у об'єкті);
    - синтаксис методів без - ; (без крапкоми)

        - об'ява властивості: без - this   (без об'яв новостворені властивості будуть віртуальними (прихованими));
        - А В МЕТОДІ (у блоці коду, де вона видима) ЗМІННА ОБ'ЯВЛЯЄТЬСЯ ЧЕРЕЗ let (без доступу зовні дужок блоку методу) !!!
*/
'use strict';
alert("Start _classConstr_basicSintaxClass");


class User {

    constructor(name) {                 // унікальне ім'я об'єкту
        this.name = name;               // constructor записує разово у момент виклику new
        // return this.count = 0;
    }

    initcount() {return this.count = 0;} // властивість  об'єкту об'явлена з методу

    incrcount() {
        this.count++;
        return this.count
    }

    decrcount() {
        this.count--;
        return this.count
    }

    getcount() {
        return this.count;
    }
}

let john = new User("John");

alert("john.name: "  + john.name);                      // john.name: John

alert( "john.initcount(): "  + john.initcount() );      // john.initcount(): 0
alert("john.count: "  + john.count);                    // john.count: 0
alert("john.getcount(): "  + john.getcount());          // john.getcount: 0

alert( "john.incrcount(): "  + john.incrcount() );      // john.incrcount(): 1
alert( "john.incrcount(): "  + john.incrcount() );      // john.incrcount(): 2
alert( "john.decrcount(): "  + john.decrcount() );      // john.decrcount(): 1

alert( "john.getcount(): "  + john.getcount() );        // john.getcount(): 2

alert(Object.getOwnPropertyNames(john));                // name,(count  - після виклику методу john.initcount()

alert("End");

