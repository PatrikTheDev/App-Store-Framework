/* JSHint settings */
/* jshint esversion: 6 */

function headerImg(url, currentApp = window.currentApp) {
    var element = `<img class="app-page-header-img" app="${currentApp}" src="${url}"></img>`;
    return element;
}
function icon(url, iconClass = 'app-icon', alt = '') {
    var element = `<img class="${iconClass}" src="${url}" alt="${alt}" app="${window.currentApp}">`;
    return element;
}