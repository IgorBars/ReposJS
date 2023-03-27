/* JawaScript - 4_toStringTag_instanceofClass
Поведение метода объектов toString можно настраивать, используя специальное свойство объекта Symbol.toStringTag.
 */
'use strict';
alert("Start 4_toStringTag_instanceofClass"); 

let user = {
    [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]


// toStringTag для браузерного объекта и класса
alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]


// Как можно видеть, результат – это значение Symbol.toStringTag (если он имеется) обёрнутое в [object ...].

//В итоге мы получили «typeof на стероидах», который не только работает с примитивными типами данных, 
//но также и со встроенными объектами, и даже может быть настроен.

//Можно использовать {}.toString.call вместо instanceof для встроенных объектов, 
//когда мы хотим получить тип в виде строки, а не просто сделать проверку.


/*
                работает для	                                                    возвращает

typeof	        примитивов	                                                        строка

{}.toString	    примитивов, встроенных объектов, объектов с Symbol.toStringTag	    строка

instanceof	    объектов	                                                        true/false

*/

alert("End");

