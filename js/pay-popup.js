$(".btn-download").click(function() {
    payPopupInit($(this));
});
function payPopupInit(parent) {
  var depictionPath = parent.attr("data-depictionJSON");
  var JSONItems = [];
  $.getJSON(depictionPath, function (data) {
      JSONItems = data;
      var refAppIconSrc = JSONItems.icon;
      var refAppName = JSONItems.appName;
      var refAppPrice = JSONItems.price;
      var refAppSubtitle = JSONItems.subtitle;
      var refAppFiles = JSONItems.location;
      var refAppTint = JSONItems.tint;
      var refAppTextTint = JSONItems.textTint;
      var refAppTextTint2 = JSONItems.textTint2;
      
      $(".pay-popup-name").text("" + refAppName);
      $(".pay-popup-name").attr("data-depictionJSON", depictionPath);
      $(".pay-popup-subtitle").text("" + refAppSubtitle);
      $(".pay-popup-subtitle").css("color", refAppTextTint2);
      $(".pay-popup-app-icon").html('<img class="app-icon" src="' + refAppIconSrc + '">');
      $(".pay-popup-price").text("" + refAppPrice);
      checkPayCookie(refAppFiles);
      $(".pay-now").css("opacity", "1");
      if (window.innerWidth < 700) {
        $(".pay-now").css("bottom", "0em");
      } else {
        $(".pay-now").css("bottom", "1em");
      }
      $(".pay-now-button").css({"background-color": refAppTint, "color": refAppTextTint});
      $(".bottom-popup").css("bottom", "-100%");
  });
}
function checkPayCookie(refAppFiles) {
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
$(".cancel").click(function() {
  payPopupClose();
});
$(".pay-now-button").click(function(){
    payPopupClose();
});
function payPopupClose() {
    $(".pay-now").css("bottom", "-100%");
    $(".pay-now").css("opacity", "0");
    resetRating($(".pay-fifth-star"));
}