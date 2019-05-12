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
            parent.append('\
            <li class="app app-list" app="' + JSONItems.applist[i] + '">\
            <div class="app-icon-wrapper" app="' + JSONItems.applist[i] + '">\
            </div><h4 class="app-name" app="' + JSONItems.applist[i] + '">\
            </h4><p class="subtitle grey-text" app="' + JSONItems.applist[i] + '">\
            </p>\
            <div class="btn-download right light-grey" app="' + JSONItems.applist[i] + '">Get</div>\
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
function spawnAppsInCards(parent, path) {
    var currentCard = parent.attr("card");
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    path = JSONItems.jsons[currentCard];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    // spawnApps($(this), JSONItems.containsApps);
    var i;
    for (i = 0; i < JSONItems.containsApps.length; i++) { 
        if (JSONItems.containsApps[i] != null && JSONItems.containsApps[i] != undefined) {
            parent.append('\
            <li class="app app-list" app="' + JSONItems.containsApps[i] + '">\
            <div class="app-icon-wrapper" app="' + JSONItems.containsApps[i] + '">\
            </div><h4 class="app-name" app="' + JSONItems.containsApps[i] + '">\
            </h4><p class="subtitle grey-text" app="' + JSONItems.containsApps[i] + '">\
            </p>\
            <div class="btn-download right light-grey" app="' + JSONItems.containsApps[i] + '">Get</div>\
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