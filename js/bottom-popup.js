function bottomPopupInit(parent, JSONData, currentApp) {
    var depictionPath = parent.find(".app-name").attr("data-depictionJSON");
    if (typeof JSONData == "undefined") {
        $.ajax({
            url: depictionPath,
            async: false,
            dataType: 'json',
            success: function (data) {
            JSONData = data;
            console.log("Parsed a JSON");
            }
        });
    }
    var refAppPrice = JSONData.price;
    if (refAppPrice == "Free") {
        priceText = "Get";
    } else {
        priceText = refAppPrice;
    }
    appendAppName(depictionPath, $(".app-name-popupbar"), false);
    appendSubtitleContent(depictionPath, $(".subtitle-popupbar"));
    $(".subtitle-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
    $(".app-name-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
    $(".app-name-popupbar").attr("data-depictionJSON", depictionPath);
    appendIcon(depictionPath, $(".app-icon-popupbar"), "app-icon", JSONData);
    appendBtnDownloadContent(depictionPath, $(".btn-download-popup"));
    $(".btn-download-popup").attr("data-depictionJSON", depictionPath);
    parent.scroll(function() {
        if(parent.scrollTop() > 400){
            $(".bottom-popup").css({bottom: 0});
            $(".app-page").css({paddingBottom: "6em"});
        }
        else{
            $(".bottom-popup").css({bottom: "-100%"});
            $(".app-page").css({paddingBottom: 0});
        }
    });
    parent.parent().scroll(function() {
        if(parent.parent().scrollTop() > 400){
            $(".bottom-popup").css({bottom: 0});
            $(".app-page").css({paddingBottom: "6em"});
        }
        else{
            $(".bottom-popup").css({bottom: "-100%"});
            $(".app-page").css({paddingBottom: 0});
        }
    });
}