System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,n,r,s,i;return{setters:[function(e){t=e.r;n=e.d;r=e.h;s=e.g},function(e){i=e.B}],execute:function(){var o=e("dxp_message_text",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){this.base=new i(this,n)};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.render=function(){n.log.debug(this.element.tagName,"render()","in dxp-message render() : "+"DEVELOPMENT");return r("div",{class:this.base.componentClass(),dir:this.dir},this.text?r("span",{class:"ui-messages-summary"},this.text):r("slot",null))};Object.defineProperty(e.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-message-text{padding:5px 60px 5px 15px}div.dxp.dxp-message-text[dir=rtl]{padding:5px 15px 5px 60px}"},enumerable:true,configurable:true});return e}())}}}));