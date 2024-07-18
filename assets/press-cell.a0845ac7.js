import{P as e}from"./press-icon-plus.43efdcdd.js";import{l as t}from"./link.82331220.js";import{u as s}from"./utils.bb2d8d10.js";import{s as l}from"./style.0f94ff97.js";import{a as i}from"./add-unit.0c57c089.js";import{d as a,a as o}from"./press-component.181873fd.js";import{g as r}from"./event.1c00601d.js";import{_ as n,o as c,c as u,x as d,n as p,r as m,e as y,h as f,F as S,y as h,t as C,i as v,z as k,j as g}from"./index-43eb3ea0.js";const b={titleStyle:function(e){return l([{"max-width":i(e.titleWidth),"min-width":i(e.titleWidth)},e.titleStyle])}};const I=n({name:"PressCell",components:{PressIconPlus:e},options:{...a,styleIsolation:"shared"},mixins:[t],props:{titleClass:{type:String,default:""},labelClass:{type:String,default:""},valueClass:{type:String,default:""},rightIconClass:{type:String,default:""},hoverClass:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:""},label:{type:String,default:""},center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleWidth:{type:String,default:""},customStyle:{type:String,default:""},arrowDirection:{type:String,default:""},useTitleSlot:Boolean,useLabelSlot:Boolean,border:{type:Boolean,default:!0},type:{type:String,default:""},titleStyle:{type:String,default:""},...o},emits:["click"],computed:{cellClass(){const{size:e,center:t,required:l,border:i,isLink:a,clickable:o,customClass:r,type:n}=this;return`${r} ${s.bem2("cell",[e,{center:t,required:l,borderless:!i,clickable:a||o,"e-sport":"e-sport"===n}])}`},cTitleStyle(){const{titleWidth:e,titleStyle:t}=this;return b.titleStyle({titleWidth:e,titleStyle:t})},leftIconBaseClass:()=>"press-cell__left-icon",leftIconCustomClass:()=>"",rightIconBaseClass:()=>"press-cell__right-icon",rightIconCustomClass(){return this.rightIconClass}},mounted(){},methods:{onClick(e){this.$emit("click",r(e)),this.jumpLink()}}},[["render",function(e,t,s,l,i,a){const o=g("PressIconPlus");return c(),u("div",{class:p(a.cellClass),"hover-class":["press-cell--hover",s.hoverClass],"hover-stay-time":"70",style:v(s.customStyle),onClick:t[0]||(t[0]=k(((...e)=>a.onClick&&a.onClick(...e)),["stop"]))},[s.icon?(c(),d(o,{key:0,name:s.icon,class:p([a.leftIconBaseClass]),"custom-class":a.leftIconCustomClass},null,8,["name","class","custom-class"])):m(e.$slots,"icon",{key:1},void 0,!0),y(" 【修改点】:empty在小程序下失效，用$slots判断 "),y(' v-if="title || useTitleSlot || label || useLabelSlot" '),f("div",{style:v(a.cTitleStyle),class:p(["press-cell__title",s.titleClass])},[s.title?(c(),u(S,{key:0},[h(C(s.title),1)],64)):(c(),u(S,{key:1},[y(' v-else-if="useTitleSlot" '),m(e.$slots,"title",{},void 0,!0)],2112)),s.label||s.useLabelSlot?(c(),u("div",{key:2,class:p(["press-cell__label",s.labelClass])},[s.useLabelSlot?m(e.$slots,"label",{key:0},void 0,!0):s.label?(c(),u(S,{key:1},[h(C(s.label),1)],64)):y("v-if",!0)],2)):y("v-if",!0)],6),f("div",{class:p(["press-cell__value",s.valueClass])},[s.value||0===s.value?(c(),u(S,{key:0},[h(C(s.value),1)],64)):m(e.$slots,"default",{key:1},void 0,!0)],2),s.isLink?(c(),d(o,{key:2,name:s.arrowDirection?"arrow-"+s.arrowDirection:"arrow",class:p([a.rightIconBaseClass]),"custom-class":a.rightIconCustomClass},null,8,["name","class","custom-class"])):m(e.$slots,"right-icon",{key:3},void 0,!0),m(e.$slots,"extra",{},void 0,!0)],14,["hover-class"])}],["__scopeId","data-v-ab07158e"]]);export{I as P};