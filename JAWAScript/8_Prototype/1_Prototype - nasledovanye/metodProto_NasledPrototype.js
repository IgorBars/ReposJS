/* JawaScript - metodProto_NasledPrototype 
- Прототипы и наследование

Унаследованньіе об'ектьі имеют доступ к методам прототипа. Но this при вызове каждого метода будет соответствовать объекту 
(перед точкой), на котором происходит вызов, а не прототипу. Поэтому, когда мы записываем данные в this, они сохраняются в 
этих объектах.

В результате методы являются общими, а состояние объекта — нет.
*/
'use strict';
alert("Start metodProto_NasledPrototype");


// методы animal
let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// Вьізьівается метод прототипа animal, но свойство this.isSleeping записьіваеся в rabbit.

rabbit.sleep();// модифицирует rabbit.isSleeping
  
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)


//Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj. 
//Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.

alert("End");

