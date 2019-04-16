$(".btn-download").click(function() {
    payPopupInit($(this));
});
function payPopupInit(thisElem) {
  var refAppIconSrc = thisElem.attr("icon-src");
    var refAppName = thisElem.attr("name");
    var refAppPrice = thisElem.attr("price");
    if (refAppPrice == "0") {
        refAppPrice = "Free";
    };
    var refAppSubtitle = thisElem.attr("subtitle");
    var refAppFiles = thisElem.attr("location");
    var refAppTint = thisElem.attr("tint");
    var refAppTextTint = thisElem.attr("text-tint");
    var refAppTextTint2 = thisElem.attr("text-tint-2");
    var refAppRating = thisElem.attr("rating");
    var email = $(".email").text();
    $(".pay-popup-name").text("" + refAppName);
    $(".pay-popup-subtitle").text("" + refAppSubtitle);
    $(".pay-popup-subtitle").css("color", refAppTextTint2);
    $(".pay-popup-app-icon").html('<img class="app-icon" src="' + refAppIconSrc + '">');
    $(".pay-popup-price").text("" + refAppPrice);
    function checkPayCookie() {
        var user = getCookie("email");
        if (user != "") {
          $(".log-in-homepage").hide();
          $(".email").text(user);
          $(".pay-now-button").attr("onclick", "");
          $(".pay-now-button").attr("href", refAppFiles);
          
        } else {
          $(".email").text("Not logged in");
          $(".pay-now-button").text("Log in");
        $(".pay-now-button").attr("onclick", "logInPopupOpen(); payPopupClose();");
           
        }
      };
    checkPayCookie();
    
    
    
    $(".pay-now").css("visibility", "visible");
    $(".pay-now").css("bottom", "1em");
    
    $(".pay-now-button").css({"background-color": refAppTint, "color": refAppTextTint});
    $(".pay-popup-name").attr("name", refAppName);
    $(".pay-popup-name").attr("price", refAppPrice);
    $(".pay-popup-name").attr("location", refAppFiles);
    $(".pay-popup-name").attr("tint", refAppTint);
    $(".pay-popup-name").attr("text-tint", refAppTextTint);
    $(".pay-popup-name").attr("text-tint-2", refAppTextTint2);
    $(".pay-popup-name").attr("icon-src", refAppIconSrc);
    $(".pay-popup-name").attr("subtitle", refAppSubtitle);
    parseRating(refAppRating, $(".pay-first-star"), $(".pay-second-star"), $(".pay-third-star"), $(".pay-fourth-star"), $(".pay-fifth-star"));
    $(".bottom-popup").hide();
}

$(".cancel").click(function() {payPopupClose()});
$(".pay-now-button").click(function(){
    payPopupClose();
});
function payPopupClose() {
    $(".pay-now").css("bottom", "-100%");
    $(".pay-now").css("visibility", "hidden");
    resetRating($(".pay-fifth-star"));
}