// ==UserScript==
// @name         Youtube Undo Corner Soften
// @namespace    dev.rafplayz
// @version      1.0
// @description  Undoes the stupid border-radius Google added to the main Youtube player
// @author       rafplayz
// @website      https://rafplayz.dev/userscripts
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
(function() {
    'use strict';
    console.log("running")
    GM_addStyle("ytd-watch-flexy[rounded-player-large][default-layout] #ytd-player.ytd-watch-flexy {border-radius: 0 !important;}")
})();