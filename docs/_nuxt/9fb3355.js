(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("64891fdf",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(209)},212:function(t,e,n){var r=n(37)(!1);r.push([t.i,".right.page-enter-active,.right.page-leave-active{transition:transform .5s ease}.right.page-leave-to{transform:translateX(100vw)}.right.page-enter{transform:translateX(-100vw)}.left.page-enter-active,.left.page-leave-active{transition:transform .5s ease}.left.page-leave-to{transform:translateX(-100vw)}.left.page-enter{transform:translateX(100vw)}",""]),t.exports=r},216:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tabs:["Morning","Afternoon","Night"],currentTab:"",greething:["おはようございます","こんにちは","こんばんは"]}},transitions:{name:"page"},computed:{currentTabToggle:function(){return"Tab-"+this.currentTab.toLowerCase()},nowDate:function(){var t=new Date,e=new Intl.NumberFormat("ja",{minimumIntegerDigits:2,useGrouping:!1}),n=e.format(t.getMonth()+1),r=e.format(t.getDate());return t.getFullYear()+"/"+n+"/"+r},nowGreething:function(){var t=(new Date).getHours();return 0<=t&&t<=10?this.greething[0]:10<=t&&t<=17?this.greething[1]:17<=t&&t<=23?this.greething[2]:void 0},nowTaskLists:function(){var t=(new Date).getHours();return 0<=t&&t<=10?this.currentTab="Morning":10<=t&&t<=17?this.currentTab="Afternoon":17<=t&&t<=23?this.currentTab="Night":void 0},bgToggleClass:function(){var t=(new Date).getHours();return 0<=t&&t<=10?"morning-bg":10<=t&&t<=17?"afternoon-bg":18<=t&&t<=23?"night-bg":void 0}},methods:{}},o=(n(211),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container left",class:t.bgToggleClass},[n("div",{staticClass:"content-wrap"},[n("div",{staticClass:"time-wrap"},[n("p",{staticClass:"date",class:t.bgToggleClass},[t._v(t._s(t.nowDate))])]),t._v(" "),n("h1",{staticClass:"title",class:t.bgToggleClass},[t._v("ToDo App")]),t._v(" "),n("div",{staticClass:"toggle-button-wrap"},[n("p",{staticClass:" greething"},[t._v(t._s(t.nowGreething))]),t._v(" "),n("div",{staticClass:"link-area"},[n("nuxt-link",{staticClass:" back-button",attrs:{to:"/"}},[n("fa",{attrs:{icon:"chevron-left","area-hidden":"true"}})],1)],1),t._v(" "),n("div",{staticClass:"menu-button-area"},[n("button",{staticClass:"menu-button"},[n("fa",{staticClass:"icon",attrs:{"area-hidden":"true",icon:"ellipsis-h"}})],1)]),t._v(" "),n("div",{staticClass:"button-wrap"},t._l(t.tabs,(function(e,r){return n("button",{key:r,class:["button",{"is-active":e==t.currentTab}],on:{click:function(n){t.currentTab=e}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"content-area "},[n("keep-alive",[n(t.currentTabToggle,{tag:"component",staticClass:"componentWrap"},[t._v(t._s(t.nowTaskLists))])],1)],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-animation-wrap"},[n("ul",{staticClass:"circles"},[n("li"),t._v(" "),n("li"),t._v(" "),n("li"),t._v(" "),n("li"),t._v(" "),n("li"),t._v(" "),n("li"),t._v(" "),n("li")])])}],!1,null,null,null);e.default=component.exports}}]);