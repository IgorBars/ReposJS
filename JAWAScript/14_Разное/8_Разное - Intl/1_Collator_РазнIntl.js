/* JawaScript - 1_Collator_РазнIntl                Intl.Collator - об'ьект коллатор сравнивает и сортирует строки

создание
let collator = new Intl.Collator([locales, [options]])
Параметры:

- locales  -Локаль, одна или массив в порядке предпочтения.

- options - Объект с дополнительными настройками:

    =localeMatcher – алгоритм выбора подходящей локали.

    =usage – цель сравнения: сортировка "sort" или поиск "search", по умолчанию "sort".

    =sensitivity – чувствительность: какие различия в символах учитывать, а какие – нет, варианты:

    =base – учитывать только разные символы, без диакритических знаков и регистра, например: а ≠ б, е = ё, а = А.
    =accent – учитывать символы и диакритические знаки, например: а ≠ б, е ≠ ё, а = А.
    =case – учитывать символы и регистр, например: а ≠ б, е = ё, а ≠ А.
    =variant – учитывать всё: символ, диакритические знаки, регистр, например: а ≠ б, е ≠ ё, а ≠ А, используется по умолчанию.
    =ignorePunctuation – игнорировать знаки пунктуации: true/false, по умолчанию false.

    =numeric – использовать ли численное сравнение: true/false, если true, то будет 12 > 2, иначе 12 < 2.

    =caseFirst – в сортировке должны идти первыми прописные или строчные буквы, варианты: "upper" (прописные), "lower" (строчные) или "false" (стандартное для локали, также является значением по умолчанию). Не поддерживается IE11.

В подавляющем большинстве случаев подходят стандартные параметры, то есть options указывать не нужно.

*/

'use strict';
alert("Start 1_Collator_РазнIntl");

// let result = collator.compare(str1, str2);

let collator = new Intl.Collator(); // Об'ект Intl.Collator

alert( "ёжик" > "яблоко" ); // true (ёжик больше, что неверно)(а,б,в,г,д,е,ё...я) => больше должно бьіть с увеличением кода
                            //  но ё как умлаут расположен в конце
// метод об'екта Collator  .compare()
alert( collator.compare("ёжик", "яблоко") ); // -1 (ёжик меньше, верно)


alert( collator.compare("ЁжиК", "ёжик") ); // 1, разные (ЁжиК > ёжик, в таблице сначала строчньіе(ё), за ними дальше прописньіе (Ё))

let collator1 = new Intl.Collator(undefined, {
  // sensitivity: "accent"    // (а ≠ б, е ≠ ё, а = А) изменяем [options] конструктора Collator для получения об'ьекта collator с требуемьіми св-вами
  sensitivity: "base"         // (а ≠ б, е = ё, а = А)
});
alert( collator1.compare("ЁжиК", "ёжик") ); // 0, одинаковые


//СОКРАЩЕННІЙ ВЬІЗОВ
// метод прототипа СТРОКИ  .localeCompare
let str = "ёжик";

alert( str.localeCompare("яблоко", "ru") ); // -1       (str.prototype.localeCompare(that [, locales [, options]]))

alert("End");

