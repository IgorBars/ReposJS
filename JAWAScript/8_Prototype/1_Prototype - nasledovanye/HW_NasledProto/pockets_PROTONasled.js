/* JawaScript - _PROTONasled 
- Прототипы и наследование

Геттеры и сеттеры из под объекта вызываются (в случае их отсутствия) в прототипе.

Методы и свойства, заимствованные из прототипов становятся "местными" -
т.е. становятся методами и свойствами данного объекта
*/
'use strict';

alert("Start pockets_PROTONasled");

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  pockets.__proto__ = bed;
  bed.__proto__ = table;
  table.__proto__ = head;

  alert(pockets.pen);

alert("End");

