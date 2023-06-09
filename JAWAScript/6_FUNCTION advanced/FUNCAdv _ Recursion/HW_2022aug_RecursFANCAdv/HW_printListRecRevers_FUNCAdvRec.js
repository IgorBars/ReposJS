/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя (цикл и) рекурсию.
*/
'use strict';

alert("Start HW_printListRecRevers_FUNCAdvRec");

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printListRecRevers(li) { 

    if ( li.next ) {
        // alert( li.value );
        printListRecRevers(li.next);         //   без return !!!
    }
    alert( li.value );
}

printListRecRevers(list);   // 

// Рекурсією просто йдемо по списку на всю його глубину (до останнього ел-та).
// Тобто 1-а інструкція - виклик  function printListRecRevers(li) з об'єктом li в аргументі.
// 2-а  інструкція - перевірка умови блоку умови. Перевірка проходить успішно для кожного реального елемента списку list.
// 
// Щоразу при виклику функції утворюється черговий контекст для чергової ітерації і записується у стек контекстів функції.
// Після перевірки умови виконується інструкція чергового рекурсивного виклику функції, 
//      при цьому попередня ітерація зупиняється на паузу, її контекст записується у стек контекстів.
// Кількість викликів функції, кожен з яких зупинений на паузу = кількості їх контекстів, що 'висять' у стеку
//          
// В останньому елементі li.next == null, отже блок умови (з інструкцією чергового рекурсивного виклику функції) пропускається.
// Далі у контексті останньої (4-ї) ітерації виконується інструкція alert( li.value ), виводячи value останнього елемента
// Більше інструкцій у крайній ітерації немає, отже 4-та ітерація функції закривається, її контекст видаляється з пам'яті.
//
// Управління передається у контекст попередньої (3-ї) ітерації, де блок умови (з інструкцією чергового рекурсивного виклику 
//          функції) вже виконано і лишається тільки остання інструкція alert( li.value ).
// Виконується інструкція alert( li.value ), виводячи value останнього елемента, ітерація закривається, контекст видаляється і
//          управління передається у контекст попередньої (2-ї) ітерації...


alert("End");
