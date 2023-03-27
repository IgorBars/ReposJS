/* JawaScript - forEach_declarFunc_arrowFuncFUNCAdv.

У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи.
Звичайна функція у forEach і setTimeout екранується і лишається без this.


forEach і setTimeout екранують this і arguments.
 */
'use strict';

alert("Start forEach_declarFunc_arrowFuncFUNCAdv");
 // Error: Cannot read property 'title' of undefined

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {       // forEach екранує контекст this, звичайна функція лишається без this
                                                    
        alert(this.title + ': ' + student)
      });
    }
};
  
group.showList();


// Это не влияет на стрелочные функции, потому что у них просто нет this 
// (і вони за замовчуванням беруть this із зовнішнього контексту)


alert("End");
