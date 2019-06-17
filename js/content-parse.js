function parseContent(depictionFolder) {
    var depictionPath;
    var currentApp;
    var cache = {};
    $(".app, .bottom-bar, .append").each(function(){
        $(this).find(".description").not(".noappend").each(function() {
            currentApp = this.getAttribute("app");
            depictionPath = depictionFolder + currentApp + ".json";
            $(this).attr("data-depictionJSON", depictionPath);
        });
        $(this).find(".app-name").not(".noappend").each(function() {
            currentApp = this.getAttribute("app") || "default";
            depictionPath = depictionFolder + currentApp + ".json";
            if (typeof cache[currentApp] == "undefined") {
                $.ajax({
                url: depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                    cache[currentApp] = data;
                    console.log(depictionPath);
                }
                });
            }
            $(this).attr({"data-depictionJSON": depictionPath});
            appendAppName(depictionPath, $(this), currentApp, cache[currentApp]);
        });
        $(this).find(".subtitle").not(".noappend").each(function() {
            currentApp = this.getAttribute("app") || "default";
            depictionPath = depictionFolder + currentApp + ".json";
            if (typeof cache[currentApp] == "undefined") {
                $.ajax({
                url: depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                    cache[currentApp] = data;
                    console.log(depictionPath);
                }
                });
            }
            $(this).attr("data-depictionJSON", depictionPath);
            appendSubtitleContent(depictionPath, $(this), cache[currentApp]);
        });
        $(this).find(".app-icon-wrapper").not(".noappend").each(function() {
            currentApp = this.getAttribute("app") || "default";
            depictionPath = depictionFolder + currentApp + ".json";
            if (typeof cache[currentApp] == "undefined") {
                $.ajax({
                url: depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                    cache[currentApp] = data;
                    console.log(depictionPath);
                }
                });
            }
            $(this).attr("data-depictionJSON", depictionPath);
            appendIcon(depictionPath, $(this), "app-icon", cache[currentApp]);
        });
        $(this).find(".btn-download").not(".noappend").each(function() {
            currentApp = this.getAttribute("app") || "default";
            depictionPath = depictionFolder + currentApp + ".json";
            if (typeof cache[currentApp] == "undefined") {
                $.ajax({
                url: depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                    cache[currentApp] = data;
                    console.log(depictionPath);
                }
                });
            }
            $(this).attr("data-depictionJSON", depictionPath);
            appendBtnDownloadContent(depictionPath, $(this), currentApp, cache[currentApp]);
        });
        $(this).find(".bottom-bar").each(function() {
            currentApp = this.getAttribute("app") || "default";
            depictionPath = depictionFolder + currentApp + ".json";
            if (typeof cache[currentApp] == "undefined") {
                $.ajax({
                url: depictionPath,
                async: false,
                dataType: 'json',
                success: function (data) {
                    cache[currentApp] = data;
                    console.log(depictionPath);
                }
                });
            }
            $(this).attr("data-depictionJSON", depictionPath);
            appendBottomBarColor(depictionPath, $(this), cache[currentApp]);
        });
    });
    return cache;
}
function parseJSON(path) {
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
            JSONData = data;
            console.log(path);
        }
    });
    return JSONData;
}
