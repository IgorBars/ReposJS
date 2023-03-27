/* JawaScript - Ex1_showPrompt_Eduardo_submitForms               Модальное диалоговое окно с формой


*/

'use strict';
alert("Start Ex1_showPrompt_Eduardo_submitForms");                          

// Показать полупрозрачный DIV, чтобы затенить страницу
// (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';

  // убираем возможность прокрутки страницы во время показа модального окна с формой
  document.body.style.overflowY = 'hidden';

  document.body.append(coverDiv);   // добавляем отдельно, чтобьі от нее не наследовали
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();                                                    // Показать полупрозрачный DIV, чтобы затенить страницу (кроме form)
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';                                            // удаляем прошльій ввод

  function complete(value) {                                       // оконечньіе одинаковьіе процедурьі в ф-ю complete
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function() {
    let value = form.text.value;                                  // введенное значение - в работу
    if (value == '') return false;                                // игнорируем отправку пустой формы
    complete(value);
    return false;
  };

  form.cancel.onclick = function() {
    complete(null);
  };

  document.onkeydown = function(e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';  // showPrompt: показьіваем container(z-index: 9999)   ((поверх маски coverDiv(z-index: 9000) ))
  form.elements.text.focus();                                     // начальная установка фокуса в поле ввода
}

document.getElementById('show-button').onclick = function() {
  showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert("Вы ввели: " + value);
  });
};

alert("End");