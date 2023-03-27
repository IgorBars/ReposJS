/* JawaScript - Опциональная цепочка */
'use strict';

alert("Start opt_chain_obj");

function Man(Name, Surname, Age) { 
    this.name = Name;
    this.surname = Surname;
    this.age = Age;
};

let man = new Man("Alex", "Bishop", 30);

// проверка на наличие несуществующего свойства adress
// используем опциональную цепочку ?.
alert(`Result man.adress?.street, man.adress отсутствует = ${man.adress?.street}`);
// undefined - свойство adress.street отсутствует

//alert(`Result man.adress.street, = ${man.adress.street}`); - ошибка, код умер

alert(`Result man?.name, name в наличии = ${man?.name}`);
// Alex - свойство name в наличии

// man лучше не проверять, будучи в нем уверенным
alert(`Result man.name?.ident, name.ident отсутствует = ${man.name?.ident}`); 
// undefined - свойство name.ident отсутствует

man = null; // проверяем наполненность переменной man
alert(`Result man?.name, man = null: ${man?.name}`);   // undefined

alert("End");
