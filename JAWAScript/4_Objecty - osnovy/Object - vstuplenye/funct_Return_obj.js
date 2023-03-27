/* JawaScript - создание объекта ретёрном из функции */
'use strict';

let user =  {                    // обычная литеральная нотация
    name: "John", 
    age: 30
}; 
alert(user.name);
alert(user.age);


function top_user(name, age)    // Функция, возвращающая новый объект
{                               // Передача значений в поля объекта через
                                // параметры функции.
    return {   // Создание каждый раз нового объекта с полями name и age
        name: name,       // => обычная запись ("обычное свойство")
        age               // => короткая запись ("короткое свойство")
    }
}

let altuser = top_user("Tom", 25);  // Cоздание переменной с именем altuser 
                                    // и присваивание ей объекта возвращением
                                    // полей из функции top_user
alert(altuser.name);
alert(altuser.age);