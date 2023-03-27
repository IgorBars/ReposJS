/* JawaScript - преобразование объекта к примитивам */
'use strict';

alert("Start valueOf_ToString_obj");

let room = {
    number: 777,
  
    valueOf: function() { return this.number; },  // преимущественный вызов
    toString: function() { return this.number; }
  };
  
alert( +room );  // 777, вызвался valueOf
  
delete room.valueOf; // valueOf удалён

alert( +room );  // 777, вызвался toString
alert( room );   // 777, вызвался toString

alert("End");
