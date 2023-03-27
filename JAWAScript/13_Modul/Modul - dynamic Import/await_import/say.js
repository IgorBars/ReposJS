/* JawaScript - say                         ЗАПУСКАТИ ФАЙЛ index.html У Live Server  !!!
*/
'use strict';



export function hi() {
    alert(`Привет`);
}

export function bye() {
    alert(`Пока`);
}

export default function() {
    alert("Модуль загружен (экспорт по умолчанию)!");
}
