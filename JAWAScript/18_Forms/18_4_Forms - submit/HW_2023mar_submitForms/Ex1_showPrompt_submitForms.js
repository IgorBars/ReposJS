/* JawaScript - Ex1_showPrompt_submitForms               Модальное диалоговое окно с формой

Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

  - Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», 
    после чего должна вызываться функция callback(value) со значением поля.
  - Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).

В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

Требования:

  - Форма должна быть в центре окна.
  - Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, 
    пока пользователь не закроет его.
  - При показе формы, фокус должен находиться сразу внутри <input>.
  - Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
*/

'use strict';
alert("Start Ex1_showPrompt_submitForms");                      //  МОЕ НЕПОЛНОЕ РЕШЕНИЕ (без модальношго cover-div, без Tab-переключения)

let container = document.getElementById('prompt-form-container');
let button = document.getElementById('but');
let form = document.getElementById('prompt-form'); 
let messege = document.getElementById('prompt-message');
container.style.display = 'none';                               // начальное скрьітие маски     (видна только кнопка "показать форму")
form.style.display = 'none';                                   // начальное скрьітие формьі

function showPrompt(html, callback) {
  messege.innerHTML = html;
  form.text.focus(); // form.elements.text.focus();

  form.onsubmit = function() {
    let value = form.text.value;
    if (value == '') {form.text.focus(); return false;}           // игнорируем отправку пустой формы, возвращаем фокус в поле ввода
    getFin(value);
    return false;      // отмена отправки
  }

  form.cancel.onclick = function() {
    getFin(null);
  }

  form.onkeydown = function(e) {
    if(e.key !== "Escape") return;
    getFin(null);
  }

  function getFin(value) {
    callback(value);
    form.text.value = '';
    form.style.display = 'none';
    container.style.display = 'none';
    button.style.backgroundColor = '';
  }
}


function show() {
  button.style.backgroundColor = 'rgb(187, 153, 103)';  // изм цвета кнопки, так как под маской
  form.style.display = '';
  container.style.display = '';

  showPrompt('Введите что-нибудь<br>...умное :)', function(value) {
    alert("Вы ввели: " + value);
  });
}


alert("End");