/* JawaScript - 3symbol_skrytost_obj*/
'use strict';

alert("Start 3symbol_skrytost_obj");

let id = Symbol("id_name");
let user = {
  name: "Alex",
  surname: "Sykorsky",
  [id]: 123,
};

alert("Символьное св user[id] при прямом доступе:  " + user[id] );  //123

for (let key in user) alert("for key in user: " + key);  // name,surname
//  for key in user  не видит Символьное св user[id]

alert("Object.keys(user):  " + Object.keys(user) ); // name,surname
// Object.keys(user) не видит Символьное св user[id]


// Object.assign, в отличие от цикла for..in, копирует и строковые, и 
// символьные свойства:
let clone = Object.assign({}, user);

alert( clone[id] ); // 123




alert("End");

