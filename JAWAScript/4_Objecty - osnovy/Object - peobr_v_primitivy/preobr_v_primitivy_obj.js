/* JawaScript - preobr_v_primitivy_obj*/
'use strict';

alert("Start preobr_v_primitivy_obj");

/*    Если внимательно посмотреть код примеров:

[Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
}

Видно, что:

1. что hint - это переменная, которая передается в метод - 
[Symbol.toPrimitive](hint),

2. что эта переменная - строка, которая содержит некоторое значение:
hint == "string" ? .. - вот тут он значение сравнивает с значением 'srting',
 т.е. можно сделать вывод, что hint - это переменная, которая может принимать
  3 значения, описанных выше: 'string', 'number', 'default'.

3. откуда берется эта переменная? В конце написано "В спецификации явно указано,
 какой хинт должен использовать каждый оператор." - получается, каждый оператор
  при преобразовании самостоятельно передает переменную hint при вызове методов:
   [Symbol.toPrimitive](hint), obj.toString(), obj.valueOf(), obj.toString().
*/ 




alert("End");

