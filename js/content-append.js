function appendBtnDownloadContent(path, element) {
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
    element.text("" + price);
    element.css({"background-color": JSONItems.tint, "color": JSONItems.textTint});
};
function appendSubtitleContent(path, element) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    element.html("" + JSONItems.subtitle);
    element.css("color", JSONItems.textTint2);
};
function appendAppName(path, element) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    element.text("" + JSONItems.appName);
};
function appendIcon(path, element, iconClass) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    element.html('<img class="' + iconClass + '" src="' + JSONItems.icon + '">');
    element.attr("icon-src", JSONItems.icon);
};
function appendBottomBarColor(path, element) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    element.css("background-color", JSONItems.tint2);
}
function appendDescriptionOLD(path, element) {
    var alreadyRan = element.attr("alreadyRan");
    if (alreadyRan != "true") {
        var JSONItems = [];
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
              JSONItems = data;
            }
        });
        var keyname = Object.keys(JSONItems.description);
        for (var i = 0; i < keyname.length; i++) { 
            var currentKey = keyname[i];
            
            var isHeader1 = currentKey.includes("Header1");
            var isHeader2 = currentKey.includes("Header2");
            var isItalic = currentKey.includes("Italic");
            var isBold = currentKey.includes("Bold");
            var breaksLineBefore = currentKey.includes("BrBefore");
            var breaksLineAfter = currentKey.includes("BrAfter");
            if (breaksLineBefore == true) {
                element.append("<br>");
            }

            if (isHeader1 == true) {
                element.append("<h1>" + JSONItems.description[currentKey] + " " + "</h1>");
            } else if (isHeader2 == true) {
                element.append("<h2>" + JSONItems.description[currentKey] + " " + "</h2>");
            } else if (isItalic == true) {
                element.append("<i>" + JSONItems.description[currentKey] + " " + "</i>");
            } else if (isBold == true) {
                element.append("<b>" + JSONItems.description[currentKey] + " " + "</b>");
            } else {
                element.append(JSONItems.description[currentKey] + " ");
            }
            
            if (breaksLineAfter == true) {
                element.append("<br>");
            }
        }
    }
    element.attr("alreadyRan", "true");
    


}
function appendCardText(path, element, type) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    var appendedText = JSONItems[type];
    element.html("" + appendedText);
}
