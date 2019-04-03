var JSONItems = [];
$.getJSON( "js/content.json", function( data){
  JSONItems = data;
  
  $(".description").each(function() {
    var currentid = this.id;
    $(this).html("" + JSONItems.description[currentid]);
  });
  $(".app-name").each(function() {
    var currentid = this.id;
    $(this).html("" + JSONItems.appname[currentid]);
    $(this).attr("name", JSONItems.appname[currentid]);
    
  });
  $(".subtitle").each(function() {
    var currentid = this.id;
    $(this).html("" + JSONItems.subtitle[currentid]);
    $(this).attr("subtitle", JSONItems.subtitle[currentid]);
    
  });
  $(".app-icon-wrapper").each(function() {
    var currentid = this.id;
    $(this).html('<img class="app-icon" src="' + JSONItems.icon[currentid] + '">');
    $(this).attr("icon-src", JSONItems.icon[currentid]);
    $(this).children().attr("icon-src", JSONItems.icon[currentid]);
  });
  $(".btn-download").each(function() {
    var currentid = this.id;
    var price = JSONItems.price[currentid];
    if (price == "0") {
        price = "Get";
    };
    $(this).text("" + price);
    $(this).attr("price", JSONItems.price[currentid]);
    $(this).attr("location", JSONItems.location[currentid]);
  });
});
