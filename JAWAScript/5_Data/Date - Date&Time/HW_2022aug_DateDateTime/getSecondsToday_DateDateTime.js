/* JawaScript - getSecondsToday_DateDateTime         Объект Time 

*/


'use strict';

alert("Start getSecondsToday_DateDateTime");


function getSecondsToday() {
    
    let date = new Date();

    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
alert( getSecondsToday() );


     // перевіряємо на контрольній точці часу 01:01:01
// function getSecondsToday(date) {
//     return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
// let date = new Date(2022, 9, 23, 1, 1, 1);     // контрольна точка часу 01:01:01
// alert( getSecondsToday(date) ); // 3661



alert("End");

