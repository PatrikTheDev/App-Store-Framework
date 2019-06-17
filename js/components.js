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
function image(path, width, height, borderRadius) {
    var generatedElement = '<img src="' + path + '" width="' + width + 'px" height="' + height + 'px" style="max-width: 100%; border-radius:' + borderRadius + 'px">';
    return generatedElement;
}
function video(borderRadius, path) {
    var generatedElement = '<video controls style="width: 100%; border-radius:' + borderRadius + 'px"><source src="' + path + '" type="video/mp4"></video>';
    return generatedElement;
}