/* JawaScript - _funcConstr_basicSintaxClass 

        ФУНКЦІЯ - КОНСТРУКТОР ОБ'ЄКТУ
    - недоступні зовні локальні змінні унікального оточення: let
    - свої унікальні властивості:     this
    - недоступні зовні локальні методи унікального оточення: function  (як код у глобальному оточенні)
*/
'use strict';
alert("Start _funcConstr_basicSintaxClass");


function User(name) {

    this.name = name;               // унікальна властивість об'єкту

    let count = 0;                  // недоступна зовні локальна змінна внутрішнього лексичного оточення констр-а User;
    //  - в момент створення об'єкту стан внутрішнього лексичного оточення констр-а User "фотографується";
    // - змінні let мають значення на момент "фото" і надалі можуть використовуватися виключно методами цього об'єкту;

    function setcount() {           // недоступний зовні метод унікального оточення
        count++;
    };

    this.getname = function() {         // унікальний метод об'єкту
        return this.name;
    };

    this.setgetcount = function() {     // унікальний метод об'єкту
        setcount();                     // без this, бо локальна змінна унікального оточення
        return count;                   // без this, бо локальна змінна унікального оточення
    };
}

let john = new User("John");

alert("john.name: "  + john.name);                     // John          (ім'я напряму)

// alert("john.count: "  + john.count);                // undefined     (недоступна зовні локальна змінна)

alert( "john.getname(): "  + john.getname() );             // John        (ім'я через метод об'єкту)

alert( "john.setgetcount(): "  + john.setgetcount() );     // 1     (count через метод об'єкту і метод унікального оточення)
alert( "john.setgetcount(): "  + john.setgetcount() );     // 2

alert("End");

