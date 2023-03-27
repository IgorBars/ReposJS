/* JawaScript - */
'use strict';

alert("Start Symbol_obj");


let id = Symbol.for("ident");
let id1 = Symbol.for("ident1");
//alert(id); 
// TypeError: Cannot convert a Symbol value to a string
alert("id.toString(): " + id.toString() ); 
alert("id.description возвращает описание: " + id.description);

let user = {
    name: "Вова",
    age: 30
  };
  
user[id] = "ОПГ"; // объявляем символьный ключ
user[id1] = "ОПГ1";
alert("user[id]: " + user[id] ); //   ОПГ
alert("user[id1]: " + user[id1] ); //   ОПГ1

let id2 = Symbol.for("ident2");
user[id2] = "Их идентификатор"; 
alert("user[id2]: " + user[id2] ); // Их идентификатор  
//Символьный ключ лучше свойства, потому что не допускает случайной
//сторонней перезаписи свойства, ведь для обращения к такому свойству
// нужно предварительно объявить символ user[id] = . 
//А повторное объявление одинакового символа убивает код.

// Обычное же свойство (не зная о его наличии) можно ненамеренно 
// перезаписать, просто обратившись user.id = .
for(let key in user) {
    alert("Цикл for..in: " + key);
}

alert("Object.keys(user): " + Object.keys(user) );

alert("Symbol.keyFor(id2)" + Symbol.keyFor(id2) );

alert("End");
