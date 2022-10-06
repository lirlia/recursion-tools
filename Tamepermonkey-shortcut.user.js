// ==UserScript==
// @name         recursion-utility-tools
// @namespace    https://recursionist.io/
// @version      0.1
// @description  this tool support recursion IDE
// @author       https://twitter.com/riddle_tec
// @match        https://recursionist.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/lirlia/recursion-tools/main/Tamepermonkey-shortcut.user.js
// ==/UserScript==

(function() {
    'use strict';

    // サンプルテストケース
    //document.addEventListener('keydown', runSampleTestCaseEvent,false);
    // テスト
    document.addEventListener('keydown', runTestEvent,false);
    // 提出
    document.addEventListener('keydown', runSubmitEvent,false);
})();


// Command(Win) + Shift + 数字キーでテストを実行
//function runSampleTestCaseEvent(e){
//    if (e.metaKey && e.shiftKey && typeof(parseInt(e.key)) === "number"){
//        document.getElementsByClassName("judge-test-button")[e.key + 1].click();
//    }
//}


// Command(Win) + Shift + zキーでテストを実行
function runTestEvent(e){
    if (e.metaKey && e.shiftKey && e.key === "z"){
        document.getElementById("test-button").click();
    }
}

// Command(Win)  + Shift + zキーで提出を実行
function runSubmitEvent(e){
    if (e.metaKey && e.shiftKey && e.key === "x"){
        document.getElementById("judge-button").click();
    }
}
