function parseScreenshots(parent, path) {
    var JSONItems = [];
    var alreadyRan = parent.attr("screenshotsAppended");
    if (alreadyRan !== "true") {
        $.getJSON(path, function (data, event) {
            JSONItems = data;
            var i;
            for (i = 0; i < JSONItems.screenshots.length; i++) { 
                parent.append('<img src="' + JSONItems.screenshots[i] + '" alt="" class="screenshot">');
            };
        });
    }
    parent.attr("screenshotsAppended", "true");
}