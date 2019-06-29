function appendCardCSS(path, element) {
    var JSONData = window.cardCache[window.currentCard];
    if (typeof JSONData == "undefined") {
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
    element.css({
        "min-height": JSONData.minHeight,
        "background": JSONData.background + " center",
        "background-size": "cover"
    });
}
function appendCardText(element, type) {
    var JSONData = window.cardCache[window.currentCard];
    var path = cardDirectory() + window.currentCard + ".json";
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
                JSONData = window.cardCache[window.currentCard] = data;
                console.log("Parsed a JSON");
            }
        });
    }
    var appendedText = JSONData[type];
    element.html("" + appendedText);
}
