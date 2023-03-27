/* JawaScript - Ex7_createCalendar_IzmenDokumentaDocument         
Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, 
первым днём недели должен быть понедельник.

*/

'use strict';
alert("Start Ex7_createCalendar_IzmenDokumentaDocument");


let cal = document.getElementById('cal');

function createCalendar(elem, year, month) {
    let months = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];
    cal.innerHTML += months[month - 1];         // заголовок місяця

    let table = document.createElement('table');
    elem.append(table);

    let trMain = document.createElement('tr');  // головна строка назви днів
    table.append(trMain);

    let weekdays = ["пн", "вт",	"ср", "чт",	"пт", "сб",	"вс"];
    for(let i = 0; i <= 6; i++) {
        let th = document.createElement('th');
        th.innerHTML = `${weekdays[i]}`;
        trMain.append(th);
    }

    let rowsIndex = 0;                          // індекс строки
// цикл по поточним числам місяця (new Date(year, month, 0) - останнє число місяця month-1)
    for (let k = 1; k <= new Date(year, month, 0).getDate(); k++) {   

        let day = new Date(year, month - 1, k).getDay();  // 0 - 6  (поточний день тижня (відповідно числу місяця))
        if (day == 0) day = 7;                           // 1 - 7   (перенос Неділі з позиції 0 в позицію 7)

        if (k == 1 || day == 1) {                       // перший раз і кожний понеділок - нова строка
            let tr = document.createElement('tr');
            table.append(tr);
            rowsIndex++;

            for (let i = 1; i <= 7; i++) {              // заповнити строку ячейками
                let td = document.createElement('td');
                tr.append(td);
            }
        }
            
        table.rows[rowsIndex].cells[day - 1].innerHTML = k; // поставити дату у відповідну ячейку
    }
}


createCalendar(cal, 2022, 12);
createCalendar(cal, 2012, 9);



alert("End");