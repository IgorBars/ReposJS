/* JawaScript - */
'use strict';

alert("Start Symbol_keyfor_obj");

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

 
alert(sym.description);  // name

alert("End");
