$("[app]").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).children().attr("app", currentApp);
});