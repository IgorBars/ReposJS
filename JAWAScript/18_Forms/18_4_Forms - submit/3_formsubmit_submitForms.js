/* JawaScript - 3_formsubmit_submitForms               метод form.submit().

Чтобы отправить форму на сервер вручную, мы можем вызвать метод form.submit().

При этом событие submit не генерируется. Предполагается, что если программист вызывает метод form.submit(), то он уже выполнил всю соответствующую обработку.

Иногда это используют для генерации формы и отправки её вручную
*/

'use strict';
alert("Start 3_formsubmit_submitForms");


let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// перед отправкой формы, её нужно вставить в документ
document.body.append(form);

form.submit();


alert("End");