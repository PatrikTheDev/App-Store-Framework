/* JSHint settings */
/* jshint esversion: 6 */

function spacer(spacing = 15, additionalClass = '') {
    var generatedElement = `<div class="spacer ${additionalClass}" style="margin-top:'${spacing}px"></div>`;
    return generatedElement;
}
function separator(options) {
    var color = options.color ? `background-color: ${options.color};` : '',
        generatedElement = `<div class="separator" style="${color}"></div>`;
    return generatedElement;
}
function image(options, appenedClass = '') {
    var path = options.URL,
        borderRadius = options.cornerRadius !== 0 ? `border-radius:${options.cornerRadius}px;` : '',
        width = options.width ? `width="'${options.width}px"` : '',
        height = options.height ? `height="'${options.height}px"` : '',
        generatedElement = `<img src="${path}" ${width} ${height} style="max-width: 100%; ${borderRadius}" class="${appenedClass}">`;
    return generatedElement;
}
function video(options) {
    var path = options.URL,
        borderRadius = options.cornerRadius !== 0 ? `border-radius: ${options.cornerRadius}px;` : 'border-radius: 0;',
        width = options.width ? `width: ${options.width};` : 'width: 100%;';
        generatedElement = `<video controls style="${width} ${borderRadius} max-width: 100%;"><source src="${path}" type="video/mp4"></video>`;
    return generatedElement;
}
function label(options) {
    var text = options.text,
        fontWeight = options.fontWeight ? `font-weight: ${options.fontWeight};` : '',
        fontSize = options.fontSize ? `font-size: ${options.fontSize}px;` : '',
        color = options.textColor ? `color: ${options.textColor};` : '',
        generatedElement = `<span style="${fontWeight} ${fontSize} ${color}">${text}</span>`;
    return generatedElement;
}