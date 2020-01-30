import{r as t,d as i,h as s,g as e}from"./p-8188e849.js";import{B as n}from"./p-16d6f0ca.js";import{m as a,C as h}from"./p-dcda0608.js";const r=class{constructor(i){t(this,i),this.isNestedMenu=!1}componentWillLoad(){this.base=new n(this,i),this.base.i18Init(i,"GroupNav",a),this.utility=new h}componentDidLoad(){const t=this.element.closest("dxp-nav-group"),i=this.element.querySelectorAll(".mega-sub-menu-link"),s=this.element.querySelectorAll("a");this.utility.parentMenuItem(t),this.utility.currentPageMenuLink(s),this.utility.setPosNSize(i)}componentDidUpdate(){const t=this.element.querySelectorAll(".mega-sub-menu-link");this.utility.setPosNSize(t)}routingHandler(t){this.base.routingEventListener(t),this.clickHandler()}clickHandler(){Array.from(this.element.closest("nav").querySelectorAll("a")).forEach(t=>t.classList.remove("active"));const t=this.element.closest("dxp-nav-group");t.removeAttribute("is-active"),t.querySelector(".nav-level-one-link").classList.add("active"),this.element.querySelector(".mega-menu-link").classList.add("active")}renderNestedMenu(){return[s("button",{"aria-label":i.i18n.t("GroupNav:ariaMenuText"),role:"button",class:"caret carrot-small"}),s("ul",{class:"mega-sub-menu",role:"none"},s("li",{class:"dxp-hidden-lg-up overview-link",role:"none"},s("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,"aria-haspopup":this.isNestedMenu&&"true",role:"menuitem",class:"mega-sub-menu-link",href:this.menuRouteLink},this.navigationTitle)),s("ul",null,s("li",null,this.child?this.child.map(t=>s("dxp-nav-sub-item",{"link-title":t.linkTitle,"navigation-title":t.navigationTitle,"menu-route-link":t.menuRouteLink,"accessibility-text":t.accessibilityText})):s("slot",null))))]}render(){return i.log.debug(this.element.tagName,"render()","in dxp-nav-item render() : DEVELOPMENT"),s("div",{class:this.base.componentClass()},s("div",{class:"icon-container dxp-hidden-md-down"},!!this.src&&s("img",{alt:this.altText?this.altText:this.src,src:this.src,class:"mega-menu-icon"})),s("div",{class:"mega-menu-content"},s("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,"aria-haspopup":this.isNestedMenu&&"true",role:"menuitem",class:"mega-menu-link",href:this.menuRouteLink},this.navigationTitle),(this.isNestedMenu||this.child&&this.child.length)&&this.renderNestedMenu()))}get element(){return e(this)}static get style(){return".dxp.dxp-nav-item .mega-menu-content{width:100%;position:relative}\@media (min-width:992px){.dxp.dxp-nav-item .icon-container{width:33.33333%}}\@media (min-width:1200px){.dxp.dxp-nav-item .icon-container{padding-right:12px;padding-left:12px;min-width:95px;max-width:95px;min-height:1px;float:left}.dxp.dxp-nav-item .mega-menu-content{width:66.66667%;padding-left:0;float:left}}"}},l=class{constructor(i){t(this,i)}componentWillLoad(){this.base=new n(this,i),this.base.i18Init(i,"GroupNav",a),this.utility=new h}componentDidLoad(){const t=this.element.closest("dxp-nav-item"),i=this.element.querySelectorAll("a");this.utility.parentMenuItem(t),this.utility.currentPageMenuLink(i)}routingHandler(t){this.base.routingEventListener(t),this.clickHandler()}clickHandler(){Array.from(this.element.closest("nav").querySelectorAll("a")).forEach(t=>t.classList.remove("active"));const t=this.element.closest("dxp-nav-group");t.removeAttribute("is-active"),t.querySelector(".nav-level-one-link").classList.add("active"),this.element.querySelector(".mega-sub-menu-link").classList.add("active")}render(){return i.log.debug(this.element.tagName,"render()","in dxp-nav-sub-item render() : DEVELOPMENT"),s("li",{role:"none"},s("a",{title:this.linkTitle?this.linkTitle:this.navigationTitle,"aria-label":this.accessibilityText?this.accessibilityText:this.linkTitle,role:"menuitem",class:"mega-sub-menu-link",href:this.menuRouteLink},this.navigationTitle))}get element(){return e(this)}static get style(){return".dxp.dxp-nav-sub-item{background:transparent}\@media (min-width:1200px){.dxp.dxp-nav-sub-item .dxp-col-lg-4{padding-left:24px}}\@media (min-width:1200px){.dxp.dxp-nav-sub-item [dir=rtl] .dxp-col-lg-4{padding-right:24px;padding-left:0}}"}};export{r as dxp_nav_item,l as dxp_nav_sub_item};