var JSONItems = [];
function parseContent(path) {
  $.ajax({
    url: path,
    async: false,
    dataType: 'json',
    success: function (data) {
      JSONItems = data;
    }
  });
  
  $(".description").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendDescription(JSONItems.depictions[currentApp], $(this));
  });
  $(".app-name").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendAppName(JSONItems.depictions[currentApp], $(this));
  });
  $(".subtitle").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendSubtitleContent(JSONItems.depictions[currentApp], $(this));
  });
  $(".app-icon-wrapper").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendIcon(JSONItems.depictions[currentApp], $(this), "app-icon");
  });
  $(".btn-download").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendBtnDownloadContent(JSONItems.depictions[currentApp], $(this));
  });
  $(".bottom-bar").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).attr("data-depictionJSON", JSONItems.depictions[currentApp]);
    appendBottomBarColor(JSONItems.depictions[currentApp], $(this));
  });
};
