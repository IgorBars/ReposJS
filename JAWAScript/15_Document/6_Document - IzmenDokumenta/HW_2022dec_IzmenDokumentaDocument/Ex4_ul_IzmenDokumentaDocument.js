/* JawaScript - Ex4_ul_IzmenDokumentaDocument         

Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
*/

'use strict';
alert("Start Ex4_ul_IzmenDokumentaDocument");


let ul = document.createElement('ul');

ul.id = "ul";

ul.innerHTML = 'ul-element';

document.body.prepend(ul);

while(true) {
    let text = prompt("Введите текст елемента списка", "text");

    if (!text) break;

    let li = document.createElement('li');

    li.textContent = text;

    ul.append(li);
}




alert("End");