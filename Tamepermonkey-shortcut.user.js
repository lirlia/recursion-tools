// ==UserScript==
// @name         recursion-utility-tools
// @namespace    https://recursionist.io/
// @version      0.2
// @description  this tool support recursion IDE
// @author       https://twitter.com/riddle_tec
// @match        https://recursionist.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/lirlia/recursion-tools/main/Tamepermonkey-shortcut.user.js
// ==/UserScript==

(function () {
    'use strict';

    // サンプルテストケース
    //document.addEventListener('keydown', runSampleTestCaseEvent,false);
    // テスト
    document.addEventListener('keydown', runTestEvent, false);
    // 提出
    document.addEventListener('keydown', runSubmitEvent, false);
})();

// Command(Win) + Shift + 数字キーでテストを実行
//function runSampleTestCaseEvent(e){
//    if (e.metaKey && e.shiftKey && typeof(parseInt(e.key)) === "number"){
//        document.getElementsByClassName("judge-test-button")[e.key + 1].click();
//    }
//}

// getUserOS はブラウザの UserAgent をチェックして利用者の OS を取得します
// 現在次の OS のみ対応しています windows(winとかえす) / mac os (mac と返す)
// 非対応の場合は undefined を返します
function getUserOS() {

    // OSの判別
    const userInfo = window.navigator.userAgent.toLowerCase();

    if (userInfo.indexOf("windows") !== -1) {
        return "win"
    } else if (userInfo.indexOf("mac os") !== -1) {
        return "mac"
    }

    return undefined
}

// テストを実行
function runTestEvent(e) {
    // テスト時のキー設定
    const keyConf = {
        win: [e.metaKey, e.shiftKey, "Z"], // windows ... Win + Shift + Z
        mac: [e.metaKey, e.shiftKey, "s"], // mac ... Command + Shift + s
    }

    const userOS = getUserOS();
    if ((keyConf[userOS][0] && keyConf[userOS][1]) && e.key === keyConf[userOS][2]) {
        document.getElementById("test-button").click();
    }
}

// 提出を実行
function runSubmitEvent(e) {
    // 提出時のキー設定
    const keyConf = {
        win: [e.metaKey, e.shiftKey, "X"], // windows ... Win + Shift + X
        mac: [e.metaKey, e.shiftKey, "x"], // mac ... Command + Shift + x
    }

    const userOS = getUserOS();
    if ((keyConf[userOS][0] && keyConf[userOS][1]) && e.key === keyConf[userOS][2]) {
        document.getElementById("judge-button").click();
    }
}