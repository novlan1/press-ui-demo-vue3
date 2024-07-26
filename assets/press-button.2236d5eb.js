import{P as e}from"./press-icon-plus.a1094e70.js";import{P as s}from"./press-loading-plus.6ff974e3.js";import{P as o}from"./press-loading.084df768.js";import{b as t}from"./button.e606098b.js";import{a as n}from"./version.0d1ce575.js";import{u as a}from"./utils.d8f13396.js";import{s as r}from"./style.0f94ff97.js";import{d as i,a as l}from"./press-component.573dfcec.js";import{_ as p,o as d,c,q as u,F as g,h as m,t as f,f as y,i as b,r as h,n as S,j as k,x,e as P}from"./index-66fd861e.js";const C=["normal","large","small","mini"];function v(e){const s=function(e){const s={},{size:o}=e;return o&&("string"===o&&C.indexOf(o)<=-1?(s.height=o,s.width=o):"object"==typeof o&&(o.height&&(s.height=o.height),o.width&&(s.width=o.width))),s}(e);if(!e.color)return r([s,e.customStyle]);const o={color:e.plain?e.color:"#fff",background:e.plain?null:e.color,...s};return-1!==e.color.indexOf("gradient")?o.border=0:o["border-color"]=e.color,r([o,e.customStyle])}const j={"e-sport-primary":["e-sport-primary"],"e-sport-primary-bg":["e-sport-primary","e-sport-bg"],"e-sport-primary-bg-lg":["e-sport-primary","e-sport-bg","e-sport-bg-lg"],"e-sport-primary-bg-xl":["e-sport-primary","e-sport-bg","e-sport-bg-xl"],"e-sport-secondary":["e-sport-secondary"],"e-sport-border":["e-sport-border"]},I=[t];n()&&I.push("wx://form-field-button");const T=p({name:"PressButton",options:{virtualHost:!0,...i,styleIsolation:"shared"},components:{PressIconPlus:e,PressLoadingPlus:s,PressLoading:o},mixins:I,props:{formType:{type:String,default:""},icon:{type:String,default:""},classPrefix:{type:String,default:"press-icon-plus"},plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:{type:Boolean,default:!1},hairline:Boolean,disabled:Boolean,loadingText:{type:String,default:""},customStyle:{type:String,default:""},loadingType:{type:String,default:"circular"},type:{type:String,default:"default"},dataset:{type:[Object,null],default:null},size:{type:[String,Object],default:"normal"},loadingSize:{type:String,default:"20px"},color:{type:String,default:""},...l},emits:["click","getuserinfo"],data:()=>({baseStyle:""}),computed:{isESportLoading(){return this.loading&&j[this.type]},buttonClass(){const{type:e,size:s,block:o,round:t,plain:n,square:r,loading:i,disabled:l,hairline:p,customClass:d}=this,c=C.indexOf(s)>-1?s:"";let u=[],g=e;if(j[e]&&(u=j[e],g=""),e.indexOf("-disabled")>-1){const s=e.replace("-disabled","");u=[...j[s],"e-sport-disabled"]}return`${d} ${a.bem2("button",[g,c,...u,{block:o,round:t,plain:n,square:r,loading:i,disabled:l,hairline:p,unclickable:l||i}])} ${p?"press-hairline--surround":""}`},buttonStyle(){const{plain:e,color:s,customStyle:o,size:t}=this;return v({plain:e,color:s,customStyle:o,size:t})},loadingColor(){const{type:e,color:s,plain:o}=this;return(t={type:e,color:s,plain:o}).plain?t.color?t.color:"#c9c9c9":"default"===t.type?"#c9c9c9":"#fff";var t}},methods:{onFakeClick(e){const{disabled:s,loading:o}=this;s||o||this.onClick(e)},onClick(e){this.$emit("click",e);const{canIUseGetUserProfile:s,openType:o,getUserProfileDesc:t,lang:n}=this;"getUserInfo"===o&&s&&uni.getUserProfile({desc:t||"  ",lang:n||"en",complete:e=>{this.$emit("getuserinfo",e)}})}}},[["render",function(e,s,o,t,n,a){const r=P("PressLoading"),i=P("press-loading-plus"),l=P("press-icon-plus");return d(),c("Button",{id:e.id,"data-detail":o.dataset,class:S(a.buttonClass),"hover-class":["press-button--active",e.hoverClass],lang:e.lang,"form-type":o.formType,style:k(a.buttonStyle),"open-type":o.disabled||o.loading||e.canIUseGetUserProfile&&"getUserInfo"===e.openType?"":e.openType,"business-id":e.businessId,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,"aria-label":e.ariaLabel,onClick:s[0]||(s[0]=x(((...e)=>a.onFakeClick&&a.onFakeClick(...e)),["stop"])),onGetuserinfo:s[1]||(s[1]=(...s)=>e.onGetUserInfo&&e.onGetUserInfo(...s)),onContact:s[2]||(s[2]=(...s)=>e.onContact&&e.onContact(...s)),onGetphonenumber:s[3]||(s[3]=(...s)=>e.onGetPhoneNumber&&e.onGetPhoneNumber(...s)),onError:s[4]||(s[4]=(...s)=>e.onError&&e.onError(...s)),onLaunchapp:s[5]||(s[5]=(...s)=>e.onLaunchApp&&e.onLaunchApp(...s)),onOpensetting:s[6]||(s[6]=(...s)=>e.onOpenSetting&&e.onOpenSetting(...s)),onChooseavatar:s[7]||(s[7]=(...s)=>e.onChooseAvatar&&e.onChooseAvatar(...s))},[a.isESportLoading?(d(),u(r,{key:0,"loading-scenes":"btn"})):o.loading?(d(),c(g,{key:1},[m(i,{"custom-class":e.loadingClass,size:o.loadingSize,type:o.loadingType,color:a.loadingColor},null,8,["custom-class","size","type","color"]),o.loadingText?(d(),c("div",{key:0,class:"press-button__loading-text"},f(o.loadingText),1)):y("v-if",!0)],64)):(d(),c(g,{key:2},[o.icon?(d(),u(l,{key:0,size:"1.2em",name:o.icon,"class-prefix":o.classPrefix,class:"press-button__icon","custom-style":"line-height: inherit;"},null,8,["name","class-prefix"])):y("v-if",!0),b("div",{class:"press-button__text"},[h(e.$slots,"default",{},void 0,!0)])],64))],46,["id","data-detail","hover-class","lang","form-type","open-type","business-id","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","aria-label"])}],["__scopeId","data-v-1da843d1"]]);export{T as P};