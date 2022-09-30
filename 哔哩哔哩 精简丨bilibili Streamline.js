// ==UserScript==
// @name         哔哩哔哩 精简
// @namespace    https://github.com/Mue-linsi/Webpage-Pure/
// @version      0.1.0
// @description  阿巴阿巴
// @author       聆巳
// @match        *://*.bilibili.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAABFFBMVEVMaXH/8ePZkYDbmIbVkIDdloP97d/86t3alILasKrXk4Tjt6vw18rPjIKgfo/hs6a2kJvQmpP35dj66Nv39/nt0cbcno7OlInpy8Dy3NDQnpbXrKP+///bs63eraDqmZvOp6fKj4rVpZ61k5fHqqy7bGnCusizhY7VvsTbopqibndAHEynbWqwp7vFnqC/ioy2fX+xeHq9oafdtazrn57OsrDbrKGxiZHWxc3EkYvmlJfqqqjm4OXIh4HIbW/y7/GxcG/L2Oqogo27gX3Vn5SPgJ7k3ufUz9idaGykb3Xt08ykj6Ojk6n89u/blIHSjHvgpZTUk4f24dTMhXuvbmbsvKnnsp/mvbLjxbvqxLzp5OmtdHC9FZv4AAAAW3RSTlMA/v7+/v7+/v4C/v7+/Rn+Lej+/v3+/v7+/v77/v39/nbNsP7+/fpHS/5hCM79kqp7tv62/v7SY2v8/v73v/795/7+9b39uf2c+emLwvz////////////////+mXyWBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAxlJREFUOI1dk+d22zgQhdEBdpGgSHVZ3WruvTs9uzmEWFT9/u+RQzlWtHt/DTDfAe5gMAB8SAPAvj5uua7rXrWPDu3tzt+stl0Njm8tIgSKIkHiintU2IPeI+0oJEjkioSgApGwerCDNFC4uR6D0zgnoncRIQRSlQ9IA4f1Yfx4SnZAFImU0EgIEn5AhQohekfRHSLQzIy3AakfvkPnS0JvO5FAAiESiS3DlxYVRI+Tf+xtvaZJqJUqkQYNQojChFB9ZpRimipiFNs5c9AIEFVKpUQQReMQEYIxspKVpSuKsDUCGjgnSERKoZRQpUS4inUcBLOgVK7rmFIUWQMArjDOGaIIVTo24DKYLRaLRRnyBsY0sixrAFyEsVBIKURJMCuyxGnM53OjzFlS0XFERienwBUYY0VVSnOrkvPiMGcS5sGVhYV+AgBwcRAERAglMA5M2FlBY240DNbtQlkRQjwCDbRms9lMF0gJrNeh+ekSlubLYol3zjgzkC5aYwDa1S+LRRgJJahegsWzS1Z0iowl3bMEOsj63AIAHJwfzBvHgiqE9XXOQDN35eVMQ38cnORNHwzmV9e6HqaYLKH36RJ6HuccdjpMDq3ccS7bOS/EjhmGyGDMTDjnknNWLsNyWDl676kGzttjd+XUS/FQcsik5FJKyRhPSqs/DACFAnDXjiHNqge55JAzyPLDJKwf7/3XVskseXlCsmS9NNZlJjmXrJFX9fFdvww9mN/BuXd/12zeDU0mJSumrv2Xac+qpvQYl2zdvLi4uGg6XMLEeop3w6GB9kJ/CtMqY3x912w2m3dLyErpUy893GdavV6vd2tCaVzc39+vvWKl13sZvexMa+DKsU+zLMveKqtyOSmvqrdZ9pJNgD3ambbrB6DwNplkWfbZMZaVn1mWTUZvP/aGGRTyQTo5tSdv067jONV+58dkVPhpg/cp35M9/vfhtetUu9X+67drMC78N60BDYxv+l+fa5t6/7X/3a9Nf+1K2tM3/3k6rdU2G9/f1GrTvn/zP0gDh77//PD1e81/8P2NX5v2aw9/Hvk3ozd36wjvK+cAAAAASUVORK5CYII=
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
   var css = '{display:none !important;height:0 !important}'

//不想屏蔽的功能可以在前面加//
//如:
   //css += '.abc{display:none !important;}';//展示用
//主体
   css += '.nameplate{display:none !important;}';//评论区勋章
   css += '.van-watchlater.black{display:none !important;}';//"排行"视频预览右下角的加入"稍后再看"按钮
//主站首页
   css += '#reportFirst2,#reportFirst3,#app > div > div.storey-box.b-wrap,.international-footer .partner,.footer_right{display:none !important;}';//推广,广告,主体内容,赛事,页脚部分
   css += '#app > div > a{display:none !important;}';//左侧,联系客服和体验新版
//动态首页
   css += '.bili-dyn-ads{display:none !important;}';//话题上方广告
   css += '.bili-avatar-pendent-dom{display:none !important;}';//头像框
   css += '.bili-dyn-card-video__mark{display:none !important;}';//视频预览右下角的加入"稍后再看"按钮
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//顶部导航栏
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//整体
   css += '.mini-header__content{padding-left: 80px !important;padding-right: 60px !important;}';//左右留白调整
   css += '.navbar_pullup{display:none !important;}';//"主站"导航按钮右边向下的小图标
   css += '.channel-menu-mini{display:none !important;}';//选中主站时显示的频道菜单
   css += '.van-popover.van-popper.popover-live{display:none !important;}';//选中直播时显示的直播推荐
//左侧
   css += '.nav-link .nav-link-ul .nav-link-item .link .navbar_logo{width: 60px !important;margin-right: 40px !important;}';//logo调整
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(1) > span > a > svg.navbar_logo > path{fill: #ff7ea2;}';//logo颜色
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(3){display:none !important;}';//游戏中心
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(5){display:none !important;}';//会员购
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(6){display:none !important;}';//漫画
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(7){display:none !important;}';//赛事
   css += '#internationalHeader > div > div > div.nav-link > ul > li:nth-child(8),#internationalHeader > div > div > div.nav-link > ul > li:nth-child(9){display:none !important;}';//下载客户端或BLS
   css += '.nav-link .nav-link-ul .nav-link-item .link{font-size: 16px !important;}';//导航按钮字体大小
   css += '.nav-link .nav-link-ul .nav-link-item{margin-right: 20px !important;}';//导航按钮间距
//右侧
   css += '#internationalHeader > div > div > div.nav-user-center > div.user-con.signin > div:nth-child(2){display:none !important;}';//大会员
   css += '#internationalHeader > div > div > div.nav-user-center > div.user-con.signin > div:nth-child(4){display:none !important;}';//动态
   css += '#internationalHeader > div > div > div.nav-user-center > div.user-con.signin > div:nth-child(7){display:none !important;}';//创作中心
   css += '#internationalHeader > div > div > div.nav-user-center > div:nth-child(3) > span > span{background: #ff7ea2;}';//"投稿"颜色
   css += '.nav-user-center .user-con .item .name{font-size: 16px !important;}';//导航按钮字体大小
   css += '.nav-user-center .user-con .item{margin-left: 20px !important;}';//导航按钮间距
//搜索框
   css += '.bili-header-m .nav-search #nav_searchform, .international-header .nav-search #nav_searchform{border-radius: 25px !important;}';//搜索框圆角
   css += '.bili-header-m .nav-search .nav-search-btn, .international-header .nav-search .nav-search-btn{border-radius: 25px !important;}';//搜索按钮圆角
   css += '.trending{display:none !important;}';//热门搜索推荐
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//视频播放页
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   css += '.up-info .btn-panel .old-charge-btn{display:none !important;}';//充电
   css += '.up-info .btn-panel .follow-btn{width: 200px !important;}';//关注大小
   css += '.float-nav > div > a{display:none !important;}';//右侧联系客服
   css += '.float-nav__btn--fixed{display:none !important;}';//右侧前往新版
   css += '#bannerAd{display:none !important;}';//弹幕列表下方广告
   css += '#live_recommand_report{display:none !important;}';//推荐视频底部"直播推荐"
   css += '.video-ad-creative-card{display:none !important;}';//分p视频,弹幕列表下方广告
   css += '.activity-m,.reply-notice,#right-bottom-banner{display:none !important;}';//评论上方视频推广
   css += '#reco_list > div.rec-list > div:nth-child(1){display:none !important;}';//推荐视频第二行综艺推荐
//配合"b站封面替换右侧广告"食用：https://greasyfork.org/scripts/390792
   css += '#slide_ad{margin-bottom: 10px !important;}';//封面图片下方留空变大
   css += '#danmukuBox{margin-bottom: 10px !important;}';//弹幕列表下方留空变小
   css += '.up-card{margin-bottom: 0px !important;}';//创作团队卡片下方留空变小
//播放器
   css += '.bpx-player-top-issue{display:none !important;}';//右上角反馈按钮
   css += '.bpx-player-cmd-dm-wrap{display:none !important;}';//投票,三连弹窗
   css += '.bpx-player-top-left-follow{display:none !important;}';//左上角关注按钮
   css += '.bpx-player-ctrl-wide{display:none !important;}';//"宽屏模式"按钮(防止误触)
   css += '.bilibili-player-electric-panel{display:none !important;}';//视频结束后的“充电鸣谢”
   css += '.bpx-player-ending-functions-follow{width: 160px !important;}';//视频结束后的“关注”按钮长度
   css += '.bpx-player-ending-functions-electric-inner{display:none !important;}';//视频结束后的“为TA充电”
   css += '.bpx-player-ending-related > a{display:none !important;}';//视频结束后相关视频推荐（防止正想暂停而误触）
   css += '.bpx-player-ending-content .bpx-player-ending-related:before{display:none !important;}';//全屏视频结束时后相关"相关推荐"字样
   css += '.bpx-player-ending-related{background-image: url(https://img.xhacgn.com/images/2022/09/25/2-5.png);background-size: 100%;background-position: center;}';//视频结束后相关视频推荐的空白用图片填充
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//直播
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//右下角粉丝勋章上方官方提供了屏蔽特效和弹幕屏蔽，
//可以自行手动勾选，因官方已提供部分功能所以本脚本并未添加此部分屏蔽代码。

//刚进直播间会看到右侧弹幕区顶部显示礼物特效信息，
//是因为官方提供的屏蔽存在一定延迟。
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 //主体
   css += '#all-special-area-recommend{display:none !important;}';//未知
   css += '.activity-gather-entry{display:none !important;}';//活动收集条目(未知)
   css += '.link-panel-ctnr{left: -42% !important;}';//顶栏右侧"动态"选中调整
   css += '.calendar-checkin{left: -72% !important;}';//顶栏右侧"签到"选中调整
   css += '#right-part > div.shortcuts-ctnr.h-100.f-left > div:nth-child(3){display:none !important;}';//顶栏右侧"公会中心"
   css += '#right-part > div.shortcuts-ctnr.h-100.f-left > div:nth-child(4),#right-part > div.shortcuts-ctnr.h-100.f-left > div:nth-child(5){display:none !important;}';//顶栏右侧"饭盒"或顶栏右侧"我要开播"(因为分区没有"饭盒")
   css += '.international-footer > div.link-box.b-footer-wrap{margin-left: 180.500px;margin-right: 180.500px;}';//页脚调整
//直播预览遮罩(有个别无预览)↓↓↓↓↓
   css += '#app > div > div > div > div > div > a > div > div > div > div.play-mask.w-100.h-100.p-absolute.ts-dot-4.activated{display:none !important;}';//直播首页下方"其他分区"选中预览
   css += '#app > div > div > div > div > a > div > div > div > div.play-mask.w-100.h-100.p-absolute.ts-dot-4.activated{display:none !important;}';//直播首页下方"推荐直播"选中预览
   css += '#all-area-card-list > div > div > a > div > div > div:nth-child(4){display:none !important;}';//直播分区选中预览(具体位置,必须使用它自己的样式,需要自行调整)
   css += '.Item_1EohdhbR .Item_2A9JA1Uf .Item_lxEYWDiF{display:none !important;}';//直播分区选中预览(自用)
//直播首页
   css += '.grid-area-ctnr{display:none !important;}';//活动,资讯,排行榜,热门分区
   css += '.flip-view.p-relative.over-hidden{display:none !important;}';//活动横幅
   css += '#app > div:nth-child(8),#app > div:nth-child(7){display:none !important;}';//颜值领域,推荐分区
   css += '#app > div.flying-vm > div > aside{height: auto !important;}';//直播首页右侧导航高度调整
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(1){display:none !important;}';//直播首页右侧导航"开播设置"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(5){display:none !important;}';//直播首页右侧导航"公会入驻"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(6){display:none !important;}';//直播首页右侧导航"公会中心"
   css += '#app > div.flying-vm > div > aside > span > div:nth-child(7){display:none !important;}';//直播首页右侧导航"饭盒"
   css += '#app > div.highlight-areas-ctnr.v-top.t-center.no-select > div > div > div > div:nth-child(1){display:none !important;}';//分类上方活动
   css += '#app > div.highlight-areas-ctnr.v-top.t-center.no-select > div.highlight-area-item.dp-i-block.t-left.p-relative.hover > div.hover-panel-wrap.p-absolute.border-box.panel_6{display:none !important;}';//分类上方活动
//直播分区
   css += '.banner-ctn{display:none !important;}';//分区横幅活动
   css += '#area-tags > div > div > div{display:none !important;}';//分区头图推荐
   css += '.live-sidebar-ctnr{height: auto !important;}';//分区右边导航高度调整
   css += '.sidebar-btn.a-move-in-left:nth-child(1){display:none !important;}';//分区右侧导航"开播设置"
   css += '.sidebar-btn.a-move-in-left:nth-child(5){display:none !important;}';//分区右侧导航"公会入驻"
   css += '.sidebar-btn.a-move-in-left:nth-child(6){display:none !important;}';//分区右侧导航"公会中心"
   css += '#area-tags > div > div,#area-tags > div > div > header{height: 75px !important;}';//顶部"当前分区图标"和"切换分区"位置高度调整
//直播间
   css += '.flip-view{display:none !important;}';//底部活动
   css += '#my-dear-haruna-vm{display:none !important;}';//直播姬
   css += '#shop-popover-vm{display:none !important;}';//商店"小橙车"提示
   css += '.side-bar-cntr{height: auto !important;}';//直播间右侧导航高度调整
   css += '.ecommerce-lot-icon{display:none !important;}';//礼物栏左侧商店"小橙车"
   css += '#sidebar-vm > div > div.side-bar-cntr > div:nth-child(1){display:none !important;}';//直播间右侧工具栏"高光时刻"
   css += '.live-skin-coloration-area .live-skin-highlight-bg{background-color: rgb(0, 128, 198) !important;}';//关注和包裹按钮改蓝色
    css += 'body > iframe:last-child{display:none !important;}';//“恭喜主播获得超人气推荐奖励”弹窗(弹出时网页无法滚动,人气推荐奖励body > iframe:last-child,红包.popular-main,天选时刻#anchor-guest-box-id,互动玩法div)
//直播间弹幕区
   css += '.live-title-cntr{display:none !important;}';//活动头衔
   css += '.danmaku-item-left > i{display:none !important;}';//弹幕名字前面的"榜1/2/3"
   css += '.mask-pane-free{display:none !important;}';//弹幕输入框表情内“获得免费表情”提示
   css += '.bl-button--primary{background-color: rgb(0, 128, 198) !important;}';//发送按钮改蓝色
   css += '#control-panel-ctnr-box{padding: 8px !important;}';//弹幕输入区外调整
   css += '.chat-input-ctnr{margin-bottom: 8px !important;height: 60px !important;}';//弹幕输入区内调整
   css += '#chat-items > div.chat-item.hot-rank-msg{display:none !important;}';//"恭喜主播获得超人气推荐奖励"提示
   css += '.medal-wear-body .medal-item .gray-progress .progress-num-span{color: #8a8a8a !important;}';//未激活勋章的未达到颜色
   css += '.chat-history-panel .chat-history-list .chat-item.top3-notice{display:none !important;}';//恭喜XXX成为高能用户"榜1/2/3"
   css += '.chat-history-panel .chat-history-list .chat-item.common-danmuku-msg{display:none !important;}';//"恭喜主播完成XXX任务"提示
   css += '#live-player > div.web-player-inject-wrap > div > div:nth-child(7){display:none !important;}';//广播(如:XXX赠送小电视火速前往观看)
//直播间视频区
   css += '.web-player-icon-feedback{display:none !important;}';//播放器右上反馈图标
   css += '.web-player-icon-roomStatus{display:none !important;}';//直播界面右上角logo
//直播间标题栏
   css += '.info-section{display:none !important;}';//分区榜单
   css += '.activity-gather-entry{display:none !important;}';//活动任务进度
   css += '.live-area > a{max-width: fit-content !important;}';//标题"所在分区"完全显示(不显示省略号)
   css += '#head-info-vm > div > a > div > div.blive-avatar-pendant{display:none !important;}';//主播头像框
//搜索框
   css += '.search-bar-ctnr .minimal-cell.show{display:none !important;}';//无框搜索栏
   css += 'form.nomarl-cell.dp-table-cell.v-middle.hide{display:table-cell !important;}';//有框搜索栏
   css += '.link-navbar-ctnr .link-navbar .main-ctnr .search-bar-ctnr .search-bar{border: 1.9px solid #868686 !important;background-color: var(--bg1)!important;}';//有框搜索栏样式调整
//专题活动直播间
   //专题活动背景↓↓↓↓↓↓↓
   css += '#app > section:nth-child(1),#app > section:nth-child(3),#app > section:nth-child(4),#app > section:nth-child(5),#app > section:nth-child(6),#app > section:nth-child(7),#app > section:nth-child(8),#app > section:nth-child(9),#app > section:nth-child(10),#app > section:nth-child(11),#app > section:nth-child(12),#app > section:nth-child(13),#app > section:nth-child(14),#app > section:nth-child(15),#app > section:nth-child(16),#app > section:nth-child(17),#app > section:nth-child(18),#app > section:nth-child(19),#app > section:nth-child(20){display:none !important;}';//
   css += '#app > section > div > div > div > ul{display:none !important;}';//标题栏上方相关直播间
   css += '.t-drainage.show{display:none !important;}';//背景左下二维码
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//滚动条
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   css += 'html ::-webkit-scrollbar {width: 6px !important;height: 5px !important;}';//滚动条宽度
   css += 'html ::-webkit-scrollbar-corner,html ::-webkit-scrollbar-track {background: transparent !important;}';//滚动框
   css += 'html ::-webkit-resizer,html ::-webkit-scrollbar-thumb {background: #aaa;border-radius: 3px;}';//滑块
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

//盯着网页加载完成没用,不盯着就有用(不会改)
window.onload = function (){
    //顶部导航栏"动态"改成排行的"综合热门"
    var resulta = document.querySelector("#internationalHeader > div > div > div.nav-link > ul > li:nth-child(2)");
    resulta.innerHTML = `<a href="//www.bilibili.com/v/popular/all" target="_blank" class="link">排行</a>`;
    //顶部导航栏"直播"改成"全部直播"而不是"直播首页"
    var resultab = document.querySelector("#internationalHeader > div > div > div.nav-link > ul > li:nth-child(4)");
    resultab.innerHTML = `<span> <a href="//live.bilibili.com/all" target="_blank" class="link van-popover__reference">直播</a></span>`;
    //搜索框里的"推荐搜索内容"改为"搜索"
    var resultba = document.querySelector("#nav_searchform > input");
    resultba.placeholder = "搜索";
    resultba.title = "搜索";
    //自动展开视频简介
    const element = document.getElementsByClassName('desc-info')[0];
    if (!/open/.test(element.className)) {
        document.getElementsByClassName('toggle-btn')[0].click();
  }
}
