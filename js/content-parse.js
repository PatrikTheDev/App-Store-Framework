var JSONItems = [];
function parseContent(path) {
$.getJSON( path, function( data){
  JSONItems = data;
  
  $(".description").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html("" + JSONItems.description[currentApp]);
  });
  $(".app-name").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html("" + JSONItems.appname[currentApp]);
    $(this).attr("name", JSONItems.appname[currentApp]);
    $(this).attr("price", JSONItems.price[currentApp]);
    $(this).attr("location", JSONItems.location[currentApp]);
    $(this).attr("tint", JSONItems.tint[currentApp]);
    $(this).attr("text-tint", JSONItems.textTint[currentApp]);
    $(this).attr("text-tint-2", JSONItems.textTint2[currentApp]);
    $(this).attr("icon-src", JSONItems.icon[currentApp]);
    $(this).attr("subtitle", JSONItems.subtitle[currentApp]);
  });
  $(".subtitle").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html("" + JSONItems.subtitle[currentApp]);
    $(this).attr("subtitle", JSONItems.subtitle[currentApp]);
    $(this).css("color", JSONItems.textTint2[currentApp]);
    $(this).attr("text-tint-2", JSONItems.textTint2[currentApp]);
  });
  $(".app-icon-wrapper").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).html('<img class="app-icon" src="' + JSONItems.icon[currentApp] + '">');
    $(this).attr("icon-src", JSONItems.icon[currentApp]);
    $(this).children().attr("icon-src", JSONItems.icon[currentApp]);
  });
  $(".btn-download").each(function(freeAppText) {
    var currentApp = this.getAttribute("app");
    var price = JSONItems.price[currentApp];
    if (price == "0") {
        price = "Get";
        $(this).attr("free", "true");
    };
    $(this).text("" + price);
    $(this).attr("price", JSONItems.price[currentApp]);
    $(this).attr("location", JSONItems.location[currentApp]);
    $(this).css({"background-color": JSONItems.tint[currentApp], "color": JSONItems.textTint[currentApp]});
    $(this).attr("tint", JSONItems.tint[currentApp]);
    $(this).attr("text-tint", JSONItems.textTint[currentApp]);
    $(this).attr("text-tint-2", JSONItems.textTint2[currentApp]);
    $(this).attr("icon-src", JSONItems.icon[currentApp]);
    $(this).attr("name", JSONItems.appname[currentApp]);
    $(this).attr("subtitle", JSONItems.subtitle[currentApp]);
  });
  $(".bottom-bar").each(function() {
    var currentApp = this.getAttribute("app");
    $(this).css("background-color", JSONItems.tint2[currentApp]);
  });
});
};
