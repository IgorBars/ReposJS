/* JawaScript - MapMethods_MapSetDate
Map -двумерный массив пар кл-зн, образованный через new Map() 
Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.


Методы и свойства:
new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
*/
'use strict';

alert("Start MapMethods_MapSetDate");

let map1 = new Map();

map1.set("1", "str1");
map1.set(1, "num1");
map1.set(true, "bool1");

map1.forEach((value, key, map1) => {                            // forEach - встроенньій метод Map()
  alert(`${key}: ${value}`);
});

alert(map1.size);                                               // 3


alert("End"); 
