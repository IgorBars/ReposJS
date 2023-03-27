/* JawaScript - Ex3_baguatable_OK_func_focusForms               

Сделайте ячейки таблицы редактируемыми по клику.

Таблица может иметь множество ячеек. Используйте делегирование событий.
По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. 
Изменение размера ячейки должно быть отключено.

Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
*/

'use strict';
alert("Start Ex3_baguatable_OK_func_focusForms");


let table = document.getElementById('bagua-table');
let textareaEl = null;

table.addEventListener('click', function(event) { 
  if(textareaEl) return;                                  /* уже редактируется - не реагировать на клики на др ячейках */

  let td = event.target.closest('TD');
  if(!td || !table.contains(td)) return;                   /* если клик не внутри td */

  textareaEl = createTextarea(td);

  let buttonOK = createButtonOK(textareaEl);
  
  let buttonRes = createButtonRes(textareaEl, buttonOK);


  buttonOK.onclick = () => {                              /* принимаем изменения, собьітие на кнопке (на table оно отсекается)*/
    td.innerHTML = textareaEl.value;
    textareaEl.replaceWith(td);
    textareaEl = null;                                     /* удаляем текущий textareaEl для возм редактирования новой td */
    buttonOK.remove();
    buttonRes.remove();
  };

  buttonRes.onclick = () => {
    textareaEl.replaceWith(td);
    textareaEl = null;
    buttonOK.remove();
    buttonRes.remove();
  };
});

function createTextarea(elemTD) {
  let textareaEl = document.createElement('textarea');
  textareaEl.classList.add("edit");
  textareaEl.value = elemTD.innerHTML;  
  textareaEl.style.width = elemTD.clientWidth + 'px';         // подгоняем габаритьі textarea
  textareaEl.style.height = elemTD.clientHeight + 'px';
  elemTD.replaceWith(textareaEl);                              /* textarea  вместо td */
  textareaEl.focus();
  return textareaEl;
}

function createButtonOK(elemTextarea) {
  let buttonOK = document.createElement('button');
  buttonOK.classList.add("ok");
  buttonOK.innerHTML = 'OK';
  document.body.append(buttonOK);
  buttonOK.style.top = elemTextarea.getBoundingClientRect().bottom - 1 + 'px';  /* buttonOK подвяжем к textarea */
  buttonOK.style.left = elemTextarea.getBoundingClientRect().left + elemTextarea.clientWidth/2 - buttonOK.clientWidth + 'px';
  return buttonOK;
}

function createButtonRes(elemTextarea, buttOK) {
  let buttonRes = document.createElement('button');
  buttonRes.classList.add("res");
  buttonRes.innerHTML = 'Отмена';
  document.body.append(buttonRes);
  buttonRes.style.top = elemTextarea.getBoundingClientRect().bottom - 1 + 'px'; /* buttonRes подвяжем к textarea и buttonOK */
  buttonRes.style.left = buttOK.getBoundingClientRect().right + 'px';
  return buttonRes;
}


alert("End");