//Функція, яка видаляє з текстового рядка зайві пробіли
function removeRedundantSpaces(text_for_Editing)
{
var extraSpaces = new RegExp("[ ]{2,}","g");
return text_for_Editing.replace(extraSpaces," ");
}