/* JSHint settings */
/* jshint esversion: 6 */

function appCell(appName) {
    var appCellElement = `<li class="app app-list" app="` + appName + `">
            <div class="app-cell-stack" app="` + appName + `">
                <div class="app-cell-icon app-trigger" app="` + appName + `">
                        <div class="app-icon-wrapper app-trigger" app="` + appName + `"></div>
                </div>
                <div class="app-cell-details" app="` + appName + `">
                        <h4 class="app-name app-trigger" app="` + appName + `"></h4>
                        <span class="subtitle grey-text app-trigger" app="` + appName + `"></span>
                </div>
                <div class="btn-download right light-grey" app="` + appName + `">Get</div>
            </div>
        </li>`;
    return appCellElement;
}
function appendContentToAppCell(cell) {
    var btnDownload = cell.find(".btn-download");
    btnDownload.each(function() {
        window.currentApp = $(this).attr("app");
        appendBtnDownloadContent($(this));
        payPopupListeners($(this).parent());
    });
    var appName = cell.find(".app-name");
    appName.each(function() {
        window.currentApp = $(this).attr("app");
        appendAppName($(this), false);
        appPageListeners($(this).parent());
    });
    var subtitle = cell.find(".subtitle");
    subtitle.each(function() {
        window.currentApp = $(this).attr("app");
        appendSubtitleContent($(this), false);
    });
    var appIcon = cell.find(".app-icon-wrapper");
    appIcon.each(function() {
        window.currentApp = $(this).attr("app");
        appendIcon($(this), "app-icon");
        appPageListeners($(this).parent());
    });
}