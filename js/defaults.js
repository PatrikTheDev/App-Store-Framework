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
    return true;
}

// Colors
function globalTint() {
    return "rgb(46, 126, 246)";
}
function btnDownloadBackground(type) {
    if (type == "card") {
        return "rgb(241, 242, 246)";
    } else if (type == "appPage") {
        return globalTint();
    } else {
        return "rgb(221, 222, 224)";
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
    return "rgb(150, 151, 155)";
}