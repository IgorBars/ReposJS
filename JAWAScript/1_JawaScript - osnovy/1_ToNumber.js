/* JawaScript - 1_unar_ToNumber*/

// однострочный комментарий

'use strict';

alert("Start 1_ToNumber");

// к 0 приводятся только null и false

// Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN

let age;
alert("тип неприсвоенной переменной: " + age);         //undefinet
age = Number(age);
alert("неприсвоенная переменная: " + age);         //NaN
age = "  33  ";
alert("собственно строка с числом и пробелами: " + age);         // " 33 " string
age = Number(age);  // Пробельные символы по краям обрезаются
alert("строка с числом и пробелами: " + age);         //33
age = null;         // - тип строка
alert("собственно строка null: " + age);         // - тип строка
let age1 = Number(age);
alert("строка null: " + age1);         //0
age = "";
age = Number(age);
alert("пустая строка: " + age); 
age = " ";
age = Number(age);
alert("Строка с пробелом: " + age); 

// Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN
age1 = Number("F33.44");
alert("Строка смешанная F33.44: " + age1); // NaN, преобразование не удалось

alert("End");   