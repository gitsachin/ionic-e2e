"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1915],{3800:function(u,r,e){e.r(r),e.d(r,{ion_img:function(){return s}});var h=e(5134),c=e(7289),n=e(7629),a=e(6897),s=function(){function t(i){var o=this;(0,h.Z)(this,t),(0,n.r)(this,i),this.ionImgWillLoad=(0,n.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,n.e)(this,"ionImgDidLoad",7),this.ionError=(0,n.e)(this,"ionError",7),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}return(0,c.Z)(t,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var o=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(function(d){d[d.length-1].isIntersecting&&(o.load(),o.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return o.load()},200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return(0,n.h)(n.H,{class:(0,a.b)(this)},(0,n.h)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return(0,n.i)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),t}();s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);