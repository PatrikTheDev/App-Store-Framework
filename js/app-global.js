$("[app]").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).children().attr("app", currentApp);
});
$(".card").each(function() {
    var currentCard = $(this).attr("card"); //this.getAttribute("card")
    $(this).children().children().attr("card", currentCard);
});
