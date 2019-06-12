function appendBtnDownloadContent(path, element, JSONData) {
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
    element.text("" + price);
    element.css({"background-color": JSONData.tint, "color": JSONData.textTint});
}
function appendSubtitleContent(path, element, JSONData) {
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
    element.html("" + JSONData.subtitle);
    element.css("color", JSONData.textTint2);
}
function appendAppName(path, element, JSONData) {
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
    element.text("" + JSONData.appName);
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
    wrapper.html('<img class="' + iconClass + '" src="' + JSONData.icon + '">');
    wrapper.attr("icon-src", JSONData.icon);
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