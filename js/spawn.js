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
        if (JSONItems.applist[i] != null) {
            parent.append('\
            <li class="app app-list" app="' + JSONItems.applist[i] + '">\
            <div class="app-icon-wrapper" app="' + JSONItems.applist[i] + '">\
            </div><h4 class="app-name" app="' + JSONItems.applist[i] + '">\
            </h4><p class="subtitle grey-text" app="' + JSONItems.applist[i] + '">\
            </p>\
            <div class="btn-download right light-grey" app="' + JSONItems.applist[i] + '">Get</div>\
            </li>');
            $(".btn-download").click(function() {
                payPopupInit($(this));
            });
            $(".cancel").click(function() {
                payPopupClose();
            });
            $(".app-name").click(function() {
                appPageInit($(this));
            });
        }
        
    }
}