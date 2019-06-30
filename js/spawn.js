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
        if (typeof JSONItems.applist[i] != "undefined") {
            parent.append('<li class="app app-list" app="' + JSONItems.containsApps[i] + '">\
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
    $(".apps-list-featured li:visible").last().addClass("no-after");
    payPopupListeners(parent);
    appPageListeners(parent);
}
$.fn.spawnSimilarApps = function() {
    var currentApp = window.currentApp;
    var currentCache = window.appCache;
    var directoryPrefix = appDirectory();
    var path = directoryPrefix + currentApp + ".json";
    if (typeof currentCache == "undefined") {
        currentCache = {};
    }
    if (typeof currentCache[currentApp] == "undefined") {
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
        }
        appendContentToAppCell(this.find(".app"));
    } else {
        this.closest(".similar-apps").hide();
    }
    return this;
};
function spawnAppsInCards(parent, currentCache) {
    var directoryPrefix = appDirectory();
    var currentCard = window.currentCard = parent.attr("card");
    var cache = currentCache || {};
    path = directoryPrefix + currentCard + ".json";
    var JSONItems = [];
    if (typeof cache[currentCard] == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                cache[currentCard] = window.cardCache[window.currentCard] = data;
            }
        });
    }
    JSONItems = cache[currentCard];
    var i;
    for (i = 0; i < JSONItems.containsApps.length; i++) { 
        if (JSONItems.containsApps[i]) {
            parent.append('<li class="app app-list" app="' + JSONItems.containsApps[i] + '">\
            <div class="app-cell-stack">\
                <div class="app-cell-icon">\
                        <div class="app-icon-wrapper app-trigger" app="' + JSONItems.containsApps[i] + '"></div>\
                </div>\
                <div class="app-cell-details">\
                        <h4 class="app-name app-trigger" app="' + JSONItems.containsApps[i] + '"></h4>\
                        <span class="subtitle app-trigger" app="' + JSONItems.containsApps[i] + '"></span>\
                </div>\
                <div class="app-cell-btn-download">\
                    <div class="btn-download btn-download-cell right" app="' + JSONItems.containsApps[i] + '"></div>\
                </div>\
            </div>\
        </li>');
        }
    }
    $(".apps-list-featured li:nth-child(4)").nextAll().hide();
    $(".apps-list-featured li:visible").last().addClass("no-after");
    payPopupListeners(parent);
    appPageListeners(parent);
}
$.fn.spawnReviews = function() {
    var currentApp = window.currentApp;
    var currentCache = window.appCache;
    var directoryPrefix = appDirectory();
    var path = directoryPrefix + currentApp + ".json";
    if (typeof currentCache == "undefined") {
        currentCache = {};
    }
    if (typeof currentCache[currentApp] == "undefined") {
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
    if (currentCache[currentApp].reviews && currentCache[currentApp].reviews.length > 0) {
        for (i = 0; i < currentCache[currentApp].reviews.length; i++) {
            var elementToAppend = '<li class="review">\
            <div class="review-header">\
                <h3>' + currentCache[currentApp].reviews[i].title + '</h3>\
            </div>\
            <div class="content">\
                <span>' + currentCache[currentApp].reviews[i].text +'</span>\
            </div>\
        </li>';
            this.append(elementToAppend);
        }
    } else {
        this.closest(".reviews").hide();
    }
    return this;
};