/* JSHint settings */
/* jshint esversion: 6 */
class UIPayPopup {
    constructor(directory, cache, payPopup) {
        this.cache = window.appCache || cache || {};
        this.currentApp = window.currentApp || "default";
        this.directory = directory || "depictions/";
        // Defaults for elements, you can change these if your elements are different
        this.payPopup = payPopup || $(".pay-now");
        this.appNameElement = $(".pay-popup-name");
        this.appSubtitleElement = $(".pay-popup-subtitle");
        this.iconWrapper = $(".pay-popup-app-icon");
        this.payButton = $(".pay-now-button");
        this.price = $(".pay-popup-price");
        this.email = $(".email");
        this.tintedElements = this.payPopup.find(".tinted");
        // Overrides
        this.settingsOverrideDefaults = {
            "appName": false,
            "appSubtitle": false
        };
        this.overrideDefaults = {};
        this.override = this.overrideDefaults;
        this.settingsOverride = this.settingsOverrideDefaults;
    }
    initAll() {
        window.currentApp = this.currentApp;
        // Parse the JSON
        this.parseJSON();
        // Append app name
        this.initAppName();
        // Append subtitle
        this.initSubtitle();
        // Add app icon
        this.initAppIcon();
        // Add price
        this.initPrice();
        // Tint elements
        this.tintElements();
        // Show app-page
        this.open();
        // Check cookie
        this.checkCookie();
        // Append things to download button
        this.initBtnDownload();
    }
    parseJSON(pathToJSON) {
        var path = pathToJSON || this.directory + this.currentApp + ".json";
        var JSONData = [];
        var cache = this.cache;
        if (typeof this.cache[this.currentApp] == "undefined") {
            $.ajax({
                url: path,
                async: false,
                dataType: 'json',
                success: function (data) {
                  JSONData = data;
                  console.log(cache);
                  cache[currentApp] = data;
                }
            });
            if (typeof JSONItems != "object"){
                console.log("Error while parsing JSON");
            }
            this.JSONData = JSONData;
        } else {
            this.JSONData = this.cache[this.currentApp];
        }
        return JSONData;
    }
    open() {
        this.payPopup.css("opacity", "1");
        if (window.innerWidth < 700) {
            this.payPopup.css({bottom: 0});
        } else {
            this.payPopup.css({bottom: "1em"});
        }
        $(".bottom-popup").css("bottom", "-100%");
    }
    initAppName() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendAppName(this.depictionPath, this.appNameElement, this.currentApp, this.JSONData, this.settingsOverride.appName, this.override.appName);
    }
    initSubtitle() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendSubtitleContent(this.depictionPath, this.appSubtitleElement, this.JSONData, this.settingsOverride.appSubtitle, this.override.appSubtitle);
    }
    initAppIcon() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        appendIcon(this.depictionPath, this.iconWrapper, "app-icon", this.JSONData);
    }
    initPrice() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        this.price.text("" + this.JSONData.price);
    }
    initBtnDownload() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        this.payButton.css({"background-color": this.JSONData.tint, "color": this.JSONData.textTint});
    }
    tintElements() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        tintElements(this.tintedElements, this.JSONData.textTint2);
    }
    checkCookie() {
        if (typeof this.JSONData == "undefined" && typeof this.cache[this.currentApp] == "undefined") {
            this.parseJSON();
        }
        this.user = getCookie("email");
        if (this.user != "") {
            this.email.text(this.user);
            this.payButton.attr({"onclick": "", "href": this.JSONData.location});
        } else {
            this.email.text("Not logged in");
            this.payButton
                .text("Log in")
                .attr("onclick", "logInPopupOpen(); payPopupClose();");
        }
    }
    close() {
        this.payPopup.css({bottom: "-100%", opacity: 0});
        this.settingsOverride = this.settingsOverrideDefaults;
        this.override = this.overrideDefaults;
    }
}
var payPopup;
$("document").ready(function() {
    payPopup = new UIPayPopup();
});



function payPopupInit(parent) {
    var currentApp = parent.attr("app");
    payPopup.currentApp = currentApp;
    payPopup.initAll();
}
function payPopupClose() {
    payPopup.close();
}