import{i as t}from"./utils.e5b41244.js";import{g as e}from"./index-e317c8c7.js";import{P as o}from"./event.a4d21620.js";function n(t){return new Promise((function(e,o){var n=document.getElementById("#clipboard");null==n||n.remove();var r=document.createElement("textarea");r.id="#clipboard",r.style.position="fixed",r.style.top="-9999px",r.style.zIndex="-9999",document.body.appendChild(r),r.value="".concat(t),r.select(),r.setSelectionRange(0,r.value.length);var i=document.execCommand("Copy",!1);r.blur(),i?e():o()}))}function r(t){return void 0===t?"":Array.isArray(t)?t.filter((t=>null!=t&&""!==t)).map((t=>r(t))).join(";"):"string"==typeof t?t:Object.keys(t).filter((e=>null!=t[e]&&""!==t[e])).map((e=>{return[(o=e,o.replace(/[A-Z]/g,(t=>`-${t}`)).toLowerCase()),[t[e]]].join(":");var o})).join(";")}const i={customClass:{type:String,default:""}},s={multipleSlots:!0,addGlobalClass:!0};let l={};function a(t){return setTimeout((()=>{t()}),1e3/30)}const c={"css.var":"--a:0","css.env":"top:env(a)","css.constant":"top:constant(a)"};function p(t){return!!c[t]&&(e=c[t],window.CSS&&CSS.supports&&(CSS.supports(e)||CSS.supports.apply(CSS,e.split(":"))));var e}const u=["top","left","right","bottom"],d={},f=[];let h,m;function g(){return m="CSS"in window&&"function"==typeof CSS.supports?CSS.supports("top: env(safe-area-inset-top)")?"env":CSS.supports("top: constant(safe-area-inset-top)")?"constant":"":"",m}function y(t,e){const o=t.style;Object.keys(e).forEach((t=>{const n=e[t];o[t]=n}))}const v=[];function S(t){t?v.push(t):v.forEach((t=>{t()}))}function b(){if(m="string"==typeof m?m:g(),!m)return void u.forEach((t=>{d[t]=0}));function t(t,e){const n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),l=1e4,a={position:"absolute",width:"100px",height:"200px",boxSizing:"border-box",overflow:"hidden",paddingBottom:`${m}(safe-area-inset-${e})`};y(n,a),y(r,a),y(i,{transition:"0s",animation:"none",width:"400px",height:"400px"}),y(s,{transition:"0s",animation:"none",width:"250%",height:"250%"}),n.appendChild(i),r.appendChild(s),t.appendChild(n),t.appendChild(r),S((()=>{r.scrollTop=l,n.scrollTop=l;let t=n.scrollTop,i=r.scrollTop;function s(){this.scrollTop!==(this===n?t:i)&&(r.scrollTop=l,n.scrollTop=l,t=n.scrollTop,i=r.scrollTop,function(t){C.length||setTimeout((()=>{const t={};C.forEach((e=>{t[e]=d[e]})),C.length=0,f.forEach((e=>{e(t)}))}),0);C.push(t)}(e))}n.addEventListener("scroll",s,o),r.addEventListener("scroll",s,o)}));const c=getComputedStyle(n);Object.defineProperty(d,e,{configurable:!0,get:()=>parseFloat(c.paddingBottom)})}const e=document.createElement("div");y(e,{position:"absolute",left:"0",top:"0",width:"0",height:"0",zIndex:"-1",overflow:"hidden",visibility:"hidden"}),u.forEach((o=>{t(e,o)})),document.body.appendChild(e),S(),h=!0}function w(t){return h||b(),d[t]}const C=[];const x={get support(){return 0!=("string"==typeof m?m:g()).length},get top(){return w("top")},get left(){return w("left")},get right(){return w("right")},get bottom(){return w("bottom")},onChange:function(t){g()&&(h||b(),"function"==typeof t&&f.push(t))},offChange:function(t){const e=f.indexOf(t);e>=0&&f.splice(e,1)}};function E(){if(t())return 0;const{statusBarHeight:e}=function(){try{Object.keys(l).length||"undefined"==typeof uni||"function"!=typeof(null==uni?void 0:uni.getSystemInfoSync)||(l=uni.getSystemInfoSync())}catch(t){console.log("[getSystemInfoSync] err",t)}return l}();return e}function j(t,o,n=!1){return new Promise((r=>{const i=null==t?void 0:t.$el;let s=null==i?void 0:i.querySelector(o);if(!s&&n&&(s=document.querySelector(o)),s){const t=s.getBoundingClientRect()||{},{top:o}=function(){if(p("css.var")){const{style:t}=document.documentElement,e=parseInt((t.getPropertyValue("--window-top").match(/\d+/)||["0"])[0],10),o=parseInt((t.getPropertyValue("--window-bottom").match(/\d+/)||["0"])[0],10),n=parseInt((t.getPropertyValue("--window-left").match(/\d+/)||["0"])[0],10),r=parseInt((t.getPropertyValue("--window-right").match(/\d+/)||["0"])[0],10),i=parseInt((t.getPropertyValue("--top-window-height").match(/\d+/)||["0"])[0],10);return{top:(e?e+x.top:0)+(i||0),bottom:o?o+x.bottom:0,left:n?n+x.left:0,right:r?r+x.right:0}}let t=0;const o=e();if(o.length){const e=o[o.length-1].$parent.$parent.navigationBar.type;t="default"===e||"float"===e?44:0}return{top:t,bottom:0,left:0,right:0}}();let n={left:t.left,right:t.right,width:t.width,height:t.height,x:t.x,y:t.y,top:t.top,bottom:t.bottom};n={...n,top:t.top-o,bottom:t.bottom-o},r(n)}else r({})}))}export{i as a,E as b,n as c,s as d,j as g,a as r,r as s};