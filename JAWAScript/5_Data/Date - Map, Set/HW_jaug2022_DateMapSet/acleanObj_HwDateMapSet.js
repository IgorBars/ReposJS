/* JawaScript - acleanObj_HwDateMapSet 
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
'use strict';

alert("Start acleanObj_HwDateMapSet");

function aclean(arr) {

    let obj= {};                          // об'єкт з хеш-ключами (однаковими для анаграм)

    for (let element of arr) {
                        //  отримуємо хеш-слово
        let heshEl = element                // PAN
            .toLowerCase()                  // pan     
            .split("")                      // p,a,n    разбиваем слово на буквы
            .sort()                         // a,n,p    сортируем
            .join("");                      // anp      склеиваем буквьі в хеш-слово

            obj[heshEl] = element;          // однаковий хеш-ключ перезапише попередню властивість 
    }

    return Object.values(obj);                 // повертаємо массив значень obj
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


alert("End"); 
