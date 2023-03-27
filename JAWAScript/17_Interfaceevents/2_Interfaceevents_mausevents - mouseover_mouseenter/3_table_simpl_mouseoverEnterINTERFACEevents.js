/* JawaScript - 3_table_simpl_mouseoverEnterINTERFACEevents               

Начнём с простых обработчиков mouseover/mouseout, которые выделяют текущий элемент под указателем мыши:
(обрабатьіваются все переходы)
*/

'use strict';
alert("Start 3_table_simpl_mouseoverEnterINTERFACEevents");


table.onmouseover = function(event) {
    let target = event.target;
    let relatedTarget = event.relatedTarget
    target.style.background = 'pink';
    text.value += "mouseover target" + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
    text.value += "mouseover relatedTarget" + relatedTarget.tagName + "\n";
    text.scrollTop = text.scrollHeight;
};
  
table.onmouseout = function(event) {
    let target = event.target;
    let relatedTarget = event.relatedTarget
    target.style.background = '';
    text.value += "mouseout target" + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
    text.value += "mouseout relatedTarget" + relatedTarget.tagName + "\n";
    text.scrollTop = text.scrollHeight;
};


alert("End");