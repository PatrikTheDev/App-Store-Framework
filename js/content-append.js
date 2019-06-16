function appendBtnDownloadContent(path, element, currentApp, JSONData) {
    if (JSONData == undefined) {
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
    if (JSONData == undefined && override == true && appSubtitle == undefined) {
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
    if (JSONData == undefined && override == true && appName == undefined) {
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
    if (JSONData == undefined) {
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
    if (JSONData == undefined) {
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