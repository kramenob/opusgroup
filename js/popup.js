// Скрипт для открытия и закрытия PopUp-окно (для отправки формы)

$(document).ready(function(){
    PopUpHide(); // по умолчанию попап скрыт
});
function PopUpShow(){
    $("#popup").show(); // показываем попап
}
function PopUpHide(){
    $("#popup").hide(); // скрываем попап
}