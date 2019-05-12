var JSONItems = [];
$.getJSON( "js/main.json", function( data){
  JSONItems = data;
  parseCards(JSONItems.jsons["cards"]);
  $(".card-apps-list").each(function(){
    spawnAppsInCards($(this), JSONItems.jsons["cards"]);
  });
  parseContent("depictions/");
});