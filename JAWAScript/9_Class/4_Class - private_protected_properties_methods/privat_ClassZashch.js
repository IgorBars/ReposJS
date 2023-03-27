/* JawaScript - ClassPrivat I Zashch


*/
'use strict';

alert("Start privat_ClassZashch");

class CoffeeMachine {

    waterTemp = 0;

    #waterAmount = 0; // приватноe св
    
    #nameTrade = "DDR"; // приватноe св
    
    constructor (name) {
        this.name = name;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) { //установщик приватного св
        if (value < 0) alert("Отрицательный уровень воды");
        this.#waterAmount = value;
    }


    get nameTrade() {
        return this.#nameTrade;
    }

    varnameTrade() {
        this.#nameTrade = "RP";
    }

    shownameTrade() {
        alert("shownameTrade():  " + this.#nameTrade); 
    }
}

let coffeeMachine = new CoffeeMachine("Zanussy");
// coffeeMachine.name = "Bosh";
 
// coffeeMachine.#waterAmount = 120;// - ошибка доступа к приватному св
coffeeMachine.waterAmount = 110;
coffeeMachine.waterAmount = 120;//уст приватного св через внутренний сеттер
coffeeMachine.waterTemp = 90;
coffeeMachine.varnameTrade();//уст приватного св через внутренний метод

alert(coffeeMachine.name);
alert(coffeeMachine.waterAmount);//читаем приват свойство внутр геттером
alert(coffeeMachine.waterTemp);
alert(coffeeMachine.nameTrade);//читаем приват свойство внутр геттером
coffeeMachine.shownameTrade(); //читаем приват свойство внутр методом

alert( Object.keys(coffeeMachine) ); // waterTemp,name
// приватные св-ва #waterAmount и #nameTrade не отображаются

alert(Object.getOwnPropertyNames(coffeeMachine)); // waterTemp,name
// приватные св-ва #waterAmount и #nameTrade не отображаются

alert(Object.getOwnPropertyNames(CoffeeMachine.prototype)); 
// cconstructor,waterAmount,nameTrade,varnameTrade

alert("End");

