var JSONItems = [];
$.getJSON( "js/main.json", function( data){
  JSONItems = data;
  parseCards(JSONItems.jsons["cards"]);
  spawnApps($(".apps-list-all"), JSONItems.jsons["applist"]);
  parseContent(JSONItems.jsons["apps"]);
  
  var userLang = navigator.language || navigator.userLanguage;
  var language = JSONItems.languages[userLang];
  if (language == undefined) {
      language = "en-EN";
  };
  parseStrings(language);
});
