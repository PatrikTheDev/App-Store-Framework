function appendDescription(path, element, JSONData) {
    var alreadyRan = element.attr("alreadyRan");
    if (alreadyRan != "true") {
        // Get JSON data
        if (JSONData == undefined) {
            $.ajax({
                url: path,
                async: false,
                dataType: 'json',
                success: function (data) {
                    JSONData = data;
                    console.log("Parsed a JSON");
                }
            });
        }

        var i;
        var currentClass;
        var currentView;
        var markdown;
        var markdownHTML;
        var useRawFormat;
        var borderRadius;
        var spacing;
        // Loop through views
        for (i = 0; i < JSONData.description.length; i++) {
            currentView = JSONData.description[i];
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
                element.append("<span>" + currentView.text + "</span>").attr("spawnedId", i);
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
                element.append(video(borderRadius, currentView.URL));
            } else if (currentClass == "DepictionImageView") {
                element.append(image(currentView.URL, currentView.width, currentView.height, borderRadius));
            } else if (currentClass == "DepictionSpacerView") {
                element.append(spacer(spacing));
            } else if (currentClass == "DepictionSeparatorView") {
                element.append(separator());
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
