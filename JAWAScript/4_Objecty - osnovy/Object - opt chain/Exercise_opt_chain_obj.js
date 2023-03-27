/* JawaScript - Опциональная цепочка */
'use strict';

alert("Start Exercise_opt_chain_obj");

function Man( {}, name, is) { 

    //this.nicname = {};    
/* без этого свойства при обращении к соотв. свойству объекта возн 
ошибка. Закоментируем nicname свойство для єксперимента*/

    this.name = name;
    this.admin = function () {
        return is;
    }; 
}


let john = new Man( {}, "John", "I am Admin");
john.nicname = {nic: "Jo"};

let bibel = new Man( {}, "Bibel");

let leila = new Man( {},"Leila");
    //leila.nicname = {nic: "Le"};    //закоментируем св nicname для єксперимента
    // leila.nicname = {};
let alex = new Man( {}, "Alex");

alert("john.name:  " + john.name);  // John
alert("john.admin():  " + john.admin());  // I am Admin
alert("john.nicname.nic:  " + john.nicname.nic);  // Jo

alert("leila.name:  " + leila.name);  // leila
alert("leila.admin():  " + leila.admin());  // undefined
alert("leila.nicname?.nic:  " + leila.nicname?.nic);  // undefined   !!!
// без опц цепочки  ?.  код умирает (ошибка)




alert("End");
