/* JawaScript - ТРЕНИНГ */


'use strict';

alert("Start EX_Time_Date");

let nowDate = new Date();

alert (nowDate); //Mon Nov 30 2020 13:23:26 

alert(".getHours(): " + nowDate.getHours() );//13

//Date.getTime() - timestamp
alert("timestamp  new Date.getTime(): " + nowDate.getTime());//1606736074478 - timestamp

alert("1506736074478 = " + new Date(1506736074478) );//Sat Sep 30 2017 04:47:54

nowDate.setHours(nowDate.getHours() + 10);
alert("nowDate + 10Hours: " + nowDate);

nowDate.setFullYear(2000, 0, 1);
alert(".setFullYear(2000, 00, 01) + 10: " + nowDate);

let metka = Date.now(); //"быстрый" timestamp ( для момента времени )
alert("timestamp Date.now(): " + metka);

alert("End");
