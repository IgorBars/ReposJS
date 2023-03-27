/* JawaScript - вернуть массив слов, очищенный от анаграмм */

// реализация c Map
'use strict';

alert("Start HW_aclean2_MapSet_Data");

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    
function aclean(arr) {
    // let arrFilter = [];
    let map = new Map();
    let arrResult = [];
    for(let char of arr) {                              //nap...
        let controlChar = char.toLowerCase().split("").sort().join("");
        //элемент массива nap изменяем в нижний регистр         .toLowerCase()
        //далее разрезаем на буквы => массив букв [n,a,p]       .split("")
        //далее сортируем массив букв [a,n,p]                   .sort()
        //далее склеиваем массив в слово anp и сохраняем в перем controlChar
        map.set(controlChar, char);
        //перезапись значения с тем же ключом
    }
    for(let char of map.values())
    arrResult.push(char);
    return arrResult; // return Array.from(map.values());
}


alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

alert("End"); 
