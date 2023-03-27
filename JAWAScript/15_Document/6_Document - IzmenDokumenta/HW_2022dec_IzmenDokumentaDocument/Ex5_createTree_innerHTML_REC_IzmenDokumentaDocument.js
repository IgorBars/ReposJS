/* JawaScript - Ex5_createTree_innerHTML_REC_IzmenDokumentaDocument         

Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Два способа решения этой задачи:

    - Создать строку, а затем присвоить через container.innerHTML.
    - Создавать узлы через методы DOM.
*/

'use strict';
alert("Start Ex5_createTree_innerHTML_REC_IzmenDokumentaDocument");



let tree = document.getElementById('tree');

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};

function createTree(container, obj) {   // приймає вузловий елемент-контейнер (тег) і JS-Object

    let ul = document.createElement('ul');
    container.append(ul);

    for( let key of Object.keys(obj) ) {

        let li = document.createElement('li');
        li.innerHTML = key;
        ul.append(li);

        if ( Object.keys( obj[key] ).length ) {

            createTree(ul, obj[key]);   // рекурсивний виклик для вкладених властивостей-об'єктів
        }
    }
}

createTree(tree, data); 




alert("End");