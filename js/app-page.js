class UIAppPage {
    constructor(depictionPath) {
        this.depictionPath = depictionPath || "depictions/default.json";
    }
    hideCards() {
        setTimeout(function() {
            $(".card").not(".active").hide();
        }, 500);
    }
    checkCardsVisibility() {
        var cardDisplay = $(".card").not(".active").css("display");
        var cardsWereVisible;
        if (cardDisplay == "none") {
            cardsWereVisible = "false";
        } else {
            cardsWereVisible = "true";
        }
        $(".app-page").attr("cardsWereVisible", cardsWereVisible);
        return cardsWereVisible;
    }
    initAppIcon() {
        appendIcon(this.depictionPath, $(".app-page-app-icon-wrapper"), "app-page-app-icon");
    }
    initAppName() {
        appendAppName(this.depictionPath, $(".app-page-app-name"));
        $(".app-page-app-name").attr("data-depictionJSON", this.depictionPath);
    }
    initBtnDownload() {
        appendBtnDownloadContent(this.depictionPath, $(".app-page-btn-download"));
        $(".app-page-btn-download").attr("data-depictionJSON", this.depictionPath);
    }
    initSubtitle() {
        appendSubtitleContent(this.depictionPath, $(".app-page-app-subtitle"));
    }
    initDescription() {
        appendDescription(this.depictionPath, $(".app-page-text-description"));
    }
    initRating() {
        var depictionPath = this.depictionPath;
        $.ajax({
            url: this.depictionPath,
            async: false,
            dataType: 'json',
            success: function (data) {
              depictionPath = data;
            }
        });
        var refAppRating = depictionPath.rating;
        var ratingsText = "ratings";
        parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
        $(".rating-num").text("" + refAppRating);
        $(".number-of-ratings").text("" + depictionPath.numberOfRatings + " " + ratingsText);
    }
    initScreenshots() {
        parseScreenshots($(".app-page-screenshot-wrapper"), this.depictionPath);
    }
    initAll() {
        // Append app name
        this.initAppName();
        // Append subtitle
        this.initSubtitle();
        // Add app icon
        this.initAppIcon();
        // Show app-page
        this.open();
        // Append the description/depiction
        this.initDescription();
        // Check if cards were visible
        this.checkCardsVisibility();
        // Hide cards
        this.hideCards();
        // Append things to btn-download
        this.initBtnDownload();
        // Parse rating
        this.initRating();
        // Parse screenshots
        this.initScreenshots();
        // Init bottom-popup (unnecessary, but I wanted to do it)
        bottomPopupInit($(".app-page-content"));
        
    }
    // Open appPage
    open() {
        $(".app-page").css({"visibility": "visible", "right": "0"});
    }
    close() {
        toggleCards();
        $(".app-page").css("right", "-100%");
        resetScreenshots($(".app-page-screenshot-wrapper"));
        resetDescription($(".app-page-text-description"));
        resetRating($("[fifth-star]"));
    }

}

function appPageInit(parent) {
    var depictionPath = parent.attr("data-depictionJSON");
    var appPage = new UIAppPage("" + depictionPath);
    appPage.initAll();
}

$(".app-name").click(function() {
    
    appPageInit($(this));
});

$(".back-btn").click(function() {
    var depictionPath = "depictions/default.json"
    var appPage = new UIAppPage("" + depictionPath);
    appPage.close();
});

function resetScreenshots(parent) {
    parent.html("");
    parent.attr("screenshotsAppended", "false");
}
function resetDescription(parent) {
    parent.html("");
    parent.attr("alreadyRan", "false");
}
function toggleCards() {
    var wasVisible = $(".app-page").attr("cardsWereVisible");
    $(".active").show();
    if (wasVisible == "true") {
        $(".card").show();
    }
    
}
function parseRating(refAppRating, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
    if (refAppRating == 1) {
        firstStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == 2) {
        secondStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        secondStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == 3) {
        thirdStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        thirdStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == 4) {
        fourthStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        fourthStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == 5) {
        fifthStar.prevAll().not("rating-num").addClass("fas").removeClass("far");
        fifthStar.addClass("fas").removeClass("far");
    }
};
function resetRating(lastStar) {
    lastStar.prevAll().addClass("far").removeClass("fas");
    lastStar.addClass("far").removeClass("fas");
}


