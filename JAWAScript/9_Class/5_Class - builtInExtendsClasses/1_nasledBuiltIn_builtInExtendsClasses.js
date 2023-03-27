/* JawaScript - 1_nasledBuiltIn_builtInExtendsClasses
                                    Расширение встроенных классов
От встроенных классов, таких как Array, Map и других, тоже можно наследовать.
Например, в этом примере PowerArray наследуется от встроенного Array:
 */
'use strict';
alert("Start 1_nasledBuiltIn_builtInExtendsClasses"); 


class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty());            // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr);              // 10, 50
alert(filteredArr.isEmpty());    // false


let arrEmpty = arr.filter(item => item >= 100);
alert(arrEmpty.isEmpty);               // 
                                        // isEmpty() {
                                        //     return this.length === 0;
                                        // }

// Встроенные методы, такие как filter, map возвращают новые объекты унаследованного класса PowerArray. 
// Их внутренняя реализация такова, что для этого они используют свойство объекта constructor.


// Обычно, когда один класс наследует другой, то наследуются и статические методы.
//Но встроенные классы – исключение. Они не наследуют статические методы друг друга.

//Например, и Array, и Date наследуют от Object, так что в их экземплярах доступны методы из Object.prototype. 
//Но Array.[[Prototype]] не ссылается на Object, поэтому нет методов Array.keys() или Date.keys().

// Важное отличие наследования встроенных объектов от того, что мы получаем с использованием extends состоит в том,
// что нет наследственной связи [[Prototype]] между самими встроенными объектами, а есть только между
// их прототипами


alert("End");

