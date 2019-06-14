/*
    This is the main (init) file
    You can do whatever you want here, but to ensure everything works, you have to run these things
*/

$(document).ready(function() {
    var cardCache = parseCards();
    $(".card-apps-list").each(function(){
        spawnAppsInCards($(this), "cards/", cardCache);
    });
    var appCache = parseContent("depictions/");
});
