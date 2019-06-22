/* JSHint settings */
/* jshint multistr: true */

function spawnApps(parent, path, JSONData) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    var i;
    for (i = 0; i < JSONItems.applist.length; i++) { 
        if (JSONItems.applist[i] != null && JSONItems.applist[i] != undefined) {
            parent.append('<li class="app app-list" app=app="' + JSONItems.containsApps[i] + '">\
            <div class="app-cell-stack">\
                <div class="app-cell-icon">\
                        <div class="app-icon-wrapper" app="' + JSONItems.containsApps[i] + '"></div>\
                </div>\
                <div class="app-cell-details">\
                        <h4 class="app-name" app="' + JSONItems.containsApps[i] + '"></h4>\
                        <span class="subtitle grey-text" app="' + JSONItems.containsApps[i] + '"></span>\
                </div>\
                <div class="app-cell-btn-download">\
                    <div class="btn-download right light-grey" app="' + JSONItems.containsApps[i] + '">Get</div>\
                </div>\
            </div>\
        </li>');
        }
    }
    $(".apps-list-featured li:nth-child(4)").nextAll().hide();
    $(".apps-list-featured li:visible:last").addClass("no-after");
    payPopupListeners(parent);
    appPageListeners(parent);
}
$.fn.spawnSimilarApps = function(currentCache) {
    var currentApp = window.currentApp;
    var directoryPrefix = appDirectory();
    var path = directoryPrefix + currentApp + ".json";
    if (!currentCache) {
        currentCache = {};
    }
    if (!currentCache[currentApp]) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                currentCache[currentApp] = data;
            }
        });
    }
    var i;
    if (currentCache[currentApp].similarApps && currentCache[currentApp].similarApps.length > 0) {
        for (i = 0; i < currentCache[currentApp].similarApps.length; i++) {
            var elementToAppend = '<li class="app app-list" app="' + currentCache[currentApp].similarApps[i] + '">\
            <div class="app-cell-stack">\
                <div class="app-cell-icon app-trigger">\
                        <div class="app-icon-wrapper app-trigger" app="' + currentCache[currentApp].similarApps[i] + '"></div>\
                </div>\
                <div class="app-cell-details">\
                        <h4 class="app-name app-trigger" app="' + currentCache[currentApp].similarApps[i] + '"></h4>\
                        <span class="subtitle grey-text app-trigger" app="' + currentCache[currentApp].similarApps[i] + '"></span>\
                </div>\
                <div class="app-cell-btn-download">\
                    <div class="btn-download right light-grey" app="' + currentCache[currentApp].similarApps[i] + '">Get</div>\
                </div>\
            </div>\
        </li>';
            this.append(elementToAppend);
            var appCell = $($.parseHTML(elementToAppend)).filter('.app');
            appendContentToAppCell(this.find(".app"), currentCache);
        }
    } else {
        this.html('<p class="no-similar">No similar apps</p>');
    }
    return this;
};
function spawnAppsInCards(parent, currentCache) {
    var directoryPrefix = appDirectory();
    var currentCard = parent.attr("card");
    var cache = currentCache || {};
    path = directoryPrefix + currentCard + ".json";
    var JSONItems = [];
    if (!cache[currentCard]) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                cache[currentCard] = data;
            }
        });
    }
    JSONItems = cache[currentCard];
    var i;
    for (i = 0; i < JSONItems.containsApps.length; i++) { 
        if (JSONItems.containsApps[i]) {
            parent.append('<li class="app app-list" app=app="' + JSONItems.containsApps[i] + '">\
            <div class="app-cell-stack">\
                <div class="app-cell-icon">\
                        <div class="app-icon-wrapper app-trigger" app="' + JSONItems.containsApps[i] + '"></div>\
                </div>\
                <div class="app-cell-details">\
                        <h4 class="app-name app-trigger" app="' + JSONItems.containsApps[i] + '"></h4>\
                        <span class="subtitle app-trigger" app="' + JSONItems.containsApps[i] + '"></span>\
                </div>\
                <div class="app-cell-btn-download">\
                    <div class="btn-download right" app="' + JSONItems.containsApps[i] + '">Get</div>\
                </div>\
            </div>\
        </li>');
        }
    }
    $(".apps-list-featured li:nth-child(4)").nextAll().hide();
    $(".apps-list-featured li:visible:last").addClass("no-after");
    payPopupListeners(parent);
    appPageListeners(parent);
}