$(".app-name").click(function() {
    appPageInit($(this));
});
$(".back-btn").click(function() {
    toggleCards($(".card"));
    $(".app-page").css("right", "-100%");
    resetScreenshots($(".app-page-screenshot-wrapper"));
    resetRating($("[fifth-star]"));
});
function resetScreenshots(parent) {
    parent.html("");
    parent.attr("screenshotsAppended", "false");
}
function toggleCards(parent) {
    var wasVisible = $(".app-page").attr("cardsWereVisible");
    $(".active").show();
    if (wasVisible == "true") {
        $(".card").show();
    }
    
}
function parseRating(refAppRating, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
    if (refAppRating == "1") {
        firstStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "2") {
        secondStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        secondStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "3") {
        thirdStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        thirdStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "4") {
        fourthStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        fourthStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "5") {
        fifthStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        fifthStar.addClass("fas").removeClass("far");
    }
};
function resetRating(lastStar) {
    lastStar.prevAll().addClass("far").removeClass("fas");
    lastStar.addClass("far").removeClass("fas");
}
function appPageInit(parent) {
    var depictionPath = parent.attr("data-depictionJSON");
    var JSONItems = [];
    $.getJSON(depictionPath, function (data) {
        JSONItems = data;
        
        var refAppIconSrc = JSONItems.icon;
        var refAppName = JSONItems.appName;
        var refAppPrice = JSONItems.price;
        var refAppSubtitle = JSONItems.subtitle;
        var refAppFiles = JSONItems.location;
        var refAppTint = JSONItems.tint;
        var refAppTextTint = JSONItems.textTint;
        var refAppTextTint2 = JSONItems.textTint2;
        var refAppRating = JSONItems.rating;
        var refAppScreenshots = depictionPath;
        var refAppDescription = JSONItems.description;
        var cardDisplay = $(".card").not(".active").css("display");
        var btnDownloadString;
        if (refAppPrice == "Free") {
            btnDownloadString = "Get";
        } else {
            btnDownloadString = refAppPrice;
        }
        var cardsWereVisible;
        if (cardDisplay == "none") {
            cardsWereVisible = "false";
        } else {
            cardsWereVisible = "true";
        }
        $(".app-page-app-name").text("" + refAppName);
        $(".app-page-app-subtitle").text("" + refAppSubtitle);
        $(".app-page-app-subtitle").css("color", refAppTextTint2);
        $(".app-page-app-icon-wrapper").html('<img class="app-page-app-icon" src="' + refAppIconSrc + '">');
        $(".app-page-price").text("" + refAppPrice);
        $(".app-page").css({"visibility": "visible", "right": "0"});
        $(".app-page").attr("cardsWereVisible", cardsWereVisible);
        $(".app-page-text-description").text("" + refAppDescription);
        setTimeout(function() {
            $(".card").not(".active").hide();
        }, 500);
        $(".app-page-btn-download").text("" + btnDownloadString);
        $(".app-page-btn-download").attr("data-depictionJSON", depictionPath);
        $(".app-page-btn-download").css({"background-color": refAppTint, "color": refAppTextTint});
        $(".rating-num").text("" + refAppRating);
        parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
        parseScreenshots($(".app-page-screenshot-wrapper"), refAppScreenshots);
        parent.closest(".app-page-content").scroll(function() {
            if(parent.closest(".app-page-content").scrollTop() > 50){
                $(".app-page-btn-download").css("top", "1rem");
                
                }
                else{
                    $(".app-page-btn-download").css("top", "5em");
                }
        });
    });
}