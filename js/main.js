/*
    This is the main (init) file
    You can do whatever you want here, but to ensure everything works, you have to run these things
*/

$(document).ready(function() {
    parseCards();
    $(".card-apps-list").each(function(){
        spawnAppsInCards($(this), "cards/");
    });
    var appCache = parseContent("depictions/");
});
