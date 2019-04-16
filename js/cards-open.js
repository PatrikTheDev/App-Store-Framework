$(".description").css("visibility", "hidden");
$(".card-trigger").click(function() {
    var card = $(this).closest(".card");
    var cardPosition = card.parent().offset();
    card.parents(".card-wrapper").css({
        "top": cardPosition.top,
        "left": cardPosition.left,
        "position": "fixed",
        "overflow": "scroll"
    });
    setTimeout(function() {
        card.parents(".card-wrapper").css({
            "top": 0,
            "left": 0,
            "width": "100vw",
            "height": "100vh",
            "border-radius": 0
        });
        card.css({
            "width": "100vw",
            "height": "50vh",
            "border-radius": 0
        });
    }, 10);
    card.addClass("fullscreen");
    card.addClass("opened");
    $(".content").addClass("fullscreen");
    $(".title").addClass("fullscreen");
    $(".close").removeClass("hidden");
    $(this).siblings(".description-page").addClass("fullscreen");
    $(".description").css("visibility", "visible");
    card.addClass("active");
    $(".card").not(".active").hide();
    $(".today").hide();
    $(".bottom-bar").addClass("fullscreen");
    bottomPopupInit($(this).parent());
});
$(".close").click(function() {
    $(".content").removeClass("fullscreen");
    $(".bottom-popup").hide();
    $(".title").removeClass("fullscreen");
    var card = $(this).closest(".card");
    card.removeClass("fullscreen");
    var back = card.attr("back");
    var cardPosition = card.parent().offset();
    $(".today").show();
    card.parents(".card-wrapper").css({
        "top": 0,
        "left": 0,
        "position": "relative"
    });
    setTimeout(function() {
        card.parents(".card-wrapper").css({
            "top": 0,
            "left": 0,
            "border-radius": "1em",
            "width": "500px",
            "height": "500px",
        })
    }, 10);
    setTimeout(function() {
        card.removeAttr("style");
        card.parents(".card-wrapper").removeAttr("style");
        card.attr("style", "background: url(" + back + ") center; background-size: cover;");
    }, 10);
    
    
    $(this).closest(".opened").removeClass("opened");
    $(".close").addClass("hidden");
    $(this).siblings(".description-page").removeClass("fullscreen");
    $(".description").css("visibility", "hidden");
    $(".card").not(".active").show();
    $(this).closest(".card").removeClass("active");
    $(".bottom-bar").removeClass("fullscreen");
    
});