var __awaiter=this&&this.__awaiter||function(e,t,o,s){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function i(e){try{c(s.next(e))}catch(t){r(t)}}function a(e){try{c(s["throw"](e))}catch(t){r(t)}}function c(e){e.done?o(e.value):n(e.value).then(i,a)}c((s=s.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,n,r,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return c([e,t])}}function c(i){if(s)throw new TypeError("Generator is already executing.");while(o)try{if(s=1,n&&(r=i[0]&2?n["return"]:i[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;if(n=0,r)i=[i[0]&2,r.value];switch(i[0]){case 0:case 1:r=i;break;case 4:o.label++;return{value:i[1],done:false};case 5:o.label++;n=i[1];i=[0];continue;case 7:i=o.ops.pop();o.trys.pop();continue;default:if(!(r=o.trys,r=r.length>0&&r[r.length-1])&&(i[0]===6||i[0]===2)){o=0;continue}if(i[0]===3&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(i[0]===6&&o.label<r[1]){o.label=r[1];r=i;break}if(r&&o.label<r[2]){o.label=r[2];o.ops.push(i);break}if(r[2])o.ops.pop();o.trys.pop();continue}i=t.call(e,o)}catch(a){i=[6,a];n=0}finally{s=r=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var s=Array(e),n=0,t=0;t<o;t++)for(var r=arguments[t],i=0,a=r.length;i<a;i++,n++)s[n]=r[i];return s};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,o,s,n,r,i;return{setters:[function(e){t=e.r;o=e.c;s=e.d;n=e.h;r=e.g},function(e){i=e.B}],execute:function(){var a={en:{placeholder:"All Location",searchIconAccessibilityText:"Click search icon",listText:"Select search item from list",clear:"Click to clear search box",close:"Click to close search popup",closeText:"Close",customMessage:"Please enter search keyword. Autosuggestions will be shown after 3 characters",noResultFound:"No result found"},es:{placeholder:"Buscar",searchIconAccessibilityText:"Haga clic en el icono de búsqueda",listText:"Seleccione el elemento de búsqueda de la lista",selectedItem:"Seleccionado actualmente {{item}}",close:"Haga clic para cerrar la ventana emergente de búsqueda",closeText:"Cerrar",clearText:"Claro",customMessage:"Por favor introduzca la palabra clave de búsqueda. Se mostrarán autosugestiones después de 3 caracteres"}};var c;var l=new XMLHttpRequest;var h=function(e,t){return new Promise((function(o,s){l.onreadystatechange=function(){if(l.readyState!==4){return}if(l.status>=200&&l.status<300){o(l)}else{s({status:l.status,statusText:l.statusText})}};l.onerror=function(){s({status:l.status,statusText:l.statusText})};l.open(t.method,e,true);if(t.headers){Object.keys(t.headers).forEach((function(e){l.setRequestHeader(e,t.headers[e])}))}l.send(t.body)}))};c={request:l,fetchRequest:h};var u=c;var p=e("dxp_location_selector",function(){function e(e){t(this,e);this.filterItemsJson=[];this.searchValue="";this.showDownArrow=true;this.searchLocationChanged=o(this,"searchLocationChanged",7)}e.prototype.componentWillLoad=function(){this.base=new i(this,s);this.base.i18Init(s,"LocationSelector",a)};e.prototype.clickEvent=function(e){var t=e.target?e.composedPath()[0]:e.target;if(!t.classList.contains("dxp-dropdown-list-item")&&!t.classList.contains("searchbox")&&!t.classList.contains("dxp-icon")){this.showSearchBoxList=false;this.showDownArrow=true}};e.prototype.clearSearchBox=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.clearInputFieldValue();this.filterItemsJson=[];this.showSearchBoxList=false;this.showDownArrow=true;return[2]}))}))};e.prototype.clearInputFieldValue=function(){var e=this.getInputElement();if(e){e.value="";this.searchValue="";this.showSearchBoxList=!this.showSearchBoxList}};e.prototype.findResult=function(e,t){var o;e.forEach((function(e){if(e.types[0]===t&&e.types[1]==="political"){o=e}}));return o?o.long_name:undefined};e.prototype.getCurrentLocation=function(){var e=this;if(navigator.geolocation){navigator.geolocation.getCurrentPosition((function(t){e.getLocationCity(t.coords.latitude,t.coords.longitude).then((function(t){e.filterItemsJson.push(t);e.filterItemsJson=__spreadArrays(e.filterItemsJson);e.showDownArrow=!e.showDownArrow;e.showSearchBoxList=!e.showSearchBoxList;e.responseFlag=false})).catch((function(t){s.log.debug(e.element.tagName,"getLocation()","current location location notfound : "+JSON.stringify(t))}))}))}else{s.log.debug(this.element.tagName,"getLocation()","Sorry, your browser does not support HTML5 geolocation")}};e.prototype.getData=function(e){var t=this;var o={method:"GET"};try{if(u.request){u.request.abort()}return u.fetchRequest(e,o).then((function(e){s.log.debug(t.element.tagName,"getData()","xhr request success");return JSON.parse(e["response"])})).catch((function(e){s.log.debug(t.element.tagName,"getData()","xhr request cancelled/failed : "+JSON.stringify(e))}))}catch(n){s.log.error(this.element.tagName,"getData()","fetch failed",n)}};e.prototype.getInputElement=function(){return this.element?this.element.querySelector(".searchbox"):this.element.querySelector(".searchbox")};e.prototype.getLocationCity=function(e,t){return __awaiter(this,void 0,void 0,(function(){var o,n,r,i,a,c,l;return __generator(this,(function(h){switch(h.label){case 0:this.filterItemsJson=[];o=""+"https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+this.apiKey;return[4,s.api(o)];case 1:n=h.sent();r=n.results[1].address_components;i=this.findResult(r,"locality");a=this.findResult(r,"administrative_area_level_1");c=this.findResult(r,"country");l={};l["description"]=i+", "+a+", "+c;return[2,l]}}))}))};e.prototype.onListItemSelection=function(e){var t=this.getInputElement();t.value=e;this.showSearchBoxList=false;this.searchLocationChanged.emit({searchTerm:t.value});s.log.debug(this.element.tagName,"onListItemSelection()","event emit for SPA")};e.prototype.onTextInput=function(e){var t=this;this.searchValue=e.target.value;if(this.searchValue.trim().length>=1){this.showSearchBoxList=true;var o=""+"https://maps.googleapis.com/maps/api/place/autocomplete/json?key="+this.apiKey+"&types=("+this.searchType+")&language="+s.i18n.languages[0]+"&input="+this.searchValue;this.getData(o).then((function(e){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){if(e){this.filterItemsJson=e;if(this.filterItemsJson["predictions"]){this.filterItemsJson=this.filterItemsJson["predictions"]}if(this.filterItemsJson.length){this.responseFlag=true}}return[2]}))}))}))}if(this.showSearchBoxList===false){this.showSearchBoxList=!this.showSearchBoxList}};e.prototype.renderLocationValues=function(){var e=this;return n("div",{class:"dxp-location-list-container  "+(this.filterItemsJson&&this.filterItemsJson.length?" with-result ":"")+"\n       "+(this.showSearchBoxList?" dxp-block":"dxp-none")},n("ul",{class:"dxp-suggestion-list "+(!this.searchValue.length?"current-location":""),"aria-label":s.i18n.t("LocationSelector:listText")},this.filterItemsJson&&this.filterItemsJson.length?this.filterItemsJson.map((function(t){return[n("li",{tabIndex:-1,class:"dxp-dropdown-list-item"},!e.searchValue.length&&!e.responseFlag&&n("p",{class:"dxp-font-size-sm dxp-pb-3"}," Your location"),n("p",{class:"current-location-data",onClick:e.selectSuggestion.bind(e)},!e.searchValue.length&&!e.responseFlag&&n("span",{class:"dxp-icon dxp-icon-current-location",tabIndex:0,"aria-label":s.i18n.t("LocationSelector:searchIconAccessibilityText")}),t.description)),!e.searchValue.length&&!e.responseFlag&&n("li",{class:"dxp-dropdown-list-item"},"All location")]})):n("li",{tabIndex:-1,class:"dxp-dropdown-list-item no-result-found","aria-label":s.i18n.t("LocationSelector:noResultFound")},n("p",null,s.i18n.t("LocationSelector:noResultFound")))))};e.prototype.selectSuggestion=function(e,t){if(t&&e.target&&e.target.activeElement.tagName==="LI"){this.onListItemSelection(e.target.activeElement.innerText)}else if(e.target.tagName==="P"){this.onListItemSelection(e.target.innerText)}};e.prototype.toggleCurrentLocation=function(){if(!this.filterItemsJson||this.filterItemsJson.length===0){this.getCurrentLocation()}else{this.showDownArrow=!this.showDownArrow;this.showSearchBoxList=!this.showSearchBoxList}};e.prototype.render=function(){var e=this;s.log.debug(this.element.tagName,"render()","in dxp-location-selector render() : "+"DEVELOPMENT");var t=[n("link",{rel:"stylesheet",href:""}),[this.theme&&n("link",{rel:"stylesheet",href:""})],[this.theme&&n("link",{rel:"stylesheet",href:s.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-location-selector.min.css"})]];return n("div",{role:"application",class:this.base.componentClass()+" search-wrapper simple-search search-box-container",dir:this.dir,"data-theme":this.theme},t,n("div",{class:"search-box-container"},n("div",{class:"wrapper"},n("input",{type:"search","aria-haspopup":"listbox",name:"searchbox","aria-label":s.i18n.t("LocationSelector:customMessage"),class:"dxp-form-control searchbox "+(this.showSearchBoxList&&this.filterItemsJson&&this.filterItemsJson.length?"dxp-border-radius":""),placeholder:""+(this.searchLocationData?this.searchLocationData[0].placeholder:"All Location"),onInput:function(t){e.onTextInput(t)},onClick:function(){return e.toggleCurrentLocation()}}),n("span",{class:"dxp-icon dxp-icon-sm dxp-icon-globe search-text",tabIndex:0,"aria-label":s.i18n.t("LocationSelector:searchIconAccessibilityText")}),!this.searchValue.length&&n("span",{class:"dxp-icon dxp-icon-sm "+(this.showDownArrow?"dxp-icon-caret-down":"dxp-icon-caret-up"),tabIndex:0,"aria-label":s.i18n.t("LocationSelector:searchIconAccessibilityText"),onClick:function(){return e.toggleCurrentLocation()}}),n("span",{class:"dxp-icon dxp-icon-sm dxp-icon-close dxp-icon-clear "+(this.filterItemsJson&&this.searchValue.length>=1?" dxp-block":" dxp-none"),"aria-label":s.i18n.t("LocationSelector:clear"),tabIndex:0,onClick:function(){return e.clearSearchBox()}})),this.renderLocationValues()))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-location-selector.search-wrapper{padding:0}div.dxp.dxp-location-selector.search-wrapper.simple-search{background-color:transparent;width:100%}div.dxp.dxp-location-selector.search-wrapper .search-box-container,div.dxp.dxp-location-selector.search-wrapper .wrapper{position:relative}div.dxp.dxp-location-selector.search-wrapper input{line-height:2rem;padding:8px 65px 8px 47px;border-radius:19px}div.dxp.dxp-location-selector.search-wrapper .dxp-icon:focus,div.dxp.dxp-location-selector.search-wrapper input:focus{outline:none}div.dxp.dxp-location-selector.search-wrapper .searchbox.dxp-border-radius{border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0}div.dxp.dxp-location-selector.search-wrapper .dxp-icon-globe{position:absolute;padding:0;cursor:pointer;left:20px;top:10px}div.dxp.dxp-location-selector.search-wrapper .dxp-icon-caret-up,div.dxp.dxp-location-selector.search-wrapper .dxp-icon.dxp-icon-caret-down{position:absolute;right:16px;top:10px}div.dxp.dxp-location-selector.search-wrapper .dxp-icon-close{position:absolute;top:11px;right:16px;margin:0;padding:0;cursor:pointer}div.dxp.dxp-location-selector.search-wrapper .dxp-location-list-container{position:absolute;left:0;right:0;z-index:1;border-top:0;border-bottom-right-radius:19px;border-bottom-left-radius:19px}div.dxp.dxp-location-selector.search-wrapper .dxp-suggestion-list{list-style:none;border-bottom-left-radius:19px;border-bottom-right-radius:19px;padding:0}div.dxp.dxp-location-selector.search-wrapper .dxp-suggestion-list li{padding:10px 40px;padding-bottom:10px;position:relative}div.dxp.dxp-location-selector.search-wrapper .dxp-suggestion-list li p{margin:0}div.dxp.dxp-location-selector.search-wrapper .dxp-suggestion-list li:before{display:block;height:1px;position:absolute;top:0;width:calc(100% - 70px)}div.dxp.dxp-location-selector.search-wrapper .dxp-suggestion-list li:first-child:before{content:\"\"}div.dxp.dxp-location-selector.search-wrapper .current-location li p{margin:0}div.dxp.dxp-location-selector.search-wrapper .current-location li:before{content:\"\"}div.dxp.dxp-location-selector.search-wrapper .current-location-data{display:-ms-flexbox;display:flex}div.dxp.dxp-location-selector.search-wrapper .dxp-icon-current-location{position:relative;top:2px;margin-right:8px;width:16px;height:18px;display:block}\@media (max-width:767px){div.dxp.dxp-location-selector.search-wrapper .cta{padding-top:24px}}div.dxp.dxp-location-selector.search-wrapper[dir=rtl] .dxp-icon-globe{right:20px;left:auto}div.dxp.dxp-location-selector.search-wrapper[dir=rtl] .dxp-icon-caret-up,div.dxp.dxp-location-selector.search-wrapper[dir=rtl] .dxp-icon-close,div.dxp.dxp-location-selector.search-wrapper[dir=rtl] .dxp-icon.dxp-icon-caret-down{left:16px;right:auto}"},enumerable:true,configurable:true});return e}())}}}));