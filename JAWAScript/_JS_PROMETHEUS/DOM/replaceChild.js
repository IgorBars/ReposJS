(function() {

    let child = document.createElement("li"); // <li><li/>

    let Text = document.createTextNode("Replace item"); // "Replace item"

    child.appendChild(Text);  // <li>Fifth item<li/>
    child.style.fontWeight = "bold"; child.style.color = "red";

    let idEl = document.getElementById("list");

    let liArr = idEl.getElementsByTagName("li");

    idEl.replaceChild(child, liArr[1]);

})();

