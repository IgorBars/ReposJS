/* JawaScript - Объект Time 
// АВТОИСПРАВЛЕНИЕ ДАТЫ
*/

'use strict';

alert("Start _TimeCorrect_DateDateTime");


let date = new Date(2020, 2, 0); // 2 - Mar   0 -не корректний ввід (очікуєм автокоррекцію на останній день Feb)

alert("new Date(2020, 2, 0):  "+ date ); // Sat Feb 29 2020 00:00:00    !!!


date = new Date(2021, 2, 0); // 2 - Mar   0 -не корректний ввід (очікуєм автокоррекцію на останній день Feb)

alert("new Date(2021, 2, 0):  "+ date ); // San Feb 28 2021 00:00:00



date = new Date(2022, 2, 0); // 2 - Mar   0 -не корректний ввід (очікуєм автокоррекцію на останній день Feb)

alert("new Date(2022, 2, 0):  "+ date ); // Mon Feb 28 2022 00:00:00


date = new Date(2023, 2, 0); // 2 - Mar   0 -не корректний ввід (очікуєм автокоррекцію на останній день Feb)

alert("new Date(2023, 2, 0):  "+ date ); // Tue Feb 28 2023 00:00:00


date = new Date(2024, 2, 0); // 2 - Mar   0 -не корректний ввід (очікуєм автокоррекцію на останній день Feb)

alert("new Date(2024, 2, 0):  "+ date ); //  Thu Feb 29 2024 00:00:00    !!!



alert("End");

