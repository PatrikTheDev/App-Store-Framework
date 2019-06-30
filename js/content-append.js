function appendBtnDownloadContent(element) {
    var path = appDirectory() + window.currentApp + ".json",
        JSONData = window.appCache[window.currentApp], tint = tintState();
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
    var price = JSONData.price;
    if (price == "Free") {
        price = "Get";
    }
    element
        .text("" + price)
        .attr("app", window.currentApp);
    if (tint == true) {
        element
            .css({"background-color": JSONData.tint, "color": JSONData.textTint});
    }
}
function appendSubtitleContent(element, override, appSubtitle) {
    var path = appDirectory() + window.currentApp + ".json",
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
    var path = appDirectory() + window.currentApp + ".json",
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
    } else if (override == true && typeof appName == "string") {
        JSONData.appName = appName;
    }
    element
        .text("" + JSONData.appName)
        .attr("app", window.currentApp);
}
function appendIcon(wrapper, iconClass) {
    var JSONData = window.appCache[window.currentApp],
        path = appDirectory() + window.currentApp + ".json";
    if (typeof iconClass == "undefined") {
        iconClass = "app-icon";
    }
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
    wrapper
        .html('<img class="' + iconClass + '" src="' + JSONData.icon + '" alt="' + JSONData.appName +'" app="' + window.currentApp + '">');
}
function appendBottomBarColor(path, element) {
    var JSONData = window.appCache[window.currentApp];
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
    var tintEnabled = tintState();
    if (tintEnabled == true || override == true) {
        elementsToTint.css({color: tint});
    } else {
        elementsToTint.css({color: globalTint()});
    }
}
function appendContentToAppCell(cell) {
    var btnDownload = cell.find(".btn-download");
    btnDownload.each(function() {
        window.currentApp = $(this).attr("app");
        appendBtnDownloadContent($(this));
        payPopupListeners($(this).parent());
    });
    var appName = cell.find(".app-name");
    appName.each(function() {
        window.currentApp = $(this).attr("app");
        appendAppName($(this), false);
        appPageListeners($(this).parent());
    });
    var subtitle = cell.find(".subtitle");
    subtitle.each(function() {
        window.currentApp = $(this).attr("app");
        appendSubtitleContent($(this), false);
    });
    var appIcon = cell.find(".app-icon-wrapper");
    appIcon.each(function() {
        window.currentApp = $(this).attr("app");
        appendIcon($(this), "app-icon");
        appPageListeners($(this).parent());
    });
}