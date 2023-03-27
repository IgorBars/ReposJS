/* JawaScript - 1_MutationObserver_type_MutationObserverRaznoe               MutationObserver
MutationObserver – это встроенный объект, наблюдающий за DOM-элементом и запускающий колбэк в случае изменений.

Сначала мы создаём наблюдатель за изменениями с помощью колбэк-функции:
  let observer = new MutationObserver(callback);

Потом прикрепляем его к DOM-узлу:
  observer.observe(node, config);

config – это объект с булевыми параметрами «на какие изменения реагировать»:
  - childList – изменения в непосредственных детях node,
  - subtree – во всех потомках node,
  - attributes – в атрибутах node,
  - attributeFilter – массив имён атрибутов, чтобы наблюдать только за выбранными,
  - characterData – наблюдать ли за node.data (текстовое содержимое),
  - characterDataOldValue – если true, будет передавать и старое, и новое значение node.data в колбэк (см далее), 
    иначе только новое (также требуется опция characterData),
  - attributeOldValue – если true, будет передавать и старое, и новое значение атрибута в колбэк (см далее), 
    иначе только новое (также требуется опция attributes).

Затем, после изменений, выполняется callback, в который изменения передаются первым аргументом как список объектов MutationRecord, 
а сам наблюдатель идёт вторым аргументом.

Объекты MutationRecord имеют следующие свойства:
  - type – тип изменения, один из:
      - "attributes" изменён атрибут,
      - "characterData" изменены данные elem.data, это для текстовых узлов
      - "childList" добавлены/удалены дочерние элементы,
  - target – где произошло изменение: элемент для "attributes", текстовый узел для "characterData" или элемент для "childList",
  - addedNodes/removedNodes – добавленные/удалённые узлы,
  - previousSibling/nextSibling – предыдущий или следующий одноуровневый элемент для добавленных/удалённых элементов,
  - attributeName/attributeNamespace – имя/пространство имён (для XML) изменённого атрибута,
  - oldValue – предыдущее значение, только для изменений атрибута или текста, 
    если включена соответствующая опция attributeOldValue/characterDataOldValue.
*/

'use strict';
alert("Start 1_MutationObserver_type_MutationObserverRaznoe");

let elem = document.getElementById('elem');

let observer = new MutationObserver(mutationRecords => {
  console.log('mutationRecords[0].type: ' + mutationRecords[0].type + "\n" +  //  characterData
  'mutationRecords[0].oldValue: ' + mutationRecords[0].oldValue + "\n" +      //  меня
  'mutationRecords[0].target: ' + mutationRecords[0].target);                 //  [object Text]

  if (mutationRecords[0].type == 'characterData') console.log('Finish');      // обработаем по результату
});

// наблюдать за всем, кроме атрибутов
observer.observe(elem, {
  childList: true,              // наблюдать за непосредственными детьми
  subtree: true,                // и более глубокими потомками
  characterDataOldValue: true   // передавать старое значение в колбэк
});



alert("End");