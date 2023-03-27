/* JawaScript - acleanArr_HwDateMapSet 
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
'use strict';

alert("Start acleanArr_HwDateMapSet");

function aclean(arr) {

    let hesh = [];                          // масив хеш-слів, однакових для анаграм
    let arrClear = [];                      // масив без анаграм

    for (let element of arr) {
                        //  отримуємо хеш-слово
        let heshEl = element                // PAN
            .toLowerCase()                  // pan     
            .split("")                      // p,a,n    разбиваем слово на буквы
            .sort()                         // a,n,p    сортируем
            .join("");                      // anp      склеиваем буквьі в хеш-слово

        if(!hesh.includes(heshEl)) {        // якщо хеш-слово не міститься у хеш-масиві

            hesh.push(heshEl);
            arrClear.push(element);
        }
    }

    return arrClear;
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


alert("End"); 
