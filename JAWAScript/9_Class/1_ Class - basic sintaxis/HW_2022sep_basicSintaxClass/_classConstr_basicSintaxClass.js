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

    constructor(name) {                 // властивість унікального імені об'єкту
        this.name = name;               // constructor ініціалізує разово у момент виклику new
    }

    count = 0;

    setcount() {
        this.count++;
    }

    getname() {
        return this.name;
    }

    setgetcount() {
        this.setcount();
        return this.count;
    }

    getTime() {
        let now = new Date();           // змінні, об'явлені let now     у методі об'єкту - недоступні зовні об'єкту
                                        // змінні, об'явлені let time    у методі об'єкту - недоступні зовні об'єкту
        let time = now.getHours() + " Hours " + now.getMinutes() + " Minutes";
        return time;
    }
}

let john = new User("John");

alert("john.name: "  + john.name);                     // john.name: John          (ім'я напряму)

alert("john.count: "  + john.count);                    //john.count: 0             (count напряму)

alert( "john.getname(): "  + john.getname() );          // john.getname(): John        (ім'я через метод об'єкту)

alert( "john.setgetcount(): "  + john.setgetcount() );  // john.setgetcount(): 1     (count через метод об'єкту у методі об'єкту)
alert( "john.setgetcount(): "  + john.setgetcount() );  // john.setgetcount(): 2

alert( "john.getTime: "  + john.getTime() );    // john.getTime: 18 Hours 9 Minutes
alert( "john.time: "  + john.time );            // undefined    (нема доступу до змінної, об'явленої let time у методі об'єкту)

alert("End");

