// ==UserScript==
// @name         哔哩哔哩 精简丨bilibili Streamline
// @namespace    https://github.com/Mue-linsi/Webpage-Pure/
// @version      0.1.0
// @description  萌新随便写的
// @author       聆巳
// @match        *://*.bilibili.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAABFFBMVEVMaXH/8ePZkYDbmIbVkIDdloP97d/86t3alILasKrXk4Tjt6vw18rPjIKgfo/hs6a2kJvQmpP35dj66Nv39/nt0cbcno7OlInpy8Dy3NDQnpbXrKP+///bs63eraDqmZvOp6fKj4rVpZ61k5fHqqy7bGnCusizhY7VvsTbopqibndAHEynbWqwp7vFnqC/ioy2fX+xeHq9oafdtazrn57OsrDbrKGxiZHWxc3EkYvmlJfqqqjm4OXIh4HIbW/y7/GxcG/L2Oqogo27gX3Vn5SPgJ7k3ufUz9idaGykb3Xt08ykj6Ojk6n89u/blIHSjHvgpZTUk4f24dTMhXuvbmbsvKnnsp/mvbLjxbvqxLzp5OmtdHC9FZv4AAAAW3RSTlMA/v7+/v7+/v4C/v7+/Rn+Lej+/v3+/v7+/v77/v39/nbNsP7+/fpHS/5hCM79kqp7tv62/v7SY2v8/v73v/795/7+9b39uf2c+emLwvz////////////////+mXyWBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAxlJREFUOI1dk+d22zgQhdEBdpGgSHVZ3WruvTs9uzmEWFT9/u+RQzlWtHt/DTDfAe5gMAB8SAPAvj5uua7rXrWPDu3tzt+stl0Njm8tIgSKIkHiintU2IPeI+0oJEjkioSgApGwerCDNFC4uR6D0zgnoncRIQRSlQ9IA4f1Yfx4SnZAFImU0EgIEn5AhQohekfRHSLQzIy3AakfvkPnS0JvO5FAAiESiS3DlxYVRI+Tf+xtvaZJqJUqkQYNQojChFB9ZpRimipiFNs5c9AIEFVKpUQQReMQEYIxspKVpSuKsDUCGjgnSERKoZRQpUS4inUcBLOgVK7rmFIUWQMArjDOGaIIVTo24DKYLRaLRRnyBsY0sixrAFyEsVBIKURJMCuyxGnM53OjzFlS0XFERienwBUYY0VVSnOrkvPiMGcS5sGVhYV+AgBwcRAERAglMA5M2FlBY240DNbtQlkRQjwCDbRms9lMF0gJrNeh+ekSlubLYol3zjgzkC5aYwDa1S+LRRgJJahegsWzS1Z0iowl3bMEOsj63AIAHJwfzBvHgiqE9XXOQDN35eVMQ38cnORNHwzmV9e6HqaYLKH36RJ6HuccdjpMDq3ccS7bOS/EjhmGyGDMTDjnknNWLsNyWDl676kGzttjd+XUS/FQcsik5FJKyRhPSqs/DACFAnDXjiHNqge55JAzyPLDJKwf7/3XVskseXlCsmS9NNZlJjmXrJFX9fFdvww9mN/BuXd/12zeDU0mJSumrv2Xac+qpvQYl2zdvLi4uGg6XMLEeop3w6GB9kJ/CtMqY3x912w2m3dLyErpUy893GdavV6vd2tCaVzc39+vvWKl13sZvexMa+DKsU+zLMveKqtyOSmvqrdZ9pJNgD3ambbrB6DwNplkWfbZMZaVn1mWTUZvP/aGGRTyQTo5tSdv067jONV+58dkVPhpg/cp35M9/vfhtetUu9X+67drMC78N60BDYxv+l+fa5t6/7X/3a9Nf+1K2tM3/3k6rdU2G9/f1GrTvn/zP0gDh77//PD1e81/8P2NX5v2aw9/Hvk3ozd36wjvK+cAAAAASUVORK5CYII=
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
   var css = '{display:none !important;height:0 !important}'

//主页
   css += '#reportFirst2,#app > div > div.storey-box.b-wrap,.international-footer .partner,.footer_right{display:none !important;}';//推广,广告,主体内容,页脚部分
//顶栏
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(3){display:none !important;}';//游戏中心
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(5){display:none !important;}';//会员购
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(6){display:none !important;}';//漫画
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(7){display:none !important;}';//赛事
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(8){display:none !important;}';//下载客户端
   css += '.mini-header__content{padding-left: 98px !important;padding-right: 82px !important;}';//左右留白调整
   css += '#internationalHeader > div > div > div.nav-user-center > div.user-con.signin > div:nth-child(2){display:none !important;}';//大会员
   css += '.bili-header-m .nav-search .nav-search-btn, .international-header .nav-search .nav-search-btn{border-radius: 25px !important;}';//搜索按钮
   css += '.bili-header-m .nav-search #nav_searchform, .international-header .nav-search #nav_searchform{border-radius: 25px !important;}';//搜索框
   css += '.nav-link .nav-link-ul .nav-link-item{margin-right: 20px !important;}';//左边按钮
   css += '.nav-user-center .user-con .item{margin-left: 15px;}';//右边按钮
   css += '#internationalHeader > div > div > div.nav-user-center > div:nth-child(3){margin-right: 20px;}';//投稿按钮
   css += '.nav-link .nav-link-ul .nav-link-item .link{font-size: 15px !important;}';//左边按钮字体大小
   css += '.nav-user-center .user-con .item .name{font-size: 15px;}';//右边按钮字体大小
   css += '.nav-link .nav-link-ul .nav-link-item .link .navbar_logo{width: 60px !important;margin-right: 40px !important;}';//logo调整
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(1) > span > a > svg.navbar_logo > path{fill: #ff7ea2;}';//logo颜色
   css += '#internationalHeader > div > div > div.nav-user-center > div:nth-child(3) > span > span{background: #ff7ea2;}';//投稿颜色
   css += '.channel-menu-mini{display: none !important;}';//频道菜单
   css += '.trending{display:none !important;}';//热搜
   css += '.navbar_pullup{display:none !important;}';//主站下拉svg
//视频页
   css += '.ad-report{display:none !important;}';//广告
   css += '#live_recommand_report{display:none !important;}';//直播推荐
   css += '.up-info .btn-panel .old-charge-btn{display:none !important;}';//充电
   css += '.up-info .btn-panel .follow-btn{width: 200px !important;}';//关注大小
   css += '.activity-m{display:none !important;}';//活动
//直播
   css += '#right-part > div.shortcuts-ctnr.h-100.f-left > div:nth-child(3){display:none !important;}';//顶栏右边"公会中心"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(1){display:none !important;}';//右边导航"开播设置"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(5){display:none !important;}';//右边导航"公会入驻"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(6){display:none !important;}';//右边导航"公会中心"
   css += '#app > div.flying-vm > div > aside{height: auto !important;}';//右边导航
   css += '.flip-view{display:none !important;}';//底部活动
//滚动条
    css += 'html ::-webkit-scrollbar {width: 6px !important;height: 5px !important;}';//大小
    css += 'html ::-webkit-scrollbar-corner,html ::-webkit-scrollbar-track {background: transparent !important;}';//背景颜色
    css += 'html ::-webkit-resizer,html ::-webkit-scrollbar-thumb {background: #aaa;border-radius: 3px;}';//滑块颜色
    css += 'html ::-webkit-scrollbar-thumb:hover {background: #888;}';//光标移动到滑块的颜色加深


      loadStyle(css)
   function loadStyle(css) {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.appendChild(document.createTextNode(css))
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(style);

   }
})();

window.onload = function(){
    var result = document.querySelector("#internationalHeader > div > div > div.nav-link > ul > li:nth-child(2)");
    result.innerHTML = `<a href="//www.bilibili.com/v/popular/all" target="_blank" class="link">排行</a>`;
}
