$( document ).ready(function() {
    
    $(".card").each(function() {
        var background = $(this).attr("back");
        $(this).css({"background": "url(" + background + ") center", "background-size": "cover"});
    });
    
    
});