/* JawaScript - prob_classConstr_basicSintaxClass 

*/
'use strict';
alert("Start prob_classConstr_basicSintaxClass");                  // ЗАПУСКАТЬ В КОНСОЛИ!!!


class Schownehmer {

    constructor(name) {
        this.name = name;
    }

    Surname = "Mank";                           // свойство объекта.
    i = 0;

    schowSurname() {
    
        let output = this.Surname 
        .replace('k', " №" + this.i);          //замена в строке символа
        console.log("Hi, " + this.name + " " + output + "!");
    }

    stop() {                                    // метод "останова" - объявляем перед start() !!!
        clearInterval(this.timer);
    }

    start() {                                   // метод "запуска"
        this.schowSurname();
        this.timer = setInterval(() => { this.i++; this.schowSurname() }, 1000);
    }
}


let schownehmer = new Schownehmer("Peter");


schownehmer.start();
setInterval(() => schownehmer.stop(), 10000);   // зупинка через 10с


alert("End");

