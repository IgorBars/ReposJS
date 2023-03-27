/* JawaScript - Map -двумерный массив пар кл-зн, образованный через new Map() */
'use strict';

alert("Start _Map");

let map1 = new Map();

map1.set("1", "str1");    // строка в качестве ключа
map1.set(1, "num1");      // цифра как ключ
map1.set(true, "bool1");  // булево значение как ключ

map1.forEach((value, key, map1) => {                            // forEach - встроенньій метод Map()
  alert(`${key}: ${value}`);                                    // огурец: 500 и так далее
});

alert(map1.size);                                               // 3


alert("End"); 
