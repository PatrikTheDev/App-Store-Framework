/* JSHint settings */
/* jshint esversion: 6 */
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
            if (!success) {
                console.error("Unsupported class");
            }
        }
    }
    element.attr("alreadyRan", "true");
}
function depictionAppendEngine(element, JSONData, index) {
    var currentView = JSONData.description[index],
        currentClass = currentView.class,
        markdown,
        useRawFormat,
        markdownHTML;

    switch (currentClass) {
        // Header
        case "DepictionHeaderView":
            element.append(`<h1>${currentView.title}</h1>`);
            return true;
        // Subheader
        case "DepictionSubheaderView":
            element.append(`<h2>${currentView.title}</h2>`);
            return true;
        // Label
        case "DepictionLabelView":
            element.append(label(currentView));
            return true;
        // Markdown
        case "DepictionMarkdownView":
            // Setup markdown
            markdown = currentView.markdown;
            useRawFormat = currentView.useRawFormat || false;
            markdownHTML = useRawFormat ? currentView.markdown : renderMarkdown(markdown);
            // Append it
            element.append(markdownHTML);
            return true;
        // Video
        case "DepictionVideoView": 
            element.append(video(currentView));
            return true;
        // Image
        case "DepictionImageView":
            element.append(image(currentView));
            return true;
        // Spacer
        case "DepictionSpacerView":
            element.append(spacer(currentView.spacing));
            return true;
        // Separator
        case "DepictionSeparatorView":
            element.append(separator(currentView));
            return true;
        default:
            return false;
    }
}
function renderMarkdown(markdown) {
    var md = window.markdownit(),
        result = md.render(markdown);
    return result;
}
