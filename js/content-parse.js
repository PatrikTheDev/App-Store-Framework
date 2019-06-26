function parseContent(depictionFolder) {
    if (typeof window.appCache == "undefined") {
        window.appCache = {};
    }
    var depictionPath;
    var cache = window.appCache || {};
    $(".app, .bottom-bar, .append").each(function(){
        $(this).find(".description").not(".noappend").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
        });
        $(this).find(".app-name").not(".noappend").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
            if (typeof cache[window.currentApp] == "undefined") {
                $.ajax({
                    url: depictionPath,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentApp] = data;
                        window.appCache[window.currentApp] = data;
                        console.log(depictionPath);
                    }
                });
            }
            appendAppName(depictionPath, $(this));
        });
        $(this).find(".subtitle").not(".noappend").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
            if (typeof cache[window.currentApp] == "undefined") {
                $.ajax({
                    url: depictionPath,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentApp] = data;
                        window.appCache[window.currentApp] = data;
                        console.log(depictionPath);
                    }
                });
            }
            appendSubtitleContent(depictionPath, $(this), cache[window.currentApp]);
        });
        $(this).find(".app-icon-wrapper").not(".noappend").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
            if (typeof cache[window.currentApp] == "undefined") {
                $.ajax({
                    url: depictionPath,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentApp] = data;
                        window.appCache[window.currentApp] = data;
                        console.log(depictionPath);
                    }
                });
            }
            appendIcon(depictionPath, $(this), "app-icon", cache[window.currentApp]);
        });
        $(this).find(".btn-download").not(".noappend").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
            if (typeof cache[window.currentApp] == "undefined") {
                $.ajax({
                    url: depictionPath,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentApp] = data;
                        window.appCache[window.currentApp] = data;
                        console.log(depictionPath);
                    }
                });
            }
            appendBtnDownloadContent(depictionPath, $(this));
        });
        $(this).find(".bottom-bar").each(function() {
            window.currentApp = this.getAttribute("app") || defaultApp();
            depictionPath = depictionFolder + window.currentApp + ".json";
            if (typeof cache[window.currentApp] == "undefined") {
                $.ajax({
                    url: depictionPath,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentApp] = data;
                        window.appCache[window.currentApp] = data;
                        console.log(depictionPath);
                    }
                });
            }
            appendBottomBarColor(depictionPath, $(this), cache[window.currentApp]);
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
