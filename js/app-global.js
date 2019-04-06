$("[app]").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).children().attr("app", currentApp);
});
$(".card").each(function() {
    var currentCard = this.getAttribute("card");
    $(this).children().attr("card", currentCard);
});