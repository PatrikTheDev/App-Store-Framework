function parseContent(depictionFolder) {
    if (typeof window.appCache == "undefined") {
        window.appCache = {};
    }
    var depictionPath,
        cache = window.appCache || {};
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
                        cache[window.currentApp] = window.appCache[window.currentApp] = data;
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
                        cache[window.currentApp] = window.appCache[window.currentApp] = data;
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
                        cache[window.currentApp] = window.appCache[window.currentApp] = data;
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
                        cache[window.currentApp] = window.appCache[window.currentApp] = data;
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
                        cache[window.currentApp] = window.appCache[window.currentApp] = data;
                    }
                });
            }
            appendBottomBarColor(depictionPath, $(this), cache[window.currentApp]);
        });
    });
    return cache;
}