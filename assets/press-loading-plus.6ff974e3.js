import{u as t}from"./utils.d8f13396.js";import{s as e}from"./style.0f94ff97.js";import{a as s}from"./add-unit.9de8b2f7.js";import{d as i,a as r}from"./press-component.573dfcec.js";import{_ as a,o as n,c as o,i as l,n as p,j as d,F as c,p as y,f as u,r as f}from"./index-66fd861e.js";const m={spinnerStyle:function(t){return e({color:t.color,width:s(t.size),height:s(t.size)})},textStyle:function(t){return e({"font-size":s(t.textSize)})}};const S=a({name:"PressLoadingPlus",options:{...i},props:{...r,customStyle:{type:String,default:""},color:{type:String,default:""},vertical:{type:Boolean,default:!1},type:{type:String,default:"circular"},size:{type:String,default:""},textSize:{type:String,default:""}},emits:[],data:()=>({array12:Array.from({length:12})}),computed:{loadingClass(){const{vertical:e,customClass:s}=this;return`${s} ${t.bem2("loading",{vertical:e})}`},spinnerStyle(){const{color:t,size:e}=this;return m.spinnerStyle({color:t,size:e})},textStyle(){const{textSize:t}=this;return m.textStyle({textSize:t})}}},[["render",function(t,e,s,i,r,a){return n(),o("div",{class:"press-loading-index"},[l("div",{class:p(a.loadingClass),style:d(s.customStyle)},[l("div",{class:p("press-loading__spinner press-loading__spinner--"+s.type),style:d(a.spinnerStyle)},["spinner"===s.type?(n(!0),o(c,{key:0},y(r.array12,((t,e)=>(n(),o("div",{key:e,class:"press-loading__dot"})))),128)):u("v-if",!0)],6),l("div",{class:"press-loading__text",style:d(a.textStyle)},[f(t.$slots,"default",{},void 0,!0)],4)],6)])}],["__scopeId","data-v-bfee2488"]]);export{S as P};