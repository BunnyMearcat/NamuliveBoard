// ==UserScript==
// @name         namulive boardView
// @namespace    https://github.com/BunnyMearcat
// @version      0.1
// @description  나무라이브 게시판의 뷰를 고정합니다.
// @author       bunnymearcat
// @include      https://namu.live/b/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let viewpath="/html/body/div/div[2]/article/div/div[2]/div[2]/a[2]"
    var btntext=document.evaluate(viewpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText
    btntext=btntext.trim()

    console.log(btntext)
    if (btntext == "쓰레드뷰"){
        //게시판뷰
        console.log("[남라] 현재 뷰는 게시판뷰입니다.")
    }
    else{
        //쓰레드뷰
        console.log("[남라] 현재 뷰는 쓰레드뷰입니다.")
        var params = new URLSearchParams(window.location.search)
        params.set("mode","board")
        window.history.replaceState({}, '', `${location.pathname}?${params}`)
        location.reload();
    }
})()
