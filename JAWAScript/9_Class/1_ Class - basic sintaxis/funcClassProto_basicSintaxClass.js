/* JawaScript - funcClassProto_basicSintaxClass 

                            ПОРІВНЯННЯ ФУНКЦІЇ-КОНСТРУКТОРА І КЛАСА-КОНСТРУКТОРА
*/
'use strict';

alert("Start funcClassProto_basicSintaxClass");

function Show(name) {
    this.name = name;                                   // властивість об'єкту

    this.showHi = function () {                         // метод об'єкту
        alert( "function: " + "Hi, " + this.name + "!" );
    };
}


let show = new Show("Alex");
show.showHi();                                  // function: Hi, Alex!
alert(Object.getOwnPropertyNames(show)); // name,showHi (Всі об'явлені у конструкторі методи за замовчуванням у об'єкті)


Show.prototype.sayBy = function() {                      //можна добавити метод в прототип
    alert(  "function: " + "By, " + this.name + "!" );
};
show.sayBy();                                   // function: By, Alex!          (метод sayBy взято з прототипу)



class ShowName {
    constructor (name) {
        this.name = name;
    }

    showHi() {
        alert( "class: " + "Hi, " + this.name + "!" );
    }

    Duble() { alert("Hi, " + this.name + "!" + "Hi, " + this.name + "!"); }

    showDuble() {
        this.Duble();                           // метод у методі через this
    }
}

let showName = new ShowName("Toby");

showName.showHi();                                  // class: Hi, Toby!
showName.showDuble();                               // Hi, Toby!Hi, Toby!

alert(Object.getOwnPropertyNames(ShowName.prototype)); // constructor,showHi,Duble,showDuble 
                                                    // (Всі об'явлені у конструкторі методи за замовчуванням у прототипі)


alert("End");

