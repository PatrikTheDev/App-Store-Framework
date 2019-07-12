/* JSHint settings */
/* jshint esversion: 6 */

function appCell(currentApp, bigCell = false) {
    var appCellElement;
    if (bigCell === false) {
        appCellElement = `
            <li class="app app-list" app="${currentApp}">
                <div class="app-cell-stack" app="${currentApp}">
                    <div class="app-cell-icon app-trigger" app="${currentApp}">
                            <div class="app-icon-wrapper app-trigger" app="${currentApp}"></div>
                    </div>
                    <div class="app-cell-details" app="${currentApp}">
                            <h4 class="app-name app-trigger" app="${currentApp}"></h4>
                            <span class="subtitle app-trigger" app="${currentApp}"></span>
                    </div>
                    <div class="btn-download right" app="${currentApp}">Get</div>
                </div>
            </li>`;
    } else {
        appCellElement = `
        <li class="big-app" app="${currentApp}">
            <div class="app-icon-wrapper app-trigger" app="${currentApp}"></div>
            <h4 class="app-name app-trigger" app="${currentApp}"></h4>
            <p class="subtitle app-trigger" app="${currentApp}"></p>
            <div class="btn-download btn-download-append" app="${currentApp}"></div>
        </li>`;
    }
    return appCellElement;
}
function appendContentToAppCell(cell, bigCell = false) {
    var btnDownload;
    var appName;
    var subtitle;
    var appIcon;
    var appIconClass = bigCell ? "app-icon" : "big-app-icon app-icon";
    btnDownload = cell.find(".btn-download");
        btnDownload.each(function() {
            window.currentApp = $(this).attr("app");
            appendBtnDownloadContent($(this));
            payPopupListeners($(this).parent());
        });
        appName = cell.find(".app-name");
        appName.each(function() {
            window.currentApp = $(this).attr("app");
            appendAppName($(this), false);
            appPageListeners($(this).parent());
        });
        subtitle = cell.find(".subtitle");
        subtitle.each(function() {
            window.currentApp = $(this).attr("app");
            appendSubtitleContent($(this), false);
        });
        appIcon = cell.find(".app-icon-wrapper");
        appIcon.each(function() {
            window.currentApp = $(this).attr("app");
            appendIcon($(this), appIconClass);
            appPageListeners($(this).parent());
        });
}