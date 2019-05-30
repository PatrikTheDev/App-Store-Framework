/* JSHint settings */
/* jshint esversion: 6 */

class UIAppPage {
    constructor(depictionPath, appPage) {
        this.depictionPath = depictionPath || "depictions/default.json";
        this.appPage = appPage || $(".app-page");
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
    parseJSON(pathToJSON) {
        var path = pathToJSON || this.depictionPath;
        var JSONItems = [];
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
              JSONItems = data;
            }
        });
        if (typeof JSONItems != "object"){
            console.log("Error while parsing JSON");
        }
        this.JSONData = JSONItems;
        return JSONItems;
    }
    initAppIcon() {
        appendIcon(this.depictionPath, $(".app-page-app-icon-wrapper"), "app-page-app-icon", this.JSONData);
    }
    initAppName() {
        appendAppName(this.depictionPath, $(".app-page-app-name"), this.JSONData);
        $(".app-page-app-name").attr("data-depictionJSON", this.depictionPath);
    }
    initBtnDownload() {
        appendBtnDownloadContent(this.depictionPath, $(".app-page-btn-download"), this.JSONData);
        $(".app-page-btn-download").attr("data-depictionJSON", this.depictionPath);
    }
    initSubtitle() {
        appendSubtitleContent(this.depictionPath, $(".app-page-app-subtitle"), this.JSONData);
    }
    initDescription() {
        appendDescription(this.depictionPath, $(".app-page-text-description"), this.JSONData);
    }
    initRating() {
        var JSONData = this.JSONData;
        if (JSONData == undefined) {
            $.ajax({
                url: this.depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                JSONData = data;
                console.log("Parsed a JSON");
                }
            });
        }
        var refAppRating = JSONData.rating;
        var ratingsText = "ratings";
        parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
        $(".rating-num").text("" + refAppRating);
        $(".number-of-ratings").text("" + JSONData.numberOfRatings + " " + ratingsText);
    }
    initHeader() {
        var alreadyRan = this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan");
        if (this.JSONData.hasHeader == true && alreadyRan !== "true") {
            this.appPage.find(".app-page-header-img-wrapper").css({display: "block"});
            this.appPage.find(".app-page-header-img-wrapper").append('<img class="app-page-header-img" src="' + this.JSONData.headerPhoto + '"></img>');
        }
        this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan", "true");
    }
    resetHeader() {
        this.appPage.find(".app-page-header-img-wrapper").html("");
        this.appPage.find(".app-page-header-img-wrapper").css({display: "none"});
        this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan", "false");
    }
    initScreenshots() {
        parseScreenshots($(".app-page-screenshot-wrapper"), this.depictionPath, this.JSONData);
    }
    initAll() {
        // Parse the JSON
        this.parseJSON();
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
        this.initHeader();
        // Init bottom-popup (unnecessary, but I wanted to do it)
        bottomPopupInit($(".app-page-content"), this.JSONData);
        
    }
    // Open appPage
    open() {
        this.appPage.css({visibility: "visible", right: "0"});
        $(".app-page-header").css({right: "0", visibility: "visible"});
    }
    close() {
        toggleCards();
        // Hide the app page
        $(".app-page").css("right", "-100%");
        $(".app-page-header").css({right: "-100%", visibility: "hidden"});
        // Reset all the things
        resetScreenshots($(".app-page-screenshot-wrapper"));
        resetDescription($(".app-page-text-description"));
        resetRating($("[fifth-star]"));
        this.resetHeader();
    }

}
var appPage = new UIAppPage();
function appPageInit(parent) {
    var depictionPath = parent.attr("data-depictionJSON");
    appPage.depictionPath = depictionPath;
    appPage.initAll();
}

$(".app-name").click(function() {
    appPageInit($(this));
});

$(".back-btn").click(function() {
    var depictionPath = "depictions/default.json";
    appPage.depictionPath = depictionPath;
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
function toggleCards(parentElem) {
    var parent = parentElem || $(".app-page");
    var wasVisible = parent.attr("cardsWereVisible");
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
}
function resetRating(lastStar) {
    lastStar.prevAll().addClass("far").removeClass("fas");
    lastStar.addClass("far").removeClass("fas");
}