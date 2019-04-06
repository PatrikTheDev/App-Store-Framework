var JSONItems = [];
$.getJSON( "js/cards.json", function( data){
  JSONItems = data;
  
  $(".card").each(function() {
    var currentCard = this.getAttribute("card");
    $(this).css({"background": "url(" + JSONItems.background[currentCard] + ") center", "background-size": "cover"});
    
  });
  $(".title").each(function() {
    var currentCard = this.getAttribute("card");
    $(this).html("" + JSONItems.title[currentCard]);
    $(this).attr("card", JSONItems.title[currentCard]);
  });
  $(".small-title").each(function() {
    var currentCard = this.getAttribute("card");
    $(this).html("" + JSONItems.subtitle[currentCard]);
    $(this).attr("card", JSONItems.subtitle[currentCard]);
  });
});
