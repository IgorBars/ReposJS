/* JawaScript - _PROTONasled 
- Прототипы и наследование

Геттеры и сеттеры из под объекта вызываются (в случае их отсутствия) в прототипе.

Методы и свойства, заимствованные из прототипов становятся "местными" -
т.е. становятся методами и свойствами данного объекта
*/
'use strict';

alert("Start hamster_PROTONasled");

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],        // в об'ьекте ниже по цепочке прототипов должно б'ьіть об'явлено свое собственное свойство,
    __proto__: hamster  // иначе результат метода єтого об'ьекта запишется в чужое свойство об'ьекта в'ьіше по цеп прототипов
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple

alert("End");

