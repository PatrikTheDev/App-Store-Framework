/* JSHint settings */
/* jshint esversion: 6 */
/* 
    This file "globalizes" the 'app' and 'card' attributes (sets it for the children)
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
$.fn.globalizeApp = function(currentApp, force = false) {
    if (force == true) {
        this.find('*').attr("app", currentApp);
    } else {
        this.find('*').not("[app]").attr("app", currentApp);
    }
};