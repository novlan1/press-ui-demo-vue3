import{E as t,G as s,H as e,I as o,K as a,_ as r,o as n,c as u,A as i,C as p,J as f}from"./index-95b0f20a.js";import{C as l}from"./relation.25345683.js";import{P as d}from"./parent-map.a476e3d9.js";const m={rootStyle:function(e){return e.gutter?t({"padding-right":s(e.gutter/2),"padding-left":s(e.gutter/2)}):""}};const c=r({name:"PressCol",options:{...e,styleIsolation:"shared"},mixins:[l(d)],props:{span:{type:Number,default:0},offset:{type:Number,default:0},...o},emits:[],data:()=>({utils:a,computed:m,gutter:0})},[["render",function(t,s,e,o,a,r){return n(),u("div",{class:p([t.customClass,a.utils.bem2("col",[e.span]),e.offset?`press-col--offset-${e.offset}`:""]),style:f(a.computed.rootStyle({gutter:a.gutter}))},[i(t.$slots,"default",{},void 0,!0)],6)}],["__scopeId","data-v-7bf7455e"]]);export{c as P};