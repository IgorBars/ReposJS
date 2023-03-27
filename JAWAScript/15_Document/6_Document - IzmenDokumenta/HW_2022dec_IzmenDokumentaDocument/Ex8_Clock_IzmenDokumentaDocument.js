/* JawaScript - Ex8_Clock_IzmenDokumentaDocument         

Создайте цветные часы с кнопками Start/Stop
Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.
*/

'use strict';
alert("Start Ex8_Clock_IzmenDokumentaDocument");

function getTime() {

    let date = new Date();
    let clock = document.getElementById('clock');

    let hourEl = document.querySelector("div > span.hour"); // пошук у всьому документі елемента SPAN class hour
    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    hourEl.innerHTML = hour;

    let minEl = clock.querySelector("span.min");        // пошук у DIV id="clock" елемента SPAN class min
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    minEl.innerHTML = min;

    let secEl = clock.querySelector(".sec");            // пошук у DIV id="clock" за класом sec
    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    secEl.innerHTML = sec;
}

let timerId;

function clockStart() {
// запустить setInterval только в том случае, если часы остановлены
// в противном случае мы бы переписали ссылку timerID на интервал выполнения
// и никогда больше не смогли бы остановить часы
    if (timerId == null)
    timerId = setInterval(getTime, 500);
    getTime();                              // самий перший запуск (до першого затриманого)
}


function clockStop() {                     // 

    clearInterval(timerId);
    timerId = null;                         // метка останова для clockStart
}

getTime();  // показания в момеент загрузки страницьі


alert("End");