/* JSHint settings */
/* jshint esversion: 6 */

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
            parent.append(appCell(JSONItems.applist[i]));
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
                currentCache[currentApp] = window.appCache[currentApp] = data;
            }
        });
    }
    var i;
    if (currentCache[currentApp].similarApps && currentCache[currentApp].similarApps.length > 0) {
        for (i = 0; i < currentCache[currentApp].similarApps.length; i++) {
            var elementToAppend = appCell(currentCache[currentApp].similarApps[i]);
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
    var path = directoryPrefix + currentCard + ".json";
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
            var elementToAppend = appCell(JSONItems.containsApps[i]);
            parent.append(elementToAppend);
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
            var elementToAppend = `
        <li class="review" id="spawned">
            <div class="review-header">
                <h4>` + currentCache[currentApp].reviews[i].title + `</h4>
            </div>
            <div class="content">
                <i class="far fa-star" first-star></i><i class="far fa-star" second-star></i><i class="far fa-star" third-star></i><i class="far fa-star" fourth-star></i><i class="far fa-star" fifth-star></i>
                <p class="review-text">` + currentCache[currentApp].reviews[i].text + `</p>
            </div>
        </li>`;
            this.append(elementToAppend);
            var thisReview = this.find("#spawned");
            appendRating(currentCache[currentApp].reviews[i].rating, thisReview.find("[first-star]"), thisReview.find("[second-star]"), thisReview.find("[third-star]"), thisReview.find("[fourth-star]"), thisReview.find("[fifth-star]"));
            this.find("#spawned").removeAttr("id");
        }
    } else {
        this.closest(".reviews").hide();
    }
    return this;
};