function parseContent(depictionFolder) {
  var depictionPath;
  var currentApp;
  $(".description").not(".noappend").each(function() {
    currentApp = this.getAttribute("app");
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
  });
  $(".app-name").not(".noappend").each(function() {
    currentApp = this.getAttribute("app") || "default";
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendAppName(depictionPath, $(this));
  });
  $(".subtitle").not(".noappend").each(function() {
    currentApp = this.getAttribute("app") || "default";
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendSubtitleContent(depictionPath, $(this));
  });
  $(".app-icon-wrapper").not(".noappend").each(function() {
    currentApp = this.getAttribute("app") || "default";
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendIcon(depictionPath, $(this), "app-icon");
  });
  $(".btn-download").not(".noappend").each(function() {
    currentApp = this.getAttribute("app") || "default";
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendBtnDownloadContent(depictionPath, $(this));
  });
  $(".bottom-bar").each(function() {
    currentApp = this.getAttribute("app") || "default";
    depictionPath = depictionFolder + currentApp + ".json";
    $(this).attr("data-depictionJSON", depictionPath);
    appendBottomBarColor(depictionPath, $(this));
  });
};
