"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5651],{5651:function(G,v,e){e.r(v),e.d(v,{ion_ripple_effect:function(){return y}});var b=e(3512),E=e(8239),g=e(5134),A=e(7289),O=e(8774),h=e.n(O),t=e(7629),P=e(6897),y=function(){function l(n){(0,g.Z)(this,l),(0,t.r)(this,n),this.type="bounded"}return(0,A.Z)(l,[{key:"addRipple",value:(n=(0,E.Z)(h().mark(function c(k,I){var r=this;return h().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",new Promise(function(L){(0,t.f)(function(){var _=r.el.getBoundingClientRect(),o=_.width,s=_.height,T=Math.sqrt(o*o+s*s),w=Math.max(s,o),B=r.unbounded?w:T+R,f=Math.floor(w*C),x=B/f,d=k-_.left,p=I-_.top;r.unbounded&&(d=.5*o,p=.5*s);var K=d-.5*f,U=p-.5*f,W=.5*o-d,z=.5*s-p;(0,t.c)(function(){var u=document.createElement("div");u.classList.add("ripple-effect");var a=u.style;a.top=U+"px",a.left=K+"px",a.width=a.height=f+"px",a.setProperty("--final-scale","".concat(x)),a.setProperty("--translate-end","".concat(W,"px, ").concat(z,"px")),(r.el.shadowRoot||r.el).appendChild(u),setTimeout(function(){L(function(){M(u)})},325)})})}));case 1:case"end":return m.stop()}},c)})),function(c,k){return n.apply(this,arguments)})},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"render",value:function(){var i,c=(0,P.b)(this);return(0,t.h)(t.H,{role:"presentation",class:(i={},(0,b.Z)(i,c,!0),(0,b.Z)(i,"unbounded",this.unbounded),i)})}},{key:"el",get:function(){return(0,t.i)(this)}}]),l;var n}(),M=function(n){n.classList.add("fade-out"),setTimeout(function(){n.remove()},200)},R=10,C=.5;y.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);