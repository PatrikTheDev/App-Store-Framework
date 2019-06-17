/* JSHint settings */
/* jshint multistr: true */

function spawnApps(parent, path) {
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
                <div class="btn-download right light-grey" app="' + JSONItems.containsApps[i] + '">Get</div>\
            </div>\
        </li>');
        }
    }
    $(".apps-list-featured li:nth-child(4)").nextAll().hide();
    $(".apps-list-featured li:visible:last").addClass("no-after");
    parent.find(".btn-download").click(function() {
        payPopupInit($(this));
    });
    parent.find(".cancel").click(function() {
        payPopupClose();
    });
    parent.find(".app-name").click(function() {
        appPageInit($(this));
    });
}
function spawnAppsInCards(parent, directoryPrefix, currentCache) {
    var currentCard = parent.attr("card");
    var cache = currentCache || {};
    path = directoryPrefix + currentCard + ".json";
    var JSONItems = [];
    if (typeof cache[currentCard] == "undefined") {
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
        if (JSONItems.containsApps[i] != null && JSONItems.containsApps[i] != undefined) {
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
    parent.find(".btn-download").click(function() {
        payPopupInit($(this));
    });
    parent.find(".cancel").click(function() {
        payPopupClose();
    });
    parent.find(".app-name").click(function() {
        appPageInit($(this));
    });
}