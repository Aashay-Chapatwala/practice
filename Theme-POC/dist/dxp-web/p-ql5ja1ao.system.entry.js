System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,i,l,s,n,a;return{setters:[function(e){t=e.r;i=e.c;l=e.d;s=e.h;n=e.g},function(e){a=e.B}],execute:function(){var o={en:{hello:"Hello World!"},"en-US":{hello:"Hello World! en-US"},es:{hello:"Hola Mundo!"},"es-ES":{hello:"Hola Mundo! es-ES"}};var c=e("dxp_toggle_switch",function(){function e(e){t(this,e);this.labelPosition="left";this.analyticsDataEmitter=i(this,"dxp_comp",7);this.clickHandler=i(this,"clickHandler",7);this.toggleDataEmitter=i(this,"toggleDataEmitter",7)}e.prototype.componentWillLoad=function(){this.base=new a(this,l);this.base.i18Init(l,"ToggleSwitch",o);this.labelClass=this.labelPosition==="left"?"toggle-content toggle-container-left":"toggle-content toggle-container-right";this.componentClass=this.labelPosition==="left"?"toggle-content toggle-container-right":"toggle-content toggle-container-left"};e.prototype.onClick=function(e){this.clickHandler.emit(e);this.base.routingEventListener(e)};e.prototype.emitAnalyticsData=function(){var e;e=this.element.querySelector("[type=checkbox]");var t={di_comp_name:this.element.tagName,di_comp_label:this.label,di_comp_value:e&&e.value,di_comp_status:e&&e.checked};this.analyticsDataEmitter.emit(t);l.log.info(this.element.tagName,"emitAnalyticsData()",t)};e.prototype.emitData=function(){var e;e=this.element.querySelector("[type=checkbox]");var t={value:e&&e.value,status:e&&e.checked,disabled:e&&e.disabled};this.emitAnalyticsData();this.toggleDataEmitter.emit(t)};e.prototype.render=function(){var e=this;l.log.debug(this.element.tagName,"render()","in dxp-toggle-switch render() : "+"DEVELOPMENT");var t=[s("link",{rel:"stylesheet",href:""}),[this.theme&&s("link",{rel:"stylesheet",href:""})],[this.theme&&s("link",{rel:"stylesheet",href:l.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-toggle-switch.min.css"})]];return s("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,s("div",{class:"toggle-container"},s("div",{class:this.labelClass},this.label&&s("p",null,this.label,this.description&&s("br",null),this.description&&s("span",{class:"dxp-font-size-sm"},this.description,"‎")),s("slot",null)),s("div",{class:this.componentClass},s("label",{class:"switch"},s("input",{type:"checkbox",key:this.label,name:this.label,value:this.value,"aria-label":this.label,checked:this.checked,disabled:this.disabled,onClick:function(){return e.emitData()}}),s("span",{class:"slider round"})))))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-toggle-switch .switch{position:relative;display:inline-block;width:40.3px;height:24px;border-radius:1px}div.dxp.dxp-toggle-switch .switch input{opacity:0;width:0;height:0}div.dxp.dxp-toggle-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;-webkit-transition:.4s;transition:.4s}div.dxp.dxp-toggle-switch .slider:before{position:absolute;content:\"\";height:20px;width:20px;left:1px;bottom:1px;right:1px;top:1px;-webkit-transition:.4s;transition:.4s}div.dxp.dxp-toggle-switch input:disabled+.slider{opacity:.5}div.dxp.dxp-toggle-switch input:disabled:checked+.slider{background-color:#f38b00;opacity:.5}div.dxp.dxp-toggle-switch input:disabled+.slider:before{opacity:.5}div.dxp.dxp-toggle-switch input:checked+.slider:before{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}div.dxp.dxp-toggle-switch[dir=rtl] input:checked+.slider:before{-webkit-transform:translateX(-16px);-ms-transform:translateX(-16px);transform:translateX(-16px)}div.dxp.dxp-toggle-switch .slider.round{border-radius:24px;border:1px solid}div.dxp.dxp-toggle-switch .slider.round:before{border-radius:50%}div.dxp.dxp-toggle-switch .toggle-container{display:-ms-flexbox;display:flex}div.dxp.dxp-toggle-switch .toggle-content{margin:0 15px;word-wrap:break-word}div.dxp.dxp-toggle-switch .toggle-container-left{-ms-flex-order:1;order:1}div.dxp.dxp-toggle-switch .toggle-container-right{-ms-flex-order:2;order:2}"},enumerable:true,configurable:true});return e}())}}}));