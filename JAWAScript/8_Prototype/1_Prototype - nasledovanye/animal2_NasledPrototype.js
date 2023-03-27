/* JawaScript - animal2_NasledPrototype 
Прототипы и наследование. 
__proto__ - властивість об'єкту obj

Значенням властивості об'єкту obj: __proto__ може бути об'єкт або null. Другі типи ігноруються.

Насправді __proto__ - це не звичайна властивість об'єкту, а аксессор до прихованої властивості [[Prototype]] об'єкту 
(до значення, записаного у приховану властивість [[Prototype]], і яке є об'єкт прототип). Аксессор знаходиться у Object.prototype. 
Коли ми звертаємося obj.__proto__, JS спочатку шукає цю властивість-аксессор у самому об'єкті, а не знайшовши - 
продовжує пошук по ланцюжку прототипів. Знайшовши у Object.prototype  аксессор get.__proto__/set.__proto__ , JS відповідно 
отримує/записує значення (об'єкт прототип або Null) у приховану властивість [[Prototype]] в самому об'єкті obj.

(бо при звертанні з об'єкту до відсутнього у нього методу (obj.String), знайдений у якомусь із прототипів метод записує 
результат-значення у наново-створювану приховану змінну у самому об'єкті, з якого викликався метод)
*/
'use strict';

alert("Start animal2_NasledPrototype");



let animal = {  // объект - отже, може виступити в якості прототипу

    eats: true,
    name: "ani"
};

let rabbit = {

    jump: true
};

// встановлюючи для rabbit прототип animal, додаємо до наслідника (rabbit) властивості прототипу (animal)
rabbit.__proto__ = animal;  

// alert(rabbit.jump);     // true

// alert(rabbit.eats);     // true (унаслідувана властивість)

alert(rabbit.__proto__);//[object Object]

alert(rabbit.prototype);    // undefined

alert(Object.getPrototypeOf(rabbit).name); // ani

//  "rabbit прототипно наследует от animal".

alert("End");

