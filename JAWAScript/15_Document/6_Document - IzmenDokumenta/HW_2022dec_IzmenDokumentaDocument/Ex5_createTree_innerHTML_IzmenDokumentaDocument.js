/* JawaScript - Ex5_createTree_innerHTML_IzmenDokumentaDocument         

Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Два способа решения этой задачи:

    - Создать строку, а затем присвоить через container.innerHTML.
    - Создавать узлы через методы DOM.
*/

'use strict';
alert("Start Ex5_createTree_innerHTML_IzmenDokumentaDocument");



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
    /* ваш код */

    let ul1 = document.createElement('ul');
    ul1.innerHTML = 'World-kollektion';
    container.append(ul1);

    for( let key1 of Object.keys(obj) ) {

        // alert(key1);                            // рьіба, деревья
        let li = document.createElement('li');
        li.innerHTML = key1;
        ul1.append(li);

        if ( Object.keys( obj[key1] )[0] ) {        // проверка коллекции на пустоту
            let ul2 = document.createElement('ul');
            ul2.innerHTML = `kollektion-${key1}`;   // kollektion-рьіба, kollektion-деревья,
            ul1.append(ul2);
        
            for( let key2 of Object.keys(obj[key1]) ) {

                // alert(key2);                        // форель, лосось       Огромные, Цветковые
                let li = document.createElement('li');
                li.innerHTML = key2;
                ul2.append(li);

                if ( Object.keys( obj[key1][key2] )[0] ) {  // проверка коллекции на пустоту
                    let ul3 = document.createElement('ul');
                    ul3.innerHTML = `kollektion-${key2}`;   // kollektion-Огромные, kollektion-Цветковые
                    ul2.append(ul3);

                    for( let key3 of Object.keys( obj[key1][key2] ) ) {

                        // alert(key3);                    // секвойя, дуб     яблоня, магнолия
                        let li = document.createElement('li');
                        li.innerHTML = key3;
                        ul3.append(li);
                    }
                }
            }
        }
    }
}

createTree(tree, data); 




alert("End");