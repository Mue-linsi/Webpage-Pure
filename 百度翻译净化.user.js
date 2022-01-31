// ==UserScript==
// @name         百度翻译净化
// @namespace    https://github.com/Mue-linsi/Webpage-Pure/
// @version      0.0.5
// @description  萌新随便写的,消除了顶栏、底部信息、和翻译下方的广告,还有一些弹窗，没消除
// @author       聆巳
// @match        *://fanyi.baidu.com/
// @icon         https://cdn.simplesite.com/i/76/4f/284289731911110518/i284289739543962082._szw3000h2000_.jpg
// @grant        none
// @license      MIT
// ==/UserScript==

(function(){
    'use strict'
    var a1 = document.getElementsByClassName("header")[0];
    a1.parentNode.removeChild(a1);
    var a2 = document.getElementsByClassName("footer cleafix")[0];
    a2.parentNode.removeChild(a2);
    var a3 = document.getElementsByClassName("app-guide")[0];
    a3.parentNode.removeChild(a3);
    var a4 = document.getElementsByClassName("divide-wrap")[0];
    a4.parentNode.removeChild(a4);

    var b1 = document.getElementById("transOtherRight");
    b1.parentNode.removeChild(b1);

    var div1 = document.querySelector("#main-outer");
    console.log(div1);
    div1.style="padding-top: 50px;"
    var div2 = document.querySelector(".manual-trans-btn");
    console.log(div2);
    div2.style="color: #666;border: 1px solid #666;"
    var div3 = document.querySelector("#translate-button");
    console.log(div3);
    div3.style="background-color: #666;"
    var div4 = document.querySelector(".active");
    console.log(div4);
    div4.style="color: #000;"
    var div5 = document.querySelector(".history-tip-setting")
    console.log(div5)
    div5.style="color: #666;"
})();
