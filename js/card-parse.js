function parseCards() {
  var directoryPrefix = "cards/";
  var currentCard;
  var path;
  var lastPath;
  $(".card-wrapper").each(function() {
    $(this).find(".card").each(function() {
      currentCard = this.getAttribute("card");
      path = directoryPrefix + currentCard + ".json";
      if (path !== lastPath) {
        $.ajax({
          url: path,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(path);
          }
        });
      }
      lastPath = directoryPrefix + currentCard + ".json";
      appendCardCSS(path, $(this), JSONData);
    });
    $(this).find(".title").each(function() {
      currentCard = this.getAttribute("card");
      path = directoryPrefix + currentCard + ".json";
      if (path !== lastPath) {
        $.ajax({
          url: path,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(path);
          }
        });
      }
      lastPath = directoryPrefix + currentCard + ".json";
      appendCardText(path, $(this), "title", JSONData);
    });
    $(this).find(".bottom-text").each(function() {
      currentCard = this.getAttribute("card");
      path = directoryPrefix + currentCard + ".json";
      if (path !== lastPath) {
        $.ajax({
          url: path,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(path);
          }
        });
      }
      lastPath = directoryPrefix + currentCard + ".json";
      appendCardText(path, $(this), "bottomText", JSONData);
    });
    $(this).find(".small-title").each(function() {
      currentCard = this.getAttribute("card");
      path = directoryPrefix + currentCard + ".json";
      if (path !== lastPath) {
        $.ajax({
          url: path,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(path);
          }
        });
      }
      lastPath = directoryPrefix + currentCard + ".json";
      appendCardText(path, $(this), "subtitle", JSONData);
    });
    $(this).find(".card-description").each(function() {
      currentCard = this.getAttribute("card");
      path = directoryPrefix + currentCard + ".json";
      if (path !== lastPath) {
        $.ajax({
          url: path,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(path);
          }
        });
      }
      lastPath = directoryPrefix + currentCard + ".json";
      appendDescription(path, $(this), JSONData);
    });
  });
}