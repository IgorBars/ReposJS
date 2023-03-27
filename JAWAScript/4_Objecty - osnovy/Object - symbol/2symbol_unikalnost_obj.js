/* JawaScript - 2symbol_unikalnost_obj*/
'use strict';

alert("Start 2symbol_unikalnost_obj");


let user = {
    name: "Вася"
  };

  user.surname = "Синицын"; /*  добавляя объкновенное свойство, его не нужно
 объявлять через let:   let surname
 поэтому сущ вероятность перезаписать существующее  */


 // для добавления символьного свойства вначале нужно объявить символ//
  let id = Symbol("id_name");
// let id = Symbol("id_name");
/*- уникальность в том, что не получится
создать повторно существующий смимвол  - код умрет (потому что let) */

  user[id] = 1; // добавляем в объ user свойство id: user[id] 
                // (- для симв исп только квадр скобки!),
                // присваиваем этому свойству значение:   1

  alert("Символьное св:  " + user[id] );

  let alex = {
    name: "Alex",
    [id]: 123,
  };
  alert("Символьное св alex[id]:  " + alex[id] );

alert("End");

