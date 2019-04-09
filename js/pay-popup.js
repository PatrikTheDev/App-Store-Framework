$(".btn-download").click(function() {
    var refAppIconSrc = $(this).attr("icon-src");
    var refAppName = $(this).attr("name");
    var refAppPrice = $(this).attr("price");
    if (refAppPrice == "0") {
        refAppPrice = "Free";
    };
    var refAppSubtitle = $(this).attr("subtitle");
    var refAppFiles = $(this).attr("location");
    var refAppTint = $(this).attr("tint");
    var refAppTextTint = $(this).attr("text-tint");
    var refAppTextTint2 = $(this).attr("text-tint-2");
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
    
    
    
});
        

$(".cancel").click(function() {payPopupClose()});

function payPopupClose() {
    $(".pay-now").css("bottom", "-100%");
    $(".pay-now").css("visibility", "hidden");
}