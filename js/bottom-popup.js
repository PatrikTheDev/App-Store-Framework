$(".bottom-popup").css("bottom", "-100%"); // hide the fixed navbar initially
function bottomPopupInit(parent) {
    var currentid = this.id;
    var refAppIconSrc = parent.find(".app-name").attr("icon-src");
    var refAppName = parent.find(".app-name").attr("name");
    var refAppPrice = parent.find(".app-name").attr("price");
    var freeString = $("[free]").attr("freeString");
    if (refAppPrice == "0") {
        refAppPrice = freeString;
    };
    var refAppSubtitle = parent.find(".app-name").attr("subtitle");
    var refAppFiles = parent.find(".app-name").attr("location");
    var refAppTint = parent.find(".app-name").attr("tint");
    var refAppTextTint = parent.find(".app-name").attr("text-tint");
    var refAppTextTint2 = parent.find(".app-name").attr("text-tint-2");
    var refAppRating = parent.find(".app-name").attr("rating");
    var email = $(".email").text();
    $(".app-name-popupbar").text("" + refAppName);
    $(".subtitle-popupbar").text("" + refAppSubtitle);
    $(".subtitle-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
    $(".app-name-popupbar").css("color", "rgba(30, 30, 30, 0.8)");
    $(".app-icon-popupbar").html('<img class="app-icon" src="' + refAppIconSrc + '">');
    $(".app-page-price").text("" + refAppPrice);
    $(".btn-download-popup").text("" + refAppPrice);
    $(".btn-download-popup").attr("price", refAppPrice);
    $(".btn-download-popup").attr("location", refAppFiles);
    $(".btn-download-popup").css({"background-color": refAppTint, "color": refAppTextTint});
    $(".btn-download-popup").attr("tint", refAppTint);
    $(".btn-download-popup").attr("text-tint", refAppTextTint);
    $(".btn-download-popup").attr("text-tint-2", refAppTextTint2);
    $(".btn-download-popup").attr("name", refAppName);
    $(".btn-download-popup").attr("subtitle", refAppSubtitle);
    $(".btn-download-popup").attr("icon-src", refAppIconSrc);
    $(".btn-download-popup").attr("rating", refAppRating);    
    parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
    parent.parent().scroll(function() {
        if(parent.parent().scrollTop() > 500){
            console.log("yay");
            $(".bottom-popup").css("bottom", "0");
            
            }
            else{
                $(".bottom-popup").css("bottom", "-100%");
            }
    });
}