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
        card.not(".full").css({
            "width": "100vw",
            "height": "50vh",
            "border-radius": 0
        });
        $(".full.fullscreen").css({
            "width": "100vw",
            "height": "100vh",
            "border-radius": 0
        });
    }, 10);
    card.addClass("fullscreen");
    card.addClass("opened");
    $(".apps-list-featured li:nth-child(4)").removeClass("no-after");
    $(".content").addClass("fullscreen");
    $(".title").addClass("fullscreen");
    $(".close").removeClass("hidden");
    $(this).siblings(".description-page").addClass("fullscreen");
    $(".description").css("visibility", "visible");
    card.addClass("active");
    $(".card").not(".active").hide().attr("wasHidden", "true");
    $(".hide-on-card-open").hide();
    $(".bottom-bar").addClass("fullscreen");
    $(".apps-list-featured li:nth-child(4)").nextAll().show();
    bottomPopupInit(card);
});
$(".close").click(function() {
    $(".content").removeClass("fullscreen");
    $(".apps-list-featured li:visible:last").addClass("no-after");
    $(".bottom-popup").css("bottom", "-100%");
    $(".hide-on-card-open").not(".was-hidden").removeClass("fullscreen").show();
    $(".title").removeClass("fullscreen");
    var card = $(this).closest(".card");
    card.removeClass("fullscreen");
    var back = card.attr("back");
    var cardPosition = card.parent().offset();
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
    $(".apps-list-featured li:nth-child(4)").nextAll().hide();    
    
    $(this).closest(".opened").removeClass("opened");
    $(".close").addClass("hidden");
    $(this).siblings(".description-page").removeClass("fullscreen");
    $(".description").css("visibility", "hidden");
    $(".card").not(".active").show().attr("wasHidden", "false");
    $(this).closest(".card").removeClass("active");
    $(".bottom-bar").removeClass("fullscreen");
    
});