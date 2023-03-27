/* JawaScript - 3_carrySumReduce_РазнKarrieren
Бесконечный сумматор с каррированием через рекурсию и с сохранением состояния в контексте класса:
*/
'use strict';

alert("Start 3_carrySumReduce_РазнKarrieren");


const Summator = {
    arr: 0,
    sum(...x) {
        return (...y) => {
            const z = x.reduce((sum, current) => sum + current, 0)
                + y.reduce((sum, current) => sum + current, 0);
            this.arr = z;
            return this.sum(z);
        }
    }
};

Summator.sum(1)(2,3,4,5)(6,7)(8,9)(10)(11);

alert(Summator.arr);    //  66

Summator.sum(1)(2,3,4,5)(6,7)(8,9)(10)(13);

alert(Summator.arr);    //  68


alert("End");

