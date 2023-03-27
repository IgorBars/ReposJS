/* JawaScript - 4_statSvojstvo_statSvojstvaClass 

                        СТАТИЧНІ ВЛАСТИВОСТІ
*/
'use strict';
alert("Start 4_statSvojstvo_statSvojstvaClass");

//До цих властивостей звертання напряму - Article.publisher
// (а не через созданный new объект)
  class Article {
    static publisher = "Илья Кантор";
}

alert( Article.publisher ); // Илья Кантор

// те саме, що і пряме присвоювання класу-конструктору Article:
Article.publisher = "Alex Shuster";
alert( Article.publisher ); // Илья Кантор


alert("End");

