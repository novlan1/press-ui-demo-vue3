import{u as s}from"./utils.d8f13396.js";import{_ as t,o as e,c as l,n as o,t as a,f as r,i,r as n}from"./index-66fd861e.js";const p=t({name:"PressCellGroup",props:{title:{type:String,default:""},border:{type:Boolean,default:!0},inset:{type:Boolean,default:!1},customClass:{type:String,default:""}},computed:{titleClass(){const{inset:t}=this;return s.bem2("cell-group__title",{inset:t})},groupClass(){const{inset:t,border:e,customClass:l}=this;return`${l} ${s.bem2("cell-group",{inset:t})} ${e?"press-hairline--top-bottom":""}`}}},[["render",function(s,t,p,u,d,c){return e(),l("div",{class:"press-cell-group-index"},[p.title?(e(),l("div",{key:0,class:o(c.titleClass)},a(p.title),3)):r("v-if",!0),i("div",{class:o(c.groupClass)},[n(s.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-678ab05c"]]);export{p as P};