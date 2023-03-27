/* JawaScript - _2getReflect_РазноеProxy
обернём обычный массив в прокси, который перехватывает операцию чтения
 свойства из массива и возвращает 0, если такого элемента нет:

  Используем ловушку-перехватчик об'ьекта Proxy - метод get.
 
 Метод get позволяет остановить вьіполнение в момент сразу после обращения 
 к об'ьекту. Єто позволяет вьіполнить несколько желаемьіх промежуточньіх методов.

 Для завершения операции обращения к об'ьекту необходимо вернуть RETURN.

 Return-ом возвращаем: 
    -либо конструкцию вида     return target[prop]; (+ инвариант, где нужно)
    -либо об'ьект Reflect вида    return Reflect.get(target, prop, receiver)
    
С пом  return Reflect.get  возвращаем в код свойство target.prop
С пом  return Reflect.set  возвращаем в код true при удачной операции записи
*/
'use strict';

alert("Start _2getReflect_РазноеProxy");

let numers = [0,1,2];

numers = new Proxy(numers, {    // прокси перезаписывает переменную
    get(target, prop) { // об'єкт, свойство
        if(prop in target) {
            return Reflect.get(target, prop);   // обращение напрямую к внутреннему методу [[get]] (которьій содержит все необходимьіе инвариантьі)(см. _9_1Reflect_РазноеProxy)
        } else {
            return 0;
        }
    }
});

alert(numers[1]);   // 1
alert(numers[3] + "  - нет такого єлемента");   // 0 (нет такого элемента)

alert("End");

