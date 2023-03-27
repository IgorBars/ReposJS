/* JawaScript - 1_static_statSvojstvaClass

Мы також можемо присвоїти метод/властивість самому класу як об'єкту (а не створюваному об'єкту). Такі методи/властивості називаються 
СТАТИЧНИМИ и зберігаються відповідно у САМОМУ ОБ'ЄКТІ-КЛАСІ (як звичайні методи/властивості у об'єкті).
  (На відміну від звичайних методів/властивостей класу: властивості - у об'єкті класу, методи - у прототипі класу)
                                  СТАТИЧНІ МЕТОДИ
Ключове слово     - static (перетворює метод об'єкту у метод класу як об'єкту  -без доступу з створюваного об'єкту).

Обычно статические методы используются для реализации функций, принадлежащих классу целиком, вообще, 
и при этом не относящимся к каким-то отдельным объектам.
*/
'use strict';

alert("Start 1_static_statSvojstvaClass");

class User {
    static staticMethod() {
      alert(this === User);   // this.staticMethod == User.staticMethod
    }
}
// Значением this при вызове User.staticMethod() является сам конструктор класса User (правило «объект до точки»).
User.staticMethod(); // true

  //Это фактически то же самое, что присвоить метод напрямую как свойство функции:
class User1 { }

User1.staticMethod = function() {
    alert(this === User1);
};


alert("End");
