/* JawaScript - 3_ondblclick2_mauseventsInterfaceevents               
Если зажать левую кнопку мыши и, не отпуская кнопку, провести мышью, то также будет выделение, которое в интерфейсах может быть «не кстати».

Есть несколько способов запретить выделение, о которых вы можете прочитать в главе Selection и Range.

В данном случае самым разумным будет отменить действие браузера по умолчанию при событии mousedown, это отменит оба этих выделения:

До...
<b ondblclick="alert('Клик!')" onmousedown="return false">
Сделайте двойной клик на мне
</b>
...После
*/

'use strict';
alert("Start 3_ondblclick2_mauseventsInterfaceevents");





alert("End");