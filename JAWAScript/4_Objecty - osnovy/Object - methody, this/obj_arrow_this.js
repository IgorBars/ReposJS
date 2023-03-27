/* JawaScript - метод объекта, стрелочная функция с this в методе  */
'use strict';

alert("Start obj_method_this");

//Стрелочные функции особенные: у них нет своего «собственного» this. 
//Если мы используем this внутри стрелочной функции, то его значение 
//  берётся из внешней «нормальной» функции.

//Например, здесь arrow() использует значение this из внешнего 
//  метода user.sayHi():

let user = {
    firstName: "Илья",

    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
    
  };
  
  user.sayHi(); // Илья


alert("End");