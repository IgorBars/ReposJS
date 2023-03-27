/* JawaScript - 1_nasledBuiltIn_builtInExtendsClasses
                                    Расширение встроенных классов
От встроенных классов, таких как Array, Map, Set и других, тоже можно наследовать.
 */
'use strict';
alert("Start 1_nasledBuiltIn_builtInExtendsClasses"); 


class PowerSet extends Set {
    isEmpty() {                    // расширяем класс Set методом isEmpty
      return this.size === 0;
    }
}

let set = new PowerSet(["Orang", "Appl", "Grape", "Appl"]); // Orang   Appl    Grape      (set расширенного класса PowerSet)

alert(set.size);                 // 3

alert(set.isEmpty());            // false       (работает расширенньій метод PowerSet)

set.clear();
alert(set.size);                // 0
alert(set.isEmpty());           // true       (работает расширенньій метод PowerSet)



alert("End");

