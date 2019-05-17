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
        this.card.find(".apps-list-featured li:nth-child(4)").removeClass("no-after");
        $(".content").addClass("fullscreen");
        $(".title").addClass("fullscreen");
        $(".close").removeClass("hidden");
        this.trigger.siblings(".description-page").addClass("fullscreen");
        $(".description").css("visibility", "visible");
        this.card.addClass("active");
        $(".card").not(".active").hide().attr("wasHidden", "true");
        $(".hide-on-card-open").hide();
        $(".bottom-bar").addClass("fullscreen");
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().show();
        bottomPopupInit(this.card);
    }
    close() {
        $(".content").removeClass("fullscreen");
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
            minHeight: minHeightBefore,
            overflow: '',
            width: '',
            height: ''
        });
        card.css({
            top: '',
            left: '',
            borderRadius: '',
            width: '',
            height: ''
        });
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().hide();
        this.card.find(".apps-list-featured li:visible:last").addClass("no-after");   
        this.trigger.closest(".opened").removeClass("opened");
        $(".close").addClass("hidden");
        this.trigger.siblings(".description-page").removeClass("fullscreen");
        $(".description").css("visibility", "hidden");
        $(".card").not(".active").show().attr("wasHidden", "false");
        this.card.removeClass("active");
        $(".bottom-bar").removeClass("fullscreen");
    }
}
$(".card-trigger").click(function() {
    var card = new UICard($(this));
    card.init();
    card = null; // Free up some ram
});
$(".close").click(function() {
    var card = new UICard($(this));
    card.close();
    card = null; // Free up some ram
});