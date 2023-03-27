/* JawaScript - join.call_DecorFUNCAdv.     Передача контекста с пом. func.call(this, x)

        Заимствование метода.
    Мы берём (заимствуем) метод join из обычного массива [].join. И используем [].join.call, 
чтобы выполнить его в контексте arguments.
 */
'use strict';

alert("Start join.call_DecorFUNCAdv");



function hash() {
    alert( [].join.call(arguments) );
}

hash(1, 2);                              // 1,2        (строка "1,2")





alert("End");