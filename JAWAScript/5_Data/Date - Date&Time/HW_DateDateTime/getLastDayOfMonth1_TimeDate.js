/* JawaScript - Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31 
или даже февральские 28/29.*/


'use strict';

alert("Start getLastDayOfMonth1_TimeDate");


function getLastDayOfMonth(year, month) {

    return (new Date(year, month + 1, 0)).getDate();
}

alert( "Result for (2012, 0): " + getLastDayOfMonth(2012, 0) ); //  31
alert( "Result for (2014, 1): " + getLastDayOfMonth(2014, 1) ); //  28
alert( "Result for (2013, 1): " + getLastDayOfMonth(2013, 1) ); //  28
alert( "Result for (2012, 1): " + getLastDayOfMonth(2012, 1) ); //  29
alert( "Result for (2011, 1): " + getLastDayOfMonth(2011, 1) ); //  28
alert( "Result for (2010, 1): " + getLastDayOfMonth(2010, 1) ); //  28

alert("End");
