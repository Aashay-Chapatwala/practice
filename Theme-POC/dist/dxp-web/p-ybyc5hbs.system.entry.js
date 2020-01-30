System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-8d2aece2.system.js"],(function(e){"use strict";var t,i,s,o,n,r;return{setters:[function(e){t=e.r;i=e.d;s=e.h;o=e.g},function(e){n=e.B},function(e){r=e.m}],execute:function(){var a="image-background";var l=e("dxp_tile",function(){function e(e){t(this,e);this.isVideoShow=false;this.backgroundType=a;this.iconType="light"}e.prototype.componentWillLoad=function(){this.base=new n(this,i);this.base.i18Init(i,"Tile",r)};e.prototype.handleUpkeyEvents=function(e){var t=e.key||e.code;if(t.toLowerCase()==="escape"&&this.isVideoShow){this.isVideoShow=false}};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.closeIconClickHandler=function(){var e=document.querySelector("body");e.style.overflow="unset";var t=this.element.parentElement.parentElement;t.classList.remove("show-popup");var i=this.base.shadowRootQuerySelector(this.element,".popup");i.classList.remove("fadein");i.classList.add("fadeout")};e.prototype.getContentOfVideo=function(){var e=this;return s("div",{class:"content-video"},s("img",{class:"content-background-img",src:this.srcPoster,alt:i.i18n.t("Tile:videoPosterImageText")}),s("a",{class:"play-icon","aria-label":i.i18n.t("Tile:videoPlayBtnText"),onClick:function(t){return e.toggleVideo(true,t)}},s("img",{alt:"image",src:"https://asset.mastercard.com/dxp-ui/assets"+"/images/icons/play-icon-"+this.iconType+".png"})))};e.prototype.getVideoOverlay=function(){var e=this;var t=document.querySelector("body");t.style.overflow="hidden";return s("div",{class:"overlay-video-block"},s("a",{role:"button",class:"btn-close","aria-label":i.i18n.t("TileVideo:close"),onClick:function(t){return e.toggleVideo(false,t)}},s("span",{class:"dxp-icon dxp-icon-large dxp-icon-close white-cross-icon"})),s("div",{class:"align-middle"},s("dxp-video",{type:this.videoType,"icon-type":this.iconType,"src-video":this.src,"src-poster":this.srcPoster,autoplay:this.autoPlay,"disable-controls":this.disableControls,"video-name":this.videoName,"video-description":this.videoDescription,"video-upload-date":this.videoUploadDate})))};e.prototype.imageClickHandler=function(e){var t=this.base.shadowRootQuerySelector(this.element,".content-video");if(t){this.toggleVideo(true,e)}else{var i=this.element.parentElement.parentElement.style.getPropertyValue("left").match(/(-?[0-9\.]+)/g);var s=i;var o=Math.abs(s);if(!this.href){var n=this.element.parentElement.parentElement;n.classList.add("show-popup");var r=this.base.shadowRootQuerySelector(this.element,".popup");r.style.left=o+"px";r.classList.remove("fadeout");r.classList.add("fadein");r.classList.remove("dxp-none")}}};e.prototype.toggleVideo=function(e,t){t.preventDefault();this.isVideoShow=e;var i=document.querySelector("body");i.style.overflow="unset"};e.prototype.render=function(){var e=this;i.log.debug(this.element.tagName,"render()","in dxp-tile render() : "+"DEVELOPMENT");var t=[s("link",{rel:"stylesheet",href:""}),[this.theme&&s("link",{rel:"stylesheet",href:""})],[this.theme&&s("link",{rel:"stylesheet",href:i.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-tile-grid.min.css"})]];return s("div",{class:this.base.componentClass()+" "+(this.isSquare?"square":""),dir:this.dir,"data-theme":this.theme},t,s("div",{class:"tile-container",tabindex:"1"},s("div",{class:"media-container",onClick:function(t){return!e.isSquare&&e.imageClickHandler(t)}},this.backgroundType===a?s("dxp-image",{src:this.src,"src-lg":this.srcLg,"src-md":this.srcMd,responsive:this.responsive,href:this.href?this.href:"javascript:void(0)","open-in-new-tab":this.openInNewTab,"focal-point":this.focalPoint}," "):this.backgroundType==="video-background"&&this.getContentOfVideo(),s("div",{class:"cta"},this.badgeText&&s("div",{class:"badge"}," ",s("span",{class:"badge-cont"},s("span",{class:"badge-text"},this.badgeText))," "),this.eyebrowTitle&&s("p",{class:"dxp-title-eyebrow dxp-font-size-sm"},this.eyebrowTitle),this.tileCaption&&s("h5",{class:"dxp-title-4"},this.tileCaption),this.description&&s("p",{class:"desc dxp-font-size-sm"},this.description),s("slot",{name:"cta"})))),s("div",{class:"popup dxp-scrollable-container dxp-none"},s("button",{class:"dxp-icon dxp-icon-large dxp-icon-close","aria-label":i.i18n.t("Popup:closeIcon"),onClick:function(){e.closeIconClickHandler()}}),s("div",{class:"popup-contents dxp-scrollable"},s("slot",null))),this.isVideoShow&&this.getVideoOverlay())};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-tile.tile-3{width:50%}div.dxp.dxp-tile .video-container{position:fixed;top:0;bottom:0;left:0;right:0}div.dxp.dxp-tile .overlay-video-block{position:fixed;top:0;left:0;width:100%;min-height:100vh;z-index:998;-webkit-transition:opacity .3s ease-in 0s;transition:opacity .3s ease-in 0s}div.dxp.dxp-tile .overlay-video-block .align-middle{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:70vw;padding:0 5%}div.dxp.dxp-tile .overlay-video-block .btn-close{position:absolute;right:2%;top:2%;border:none;cursor:pointer;margin:5px 5px 0 0;z-index:2}div.dxp.dxp-tile .tile-container{height:100%;position:relative}div.dxp.dxp-tile .tile-container:hover{cursor:pointer;opacity:.5;filter:alpha(opacity=50)}div.dxp.dxp-tile .tile-container .content-background-img,div.dxp.dxp-tile .tile-container .media-container{height:536px}div.dxp.dxp-tile .tile-container .content-background-img .play-icon,div.dxp.dxp-tile .tile-container .media-container .play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}div.dxp.dxp-tile .tile-container .content-background-img .play-icon img,div.dxp.dxp-tile .tile-container .media-container .play-icon img{width:72px;height:72px}div.dxp.dxp-tile .tile-container .badge{padding-bottom:14px}div.dxp.dxp-tile .tile-container .badge-cont{height:25px;width:52px;padding:.25rem .563rem}div.dxp.dxp-tile .tile-container .badge-text{height:15px;width:36px;text-align:center}div.dxp.dxp-tile .tile-container .dxp-title-4{margin-bottom:14px}div.dxp.dxp-tile .tile-container .cta{position:absolute;bottom:24px;left:32px;right:32px}div.dxp.dxp-tile .tile-container .cta .dxp-title-eyebrow{margin-bottom:12px}div.dxp.dxp-tile .tile-container .cta .desc{margin-bottom:15px}div.dxp.dxp-tile.square,div.dxp.dxp-tile .square{width:100%;height:392px;overflow:hidden}div.dxp.dxp-tile.square .image,div.dxp.dxp-tile .square .image{display:contents}div.dxp.dxp-tile.square div.cta,div.dxp.dxp-tile .square div.cta{position:absolute;bottom:24px;left:24px;right:24px}div.dxp.dxp-tile.square div.cta .badge,div.dxp.dxp-tile .square div.cta .badge{padding-bottom:14px}div.dxp.dxp-tile.square div.cta .badge-cont,div.dxp.dxp-tile .square div.cta .badge-cont{height:25px;width:52px;padding:.25rem .563rem}div.dxp.dxp-tile.square div.cta .badge-text,div.dxp.dxp-tile .square div.cta .badge-text{height:15px;width:36px;text-align:center}div.dxp.dxp-tile.square div.cta .dxp-title-eyebrow,div.dxp.dxp-tile .square div.cta .dxp-title-eyebrow{margin-bottom:20px}div.dxp.dxp-tile.square div.cta .dxp-title-4,div.dxp.dxp-tile .square div.cta .dxp-title-4{margin-bottom:24px}div.dxp.dxp-tile .popup{width:100%;height:536px;position:absolute;display:block;top:0;left:0;z-index:1}div.dxp.dxp-tile .popup:after{content:\"\";display:block;clear:both}div.dxp.dxp-tile .popup-contents{height:536px;position:relative;overflow-y:auto}div.dxp.dxp-tile .popup h1{float:left}div.dxp.dxp-tile .popup dxp-image{float:right;width:50%;height:400px;overflow:hidden}div.dxp.dxp-tile .popup .dxp-icon-close{position:absolute;right:32px;top:16px;z-index:9;background:transparent;border:none}div.dxp.dxp-tile .popup .image-overlay dxp-image{width:100%}\@-webkit-keyframes fadeout{0%{opacity:1}to{opacity:0}}\@keyframes fadeout{0%{opacity:1}to{opacity:0}}div.dxp.dxp-tile .popup.fadeout{animation:fadeout 1s ease-in forwards;-webkit-animation:fadeout 1s ease-in forwards;-moz-animation:fadeout 1s ease-in forwards;-ms-animation:fadeout 1s ease-in forwards;-o-animation:fadeout 1s ease-in forwards;pointer-events:none}\@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}\@keyframes fadein{0%{opacity:0}to{opacity:1}}div.dxp.dxp-tile .popup.fadein{animation:fadein 1s ease-in forwards;-webkit-animation:fadein 1s ease-in forwards;-moz-animation:fadein 1s ease-in forwards;-ms-animation:fadein 1s ease-in forwards;-o-animation:fadein 1s ease-in forwards}div.dxp.dxp-tile.dxp-scrollable-container{margin-top:0}div.dxp.dxp-tile.show-popup{position:static;z-index:999;left:0}div.dxp.dxp-tile.show-popup .popup{display:block}\@media screen and (max-width:767px){div.dxp.dxp-tile .tile-container .media-container{height:323px}div.dxp.dxp-tile .tile-container .media-container .content-video,div.dxp.dxp-tile .tile-container .media-container img.content-background-img{width:100%;height:323px}div.dxp.dxp-tile .tile-container .media-container .cta{bottom:30px;left:16px;right:16px}div.dxp.dxp-tile .tile-container .media-container .cta .desc{margin-bottom:15px}div.dxp.dxp-tile.square .media-container div.cta{position:absolute;bottom:100px;left:16px;right:16px}}\@media (min-width:768px){div.dxp.dxp-tile.square .tile-container .media-container{height:392px}div.dxp.dxp-tile.square .tile-container .content-video,div.dxp.dxp-tile.square .tile-container img.content-background-img{width:100%;height:392px}div.dxp.dxp-tile .tile-container.media-container{height:347px}}\@media (min-width:992px){div.dxp.dxp-tile .tile-container .media-container{height:536px}div.dxp.dxp-tile .tile-container .media-container .content-video,div.dxp.dxp-tile .tile-container .media-container img.content-background-img{width:100%;height:536px}}"},enumerable:true,configurable:true});return e}())}}}));