function appendBtnDownloadContent(path, element, currentApp, JSONData) {
    if (!JSONData) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
            JSONData = data;
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
function appendSubtitleContent(path, element, JSONData, override, appSubtitle) {
    if (!JSONData && override == false && !appSubtitle) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
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
function appendAppName(path, element, currentApp, JSONData, override, appName) {
    if (!JSONData && override == false && !appName) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                console.log("Parsed a JSON");
            }
        });
    } else if (override == true && typeof appName == "string") {
        JSONData.appName = appName;
    }
    element
        .text("" + JSONData.appName)
        .attr("app", currentApp);
}
function appendIcon(path, wrapper, iconClass, JSONData) {
    if (!JSONData) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
            JSONData = data;
            console.log("Parsed a JSON");
            }
        });
    }
    wrapper
        .html('<img class="' + iconClass + '" src="' + JSONData.icon + '">')
        .attr("icon-src", JSONData.icon);
}
function appendBottomBarColor(path, element, JSONData) {
    if (!JSONData) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = data;
                console.log("Parsed a JSON");
            }
        });
    }
    element.css("background-color", JSONData.tint2);
}
function tintElements(elementsToTint, tint) {
    elementsToTint.css({color: tint});
}
function appendContentToAppCell(cell, currentCache) {
    var directory = appDirectory();
    var btnDownload = cell.find(".btn-download");
    btnDownload.each(function() {
        var currentApp = $(this).attr("app");
        var path = directory + currentApp + ".json";
        appendBtnDownloadContent(path, $(this), $(this).attr("app"), currentCache[currentApp]);
        payPopupListeners($(this).parent());
    });
    var appName = cell.find(".app-name");
    appName.each(function() {
        var currentApp = $(this).attr("app");
        var path = directory + currentApp + ".json";
        appendAppName(path, $(this), currentApp, currentCache[currentApp], false);
        appPageListeners($(this).parent());
    });
    var subtitle = cell.find(".subtitle");
    subtitle.each(function() {
        var currentApp = $(this).attr("app");
        var path = directory + currentApp + ".json";
        appendSubtitleContent(path, $(this), currentCache[currentApp], false);
    });
    var appIcon = cell.find(".app-icon-wrapper");
    appIcon.each(function() {
        var currentApp = $(this).attr("app");
        var path = directory + currentApp + ".json";
        appendIcon(path, $(this), "app-icon", currentCache[currentApp]);
    });
}