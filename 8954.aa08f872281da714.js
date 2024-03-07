"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8954],{8954:function(F,x,l){l.r(x),l.d(x,{ion_breadcrumb:function(){return B},ion_breadcrumbs:function(){return I}});var _=l(6054),t=l(3512),k=l(5134),w=l(7289),o=l(7629),C=l(1515),y=l(6897),Z=l(7329),m=l(5613),B=function(){function u(i){var r=this;(0,k.Z)(this,u),(0,o.r)(this,i),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.collapsedClick=(0,o.e)(this,"collapsedClick",7),this.inheritedAttributes={},this.collapsed=!1,this.active=!1,this.disabled=!1,this.routerDirection="forward",this.onFocus=function(){r.ionFocus.emit()},this.onBlur=function(){r.ionBlur.emit()},this.collapsedIndicatorClick=function(){r.collapsedClick.emit({ionShadowTarget:r.collapsedRef})}}return(0,w.Z)(u,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,Z.i)(this.el,["aria-label"])}},{key:"isClickable",value:function(){return void 0!==this.href}},{key:"render",value:function(){var r,a=this,e=this.color,n=this.active,s=this.collapsed,c=this.disabled,p=this.download,h=this.el,d=this.inheritedAttributes,b=this.last,g=this.routerAnimation,f=this.routerDirection,j=this.separator,E=this.showCollapsedIndicator,R=this.target,A=this.isClickable(),M=void 0===this.href?"span":"a",O=c?void 0:this.href,D=(0,y.b)(this),K="span"===M?{}:{download:p,href:O,target:R},U=!b&&(s?!(!E||b):j);return(0,o.h)(o.H,{onClick:function(v){return(0,m.o)(O,v,f,g)},"aria-disabled":c?"true":null,class:(0,m.c)(e,(r={},(0,t.Z)(r,D,!0),(0,t.Z)(r,"breadcrumb-active",n),(0,t.Z)(r,"breadcrumb-collapsed",s),(0,t.Z)(r,"breadcrumb-disabled",c),(0,t.Z)(r,"in-breadcrumbs-color",(0,m.h)("ion-breadcrumbs[color]",h)),(0,t.Z)(r,"in-toolbar",(0,m.h)("ion-toolbar",this.el)),(0,t.Z)(r,"in-toolbar-color",(0,m.h)("ion-toolbar[color]",this.el)),(0,t.Z)(r,"ion-activatable",A),(0,t.Z)(r,"ion-focusable",A),r))},(0,o.h)(M,Object.assign({},K,{class:"breadcrumb-native",part:"native",disabled:c,onFocus:this.onFocus,onBlur:this.onBlur},d),(0,o.h)("slot",{name:"start"}),(0,o.h)("slot",null),(0,o.h)("slot",{name:"end"})),E&&(0,o.h)("button",{part:"collapsed-indicator",onClick:function(){return a.collapsedIndicatorClick()},ref:function(v){return a.collapsedRef=v},class:{"breadcrumbs-collapsed-indicator":!0}},(0,o.h)("ion-icon",{icon:C.e,lazy:!1})),U&&(0,o.h)("span",{class:"breadcrumb-separator",part:"separator"},(0,o.h)("slot",{name:"separator"},"ios"===D?(0,o.h)("ion-icon",{icon:C.c,lazy:!1}):(0,o.h)("span",null,"/"))))}},{key:"el",get:function(){return(0,o.i)(this)}}]),u}();B.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7))}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;padding-left:12px;padding-right:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}",md:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:$breadcrumb-md-background-focused}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.breadcrumb-separator{margin-left:10px;margin-right:10px;margin-top:-1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-separator{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}"};var I=function(){function u(i){var r=this;(0,k.Z)(this,u),(0,o.r)(this,i),this.ionCollapsedClick=(0,o.e)(this,"ionCollapsedClick",7),this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1,this.breadcrumbsInit=function(){r.setBreadcrumbSeparator(),r.setMaxItems()},this.resetActiveBreadcrumb=function(){var e=r.getBreadcrumbs().find(function(n){return n.active});e&&r.activeChanged&&(e.active=!1)},this.setMaxItems=function(){var p,a=r.itemsAfterCollapse,e=r.itemsBeforeCollapse,n=r.maxItems,s=r.getBreadcrumbs(),c=(0,_.Z)(s);try{for(c.s();!(p=c.n()).done;){var h=p.value;h.showCollapsedIndicator=!1,h.collapsed=!1}}catch(b){c.e(b)}finally{c.f()}void 0!==n&&s.length>n&&e+a<=n&&s.forEach(function(b,g){g===e&&(b.showCollapsedIndicator=!0),g>=e&&g<s.length-a&&(b.collapsed=!0)})},this.setBreadcrumbSeparator=function(){var h,a=r.itemsAfterCollapse,e=r.itemsBeforeCollapse,n=r.maxItems,s=r.getBreadcrumbs(),c=s.find(function(f){return f.active}),p=(0,_.Z)(s);try{for(p.s();!(h=p.n()).done;){var d=h.value,b=void 0!==n&&0===a?d===s[e]:d===s[s.length-1];d.last=b,d.separator=void 0!==d.separator?d.separator:!b||void 0,!c&&b&&(d.active=!0,r.activeChanged=!0)}}catch(f){p.e(f)}finally{p.f()}},this.getBreadcrumbs=function(){return Array.from(r.el.querySelectorAll("ion-breadcrumb"))}}return(0,w.Z)(u,[{key:"onCollapsedClick",value:function(r){var e=this.getBreadcrumbs().filter(function(n){return n.collapsed});this.ionCollapsedClick.emit(Object.assign(Object.assign({},r.detail),{collapsedBreadcrumbs:e}))}},{key:"maxItemsChanged",value:function(){this.resetActiveBreadcrumb(),this.breadcrumbsInit()}},{key:"componentWillLoad",value:function(){this.breadcrumbsInit()}},{key:"render",value:function(){var r,a=this.color,e=this.collapsed,n=(0,y.b)(this);return(0,o.h)(o.H,{class:(0,m.c)(a,(r={},(0,t.Z)(r,n,!0),(0,t.Z)(r,"in-toolbar",(0,m.h)("ion-toolbar",this.el)),(0,t.Z)(r,"in-toolbar-color",(0,m.h)("ion-toolbar[color]",this.el)),(0,t.Z)(r,"breadcrumbs-collapsed",e),r))},(0,o.h)("slot",null))}},{key:"el",get:function(){return(0,o.i)(this)}}],[{key:"watchers",get:function(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}}]),u}();I.style={ios:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}",md:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"}}}]);