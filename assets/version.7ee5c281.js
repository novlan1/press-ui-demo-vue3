import{i as n}from"./utils.bb2d8d10.js";import"./index-43eb3ea0.js";let t={};function e(){try{Object.keys(t).length||"undefined"==typeof uni||"function"!=typeof(null==uni?void 0:uni.getSystemInfoSync)||(t=uni.getSystemInfoSync())}catch(n){console.log("[getSystemInfoSync] err",n)}return t}function r(n){return setTimeout((()=>{n()}),1e3/30)}function o(n,t){s("2.4.0")&&n.groupSetData?n.groupSetData(t):t()}function u({selector:t,callback:e,options:r}){if(n()){const n=new IntersectionObserver(e,r);return document.querySelectorAll(t).forEach((t=>{n.observe(t)})),!0}return!1}function s(n){return function(n="",t=""){const e=n.split("."),r=t.split("."),o=Math.max(e.length,r.length);for(;e.length<o;)e.push("0");for(;r.length<o;)r.push("0");for(let u=0;u<o;u++){const n=parseInt(e[u],10),t=parseInt(r[u],10);if(n>t)return 1;if(n<t)return-1}return 0}(e().SDKVersion,n)>=0}function i(){return s("2.9.3")}function c(){return s("2.10.3")}function f(){return s("2.9.0")}function a(){return!1}export{c as a,a as b,i as c,e as d,f as e,o as g,u as i,r};