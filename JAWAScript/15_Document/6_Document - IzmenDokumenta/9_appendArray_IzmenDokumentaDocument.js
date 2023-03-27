/* JawaScript - 9_appendArray_IzmenDokumentaDocument         

DocumentFragment редко используется. Зачем добавлять элементы в специальный вид узла, 
если вместо этого мы можем вернуть массив узлов:
*/

'use strict';
alert("Start 9_appendArray_IzmenDokumentaDocument");


function getListContent() {
    let result = [];
  
    for(let i=1; i<=3; i++) {
      let li = document.createElement('li');
      li.append(i);
      result.push(li);
    }
  
    return result;
}
  
let ul = document.getElementById('ul');
ul.append(...getListContent()); // append + оператор "..." = друзья! (расшаривает массив в список аргументов)


/*
Нова структура:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
*/

alert("End");