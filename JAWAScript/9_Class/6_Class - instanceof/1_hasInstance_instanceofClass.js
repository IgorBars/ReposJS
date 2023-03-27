/* JawaScript - 1_hasInstance_instanceofClass
Обычно оператор instanceof просматривает для проверки цепочку прототипов. 
Но это поведение может быть изменено при помощи статического метода Symbol.hasInstance.

Если имеется статический метод Symbol.hasInstance, тогда вызвать его: Class[Symbol.hasInstance](obj). 
Он должен вернуть либо true, либо false
 */
'use strict';
alert("Start 1_hasInstance_instanceofClass"); 


// проверка instanceof будет полагать,
// что всё со свойством canEat: true  - животное Animal
class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }
  
  let obj = { canEat: true };
  alert(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)




alert("End");

