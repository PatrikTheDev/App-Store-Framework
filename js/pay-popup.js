$(".btn-download").click(function() {
    var currentid = this.id;
    var refAppIconSrc = $(this).siblings(".app-icon-wrapper").attr("icon-src");
    var refAppName = $(this).siblings(".app-name").attr("name");
    var refAppPrice = $(this).attr("price");
    if (refAppPrice == "0") {
        refAppPrice = "Free";
    };
    var refAppSubtitle = $(this).siblings(".subtitle").attr("subtitle");
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
    checkCookie();
    
    function checkEmail() {
    if (email == "Not logged in"){
        $(".pay-now-button").text("Log in");
        $(".pay-now-button").attr("onclick", "logInPopupOpen(); payPopupClose();");
    } else {
        $(".pay-now-button").attr("href", refAppFiles);
    };
    };
    checkEmail();
    $(".pay-now").css("visibility", "visible");
    $(".pay-now").css("bottom", "1em");
    
    $(".pay-now-button").css({"background-color": refAppTint, "color": refAppTextTint});
    
    
    
});
        

$(".cancel").click(function() {payPopupClose()});

function payPopupClose() {
    $(".pay-now").css("bottom", "-100%");
    $(".pay-now").css("visibility", "hidden");
}