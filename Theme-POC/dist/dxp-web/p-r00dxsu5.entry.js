import{r as t,d as e,h as s,g as i}from"./p-8188e849.js";import{B as r}from"./p-16d6f0ca.js";const h=class{constructor(e){t(this,e),this.reRender={}}componentWillLoad(){this.base=new r(this,e)}windowResize(){this.reRender=Object.assign({},this.reRender)}componentDidRender(){e.log.debug(this.element.tagName,"componentDidRender()","dxp-Flex layout-item"),this.element.classList.add("hydrated")}setColumnStyles(){const t=this.base.getDeviceWidthType(),e={};switch(e["background-image"]=`url(${this.bgImage})`,e["background-size"]="cover",e["background-repeat"]="no-repeat",e["background-position"]="center center",t){case"sm":e.padding=this.paddingStyleSm||"0px";break;case"md":e.padding=this.paddingStyleMd||this.paddingStyleSm||"0px";break;case"lg":e.padding=this.paddingStyleLg||this.paddingStyleMd||this.paddingStyleSm||"0px";break;case"xl":e.padding=this.paddingStyleXl||this.paddingStyleLg||this.paddingStyleMd||this.paddingStyleSm||"0px";break;default:e.padding=this.paddingStyleSm||"0px"}return e}render(){e.log.debug(this.element.tagName,"render()","in dxp-flex-layout-item render() : DEVELOPMENT");const t=[s("link",{rel:"stylesheet",href:""}),[this.theme&&s("link",{rel:"stylesheet",href:""})]];return s("div",{class:`${this.base.componentClass()} `,"data-theme":this.theme,style:Object.assign({},this.setColumnStyles())},t,s("slot",null))}get element(){return i(this)}static get style(){return"div.dxp.dxp-flex-layout-item{min-height:50px;height:100%}"}};export{h as dxp_flex_layout_item};