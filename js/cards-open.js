class UICard {
    constructor(element) {
        this.trigger = element;
        this.card = this.trigger.closest(".card");
    }
    open() {
        var cardPosition = this.card.parent().offset();
        var card = this.card;
        var minHeightBefore = this.card.css("min-height");
        this.card.attr("min-height", minHeightBefore);

        this.card.parents(".card-wrapper").css({
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
                "border-radius": "0"
            });
            card.not(".full").css({
                "width": "100vw",
                "height": "50vh",
                "border-radius": "0",
                "min-height": ''
            });
            $(".full.fullscreen").css({
                "width": "100vw",
                "height": "100vh",
                "border-radius": "0",
                "min-height": ''
            });
        }, 10);
        this.card.addClass("fullscreen");
        this.card.addClass("opened");
    }
    init() {
        this.open();
        $(".apps-list-featured li:nth-child(4)").removeClass("no-after");
        $(".content").addClass("fullscreen");
        $(".title").addClass("fullscreen");
        $(".close").removeClass("hidden");
        this.trigger.siblings(".description-page").addClass("fullscreen");
        $(".description").css("visibility", "visible");
        this.card.addClass("active");
        $(".card").not(".active").hide().attr("wasHidden", "true");
        $(".hide-on-card-open").hide();
        $(".bottom-bar").addClass("fullscreen");
        $(".apps-list-featured li:nth-child(4)").nextAll().show();
        bottomPopupInit(this.card);
    }
    close() {
        $(".content").removeClass("fullscreen");
        $(".apps-list-featured li:visible:last").addClass("no-after");
        $(".bottom-popup").css("bottom", "-100%");
        $(".hide-on-card-open").not(".was-hidden").removeClass("fullscreen").show();
        $(".title").removeClass("fullscreen");
        var card = this.trigger.closest(".card");
        var minHeightBefore = this.card.attr("min-height");
        this.card.removeClass("fullscreen");
        this.card.parents(".card-wrapper").css({
            top: 0,
            left: 0,
            position: '',
            minHeight: minHeightBefore
        });
        setTimeout(function() {
            card.parents(".card-wrapper").css({
                "top": 0,
                "left": 0,
                "width": '',
                "height": '',
                "overflow": ''
            });
        }, 10);
        setTimeout(function() {
            card.css({
                "top": '',
                "left": '',
                "border-radius": '',
                "width": '',
                "height": ''
            });
            card.parents(".card-wrapper").css({
                "top": '',
                "left": '',
                "width": '',
                "height": ''
            });
        }, 100);
        $(".apps-list-featured li:nth-child(4)").nextAll().hide();    
        this.trigger.closest(".opened").removeClass("opened");
        $(".close").addClass("hidden");
        this.trigger.siblings(".description-page").removeClass("fullscreen");
        $(".description").css("visibility", "hidden");
        $(".card").not(".active").show().attr("wasHidden", "false");
        this.trigger.closest(".card").removeClass("active");
        $(".bottom-bar").removeClass("fullscreen");
    }
}
$(".card-trigger").click(function() {
    let card = new UICard($(this));
    card.init();
    /* var card = $(this).closest(".card");
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
    bottomPopupInit(card); */
});
$(".close").click(function() {
    let card = new UICard($(this));
    card.close();
    /* $(".content").removeClass("fullscreen");
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
    $(".bottom-bar").removeClass("fullscreen"); */
    
});