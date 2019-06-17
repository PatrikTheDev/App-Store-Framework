/*
    This is the main (init) file
    You can do whatever you want here, but to ensure everything works, you have to run these things
    It will run when the document loads
*/
var cardCache;
var appCache;
$(document).ready(function() {
    cardCache = parseCards();
    cardAppList.each(function(){
        spawnAppsInCards($(this), cardDirectory, cardCache);
    });
    appCache = parseContent(appDirectory);
});