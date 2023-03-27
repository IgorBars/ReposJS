/* JawaScript - _GeneratorGnrtr
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
*/
'use strict';

alert("Start HW_wrap_РазноеProxy");


let user = {
  name: "John"
};

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if(!(prop in target) ) { 
//         return new Error("Ошибка: такого свойства не существует");
//        } else { return Reflect.get(target, prop, receiver); }
//     }
//   });
// }
function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if(prop in target) { 
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Свойство не существует: "${prop}"`) 
      }
    }
  });
}

user = wrap(user);  // проксируем об'ьект user

alert(user.name); // John

try {
  alert(user.age); // Ошибка: такого свойства не существует
} catch(e) { alert(e.message); }




alert("End");

