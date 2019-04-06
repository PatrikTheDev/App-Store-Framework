$(".description").css("visibility", "hidden");
        $(".card-trigger").click(function() {
            
            //$(this).parent().removeClass("container, row");
            //$(".one").removeClass("container, row");
            
            $(this).closest(".card").addClass("fullscreen");
            $(this).closest(".card").addClass("opened");
            //$(".card-one").css({"position": "absolute", "top": "0", "left": "0", "width": "100vw", "height": "50vh", "border-radius": "0", "margin": "0", "z-index": "100"});
            //thisElem.firstChild.classList.add("fullscreen");
            //$(".card-one").addClass("fullscreen");
            $(".close").removeClass("hidden");
            $(this).siblings(".description-page").addClass("fullscreen");
            $(".description").css("visibility", "visible");
            window.scrollTo(0, 0);
        });
        $(".close").click(function() {
            $(this).closest(".card").removeClass("fullscreen");
            $(this).closest(".opened").removeClass("opened");
            $(".card-one").removeClass("fullscreen");
            $(".close").addClass("hidden");
            $(this).siblings(".description-page").removeClass("fullscreen")
            
            $(".description").css("visibility", "hidden");
        });