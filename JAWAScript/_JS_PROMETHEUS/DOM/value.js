(function () {

    let qSEl = document.querySelector("input[type='text']"); //скошені лапки `` не працюють!

    let qSElValue = qSEl.value;

    let idEl = document.getElementById("_id");

    idEl.innerHTML = qSElValue;

    idEl.style.fontWeight = "bold";

    document.getElementById("_id").style.color = "red";

})();

