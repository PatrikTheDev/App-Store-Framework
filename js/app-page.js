/* JSHint settings */
/* jshint esversion: 6 */
class UIAppPage {
    constructor(appPage, cache, currentApp) {
        this.cache = window.appCache || cache || {};
        this.currentApp = currentApp || defaultApp();
        this.directory = appDirectory();
        this.tintEnabled = tintState();
        // Defaults for elements, you can change these if your elements are different
        this.appPage = appPage || $(".app-page");
        this.iconWrapper = this.appPage.find(".app-page-app-icon-wrapper");
        this.headerIconWrapper = this.appPage.find(".header-app-icon-wrapper");
        this.headerIcon = this.appPage.find(".header-app-icon");
        this.headerItems = this.appPage.find(".header-app-icon, .app-page-btn-download-header");
        this.headerImgWrapper = this.appPage.find(".header-img-wrapper");
        this.appNameElement = this.appPage.find(".app-name");
        this.appSubtitleElement = this.appPage.find(".subtitle");
        this.btnDownload = this.appPage.find(".btn-download-append");
        this.headerBtnDownload = this.appPage.find(".app-page-btn-download-header");
        this.header = this.appPage.find(".app-page-header");
        this.tintedElements = this.appPage.find(".tinted");
        this.similarApps = this.appPage.find(".app-page-similar-apps-list");
        this.lastStar = $(".app-page-rating [fifth-star]");
        this.reviews = this.appPage.find(".reviews");
        // Values
        this.closeDuration = 500;
        // Overrides
        this.settingsOverrideDefaults = {
            "appName": false,
            "appSubtitle": false
        };
        this.overrideDefaults = {};
        this.override = this.overrideDefaults;
        this.settingsOverride = this.settingsOverrideDefaults;
        this.options = appPageOptions();
        this.animateCloseCaller = "";
    }
    blockScroll() {
        $("body").addClass("noscroll");
    }
    init(app) {
        this.checkIfNeededToReload(app);
    }
    closePayPopup() {
        payPopupClose();
    }
    addToHistory() {
        var state = {
            app: this.currentApp,
            stateName: "appPage"
        };
        var alreadyRan = window.alreadyAddedHistoryAppPage;
        if (alreadyRan != true && this.options.addToHistory != false) {
            history.pushState(state, null, "#appPage");
        }
        window.alreadyAddedHistoryAppPage = true;
    }
    checkIfNeededToReload(app) {
        if (this.currentApp != app) {
            this.reset();
            this.currentApp = window.currentApp = app;
            this.initAll();
        } else {
            this.initAll();
        }
    }
    parseJSON(pathToJSON) {
        var path = pathToJSON || `${this.directory}${this.currentApp}.json`,
            JSONData = [],
            cache = this.cache;
        if (typeof this.cache[this.currentApp] == "undefined") {
            $.ajax({
                url: path,
                async: false,
                dataType: 'json',
                success: function (data) {
                  JSONData = cache[currentApp] = window.appCache[currentApp] = data;
                }
            });
            this.JSONData = JSONData;
            this.cache[this.currentApp] = cache[this.currentApp];
        } else {
            this.JSONData = this.cache[this.currentApp];
        }
        return this.JSONData;
    }
    spawnSimilarApps() {
        var alreadyRan = this.similarApps.attr("already-ran");
        if (alreadyRan != "true") {
            this.similarApps.spawnSimilarApps();
        }
        this.similarApps.attr("already-ran", "true");
        // Reset the current app so that it doesn't mess up
        window.currentApp = this.currentApp;
    }
    spawnReviews() {
        var alreadyRan = this.reviews.attr("already-ran");
        if (alreadyRan != "true") {
            this.reviews.spawnReviews();
        }
        this.reviews.attr("already-ran", "true");
    }
    initAppIcon() {
        appendIcon(this.iconWrapper, "app-icon");
        appendIcon(this.headerIconWrapper, "header-app-icon app-icon");
    }
    initAppName() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendAppName(this.appNameElement, this.settingsOverride.appName, this.override.appName);
    }
    initBtnDownload() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendBtnDownloadContent(this.btnDownload);
    }
    initSubtitle() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendSubtitleContent(this.appSubtitleElement, this.settingsOverride.appSubtitle, this.override.appSubtitle);
    }
    initDescription() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendDescription(this.depictionPath, $(".app-page-text-description"), this.JSONData);
    }
    initRating() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        var ratingsText = this.JSONData.rating === 1 ? "rating" : "ratings";
        appendRating(this.JSONData.rating, $(".app-page-rating [first-star]"), $(".app-page-rating [second-star]"), $(".app-page-rating [third-star]"), $(".app-page-rating [fourth-star]"), this.lastStar);
        this.appPage.find(".rating-num").text(`${this.JSONData.rating}`);
        this.appPage.find(".number-of-ratings").text(`${this.JSONData.numberOfRatings} ${ratingsText}`);
    }
    initHeader() {
        if (typeof this.JSONData == "undefined" && typeof window.appCache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        var alreadyRan = this.headerImgWrapper.attr("alreadyRan");
        if (this.JSONData.hasHeader === true && alreadyRan != "true") {
            this.headerImgWrapper.css({display: "block"}).append(headerImg(this.JSONData.headerPhoto)).addClass("has-header");
            this.header.css({"backdrop-filter": "blur(0)", backgroundColor: "transparent"}).addClass("has-header");
            this.appPage.css({paddingTop: "0"});
        }
        statusBarInit($(".header-app-icon, .app-page-btn-download-header"));
        this.headerImgWrapper.attr("alreadyRan", "true");
    }
    resetHeader() {
        this.headerImgWrapper
            .html("")
            .css({display: "none"})
            .attr("alreadyRan", "false")
            .removeClass("has-header");
        this.header
            .css({"-webkit-backdrop-filter": '', backgroundColor: ''})
            .removeClass("has-header");
        this.appPage.css({paddingTop: ''});
    }
    globalizeApp() {
        this.appPage.globalizeApp(this.currentApp);
    }
    initScreenshots() {
        parseScreenshots($(".app-page-screenshot-wrapper"), this.depictionPath, this.JSONData);
    }
    tintElements() {
        tintElements(this.tintedElements, this.JSONData.textTint2);
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
        // Append the description/depiction
        this.initDescription();
        // Block scroll
        this.blockScroll();
        // Append things to btn-download
        this.initBtnDownload();
        // Parse rating
        this.initRating();
        // Parse screenshots
        this.initScreenshots();
        // Init the header
        this.initHeader();
        // Spawn reviews
        this.spawnReviews();
        // Spawn similarApps
        this.spawnSimilarApps();
        // Close pay popup
        this.closePayPopup();
        // Add to the history object
        this.addToHistory();
        // Globalize the app attribute
        this.globalizeApp();
        // Show app-page
        this.open(this.options.animateOpen);
    }
    // Open appPage
    open(animate = true) {
        var appPage = this.appPage,
            header = this.header;
        if (animate === false) {
            this.appPage.addClass("no-animation");
            this.header.addClass("no-animation");
        }
        this.appPage.css({
            visibility: "visible",
            right: "0"
        });
        this.header.css({
            right: "0",
            visibility: "visible"
        });
        setTimeout(() => {
            if (animate === false) {
                appPage.removeClass("no-animation");
                header.removeClass("no-animation");
            }
        }, 1);
    }
    close(animate = this.animateClose = true) {
        toggleCards();
        var appPage = this.appPage;
        // Hide the app page
        if (animate === false) {
            this.appPage.addClass("no-animation");
        }
        this.appPage.css({right: "-100%"});
        this.header.css({
            right: "-100%",
            visibility: "hidden"
        });
        // Reset all the things back once it is closed
        setTimeout(() => {
            if (animate === false) {
                appPage.removeClass("no-animation");
            }
            window.appPage.reset();
            history.replaceState("homescreen", null, "#");
        }, this.closeDuration);
        
    }
    reset() {
        resetScreenshots($(".app-page-screenshot-wrapper"));
        resetDescription($(".app-page-text-description"));
        resetRating(this.lastStar);
        this.similarApps.html("").attr("already-ran", false);
        this.reviews.html("").attr("already-ran", false);
        this.similarApps.closest(".similar-apps").show();
        this.reviews.show();
        this.resetHeader();
        this.appPage.find("*").removeAttr("app");
        // Reset overrides back to default
        this.settingsOverride = this.settingsOverrideDefaults;
        this.override = this.overrideDefaults;
        window.alreadyAddedHistoryAppPage = false;
        return;
    }
}
function appPageInit(currentApp, options = appPageOptions()) {
    window.currentApp = currentApp;
    appPage.options = options;
    if (options.animateOpen == false) {
        appPage.closeDuration = 0;
    } else {
        appPage.closeDuration = 500;
    }
    appPage.init(currentApp, options);
}
function resetScreenshots(parent) {
    parent
        .html("")
        .attr("screenshotsAppended", "false");
}
function resetDescription(parent) {
    parent
        .html("")
        .attr("alreadyRan", "false");
}
function toggleCards() {
    $(".active").show();
    $("body").removeClass("noscroll");
}
function appendRating(refAppRating, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
    if (refAppRating == 0) {
        firstStar.not(".rating-num, .review-text").addClass("far").removeClass("fas");
        firstStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
    if (refAppRating == 1) {
        firstStar.not(".rating-num, .review-text").addClass("fas").removeClass("far");
        firstStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
    if (refAppRating == 2) {
        secondStar.prevAll().addBack().not(".rating-num, .review-text").addClass("fas").removeClass("far");
        secondStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
    if (refAppRating == 3) {
        thirdStar.prevAll().addBack().not(".rating-num, .review-text").addClass("fas").removeClass("far");
        thirdStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
    if (refAppRating == 4) {
        fourthStar.prevAll().addBack().not(".rating-num, .review-text").addClass("fas").removeClass("far");
        fourthStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
    if (refAppRating == 5) {
        fifthStar.prevAll().addBack().not(".rating-num, .review-text").addClass("fas").removeClass("far");
        fifthStar.nextAll().not(".rating-num, .review-text").addClass("far").removeClass("fas");
        return;
    }
}
function resetRating(lastStar) {
    lastStar.prevAll().addBack().addClass("far").removeClass("fas");
}
function statusBarInit(element, scrollView) {
    var scrollViewElement = scrollView || ".app-page",
        appPageHeader = element.closest(".app-page-header");
    element.closest(scrollViewElement).scroll(function() {
        if (element.closest(scrollViewElement).scrollTop() > 100){
            element
                .css({opacity: 1})
                .addClass("is-visible");
            if (appPageHeader.hasClass("has-header")) {
                appPageHeader.css({
                    "-webkit-backdrop-filter": "blur(15px)",
                    "backdrop-filter": 'blur(15px)',
                    backgroundColor: ''});
            }
        } else {
            element
                .css({top: '', opacity: ''})
                .removeClass("is-visible");
            if (appPageHeader.hasClass("has-header")) {
                appPageHeader.css({
                    "-webkit-backdrop-filter": 'blur(0)',
                    backdropFilter: 'blur(0)',
                    backgroundColor: 'transparent'});
            }
            
        }
    });
}

/*
    Set appPage variable to be UIAppPage
    This is also where you set the overrides for default elements
    For example: appPage.header = $(".header"); (Don't use this, it will F up if you won't change your markup acordingly)
*/
var appPage;
function defineAppPage() {
    window.appPage = new UIAppPage();
}
function popState() {
    window.onpopstate = function(event) {
        console.log(event.state);
        if (event.state == "homescreen" || !event.state) {
            var animate;
            if (window.appPage.animateCloseCaller == "appPage") {
                animate = true;
            } else {
                animate = false;
            }
            log(window.appPage.animateCloseCaller);
            window.appPage.close(animate);
            window.card.close();
            window.payPopup.close();
        } else if (typeof event.state == "object" && event.state.stateName == "appPage") {
            var options = {
                addToHistory: false, 
                animateOpen: false
            };
            appPageInit(event.state.app, options);
        } else if (event.state == "card") {
            window.appPage.close(false);
        }
    };
}