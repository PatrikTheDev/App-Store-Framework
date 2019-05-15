function appendDescription(path, element) {
    var alreadyRan = element.attr("alreadyRan");
    if (alreadyRan != "true") {
        var JSONItems = [];
        // Get data
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
              JSONItems = data;
            }
        });

        var i;
        var currentClass;
        var currentView;
        var markdown;
        var markdownHTML;
        var useRawFormat;
        var borderRadius;
        var spacing;
        // Loop through views
        for (i = 0; i < JSONItems.description.length; i++) {
            currentView = JSONItems.description[i];
            currentClass = currentView.class;
            borderRadius = currentView.borderRadius || 0;
            spacing = currentView.spacing;
            if (currentClass == "DepictionHeaderView") {
                element.append("<h1>" + currentView.title + "</h1>");
            } else if (currentClass == "DepictionSubheaderView") {
                element.append("<h2>" + currentView.title + "</h2>");
            } else if (currentClass == "DepictionMarkdownView") {
                // Setup markdown
                markdown = currentView.markdown;
                useRawFormat = currentView.useRawFormat || false;
                if (useRawFormat == false) {
                    markdownHTML = renderMarkdown(markdown);
                } else {
                    markdownHTML = currentView.markdown;
                }
                // Append it
                element.append(markdownHTML);
            } else if (currentClass == "DepictionLabelView") {
                element.append("<span spawnedId=" + i + ">" + currentView.text + "</span>");
                if (currentView.fontWeight != undefined && currentView.fontWeight != null) {
                    $("[spawnedId=" + i + "]").css("font-weight", currentView.fontWeight);
                }
                if (currentView.fontSize != undefined && currentView.fontSize != null) {
                    $("[spawnedId=" + i + "]").css("font-size", currentView.fontSize);
                }
                if (currentView.textColor != undefined && currentView.textColor != null) {
                    $("[spawnedId=" + i + "]").css("color", currentView.textColor);
                }

                $("[spawnedId=" + i + "]").removeAttr("spawnedId");
            } else if (currentClass == "DepictionVideoView") {
                element.append('<video width="' + currentView.width + 'px" height="' + currentView.height + 'px" controls style="max-width: 100%; border-radius:' + borderRadius + 'px"><source src="' + currentView.URL + '" type="video/mp4"></video>')
            } else if (currentClass == "DepictionImageView") {
                element.append('<img src="' + currentView.URL + '" width="' + currentView.width + 'px" height="' + currentView.height + 'px" style="max-width: 100%; border-radius:' + borderRadius + 'px">')
            } else if (currentClass == "DepictionSpacerView") {
                element.append('<div class="spacer" style="margin-top:' + spacing + 'px"></div>');
            } else if (currentClass == "DepictionSeparatorView") {
                element.append('<div class="separator"></div>');
            }
        }
    }
    element.attr("alreadyRan", "true");
}
function renderMarkdown(markdown) {
    var md = window.markdownit();
    var result = md.render(markdown);
    return result;
}