function appendBtnDownloadContent(path, parent) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    var price = JSONItems.price;
    if (price == "Free") {
        price = "Get";
    };
    parent.text("" + price);
    parent.css({"background-color": JSONItems.tint, "color": JSONItems.textTint});
};
function appendSubtitleContent(path, parent) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    parent.html("" + JSONItems.subtitle);
    parent.css("color", JSONItems.textTint2);
};
function appendAppName(path, parent) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    parent.text("" + JSONItems.appName);
};
function appendIcon(path, parent, iconClass) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    parent.html('<img class="' + iconClass + '" src="' + JSONItems.icon + '">');
    parent.attr("icon-src", JSONItems.icon);
};
function appendBottomBarColor(path, parent) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    parent.css("background-color", JSONItems.tint2);
}
function appendDescription(path, parent) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    parent.html("" + JSONItems.description);
}