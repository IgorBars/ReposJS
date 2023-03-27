/* JawaScript - Ex1_scrollBottom_OffsetClientTopDocument         
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
...
</style>
*/

'use strict';
alert("Start Ex1_scrollBottom_OffsetClientTopDocument");


let elem = document.getElementById('example');

alert(elem.scrollHeight);   //  881
alert(elem.clientHeight);   //  240
alert(elem.scrollTop);      //  0

let scrollBottom = elem.scrollHeight - elem.clientHeight - elem.scrollTop;

alert (scrollBottom);      // 641  (максимальное значение)

setInterval(() => {example.scrollTop += 64.1;      // шаг 64.1 для 10 шагов
    scrollBottom = elem.scrollHeight - elem.clientHeight - elem.scrollTop;
    alert (scrollBottom);   // 0
}, 3000);



alert("End");