function appendBtnDownloadContent(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data){
    JSONItems = data;
    
    var price = JSONItems.price;
    if (price == "Free") {
        price = "Get";
    };
    parent.text("" + price);
    parent.css({"background-color": JSONItems.tint, "color": JSONItems.textTint});
});
};
function appendSubtitleContent(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data){
    JSONItems = data;
    parent.html("" + JSONItems.subtitle);
    parent.css("color", JSONItems.textTint2);
});
};
function appendAppName(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data){
    JSONItems = data;
    parent.text("" + JSONItems.appName);
});
};
function appendIcon(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data){
    JSONItems = data;
    parent.html('<img class="app-icon" src="' + JSONItems.icon + '">');
    parent.attr("icon-src", JSONItems.icon);

});
};
function appendBottomBarColor(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data) {
        JSONItems = data;
        parent.css("background-color", JSONItems.tint2);
});
}
function appendDescription(path, parent) {
    var JSONItems = [];
    $.getJSON(path, function(data) {
        JSONItems = data;
        parent.html("" + JSONItems.description);
});
}