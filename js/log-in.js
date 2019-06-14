function logInPopupOpen() {
    $(".log-in").css({opacity: 1});
    if (window.innerWidth < 700) {
        $(".log-in").css("bottom", "0em");
      } else {
        $(".log-in").css("bottom", "1em");
      }
}
$(".log-in-homepage").click(function() {
    logInPopupOpen();
});
function logInPopupClose() {
    $(".log-in").css({bottom: "-100%"});
    $(".log-in").css({opacity: 0});
}
$(".cancel").click(function() {
    logInPopupClose();
    $(".reporterror").html("");
});

function logIn() {
    var x = document.getElementById("frm1");
    var email = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      email += x.elements[i].value;
    }
    if (email != "") {
    setCookie("email", email, 30);
    checkCookie();
    logInPopupClose();
    $(".pay-now-button").text("Download now");
    
    } else {
        $(".reporterror").html("You have to enter your email!");
    }
}