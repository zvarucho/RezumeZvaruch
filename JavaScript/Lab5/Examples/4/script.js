//Функція, яка видаляє з тексту HTML-теги
function clearTextFromHTMLTags(textForEditing)
{
var tagTemplate = new RegExp("</?[a-zA-Z]{1,}/?>","g");
return textForEditing.replace(tagTemplate,"");
}