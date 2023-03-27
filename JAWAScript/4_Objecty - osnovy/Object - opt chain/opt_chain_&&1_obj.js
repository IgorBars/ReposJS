/* JawaScript - Опциональная цепочка */
'use strict';

alert("Start opt_chain_&&1_obj");


function Man(Name, Age, Adress) { 
    this.name = Name;
    this.age = Age;
    this.adress = Adress;
};

let man = new Man("Alex", 30, "Manchester");

        // man = null;
        // man = {name: "Alex"};
// ошибка, когда отсутствует не только свойство, но и подсвойство
alert("man.name: " + man.name);         //  Alex
alert("man.surname: " + man.surname);   //  undefined
        alert("man.surname.street: " + man.surname?.street);//  undefined
alert(`Result man.adress.street: ${man.adress.street}`);   //  undefined

        // проверка на наличие несуществующего свойства surname
        // используем цепочку свойств и оператор &&
alert(`Result = ${Man && man.surname && man.name && man.age && man.adress}`);
        // undefined - свойство surname отсутствует

alert("End");
