import{r as t,c as i,d as s,h as e,g as o}from"./p-8188e849.js";import{B as n}from"./p-16d6f0ca.js";import{m as l}from"./p-3eebf77a.js";const a=class{constructor(s){t(this,s),this.textareaPlaceholder="",this.userDataContainer="COOKIE",this.analyticsDataEmitter=i(this,"dxp_comp",7),this.clickActionMenu=i(this,"clickActionMenu",7),this.clickEditComment=i(this,"clickEditComment",7),this.clickReplyComment=i(this,"clickReplyComment",7),this.commentUpdated=i(this,"commentUpdated",7)}commentChangeHandler(t){this.comments="string"==typeof t?JSON.parse(t):t}componentWillLoad(){this.base=new n(this,s),this.base.i18Init(s,"CommentsItem",l),this.comments="string"==typeof this.commentObj?JSON.parse(this.commentObj):this.commentObj,this.config()}componentDidLoad(){this.updateSection&&this.updateSection.classList.add("dxp-none")}async primaryActionHandler(){this.commentUpdated.emit({action:"delete",commentId:this.comments.id,isReplied:this.isReply,replyOf:this.comments.replyOf}),await this.element.querySelector("dxp-modal").closeModal()}async submitHandler(t){const i=this.updateSection.querySelector("textarea");"replyLink"!==t.target.getAttribute("btn-id")||this.isReplyLinkActive||(this.clickReplyComment.emit({commentId:this.comments.id}),this.textareaPlaceholder=s.i18n.t("CommentsItem:replyplaceholder"),i.value="")}actionCancelComment(t){t.preventDefault(),this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})}actionDeleteComment(t){t.preventDefault(),this.element.querySelector("dxp-modal").openModal(),this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})}actionEditComment(t){t.preventDefault();const i=this.updateSection.querySelector("textarea");this.clickEditComment.emit({commentId:this.comments.id}),i.value=this.seperatedReplyText,this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})}actionSendComment(t){t.preventDefault();const i=this.updateSection.querySelector("textarea");i.value.trim()?this.updateSection.classList.contains("reply-section")?this.commentUpdated.emit({action:"reply",commentId:this.isReply?this.comments.replyOf:this.comments.id,isReplied:this.isReply,updatedText:`${this.comments.createdBy}_~${i.value}`}):this.commentUpdated.emit({action:"edit",commentId:this.comments.id,isReplied:this.isReply,replyOf:this.comments.replyOf,updatedText:i.value}):t.stopPropagation(),this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})}commentReply(){return e("div",{class:"reply-textarea",ref:t=>this.updateSection=t},e("div",{class:"reply-to-user-id"},this.isReply||!this.isReply&&this.isOpenedForReply?s.i18n.t("CommentsItem:replyingToText"):"",e("b",null,this.isOpenedForReply?this.comments.createdBy:this.seperatedUserId)),e("div",{class:"textarea-wrapper dxp-flex"},e("textarea",{rows:1,placeholder:this.textareaPlaceholder,class:"comment-edit",maxlength:this.maxCharacters,onClick:()=>this.setMode()},this.seperatedReplyText),e("a",{class:"cancel-btn dxp-inline-block","btn-id":"cancelLink",title:s.i18n.t("CommentsItem:cancelReply"),href:"javascript : void(0)",role:"link","aria-label":s.i18n.t("CommentsItem:cancelReply"),onClick:t=>this.actionCancelComment(t)})),e("a",{class:"send-btn dxp-inline-block","btn-id":"updateLink",title:s.i18n.t("CommentsItem:sendReply"),href:"javascript : void(0)",role:"link","aria-label":s.i18n.t("CommentsItem:sendReply"),onClick:t=>this.actionSendComment(t)}))}config(){return this.userDataContainer&&"COOKIE"===this.userDataContainer&&this.getCookie(this.useridKey)?(this.currentUserId=this.getCookie(this.useridKey),!0):this.userDataContainer&&"SESSION"===this.userDataContainer&&sessionStorage.getItem(this.useridKey)?(this.currentUserId=sessionStorage.getItem(this.useridKey),!0):this.userDataContainer&&"OTHER"===this.userDataContainer?(this.currentUserId="Other",!0):(this.currentUserId="Anonymous",!0)}emitAnalyticsData(t){this.analyticsDataEmitter.emit(t),s.log.info(this.element.tagName,"emitAnalyticsData()",t)}getCookie(t){const i=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return i?i[2]:void 0}setMode(){this.comments&&(this.isOpenedForReply?this.clickReplyComment.emit({commentId:this.comments.id}):this.clickEditComment.emit({commentId:this.comments.id}))}showSeparatedComment(t){return this.isReply&&-1!==t.indexOf("_~")?(this.seperatedUserId=t.split(/_~(.+)/)[0],this.seperatedReplyText=t.split(/_~(.+)/)[1]):this.seperatedReplyText=t,e("div",{class:"added-comment"},this.seperatedUserId&&this.seperatedUserId.length&&e("span",{class:"seperated-user-id"},this.seperatedUserId),this.seperatedReplyText)}toggleClick(t){this.comments&&!this.isActionMenuActive&&this.clickActionMenu.emit({commentId:this.comments.id}),t.preventDefault()}render(){const t=[e("link",{rel:"stylesheet",href:""}),[this.theme&&e("link",{rel:"stylesheet",href:""})],[this.theme&&e("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-comments.min.css`})]];return e("div",null,this.comments?e("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,e("div",{class:"comment-section","data-comment-id":this.comments.id},e("div",{class:"comment-header-block"},e("div",{class:"profile-block"},e("div",{class:`profile-icon ${this.currentUserId===this.comments.createdBy?"logged-in":""} `})),e("div",{class:"detail-block"},e("div",{class:"comment-user"},this.comments.createdBy),e("div",{class:"comment-time"},this.comments.commentConvertedTime)),this.currentUserId===this.comments.createdBy?e("div",{class:"action-menu"},e("a",{href:"javascript : void(0)",class:"action-dots",onClick:t=>this.toggleClick(t),"aria-label":s.i18n.t("CommentsItem:actionMenu")}),e("div",{class:"action-list-wrapper",ref:t=>this.editDeleteSection=t},e("div",{class:"action-list"},e("div",{class:"action-arrow"}),e("span",{class:"action-link"},e("a",{"btn-id":"editLink",href:"javascript : void(0)",role:"link","aria-label":s.i18n.t("CommentsItem:edit"),title:s.i18n.t("CommentsItem:edit"),onClick:t=>this.actionEditComment(t)},e("i",{class:"btn-icon edit-icon"}),s.i18n.t("CommentsItem:edit"))),e("span",{class:"action-link"},e("a",{"btn-id":"deleteLink",href:"javascript : void(0)",role:"link","aria-label":s.i18n.t("CommentsItem:delete"),title:s.i18n.t("CommentsItem:delete"),onClick:t=>this.actionDeleteComment(t)},e("i",{class:"btn-icon delete-icon"}),s.i18n.t("CommentsItem:delete")))))):""),this.isOpenedForEditReply?"":this.showSeparatedComment(this.comments.text),!this.isOpenedForEditReply&&e("div",{class:"options-wrapper"},e("div",{class:"dxp-inline-block"},e("dxp-cta",{type:"link","btn-id":"replyLink",tabindex:"0",text:s.i18n.t("CommentsItem:reply")})),e("div",{class:"arrange-right dxp-inline-block"})),this.commentReply(),e("div",{class:"dxp-clear-fix"}),e("dxp-modal",{"modal-title":s.i18n.t("CommentsItem:deleteModalTitle"),"modal-description":s.i18n.t("CommentsItem:deleteModalDescription"),"is-cancel-button-require":"true","footer-type":"one-button","primary-button-text":s.i18n.t("CommentsItem:deleteModalPrimaryBtnTxt")}))):"")}get element(){return o(this)}static get watchers(){return{commentObj:["commentChangeHandler"]}}static get style(){return"div.dxp.dxp-comments-item .comment-section{clear:both;margin-bottom:1.75rem}div.dxp.dxp-comments-item .comment-section .added-comment{margin:1rem 0;padding:1rem;border-radius:.25rem;clear:both;word-break:break-word}div.dxp.dxp-comments-item .comment-section .added-comment .seperated-user-id{border-radius:3px;padding:.3rem .5rem;font-weight:600;margin-right:.5rem}div.dxp.dxp-comments-item .comment-section .comment-header-block{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .comment-header-block .profile-block{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block{-ms-flex:1;flex:1;margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time,div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-user{word-break:break-all}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time{display:inline-block;direction:ltr}div.dxp.dxp-comments-item .comment-section .options-wrapper{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .options-wrapper .count{margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .options-wrapper .arrange-right{margin-left:auto}div.dxp.dxp-comments-item .comment-section .action-menu{position:relative}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper{z-index:5;position:absolute;visibility:hidden;opacity:0;right:-.5rem;top:100%;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;padding-top:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list{border-radius:.25rem;padding:.5rem 0;z-index:5;width:11rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link{display:block;padding:.45rem 1.25rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a:hover{text-decoration:underline}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{display:inline-block;width:1rem;margin-right:.75rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{height:0;width:0;border-left:.5rem solid transparent;border-right:.5rem solid transparent;position:absolute;top:0;right:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper.is-visible{visibility:visible;opacity:1}div.dxp.dxp-comments-item .comment-section .reply-textarea{margin-bottom:1.75rem;margin-top:1rem;position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-comments-item .comment-section .reply-textarea .textarea-wrapper{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}div.dxp.dxp-comments-item .comment-section .reply-textarea textarea.comment-edit{padding:1rem 3rem 1rem 1rem;-ms-flex:1;flex:1}div.dxp.dxp-comments-item .comment-section .reply-textarea .send-btn{width:3rem;height:3rem;border-radius:50%;cursor:pointer;overflow:hidden;padding:.3rem}div.dxp.dxp-comments-item .comment-section .reply-textarea .cancel-btn{position:absolute;right:.75rem;top:.75rem;cursor:pointer;overflow:hidden;padding:.25rem;width:2rem;height:2rem;border-radius:50%}div.dxp.dxp-comments-item .comment-section .reply-textarea .reply-to-user-id{margin-bottom:.3rem;-ms-flex:0 0 100%;flex:0 0 100%}div.dxp.dxp-comments-item[dir=rtl] .comment-section .added-comment .seperated-user-id{margin-right:0;margin-left:.5rem;display:inline-block}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper{right:unset;left:-.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{margin-right:0;margin-left:.75rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{right:unset;left:.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section textarea.comment-edit{padding:1rem 1rem 1rem 3rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .cancel-btn{right:unset;left:4rem}"}},h={en:{closeModal:"Close modal",demoButton:"Show Modal",demoButtonAccessibilityText:"Opens a modal",cancel:"Cancel"}},d="NESTED:dxp-logo",c=class{constructor(s){t(this,s),this.styleString={width:"",top:"",right:""},this.buttonPosition="left",this.closeOnEscKey=!0,this.closeOnOutsideClick=!0,this.isCancelButtonRequire=!1,this.isCloseButtonRequired=!0,this.sidebarPosition="right",this.analyticsDataEmitter=i(this,"dxp_comp",7),this.modalClose=i(this,"modalClose",7),this.modalOpen=i(this,"modalOpen",7),this.modalPrimaryButtonAction=i(this,"modalPrimaryButtonAction",7),this.modalSecondaryButtonAction=i(this,"modalSecondaryButtonAction",7)}componentWillLoad(){this.base=new n(this,s),this.base.i18Init(s,"Modal",h),this.width&&(this.styleString.width=`${this.width}px`),this.top&&(this.styleString.top=`${this.top}px`),this.right&&(this.styleString.right=`${this.right}px`)}componentDidLoad(){this.modalTitle&&this.element.querySelector("dxp-logo")&&this.element.querySelector("dxp-logo").remove()}async onHandleClickEvent(t){(t.target?t.composedPath()[0]:t.target).classList.contains("dxp-comp-modal")&&this.isCloseButtonRequired&&this.closeOnOutsideClick&&await this.closeModal(),this.base.routingEventListener(t)}async onKeyDownHandler(t){const i=t.target?t.composedPath()[0]:t.target;if(27===t.keyCode&&this.isCloseButtonRequired&&this.closeOnEscKey)await this.closeModal();else{const s=this.element.querySelector(".cancel-button"),e=this.element.querySelector(".btn-close");i.classList.contains("secondary-button")&&!s&&this.focusTimer(e),9===t.keyCode&&this.handleFocusEvents(e,t,i)}}async closeModal(){this.emitAnalyticsData(s.i18n.t("Modal:cancel"));const t=this.element,i=t.querySelector("#demoButton");t.querySelector(".dxp-modal").classList.remove("show"),t.querySelector(".dxp-comp-modal").classList.remove("visible"),document.querySelector("body").style.overflow="auto",i&&setTimeout(()=>{this.focusElement(i)}),this.modalClose.emit()}async openModal(){this.emitAnalyticsData(s.i18n.t("Modal:demoButton"));const t=this.element;t.querySelector(".dxp-modal").classList.add("show"),t.querySelector(".dxp-comp-modal").classList.add("visible"),document.querySelector("body").style.overflow="hidden",this.modalOpen.emit()}emitAnalyticsData(t){const i={di_comp_name:this.element.tagName,di_comp_title:this.modalTitle&&0!==this.modalTitle.length?this.modalTitle:"",di_comp_cta:t};this.analyticsDataEmitter.emit(i),s.log.info(this.element.tagName,"emitAnalyticsData()",i)}focusElement(t){t&&t.focus()}focusTimer(t){setTimeout(()=>{this.focusElement(t)})}handleCloseEvents(t,i,s){const e=this.element.querySelector(".footer-button").lastChild;if(s.classList.contains("cancel-button")&&!i.shiftKey&&this.focusTimer(t),s.classList.contains("btn-close")){const t=this.element.querySelector(".modal-title");this.focusTimer(t)}i.shiftKey&&s.classList.contains("dxp-icon-close")&&this.focusElement(e)}handleFocusEvents(t,i,s){const e=this.element.querySelector(".secondary-button");if(this.handleCloseEvents(t,i,s),!s.classList.contains("primary-button")||e||i.shiftKey||this.focusTimer(t),s.classList.contains("demo-button")){const t=this.element.querySelector(".logo-container");this.focusTimer(t)}i.shiftKey&&(s.classList.contains("logo-img")||s.classList.contains("modal-title-text"))&&this.focusTimer(t)}async handleKeyDownCloseModal(t){13!==t.keyCode&&32!==t.keyCode||await this.closeModal()}primaryActionHandler(){this.emitAnalyticsData(this.primaryButtonText),this.linkUrlFooterPrimary&&(""!==this.linkUrlFooterPrimary&&this.openInNewTabFooterPrimary?window.open(this.linkUrlFooterPrimary,"_blank"):location.href=this.linkUrlFooterPrimary),this.modalPrimaryButtonAction.emit()}renderButtons(){const t=e("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg primary-button",id:"primaryButton",onClick:()=>{this.primaryActionHandler()},title:this.linkTitleFooterPrimary,"aria-label":this.accessibilityTextFooterPrimary},this.primaryButtonText),i=[t,e("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg secondary-button",id:"secondaryButton",onClick:()=>{this.secondaryActionHandler()},title:this.linkTitleFooterSecondary,"aria-label":this.accessibilityTextFooterSecondary},this.secondaryButtonText)];return e("div",{class:`sc-dxp-modal dxp-modal-footer align-${this.buttonPosition}`},e("div",{class:"sc-dxp-modal footer-button"},"two-button"===this.footerType?i:"one-button"===this.footerType?t:"",this.isCancelButtonRequire&&e("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg cancel-button",id:"cancelButton",title:this.linkTitleFooterSecondary,"aria-label":this.accessibilityTextFooterSecondary,onClick:()=>this.closeModal()},s.i18n.t("Modal:cancel"))))}renderModalBody(){return e("div",{class:"sc-dxp-modal dxp-modal-body"},e("div",{class:"modal-title",tabindex:"-1"},this.modalTitle?e("h3",{class:"modal-title-text",tabindex:"0"},this.modalTitle):this.headerLogo?(()=>this.headerLogo[d]?e("dxp-logo",{src:this.headerLogo.src,"src-sm":this.headerLogo.srcSm,href:this.headerLogo.href,alt:this.headerLogo.alt,target:this.headerLogo.target},e("dxp-logo",{src:this.headerLogo[d].src,"src-sm":this.headerLogo[d].srcSm,href:this.headerLogo[d].href,alt:this.headerLogo[d].alt,target:this.headerLogo[d].target})):e("dxp-logo",{src:this.headerLogo.src,"src-sm":this.headerLogo.srcSm,href:this.headerLogo.href,alt:this.headerLogo.alt,target:this.headerLogo.target}))():e("slot",{name:"logo"}),this.modalSubtitle&&e("p",{class:"sub-title"},this.modalSubtitle,"‎")),this.modalDescription&&e("div",{class:"modal-description"},e("div",{innerHTML:`${this.modalDescription}&lrm;`})),e("slot",null))}secondaryActionHandler(){this.emitAnalyticsData(this.secondaryButtonText),this.linkUrlFooterSecondary&&(""!==this.linkUrlFooterSecondary&&this.openInNewTabFooterSecondary?window.open(this.linkUrlFooterSecondary,"_blank"):location.href=this.linkUrlFooterSecondary),this.modalSecondaryButtonAction.emit()}render(){s.log.debug(this.element.tagName,"render()","in dxp-modal render() : DEVELOPMENT");const t=e("span",null,e("link",{rel:"stylesheet",href:""}),this.theme&&e("link",{rel:"stylesheet",href:""}),this.theme&&e("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-modal.min.css`}),this.theme&&e("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-cta.min.css`}),this.dtmUrl&&e("script",{src:this.dtmUrl}));return e("div",null,this.demo?e("button",{class:"demo-button","aria-describedby":"demoButtonAccessibility",id:"demoButton",onClick:()=>this.openModal()},s.i18n.t("Modal:demoButton")):"",this.demo?e("p",{id:"demoButtonAccessibility",class:"dxp-sr-only"},s.i18n.t("Modal:demoButtonAccessibilityText")):"",e("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,e("div",{class:`sc-dxp-modal dxp-comp-modal main-section dxp-col-12 ${this.isSidebar?"dxp-sidebar-container":""}`},e("div",{class:`sc-dxp-modal dxp-modal-dialog dxp-col-xl-8 dxp-col-lg-8 dxp-col-md-10 ${this.isSidebar?`dxp-sidebar-wrapper ${this.sidebarPosition}`:""}`,"aria-modal":"true",role:"application",tabindex:"-1",style:this.styleString},this.isCloseButtonRequired?e("span",{tabindex:"-1",class:"sc-dxp-modal btn-close dxp-icon dxp-icon-close",role:"button","aria-label":s.i18n.t("Modal:closeModal"),onClick:()=>this.closeModal(),onKeyDown:t=>this.handleKeyDownCloseModal(t)}):"",this.renderModalBody(),"no-button"!==this.footerType||this.isCancelButtonRequire?this.renderButtons():""))))}get element(){return o(this)}static get style(){return"div.dxp.dxp-modal.show{display:block}\@media (min-width:576px){div.dxp.dxp-modal.show{position:unset}}div.dxp.dxp-modal .dxp-comp-modal{display:none;opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;height:100vh}div.dxp.dxp-modal .dxp-comp-modal.visible{opacity:1;display:block;z-index:999}div.dxp.dxp-modal .dxp-comp-modal .modal-description p{margin-bottom:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body{position:relative}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title{margin-bottom:1.125rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title-text{direction:ltr;display:inline-block;margin:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title p{margin:.375rem 0 0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:2.5rem 2rem 1.5rem;overflow-y:scroll}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-header{padding:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer{display:block;padding:0;margin-top:2.25rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-center{text-align:center}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-right{text-align:right}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-left{text-align:left}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{outline:none;width:100%}div.dxp.dxp-modal .dxp-comp-modal .btn-close{position:absolute;right:1rem;top:1rem;width:2.125rem;height:2.125rem;text-align:center;cursor:pointer}div.dxp.dxp-modal .dxp-comp-modal .btn-close:focus{border:1px solid}div.dxp.dxp-modal .dxp-comp-modal.dxp-sidebar-container{background:transparent}\@media (min-width:576px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:3rem 2.5rem 2rem;margin:0 auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:inline-block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{width:auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button button+button{margin-left:1rem}}\@media (min-width:768px){div.dxp.dxp-modal .dxp-comp-modal{position:fixed;top:0;left:0;width:100%}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:999;height:auto;overflow-y:auto;max-height:100vh;border-radius:4px;padding:3.5rem 3rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{-webkit-transform:none;transform:none;margin:0;top:0;height:100vh;overflow-y:auto;width:400px;max-width:100vw;border-radius:0;padding:4.25rem 2.625rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.right{right:0;left:auto}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.left{right:auto;left:0}}\@media (min-width:992px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:4rem 3.5rem 3rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{padding:5rem 3.125rem 3rem}}div.dxp.dxp-modal .modal-open-prevent-scrolling{overflow:hidden}div.dxp.dxp-modal .logo-container{margin-bottom:.9375rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .btn-close{right:auto;left:1rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-right{text-align:left}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-left{text-align:right}\@media (min-width:576px){div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .footer-button button+button{margin-left:0;margin-right:1rem}}"}};export{a as dxp_comments_item,c as dxp_modal};