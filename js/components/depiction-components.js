/* JSHint settings */
/* jshint esversion: 6 */

function spacer(spacing = 5, additionalClass = '') {
    var generatedElement = `<div class="spacer ${additionalClass}" style="margin-top:'${spacing}px"></div>`;
    return generatedElement;
}
function separator() {
    var generatedElement = '<div class="separator"></div>';
    return generatedElement;
}
function image(path, width, height, borderRadius = 0, appenedClass = '') {
    var generatedElement = `<img src="${path}" width="'${width}px" height="${height}px" style="max-width: 100%; border-radius:${borderRadius}px" class="${appenedClass}">`;
    return generatedElement;
}
function video(path, borderRadius = 0) {
    var generatedElement = `<video controls style="width: 100%; border-radius:${borderRadius}px; max-width: 100%;"><source src="${path}" type="video/mp4"></video>`;
    return generatedElement;
}
function label(text) {
    var generatedElement = `<span>${text}</span>`;
    return generatedElement;
}