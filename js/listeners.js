/* This should be replaced with your code if it is different */

function payPopupListeners(parent) {
    $(".cancel").click(function() {
        payPopupClose();
    });
    $(".pay-now-button").click(function(){
        payPopupClose();
    });
    parent.find(".btn-download").click(function() {
        payPopupInit($(this));
    });
}
function appPageListeners(parent) {
    parent.find(".app-name").click(function() {
        appPageInit($(this), appCache);
    });
    
    parent.find(".back-btn").click(function() {
        appPage.close();
    });    
}