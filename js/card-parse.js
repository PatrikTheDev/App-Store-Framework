function parseCards() {
  var directoryPrefix = "cards/";
  var currentCard;
  var path;
  $(".card").each(function() {
    currentCard = this.getAttribute("card");
    path = directoryPrefix + currentCard + ".json";
    appendCardCSS(path, $(this));
  });
  $(".title").each(function() {
    currentCard = this.getAttribute("card");
    path = directoryPrefix + currentCard + ".json";
    appendCardText(path, $(this), "title");
  });
  $(".bottom-text").each(function() {
    currentCard = this.getAttribute("card");
    path = directoryPrefix + currentCard + ".json";
    appendCardText(path, $(this), "bottomText");
  });
  $(".small-title").each(function() {
    currentCard = this.getAttribute("card");
    path = directoryPrefix + currentCard + ".json";
    appendCardText(path, $(this), "subtitle");
  });
  $(".card-description").each(function() {
    currentCard = this.getAttribute("card");
    path = directoryPrefix + currentCard + ".json";
    appendDescription(path, $(this));
  });
}