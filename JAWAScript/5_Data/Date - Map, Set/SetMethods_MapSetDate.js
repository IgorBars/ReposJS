/* JawaScript - SetMethods_MapSetDate
Set -массив уникальных значений, так называемое «множество» 
Объект Set – это особый вид коллекции: «множество» значений (без ключей), где 
каждое значение может появляться только один раз.

Mетоды Set:

new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), 
                                                                            то копирует его значения в новый Set.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.
*/
'use strict';

alert("Start SetMethods_MapSetDate");

let fruits = new Set (["Orang", "Appl", "Grape", "Appl"]);

for(let value of fruits) alert("for_of fruits: " + value);  //Orang   Appl    Grape

fruits.forEach(value => {
    alert("fruits.forEach: " + value);                       //Orang   Appl    Grape
});


alert("End"); 
