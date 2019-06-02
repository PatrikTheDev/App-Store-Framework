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
// Old description appending method (ineffective). DO NOT USE! This will be removed soon
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
