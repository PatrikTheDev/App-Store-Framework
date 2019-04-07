$(".description").css("visibility", "hidden");
        $(".card-trigger").click(function() {
            
            $(this).closest(".card").addClass("fullscreen");
            $(this).closest(".card").addClass("opened");
            $(".close").removeClass("hidden");
            $(this).siblings(".description-page").addClass("fullscreen");
            $(".description").css("visibility", "visible");
            //window.scrollTo(0, 0);
            $(this).closest(".card").addClass("active");
            $(".card").not(".active").hide();
        });
        $(".close").click(function() {
            $(this).closest(".card").removeClass("fullscreen");
            $(this).closest(".opened").removeClass("opened");
            $(".card-one").removeClass("fullscreen");
            $(".close").addClass("hidden");
            $(this).siblings(".description-page").removeClass("fullscreen");
            $(".description").css("visibility", "hidden");
            $(".card").not(".active").show();
            $(this).closest(".card").removeClass("active");
            
        });