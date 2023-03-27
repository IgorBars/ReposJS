/* JawaScript - Proxy_Разное
Oбернём dictionary в прокси, перехватывающий операцию чтения
*/
'use strict';

alert("Start _3getDictionary2_РазноеProxy");

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };

  dictionary = new Proxy(dictionary, {  // прокси перезаписывает переменную
  get(target, phrase) { // об'єкт, свойство
    if (phrase in target) {
      // return target[phrase];
      return Reflect.get(target, phrase);  // -Reflect организует инвариант
    } else {
      return phrase; // значение по умолчанию
    }
  }
});


  //обращение к строчному свойству об'екта искл через кв скобки
  alert( dictionary['Hello'] ); // Hola
  alert( dictionary['Welcome' + "  - нет такой фразьі"] ); // undefined


alert("End");

