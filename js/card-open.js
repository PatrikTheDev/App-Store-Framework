/* JSHint settings */
/* jshint esversion: 6 */

class UICard {
    constructor(element, trigger, cache, closeBtn) {
        this.trigger = element || $(".card");
        this.card = trigger || this.trigger.closest(".card");
        this.currentCard = this.card.attr("card");
        this.closeBtn = closeBtn || this.card.find(".close");
        this.cache = cache || {};
        this.appCache = {};
    }
    getCardPosition() {
        this.cardPosition = this.card.parent().offset();
    }
    open() {
        // Get the position of the parent, so you can change the position to fixed without any glitches
        if (!this.cardPosition) {
            this.getCardPosition();
        }
        var cardPosition = this.cardPosition;
        var card = this.card;
        var minHeightBefore = this.card.css("min-height");
        this.card.attr("min-height", minHeightBefore);
        if (typeof minHeightBefore == "string") {
            
        
        this.card.parents(".card-wrapper").css({
            top: cardPosition.top,
            left: cardPosition.left,
            position: "fixed",
            overflow: "scroll"
        });
        setTimeout(function() {
            card.parents(".card-wrapper").css({
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                borderRadius: 0
            });
            card.css({
                width: "100vw",
                borderRadius:  "0",
                minHeight:  ''
            });
            card.not(".full").css({
                height: "50vh"
            });
            $(".card.full.fullscreen").css({
                height: "100vh"
            });
        }, 1);
        }
        this.card.parent().addClass("fullscreen", "opened");
        this.card.addClass("fullscreen", "opened");
    }
    init() {
        //this.getCardPosition();
        this.open();
        this.showLatterApps();
        this.card.find(".content").addClass("fullscreen");
        this.card.find(".title").addClass("fullscreen");
        this.closeBtn.removeClass("hidden");
        this.trigger.siblings(".description-page").addClass("fullscreen");
        $(".description").css("visibility", "visible");
        this.card.addClass("active");
        this.disableScroll();
        $(".hide-on-card-open").hide();
        $(".bottom-bar").addClass("fullscreen");
        this.initBottomPopup();
    }
    disableScroll() {
        $("body").addClass("noscroll");
    }
    enableScroll() {
        $("body").removeClass("noscroll");
    }
    initBottomPopup() {
        if (this.cache[this.currentCard].containsApps.length < 2 && this.cache[this.currentCard].containsApps.length > 0) {
            bottomPopupInit(this.card, this.appCache[this.cache[this.currentCard].containsApps[0]], this.currentCard);
        }
    }
    showLatterApps() {
        this.card.find(".apps-list-featured li:nth-child(4)").removeClass("no-after");
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().show();
    }
    hideLatterApps() {
        this.card.find(".apps-list-featured li:nth-child(4)").nextAll().hide();
        this.card.find(".apps-list-featured li:visible:last").addClass("no-after"); 
    }
    close() {
        $(".content").removeClass("fullscreen");
        $(".bottom-popup").css("bottom", "-100%");
        $(".hide-on-card-open").not(".was-hidden").removeClass("fullscreen").show();
        $(".title").removeClass("fullscreen");
        var card = this.trigger.closest(".card");
        var minHeightBefore = this.card.attr("min-height");
        this.card.removeClass("fullscreen");
        this.card.closest(".card-wrapper").removeClass("fullscreen");
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
        this.hideLatterApps();
        this.trigger.closest(".opened").removeClass("opened");
        this.closeBtn.addClass("hidden");
        this.trigger.siblings(".description-page").removeClass("fullscreen");
        $(".description").css("visibility", "hidden");
        this.enableScroll();
        this.card.removeClass("active");
        $(".bottom-bar").removeClass("fullscreen");
    }
}

var card = new UICard();

/* This should be replaced with your code if it is different */
$(".card-trigger").click(function() {
    card.trigger = $(this);
    card.card = card.trigger.closest(".card");
    card.currentCard = card.card.attr("card");
    card.cache = cardCache;
    card.appCache = appCache;
    card.init();
});
$(".close").click(function() {
    card.close();
});