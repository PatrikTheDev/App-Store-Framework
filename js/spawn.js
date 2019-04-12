function spawnApps(parent, path) {
    var JSONItems = [];
    $.getJSON(path, function (data) {
        JSONItems = data;
        var i;
        for (i = 0; i < JSONItems.applist.length; i++) { 
            console.log(JSONItems.applist[i]);
            parent.append('<li class="app app-list" app="' + JSONItems.applist[i] + '"> <div class="app-icon-wrapper" app="' + JSONItems.applist[i] + '"></div><h4 class="app-name" app="' + JSONItems.applist[i] + '"></h4><p class="subtitle grey-text" app="' + JSONItems.applist[i] + '"></p><div class="btn-download right light-grey" app="' + JSONItems.applist[i] + '">Get</div></li>');
            $(".btn-download").click(function() {
                var refAppIconSrc = $(this).attr("icon-src");
                var refAppName = $(this).attr("name");
                var refAppPrice = $(this).attr("price");
                if (refAppPrice == "0") {
                    refAppPrice = "Free";
                };
                var refAppSubtitle = $(this).attr("subtitle");
                var refAppFiles = $(this).attr("location");
                var refAppTint = $(this).attr("tint");
                var refAppTextTint = $(this).attr("text-tint");
                var refAppTextTint2 = $(this).attr("text-tint-2");
                var refAppRating = $(this).attr("rating");
                var email = $(".email").text();
                $(".pay-popup-name").text("" + refAppName);
                $(".pay-popup-subtitle").text("" + refAppSubtitle);
                $(".pay-popup-subtitle").css("color", refAppTextTint2);
                $(".pay-popup-app-icon").html('<img class="app-icon" src="' + refAppIconSrc + '">');
                $(".pay-popup-price").text("" + refAppPrice);
                function checkPayCookie() {
                    var user = getCookie("email");
                    if (user != "") {
                      $(".log-in-homepage").hide();
                      $(".email").text(user);
                      $(".pay-now-button").attr("onclick", "");
                      $(".pay-now-button").attr("href", refAppFiles);
                      
                    } else {
                      $(".email").text("Not logged in");
                      $(".pay-now-button").text("Log in");
                    $(".pay-now-button").attr("onclick", "logInPopupOpen(); payPopupClose();");
                       
                    }
                  };
                checkPayCookie();
                
                
                
                $(".pay-now").css("visibility", "visible");
                $(".pay-now").css("bottom", "1em");
                
                $(".pay-now-button").css({"background-color": refAppTint, "color": refAppTextTint});
                $(".pay-popup-name").attr("name", refAppName);
                $(".pay-popup-name").attr("price", refAppPrice);
                $(".pay-popup-name").attr("location", refAppFiles);
                $(".pay-popup-name").attr("tint", refAppTint);
                $(".pay-popup-name").attr("text-tint", refAppTextTint);
                $(".pay-popup-name").attr("text-tint-2", refAppTextTint2);
                $(".pay-popup-name").attr("icon-src", refAppIconSrc);
                $(".pay-popup-name").attr("subtitle", refAppSubtitle);
                parseRating(refAppRating, $(".pay-first-star"), $(".pay-second-star"), $(".pay-third-star"), $(".pay-fourth-star"), $(".pay-fifth-star"));
                
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