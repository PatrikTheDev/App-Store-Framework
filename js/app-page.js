$(".app-name").click(function() {
    var currentid = this.id;
    var refAppIconSrc = $(this).attr("icon-src");
    var refAppName = $(this).attr("name");
    var refAppPrice = $(this).attr("price");
    var freeString = $("[free]").attr("freeString");
    if (refAppPrice == "0") {
        refAppPrice = freeString;
    };
    var refAppSubtitle = $(this).attr("subtitle");
    var refAppFiles = $(this).attr("location");
    var refAppTint = $(this).attr("tint");
    var refAppTextTint = $(this).attr("text-tint");
    var refAppTextTint2 = $(this).attr("text-tint-2");
    var refAppRating = $(this).attr("rating");
    var email = $(".email").text();
    $(".app-page-app-name").text("" + refAppName);
    $(".app-page-app-subtitle").text("" + refAppSubtitle);
    $(".app-page-app-subtitle").css("color", refAppTextTint2);
    $(".app-page-app-icon-wrapper").html('<img class="app-page-app-icon" src="' + refAppIconSrc + '">');
    $(".app-page-price").text("" + refAppPrice);
    $(".app-page").css({"visibility": "visible", "right": "0"});
    setTimeout(function() {
        $(".card").hide();
    }, 500);
    $(".app-page-btn-download").text("" + refAppPrice);
    $(".app-page-btn-download").attr("price", refAppPrice);
    $(".app-page-btn-download").attr("location", refAppFiles);
    $(".app-page-btn-download").css({"background-color": refAppTint, "color": refAppTextTint});
    $(".app-page-btn-download").attr("tint", refAppTint);
    $(".app-page-btn-download").attr("text-tint", refAppTextTint);
    $(".app-page-btn-download").attr("text-tint-2", refAppTextTint2);
    $(".app-page-btn-download").attr("name", refAppName);
    $(".app-page-btn-download").attr("subtitle", refAppSubtitle);
    $(".app-page-btn-download").attr("icon-src", refAppIconSrc);
    parseRating(refAppRating, $("[first-star]"), $("[second-star]"), $("[third-star]"), $("[fourth-star]"), $("[fifth-star]"));
});
$(".back-btn").click(function() {
    $(".card").show();
    $(".app-page").css("right", "-100%");
    // $("[fifth-star]").prevAll().addClass("far").removeClass("fas");
    resetRating($("[fifth-star]"));
});
function parseRating(refAppRating, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
    if (refAppRating == "1") {
        firstStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "2") {
        secondStar.prevAll().addClass("fas").removeClass("far");
        secondStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "3") {
        thirdStar.prevAll().addClass("fas").removeClass("far");
        thirdStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "4") {
        fourthStar.prevAll().addClass("fas").removeClass("far");
        fourthStar.addClass("fas").removeClass("far");
    }
    if (refAppRating == "5") {
        fifthStar.prevAll().addClass("fas").removeClass("far");
        fifthStar.addClass("fas").removeClass("far");
    }
};
function resetRating(lastStar) {
    lastStar.prevAll().addClass("far").removeClass("fas");
    lastStar.addClass("far").removeClass("fas");
}