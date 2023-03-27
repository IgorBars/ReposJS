/* JawaScript Imperator_AdvancPar_FUNCAdv       - Остаточные параметры и оператор расширения */
'use strict';


alert("Start Imperator_AdvancPar_FUNCAdv");

   // Оставшиеся параметры пойдут в массив titles = ["Консул", "Император", "Светлейший"]
function showName(firstName, lastName, ...titles) {

    alert( firstName + ' ' + lastName );    // Юлий Цезарь

    for (let title of titles) alert(title); // Консул           Император           Светлейший  (перебираємо масив)

    alert(titles.join("-"));                // Консул-Император-Светлейший                      (застосовуємо метод масива)
}

showName("Юлий", "Цезарь", "Консул", "Император", "Светлейший");



alert("End");
