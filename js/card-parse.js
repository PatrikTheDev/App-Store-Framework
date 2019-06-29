function parseCards() {
    var directoryPrefix = cardDirectory();
    var path;
    var cache = window.cardCache || {};
    if (typeof window.cardCache == "undefined") {
        window.cardCache = {};
    }
    $(".card-wrapper").each(function () {
        $(this).find(".card").each(function () {
            window.currentCard = this.getAttribute("card");
            path = directoryPrefix + window.currentCard + ".json";
            if (typeof cache[window.currentCard] == "undefined") {
                $.ajax({
                    url: path,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentCard] = window.cardCache[window.currentCard] = data;
                    }
                });
            }
            appendCardCSS(path, $(this));
        });
        $(this).find(".title").each(function () {
            window.currentCard = this.getAttribute("card");
            path = directoryPrefix + window.currentCard + ".json";
            if (typeof cache[window.currentCard] == "undefined") {
                $.ajax({
                    url: path,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentCard] = window.cardCache[window.currentCard] = data;
                    }
                });
            }
            appendCardText($(this), "title");
        });
        $(this).find(".bottom-text").each(function () {
            window.currentCard = this.getAttribute("card");
            path = directoryPrefix + window.currentCard + ".json";
            if (typeof cache[window.currentCard] == "undefined") {
                $.ajax({
                    url: path,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentCard] = window.cardCache[window.currentCard] = data;
                    }
                });
            }
            appendCardText($(this), "bottomText");
        });
        $(this).find(".small-title").each(function () {
            window.currentCard = this.getAttribute("card");
            path = directoryPrefix + window.currentCard + ".json";
            if (typeof cache[window.currentCard] == "undefined") {
                $.ajax({
                    url: path,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentCard] = window.cardCache[window.currentCard] = data;
                    }
                });
            }
            appendCardText($(this), "subtitle");
        });
        $(this).find(".card-description").each(function () {
            window.currentCard = this.getAttribute("card");
            path = directoryPrefix + window.currentCard + ".json";
            if (typeof cache[window.currentCard] == "undefined") {
                $.ajax({
                    url: path,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        cache[window.currentCard] = window.cardCache[window.currentCard] = data;
                    }
                });
            }
            appendDescription(path, $(this), window.cardCache[window.currentCard]);
        });
    });
    return cache;
}