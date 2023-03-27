/* JawaScript - 1_Object_prototype_vstrProtoPrototype     Object.prototype

Значенням прихованої властивості об'єкту obj: [[Prototype]] може бути об'єкт або null. Другі типи ігноруються.

Насправді __proto__ - це не звичайна властивість об'єкту, а аксессор до прихованої властивості [[Prototype]] об'єкту 
(до значення, записаного у приховану властивість [[Prototype]], і яке є об'єкт прототип). Аксессор знаходиться у Object.prototype. 
Коли ми звертаємося obj.__proto__, JS спочатку шукає цей аксесор у самому об'єкті, а не знайшовши - 
продовжує пошук по ланцюжку прототипів. Знайшовши у Object.prototype аксесор get.__proto__/set.__proto__ JS відповідно 
отримує/записує значення (об'єкт прототип або Null) у приховану властивість [[Prototype]] в самому об'єкті obj.

(бо при звертанні з об'єкту до відсутнього у нього методу (напр., obj.String), знайдений у якомусь із прототипів метод записує 
результат-значення у наново-створювану приховану властивість у самому об'єкті, з якого викликався метод)
*/
'use strict';
alert("Start 1_Object_prototype_vstrProtoPrototype");



let obj = {};

alert(obj.__proto__ === Object.prototype);  // true        (доступ геттером __proto__ до прототипу obj:  Object.prototype)
// obj.toString === obj.__proto__.toString === Object.prototype.toString    (метод toString із Object.prototype)

alert(Object.prototype.__proto__);          // null  (Вище по ланцюжку прототипів над Object.prototype тільки null)




alert("End");

