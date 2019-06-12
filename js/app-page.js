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
        this.appPage.attr("cardsWereVisible", cardsWereVisible);
        return cardsWereVisible;
    }
    parseJSON(pathToJSON) {
        var path = pathToJSON || this.depictionPath;
        var JSONData = [];
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
              JSONData = data;
            }
        });
        if (typeof JSONItems != "object"){
            console.log("Error while parsing JSON");
        }
        this.JSONData = JSONData;
        return JSONData;
    }
    initAppIcon() {
        appendIcon(this.depictionPath, $(".app-page-app-icon-wrapper"), "app-page-app-icon", this.JSONData);
        appendIcon(this.depictionPath, $(".header-app-icon-wrapper"), "header-app-icon app-icon", this.JSONData);
    }
    initAppName() {
        appendAppName(this.depictionPath, $(".app-page-app-name"), this.JSONData);
        $(".app-page-app-name").attr("data-depictionJSON", this.depictionPath);
    }
    initBtnDownload() {
        appendBtnDownloadContent(this.depictionPath, $(".app-page-btn-download-append"), this.JSONData);
        $(".app-page-btn-download-append").attr("data-depictionJSON", this.depictionPath);
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
        this.appPage.find(".rating-num").text("" + refAppRating);
        this.appPage.find(".number-of-ratings").text("" + JSONData.numberOfRatings + " " + ratingsText);
    }
    initHeader() {
        var alreadyRan = this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan");
        if (this.JSONData.hasHeader == true && alreadyRan !== "true") {
            this.appPage.find(".app-page-header-img-wrapper").css({display: "block"}).append('<img class="app-page-header-img" src="' + this.JSONData.headerPhoto + '"></img>').addClass("has-header");
            this.appPage.find(".app-page-header").css({"-webkit-backdrop-filter": "blur(0)", backgroundColor: "transparent"});
            this.appPage.css({paddingTop: "0"});
        }
        statusBarInit($(".header-app-icon, .app-page-btn-download-header"));
        this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan", "true");
    }
    resetHeader() {
        this.appPage.find(".app-page-header-img-wrapper").html("");
        this.appPage.find(".app-page-header-img-wrapper").css({display: "none"});
        this.appPage.find(".app-page-header-img-wrapper").attr("alreadyRan", "false");
        this.appPage.find(".app-page-header").css({"-webkit-backdrop-filter": '', backgroundColor: ''});
        this.appPage.css({paddingTop: ''});
        this.appPage.find(".app-page-header-img-wrapper").removeClass("has-header");
    }
    initScreenshots() {
        parseScreenshots($(".app-page-screenshot-wrapper"), this.depictionPath, this.JSONData);
    }
    tintElements() {
        this.appPage.find(".tinted").css({color: this.JSONData.textTint2});
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
        // Tint elements
        this.tintElements();
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
        // Init the header (if present)
        this.initHeader();
    }
    // Open appPage
    open() {
        this.appPage.css({visibility: "visible", right: "0"});
        $(".app-page-header").css({right: "0", visibility: "visible"});
    }
    close() {
        toggleCards();
        // Hide the app page
        this.appPage.css("right", "-100%");
        this.appPage.find(".app-page-header").css({right: "-100%", visibility: "hidden"});
        // Reset all the things back
        resetScreenshots($(".app-page-screenshot-wrapper"));
        resetDescription($(".app-page-text-description"));
        resetRating($("[fifth-star]"));
        this.resetHeader();
    }

}
function appPageInit(parent) {
    var depictionPath = parent.attr("data-depictionJSON");
    appPage.depictionPath = depictionPath;
    appPage.initAll();
}
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
function statusBarInit(element, scrollView) {
    var scrollViewElement = scrollView || ".app-page";
    element.closest(scrollViewElement).scroll(function() {
        if (element.closest(scrollViewElement).scrollTop() > 100){
            element.css({opacity: 1});
            element.addClass("is-visible");
            if (element.closest(".app-page-header").hasClass("has-header")) {
                element.closest(".app-page-header").css({"-webkit-backdrop-filter": "blur(15px)", backgroundColor: "rgba(255,255,255,0.5)"});
            }
        } else {
            element.css({top: '', opacity: ''});
            element.removeClass("is-visible");
            if (element.closest(".app-page-header").hasClass("has-header")) {
                element.closest(".app-page-header").css({"-webkit-backdrop-filter": 'blur(0)', backgroundColor: 'transparent'});
            }
        }
    });
}

/*
    Set appPage variable to be UIAppPage
    This is also where you set the overrides for default elements
*/
var appPage = new UIAppPage();
/* This should be replaced with your code if it's any different */
$(".app-name").click(function() {
    appPageInit($(this));
});

$(".back-btn").click(function() {
    appPage.close();
});

