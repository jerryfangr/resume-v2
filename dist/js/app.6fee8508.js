(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1074:function(t,e,s){},1195:function(t,e,s){t.exports=s.p+"img/avatar.493680dd.png"},"23f1":function(t,e,s){"use strict";s("4968")},"380f":function(t,e,s){"use strict";s("9828")},4968:function(t,e,s){},"4aa6":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav-bar",{attrs:{scrollToComponent:t.scrollToComponent,sectionNames:t.sectionNames}}),s("title-section",{ref:"titleMain"},[t._v("介绍")]),s("main-section",{attrs:{user:t.sectionData.user}}),t._m(0),s("title-section",{ref:"titleSkill"},[t._v("技能")]),s("skill-section",{attrs:{skills:t.sectionData.skills}}),s("title-section",{ref:"titlePortfolio"},[t._v("作品")]),s("portfolio-section",{attrs:{portfolios:t.sectionData.portfolios}}),s("title-section",{ref:"titleExperience"},[t._v("工作")]),s("experience-section",{attrs:{experience:t.sectionData.experience}}),s("title-section",{ref:"titleMessage"},[t._v("留言")]),s("message-section")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"download"},[s("a",{attrs:{href:"./方涵聪-应聘前端-2021.pdf",download:""}},[t._v("下载 PDF 简历")])])}],o=(s("77ed"),s("c2a7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"dock"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"dock-icons",on:{mouseleave:t.clearIcon}},t._l(t.sectionNames,(function(e,i){return s("li",{key:i,ref:"section",refInFor:!0,staticClass:"section-icon",on:{mousemove:function(e){return t.activeIcon(e,i)},click:function(e){return t.scrollTo(e,i)}}},[s("div",{staticClass:"wrapper"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-"+e}})]),s("div",{staticClass:"name"},[t._v(t._s(e))])])])})),0)])])}),r=[],c=(s("159b"),{props:{scrollToComponent:Function,sectionNames:Array},data:function(){return{current:-999}},methods:{activeIcon:function(t,e){},clearIcon:function(){var t;this.current=-999,null===(t=this.$refs.section)||void 0===t||t.forEach((function(t){t.style.transform=""}))},isSibling:function(t){return t===this.current-1||t===this.current+1},scrollTo:function(t,e){var s=t.currentTarget;s.classList.add("loading"),this.scrollToComponent(e).then((function(){s.classList.remove("loading")}))}}}),l=c,u=(s("380f"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,"643a1d70",null),p=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"title",staticClass:"title"},[s("h2",{staticClass:"text"},[t._t("default")],2)])},f=[],v=(s("d3b7"),s("f13c")),h=s.n(v),b={methods:{scrollToHere:function(){var t=this;return new Promise((function(e,s){h.a.scrollTo(t.$refs.title,1e3,{easing:"ease-in-out",onDone:function(t){e("done")},onCancel:function(){e("cancel")}})}))}}},_=b,g=(s("afef"),Object(u["a"])(_,m,f,!1,null,null,null)),C=g.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main"},[s("div",{staticClass:"container"},[s("div",{staticClass:"main-part about"},[t.timer>0?s("div",{staticClass:"message-box name animate__animated animate__bounceIn animate__faster"},[s("div",{staticClass:"title"},[t._v("嘿! 你好啊! 我是")]),s("div",{staticClass:"content"},[t._v(t._s(t.user.name))])]):t._e(),t.timer>1?s("div",{staticClass:"message-box school animate__animated animate__bounceIn animate__faster"},[t._v(" 毕业于 "+t._s(t.user.school)+" ")]):t._e(),t.timer>2?s("div",{staticClass:"message-box age animate__animated animate__bounceIn animate__faster"},[t._v(" 年龄: "+t._s(t.user.age)+"岁 ")]):t._e(),t.timer>3?s("div",{staticClass:"message-box gender animate__animated animate__bounceIn animate__faster"},[t._v(" 性别: "+t._s(t.user.gender)+" ")]):t._e(),t.timer>4?s("div",{staticClass:"message-box work animate__animated animate__bounceIn animate__faster"},[t._v(" 求职方向 "+t._s(t.user.work)+" ")]):t._e(),t.timer>5?s("div",{staticClass:"message-box mail animate__animated animate__bounceIn animate__faster",attrs:{title:"点击复制邮箱"},on:{click:function(e){return t.copyToClipboard(t.user.mail)}}},[t._v(" 单击拷贝邮箱: "+t._s(t.user.mail)+" ")]):t._e(),s("div",{staticClass:"bubble bubble-top"}),s("div",{staticClass:"bubble bubble-bottom"})]),s("div",{staticClass:"main-part avatar"},[s("div",{staticClass:"bubble bubble-center"},[s("img",{staticClass:"image",attrs:{src:t.avatar}})])]),s("div",{staticClass:"main-part more"},[s("a",{staticClass:"circle-link github",attrs:{href:t.user.github,target:"_blank",title:"github"}},[s("div",{staticClass:"wrapper"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-github"}})])])]),s("a",{staticClass:"circle-link blog",attrs:{href:t.user.blog,target:"_blank",title:"blog"}},[s("div",{staticClass:"wrapper"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-blog"}})])])]),t.timer>6?s("div",{staticClass:"message-box tip animate__animated animate__bounceIn animate__faster"},[t._v(" ↑GitHub 和 ↓博客 ")]):t._e(),s("div",{staticClass:"bubble bubble-top"}),s("div",{staticClass:"bubble bubble-bottom"})])])])},y=[],w=s("1195"),k=s.n(w),M={props:{user:Object},data:function(){return{timer:0,avatar:k.a}},mounted:function(){var t=this,e=500,s=setInterval((function(){t.timer++,t.timer>=100&&clearInterval(s)}),e)},methods:{copyToClipboard:function(t){var e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},S=M,j=(s("7e96"),Object(u["a"])(S,x,y,!1,null,"6f2e2ccf",null)),z=j.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"skill"},t._l(t.formatedSkills,(function(e){return s("div",{key:e.title,staticClass:"skill-item"},[s("div",{staticClass:"skill-text title"},[s("div",{staticClass:"title-wrapper"},[t._v(t._s(e.title))]),s("div",{staticClass:"level"},[t._v(t._s(e.level))])]),s("div",{staticClass:"skill-text description"},t._l(e.description,(function(e,i){return s("p",{key:i,staticClass:"text"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)},D=[],T=(s("d81d"),s("a4d3"),s("e01a"),{props:{skills:Array},data:function(){return{}},computed:{formatedSkills:function(){var t=this;return this.skills.map((function(e){return e.description=t.$_resumeUtil.textToList(e.description),e}))}}}),E=T,$=(s("f704"),Object(u["a"])(E,L,D,!1,null,"700b34a5",null)),q=$.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"portfolio"},t._l(t.portfolios,(function(e,i){return s("div",{key:i,class:{"portfolio-item":!0,desc:e.showDesc}},[s("div",{staticClass:"container"},[s("div",{staticClass:"portfolio-info image"},[s("img",{key:"preview",class:{preview:!0,hide:e.showQrCode},attrs:{src:e.previewUrl}}),s("transition",{attrs:{name:"slide-appear"}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQrCode,expression:"portfolio.showQrCode"}],key:"qrcode",staticClass:"qrcode",attrs:{src:e.qRCodeUrl}})]),s("button",{staticClass:"desc-button",on:{click:function(t){e.showDesc=!e.showDesc}}},[s("span",{staticClass:"text"},[t._v(" "+t._s(e.showDesc?"返回简介":"查看介绍")+" ")])])],1),s("div",{staticClass:"portfolio-info title"},[t._v(t._s(e.title))]),s("a",{staticClass:"portfolio-info code-link",attrs:{href:e.codeUrl}},[t._v(" 前往源码 ")]),s("button",{staticClass:"portfolio-info bottom-btn qr-button",on:{click:function(t){e.showQrCode=!e.showQrCode}}},[t._v(" "+t._s(e.showQrCode?"隐藏二维码":"二维码连接")+" ")]),e.showDesc?s("button",{staticClass:"portfolio-info bottom-btn back-button",on:{click:function(t){e.showDesc=!e.showDesc}}},[s("span",{staticClass:"text"},[t._v("< 返回")])]):t._e(),e.showDesc?s("div",{staticClass:"portfolio-info description"},[s("ul",{staticClass:"tags"},t._l(e.tags,(function(e,i){return s("li",{key:i,staticClass:"tag-item"},[t._v(" "+t._s(e)+" ")])})),0),t._l(e.description,(function(e,i){return s("p",{key:i,staticClass:"text animate__animated animate__zoomIn animate__fast",style:"animation-delay: "+(.8*i+.6)+"s;"},[t._v(" "+t._s(e)+" ")])}))],2):t._e()])])})),0)},I=[],O={props:{portfolios:Array},data:function(){return{}},beforeMount:function(){var t=this;this.portfolios.forEach((function(e,s){e.description=t.$_resumeUtil.textToList(e.description),t.$set(e,"showQrCode",!1),t.$set(e,"showDesc",!1)}))}},U=O,V=(s("e33f"),Object(u["a"])(U,A,I,!1,null,"a5a8c83e",null)),N=V.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"message"},[s("form",{staticClass:"message-form",on:{submit:function(e){return e.preventDefault(),t.addMessage(e)}}},[s("div",{staticClass:"tip"},[t._v("留言板")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData.title,expression:"inputData.title"}],staticClass:"input title",attrs:{type:"text",name:"title",placeholder:"你 的 标 题 ..."},domProps:{value:t.inputData.title},on:{input:function(e){e.target.composing||t.$set(t.inputData,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputData.content,expression:"inputData.content"}],staticClass:"input content",attrs:{name:"content",placeholder:"有什么想告诉我么..."},domProps:{value:t.inputData.content},on:{input:function(e){e.target.composing||t.$set(t.inputData,"content",e.target.value)}}}),s("button",{class:{button:!0,submit:t.isSubmit},attrs:{type:"submit"}},[t._v("提交")])]),s("div",{staticClass:"message-list"},t._l(t.messages,(function(e){return s("div",{key:e.id,staticClass:"message-item"},[s("div",{staticClass:"message-title"},[s("div",{class:{"title-item message-state":!0,read:e.read},attrs:{title:e.read?"已读":"未读"}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-book"}})])]),s("div",{staticClass:"title-item title-info"},[s("div",{staticClass:"title-content"},[t._v(t._s(e.title))]),s("div",{staticClass:"title-time"},[t._v(t._s(e.updatedAt))])]),s("div",{staticClass:"title-item operation"},[t.isAdmin?s("button",{staticClass:"btn read"},[t._v("阅读")]):t._e(),t.isAdmin||t.userId===e.userId?s("button",{staticClass:"btn edit"},[t._v("编辑")]):t._e()])]),s("div",{staticClass:"message-content"},t._l(e.content,(function(e,i){return s("p",{key:i,staticClass:"text"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])},P=[],B=s("5530"),R=(s("7db0"),s("498a"),s("5319"),s("ac1f"),s("25f0"),s("c72e")),J=s.n(R),Q={av:{appId:"8jw7gkIFnu4f0pNyGnYBrp6H-gzGzoHsz",appKey:"xazaedy0vMM8yaHYwEIawsBI",serverURL:"https://8jw7gkif.lc-cn-n1-shared.com"}},F={created:function(){var t=this;J.a.init({appId:Q.av.appId,appKey:Q.av.appKey,serverURL:Q.av.serverURL}),this.$AV=J.a,this.$Message=J.a.Object.extend(this.dbName),"me123456-skachaskjckobhfciawuobcui"===localStorage.cdscxsedfegrddfuser&&(this.isAdmin=!0),this.userId=localStorage.cdscxsedfegrddfuser||"cv-userid-lmih51613k-"+1e5*Math.random()+(new Date).getTime(),localStorage.cdscxsedfegrddfuser=localStorage.cdscxsedfegrddfuser||this.userId,this.loadData().then((function(e){e.forEach((function(e){var s=t.formatData(e);t.messages.push(s)}))}))},data:function(){return{dbName:"Message",isAdmin:!1,isSubmit:!1,userId:"",messages:[],inputData:{title:"",content:"",read:!1}}},methods:{loadData:function(){var t=new this.$AV.Query(this.dbName);return t.find()},addData:function(t){var e=new this.$Message;for(var s in t)"function"!==typeof t[s]&&"updatedAt"!==s&&e.set(s,t[s]);return e.save()},updateData:function(t){var e=this.$AV.Object.createWithoutData(this.dbName,t.id);for(var s in t)"function"!==typeof t[s]&&"updatedAt"!==s&&e.set(s,t[s]);return e.save()},addMessage:function(t){var e=this;this.isSubmit||""===this.inputData.content.trim()||this.addData(this.inputData).then((function(t){e.messages.unshift(e.formatData(t)),e.inputData.title="",e.inputData.content=""}))},formatData:function(t){var e=this,s=t.updatedAt.toString().replace(/ [A-Z]{2,5}\+.*/gi,""),i=Object(B["a"])(Object(B["a"])({},t.attributes),{},{updatedAt:s});return i.content=this.$_resumeUtil.textToList(i.content),i.id=t.id,i.save=function(){e.updateData(this)},i},readMessage:function(t){var e=this.messages[t];e.read=!0,e.save()}}},G=F,Y=(s("6cec"),Object(u["a"])(G,H,P,!1,null,"79dc4fba",null)),K=Y.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"experience"},[s("ul",{staticClass:"timeline"},t._l(t.experience,(function(e,i){return s("li",{key:i,staticClass:"experience-item show"},[s("div",{staticClass:"wrapper"},[s("title",[t._v(t._s(e.title))]),t._v(" "+t._s(e.description)+" ")])])})),0)])},Z=[],X={props:{experience:Array}},tt=X,et=(s("23f1"),Object(u["a"])(tt,W,Z,!1,null,"541e8fd6",null)),st=et.exports,it=s("57e5"),at={name:"App",components:{navBar:p,titleSection:C,mainSection:z,skillSection:q,portfolioSection:N,experienceSection:st,messageSection:K},mounted:function(){this.sectionAnchor=[this.$refs.titleMain,this.$refs.titleSkill,this.$refs.titlePortfolio,this.$refs.titleExperience,this.$refs.titleMessage]},data:function(){return{sectionNames:["main","skill","portfolio","experience","message"],sectionAnchor:[],sectionData:it}},methods:{scrollToComponent:function(t){return this.sectionAnchor[t].scrollToHere()}}},nt=at,ot=(s("5c0b"),Object(u["a"])(nt,a,n,!1,null,null,null)),rt=ot.exports,ct=(s("1276"),{textToList:function(t){var e=[],s=/^[\r\n ]{0,}$/gi;return t.split(/[\r\n]/gi).forEach((function(t){t=t.trim(),s.test(t)||(t=t.replace(/[\r\n]/gi,""),e.push(t))})),e},install:function(t,e){t.prototype.$_resumeUtil=ct}}),lt=ct;i["a"].config.productionTip=!1,i["a"].use(lt),new i["a"]({render:function(t){return t(rt)}}).$mount("#app")},"57e5":function(t){t.exports=JSON.parse('{"user":{"name":"方涵聪","age":"23","work":"前端","gender":"男","mail":"xdxtf@qq.com","school":"上海杉达学院","blog":"https://jerryfangr.github.io","github":"https://github.com/jerryfangr"},"skills":[{"title":"HTML & CSS","level":"★★★★★","description":"熟悉 HTML5与标签语义化 nav、header、main、section、footer等。\\n熟悉 css 预处理 sass、less，css3 动画、过度效果、flex盒子、媒体查询等。\\n能独立根据设计稿实现网页布局与样式制作。"},{"title":"JavaScript","level":"★★★★★","description":"熟悉 JavaScript基础语法与特性，如作用域、闭包、原型、原型链、异步等。\\n熟悉 dom与bom常见api、ajax。\\n熟悉 ECMAScript 新的语法与特性，如promise(async)、generator、class、解构等。"},{"title":"TypeScript","level":"★★★★","description":"熟悉 TypeScript扩展语法与特性，如元组、Void、Never、泛型、断言。\\n熟悉 面向对象的继承、封装(private、protect、public)、多态(接口，抽象类)。\\n能使用纯TypeScript开发网页应用。"},{"title":"Vue","level":"★★★★","description":"熟悉 vue基础语法与特性，如生命周期、模板语法、组件通信、计算属性、过滤器等。\\n熟悉 vue拓展生态 vue-router和vuex，熟练使用vue-cli脚手架开发应用。\\n了解vue3 新特性 如Proxy来代理数据、Composition API可以更好支持Hooks,对TS更好的支持。"},{"title":"小程序","level":"★★★★","description":"熟悉 微信小程序原生语法，了解云开发(函数、数据库、存储)。\\n熟悉 微信小程序特点 如：dom api缺失、导航栏配置、page、组件通信、监听等。\\n熟悉 uniapp框架下通过vue语法开发小程序，能熟练使用flex布局。"},{"title":"移动端","level":"★★★★","description":"熟悉 移动端适配样式的方式，如 rem、vw/vh/vmin/vmax、媒体查询等。\\n熟悉 手机端特殊的dom api，如 touch 相关操作，真机vconsole调试。\\n熟悉 手机端事件，如滑动、长按。"},{"title":"工具","level":"★★★★","description":"熟悉 webpack打包工具与常见loader与插件的配置，常见配置 如babel、corejs、postcss、less/sass、css、style等。\\n熟悉 commonjs和es6 module规范。\\n了解Vite的基本使用与配置。"}],"portfolios":[{"title":"麦趣游戏盒","previewUrl":"https://z3.ax1x.com/2021/03/29/c9AFr8.jpg","codeUrl":"https://github.com/jerryfangr/game-box","qRCodeUrl":"https://z3.ax1x.com/2021/03/25/6qzxYR.png","tags":["TypeScript","Canvas","MVC","Webpack"],"description":"项目为一个微型游戏盒，目前已基本实现的小游戏有魔塔和flappy bird。\\n项目是初步看完TypeScript文档后，实现的第一个TS项目，由webpack配合ts-loader搭建的ts开发环境。\\n项目主要把 canvas2D 的图片、文字、画笔、矩形的api和键盘输入的事件监听，封装成了一个简陋的小引擎(单例模式)，并由此开发游戏。\\n页面部分，采取MVC的方式拆分管理网页各部分，以及相应的事件监听与数据更新。"},{"title":"小小音乐云","previewUrl":"https://z3.ax1x.com/2021/04/23/cjemDI.jpg","codeUrl":"https://github.com/jerryfangr/simple-music-server","qRCodeUrl":"https://z3.ax1x.com/2021/04/23/cjeEgH.png","tags":["JavaScript","Axios","MVC","Webpack","NodeJs","Express"],"description":"一个音乐的数据服务器，支持文件上传和音乐表单的增删改查。\\n服务器借助express框架快速搭建，api设计基本参照RESTful规范。\\n数据库为对JSON文件的操作的简易封装。\\n网页通过webpack配置开发环境，采用MVC结构，最终打包文件放置express服务器下的静态文件夹。"},{"title":"在线简历","previewUrl":"https://z3.ax1x.com/2021/04/24/cjnQ1g.jpg","codeUrl":"https://github.com/jerryfangr/resume-v2","qRCodeUrl":"https://z3.ax1x.com/2021/04/24/cjmTYT.png","tags":["JavaScript","Vue","Sass","Vue-cli"],"description":"一个自适应屏幕的在线简历，包含个人背景、技术栈、作品集、留言板。\\n网页样式是拾人牙慧，根据多个dribbble免费模板，重新设计而来。\\n项目用vue-cli & sass 搭建开发环境，每一个信息块都为设计为单独组件。\\n网页的要渲染的个人信息统一存放到了单独的json文件，便于未来替换在线api的需求。\\n留言板使用了 leancloud api存放留言信息。"},{"title":"Gamer聊天室","previewUrl":"https://z3.ax1x.com/2021/04/24/cjmv01.jpg","codeUrl":"https://github.com/jerryfangr/simple-chatapp","qRCodeUrl":"https://z3.ax1x.com/2021/04/24/cjnEnA.png","tags":["Vue2","Vue-router","Vuex","TypeScript","Sass","Socket.io","NodeJs","Express"],"description":"一个在线匿名聊天应用，支持群聊和私聊，未读消息提示，消息缓存。\\n服务器借助express框架快速搭建响应常规Http请求，Socket.io构建websocket服务端，双方通过express-session中间件共享session。\\n网页端环境通过vue-cli构建环境，typescript为主要开发语言，Vuex共享用户信息，localstorage存放聊天记录。"},{"title":"小小音乐播放","previewUrl":"https://z3.ax1x.com/2021/06/09/2cC0zV.jpg","codeUrl":"https://github.com/jerryfangr/little-music","qRCodeUrl":"https://z3.ax1x.com/2021/06/09/2cC6Z4.png","tags":["微信小程序","uniapp","Vue","Sass"],"description":"一个用于播放在线音乐的微信小程序。\\n起源于dribbble上一张挺好看的设计草稿，由于原设计图残缺很多，不得不补足了修改一部份界面，设计了界面按钮的动效。\\n小程序基于uni-app快速搭建，采用Vuex共享数据，小程序虽然看似有多个界面，实际只设计了一个page显示歌曲列表，其余皆为弹窗组件。\\n最后由于设计图本身功能缺失，小程序还缺失歌单等界面，部分交互效果警告提示也不够任性化，等待后续设计能力提高后补足。"},{"title":"vue3 todo","previewUrl":"https://z3.ax1x.com/2021/06/23/RnhQqH.jpg","codeUrl":"https://github.com/jerryfangr/todo-demos/tree/main/vue3-ts-demo","qRCodeUrl":"https://z3.ax1x.com/2021/06/23/Rnhxwd.png","tags":["Vue3","Vuex4","Vue-router4","TypeScript","Sass","Naive-ui","Vite2"],"description":"一个用于尝鲜vue3而开发的todo。\\n全程使用严格配置的TypeScript开发，使用vite2为构建工具，对vue3为的核心的生态新特性进行实际项目的体验，页面样式方面也采用最近推出的Naive-ui。\\n完成了一个todo应具有完备功能。主要为表单与表单内todo item的增删改。"}],"experience":[{"title":"2017.6-2017.8 [实习]碰撞科技","description":"主要实习内容，前端的网页兼容性测试，软件技术支持(为客户提供现场的软件安装和使用指导)。"},{"title":"2019.6-2019.12 [实习]上海现代商友","description":"主要实习内容，基础日语培训。后端API接口，前端网页兼容等测试，主要为功能测试。协调规划组内成员的测试任务(实习生组)。前端样例demo开发(根据设计稿的功能描述与少量的素材，自行补全设计开发展示的demo)"}]}')},"5c0b":function(t,e,s){"use strict";s("9c0c")},"6c64":function(t,e,s){},"6cec":function(t,e,s){"use strict";s("4aa6")},"7e96":function(t,e,s){"use strict";s("1074")},9828:function(t,e,s){},"9c0c":function(t,e,s){},"9eed":function(t,e,s){},afef:function(t,e,s){"use strict";s("6c64")},bd39:function(t,e,s){},c2a7:function(t,e){!function(t){var e,s,i,a,n,o,r='<svg><symbol id="icon-skill" viewBox="0 0 1024 1024"><path d="M377.558543 489.629503l67.034742 66.925249-134.025483 133.787052-67.014276-66.838268L377.558543 489.629503zM556.630988 690.733731l223.376487 0 0-89.436962L556.630988 601.296769 556.630988 690.733731zM958.70846 243.936755l0 536.105001c0 98.730629-79.927377 178.744987-178.700985 178.744987L243.903497 958.786743c-98.599645 0-178.61298-80.013335-178.61298-178.744987L65.290517 243.936755c0-98.730629 80.013335-178.722474 178.61298-178.722474l536.105001 0C878.781082 65.213257 958.70846 145.205103 958.70846 243.936755zM869.44546 288.612257c0-74.015737-60.119239-133.981481-134.113487-133.981481L288.578999 154.630776c-73.994248 0-134.027529 59.965743-134.027529 133.981481l0 446.775486c0 74.015737 60.033281 133.961014 134.027529 133.961014l446.752973 0c73.994248 0 134.113487-59.945277 134.113487-133.961014L869.44546 288.612257zM243.553527 355.842451l134.005017 133.787052 0.021489-0.021489 67.01223 66.946738 67.100234-66.946738L310.567803 289.00623 243.553527 355.842451z"  ></path></symbol><symbol id="icon-experience" viewBox="0 0 1024 1024"><path d="M283.432793 310.976614l90.596368 158.470221-39.257096 22.856567-90.554412-158.470221L283.432793 310.976614zM690.70866 333.35325c0 0-60.848856-86.062098-134.042879-89.419566-74.721819-3.315512-93.650937 15.135722-93.650937 15.135722l-117.64235 68.701708 45.233204 79.168084 117.77231-68.569702C591.081615 290.868647 690.70866 333.35325 690.70866 333.35325zM452.545398 423.734724 656.423809 780.151249l78.515215-45.757137L531.016611 377.889583 452.545398 423.734724zM958.70846 243.934708l0 535.9996c0 98.755188-80.08599 178.709171-178.711218 178.709171L243.998665 958.64348c-98.711186 0-178.709171-79.953983-178.709171-178.709171L65.289494 243.934708c0-98.581226 79.997985-178.579211 178.709171-178.579211l535.998577 0C878.62247 65.355497 958.70846 145.353482 958.70846 243.934708zM869.286848 288.687982c0-74.067926-59.932997-134.042879-133.954875-134.042879L288.664957 154.645103c-74.021877 0-133.954875 59.974953-133.954875 134.042879l0 446.577988c0 74.023924 59.932997 134.086881 133.954875 134.086881l446.667016 0c74.021877 0 133.954875-60.062957 133.954875-134.086881L869.286848 288.687982z"  ></path></symbol><symbol id="icon-book" viewBox="0 0 1024 1024"><path d="M768 938.666667a85.333333 85.333333 0 0 0 85.333333-85.333334V170.666667a85.333333 85.333333 0 0 0-85.333333-85.333334h-256v298.666667L405.333333 320 298.666667 384V85.333333H256a85.333333 85.333333 0 0 0-85.333333 85.333334v682.666666a85.333333 85.333333 0 0 0 85.333333 85.333334h512z"  ></path></symbol><symbol id="icon-main" viewBox="0 0 1024 1024"><path d="M780.093433 65.267493 243.991502 65.267493c-98.774631 0-178.700985 79.969333-178.700985 178.615027l0 536.102954c0 98.730629 79.925331 178.744987 178.700985 178.744987l536.102954 0c98.600669 0 178.615027-80.013335 178.615027-178.744987L958.709483 243.88252C958.70846 145.236825 878.695125 65.267493 780.093433 65.267493zM869.401458 735.353974c0 73.994248-59.989279 134.069485-134.069485 134.069485L288.667004 869.423459c-73.994248 0-134.115534-60.075237-134.115534-134.069485L154.55147 288.643979c0-74.080206 60.121286-134.069485 134.115534-134.069485l446.664969 0c74.080206 0 134.069485 59.989279 134.069485 134.069485L869.401458 735.353974zM512.041444 243.88252l268.051989 312.814472-89.436962 0 0 223.288482-89.307002 0L601.349469 601.372493 422.603459 601.372493l0 178.61298-89.307002 0L333.296457 556.696991l-89.304955 0L512.041444 243.88252z"  ></path></symbol><symbol id="icon-portfolio" viewBox="0 0 1024 1024"><path d="M779.973706 65.290005 243.9168 65.290005c-98.637508 0-178.627307 80.010265-178.627307 178.605817l0 536.076348c0 98.769514 79.989799 178.7368 178.627307 178.7368l536.056905 0c98.747002 0 178.734754-79.967286 178.734754-178.7368L958.70846 243.896846C958.70846 145.301294 878.720707 65.290005 779.973706 65.290005zM869.385085 735.342718c0 73.990155-60.051701 134.063345-134.063345 134.063345L288.568766 869.406063c-74.011644 0-133.975341-60.07319-133.975341-134.063345L154.593426 288.569278c0-73.990155 59.963697-133.932362 133.975341-133.932362l446.752973 0c74.011644 0 134.063345 59.942207 134.063345 133.932362L869.385085 735.342718zM779.973706 288.569278c-24.626887 0-44.651966 20.024056-44.651966 44.760436L601.346399 467.305055l-72.812329-182.051289c16.381086-6.588045 28.073382-22.51069 28.073382-41.35692 0-24.605398-19.936051-44.629453-44.651966-44.629453-24.647353 0-44.671409 20.024056-44.671409 44.629453 0 18.84623 11.692297 34.769898 28.182876 41.35692l-72.834842 182.051289-134.063345-133.975341c0-24.736381-19.936051-44.760436-44.651966-44.760436-24.647353 0-44.671409 20.024056-44.671409 44.760436 0 24.648376 20.024056 44.672432 44.671409 44.672432 5.498224 0 10.688433-1.308809 15.597233-3.140527l118.466112 315.809689-44.651966 0-44.759413 89.301885 446.752973 0-44.651966-89.301885-44.651966 0L764.464477 374.86162c4.9088 1.831718 10.011005 3.140527 15.509229 3.140527 24.735357 0 44.759413-20.024056 44.759413-44.672432C824.733119 308.593334 804.709063 288.569278 779.973706 288.569278zM511.955486 646.041856c-24.647353 0-44.671409-20.024056-44.671409-44.673455 0-24.737404 20.024056-44.76146 44.671409-44.76146 24.714891 0 44.651966 20.024056 44.651966 44.76146C556.607452 626.0178 536.670377 646.041856 511.955486 646.041856z"  ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M780.093433 461.804784c0 120.238478-103.135962 228.873688-223.376487 228.873688l-89.436962 0-133.983527 89.439008L333.296457 646.045949c-61.558008-38.480406-89.304955-106.321514-89.304955-184.241164 0-120.326483 97.463776-217.792305 217.7043-217.792305l100.605326 0C682.541653 244.01248 780.093433 341.478302 780.093433 461.804784zM958.70846 244.01248l0 536.105001c0 98.642624-80.013335 178.61298-178.615027 178.61298L243.991502 958.730461c-98.774631 0-178.700985-79.969333-178.700985-178.61298L65.290517 244.01248c0-98.730629 79.925331-178.744987 178.700985-178.744987l536.102954 0C878.695125 65.267493 958.70846 145.280828 958.70846 244.01248zM869.401458 288.687982c0-74.03825-59.989279-134.113487-134.069485-134.113487L288.667004 154.574494c-73.994248 0-134.115534 60.075237-134.115534 134.113487l0 446.753997c0 73.994248 60.121286 133.981481 134.115534 133.981481l446.664969 0c74.080206 0 134.069485-59.987233 134.069485-133.981481L869.401458 288.687982z"  ></path></symbol><symbol id="icon-blog" viewBox="0 0 1024 1024"><path d="M631.906 149.604H0.4v639.484h468.976l170.524 85.308-0.03-85.308h127.928V277.504z"  ></path><path d="M966.644 671.868h-56.642l-56.958 177.642 85.31 56.862 85.246-56.862z"  ></path><path d="M938.354 117.628c-47.12 0-85.308 38.172-85.308 85.276v554.208H1023.6V202.906c0-47.104-38.156-85.278-85.246-85.278zM639.9 621.156H128.3c-11.774 0-21.312-9.554-21.312-21.294 0-11.804 9.54-21.328 21.312-21.328h511.6c11.772 0 21.294 9.524 21.294 21.328 0.002 11.74-9.522 21.294-21.294 21.294zM639.9 493.272H128.3c-11.774 0-21.312-9.556-21.312-21.328s9.54-21.312 21.312-21.312h511.6c11.772 0 21.294 9.54 21.294 21.312s-9.522 21.328-21.294 21.328zM405.412 365.374H128.3c-11.774 0-21.312-9.556-21.312-21.328s9.54-21.31 21.312-21.31h277.112c11.772 0 21.326 9.54 21.326 21.31 0 11.772-9.554 21.328-21.326 21.328z"  ></path><path d="M631.906 149.604v127.9h135.892z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M1011.40512541 512q0 163.1950427-95.28726301 293.51805952t-246.08247922 180.42164793q-17.55948715 3.24559189-25.71507825-4.5771173t-8.15559112-19.47355477l0-137.14708367q0-63.08100096-33.78744888-92.29133254 37.03304078-3.91135459 66.65947477-11.73406493t61.08371285-25.38219634 52.67846144-43.2745654 34.45321159-68.24066048 13.31525063-97.86709333q0-78.6432-51.34693603-133.90149064 24.05067207-59.16964523-5.15965952-132.6531857-18.22524985-5.82542222-52.67846144 7.15694762t-59.83540793 28.62778937l-24.71643478 15.56219904q-60.50117063-16.89372445-124.83047651-16.89372444t-124.83047651 16.89372444q-10.40253952-7.15694763-27.62914589-17.55948715t-54.25964715-25.04931555-55.92405333-8.73813333q-28.62778937 73.48354048-4.5771173 132.6531857-51.34693603 55.25829063-51.34693603 133.90149064 0 55.25829063 13.31525063 97.53421254t34.12032967 68.24066048 52.34557952 43.52422571 61.08371285 25.38219634 66.65947477 11.73406493q-25.96473856 23.38490937-31.87338126 66.99235555-13.64813255 6.49118493-29.29355207 9.73677682t-37.03304078 3.24559189-42.6088027-13.98101333-36.11761778-40.6115146q-12.31660715-20.80507904-31.54050048-33.78744889t-32.20626318-15.56219904l-12.98236985-1.91406762q-13.64813255 0-18.89101255 2.91271111t-3.24559189 7.48982841 5.82542222 9.07101411 8.48847189 7.82271033l4.5771173 3.2455919q14.31389411 6.49118493 28.29490745 24.71643477t20.47219826 33.12168619l6.49118492 14.97965681q8.48847189 24.71643477 28.62778937 39.94575189t43.52422571 19.47355478 45.18863189 4.5771173 36.11761777-2.24694841l14.97965682-2.57983033q0 24.71643477 0.33288078 57.83812096t0.33288079 35.11897429q0 11.73406493-8.48847189 19.47355477t-25.96473856 4.5771173q-150.79521507-50.09863111-246.08247922-180.42164792t-95.28726301-293.51805952q0-135.89877874 66.99235556-250.65959652t181.75317333-181.75317334 250.65959652-66.99235555 250.65959651 66.99235555 181.75317333 181.75317334 66.99235556 250.65959652z"  ></path></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss");if(c&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function l(){n||(n=!0,i())}e=function(){var t,e,s,i;(i=document.createElement("div")).innerHTML=r,r=null,(s=i.getElementsByTagName("svg")[0])&&(s.setAttribute("aria-hidden","true"),s.style.position="absolute",s.style.width=0,s.style.height=0,s.style.overflow="hidden",t=s,(e=document.body).firstChild?(i=t,(s=e.firstChild).parentNode.insertBefore(i,s)):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),e()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(i=e,a=t.document,n=!1,(o=function(){try{a.documentElement.doScroll("left")}catch(t){return void setTimeout(o,50)}l()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,l())})}(window)},e33f:function(t,e,s){"use strict";s("bd39")},f704:function(t,e,s){"use strict";s("9eed")}});
//# sourceMappingURL=app.6fee8508.js.map