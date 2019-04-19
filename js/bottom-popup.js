$(".bottom-popup").css("bottom", "-100%"); 
function bottomPopupInit(parent) {
    var depictionPath = parent.find(".app-name").attr("data-depictionJSON");
    var JSONItems = [];
    $.getJSON(depictionPath, function (data) {
        JSONItems = data;
        var refAppIconSrc = JSONItems.icon;
        var refAppName = JSONItems.appName;
        var refAppPrice = JSONItems.price;
        var refAppSubtitle = JSONItems.subtitle;
        var refAppTint = JSONItems.tint;
        var refAppTextTint = JSONItems.textTint;
        var refAppRating = JSONItems.rating;
        var priceText;
        if (refAppPrice == "Free") {
            priceText = "Get";
        } else {
            priceText = refAppPrice;
        };
        $(".app-name-popupbar").text("" + refAppName);
        $(".subtitle-popupbar").text("" + refAppSubtitle);
        $(".subtitle-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
        $(".app-name-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
        $(".app-icon-popupbar").html('<img class="app-icon" src="' + refAppIconSrc + '">');
        $(".app-page-price").text("" + priceText);

        $(".btn-download-popup").text("" + refAppPrice);
        $(".btn-download-popup").attr("data-depictionJSON", depictionPath);
        
        $(".btn-download-popup").css({"background-color": refAppTint, "color": refAppTextTint});
        
        parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
        parent.parent().scroll(function() {
            if(parent.parent().scrollTop() > 500){
                $(".bottom-popup").css("bottom", "0");
                
                }
                else{
                    $(".bottom-popup").css("bottom", "-100%");
                }
        });
    });
}