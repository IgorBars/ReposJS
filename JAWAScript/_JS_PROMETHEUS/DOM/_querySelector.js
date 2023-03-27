(function () {

    let elements = document.querySelectorAll("input");

    for(let el of elements) {
        el.style.backgroundColor = "yellow";
    }

})();

// селектор .querySelector вертає тільки 1-й знайдений елемент

(function () {

    let element = document.querySelector("input");

    element.style.backgroundColor = "blue";

})();
