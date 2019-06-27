function appendDescription(path, element, JSONData) {
    var alreadyRan = element.attr("alreadyRan");
    if (alreadyRan != "true") {
        // Get JSON data
        if (typeof JSONData == "undefined") {
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
        // Loop through views and append them
        for (i = 0; i < JSONData.description.length; i++) {
            depictionAppendEngine(element, JSONData, i);
        }
    }
    element.attr("alreadyRan", "true");
}
function depictionAppendEngine(element, JSONData, index) {
    var currentView = JSONData.description[index];
    var currentClass = currentView.class;
    var borderRadius = currentView.borderRadius || 0;
    var spacing = currentView.spacing;
    var markdown;
    var useRawFormat;
    var markdownHTML;
    // Header
    if (currentClass == "DepictionHeaderView") {
        element.append("<h1>" + currentView.title + "</h1>");
        return;
    }
    // Subheader
    if (currentClass == "DepictionSubheaderView") {
        element.append("<h2>" + currentView.title + "</h2>");
        return;
    }
    // Markdown
    if (currentClass == "DepictionMarkdownView") {
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
        return;
    }
    // Label
    if (currentClass == "DepictionLabelView") {
        element.append(label(currentView.text)).attr("spawnedId", index);
        if (typeof currentView.fontWeight != "undefined") {
            $("[spawnedId=" + index + "]").css("font-weight", currentView.fontWeight);
        }
        if (typeof currentView.fontSize != "undefined") {
            $("[spawnedId=" + index + "]").css("font-size", currentView.fontSize);
        }
        if (typeof currentView.textColor != "undefined") {
            $("[spawnedId=" + index + "]").css("color", currentView.textColor);
        }
        $("[spawnedId=" + index + "]").removeAttr("spawnedId");
        return;
    }
    // Video
    if (currentClass == "DepictionVideoView") {
        element.append(video(borderRadius, currentView.URL));
        return;
    }
    // Image
    if (currentClass == "DepictionImageView") {
        element.append(image(currentView.URL, currentView.width, currentView.height, borderRadius));
        return;
    }
    // Spacer
    if (currentClass == "DepictionSpacerView") {
        element.append(spacer(spacing));
        return;
    }
    // Separator
    if (currentClass == "DepictionSeparatorView") {
        element.append(separator());
        return;
    }
}
function renderMarkdown(markdown) {
    var md = window.markdownit();
    var result = md.render(markdown);
    return result;
}
