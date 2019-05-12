function parseContent(depictionFolder) {
  $(".description").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app");
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
  });
  $(".app-name").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app") || "default";
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendAppName(depictionPath, $(this));
  });
  $(".subtitle").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app") || "default";
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendSubtitleContent(depictionPath, $(this));
  });
  $(".app-icon-wrapper").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app") || "default";
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendIcon(depictionPath, $(this), "app-icon");
  });
  $(".btn-download").not(".noappend").each(function() {
    var currentApp = this.getAttribute("app") || "default";
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendBtnDownloadContent(depictionPath, $(this));
  });
  $(".bottom-bar").each(function() {
    var currentApp = this.getAttribute("app") || "default";
    var depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendBottomBarColor(depictionPath, $(this));
  });
};
