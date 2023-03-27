/* JawaScript - _9_1_REFLECT_РазноеProxy                 Reflect
Reflect – встроенный объект, упрощающий создание прокси (обращение напрямую к внутреннему методу [[]])

Ранее мы говорили о том, что внутренние методы, такие как [[Get]], [[Set]] и другие, существуют только в спецификации, что к ним нельзя обратиться напрямую.

Объект Reflect делает это возможным. Его методы – минимальные обёртки вокруг внутренних методов.

Вот примеры операций и вызовы Reflect, которые делают то же самое:

Операция	                    Вызов Reflect	                            Внутренний метод
obj[prop]	                    	Reflect.get(obj, prop)		                    [[Get]]
obj[prop] = value		            Reflect.set(obj, prop, value)		              [[Set]]
delete obj[prop]		            Reflect.deleteProperty(obj, prop)		          [[Delete]]
new F(value)		                Reflect.construct(F, value)		                [[Construct]]
  …		                            …		                                           …


методы Объекта Reflect – обращение напрямую к внутренним методам [[]] (которьіе содержат все необходимьіе инвариантьі).

 Если нужно ПРОСТО (без доп условий) перенаправить вьізов на исходньій об'ьект,
то не городим отсебятину с return... и return true а прописьіваем соответствующий
return Reflect. ...(...)
*/
'use strict';

alert("Start _9_1_REFLECT_РазноеProxy");

let user1 = {};
Reflect.set(user1, 'name', 'Вася'); // обращение напрямую к внутреннему методу [[Set]]
alert(user1.name); // Вася

let user = {
    name: "Вася",
};

user = new Proxy(user, {
    get(target, prop, receiver) {    // перехват операции чтения(перед ее началом) ловушкой get и ожидание дальнейших инструкций

      alert(`GET ${prop}`);          // дальнейшие инструкции

      return Reflect.get(target, prop, receiver); // (1) + учитьіваем инвариантьі (обращение к внутреннему методу [[Get]])
    },
    set(target, prop, val, receiver) { // перехват операции записи(перед ее началом) ловушкой set и ожидание дальнейших инструкций

      alert(`SET ${prop}=${val}`);     // дальнейшие инструкции

      return Reflect.set(target, prop, val, receiver); // (2) + учитьіваем инвариантьі (обращение к внутреннему методу [[Set]])
    }
});

let name = user.name; //GET name
user.name = "Петя"; // выводит "SET name=Петя"
// 1)  Reflect.get читает свойство объекта.
// 2)  Reflect.set записывает свойство и возвращает true при успехе, иначе false.

//Методы в Reflect имеют те же названия, что и соответствующие ловушки, и принимают такие же аргументы. 
//Это было специально задумано при разработке спецификации JavaScript.

alert("End");

