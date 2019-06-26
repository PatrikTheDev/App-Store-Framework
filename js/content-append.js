function appendBtnDownloadContent(path, element) {
    var currentApp = window.currentApp;
    var JSONData = window.appCache[window.currentApp];
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    var price = JSONData.price;
    if (price == "Free") {
        price = "Get";
    }
    element
        .text("" + price)
        .css({"background-color": JSONData.tint, "color": JSONData.textTint})
        .attr("app", currentApp);
}
function appendSubtitleContent(path, element, override, appSubtitle) {
    var JSONData = window.appCache[window.currentApp];
    if (typeof JSONData == "undefined" && override == false && typeof appSubtitle != "string") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    } else if (override == true && typeof appSubtitle == "string") {
        JSONData.subtitle = appSubtitle;
    }
    element
        .html("" + JSONData.subtitle)
        .css("color", JSONData.textTint2);
}
function appendAppName(path, element, override, appName) {
    var JSONData = window.appCache[window.currentApp];
    if (typeof JSONData == "undefined" && override == false && typeof appName != "string") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    } else if (override == true && typeof appName == "string") {
        JSONData.appName = appName;
    }
    element
        .text("" + JSONData.appName)
        .attr("app", window.currentApp);
}
function appendIcon(path, wrapper, iconClass) {
    var JSONData = window.appCache[window.currentApp];
    if (typeof iconClass == "undefined") {
        iconClass = "app-icon";
    }
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    wrapper
        .html('<img class="' + iconClass + '" src="' + JSONData.icon + '" alt="' + JSONData.appName +'">')
        .attr("icon-src", JSONData.icon);
}
function appendBottomBarColor(path, element) {
    var JSONData = window.appCache[window.currentApp];
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                window.appCache[window.currentApp] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    element.css("background-color", JSONData.tint2);
}
function tintElements(elementsToTint, tint) {
    elementsToTint.css({color: tint});
}
function appendContentToAppCell(cell) {
    var directory = appDirectory();
    var btnDownload = cell.find(".btn-download");
    btnDownload.each(function() {
        window.currentApp = $(this).attr("app");
        var path = directory + window.currentApp + ".json";
        appendBtnDownloadContent(path, $(this));
        payPopupListeners($(this).parent());
    });
    var appName = cell.find(".app-name");
    appName.each(function() {
        window.currentApp = $(this).attr("app");
        var path = directory + window.currentApp + ".json";
        appendAppName(path, $(this), false);
        appPageListeners($(this).parent());
    });
    var subtitle = cell.find(".subtitle");
    subtitle.each(function() {
        window.currentApp = $(this).attr("app");
        var path = directory + window.currentApp + ".json";
        appendSubtitleContent(path, $(this), false);
    });
    var appIcon = cell.find(".app-icon-wrapper");
    appIcon.each(function() {
        window.currentApp = $(this).attr("app");
        var path = directory + window.currentApp + ".json";
        appendIcon(path, $(this), "app-icon");
        appPageListeners($(this).parent());
    });
}