function parseCards(path) {
var JSONItems = [];
  $.ajax({
    url: path,
    async: false,
    dataType: 'json',
    success: function (data) {
      JSONItems = data;
    }
  });
  $(".card").each(function() {
    var currentCard = this.getAttribute("card");
    $(this).css({"background": "url(" + JSONItems.background[currentCard] + ") center", "background-size": "cover"});
    $(this).attr("back", JSONItems.background[currentCard]);
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
};