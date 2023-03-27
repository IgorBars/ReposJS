/* JawaScript - getSecondsToTomorrow_DateDateTime         Объект Time 
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
*/


'use strict';

alert("Start getSecondsToTomorrow_DateDateTime");


function getSecondsToTomorrow() {
    let daySec = 24 * 3600;
    let date = new Date();

    return daySec - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
}
alert( getSecondsToTomorrow() );



// function getSecondsToTomorrow(date) {
//     let daySec = 24 * 3600;
//     return daySec - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
// }
// let date = new Date(2022, 9, 24, 23);    // перевіряємо на контрольній точці часу 23:00
// alert( getSecondsToTomorrow(date) ); // 3600



alert("End");

