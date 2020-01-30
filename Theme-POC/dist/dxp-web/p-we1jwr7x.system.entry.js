System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,i,n,r,a;return{setters:[function(e){t=e.r;i=e.d;n=e.h;r=e.g},function(e){a=e.B}],execute:function(){var s=e("dxp_image_grid",function(){function e(e){t(this,e);this.IMAGE_COUNT={"size-1x1":8,"size-2x2":2,"size-2x2--l":5,"size-2x2--c":5,"size-2x2--r":5}}e.prototype.imageContentDataChangeHandler=function(){this.base.createNestedMarkup(this.imagesContainer,"dxp-image",this.imageContentData)};e.prototype.componentWillLoad=function(){this.base=new a(this,i)};e.prototype.componentDidLoad=function(){this.imageContentDataChangeHandler();var e=this.element&&this.element.querySelector(".image-grid-container")?this.element.querySelector(".image-grid-container"):this.element.querySelector(".image-grid-container");var t=this.imageContentData?e.querySelectorAll("dxp-image"):this.element.querySelectorAll("dxp-image");this.createImageGridContainer(e,t);this.displayImagesInGrid(e,t)};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.createImageGridContainer=function(e,t){var i=this.IMAGE_COUNT[this.layoutOption];for(var n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];if(Number(a)>=i){t[a].remove()}}if(t.length>=1){for(var a=0;a<i;a++){var s=document.createElement("div");var o=document.createElement("div");s.classList.add("image-panel");s.classList.add("sc-dxp-image-grid");o.classList.add("image-panel-content");o.classList.add("sc-dxp-image-grid");s.appendChild(o);e.appendChild(s)}}};e.prototype.displayImagesInGrid=function(e,t){var i=e.querySelectorAll(".image-panel-content");Array.from(i).forEach((function(e,i){if(t[i]){e.appendChild(t[i])}else{e.parentElement.classList.add("blank-panel")}}));if(this.element&&this.element.querySelector("slot")){this.element.querySelector("slot").remove()}};e.prototype.render=function(){var e=this;i.log.debug(this.element.tagName,"render()","in dxp-image-grid render() : "+"DEVELOPMENT");var t=[n("link",{rel:"stylesheet",href:""}),[this.theme&&n("link",{rel:"stylesheet",href:""})]];return n("div",{class:this.base.componentClass()+" sc-dxp-image-grid",dir:this.dir,"data-theme":this.theme},t,n("div",{id:"dxp-image-grid-container",class:"dxp-image-grid-container"},n("div",{class:this.layoutOption+" sc-dxp-image-grid image-grid-container",ref:function(t){return e.imagesContainer=t}},n("slot",null))))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{imageContentData:["imageContentDataChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-image-grid .image-grid-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-flex-flow:column wrap;-moz-flex-flow:column wrap;max-width:100%;height:600px}div.dxp.dxp-image-grid .image-grid-container .image-panel{width:25%;overflow:hidden;height:300px}div.dxp.dxp-image-grid .image-grid-container .image-panel.blank-panel{background-color:#5b6770}div.dxp.dxp-image-grid .size-2x2 .image-panel,div.dxp.dxp-image-grid .size-2x2--c .image-panel:nth-child(3),div.dxp.dxp-image-grid .size-2x2--l .image-panel:first-child,div.dxp.dxp-image-grid .size-2x2--r .image-panel:nth-child(5){height:600px;width:50%}\@media (max-width:1200px){div.dxp.dxp-image-grid .dxp-image-grid-container{display:-ms-flexbox;display:flex;overflow:hidden;height:300px;position:relative;width:100%;-ms-flex-flow:nowrap;flex-flow:nowrap}div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container{overflow:auto;height:320px;-webkit-overflow-scrolling:touch}div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container .image-panel{width:300px}div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container.size-1x1{width:2400px;max-width:2400px}div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container.size-2x2--c,div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container.size-2x2--l,div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container.size-2x2--r{width:1500px;max-width:1500px}div.dxp.dxp-image-grid .dxp-image-grid-container .image-grid-container.size-2x2{width:600px;max-width:600px}div.dxp.dxp-image-grid .size-2x2 .image-panel,div.dxp.dxp-image-grid .size-2x2--c .image-panel:nth-child(3),div.dxp.dxp-image-grid .size-2x2--l .image-panel:first-child,div.dxp.dxp-image-grid .size-2x2--r .image-panel:nth-child(5){height:300px;width:300px}}"},enumerable:true,configurable:true});return e}())}}}));