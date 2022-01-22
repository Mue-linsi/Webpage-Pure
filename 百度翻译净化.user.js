// ==UserScript==
// @name         百度翻译净化
// @namespace    https://github.com/Mue-linsi/Webpage-Pure/
// @version      0.0.2
// @description  萌新随便写的,消除了顶栏、底部信息、和翻译下方的广告,还有一些弹窗，没消除
// @author       聆巳
// @match        https://fanyi.baidu.com/
// @icon         https://cdn.simplesite.com/i/76/4f/284289731911110518/i284289739543962082._szw3000h2000_.jpg
// @grant        none
// @license      MIT
// ==/UserScript==

(function(){
    'use strict'
    var a = document.getElementsByClassName("header")[0];
    a.parentNode.removeChild(a);
    var b = document.getElementsByClassName("footer cleafix")[0];
    b.parentNode.removeChild(b);
    var c = document.getElementById("transOtherRight");
    c.parentNode.removeChild(c);
    var div=document.querySelector("#main-outer");
    console.log(div);
    div.style="padding-top: 50px;"
})();