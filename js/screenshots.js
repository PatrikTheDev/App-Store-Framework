function parseScreenshots(parent, path, JSONDat) {
    var JSONData = window.appCache[window.currentApp];
    var alreadyRan = parent.attr("screenshotsAppended");
    if (alreadyRan !== "true") {
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
        var i;
        for (i = 0; i < JSONData.screenshots.length; i++) { 
            parent.append('<img src="' + JSONData.screenshots[i] + '" alt="" class="screenshot">');
        }
    }
    parent.attr("screenshotsAppended", "true");
}
