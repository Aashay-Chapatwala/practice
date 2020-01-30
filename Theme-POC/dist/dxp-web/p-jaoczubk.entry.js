import{r as t,d as i,h as s,g as e,H as h}from"./p-8188e849.js";import{B as n}from"./p-16d6f0ca.js";const r=class{constructor(i){t(this,i),this.contentItemsData=[],this.headerAlignment="center",this.hidePaginationWhenSingle=!0,this.itemsPerPage=6,this.paginationAlignment="center"}contentDataChangeHandler(){this.contentItemsData=this.contentData,this.resetContentItemGrid()}ctaChangeHandler(){this.cta&&this.base.createNestedMarkup(this.ctaContainer,"dxp-cta-list",this.cta)}nextpage(t){for(this.setIndexToSliceArray(t.detail.firstUnitIndex,t.detail.lastUnitIndex);this.contentItemsContainer.hasChildNodes();)this.contentItemsContainer.removeChild(this.contentItemsContainer.firstChild);this.setContentItemGrid()}routingHandler(t){this.base.routingEventListener(t)}async componentWillLoad(){this.base=new n(this,i),this.apiEndpoint&&(this.contentData=await i.api(this.apiEndpoint));const t=[];this.contentItems=this.element.querySelectorAll("dxp-content-item"),Array.from(this.contentItems).forEach(i=>{const s=this.base.returnBooleanValue("content-logo"===i.getAttribute("content-type"));t.push(s)}),t.includes(!1)||(this.isLogos=!0,this.gridCols=`dxp-col-6 ${this.gridCols}`),this.colDistribution(this.column)}componentDidLoad(){this.base.createNestedMarkup(this.contentItemsContainer,"dxp-content-item",this.contentData),this.ctaChangeHandler(),0===this.contentItems.length&&(this.contentItems=this.base.shadowRootQuerySelector(this.element,"dxp-content-item",!0)),this.contentItemsData=Array.from(this.contentItems),this.resetContentItemGrid()}appendNestedMarkup(t,i,s){const e=document.createDocumentFragment(),h=[];return s&&i&&t&&(s.forEach(t=>{const s=document.createElement(i),n=this.base.formatDataObjectKeys(t);Object.assign(s,n),e.appendChild(s),h.push(s)}),t.appendChild(e)),h}colDistribution(t){this.gridCols=`${5!==t?`dxp-col-lg-${12/t}`:"col-lg-1-5"} ${`dxp-col-md-${12/(t>1?2:t)}`}`}resetContentItemGrid(){for(this.contentItemStartIndex=0,this.contentItemEndIndex=this.enablePagination?this.itemsPerPage:this.contentItems.length;this.contentItemsContainer.hasChildNodes();)this.contentItemsContainer.removeChild(this.contentItemsContainer.firstChild);this.setContentItemGrid()}setContentItemGrid(){this.visibleContentItems=this.contentItemsData.slice(this.contentItemStartIndex,this.contentItemEndIndex),this.visibleContentItems.forEach((t,i)=>{const s=document.createElement("div");s.className=`sc-dxp-content-item-grid ${0===i&&this.highlightFirstContentItem?"dxp-col-lg-12 dxp-col-md-12":this.gridCols}`,0===i&&this.highlightFirstContentItem&&t.setAttribute("orientation","horizontal"),t.nodeName?s.appendChild(t):this.appendNestedMarkup(s,"dxp-content-item",[t]),this.contentItemsContainer.appendChild(s)})}setIndexToSliceArray(t,i){this.contentItemStartIndex=t,this.contentItemEndIndex=i}hostData(){return i.log.debug(this.element.tagName,"hostData()","dxp-content-item-grid -hostData"),{class:"hydrated"}}__stencil_render(){const t=[s("link",{rel:"stylesheet",href:""}),[this.theme&&s("link",{rel:"stylesheet",href:""})],[this.theme&&s("link",{rel:"stylesheet",href:`${i.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-content-item-grid.min.css`})]];return s("div",{class:`${this.base.componentClass()} sc-dxp-content-item-grid`,dir:this.dir,"data-theme":this.theme},t,this.gridEyebrowText&&s("p",{class:`dxp-title-eyebrow sc-dxp-content-item-grid\n         ${"left"===this.headerAlignment?"dxp-text-left":"right"===this.headerAlignment?"dxp-text-right":"center"}`,innerHTML:this.gridEyebrowText}),this.gridTitle&&s("h3",{class:"left"===this.headerAlignment?"dxp-text-left":"right"===this.headerAlignment?"dxp-text-right":"center"},s("a",{href:this.gridTitleUrl,target:this.titleTarget?"_blank":"_self",innerHTML:this.gridTitle})),this.gridDescription&&s("p",{class:`description ${"left"===this.headerAlignment?"dxp-text-left":"right"===this.headerAlignment?"dxp-text-right":"center"}`,innerHTML:this.gridDescription}),s("div",{class:"dxp-row sc-dxp-content-item-grid",ref:t=>this.contentItemsContainer=t},s("slot",null)),this.enablePagination&&s("dxp-pagination",{"units-per-page":this.itemsPerPage,"total-units":this.contentItemsData.length,"hide-when-single-page":this.hidePaginationWhenSingle,position:this.paginationAlignment,"display-text":this.paginationDisplayText,"first-button-label":this.firstButtonLabel,"last-button-label":this.lastButtonLabel,"previous-button-label":this.previousButtonLabel,"next-button-label":this.nextButtonLabel,"of-text":this.ofText,"page-text":this.pageText,"and-text":this.andText,"validation-message":this.paginationValidationMessage,"input-accessibility-text":this.pageInputAccessibilityText}),s("div",{class:"cta-block",ref:t=>this.ctaContainer=t},s("slot",{name:"cta-list"})))}get element(){return e(this)}static get watchers(){return{contentData:["contentDataChangeHandler"],cta:["ctaChangeHandler"]}}render(){return s(h,this.hostData(),this.__stencil_render())}static get style(){return"div.dxp.dxp-content-item-grid .dxp-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-content-item-grid .dxp-row:after{content:\"\";display:block;clear:both}div.dxp.dxp-content-item-grid .dxp-title-eyebrow{padding-bottom:6px}\@media only screen and (max-width:767px){div.dxp.dxp-content-item-grid .dxp-title-eyebrow{padding-bottom:11px}}div.dxp.dxp-content-item-grid h3{text-align:center}div.dxp.dxp-content-item-grid p{padding-bottom:2.4rem;text-align:center;margin-bottom:0}\@media only screen and (max-width:767px){div.dxp.dxp-content-item-grid p:first-of-type{font-size:.75rem}}\@media only screen and (max-width:767px){div.dxp.dxp-content-item-grid p{padding-bottom:1.4rem}}div.dxp.dxp-content-item-grid .dxp-text-left{margin-left:0}div.dxp.dxp-content-item-grid .dxp-text-right{margin-right:1rem}div.dxp.dxp-content-item-grid .dxp-row .dxp-col-12,div.dxp.dxp-content-item-grid .dxp-row .sc-dxp-content-item-grid{margin-bottom:3rem}\@media (min-width:992px){div.dxp.dxp-content-item-grid .col-lg-1-5{width:20%}}\@media only screen and (max-width:767px){div.dxp.dxp-content-item-grid .dxp-row{margin-left:0;margin-right:0}}"}};export{r as dxp_content_item_grid};