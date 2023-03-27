/* JawaScript - acleanMap_HwDateMapSet 
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
'use strict';

alert("Start acleanMap_HwDateMapSet");

function aclean(arr) {

    let map = new Map();                          // маp з хеш-ключами (однаковими для анаграм)

    for (let element of arr) {
                        //  отримуємо хеш-слово
        let heshEl = element                // PAN
            .toLowerCase()                  // pan     
            .split("")                      // p,a,n    разбиваем слово на буквы
            .sort()                         // a,n,p    сортируем
            .join("");                      // anp      склеиваем буквьі в хеш-слово

        map.set(heshEl, element);          // однаковий хеш-ключ перезаписує попередню властивість 
    }

    return Array.from(map.values());        // повертаємо массив значень map
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


alert("End"); 
