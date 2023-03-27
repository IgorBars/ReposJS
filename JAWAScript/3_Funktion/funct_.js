/* JawaScript - funct_ */

// однострочный комментарий

'use strict';

alert("Start funct_");
let userName = "Николай";

function get_Name (Name)
    {
        let userName = Name; //объявление одноименной локальной переменной
                                // теперь глобальная не изменит значения
        return userName;                     
    }

let getName = "Николай1";

function showHi (quantRep = 1, getName, textHi) //1 -пример парам по умолчанию
//когда функция вызывается без такого пар
{  
    alert(`Введенное число ${quantRep}`);
    alert(`Введенный текст ${textHi}`);   
    if (!textHi) textHi = "Привет";
    if (!getName) getName = "Неизвестный";

    for(let i = 1; i <= quantRep; i++)
    {
       switch (i) 
        { 
            case 1: alert(`${i} ${textHi} Рады встрече, *${getName}*!`);
            break;
            case 2: alert(`${i}  ${textHi} Как дела, ${getName}?`);
            break;
            case 3: alert(`${i}  ${textHi} Так держать, ${getName}!`);
            break;
        }
    } 
    alert(`До свидания, ${getName}!`);
    alert(`Глоб.перем внутри функции: ${userName}`);//Николай
    userName = userName + getName;
    alert(`изм глоб.перем внутри функции: ${userName}`);//НиколайgetName
}                                              


showHi (prompt("Введите число до 3", 3),
        prompt("Введите Ваше имя"),
        prompt("Введите текст приветствия")
        )

alert(`Kontrol: глоб.перем снаружи функции изм!!!: ${userName}!!!`);//НиколайgetName
alert(`Kontrol: глоб.перем при исп одноим.лок НЕ ИЗМ!!!: ${getName}`);//Николай1

alert("End");