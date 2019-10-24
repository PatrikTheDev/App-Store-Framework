/* JSHint settings */
/* jshint esversion: 6 */
class UIPayPopup {
    constructor(directory, cache, payPopup) {
        this.cache = window.appCache || cache || {};
        this.currentApp = window.currentApp || "default";
        this.directory = directory || "depictions/";
        this.tintEnabled = tintState();
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
    }
    addToHistory() {
        var alreadyRan = window.alreadyAddedHistoryPayPopup;
        if (alreadyRan !== true) {
            history.pushState("payPopup", null, "#card");
        }
        window.alreadyAddedHistoryPayPopup = true;
    }
    initAll() {
        window.currentApp = this.currentApp;
        // Add to the history object
        this.addToHistory();
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
        if (!this.cache[this.currentApp]) {
            $.ajax({
                url: path,
                async: false,
                dataType: 'json',
                success: function (data) {
                    JSONData = cache[currentApp] = window.appCache[currentApp] = data;
                }
            });
            this.JSONData = JSONData;
        } else {
            this.JSONData = this.cache[this.currentApp];
        }
        return JSONData;
    }
    open() {
        var bottom = window.innerWidth < 700 ? 0 : "1em";
        this.payPopup.css({opacity: 1, bottom: bottom});
        this.closeBottomPopup();
    }
    closeBottomPopup() {
        bottomPopupClose();
    }
    initAppName() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        appendAppName(this.appNameElement);
    }
    initSubtitle() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        appendSubtitleContent(this.appSubtitleElement);
    }
    initAppIcon() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        appendIcon(this.iconWrapper, "app-icon", this.JSONData);
    }
    initPrice() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        this.price.text(`${this.JSONData.price}`);
    }
    initBtnDownload() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        this.payButton.css({color: this.JSONData.textTint});
        if (this.tintEnabled == true) {
            this.payButton.css({backgroundColor: this.JSONData.tint});
        } else {
            this.payButton.css({backgroundColor: globalTint()});
        }
    }
    tintElements() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
            this.parseJSON();
        }
        tintElements(this.tintedElements, this.JSONData.textTint2);
    }
    checkCookie() {
        if (!this.JSONData && !this.cache[this.currentApp]) {
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
        window.alreadyAddedHistoryPayPopup = false;
        this.payPopup.css({bottom: "-100%", opacity: 0});
        this.settingsOverride = this.settingsOverrideDefaults;
        this.override = this.overrideDefaults;
    }
}
function payPopupInit(currentApp) {
    payPopup.currentApp = currentApp || defaultApp();
    payPopup.initAll();
}
function payPopupClose() {
    payPopup.close();
}
function definePayPopup() {
    window.payPopup = new UIPayPopup();
}