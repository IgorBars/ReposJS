(function () {

    let classArr = document.getElementsByClassName("_class");

    classArr[0].style.fontSize = "20px";

    for(let i = 0; i < classArr.length; i++) {
        classArr[i].style.color = "red";
    }

})();

(function () {

    let tagArr = document.getElementsByTagName("p");

    for(let el of tagArr) {
        el.style.color = "green";
    }

})();
