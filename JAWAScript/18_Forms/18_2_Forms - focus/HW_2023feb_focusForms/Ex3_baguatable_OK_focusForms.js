/* JawaScript - Ex3_baguatable_OK_focusForms               

Сделайте ячейки таблицы редактируемыми по клику.

Таблица может иметь множество ячеек. Используйте делегирование событий.
По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. 
Изменение размера ячейки должно быть отключено.

2)
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.

*/

'use strict';
alert("Start Ex3_baguatable_OK_focusForms");


let table = document.getElementById('bagua-table');
let textareaEl = null;

table.addEventListener('click', function(event) { 
  if(textareaEl) return;                                  /* уже редактируется - не реагировать на клики на др ячейках */
  
  textareaEl = document.createElement('textarea');
  textareaEl.classList.add("edit");

  let buttonOK = document.createElement('button');
  buttonOK.classList.add("ok");
  buttonOK.innerHTML = 'OK';
  let buttonRes = document.createElement('button');
  buttonRes.classList.add("res");
  buttonRes.innerHTML = 'Отмена';

  let td = event.target.closest('TD');
  if(!td || !table.contains(td)) return;                   /* если клик не внутри td */

  textareaEl.value = td.innerHTML;  
  textareaEl.style.width = td.clientWidth + 'px';         // подгоняем габаритьі textarea
  textareaEl.style.height = td.clientHeight + 'px';
  td.replaceWith(textareaEl);                              /* textarea  вместо td */
  textareaEl.focus();

  document.body.append(buttonOK);                          
  buttonOK.style.top = textareaEl.getBoundingClientRect().bottom - 1 + 'px';  /* buttonOK подвяжем к textarea */
  buttonOK.style.left = textareaEl.getBoundingClientRect().left + textareaEl.clientWidth/2 - buttonOK.clientWidth + 'px';
  
  document.body.append(buttonRes);
  buttonRes.style.top = textareaEl.getBoundingClientRect().bottom - 1 + 'px'; /* buttonRes подвяжем к textarea и buttonOK */
  buttonRes.style.left = buttonOK.getBoundingClientRect().right + 'px';

  buttonOK.addEventListener('click', function() {         /* принимаем изменения, собьітие на кнопке (на table оно отсекается)*/
    td.innerHTML = textareaEl.value;
    textareaEl.replaceWith(td);
    textareaEl = null;                                   /* удаляем текущий textareaEl для возм редактирования новой td */
    buttonOK.remove();
    buttonRes.remove();
  });

  buttonRes.onclick = () => {
    textareaEl.replaceWith(td);
    textareaEl = null;
    buttonOK.remove();
    buttonRes.remove();
  };
});




alert("End");