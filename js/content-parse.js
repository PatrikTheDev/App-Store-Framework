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
            appendAppName($(this), false);
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
            appendSubtitleContent($(this), cache[window.currentApp]);
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
            appendIcon($(this), "app-icon", cache[window.currentApp]);
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
            appendBtnDownloadContent($(this));
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