import{r as t,c as e,d as s,h as i,g as h}from"./p-8188e849.js";import{B as a}from"./p-16d6f0ca.js";const r=class{constructor(s){t(this,s),this.alignment="horizontal",this.radioSelected=e(this,"radioSelected",7)}componentWillLoad(){this.base=new a(this,s)}componentDidLoad(){this.element.querySelector("label").innerHTML=this.radioKey}routingHandler(t){this.base.routingEventListener(t)}handleChange(t){this.radioSelected.emit({name:t.target.getAttribute("name"),value:t.target.getAttribute("value"),isChecked:t.target.checked})}render(){const t=[i("link",{rel:"stylesheet",href:""}),[this.theme&&i("link",{rel:"stylesheet",href:""})],[this.theme&&i("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-radio-button.min.css`})]];return i("div",{class:`${this.base.componentClass()} ${this.alignment}`,dir:this.dir,"data-theme":this.theme},t,i("input",{onChange:t=>this.handleChange(t),id:this.radioKey,type:"radio",key:this.radioKey,name:this.name,value:this.radioValue,checked:this.checked,disabled:this.isDisabled}),i("label",{htmlFor:this.radioKey},this.radioKey))}get element(){return h(this)}static get style(){return"div.dxp.dxp-radio-button{margin:10px 10px 0}div.dxp.dxp-radio-button.horizontal{display:-ms-inline-flexbox;display:inline-flex}div.dxp.dxp-radio-button.vertical{display:grid}div.dxp.dxp-radio-button input[type=radio]{position:absolute;opacity:0;width:0}div.dxp.dxp-radio-button input[type=radio]+label{padding-left:26px;position:relative;margin:0}div.dxp.dxp-radio-button input[type=radio]+label:before{content:\"\";width:18px;height:18px;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.dxp.dxp-radio-button input[type=radio][disabled]{pointer-events:none}div.dxp.dxp-radio-button input[type=radio][disabled]+label{cursor:not-allowed}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label{padding-left:0;padding-right:26px}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label:before{left:auto;right:0}"}};export{r as dxp_radio_button};