/* JawaScript - 4_window_frames_communicationWindFrames               Коллекция window.frames

Другой способ получить объект window из <iframe> – забрать его из именованной коллекции window.frames:

По номеру: window.frames[0] – объект window для первого фрейма в документе.
По имени: window.frames.iframeName – объект window для фрейма со свойством name="iframeName".

<iframe src="http://192.168.1.1/" style="height:80px" name="win" id="iframe"></iframe>
*/

'use strict';
alert("Start 4_window_frames_communicationWindFrames");


alert(iframe.contentWindow == frames[0]); // true

alert(iframe.contentWindow == frames.win); // true



// window.frames – коллекция «дочерних» window (для вложенных фреймов).
// window.parent – ссылка на «родительский» (внешний) window.
// window.top – ссылка на самого верхнего родителя.

// window.frames[0].parent === window; // true (parent - ссьілка на само окно window, в котором находится iframe)
alert("End");