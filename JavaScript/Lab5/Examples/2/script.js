//Перевірка, чи текстовий рядок є записом номера стаціонарного телефону у м. Львів
function testPhoneNumber(str)
{
if(!str.length)
alert("Номер телефону задано некоректно");
var phoneTemplate = new RegExp("2?[0-9]{6}");
str = str.replace(phoneTemplate,"");
if(str != "")
alert("Номер телефону задано некоректно");
}