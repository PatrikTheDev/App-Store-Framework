/* JSHint settings */
/* jshint esversion: 6 */

function appendBtnDownloadContent(element) {
    var path = `${appDirectory()}${window.currentApp}.json`,
        JSONData = window.appCache[window.currentApp], tint = tintState();
    if (!JSONData) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                log(window.currentApp);
                JSONData = window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    var price = JSONData.price;
    if (price == "Free") {
        price = "GET";
    }
    element
        .text("" + price)
        .attr("app", window.currentApp);
    if (tint === true) {
        element
            .css({backgroundColor: JSONData.tint, color: JSONData.textTint});
    }
}
function appendSubtitleContent(element, override, appSubtitle) {
    var path = `${appDirectory()}${window.currentApp}.json`,
        JSONData = window.appCache[window.currentApp], tint = tintState();
    if (typeof JSONData == "undefined" && override == false && typeof appSubtitle != "string") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    } else if (override == true && typeof appSubtitle == "string") {
        JSONData.subtitle = appSubtitle;
    }
    element
        .html("" + JSONData.subtitle)
        .attr("app", window.currentApp);
    if (tint == true) {
        element
            .css("color", JSONData.textTint2);
    }
}
function appendAppName(element, override, appName) {
    var path = `${appDirectory()}${window.currentApp}.json`,
        JSONData = window.appCache[window.currentApp];
    if (typeof JSONData == "undefined" && override == false && typeof appName != "string") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    } else if (override === true && typeof appName === "string") {
        JSONData.appName = appName;
    }
    element
        .text("" + JSONData.appName)
        .attr("app", window.currentApp);
}
function appendIcon(wrapper, iconClass = 'app-icon') {
    /*
        ? element expects the icon wrapper 
    */
    var JSONData = window.appCache[window.currentApp],
        path = `${appDirectory()}${window.currentApp}.json`;
    if (!JSONData) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    wrapper
        .html(icon(JSONData.icon, iconClass, JSONData.appName));
}
function appendBottomBarColor(element) {
    /*
        ? element expects the bar itself
    */
    var JSONData = window.appCache[window.currentApp],
        path = `${appDirectory()}${window.currentApp}.json`;
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    element.css("background-color", JSONData.tint2);
}
function tintElements(elementsToTint, tint, override) {
    var tintEnabled = override ? override : tintState();
    if (tintEnabled == true) {
        elementsToTint.css({color: tint});
    } else {
        elementsToTint.css({color: globalTint()});
    }
}
