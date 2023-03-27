/* JawaScript - Ex2_scrollWidth_OffsetClientTopDocument         
Найти размер прокрутки снизу - scrollBottom

P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.

<style>
    #example {
        width: 300px;
        height: 200px;
        border: 25px solid #E8C48F;
        padding: 20px;
        overflow: auto;
    }
</style>

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
*/

'use strict';
alert("Start Ex2_scrollWidth_OffsetClientTopDocument");


let elem = document.getElementById('example');

alert(elem.offsetWidth);    //  390
alert(elem.clientWidth);    //  323
alert(elem.clientLeft);     //  25

let scrollWidth = elem.offsetWidth - elem.clientWidth - 2 * elem.clientLeft;

alert (scrollWidth);        //    17




alert("End");