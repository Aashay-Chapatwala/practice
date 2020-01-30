import{r as t,d as i,h as e,g as s}from"./p-8188e849.js";import{B as a}from"./p-16d6f0ca.js";import{m as n,C as r}from"./p-dcda0608.js";const h=class{constructor(i){t(this,i)}componentWillLoad(){this.base=new a(this,i),this.base.i18Init(i,"NavGroup",n),this.utility=new r;const t=this.element;let e="";i.util.appendLinkElement(t,e),i.util.appendLinkElement(t,e=""),e=`${i.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-navigation.min.css`,i.util.appendLinkElement(t,e)}componentDidLoad(){const t=this.element.querySelectorAll(".mega-menu-icon"),i=this.element.querySelectorAll("a"),e=this.element.querySelectorAll(".mega-menu-link"),s=this.element.querySelectorAll("dxp-nav-item");this.utility.preventExtraMenuItems(s,3),this.utility.currentPageMenuLink(i),this.utility.setPosNSize(e),this.findBrokenImage(t),this.activeManually()}componentDidUpdate(){const t=this.element.querySelectorAll(".mega-menu-link"),i=this.element.querySelectorAll(".mega-menu-icon");this.utility.setPosNSize(t),this.findBrokenImage(i),this.activeManually()}onWindowResize(){const t=window.innerWidth,i="true"===this.element.getAttribute("is-nested-menu")?this.element.querySelectorAll(".nav-level-one-link"):"",e=this.element.querySelectorAll(".mega-menu-content > .caret");t<=992?(Array.prototype.slice.call(i).map(t=>t.setAttribute("tabIndex","-1")),Array.prototype.slice.call(e).map(t=>t.previousSibling.setAttribute("tabIndex","-1"))):(Array.prototype.slice.call(i).map(t=>t.removeAttribute("tabIndex")),Array.prototype.slice.call(e).map(t=>t.previousSibling.removeAttribute("tabIndex")))}routingHandler(t){this.base.routingEventListener(t),this.clickHandler()}activeManually(){const t=Array.from(this.element.parentElement.querySelectorAll("a")),i=this.element.querySelector(".nav-level-one-link");this.isActive?(t.forEach(t=>t.classList.remove("active")),i.classList.add("active"),i.setAttribute("aria-current","page")):(i.classList.remove("active"),i.removeAttribute("aria-current"),this.utility.currentPageMenuLink(t))}clickHandler(){Array.from(this.element.parentElement.querySelectorAll("a")).forEach(t=>t.classList.remove("active")),Array.from(this.element.parentElement.querySelectorAll("dxp-nav-group")).forEach(t=>t.removeAttribute("is-active")),this.element.querySelector(".nav-level-one-link").classList.add("active")}findBrokenImage(t){if(t.length)for(const i of Object.keys(t))t[i].onerror=()=>{t[i].classList.remove("mega-menu-icon"),t[i].style.width="auto"}}renderNestedMenu(){return e("div",{class:"group-slot"},this.child?this.child.map(t=>e("dxp-nav-item",{src:t.src,"alt-text":t.altText,"link-title":t.linkTitle,"navigation-title":t.navigationTitle,"menu-route-link":t.menuRouteLink,"accessibility-text":t.accessibilityText,child:t.child})):e("slot",null))}render(){return i.log.debug(this.element.tagName,"render()","in dxp-nav-group render() : DEVELOPMENT"),e("li",{dir:this.dir,"data-theme":this.theme,class:`${this.base.componentClass()} nav-level-one`,role:"none"},e("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,"aria-haspopup":this.isNestedMenu?"true":void 0,"aria-expanded":this.isNestedMenu?"false":void 0,role:"menuitem",class:"nav-level-one-link",href:this.menuRouteLink},this.navigationTitle),this.isNestedMenu||this.child&&this.child.length?e("button",{"aria-label":i.i18n.t("NavGroup:ariaMenuText"),role:"button",class:"caret carrot"}):void 0,this.isNestedMenu||this.child&&this.child.length?e("div",{class:"mega-menu-container",role:"menu"},e("div",{class:"mega-menu-nav"},e("div",{class:"dxp-hidden-lg-up overview-link"},e("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,role:"menuitem",class:"mega-menu-link",href:this.menuRouteLink},this.navigationTitle)),this.renderNestedMenu())):void 0)}get element(){return s(this)}static get style(){return"dxp-nav-group{height:100%}.dxp.dxp-nav-group.nav-level-one{position:relative}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{font-family:MarkForMC,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:400;text-decoration:none;line-height:24px;padding:17px 16px 18px;display:block;font-size:.875rem;letter-spacing:.5px;line-height:1.1}\@media (max-width:991px){.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{padding:24px 20px 24px 0}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link.active-link,.dxp.dxp-nav-group.nav-level-one .nav-level-one-link.active-link:hover{border-bottom:3px solid}}.dxp.dxp-nav-group .mega-menu-container,.dxp.dxp-nav-group.nav-level-one>ul{display:none}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot-down,.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small-down{position:absolute;right:0;top:0;width:100%;display:block;background:transparent;outline:0;border:0;z-index:9;overflow:hidden;text-indent:-999px}.dxp.dxp-nav-group .carrot-down:after,.dxp.dxp-nav-group .carrot-down:before,.dxp.dxp-nav-group .carrot-small-down:after,.dxp.dxp-nav-group .carrot-small-down:before,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot-small:before,.dxp.dxp-nav-group .carrot:after,.dxp.dxp-nav-group .carrot:before{content:\"\";display:block;width:1px;-webkit-transform:rotate(-40deg);transform:rotate(-40deg);position:absolute;right:4px}.dxp.dxp-nav-group .carrot-down:after,.dxp.dxp-nav-group .carrot-small-down:after,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot:after{-webkit-transform:rotate(40deg);transform:rotate(40deg)}.dxp.dxp-nav-group .carrot-down:focus,.dxp.dxp-nav-group .carrot-small-down:focus,.dxp.dxp-nav-group .carrot-small:focus,.dxp.dxp-nav-group .carrot:focus{outline:0}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot.down{height:63px}.dxp.dxp-nav-group .carrot.down:after,.dxp.dxp-nav-group .carrot.down:before,.dxp.dxp-nav-group .carrot:after,.dxp.dxp-nav-group .carrot:before{height:11px;top:21px}.dxp.dxp-nav-group .carrot.down:after,.dxp.dxp-nav-group .carrot:after{top:30px}.dxp.dxp-nav-group .carrot.down:before{-webkit-transform:rotate(55deg);transform:rotate(55deg);top:27px}.dxp.dxp-nav-group .carrot.down:after{-webkit-transform:rotate(-55deg);transform:rotate(-55deg);top:27px;right:13px}.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small.down{top:0;width:100%;height:44px;right:0}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small.down:before,.dxp.dxp-nav-group .carrot-small:after,.dxp.dxp-nav-group .carrot-small:before{height:7px;top:18px;right:2px}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small:after{top:23px}.dxp.dxp-nav-group .carrot-small.down:after,.dxp.dxp-nav-group .carrot-small.down:before{top:20px;right:3px}.dxp.dxp-nav-group .carrot-small.down:before{-webkit-transform:rotate(55deg);transform:rotate(55deg)}.dxp.dxp-nav-group .carrot-small.down:after{-webkit-transform:rotate(-55deg);transform:rotate(-55deg);right:8px}.dxp.dxp-nav-group .overview-link a{padding-top:0}.dxp.dxp-nav-group .dxp-nav-item{position:relative;background:transparent;margin:0}.dxp.dxp-nav-group .mega-menu-link{font-size:14px;line-height:24px;padding:10px 15px 10px 0;letter-spacing:0;display:block}.dxp.dxp-nav-group .mega-menu-link:hover+.mega-sub-menu{display:block}.dxp.dxp-nav-group .mega-sub-menu{display:none;margin-top:10px;margin-bottom:10px}.dxp.dxp-nav-group .mega-sub-menu a{display:block;padding:8px 0;font-size:14px;line-height:24px;letter-spacing:0}.dxp.dxp-nav-group .mega-menu-icon{display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav{border-top:0}\@media (min-width:992px){.dxp.dxp-nav-group.nav-level-one{margin:0 15px;padding:0;border:0;display:-ms-flexbox;display:flex;height:100%;position:static;max-width:100%;width:100%}.dxp.dxp-nav-group.nav-level-one>*{display:-ms-flexbox;display:flex}.dxp.dxp-nav-group.nav-level-one .nav-level-one-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-transform:capitalize}.dxp.dxp-nav-group.nav-level-one.active .nav-level-one-link,.dxp.dxp-nav-group.nav-level-one:hover .nav-level-one-link{text-decoration:none;border-top:4px solid transparent;margin-bottom:0}.dxp.dxp-nav-group.nav-level-one:hover .mega-menu-container{display:block;border-top:0}.dxp.dxp-nav-group .mega-menu-container{position:absolute;z-index:1;left:0;top:100%;width:100%;padding:40px 0;display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav{-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;margin:0}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav ul{position:static}.dxp.dxp-nav-group .mega-menu-container .mega-menu-nav .overview-link{display:none}.dxp.dxp-nav-group .mega-menu-container .mega-menu-link:hover,.dxp.dxp-nav-group .mega-menu-container .mega-sub-menu-link:hover{color:#cf4500}.dxp.dxp-nav-group .carrot,.dxp.dxp-nav-group .carrot-down,.dxp.dxp-nav-group .carrot-small,.dxp.dxp-nav-group .carrot-small-down{display:none}.dxp.dxp-nav-group .group-slot{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row}.dxp.dxp-nav-group dxp-nav-item{width:25%;display:-ms-flexbox;display:flex}.dxp.dxp-nav-group dxp-nav-item .dxp-nav-item{width:100%;padding-left:12px;padding-right:12px;border-right-width:0}.dxp.dxp-nav-group dxp-nav-item:first-of-type .dxp-nav-item{border-left-width:0;border-right-width:0}.dxp.dxp-nav-group .mega-menu-icon{display:block;width:100%;max-width:56px;margin-top:6px}.dxp.dxp-nav-group .mega-menu-link{font-size:24px;line-height:32px;margin-bottom:0;padding-right:0}.dxp.dxp-nav-group .mega-sub-menu{display:block;margin:0;margin-top:0}.dxp.dxp-nav-group .mega-sub-menu a{line-height:36px;font-size:14px;text-decoration:none;padding:0}}\@media (max-width:991px){.dxp.dxp-nav-group .mega-menu-container{max-height:0;-webkit-transition:max-height .2s ease,margin .1s ease-in;transition:max-height .2s ease,margin .1s ease-in;display:block;overflow:hidden}.dxp.dxp-nav-group .mega-menu-nav{padding:25px 0 25px 25px}.dxp.dxp-nav-group .mega-sub-menu{max-height:0;-webkit-transition:max-height .2s ease,margin .1s ease-in;transition:max-height .2s ease,margin .1s ease-in;display:block;overflow:hidden}.dxp.dxp-nav-group .mega-sub-menu.in{padding:0 25px}.dxp.dxp-nav-group .mega-sub-menu{margin-top:0;margin-bottom:0}.dxp.dxp-nav-group .in{-webkit-transition:max-height .6s ease,margin .2s ease-out;transition:max-height .6s ease,margin .2s ease-out;max-height:1000px}.dxp.dxp-nav-group .in.max-height-none{max-height:none}}.dxp.dxp-nav-group[dir=rtl] .nav-level-one-link{padding:24px 0 24px 20px}.dxp.dxp-nav-group[dir=rtl] a{text-align:right}.dxp.dxp-nav-group[dir=rtl] .carrot,.dxp.dxp-nav-group[dir=rtl] .carrot-down,.dxp.dxp-nav-group[dir=rtl] .carrot-small,.dxp.dxp-nav-group[dir=rtl] .carrot-small-down{left:0;right:auto;-webkit-transform:scale(-1);transform:scale(-1)}.dxp.dxp-nav-group[dir=rtl] .carrot.down:before{right:13px}.dxp.dxp-nav-group[dir=rtl] .carrot.down:after{right:4px}.dxp.dxp-nav-group[dir=rtl] .mega-menu-link{padding-right:0;padding-left:15px}.dxp.dxp-nav-group[dir=rtl] .mega-sub-menu{margin-left:0}.dxp.dxp-nav-group[dir=rtl] .mega-menu-nav{padding:25px 25px 25px 0}.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:after,.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:before{right:9px;top:20px}.dxp.dxp-nav-group[dir=rtl] .carrot-small.down:after{right:3px}\@media (min-width:992px){.dxp.dxp-nav-group[dir=rtl] .mega-sub-menu{margin-right:0}.dxp.dxp-nav-group[dir=rtl] dxp-nav-item .dxp-nav-item{border-right-width:0;border-left-width:1px}.dxp.dxp-nav-group[dir=rtl] dxp-nav-item:last-of-type .dxp-nav-item{border-left-width:0}.dxp.dxp-nav-group[dir=rtl] .nav-level-one-link{padding:0 12px}}\@media (min-width:1200px){.dxp.dxp-nav-group[dir=rtl] .icon-container,.dxp.dxp-nav-group[dir=rtl] .mega-menu-content{float:right}}"}};export{h as dxp_nav_group};