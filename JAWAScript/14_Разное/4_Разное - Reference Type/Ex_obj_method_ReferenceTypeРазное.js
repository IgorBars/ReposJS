/* JawaScript - Ex_obj_method_ReferenceTypeРазное

*/
'use strict';
alert("Start Ex_obj_method_ReferenceTypeРазное");


let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined


/*
1   Это обычный вызов метода объекта через точку ., и this ссылается на объект перед точкой.

2   Здесь то же самое. Круглые скобки (оператор группировки) тут не изменяют порядок выполнения операций – 
    доступ к методу через точку в любом случае срабатывает первым.

3   Здесь мы имеем более сложный вызов (expression).method(). Такой вызов работает, как если бы он был разделён на 2 строчки:

    f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
    f();        // вызов функции, на которую ссылается f
Здесь f() выполняется как функция, без передачи значения this.

4   Тут похожая ситуация на случай (3) – идёт потеря значения this.


Чтобы объяснить поведение в примерах (3) и (4), нам нужно помнить, что доступ к свойству (через точку или квадратные скобки) 
возвращает специальное значение ссылочного типа (Reference Type).

За исключением вызова метода, любая другая операция (подобно операции присваивания = или сравнения через логические операторы,
     например ||) превращает это значение в обычное, которое не несёт информации, позволяющей установить this.
*/
obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go).bind(obj)();    // (3) [object Object]

(obj.go.bind(obj) || obj.stop)(); // (4) [object Object]



alert("End");

