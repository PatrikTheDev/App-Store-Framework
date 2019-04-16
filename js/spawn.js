function spawnApps(parent, path) {
    var JSONItems = [];
    $.getJSON(path, function (data) {
        JSONItems = data;
        var i;
        for (i = 0; i < JSONItems.applist.length; i++) { 
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
                var currentid = this.id;
                var refAppIconSrc = $(this).attr("icon-src");
                var refAppName = $(this).attr("name");
                var refAppPrice = $(this).attr("price");
                var freeString = $("[free]").attr("freeString");
                if (refAppPrice == "0") {
                    refAppPrice = freeString;
                };
                var refAppSubtitle = $(this).attr("subtitle");
                var refAppFiles = $(this).attr("location");
                var refAppTint = $(this).attr("tint");
                var refAppTextTint = $(this).attr("text-tint");
                var refAppTextTint2 = $(this).attr("text-tint-2");
                var refAppRating = $(this).attr("rating");
                var email = $(".email").text();
                $(".app-page-app-name").text("" + refAppName);
                $(".app-page-app-subtitle").text("" + refAppSubtitle);
                $(".app-page-app-subtitle").css("color", refAppTextTint2);
                $(".app-page-app-icon-wrapper").html('<img class="app-page-app-icon" src="' + refAppIconSrc + '">');
                $(".app-page-price").text("" + refAppPrice);
                $(".app-page").css({"visibility": "visible", "right": "0"});
                setTimeout(function() {
                    $(".card").hide();
                }, 500);
                $(".app-page-btn-download").text("" + refAppPrice);
                $(".app-page-btn-download").attr("price", refAppPrice);
                $(".app-page-btn-download").attr("location", refAppFiles);
                $(".app-page-btn-download").css({"background-color": refAppTint, "color": refAppTextTint});
                $(".app-page-btn-download").attr("tint", refAppTint);
                $(".app-page-btn-download").attr("text-tint", refAppTextTint);
                $(".app-page-btn-download").attr("text-tint-2", refAppTextTint2);
                $(".app-page-btn-download").attr("name", refAppName);
                $(".app-page-btn-download").attr("subtitle", refAppSubtitle);
                $(".app-page-btn-download").attr("icon-src", refAppIconSrc);
                parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
            });
        }
    });
    
}