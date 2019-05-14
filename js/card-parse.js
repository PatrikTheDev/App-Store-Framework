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
      appendCardCSS(JSONItems.jsons[currentCard], $(this));
    });
    $(".title").each(function() {
      var currentCard = this.getAttribute("card");
      appendCardText(JSONItems.jsons[currentCard], $(this), "title");
    });
    $(".bottom-text").each(function() {
      var currentCard = this.getAttribute("card");
      appendCardText(JSONItems.jsons[currentCard], $(this), "bottomText");
    })
    $(".small-title").each(function() {
      var currentCard = this.getAttribute("card");
      appendCardText(JSONItems.jsons[currentCard], $(this), "subtitle");
    });
    $(".card-description").each(function() {
      var currentCard = this.getAttribute("card");
      appendDescription(JSONItems.jsons[currentCard], $(this));
    });
};