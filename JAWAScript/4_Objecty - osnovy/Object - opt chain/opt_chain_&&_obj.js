/* JawaScript - Опциональная цепочка */
'use strict';

alert("Start opt_chain_&&_obj");


function Man(Name, Age, Adress) { 
    this.name = Name;
    this.age = Age;
    this.adress = Adress;
};

let man = new Man("Alex", 30, "Manchester");
alert(man.name);
// проверка на наличие несуществующего свойства surname
// используем цепочку свойств и оператор &&
alert(`Result = ${Man && man.surname && man.name && man.age && man.adress}`);
// undefined - свойство surname отсутствует

alert("End");
