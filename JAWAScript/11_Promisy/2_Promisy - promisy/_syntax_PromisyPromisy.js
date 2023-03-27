/* JawaScript - _syntax_PromisyPromisy
Синтаксис создания Promise:
*/
'use strict';

alert("Start _syntax_PromisyPromisy");


// Синтаксис создания Promise:
let promise = new Promise(function(resolve, reject) {          // resolve, reject - зарегистрированньіе имена колбеков
  // функция-исполнитель (executor)
  // "певец"
});

/*
Функция, переданная в конструкцию new Promise, называется исполнитель (executor).
Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:
  - resolve(value) — если работа завершилась успешно, с результатом value.
  - reject(error) — если произошла ошибка, error – объект ошибки.

Исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
   - state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
   - result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

Так что исполнитель по итогу переводит promise в одно из двух состояний.
*/



alert("End");

