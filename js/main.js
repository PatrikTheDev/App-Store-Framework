/*
    This is the main (init) file
    You can do whatever you want here, but to ensure everything works, you have to run these things
    It will run when the document loads
*/
var cardCache;
var appCache;
$(document).ready(function() {
    // Parse card content and define UICard
    parseCards();
    defineCards();
    // Parse app content
    parseContent();
    // Spawn apps in cards
    cardAppList().each(function(){
        $(this).spawnAppsInCards();
    });
    // Set up click listeners
    payPopupListeners($("body"));
    appPageListeners($("body"));
    // Define the rest
    defineAppPage();
    definePayPopup();
    defineBottomPopup();
    // Set up popstate listener
    popState();
    //history.replaceState("homescreen", null, "#");
});