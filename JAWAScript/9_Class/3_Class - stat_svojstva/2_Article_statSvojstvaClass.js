/* JawaScript - 2_Article_statSvojstvaClass 

                                  СТАТИЧНІ МЕТОДИ обробки об'єктів
Ключове слово     - static (перетворює метод у метод об'єкту-класу  -без доступу з створюваного об'єкту)
Например, есть объекты статей Article, и нужна функция для их сравнения.
Естественное решение – сделать для этого статический метод Article.compare:
*/
'use strict';

alert("Start 2_Article_statSvojstvaClass");

class Article {
    constructor(title, date) {              // при створенні об'єкту-статті вказуєм її заголовок та дату
      this.title = title;                  // поле title (заголовок) в создаваемом об'єкті-статті
      this.date = date;
    }
  // технически static compare - єто "ф-я сравнения" для планируемого метода sort массивов 
    static compare(articleA, articleB) {    // статический метод класса Article, подвязанньій реализацией сравнения именно для 
      return articleA.date - articleB.date; // создаваемьіх об'ьектов классом Article. (сравнение по дате создания)
    }
}

// Створимо масив об'єктів-статей (з "фонарними" датами):
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),        // 1 лют 2019
    new Article("CSS", new Date(2019, 0, 1)),         // 1 січ 2019
    new Article("JavaScript", new Date(2019, 11, 1))  // 1 груд 2019
];

articles.sort(Article.compare); // применяем метод массивов sort с "ф-ей сравнения", указанной в static compare класса Article

alert( articles[0].title );      // CSS (сама рання дата 1 січ 2019)


alert("End");

