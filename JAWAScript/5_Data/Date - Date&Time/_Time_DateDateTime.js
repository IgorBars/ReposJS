/* JawaScript - Объект Time */


'use strict';

alert("Start _Time_DateDateTime");

let now = new Date();
alert("new Date():  " + now ); // Wed Feb 03 2021 12:18:23 GMT+0200 
              //(за східноєвропейським стандартним часом)

//  0 соответствует 01.01.1970 UTC+0

//  таймстамп (англ. timestamp)- это легковесное численное представление даты
// Из таймстампа всегда можно получить дату с помощью new Date(timestamp) 
//и преобразовать существующий объект Date в таймстамп, 
//используя метод date.getTime() (см. ниже).
let Jan01_1970 = new Date(0); //  new Date(milliseconds) 
alert("new Date(0):  " + Jan01_1970 );  //Thu Jan 01 1970 03:00:00 GMT+0300 

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert("new Date(24 * 3600 * 1000):  " + Jan02_1970 );  // Fri Jan 02 1970 03:00:00 GMT+0300

//new Date(datestring)
//Если аргумент всего один, и это строка, то из неё «прочитывается» дата.
let date = new Date("2017-01-26");
alert("new Date('2017-01-26'):  " + date); //Thu Jan 26 2017 02:00:00 GMT+0200

//new Date(year, month, date, hours, minutes, seconds, ms)
date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert("new Date(2011, 0, 1, 2, 3, 4, 567):  " + date ); // Sat Jan 01 2011 02:03:04 





// МЕТОДЫ  DATE                                     ! ! ! ! !

// Получение компонентов даты:
// date.getFullYear() - Получить год (4 цифры)
alert("date.getFullYear():  " + date.getFullYear()); // 2011
// .getMonth() -   Получить месяц, от 0 до 11.                           (0 -январь)!!!
// .getDate() - Получить день месяца, от 1 до 31 (число месяца), 
//              -что несколько противоречит названию метода.
// .getDay() - Вернуть день недели от 0 (воскресенье) до 6 (суббота).    (0 -воскресенье)!!!
// .getHours()
// .getMinutes()
// .getSeconds()
// .getMilliseconds()

//  ТАЙМСТАМП                ! ! ! ! !
// .getTime() -Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
alert("date.getTime():  " + date.getTime() ); // 1293840184567
alert("now.getTime():  " + now.getTime() );


//Установка компонентов даты:                       ! ! ! ! !
// setFullYear(year, [month], [date])
// setMonth(month, [date])            - 0 - январь
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
    // setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
now.setHours(0);
alert("today.setHours(0):  " + now); // Wed Feb 03 2021 00:11:23





// АВТОИСПРАВЛЕНИЕ ДАТЫ
date = new Date(2016, 1, 28); // 1 - февраль
date.setDate(date.getDate() + 2); // прибавляем 2 дня
date.setSeconds(date.getSeconds() + 70); // прибавляем 70 секунд
alert("new Date(2016, 1, 28) + 2дня:  "+ date ); // Tue Mar 01 2016

// ПРЕОБРАЗОВАНИЕ К ЧИСЛУ
// Если объект Date преобразовать в число (НАПРИМЕР, УНАРНЫМ +), 
// то получим таймстамп по аналогии с date.getTime():
alert("+date:  " + +date); //количество миллисекунд, то же самое, что date.getTime()
//  1456783270000

// ДАТЫ МОЖНО ВЫЧИТАТЬ, в результате получаем разность в миллисекундах.
let start = new Date(); // начинаем отсчёт времени
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // заканчиваем отсчёт времени
alert( `Цикл отработал за ${end - start} миллисекунд` );  // 38...41





//    DATE.NOW()          ! ! ! 

//  Date.now() - сразу возвращАЕТ текущую метку времени в миллисекундах (не дату, и без преобразований Date => msec).
start = Date.now(); // количество миллисекунд с 1 января 1970 года
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
end = Date.now(); // заканчиваем отсчёт времени
alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа, а не даты

// 40...52





//Бенчмаркинг
function diffSubtract(date1, date2) {
    return date2 - date1;
}
  
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}
  
function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' ); // 134мс
  alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );   // 32мс


//  DATE.PARSE(str)


// Метод Date.parse(str) считывает дату из строки.
let ms = Date.parse('2021-02-03T14:25:50.417+02:00');
alert("Date.parse('2021-02-03T14:25:50.417+02:00')   " + ms);//1612355150417 (таймстамп)
date = new Date( Date.parse('2021-02-03T14:25:50.417+02:00') );
alert("new Date( Date.parse('2021-02-03T14:25:50.417+02:00')   " + date);
//  Wed Feb 03 2021 14:25:50


alert("End");

