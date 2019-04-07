
$(".log-in-homepage").click(function() {
    $(".log-in").css("visibility", "visible");
    $(".log-in").css("bottom", "35vh");
});
$(".cancel").click(function() {
    $(".log-in").css("bottom", "-100%");
    $(".log-in").css("visibility", "hidden");
});
function logInPopupClose() {
    $(".log-in").css("bottom", "-100%");
    $(".log-in").css("visibility", "hidden");
};
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
    } else {
        $(".reporterror").html("You have to enter your email!")
    };
  };