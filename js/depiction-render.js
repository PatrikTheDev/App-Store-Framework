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
        var success;
        // Loop through views and append them
        for (i = 0; i < JSONData.description.length; i++) {
            success = depictionAppendEngine(element, JSONData, i);
            if (success === false) {
                console.error("unsupported class");
            }
        }
    }
    element.attr("alreadyRan", "true");
}
function depictionAppendEngine(element, JSONData, index) {
    var currentView = JSONData.description[index],
        currentClass = currentView.class,
        borderRadius = currentView.borderRadius || 0,
        spacing = currentView.spacing,
        markdown,
        useRawFormat,
        markdownHTML;
    // Header
    if (currentClass == "DepictionHeaderView") {
        element.append("<h1>" + currentView.title + "</h1>");
        return true;
    }
    // Subheader
    if (currentClass == "DepictionSubheaderView") {
        element.append("<h2>" + currentView.title + "</h2>");
        return true;
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
        if (currentView.fontWeight) {
            $("[spawnedId=" + index + "]").css("font-weight", currentView.fontWeight);
        }
        if (currentView.fontSize) {
            $("[spawnedId=" + index + "]").css("font-size", currentView.fontSize);
        }
        if (currentView.textColor) {
            $("[spawnedId=" + index + "]").css("color", currentView.textColor);
        }
        $("[spawnedId=" + index + "]").removeAttr("spawnedId");
        return true;
    }
    // Video
    if (currentClass == "DepictionVideoView") {
        element.append(video(currentView.URL, borderRadius));
        return true;
    }
    // Image
    if (currentClass == "DepictionImageView") {
        element.append(image(currentView.URL, currentView.width, currentView.height, borderRadius));
        return true;
    }
    // Spacer
    if (currentClass == "DepictionSpacerView") {
        element.append(spacer(spacing));
        return true;
    }
    // Separator
    if (currentClass == "DepictionSeparatorView") {
        element.append(separator());
        return true;
    }
    return false;
}
function renderMarkdown(markdown) {
    var md = window.markdownit();
    var result = md.render(markdown);
    return result;
}
