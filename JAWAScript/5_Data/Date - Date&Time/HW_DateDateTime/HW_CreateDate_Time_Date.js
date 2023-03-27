/* JawaScript - Создайте объект Date для даты: 20 февраля 2012 года,
 3 часа 12 минут. Временная зона – местная.*/


'use strict';

alert("Start HW_CreateDate_Time_Date");

//ms
let feb20_pars = new Date(Date.parse('2012-02-20T03:12'));
alert("new Date(Date.parse('2012-02-20T03:12'):  " + feb20_pars);//Mon Feb 20 2012 03:12:00


let feb20 = new Date(2012, 1, 20, 3, 12);
alert("new Date(2012, 1, 20, 3, 12):  " + feb20);  //  Mon Feb 20 2012 03:12:00


let feb20_set = new Date();
feb20_set.setFullYear(2012, 1, 20);
feb20_set.setHours(3, 12);
alert(".setFullYear(2012, 1, 20):  " + feb20_set); //  Mon Feb 20 2012 03:12:15

alert("End");
