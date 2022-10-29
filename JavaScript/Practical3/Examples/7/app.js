var clicks = 0;
function handlerOne(e) {
    alert(e.type)
}
function handlerTwo(e) {
    clicks ++;
    var newNode = document.createElement("p");
    newNode.textContent = "відбулося натискання" + clicks;
    document.body.appendChild(newNode);
}
var rect = document.getElementById("rect");
//прикріплюємо перший обробник
rect.addEventListener("click", handlerOne);
//прикріплюємо другий обробник
rect.addEventListener("click", handlerTwo);