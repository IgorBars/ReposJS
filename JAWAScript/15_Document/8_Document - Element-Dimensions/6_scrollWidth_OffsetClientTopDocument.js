/* JawaScript - 6_scrollWidth_OffsetClientTopDocument         scrollWidth   scrollHeight
scrollWidth, scrollHeight
Эти свойства – как clientWidth/clientHeight, но также включают в себя прокрученную (которую не видно) часть элемента.
*/

'use strict';
alert("Start 6_scrollWidth_OffsetClientTopDocument");

let example = document.getElementById('example');

alert(example.offsetParent.id); // main


alert(example.scrollWidth);      // 323 

alert(example.scrollHeight);    // 881  

// распахнуть элемент на всю высоту
let timerId = setTimeout(() => example.style.height = `${example.scrollHeight}px`, 3000);

// вернуть обратно
let timerId2 = setTimeout(() => example.style.height = '200px', 9000);
/*

*/
alert("End");