/* JawaScript - getKeysMap_HwDateMapSet 
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:
*/
'use strict';

alert("Start getKeysMap_HwDateMapSet");


    let map = new Map();

    map.set("name", "John");
    map.set("age", 30);
    map.set("frend", {"name": "July"});
    
    let keys = Array.from( map.keys() );
    // for(let key of keys) alert(key);
    
    // Error: keys.push is not a function
    // Ошибка: keys.push -- это не функция
    keys.push("more");   alert(keys);
   
    

alert("End"); 
