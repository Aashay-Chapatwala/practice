System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-6ecd43c5.system.js"],(function(e){"use strict";var t,i,n,r,l,a,s;return{setters:[function(e){t=e.r;i=e.d;n=e.h;r=e.g},function(e){l=e.B},function(e){a=e.m;s=e.C}],execute:function(){var o=".nav-level-one-link";var u=e("dxp_nav_group",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){this.base=new l(this,i);this.base.i18Init(i,"NavGroup",a);this.utility=new s;var e=this.element?this.element:this.element;var t="";i.util.appendLinkElement(e,t);t="";i.util.appendLinkElement(e,t);t=i.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-navigation.min.css";i.util.appendLinkElement(e,t)};e.prototype.componentDidLoad=function(){var e=this.element.querySelectorAll(".mega-menu-icon");var t=this.element.querySelectorAll("a");var i=this.element.querySelectorAll(".mega-menu-link");var n=this.element.querySelectorAll("dxp-nav-item");this.utility.preventExtraMenuItems(n,3);this.utility.currentPageMenuLink(t);this.utility.setPosNSize(i);this.findBrokenImage(e);this.activeManually()};e.prototype.componentDidUpdate=function(){var e=this.element.querySelectorAll(".mega-menu-link");var t=this.element.querySelectorAll(".mega-menu-icon");this.utility.setPosNSize(e);this.findBrokenImage(t);this.activeManually()};e.prototype.onWindowResize=function(){var e=window.innerWidth;var t=this.element.getAttribute("is-nested-menu")==="true"?this.element.querySelectorAll(o):"";var i=this.element.querySelectorAll(".mega-menu-content > .caret");if(e<=992){Array.prototype.slice.call(t).map((function(e){return e.setAttribute("tabIndex","-1")}));Array.prototype.slice.call(i).map((function(e){return e.previousSibling.setAttribute("tabIndex","-1")}))}else{Array.prototype.slice.call(t).map((function(e){return e.removeAttribute("tabIndex")}));Array.prototype.slice.call(i).map((function(e){return e.previousSibling.removeAttribute("tabIndex")}))}};e.prototype.routingHandler=function(e){this.base.routingEventListener(e);this.clickHandler()};e.prototype.activeManually=function(){var e=Array.from(this.element.parentElement.querySelectorAll("a"));var t=this.element.querySelector(o);if(this.isActive){e.forEach((function(e){return e.classList.remove("active")}));t.classList.add("active");t.setAttribute("aria-current","page")}else{t.classList.remove("active");t.removeAttribute("aria-current");this.utility.currentPageMenuLink(e)}};e.prototype.clickHandler=function(){var e=Array.from(this.element.parentElement.querySelectorAll("a"));e.forEach((function(e){return e.classList.remove("active")}));Array.from(this.element.parentElement.querySelectorAll("dxp-nav-group")).forEach((function(e){return e.removeAttribute("is-active")}));this.element.querySelector(o).classList.add("active")};e.prototype.findBrokenImage=function(e){if(e.length){var t=function(t){e[t].onerror=function(){e[t].classList.remove("mega-menu-icon");e[t].style.width="auto"}};for(var i=0,n=Object.keys(e);i<n.length;i++){var r=n[i];t(r)}}};e.prototype.renderNestedMenu=function(){return n("div",{class:"group-slot"},this.child?this.child.map((function(e){return n("dxp-nav-item",{src:e["src"],"alt-text":e["altText"],"link-title":e["linkTitle"],"navigation-title":e["navigationTitle"],"menu-route-link":e["menuRouteLink"],"accessibility-text":e["accessibilityText"],child:e["child"]})})):n("slot",null))};e.prototype.render=function(){i.log.debug(this.element.tagName,"render()","in dxp-nav-group render() : "+"DEVELOPMENT");return n("li",{dir:this.dir,"data-theme":this.theme,class:this.base.componentClass()+" nav-level-one",role:"none"},n("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,"aria-haspopup":this.isNestedMenu?"true":undefined,"aria-expanded":this.isNestedMenu?"false":undefined,role:"menuitem",class:"nav-level-one-link",href:this.menuRouteLink},this.navigationTitle),this.isNestedMenu||this.child&&this.child.length?n("button",{"aria-label":i.i18n.t("NavGroup:ariaMenuText"),role:"button",class:"caret carrot"}):undefined,this.isNestedMenu||this.child&&this.child.length?n("div",{class:"mega-menu-container",role:"menu"},n("div",{class:"mega-menu-nav"},n("div",{class:"dxp-hidden-lg-up overview-link"},n("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,role:"menuitem",class:"mega-menu-link",href:this.menuRouteLink},this.navigationTitle)),this.renderNestedMenu())):undefined)};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"dxp-nav-group{height:100%}.dxp.dxp-nav-group.nav-level-one{position:relative}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{font-family:MarkForMC,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:400;text-decoration:none;line-height:24px;padding:17px 16px 18px;display:block;font-size:.875rem;letter-spacing:.5px;line-height:1.1}\@media (max-width:991px){.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{padding:24px 20px 24px 0}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link.active-link,.dxp.dxp-nav-group.nav-level-one .nav-level-one-link.active-link:hover{border-bottom:3px solid}}.dxp.dxp-nav-group .mega-menu-container,.dxp.dxp-nav-group.nav-level-one>ul{display:none}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot-down,.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small-down{position:absolute;right:0;top:0;width:100%;display:block;background:transparent;outline:0;border:0;z-index:9;overflow:hidden;text-indent:-999px}.dxp.dxp-nav-group .carrot-down:after,.dxp.dxp-nav-group .carrot-down:before,.dxp.dxp-nav-group .carrot-small-down:after,.dxp.dxp-nav-group .carrot-small-down:before,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot-small:before,.dxp.dxp-nav-group .carrot:after,.dxp.dxp-nav-group .carrot:before{content:\"\";display:block;width:1px;-webkit-transform:rotate(-40deg);transform:rotate(-40deg);position:absolute;right:4px}.dxp.dxp-nav-group .carrot-down:after,.dxp.dxp-nav-group .carrot-small-down:after,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot:after{-webkit-transform:rotate(40deg);transform:rotate(40deg)}.dxp.dxp-nav-group .carrot-down:focus,.dxp.dxp-nav-group .carrot-small-down:focus,.dxp.dxp-nav-group .carrot-small:focus,.dxp.dxp-nav-group .carrot:focus{outline:0}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot.down{height:63px}.dxp.dxp-nav-group .carrot.down:after,.dxp.dxp-nav-group .carrot.down:before,.dxp.dxp-nav-group .carrot:after,.dxp.dxp-nav-group .carrot:before{height:11px;top:21px}.dxp.dxp-nav-group .carrot.down:after,.dxp.dxp-nav-group .carrot:after{top:30px}.dxp.dxp-nav-group .carrot.down:before{-webkit-transform:rotate(55deg);transform:rotate(55deg);top:27px}.dxp.dxp-nav-group .carrot.down:after{-webkit-transform:rotate(-55deg);transform:rotate(-55deg);top:27px;right:13px}.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small.down{top:0;width:100%;height:44px;right:0}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small.down:before,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot-small:before{height:7px;top:18px;right:2px}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small:after{top:23px}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small.down:before{top:20px;right:3px}.dxp.dxp-nav-group .carrot-small.down:before{-webkit-transform:rotate(55deg);transform:rotate(55deg)}.dxp.dxp-nav-group .carrot-small.down:after{-webkit-transform:rotate(-55deg);transform:rotate(-55deg);right:8px}.dxp.dxp-nav-group .overview-link a{padding-top:0}.dxp.dxp-nav-group .dxp-nav-item{position:relative;background:transparent;margin:0}.dxp.dxp-nav-group .mega-menu-link{font-size:14px;line-height:24px;padding:10px 15px 10px 0;letter-spacing:0;display:block}.dxp.dxp-nav-group .mega-menu-link:hover+.mega-sub-menu{display:block}.dxp.dxp-nav-group .mega-sub-menu{display:none;margin-top:10px;margin-bottom:10px}.dxp.dxp-nav-group .mega-sub-menu a{display:block;padding:8px 0;font-size:14px;line-height:24px;letter-spacing:0}.dxp.dxp-nav-group .mega-menu-icon{display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav{border-top:0}\@media (min-width:992px){.dxp.dxp-nav-group.nav-level-one{margin:0 15px;padding:0;border:0;display:-ms-flexbox;display:flex;height:100%;position:static;max-width:100%;width:100%}.dxp.dxp-nav-group.nav-level-one>*{display:-ms-flexbox;display:flex}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-transform:capitalize}.dxp.dxp-nav-group.nav-level-one.active .nav-level-one-link,.dxp.dxp-nav-group.nav-level-one:hover .nav-level-one-link{text-decoration:none;border-top:4px solid transparent;margin-bottom:0}.dxp.dxp-nav-group.nav-level-one:hover .mega-menu-container{display:block;border-top:0}.dxp.dxp-nav-group .mega-menu-container{position:absolute;z-index:1;left:0;top:100%;width:100%;padding:40px 0;display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav{-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;margin:0}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav ul{position:static}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav .overview-link{display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-link:hover,.dxp.dxp-nav-group .mega-menu-container .mega-sub-menu-link:hover{color:#cf4500}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot-down,.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small-down{display:none}.dxp.dxp-nav-group .group-slot{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row}.dxp.dxp-nav-group dxp-nav-item{width:25%;display:-ms-flexbox;display:flex}.dxp.dxp-nav-group dxp-nav-item .dxp-nav-item{width:100%;padding-left:12px;padding-right:12px;border-right-width:0}.dxp.dxp-nav-group dxp-nav-item:first-of-type .dxp-nav-item{border-left-width:0;border-right-width:0}.dxp.dxp-nav-group .mega-menu-icon{display:block;width:100%;max-width:56px;margin-top:6px}.dxp.dxp-nav-group .mega-menu-link{font-size:24px;line-height:32px;margin-bottom:0;padding-right:0}.dxp.dxp-nav-group .mega-sub-menu{display:block;margin:0;margin-top:0}.dxp.dxp-nav-group .mega-sub-menu a{line-height:36px;font-size:14px;text-decoration:none;padding:0}}\@media (max-width:991px){.dxp.dxp-nav-group .mega-menu-container{max-height:0;-webkit-transition:max-height .2s ease,margin .1s ease-in;transition:max-height .2s ease,margin .1s ease-in;display:block;overflow:hidden}.dxp.dxp-nav-group .mega-menu-nav{padding:25px 0 25px 25px}.dxp.dxp-nav-group .mega-sub-menu{max-height:0;-webkit-transition:max-height .2s ease,margin .1s ease-in;transition:max-height .2s ease,margin .1s ease-in;display:block;overflow:hidden}.dxp.dxp-nav-group .mega-sub-menu.in{padding:0 25px}.dxp.dxp-nav-group .mega-sub-menu{margin-top:0;margin-bottom:0}.dxp.dxp-nav-group .in{-webkit-transition:max-height .6s ease,margin .2s ease-out;transition:max-height .6s ease,margin .2s ease-out;max-height:1000px}.dxp.dxp-nav-group .in.max-height-none{max-height:none}}.dxp.dxp-nav-group[dir=rtl] .nav-level-one-link{padding:24px 0 24px 20px}.dxp.dxp-nav-group[dir=rtl] a{text-align:right}.dxp.dxp-nav-group[dir=rtl] .carrot,.dxp.dxp-nav-group[dir=rtl] .carrot-down,.dxp.dxp-nav-group[dir=rtl] .carrot-small,.dxp.dxp-nav-group[dir=rtl] .carrot-small-down{left:0;right:auto;-webkit-transform:scale(-1);transform:scale(-1)}.dxp.dxp-nav-group[dir=rtl] .carrot.down:before{right:13px}.dxp.dxp-nav-group[dir=rtl] .carrot.down:after{right:4px}.dxp.dxp-nav-group[dir=rtl] .mega-menu-link{padding-right:0;padding-left:15px}.dxp.dxp-nav-group[dir=rtl] .mega-sub-menu{margin-left:0}.dxp.dxp-nav-group[dir=rtl] .mega-menu-nav{padding:25px 25px 25px 0}.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:after,.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:before{right:9px;top:20px}.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:after{right:3px}\@media (min-width:992px){.dxp.dxp-nav-group[dir=rtl] .mega-sub-menu{margin-right:0}.dxp.dxp-nav-group[dir=rtl] dxp-nav-item .dxp-nav-item{border-right-width:0;border-left-width:1px}.dxp.dxp-nav-group[dir=rtl] dxp-nav-item:last-of-type .dxp-nav-item{border-left-width:0}.dxp.dxp-nav-group[dir=rtl] .nav-level-one-link{padding:0 12px}}\@media (min-width:1200px){.dxp.dxp-nav-group[dir=rtl] .icon-container,.dxp.dxp-nav-group[dir=rtl] .mega-menu-content{float:right}}"},enumerable:true,configurable:true});return e}())}}}));