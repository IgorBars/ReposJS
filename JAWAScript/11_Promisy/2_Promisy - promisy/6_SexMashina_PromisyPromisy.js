/* JawaScript - 6_SexMashina_PromisyPromisy
Мало кто эту тему вкуривает с первого захода, потому что объяснение тут мягко говоря хреновенькое. Сейчас я нормально объясню, 
как для ровных пацанов. Босяцкий подгон, короче.
Что вообще за байда промисы и нафига они нам упали? Промис- это особый объект для удобной работы с кодом, который выполняется 
не сразу, а с задержкой. К примеру, мы можем засунуть в промис setTimeout, а можем и не засовывать, он и так будет работать. 
Нафига нам тогда эта шняга, если без неё можно обойтись? А у нас зачастую не будет выбора- функция, которую мы не писали, 
возвращает промис и начальство нам говорит: делайте, что хотите, хоть с бубном пляшите, но чтобы данные из функции были 
получены и добавлены на страницу.

Сейчас я приведу один пример и вы его запомните надолго. Итак, у нас есть HTML-страничка, а в ней вот такой скрипт:

const niggas = [
  { name: 'hustla1', say: 'Wuzup yo?' },
  { name: 'OG', say: 'Gimme yur money man' }
];

function niggerSay() {
  setTimeout(() => {
    let output = '';
    niggas.forEach(nigga => {
      output += `<li>${nigga.say}</li>`;
    });
   document.body.innerHTML = output;
  }, 1000)
}

function addNigga(man) {
  setTimeout(() => {
    niggas.push(man);
  }, 2000)
}

niggerSay();
addNigga({ name: 'SupaLooter', say: 'Blak Lies on Mattrass' });

Что тут происходит? У нас есть массив с двумя элементами- это два объекта с несколькими свойствами. Далее идёт функция, 
которая пробегается по этому массиву, вытаскивает из объектов фразы и через 1 секунду выводит их в html-страничку. 
Затем объявляется функция addNigga, добавляющая третий подобный объект в массив спустя 2 секунды. Внизу обе функции вызываются, 
последней собственно и передается третий объект. Но если мы посмотрим на наш документ, то спустя секунду увидим такую картину:

* Wuzup yo?
* Gimme yur money man

А где третий объект, почему фраза из него не отобразилась? Просто к моменту, когда третий объект добавился в наш массив, 
страничка уже секунду как отрисовалась, поэтому он пролетел мимо кассы. Мы можем исправить ситуацию, если в setTimeout 
второй функции поставить не 2000, а например 500. Тогда он успеет добавиться и спустя секунду выведутся уже все три фразы. 
Но это ведь лажа какая-то. Как нам сделать, чтобы третий объект сам добавлялся, когда понадобится и не крутить внутри ничего? 
Конечно с помощью колбеков. Что это вообще за ботва? Колбек- это функция A, переданная другой функции B в виде её параметра и 
вызванная внутри B после каких-то манипуляций. Определение выглядит уродско, но сейчас на примере станет понятнее. 
Я чуть-чуть изменю вторую функцию и её вызов. Хоба:

function addNigga(man, cb) {
  setTimeout(() => {
    niggas.push(man);
    cb();
  }, 2000)
}

addNigga({ name: 'SupaLooter', say: 'Blak Lies on Mattrass' }, niggerSay)

Обратите внимание, что функция передается в виде ссылки, без скобок на конце. Так работает колбек, все три объекта вывелись. 
И всё вроде норм, но что если мы захотим добавить четвертый объект спустя 5 секунд? Дописывать ещё один колбек? А куда, 
внутрь уже существующего или сразу за ним? Всего два колбека, а уже возникают некие проблемы, но это ещё полбеды. 
Как обрабатывать ошибки, которые будут сыпаться отовсюду? В итоге мы придём к куче скобок, if-else и всю эту кучу дерьма 
придется кому-то разгребать и поддерживать в рабочем состоянии. И в nodejs так раньше и было (а в старом коде и сейчас есть), 
пока не появились промисы.
Уберем колбек и добавим промис:

function addNigga(man) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      niggas.push(man);
      resolve();
    }, 2000)
  })
}

addNigga({ name: 'SupaLooter', say: 'Blak Lies on Mattrass' }).then(niggerSay);
И чё? Кода меньше ни фига не стало, зачем же мы эту байду переписывали на промисы? Да, здесь эффект не заметен, 
потому что колбеков мало, но когда их много (колбек-хелл) то промисы здорово облегчают код. Уже не возникает вопрос, 
куда воткнуть колбек. Вместо "ада колбеков" получается .then().then().then() А обработка ошибок? Пишем .catch() в конце и 
всего делов. Читабельность кода можно ещё улучшить, изменив синтаксис на async- await. Он ни фига особо не делает, 
только придает асинхронному коду вид синхронного. То есть убирает цепочки then(), но добавляет "const" и точки с запятой на 
конце, как мы привыкли.

Нужно ли джунам знать промисы? Ещё как, на собеседованиях об этом всегда спрашивают, однако писать промисы в виде new Promise 
на деле приходится довольно редко. Как же так? На практике чаще всего потребуется взаимодействие с функцией fetch, 
которая возвращает промис, она очень употребительна. Хотя сейчас повсюду используют библиотеки типа axios, облегчающие эту 
работу.



Чтобы освоиться с fetch, существует довольно много бесплатных ресурсов. Сайт jsonplaceholder наверное все знают, 
классический GET-запрос к этому ресурсу выглядит так:

fetch("http://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data)) 
  // data- огромный массив постов [{..}, {..}, {..}, ..]

Главная особенность fetch состоит в том, что мы не получаем с сервера готовые данные сразу, а сперва должны обработать их с 
помощью метода json(). И только во втором then появляются данные, которые мы ждали.
На этом же ресурсе есть методы POST, PUT, DELETE и PATCH, можно всё потыкать. Параллельно открываете devtools на компе 
(клавиша F12) -> вкладка Network и смотрите, какие уходят запросы, какие приходят ответы, с каким кодом, заголовками и 
содержимым.
Чтобы начать работать с сетевыми запросами по-взрослому, надо установить программу Postman или Insomnia и с помощью туториалов 
разбираться, как с ними работать.
*/
'use strict';
alert("Start 6_SexMashina_PromisyPromisy");


alert("End");
