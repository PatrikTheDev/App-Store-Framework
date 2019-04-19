function appendDescription() {
    $(".app-name").each(function() {
        var description = $(this).parent().siblings().find(".description").attr("description");
    });
};
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