import{_ as t,aa as e,ab as i,o as s,c as o,a as r,b as n,d as h,r as l,ac as a,ad as c,l as _,ae as f}from"./index-e317c8c7.js";function p(t){this._drag=t,this._dragLog=Math.log(t),this._x=0,this._v=0,this._startTime=0}function d(t,e,i){return t>e-i&&t<e+i}function u(t,e){return d(t,0,e)}function g({e:t,c:e,u:i}){let s,o;return t===this._t&&(s=this._powER1T,o=this._powER2T),this._t=t,s||(this._powER1T=Math.pow(Math.E,e*t),s=this._powER1T),o||(this._powER2T=Math.pow(Math.E,i*t),o=this._powER2T),{t:s,n:o}}function m(t,e,i){this._m=t,this._k=e,this._c=i,this._solution=null,this._endPosition=0,this._startTime=0}function T(t,e,i){this._extent=t,this._friction=e||new p(.01),this._spring=i||new m(1,90,20),this._startTime=0,this._springing=!1,this._springOffset=0}function y(t,e){e=e||{},this._element=t,this._options=e,this._enableSnap=e.enableSnap||!1,this._itemSize=e.itemSize||0,this._enableX=e.enableX||!1,this._enableY=e.enableY||!1,this._shouldDispatchScrollEvent=!!e.onScroll,this._enableX?(this._extent=(e.scrollWidth||this._element.offsetWidth)-this._element.parentElement.offsetWidth,this._scrollWidth=e.scrollWidth):(this._extent=(e.scrollHeight||this._element.offsetHeight)-this._element.parentElement.offsetHeight,this._scrollHeight=e.scrollHeight),this._position=0,this._scroll=new T(this._extent,e.friction,e.spring),this._onTransitionEnd=this.onTransitionEnd.bind(this),this.updatePosition()}p.prototype.set=function(t,e){this._x=t,this._v=e,this._startTime=(new Date).getTime()},p.prototype.setVelocityByEnd=function(t){this._v=(t-this._x)*this._dragLog/(Math.pow(this._drag,100)-1)},p.prototype.x=function(t){void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3);const e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t);return this._dt=t,this._x+this._v*e/this._dragLog-this._v/this._dragLog},p.prototype.dx=function(t){void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3);const e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t);return this._dt=t,this._v*e},p.prototype.done=function(){return Math.abs(this.dx())<3},p.prototype.reconfigure=function(t){const e=this.x(),i=this.dx();this._drag=t,this._dragLog=Math.log(t),this.set(e,i)},p.prototype.configuration=function(){const t=this;return[{label:"Friction",read:()=>t._drag,write(e){t.reconfigure(e)},min:.001,max:.1,step:.001}]},m.prototype._solve=function(t,e){const i=this._c,s=this._m,o=this._k,r=i*i-4*s*o;if(0===r){const o=-i/(2*s),r=t,n=e/(o*t);return{x:t=>(r+n*t)*Math.pow(Math.E,o*t),dx(t){const e=Math.pow(Math.E,o*t);return o*(r+n*t)*e+n*e}}}if(r>0){const o=(-i-Math.sqrt(r))/(2*s),n=(-i+Math.sqrt(r))/(2*s),h=(e-o*t)/(n-o),l=t-h;return{x(t){const{t:e,n:i}=g({e:t,c:o,u:n});return l*e+h*i},dx(t){const{t:e,n:i}=g({e:t,c:o,u:n});return l*o*e+h*n*i}}}const n=Math.sqrt(4*s*o-i*i)/(2*s),h=-i/2*s,l=t,a=(e-h*t)/n;return{x:t=>Math.pow(Math.E,h*t)*(l*Math.cos(n*t)+a*Math.sin(n*t)),dx(t){const e=Math.pow(Math.E,h*t),i=Math.cos(n*t),s=Math.sin(n*t);return e*(a*n*i-l*n*s)+h*e*(a*s+l*i)}}},m.prototype.x=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._endPosition+this._solution.x(t):0},m.prototype.dx=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._solution.dx(t):0},m.prototype.setEnd=function(t,e,i){if(i||(i=(new Date).getTime()),t!==this._endPosition||!u(e,.4)){e=e||0;let s=this._endPosition;this._solution&&(u(e,.4)&&(e=this._solution.dx((i-this._startTime)/1e3)),s=this._solution.x((i-this._startTime)/1e3),u(e,.4)&&(e=0),u(s,.4)&&(s=0),s+=this._endPosition),this._solution&&u(s-t,.4)&&u(e,.4)||(this._endPosition=t,this._solution=this._solve(s-this._endPosition,e),this._startTime=i)}},m.prototype.snap=function(t){this._startTime=(new Date).getTime(),this._endPosition=t,this._solution={x:()=>0,dx:()=>0}},m.prototype.done=function(t){return t||(t=(new Date).getTime()),d(this.x(),this._endPosition,.4)&&u(this.dx(),.4)},m.prototype.reconfigure=function(t,e,i){this._m=t,this._k=e,this._c=i,this.done()||(this._solution=this._solve(this.x()-this._endPosition,this.dx()),this._startTime=(new Date).getTime())},m.prototype.springConstant=function(){return this._k},m.prototype.damping=function(){return this._c},m.prototype.configuration=function(){return[{label:"Spring Constant",read:this.springConstant.bind(this),write:function(t,e){t.reconfigure(1,e,t.damping())}.bind(this,this),min:100,max:1e3},{label:"Damping",read:this.damping.bind(this),write:function(t,e){t.reconfigure(1,t.springConstant(),e)}.bind(this,this),min:1,max:500}]},T.prototype.snap=function(t,e){this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(e)},T.prototype.set=function(t,e){this._friction.set(t,e),t>0&&e>=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(0)):t<-this._extent&&e<=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(-this._extent)):this._springing=!1,this._startTime=(new Date).getTime()},T.prototype.x=function(t){if(!this._startTime)return 0;if(t||(t=((new Date).getTime()-this._startTime)/1e3),this._springing)return this._spring.x()+this._springOffset;let e=this._friction.x(t);const i=this.dx(t);return(e>0&&i>=0||e<-this._extent&&i<=0)&&(this._springing=!0,this._spring.setEnd(0,i),e<-this._extent?this._springOffset=-this._extent:this._springOffset=0,e=this._spring.x()+this._springOffset),e},T.prototype.dx=function(t){let e=0;return e=this._lastTime===t?this._lastDx:this._springing?this._spring.dx(t):this._friction.dx(t),this._lastTime=t,this._lastDx=e,e},T.prototype.done=function(){return this._springing?this._spring.done():this._friction.done()},T.prototype.setVelocityByEnd=function(t){this._friction.setVelocityByEnd(t)},T.prototype.configuration=function(){const t=this._friction.configuration();return t.push.apply(t,this._spring.configuration()),t},y.prototype.onTouchStart=function(){this._startPosition=this._position,this._lastChangePos=this._startPosition,this._startPosition>0?this._startPosition/=.5:this._startPosition<-this._extent&&(this._startPosition=(this._startPosition+this._extent)/.5-this._extent),this._animation&&(this._animation.cancel(),this._scrolling=!1),this.updatePosition()},y.prototype.onTouchMove=function(t,e){let i=this._startPosition;this._enableX?i+=t:this._enableY&&(i+=e),i>0?i*=.5:i<-this._extent&&(i=.5*(i+this._extent)-this._extent),this._position=i,this.updatePosition(),this.dispatchScroll()},y.prototype.onTouchEnd=function(t,e,i){if(this._enableSnap&&this._position>-this._extent&&this._position<0){if(this._enableY&&(Math.abs(e)<this._itemSize&&Math.abs(i.y)<300||Math.abs(i.y)<150))return void this.snap();if(this._enableX&&(Math.abs(t)<this._itemSize&&Math.abs(i.x)<300||Math.abs(i.x)<150))return void this.snap()}let s;if(this._enableX?this._scroll.set(this._position,i.x):this._enableY&&this._scroll.set(this._position,i.y),this._enableSnap){const t=this._scroll._friction.x(100),e=t%this._itemSize;s=Math.abs(e)>this._itemSize/2?t-(this._itemSize-Math.abs(e)):t-e,s<=0&&s>=-this._extent&&this._scroll.setVelocityByEnd(s)}this._lastTime=Date.now(),this._lastDelay=0,this._scrolling=!0,this._lastChangePos=this._position,this._lastIdx=Math.floor(Math.abs(this._position/this._itemSize)),this._animation=function(t,e,i){const s={id:0,cancelled:!1};return function t(e,i,s,o){if(!e||!e.cancelled){s(i);const r=i.done();r||e.cancelled||(e.id=requestAnimationFrame(t.bind(null,e,i,s,o))),r&&o&&o(i)}}(s,t,e,i),{cancel:function(t){t&&t.id&&cancelAnimationFrame(t.id),t&&(t.cancelled=!0)}.bind(null,s),model:t}}(this._scroll,(()=>{const t=Date.now(),e=(t-this._scroll._startTime)/1e3,i=this._scroll.x(e);this._position=i,this.updatePosition();const s=this._scroll.dx(e);this._shouldDispatchScrollEvent&&t-this._lastTime>this._lastDelay&&(this.dispatchScroll(),this._lastDelay=Math.abs(2e3/s),this._lastTime=t)}),(()=>{this._enableSnap&&(s<=0&&s>=-this._extent&&(this._position=s,this.updatePosition()),"function"==typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize))),this._shouldDispatchScrollEvent&&this.dispatchScroll(),this._scrolling=!1}))},y.prototype.onTransitionEnd=function(){this._element.style.transition="",this._element.style.webkitTransition="",this._element.removeEventListener("transitionend",this._onTransitionEnd),this._element.removeEventListener("webkitTransitionEnd",this._onTransitionEnd),this._snapping&&(this._snapping=!1),this.dispatchScroll()},y.prototype.snap=function(){const t=this._itemSize,e=this._position%t,i=Math.abs(e)>this._itemSize/2?this._position-(t-Math.abs(e)):this._position-e;this._position!==i&&(this._snapping=!0,this.scrollTo(-i),"function"==typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize)))},y.prototype.scrollTo=function(t,e){this._animation&&(this._animation.cancel(),this._scrolling=!1),"number"==typeof t&&(this._position=-t),this._position<-this._extent?this._position=-this._extent:this._position>0&&(this._position=0),this._element.style.transition=`transform ${e||.2}s ease-out`,this._element.style.webkitTransition=`-webkit-transform ${e||.2}s ease-out`,this.updatePosition(),this._element.addEventListener("transitionend",this._onTransitionEnd),this._element.addEventListener("webkitTransitionEnd",this._onTransitionEnd)},y.prototype.dispatchScroll=function(){if("function"==typeof this._options.onScroll&&Math.round(this._lastPos)!==Math.round(this._position)){this._lastPos=this._position;const t={target:{scrollLeft:this._enableX?-this._position:0,scrollTop:this._enableY?-this._position:0,scrollHeight:this._scrollHeight||this._element.offsetHeight,scrollWidth:this._scrollWidth||this._element.offsetWidth,offsetHeight:this._element.parentElement.offsetHeight,offsetWidth:this._element.parentElement.offsetWidth}};this._options.onScroll(t)}},y.prototype.update=function(t,e,i){let s=0;const o=this._position;this._enableX?(s=this._element.childNodes.length?(e||this._element.offsetWidth)-this._element.parentElement.offsetWidth:0,this._scrollWidth=e):(s=this._element.childNodes.length?(e||this._element.offsetHeight)-this._element.parentElement.offsetHeight:0,this._scrollHeight=e),"number"==typeof t&&(this._position=-t),this._position<-s?this._position=-s:this._position>0&&(this._position=0),this._itemSize=i||this._itemSize,this.updatePosition(),o!==this._position&&(this.dispatchScroll(),"function"==typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize))),this._extent=s,this._scroll._extent=s},y.prototype.updatePosition=function(){let t="";this._enableX?t=`translateX(${this._position}px) translateZ(0)`:this._enableY&&(t=`translateY(${this._position}px) translateZ(0)`),this._element.style.webkitTransform=t,this._element.style.transform=t},y.prototype.isScrolling=function(){return this._scrolling||this._snapping};const b=t({name:"ScrollView",mixins:[{methods:{initScroller(t,e){this._touchInfo={trackingID:-1,maxDy:0,maxDx:0},this._scroller=new y(t,e),this.__handleTouchStart=this._handleTouchStart.bind(this),this.__handleTouchMove=this._handleTouchMove.bind(this),this.__handleTouchEnd=this._handleTouchEnd.bind(this),this._initedScroller=!0},_findDelta(t){const e=this._touchInfo;return"move"===t.detail.state||"end"===t.detail.state?{x:t.detail.dx,y:t.detail.dy}:{x:t.screenX-e.x,y:t.screenY-e.y}},_handleTouchStart(t){const e=this._touchInfo,i=this._scroller;i&&("start"===t.detail.state?(e.trackingID="touch",e.x=t.detail.x,e.y=t.detail.y):(e.trackingID="mouse",e.x=t.screenX,e.y=t.screenY),e.maxDx=0,e.maxDy=0,e.historyX=[0],e.historyY=[0],e.historyTime=[t.detail.timeStamp],e.listener=i,i.onTouchStart&&i.onTouchStart(),t.preventDefault())},_handleTouchMove(t){const e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();const i=this._findDelta(t);if(i){for(e.maxDy=Math.max(e.maxDy,Math.abs(i.y)),e.maxDx=Math.max(e.maxDx,Math.abs(i.x)),e.historyX.push(i.x),e.historyY.push(i.y),e.historyTime.push(t.detail.timeStamp);e.historyTime.length>10;)e.historyTime.shift(),e.historyX.shift(),e.historyY.shift();e.listener&&e.listener.onTouchMove&&e.listener.onTouchMove(i.x,i.y,t.detail.timeStamp)}}},_handleTouchEnd(t){const e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();const i=this._findDelta(t);if(i){const{listener:t}=e;e.trackingID=-1,e.listener=null;const s={x:0,y:0};if(e.historyTime.length>2)for(let i=e.historyTime.length-1,o=e.historyTime[i],r=e.historyX[i],n=e.historyY[i];i>0;){i-=1;const t=o-e.historyTime[i];if(t>30&&t<50){s.x=(r-e.historyX[i])/(t/1e3),s.y=(n-e.historyY[i])/(t/1e3);break}}e.historyTime=[],e.historyX=[],e.historyY=[],t&&t.onTouchEnd&&t.onTouchEnd(i.x,i.y,s)}}}}}],props:{scrollX:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},upperThreshold:{type:[Number,String],default:50},lowerThreshold:{type:[Number,String],default:50},scrollTop:{type:[Number,String],default:0},scrollLeft:{type:[Number,String],default:0},scrollIntoView:{type:String,default:""},scrollWithAnimation:{type:[Boolean,String],default:!1},enableBackToTop:{type:[Boolean,String],default:!1},refresherEnabled:{type:[Boolean,String],default:!1},refresherThreshold:{type:Number,default:45},refresherDefaultStyle:{type:String,default:"back"},refresherBackground:{type:String,default:"#fff"},refresherTriggered:{type:[Boolean,String],default:!1}},emits:["update:refresherTriggered","scroll","scrolltoupper","scrolltolower","refresherpulling","refresherrefresh","refresherabort","refresherrestore"],data(){return{lastScrollTop:Number(this.scrollTop)||0,lastScrollLeft:Number(this.scrollLeft)||0,lastScrollToUpperTime:0,lastScrollToLowerTime:0,refresherHeight:0,refreshRotate:0,refreshState:""}},computed:{upperThresholdNumber(){const t=Number(this.upperThreshold);return isNaN(t)?50:t},lowerThresholdNumber(){const t=Number(this.lowerThreshold);return isNaN(t)?50:t},scrollTopNumber(){return Number(this.scrollTop)||0},scrollLeftNumber(){return Number(this.scrollLeft)||0}},watch:{scrollTopNumber(t){this._scrollTopChanged(t)},scrollLeftNumber(t){this._scrollLeftChanged(t)},scrollIntoView(t){this._scrollIntoViewChanged(t)},refresherTriggered(t){!0===t?this._setRefreshState("refreshing"):!1===t&&this._setRefreshState("restore")}},mounted(){const t=this;let s=null,o=null;this._attached=!0,this.toUpperNumber=0,this.triggerAbort=!1,this.beforeRefreshing=!1,this._scrollTopChanged(this.scrollTopNumber),this._scrollLeftChanged(this.scrollLeftNumber),this._scrollIntoViewChanged(this.scrollIntoView),this.__handleScroll=function(e){e.preventDefault(),e.stopPropagation(),t._handleScroll.bind(t,e)()},this.__handleTouchMove=function(e){if(null===s)return;const i=e.touches[0].pageX,r=e.touches[0].pageY,{main:n}=t.$refs;if(Math.abs(i-s.x)>Math.abs(r-s.y))if(t.scrollX){if(0===n.scrollLeft&&i>s.x)return void(o=!1);if(n.scrollWidth===n.offsetWidth+n.scrollLeft&&i<s.x)return void(o=!1);o=!0}else o=!1;else if(t.scrollY)if(0===n.scrollTop&&r>s.y)o=!1,t.refresherEnabled&&!1!==e.cancelable&&e.preventDefault();else{if(n.scrollHeight===n.offsetHeight+n.scrollTop&&r<s.y)return void(o=!1);o=!0}else o=!1;if(o&&e.stopPropagation(),0===n.scrollTop&&1===e.touches.length&&(t.refreshState="pulling"),t.refresherEnabled&&"pulling"===t.refreshState){const i=r-s.y;0===t.toUpperNumber&&(t.toUpperNumber=r),t.beforeRefreshing?(t.refresherHeight=i+t.refresherThreshold,t.triggerAbort=!1):(t.refresherHeight=r-t.toUpperNumber,t.refresherHeight>0&&(t.triggerAbort=!0,t.$trigger("refresherpulling",e,{deltaY:i})));const o=t.refresherHeight/t.refresherThreshold;t.refreshRotate=360*(o>1?1:o)}},this.__handleTouchStart=function(t){1===t.touches.length&&(s={x:t.touches[0].pageX,y:t.touches[0].pageY})},this.__handleTouchEnd=function(){s=null,t.refresherHeight>=t.refresherThreshold?t._setRefreshState("refreshing"):t._setRefreshState("refresherabort")},this.$refs.main.addEventListener("touchstart",this.__handleTouchStart,e),this.$refs.main.addEventListener("touchmove",this.__handleTouchMove,i(!1)),this.$refs.main.addEventListener("scroll",this.__handleScroll,i(!1)),this.$refs.main.addEventListener("touchend",this.__handleTouchEnd,e)},activated(){this.scrollY&&(this.$refs.main.scrollTop=this.lastScrollTop),this.scrollX&&(this.$refs.main.scrollLeft=this.lastScrollLeft)},beforeDestroy(){this.$refs.main.removeEventListener("touchstart",this.__handleTouchStart,e),this.$refs.main.removeEventListener("touchmove",this.__handleTouchMove,e),this.$refs.main.removeEventListener("scroll",this.__handleScroll,i(!1)),this.$refs.main.removeEventListener("touchend",this.__handleTouchEnd,e)},methods:{$trigger(t,e){this.$emit(t,e)},scrollTo(t,e){const i=this.$refs.main;t<0?t=0:"x"===e&&t>i.scrollWidth-i.offsetWidth?t=i.scrollWidth-i.offsetWidth:"y"===e&&t>i.scrollHeight-i.offsetHeight&&(t=i.scrollHeight-i.offsetHeight);let s=0,o="";"x"===e?s=i.scrollLeft-t:"y"===e&&(s=i.scrollTop-t),0!==s&&(this.$refs.content.style.transition="transform .3s ease-out",this.$refs.content.style.webkitTransition="-webkit-transform .3s ease-out","x"===e?o=`translateX(${s}px) translateZ(0)`:"y"===e&&(o=`translateY(${s}px) translateZ(0)`),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd),this.__transitionEnd=this._transitionEnd.bind(this,t,e),this.$refs.content.addEventListener("transitionend",this.__transitionEnd),this.$refs.content.addEventListener("webkitTransitionEnd",this.__transitionEnd),"x"===e?i.style.overflowX="hidden":"y"===e&&(i.style.overflowY="hidden"),this.$refs.content.style.transform=o,this.$refs.content.style.webkitTransform=o)},_handleTrack(t){if("start"===t.detail.state)return this._x=t.detail.x,this._y=t.detail.y,void(this._noBubble=null);"end"===t.detail.state&&(this._noBubble=!1),null===this._noBubble&&this.scrollY&&(Math.abs(this._y-t.detail.y)/Math.abs(this._x-t.detail.x)>1?this._noBubble=!0:this._noBubble=!1),null===this._noBubble&&this.scrollX&&(Math.abs(this._x-t.detail.x)/Math.abs(this._y-t.detail.y)>1?this._noBubble=!0:this._noBubble=!1),this._x=t.detail.x,this._y=t.detail.y,this._noBubble&&t.stopPropagation()},_handleScroll(t){const{target:e}=t;this.$trigger("scroll",t,{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,deltaX:this.lastScrollLeft-e.scrollLeft,deltaY:this.lastScrollTop-e.scrollTop}),this.scrollY&&(e.scrollTop<=this.upperThresholdNumber&&this.lastScrollTop-e.scrollTop>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"top"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollTop+e.offsetHeight+this.lowerThresholdNumber>=e.scrollHeight&&this.lastScrollTop-e.scrollTop<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"bottom"}),this.lastScrollToLowerTime=t.timeStamp)),this.scrollX&&(e.scrollLeft<=this.upperThresholdNumber&&this.lastScrollLeft-e.scrollLeft>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"left"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollLeft+e.offsetWidth+this.lowerThresholdNumber>=e.scrollWidth&&this.lastScrollLeft-e.scrollLeft<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"right"}),this.lastScrollToLowerTime=t.timeStamp)),this.lastScrollTop=e.scrollTop,this.lastScrollLeft=e.scrollLeft},_scrollTopChanged(t){this.scrollY&&(this._innerSetScrollTop?this._innerSetScrollTop=!1:this.scrollWithAnimation?this.scrollTo(t,"y"):this.$refs.main.scrollTop=t)},_scrollLeftChanged(t){this.scrollX&&(this._innerSetScrollLeft?this._innerSetScrollLeft=!1:this.scrollWithAnimation?this.scrollTo(t,"x"):this.$refs.main.scrollLeft=t)},_scrollIntoViewChanged(t){if(t){if(!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))return void console.error(`id error: scroll-into-view=${t}`);const e=this.$el.querySelector(`#${t}`);if(e){const t=this.$refs.main.getBoundingClientRect(),i=e.getBoundingClientRect();if(this.scrollX){const e=i.left-t.left,{scrollLeft:s}=this.$refs.main,o=s+e;this.scrollWithAnimation?this.scrollTo(o,"x"):this.$refs.main.scrollLeft=o}if(this.scrollY){const e=i.top-t.top,{scrollTop:s}=this.$refs.main,o=s+e;this.scrollWithAnimation?this.scrollTo(o,"y"):this.$refs.main.scrollTop=o}}}},_transitionEnd(t,e){this.$refs.content.style.transition="",this.$refs.content.style.webkitTransition="",this.$refs.content.style.transform="",this.$refs.content.style.webkitTransform="";const{main:i}=this.$refs;"x"===e?(i.style.overflowX=this.scrollX?"auto":"hidden",i.scrollLeft=t):"y"===e&&(i.style.overflowY=this.scrollY?"auto":"hidden",i.scrollTop=t),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd)},_setRefreshState(t){switch(t){case"refreshing":this.refresherHeight=this.refresherThreshold,this.beforeRefreshing||(this.beforeRefreshing=!0,this.$trigger("refresherrefresh",{},{}));break;case"restore":case"refresherabort":this.beforeRefreshing=!1,this.refresherHeight=0,this.toUpperNumber=0,"restore"===t&&(this.triggerAbort=!1,this.$trigger("refresherrestore",{},{})),"refresherabort"===t&&this.triggerAbort&&(this.triggerAbort=!1,this.$trigger("refresherabort",{},{}))}this.refreshState=t},getScrollPosition(){const{main:t}=this.$refs;return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth}}}},[["render",function(t,e,i,_,f,p){return s(),o("uni-scroll-view",a(c(t.$attrs)),[r("div",{ref:"wrap",class:"uni-scroll-view"},[r("div",{ref:"main",style:n({"overflow-x":i.scrollX?"auto":"hidden","overflow-y":i.scrollY?"auto":"hidden"}),class:"uni-scroll-view"},[r("div",{ref:"content",class:"uni-scroll-view-content"},[i.refresherEnabled?(s(),o("div",{key:0,ref:"refresherinner",style:n({"background-color":i.refresherBackground,height:f.refresherHeight+"px"}),class:"uni-scroll-view-refresher"},["none"!==i.refresherDefaultStyle?(s(),o("div",{key:0,class:"uni-scroll-view-refresh"},[r("div",{class:"uni-scroll-view-refresh-inner"},["pulling"==f.refreshState?(s(),o("svg",{key:"refresh__icon",style:n({transform:"rotate("+f.refreshRotate+"deg)"}),fill:"#2BD009",class:"uni-scroll-view-refresh__icon",width:"24",height:"24",viewBox:"0 0 24 24"},[r("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),r("path",{d:"M0 0h24v24H0z",fill:"none"})],4)):h("v-if",!0),"refreshing"==f.refreshState?(s(),o("svg",{key:"refresh__spinner",class:"uni-scroll-view-refresh__spinner",width:"24",height:"24",viewBox:"25 25 50 50"},[r("circle",{cx:"50",cy:"50",r:"20",fill:"none",style:{color:"#2bd009"},"stroke-width":"3"})])):h("v-if",!0)])])):h("v-if",!0),"none"==i.refresherDefaultStyle?l(t.$slots,"refresher",{key:1},void 0,!0):h("v-if",!0)],4)):h("v-if",!0),l(t.$slots,"default",{},void 0,!0)],512)],4)],512)],16)}],["__scopeId","data-v-42c5b200"]]);let S={};_()&&(S={ScrollView:b},f(["uni-scroll-view"],app));const x={components:{...S}};export{x as S};