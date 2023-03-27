/* JawaScript - _9get_protoReceiver_РазноеProxy
Методы в Reflect имеют те же названия, что и соответствующие ловушки, и принимают такие же аргументы. 
Это было специально задумано при разработке спецификации JavaScript.

 Если нужно просто перенаправить вьізов на исходньій об'ьект, без доп условий,
то не городим отсебятину с return... и return true а прописьіваем соответствующий
return Reflect. ...(...)

 ПАРАМЕТР receiver позволяет полноценно наследовать проксированньіе об'ьектьі (без потери геттера оригинального об'ьекта)
*/
'use strict';
// return Reflect.get(target, prop, receiver) позволяет работать и с проксированьіми об'ьектами, и с прототипами.
alert("Start _9get_protoReceiver_РазноеProxy");


let user = {                                              // 1 - исходньій об'ьект
    _name: "Гость",
    get name() {
      return this._name;
    }
  };
  
  let userProxy = new Proxy(user, {                       // 2 - об'ьект-прокси исходного об'ьекта ("проксированньій об'ьект")
    get(target, prop, receiver) { // receiver = admin (при вьізове из admin)
      // return Reflect.get(...arguments); // короткая запись
      return Reflect.get(target, prop, receiver);
      // receiver, содержащий ссылку на корректный this (то есть на admin, так как запрос идет от admin), 
      //передаётся геттеру посредством Reflect.get 
    }
  });
  
  // унаследуем проксированньій об'ьект и проверим на дочернем об'ьекте работу геттера, расположенного в родительском 
  let admin = {                                          // 3 - об'ьект - наследник проксированного об'ьекта
    __proto__: userProxy,
    _name: "Админ"
  };
  

  alert(admin.name); // Админ
  


//То есть, при работе с об'ьектом-наследником нужньіе операции в прототипе ( которьій
//является прокси от исходного об'ьекта) вьіполняются корректно с помощью Reflect
// так как Reflect содержит аргумент receiver, передающий this нашего об'ьекта-наследника

alert("End");

