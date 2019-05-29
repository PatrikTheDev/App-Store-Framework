/* JSHint settings */
/* jshint esversion: 6 */

class UICard {
    constructor(element, trigger, closeBtn) {
        this.trigger = element || $(".card");
        this.card = trigger || this.trigger.closest(".card");
        this.closeBtn = closeBtn || $(".close");
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
            $(".card.full.fullscreen").css({
                "width": "100vw",
                "height": "100vh",
                "border-radius": "0",
                "min-height": ''
            });
        }, 1);
        this.card.addClass("fullscreen", "opened");
    }
    init() {
        this.open();
        this.showLatterApps();
        $(".content").addClass("fullscreen");
        $(".title").addClass("fullscreen");
        this.closeBtn.removeClass("hidden");
        this.trigger.siblings(".description-page").addClass("fullscreen");
        $(".description").css("visibility", "visible");
        this.card.addClass("active");
        $(".card").not(".active").hide().attr("wasHidden", "true");
        $(".hide-on-card-open").hide();
        $(".bottom-bar").addClass("fullscreen");
        
        bottomPopupInit(this.card);
    }
    showLatterApps() {
        this.card.find(".apps-list-featured li:nth-child(4)").removeClass("no-after");
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().show();
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
            overflow: '',
            width: '',
            height: ''
        });
        this.card.css({
            top: '',
            left: '',
            minHeight: minHeightBefore,
            borderRadius: '',
            width: '',
            height: ''
        });
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().hide();
        this.card.find(".apps-list-featured li:visible:last").addClass("no-after");   
        this.trigger.closest(".opened").removeClass("opened");
        this.closeBtn.addClass("hidden");
        this.trigger.siblings(".description-page").removeClass("fullscreen");
        $(".description").css("visibility", "hidden");
        $(".card").not(".active").show().attr("wasHidden", "false");
        this.card.removeClass("active");
        $(".bottom-bar").removeClass("fullscreen");
    }
}

var card = new UICard();

/* This should be replaced with your code if it is different */
$(".card-trigger").click(function() {
    card.trigger = $(this);
    card.card = card.trigger.closest(".card");
    card.init();
});
$(".close").click(function() {
    // var card = new UICard($(this));
    card.close();
});