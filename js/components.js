function spacer(spacing) {
    if (!spacing) {
        spacing = 5;
    }
    var generatedElement = '<div class="spacer" style="margin-top:' + spacing + 'px"></div>';
    return generatedElement;
}
function separator() {
    var generatedElement = '<div class="separator"></div>';
    return generatedElement;
}