/* JSHint settings */
/* jshint esversion: 6 */

/* This should be replaced with your code if it is different */

function payPopupListeners(parent) {
    $(".cancel").click(function() {
        payPopupClose();
    });
    $(".pay-now-button").click(function(){
        payPopupClose();
    });
    parent.find(".btn-download").not(".noappend").click(function() {
        payPopupInit($(this).parent().attr("app"));
    });
}
function appPageListeners(parent) {
    parent.find(".app-trigger").click(function() {
        appPageInit($(this).attr("app"));
    });
    
    parent.find(".back-btn").click(function() {
        appPage.animateCloseCaller = "appPage";
        history.back();
        setTimeout(() => {
            appPage.animateCloseCaller = "";
        }, appPage.closeDuration);
    });    
}