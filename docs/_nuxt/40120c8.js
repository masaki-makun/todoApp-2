(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(80);var r=n(114);function l(t){return function(t){if(Array.isArray(t))return Object(c.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},219:function(t,e,n){"use strict";n.r(e);var c=n(208),r=(n(57),n(36),n(35),n(159),n(26),{data:function(){return{taskList:[],task:"",uniqueKey:0,flag:!0,flag2:!1,inputFlag:!1,selectValues:[],direction:"left"}},computed:{calcValue:function(){for(var t=0,e=0,n=Object(c.a)(document.querySelectorAll(".item-check")),i=0;i<=n.lengerth;i++)t++;var r=setInterval((function(){e<=t&&(Math.floor(e/n.length*100),++e==n.length&&clearInterval(r))}),200);return r},checkedLength:function(){return this.taskList.filter((function(t){return t.checked})).map((function(t){return t.value})).length}},methods:{checkedValue:function(){for(var t=this.taskList.filter((function(t){return t.checked})).map((function(t){return t.value})),e=0,n=0,c="",p=document.getElementsByClassName("percentValue"),i=0;i<=t.length;i++)e++;var r=setInterval((function(){n>e||(c=Math.floor(n/t.length*100),n++,p.textContent=c+"%",n==t.length&&clearInterval(r))}),100)},addTasks:function(){if(""!==this.task){var t={id:this.uniqueKey,task:this.task,checked:!1},e=document.querySelector(".input-area"),n=document.querySelector(".add-button"),mask=document.getElementById("mask");this.taskList.push(t),e.classList.remove("input-area-active"),n.classList.remove("is-hide"),mask.classList.add("hidden"),this.uniqueKey++,this.task="",this.taskList.length,this.flag=!1,this.flag2=!0}},deleteTasks:function(t){var e="";!0===window.confirm("本当に削除しますか？")&&(this.taskList.some((function(n,c){n.id===t&&(e=c)})),this.taskList.splice(e,1)),this.taskList.length<=0?(this.flag=!0,this.flag2=!1):(this.flag=!1,this.flag2=!0)},toggleInput:function(){var t=this;!1===this.inputFlag?setTimeout((function(){t.inputFlag=!0}),200):!0===this.inputFlag&&""===this.task&&setTimeout((function(){t.inputFlag=!1}),200)},inputActive:function(){var input=document.querySelector(".input"),t="input-active";input.classList.contains(t)&&""==input.value?input.classList.remove(t):input.classList.add(t)},inputAreaActive:function(){var input=document.querySelector(".input"),t=document.querySelector(".input-area"),mask=document.getElementById("mask"),e=document.querySelector(".add-button"),n="input-area-active",c="is-hide",r="hidden";t.classList.contains(n)&&""==input.value?(t.classList.remove(n),e.classList.remove(c),mask.classList.add(r)):(t.classList.add(n),e.classList.add(c),mask.classList.remove(r),input.focus())},deleteInputArea:function(){var t=document.querySelector(".input-area"),e=document.querySelector(".add-button"),mask=document.getElementById("mask"),n="input-area-active",c="is-hide",r="hidden";t.classList.contains(n)?(t.classList.remove(n),e.classList.remove(c),mask.classList.add(r)):(t.classList.add(n),e.classList.add(c),mask.classList.remove(r))},inputWrapDelete:function(){var t="input-area-active",e=document.querySelector(".add-button");inputWrap.classList.contains(t)&&(inputWrap.classList.remove(t),e.classList.remove("is-hide"))},bgToggleClass:function(){var t=(new Date).getHours();return 0<=t&&t<=10?"morning-bg":10<=t&&t<=17?"afternoon-bg":18<=t&&t<=23?"night-bg":void 0},listToggle:function(){var t=document.querySelector(".list"),e=Object(c.a)(t.childNodes),n=document.querySelector(".toggle-button");e.filter((function(t){return t.classList.contains("list-item-grid")}));this.taskList.length>=0&&t.classList.contains("list-grid")?(t.classList.remove("list-grid"),e.forEach((function(t){return t.classList.remove("list-item-grid")})),n.classList.remove("is-active")):(this.taskList.length>=0&&t.classList.contains("list-grid"),n.classList.contains("is-active")||(t.classList.add("list-grid"),e.forEach((function(t){return t.classList.add("list-item-grid")})),n.classList.add("is-active")))}}}),l=n(38),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-container"},[n("h2",{staticClass:"component-title",class:t.bgToggleClass()},[t._v("Morning Tasks")]),t._v(" "),n("div",{staticClass:"list-area"},[n("div",{staticClass:"status-wrap"},[n("div",{staticClass:"status-text-wrap"},[n("h3",{staticClass:"status"},[t._v("Status")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:" status-text"},[t._v("\n          タスクはまだ登録されていません。\n        ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.flag2,expression:"flag2"}],staticClass:" status-text"},[t._v("\n          タスク数: "),n("span",{staticClass:"bold"},[t._v(t._s(t.taskList.length))])]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.flag2,expression:"flag2"}],staticClass:" status-text"},[t._v("\n          完了済みタスク数: "),n("span",{staticClass:"bold"},[t._v(t._s(t.checkedLength))])])]),t._v(" "),n("button",{staticClass:"toggle-button",on:{click:function(e){return t.listToggle()}}},[n("fa",{staticClass:"icon",attrs:{icon:"toggle-off","area-hidden":"true"}})],1)]),t._v(" "),n("div",{staticClass:"list-wrap"},[n("ul",{staticClass:"list"},t._l(t.taskList,(function(e,c){return n("li",{key:c,staticClass:"list-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"item.checked"}],staticClass:"item-check",attrs:{id:"item"+c,name:"task",type:"checkbox"},domProps:{value:e,checked:Array.isArray(e.checked)?t._i(e.checked,e)>-1:e.checked},on:{change:[function(n){var c=e.checked,r=n.target,l=!!r.checked;if(Array.isArray(c)){var o=e,d=t._i(c,o);r.checked?d<0&&t.$set(e,"checked",c.concat([o])):d>-1&&t.$set(e,"checked",c.slice(0,d).concat(c.slice(d+1)))}else t.$set(e,"checked",l)},function(e){return t.checkedValue()}]}}),t._v(" "),n("label",{staticClass:"item-label",attrs:{for:"item"+c}},[t._v("\n            "+t._s(e.task)+"\n          ")]),t._v(" "),n("button",{staticClass:"list-delete-button",on:{click:function(n){return t.deleteTasks(e.id)}}},[n("fa",{staticClass:"icon",attrs:{icon:"times-circle","area-hidden":"true"}})],1)])})),0)])]),t._v(" "),n("div",{staticClass:"hidden",attrs:{id:"mask"},on:{click:function(e){return t.inputAreaActive()}}}),t._v(" "),n("div",{staticClass:"input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"input input-active",attrs:{placeholder:"タスクを追加",type:"text",maxlength:"10"},domProps:{value:t.task},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTasks()},input:function(e){e.target.composing||(t.task=e.target.value)}}}),t._v(" "),n("button",{staticClass:"task-add-button",on:{click:function(e){return t.addTasks()}}},[n("fa",{staticClass:"icon",attrs:{icon:"plus","area-hidden":"true"}})],1),t._v(" "),n("button",{staticClass:"delete-button",on:{click:function(e){return t.deleteInputArea()}}},[n("fa",{staticClass:"icon",attrs:{icon:"times-circle","area-hidden":"true"}})],1)]),t._v(" "),n("button",{staticClass:"button add-button",on:{click:function(e){return t.inputAreaActive()}}},[n("fa",{attrs:{icon:"plus","area-hidden":"true"}})],1)])}),[],!1,null,"4db5a1f4",null);e.default=component.exports}}]);