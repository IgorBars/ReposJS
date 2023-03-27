/* JawaScript - forEach_arrowFunc_arrowFuncFUNCAdv.

У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи.

Звичайна функція у forEach і setTimeout екранується і лишається без this.

Это не влияет на стрелочные функции, потому что у них просто нет this 
(і вони за замовчуванням беруть this із зовнішнього контексту)
 */
'use strict';

alert("Start forEach_arrowFunc_arrowFuncFUNCAdv");


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
  
group.showList();   // Our Group: John      Our Group: Pete     Our Group: Alice



alert("End");
