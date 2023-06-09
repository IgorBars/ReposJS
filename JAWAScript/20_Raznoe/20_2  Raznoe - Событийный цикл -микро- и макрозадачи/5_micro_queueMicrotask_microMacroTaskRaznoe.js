/* JawaScript - 5_micro_queueMicrotask_microMacroTaskRaznoe               queueMicrotask

Если мы хотим запустить функцию АСИНХРОННО (после текущего кода), но до отображения изменений и до новых событий, 
то можем запланировать это через queueMicrotask (а не только промисами и await).

Чтобы добавить в очередь новую МАКРОЗАДАЧУ (и видеть промежуточньіе прорисованньіе результатьі): Используйте setTimeout(f) с нулевой задержкой.

Пример с индикатором выполнения, похожий на предыдущий (с setTimeout), но в этот раз использована функция queueMicrotask вместо setTimeout. 
Обратите внимание – отрисовка страницы происходит только в самом конце (без промежуточньіх отрисовок). 
Как и в случае обычного синхронного кода.
<div id="progress"></div>
*/

'use strict';
alert("Start 5_micro_queueMicrotask_microMacroTaskRaznoe");



let i = 0;                                // начало вьіполнения макрозадачи (очереди микро- и макрозадач - пустьі)

function count() {

  // делаем часть крупной задачи (*)
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 != 0);

  if (i < 1e6) {
    queueMicrotask(count);                // постановка вьізова count в очередь микрозадач 
  }

}                                         // вьіполнение вьізова count из очереди микрозадач БЕЗ РЕНДЕРИНГА

count();



alert("End");
/* 
События пользовательского интерфейса и сетевые события в промежутках между микрозадачами не обрабатываются: микрозадачи 
исполняются непрерывно одна за другой.

Поэтому queueMicrotask можно использовать для асинхронного выполнения функции в том же состоянии окружения.
(То есть, если нам нужно "что-то подождать" и при єтом важно состояние окружения макрозадачи, используем queueMicrotask/промис/await)
*/