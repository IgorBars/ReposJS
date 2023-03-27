/* JawaScript - Ex2_baguatable_focusForms               

Сделайте ячейки таблицы редактируемыми по клику.

Таблица может иметь множество ячеек. Используйте делегирование событий.
По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. 
Изменение размера ячейки должно быть отключено.

2) - смотри следующий файл
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.

*/

'use strict';
alert("Start Ex2_baguatable_focusForms");         // БЕЗ КНОПОК OK и ОТМЕНА


let table = document.getElementById('bagua-table');


let selectedTd;

table.addEventListener('click', function(event) {
  let textareaEl = document.createElement('textarea');
  textareaEl.classList.add("edit");

  let td = event.target.closest('TD');

  if(!td || !table.contains(td)) return;


  textareaEl.value = td.innerHTML;  
  textareaEl.style.width = td.getBoundingClientRect().width + 'px'; // подгоняем габаритьі
  textareaEl.style.height = td.getBoundingClientRect().height + 'px'; // подгоняем габаритьі
  td.replaceWith(textareaEl);
  textareaEl.focus();

  textareaEl.addEventListener('blur', function(event) {
    td.innerHTML = textareaEl.value;
    textareaEl.replaceWith(td);
  });
});




alert("End");