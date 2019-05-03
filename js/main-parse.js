var JSONItems = [];
$.getJSON( "js/main.json", function( data){
  JSONItems = data;
  parseCards(JSONItems.jsons["cards"]);
  spawnApps($(".apps-list-all"), JSONItems.jsons["applist"]);
  parseContent(JSONItems.jsons["apps"]);
});