/* 
    This file includes most defaults (paths, elements, etc.)
*/
function appDirectory() {
    return "depictions/";
}
function cardDirectory() {
    return "cards/";
}
function defaultApp() {
    return "default";
}
function cardAppList() {
    return $(".card-apps-list");
}
function tintState() {
    return false;
}

// Colors
function globalTint() {
    return "var(--main-tint)";
}
function btnDownloadBackground(type) {
    if (type == "card") {
        return "var(--btn-download-card-background)";
    } else if (type == "appPage") {
        return "var(--main-tint)";
    } else {
        return "var(--btn-download-background)";
    }
}
function btnDownloadText(type) {
    if (type == "appPage") {
        return "rgb(255, 255, 255)";
    } else {
        return "rgb(29, 122, 247)";
    }
}
function subtitleColor() {
    return "var(--subtitle-color)";
}