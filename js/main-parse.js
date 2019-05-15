var JSONItems = [];
$.getJSON( "js/main.json", function( data){
  JSONItems = data;
  parseCards();
  $(".card-apps-list").each(function(){
    spawnAppsInCards($(this), JSONItems.cards);
  });
  parseContent("depictions/");
});