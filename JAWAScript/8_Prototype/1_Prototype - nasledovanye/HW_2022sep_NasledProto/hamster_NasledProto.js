/* JawaScript - hamster_NasledProto 
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/
'use strict';
alert("Start hamster_NasledProto");


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

lazy.eat("birne");

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple


// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple



alert("End");

