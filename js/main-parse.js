var JSONItems = [];
$.getJSON( "js/main.json", function( data){
  JSONItems = data;
  parseCards(JSONItems.jsons["cards"]);
  parseContent(JSONItems.jsons["apps"])
  
  var userLang = navigator.language || navigator.userLanguage;
  var language = JSONItems.languages[userLang];
  if (language == undefined) {
      language = "en-EN";
  };
  parseStrings(language);
});
