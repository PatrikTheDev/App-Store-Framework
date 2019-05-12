function appendCardCSS(path, element) {
    var JSONItems = [];
    $.ajax({
        url: path,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONItems = data;
        }
    });
    element.css({
        "min-height": JSONItems.minHeight,
        "background": "url(" + JSONItems.background + ") center",
        "background-size": "cover"
    })
    $(this).css({});
}
