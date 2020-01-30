var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(t){return function(e){return c([t,e])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(u){s=[6,u];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-07586e87.system.js"],(function(t){"use strict";var e,n,r,i,o,s;return{setters:[function(t){e=t.r;n=t.d;r=t.h;i=t.g},function(t){o=t.B},function(t){s=t.m}],execute:function(){var u=t("dxp_in_page_nav_item",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){this.base=new o(this,n);this.base.i18Init(n,"InPageNavItem",s)};t.prototype.routingHandler=function(t){this.base.routingEventListener(t)};t.prototype.getActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.active]}))}))};t.prototype.getHref=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.href]}))}))};t.prototype.setActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=true;return[2]}))}))};t.prototype.focusElement=function(t){t.focus()};t.prototype.scrollTo=function(t){var e=document.querySelector(t);this.focusElement(e);var r=window.pageYOffset||document.documentElement.scrollTop;var i=90;var o=e.getBoundingClientRect().top+r-i;if(n.is.chrome()){window.scrollTo({top:o,behavior:"smooth"})}else{this.scrollView(e);var s=window.scrollY;if(s){window.scroll(0,s-i)}}};t.prototype.scrollView=function(t){t.scrollIntoView()};t.prototype.render=function(){var t=this;var e=[r("link",{rel:"stylesheet",href:""}),[this.theme&&r("link",{rel:"stylesheet",href:""})],[this.theme&&r("link",{rel:"stylesheet",href:n.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-in-page-nav.min.css"})]];return r("div",{class:(this.active?"active":"")+" "+this.base.componentClass(),dir:this.dir,"data-theme":this.theme},e,r("li",{class:""+(this.active?"active":""),role:"menuitem",onClick:function(){return t.scrollTo(t.href)},tabIndex:0,onKeyUp:function(e){return e.keyCode===13&&t.scrollTo(t.href)}},r("span",null,this.text||r("slot",null))))};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"div.dxp.dxp-in-page-nav-item{display:inline-block;text-align:center;margin:1px}div.dxp.dxp-in-page-nav-item span{padding:2rem 1.5rem;display:block;text-transform:uppercase;margin-bottom:0}div.dxp.dxp-in-page-nav-item li{list-style:none}div.dxp.dxp-in-page-nav-item li:focus,div.dxp.dxp-in-page-nav-item li:hover{border-bottom:2px solid}div.dxp.dxp-in-page-nav-item li:focus{outline:1px solid}div.dxp.dxp-in-page-nav-item li:hover{cursor:pointer}div.dxp.dxp-in-page-nav-item li.active span{border-bottom:6px solid}\@media screen and (min-width:320px) and (max-width:767px){div.dxp.dxp-in-page-nav-item{display:none}div.dxp.dxp-in-page-nav-item li:focus,div.dxp.dxp-in-page-nav-item li:hover{border-bottom:0;border-color:transparent}div.dxp.dxp-in-page-nav-item li.active span{border-bottom:0}div.dxp.dxp-in-page-nav-item span{padding:2em 1em}div.dxp.dxp-in-page-nav-item.active{display:block}}"},enumerable:true,configurable:true});return t}())}}}));