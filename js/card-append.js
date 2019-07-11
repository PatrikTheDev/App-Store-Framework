/* JSHint settings */
/* jshint esversion: 6 */

function appendCardCSS(element) {
    var JSONData = window.cardCache[window.currentCard],
        path = `${cardDirectory()}${window.currentCard}.json`;
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
        minHeight: JSONData.minHeight,
        background: `${JSONData.background} center`,
        backgroundSize: "cover"
    });
}
function appendCardText(element, type, color) {
    var JSONData = window.cardCache[window.currentCard],
        path = `${cardDirectory()}${window.currentCard}.json`;
    if (!JSONData) {
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
    if (color) {
        element.css({color: color});
    }
}
