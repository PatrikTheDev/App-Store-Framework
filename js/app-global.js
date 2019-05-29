/* 
    This file "globalizes" (sets it for the children) the 'app' and 'card' attributes
*/
var currentApp;
var currentCard;
$("[app]").each(function() {
    currentApp = $(this).attr("app");
    $(this).find('*').attr("app", currentApp);
});
$(".card").each(function() {
    currentCard = $(this).attr("card"); 
    $(this).find('*').attr("card", currentCard);
});