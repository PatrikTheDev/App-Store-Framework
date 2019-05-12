function bottomPopupInit(parent) {
    var depictionPath = parent.parent().find(".app-page-app-name").attr("data-depictionJSON") || parent.find(".app-name").attr("data-depictionJSON");
    var JSONItems = [];
    $.getJSON(depictionPath, function (data) {
        JSONItems = data;
        var refAppPrice = JSONItems.price;
        var refAppRating = JSONItems.rating;
        var priceText;
        if (refAppPrice == "Free") {
            priceText = "Get";
        } else {
            priceText = refAppPrice;
        };
        appendAppName(depictionPath, $(".app-name-popupbar"));
        appendSubtitleContent(depictionPath, $(".subtitle-popupbar"))
        $(".subtitle-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
        $(".app-name-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
        $(".app-name-popupbar").attr("data-depictionJSON", depictionPath);
        appendIcon(depictionPath, $(".app-icon-popupbar"), "app-icon");
        appendBtnDownloadContent(depictionPath, $(".btn-download-popup"));
        $(".btn-download-popup").attr("data-depictionJSON", depictionPath);
        parent.scroll(function() {
            if(parent.scrollTop() > 400){
                $(".bottom-popup").css("bottom", "0");
                $(".app-page").css("padding-bottom", "6em")
            }
            else{
                $(".bottom-popup").css("bottom", "-100%");
                $(".app-page").css("padding-bottom", "0")
            }
        });
        parent.parent().scroll(function() {
            if(parent.parent().scrollTop() > 400){
                $(".bottom-popup").css("bottom", "0");
                $(".app-page").css("padding-bottom", "6em")
            }
            else{
                $(".bottom-popup").css("bottom", "-100%");
                $(".app-page").css("padding-bottom", "0")
            }
        });
    });
}