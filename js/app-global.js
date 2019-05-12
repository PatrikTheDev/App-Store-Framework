$("[app]").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).find('*').attr("app", currentApp);
});
$(".card").each(function() {
    var currentCard = $(this).attr("card"); //this.getAttribute("card")
    $(this).find('*').attr("card", currentCard);
});