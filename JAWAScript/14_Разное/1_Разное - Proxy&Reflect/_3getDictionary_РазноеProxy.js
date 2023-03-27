/* JawaScript - Proxy_Разное
Oбернём dictionary в прокси, перехватывающий операцию чтения

 Используем ловушку-перехватчик об'ьекта Proxy - метод get.
 
 Метод get позволяет остановить вьіполнение в момент сразу после обращения 
 к об'ьекту. Єто позволяет вьіполнить несколько желаемьіх промежуточньіх методов.

 Для завершения операции обращения к об'ьекту необходимо вернуть RETURN.

 Return-ом возвращаем: 
    -либо конструкцию вида     return target[prop]; (+ инвариант, где нужно)
    -либо об'ьект Reflect вида    return Reflect.get(target, prop, receiver)
    
С пом  return Reflect.get  возвращаем в код свойство target.prop
С пом  return Reflect.іet  возвращаем в код true при удачной операции записи
*/
'use strict';

alert("Start _3getDictionary_РазноеProxy");

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };

  dictionary = new Proxy(dictionary, {  // прокси перезаписывает переменную

  get(target, phrase) { // об'єкт, свойство
    if (phrase in target) {
      return target[phrase];
    } else {
      return phrase; // значение по умолчанию
    }
  }
});


  //обращение к строчному свойству об'екта искл через кв скобки
  alert( dictionary['Hello'] ); // Hola
  alert( dictionary['Welcome'] ); // undefined

  //Прокси должен заменить собой оригинальный объект повсюду. Никто не должен ссылаться на оригинальный объект после того, 
  //  как он был проксирован. Иначе очень легко запутаться.
alert("End");

