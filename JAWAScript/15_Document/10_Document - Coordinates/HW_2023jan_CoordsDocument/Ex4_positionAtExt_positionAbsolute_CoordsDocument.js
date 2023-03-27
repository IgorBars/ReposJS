/* JawaScript - Ex4_positionAtExt_positionAbsolute_CoordsDocument         

Так как в CSS елемента note 5position: fixed, система координат привязана к окну браузера
(для работьі в системе координат документа дополнительно учесть прокрутки )

Єффект position: fixed проявляется, если документ длинньій (с прокруткой) и мі его перезагружаем,
находясь на промежуточном значении прокрутки
*/

'use strict';
alert("Start Ex4_positionAtExt_positionAbsolute_CoordsDocument");


/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */

function getCoords(el) {// получаем координаты элемента в контексте документа (абсолютньіе координатьі)
    let box = el.getBoundingClientRect(); // об'ьект с относительньіми координатами anchor

    return {                             //  не забьівать   
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
    height: box.height,
    width: box.width
    };
}

function positionAt(anchor, position, elem) {
    
    let coordsAnc = getCoords(anchor);

    switch (position) {
        case 'top-out':
            elem.style.left = (coordsAnc.left + (anchor.offsetWidth - elem.offsetWidth)/ 2) + "px";
            elem.style.top = (coordsAnc.top - elem.offsetHeight) + "px";
        break;
        case 'right-out':
            elem.style.left = coordsAnc.right + "px";
            elem.style.top = (coordsAnc.top + (coordsAnc.height - elem.offsetHeight)/ 2) + "px";            
        break;
        case 'below-out':
            elem.style.left = coordsAnc.left + "px";
            elem.style.top = coordsAnc.bottom + "px";
        break;
        case 'top-in':
            elem.style.left = (coordsAnc.left + (anchor.offsetWidth - elem.offsetWidth)/ 2) + "px";
            elem.style.top = coordsAnc.top + "px";
            elem.style.backgroundColor = 'rgb(252, 247, 97)';
        break;
        case 'right-in':
            elem.style.left = (coordsAnc.right - elem.offsetWidth) + "px";
            elem.style.top = (coordsAnc.top + (coordsAnc.height - elem.offsetHeight)/ 2) + "px";
            elem.style.backgroundColor = 'rgb(252, 247, 97)';
        break;
        case 'bottom-in':
            elem.style.left = coordsAnc.left + "px";
            elem.style.top = (coordsAnc.bottom - elem.offsetHeight) + "px";
            elem.style.backgroundColor = 'rgb(252, 247, 97)';
        break;
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
let blockquote = document.querySelector('blockquote');  // ищем тег blockquote

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "below-out", "note below-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");

alert("End");