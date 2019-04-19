var JSONItems = [];
function parseContent(path) {
$.getJSON( path, function( data){
  JSONItems = data;
  
  $(".description").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html("" + JSONItems.description[currentApp]);
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
  });
  $(".app-name").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html("" + JSONItems.appname[currentApp]);
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
  });
  $(".subtitle").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendSubtitleContent(JSONItems.depictions[currentApp], $(this));
  });
  $(".app-icon-wrapper").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html('<img class="app-icon" src="' + JSONItems.icon[currentApp] + '">');
    $(this).attr("icon-src", JSONItems.icon[currentApp]);
    $(this).children().attr("icon-src", JSONItems.icon[currentApp]);

    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
  });
  $(".btn-download").not(".noappend").each(function(freeAppText) {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendBtnDownloadContent(JSONItems.depictions[currentApp], $(this));
  });
  $(".bottom-bar").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).css("background-color", JSONItems.tint2[currentApp]);

    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
  });
});
};
