/* JawaScript - 8_DocumentFragment_IzmenDokumentaDocument         DocumentFragment

DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.

Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», 
вместо него вставляется его содержимое.

Например, getListContent ниже генерирует фрагмент с элементами <li>, которые позже вставляются в <ul>:
*/

'use strict';
alert("Start 8_DocumentFragment_IzmenDokumentaDocument");


function getListContent() {
    let fragment = new DocumentFragment();
  
    for(let i=1; i<=3; i++) {
      let li = document.createElement('li');
      li.append(`Новьій ${i}-й елемент списка`);
      li.style.color = "red";
      fragment.append(li);
    }
  
    return fragment;
}
  
let ul = document.getElementById('ul');
ul.append(getListContent()); // (*) сам DocumentFragment «исчезает», вместо него вставляется его содержимое.


/*
Нова структура:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
*/

alert("End");