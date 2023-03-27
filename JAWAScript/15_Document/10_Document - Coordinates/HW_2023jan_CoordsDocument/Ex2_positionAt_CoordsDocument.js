/* JawaScript - Ex2_positionAt_CoordsDocument         

Так как в CSS елемента note position: fixed, система координат привязана к окну браузера
(для работьі в системе координат документа дополнительно учесть прокрутки )

Єффект position: fixed проявляется, если документ длинньій (с прокруткой) и мі его перезагружаем,
находясь на промежуточном значении прокрутки
*/

'use strict';
alert("Start Ex2_positionAt_CoordsDocument");


/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
    
    let coordsAnc = anchor.getBoundingClientRect(); // об'ьект с относительньіми координатами anchor

    if (position == 'bottom') {
        // устанавливаем координаты elem, не забываем про "px"!
        elem.style.left = coordsAnc.left + "px";
        elem.style.top = coordsAnc.bottom + "px";

    } else if (position == 'right') {
        elem.style.left = coordsAnc.right + "px";
        elem.style.top = (coordsAnc.top + (coordsAnc.height - elem.offsetHeight)/ 2) + "px";

    } else if (position == 'top') {
        elem.style.left = (coordsAnc.left + (coordsAnc.width - elem.offsetWidth)/ 2) + "px";
        elem.style.top = (coordsAnc.top - elem.offsetHeight) + "px";
    }
}
  
/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');   // создаем div-елемент note
    note.className = "note";                    // присваиваем div-елементу note класс "note" (для CSS)
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");


alert("End");