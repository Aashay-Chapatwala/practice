System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,s,r,i,a;return{setters:[function(e){t=e.r;s=e.d;r=e.h;i=e.g},function(e){a=e.B}],execute:function(){var n={en:{hamburger:"Open menu",closeMenu:"Collapse menu"},"en-US":{hamburger:"Open menu",closeMenu:"Collapse menu"},es:{hamburger:"Open menu",closeMenu:"Collapse menu"},"es-ES":{hamburger:"Open menu",closeMenu:"Collapse menu"}};var o=e("dxp_header_rich",function(){function e(e){t(this,e);this.isHeaderActive=false;this.isLogoPresent=false;this.isNavPresent=false;this.isNavSearch=false;this.menuState=s.i18n.t("HeaderRich:hamburger");this.windowScrollBefore=0;this.backgroundType="transparent";this.isHeaderSticky=false}e.prototype.componentWillLoad=function(){this.base=new a(this,s);this.base.i18Init(s,"HeaderRich",n);this.isLogoPresent=this.base.returnBooleanValue(this.element&&this.element.querySelector('[slot="logo"]'));this.isNavPresent=this.base.returnBooleanValue(this.element&&this.element.querySelector('[slot="nav"]'));this.isNavSearch=this.base.returnBooleanValue(this.element&&this.element.querySelector('[slot="search"]'))};e.prototype.componentDidLoad=function(){this.body=this.element.closest("body");if(this.isLogoPresent){var e=this.element.querySelector("dxp-logo");if(e){var t=e?e.querySelector(".dxp-logo"):e.querySelector(".dxp-logo");t.style.background="none"}}if(this.isNavSearch){this.alignNavSearch()}};e.prototype.clickEventHandler=function(e){var t=e.target?e.composedPath()[0]:e.target;var r=this.element.querySelector("dxp-search");var i=this.element?this.element.querySelector(".nav-search-container"):this.element.querySelector(".nav-search-container");var a=this.element?this.element.querySelector("header"):this.element.querySelector("header");var n=this.element?this.element.querySelector(".search-wapper"):this.element.querySelector(".search-wapper");var o=t.classList;var c=Array.from(this.element.querySelectorAll("dxp-cta-list"));var l;var h;var d;if(r){l=r?r.querySelector(".search-container"):r.querySelector(".search-container");h=r?r.querySelector(".search-icon"):r.querySelector(".search-icon");d=r?r.querySelector(".search-wrapper-close-icon"):r.querySelector(".search-wrapper-close-icon")}var p=["overlay","sub-nav-child-container","dxp-icon-close","search-wrapper-close-icon"];switch(true){case o.contains("nav-item"):if((this.base.getDeviceWidthType()==="xl"||this.base.getDeviceWidthType()==="lg")&&t&&t.parentElement.classList.contains("in")){this.isHeaderActive=false;this.body.style.overflow="inherit";if(s.is.ipad()){this.body.style.position="relative"}}else{this.isHeaderActive=true;this.body.style.overflow="hidden";if(s.is.ipad()){this.body.style.position="fixed"}}break;case p.some((function(e){return o.contains(e)})):var u=t.parentElement;var y=u.classList.contains("search-box-outer-container");var v=u.classList.contains("dxp-search")||y;if(!v||(!y&&o.contains("dxp-icon-close")||o.contains("search-wrapper-close-icon"))){this.deactivateheader()}break;case o.contains("dxp-icon-search"):this.body.style.overflow="hidden";if(s.is.ipad()){this.body.style.position="fixed"}this.isHeaderActive=true;if(l){var m=l.querySelector(".overlay");m.classList.remove("dxp-none");m.classList.add("dxp-block")}break;case o.contains("open")&&o.contains("hamburger-btn"):o.remove("open");a.classList.add("transparent-bg");this.isHeaderActive=false;i.classList.remove("show");n.style.display="none";this.menuState=s.i18n.t("HeaderRich:hamburger");this.body.style.overflow="inherit";break;case o.contains("hamburger-btn"):o.add("open");a.classList.remove("transparent-bg");this.isHeaderActive=true;i.classList.add("show");if(l){l.classList.add("expand-container");l.classList.remove("collapse-container")}if(c){c.map((function(e){var t=e?e.querySelector("p"):e.querySelector("p");if(t){t.classList.add("dxp-none")}}))}if(n){n.classList.add("dxp-block")}this.changesInSearchComponent(l,h,d);this.menuState=s.i18n.t("HeaderRich:closeMenu");this.body.style.overflow="hidden";break;default:if((t.classList.contains("header")||t.classList.contains("header-container"))&&this.isHeaderActive){this.deactivateheader()}s.log.error("No child element found")}};e.prototype.handleScroll=function(){if(this.isHeaderSticky){var e=this.element?this.element.querySelector(".dxp-header-sticky"):this.element.querySelector(".dxp-header-sticky");var t=e.offsetHeight;var s=document.body.offsetHeight;var r=window.innerHeight;var i=window.pageYOffset;var a=this.windowScrollBefore-i;var n=parseInt(window.getComputedStyle(e).getPropertyValue("top"),10)+a;if(i<=0){e.style.top="0px"}else if(a>0){e.style.top=(n>0?0:n)+"px"}else if(a<0){if(i+r>=s-t){n=i+r-s;e.style.top=(n<0?n:0)+"px"}else{e.style.top=(Math.abs(n)>t?-t:n)+"px"}}this.windowScrollBefore=i}};e.prototype.alignNavSearch=function(){var e=this.element.querySelector("dxp-search");e.componentOnReady().then((function(e){if(e){var t=e?e.querySelector(".dxp-search"):e.querySelector(".dxp-search");if(t){t.style.background="none"}}}))};e.prototype.changesInSearchComponent=function(e,t,s){if(e){e.classList.remove("dxp-none");var r=e.querySelector(".overlay");r.classList.remove("dxp-none");r.classList.add("dxp-block");e.classList.add("search-container-changes-header")}if(t){t.classList.add("dxp-none")}if(s){s.classList.add("dxp-none")}};e.prototype.deactivateheader=function(){var e=this.base.returnBooleanValue(this.base.getDeviceWidthType()==="xl"||this.base.getDeviceWidthType()==="lg");this.isHeaderActive=!e;if(this.base.getDeviceWidthType()==="xl"||this.base.getDeviceWidthType()==="lg"){this.body.removeAttribute("style")}};e.prototype.render=function(){var e=this;var t=[r("link",{rel:"stylesheet",href:""}),[this.theme&&r("link",{rel:"stylesheet",href:""})],[this.theme&&r("link",{rel:"stylesheet",href:s.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-header-rich.min.css"})]];return r("header",{class:"transparent-bg "+(this.backgroundType==="solid"?"solid":"")+" "+this.base.componentClass()+" "+(this.isHeaderActive?" active":"")+"\n        "+(this.isHeaderSticky?" dxp-header-sticky":""),dir:this.dir,"data-theme":this.theme},t,r("div",{class:"dxp-content-main "+(this.backgroundType==="transparent"?"transparent":"")+" header-container"},r("div",{class:"dxp-row"},r("div",{class:"dxp-col-12"},r("div",{class:"header"},this.isLogoPresent&&r("div",{ref:function(t){return e.headerContainer=t},class:"logo-container"},r("slot",{name:"logo"})),(this.isNavPresent||this.isNavSearch)&&[r("div",{ref:function(t){return e.headerContainer=t},class:"nav-search-container"},r("div",{class:"nav-wrapper"},r("slot",{name:"nav"})),r("div",{class:"search-wapper"},r("slot",{name:"search"}))),r("div",{id:"hamburger-btn",class:"hamburger-btn hamburger","aria-label":s.i18n.t("HeaderRich:"+this.menuState),tabindex:"0",role:"button"},r("span",null))])))))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"header.dxp.dxp-header-rich{position:absolute;z-index:999;top:0;background:none;width:100%}header.dxp.dxp-header-rich .header{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;z-index:1;height:3.5rem}header.dxp.dxp-header-rich .header .logo-container{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header.dxp.dxp-header-rich .header .hamburger{height:.833rem;width:1.5rem;position:absolute;top:1.5rem;right:36px;cursor:pointer;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.1s ease-in-out;-moz-transition:.1s ease-in-out;-o-transition:.1s ease-in-out;transition:.1s ease-in-out}\@media (max-width:991px){header.dxp.dxp-header-rich .header .hamburger{right:36px}}\@media (max-width:767px){header.dxp.dxp-header-rich .header .hamburger{right:16px}}header.dxp.dxp-header-rich .hamburger-btn span{content:\"\";display:block;position:absolute;width:100%;left:0;pointer-events:none;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}header.dxp.dxp-header-rich .hamburger-btn span:after,header.dxp.dxp-header-rich .hamburger-btn span:before{content:\"\";display:block;width:100%;position:absolute;top:.375rem;left:0}header.dxp.dxp-header-rich .hamburger-btn span:after{top:.75rem}header.dxp.dxp-header-rich .hamburger-btn.open span{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:.375rem}header.dxp.dxp-header-rich .hamburger-btn.open span:before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0}header.dxp.dxp-header-rich .hamburger-btn.open span:after{border:0}\@media (min-width:992px){header.dxp.dxp-header-rich .header{height:6.5rem}header.dxp.dxp-header-rich .header .logo-container{width:auto}header.dxp.dxp-header-rich .header .logo-container+.nav-container{margin-left:1.25rem}header.dxp.dxp-header-rich .header .hamburger{display:none}header.dxp.dxp-header-rich .nav-search-container{-ms-flex-align:center;align-items:center;margin-left:auto;display:-ms-flexbox;display:flex}}\@media (max-width:991px){header.dxp.dxp-header-rich.transparent-bg{background:none}header.dxp.dxp-header-rich .header{display:block;padding:15px 0;position:relative}header.dxp.dxp-header-rich .header .search-wapper{display:none}header.dxp.dxp-header-rich .nav-search-container{width:100%;min-height:calc(100vh - 3.5rem);overflow-y:auto;opacity:0;-webkit-transition:opacity 1s ease-out;transition:opacity 1s ease-out;pointer-events:none}header.dxp.dxp-header-rich .nav-search-container.show{pointer-events:all}header.dxp.dxp-header-rich .nav-search-container .nav-wrapper{position:relative;z-index:1}header.dxp.dxp-header-rich .nav-search-container .search-wapper{position:relative;z-index:0}header.dxp.dxp-header-rich .nav-search-container.show{opacity:1}}\@media (max-width:767px){header.dxp.dxp-header-rich .dxp-col-12{padding:0}header.dxp.dxp-header-rich .dxp-row{margin:0}header.dxp.dxp-header-rich .logo-container{padding:0 16px}header.dxp.dxp-header-rich .nav-wrapper{padding:12px 0 16px 16px}}\@media (min-width:768px) and (max-width:991px){header.dxp.dxp-header-rich .dxp-col-12{padding:0}header.dxp.dxp-header-rich .dxp-row{margin:0}header.dxp.dxp-header-rich .logo-container{padding:0 36px}header.dxp.dxp-header-rich .nav-wrapper{padding:32px 34px 16px 36px}header.dxp.dxp-header-rich .search-wapper{margin:0 20px}}header.dxp.dxp-header-rich.solid{position:relative}header.dxp.dxp-header-rich.dxp-header-sticky{position:fixed}header.dxp.dxp-header-rich[dir=rtl] .hamburger{right:auto;left:36px}\@media (max-width:767px){header.dxp.dxp-header-rich[dir=rtl] .hamburger{left:16px}}\@media (min-width:992px){header.dxp.dxp-header-rich[dir=rtl] .header .logo-container+.nav-container{margin-left:auto;margin-right:.9375rem}header.dxp.dxp-header-rich[dir=rtl] .header .nav-search-container{margin-right:auto;margin-left:inherit}header.dxp.dxp-header-rich[dir=rtl] .header .nav-search-container .nav-wrapper{padding:12px 16px 16px 0}}\@media (max-width:767px){header.dxp.dxp-header-rich[dir=rtl] .search-wapper{margin-left:12px}header.dxp.dxp-header-rich[dir=rtl] .dxp-col-12{padding:0 16px}}"},enumerable:true,configurable:true});return e}())}}}));