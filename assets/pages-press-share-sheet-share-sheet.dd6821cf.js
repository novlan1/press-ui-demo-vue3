import{_ as e,o as t,c as s,i as o,F as i,p as n,h as c,w as r,t as a,f as l,n as p,y as h,q as m,r as d,v as u,e as y}from"./index-66fd861e.js";import{P as w}from"./press-popup-plus.c2e56d09.js";import{d as k,a as S}from"./press-component.573dfcec.js";import{u as v}from"./utils.d8f13396.js";import{P as f}from"./press-cell.182b41b4.js";import"./press-icon-plus.a1094e70.js";import"./style.0f94ff97.js";import"./add-unit.9de8b2f7.js";import"./press-info.8563e54c.js";import"./press-overlay.1835b372.js";import"./press-transition.8a179cbe.js";import"./version.0d1ce575.js";import"./link.af741451.js";import"./event.b5c3f8af.js";import"./support-passive.bc409298.js";const _=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"];const b={getIconURL:function(e){return-1!==_.indexOf(e)?`https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fshare-sheet-${e}.png`:e}};const g=e({options:{...k},components:{},props:{options:{type:Array,default:()=>[]},showBorder:Boolean,...S},emits:["select"],data:()=>({computed:b}),computed:{optionsClass(){const{showBorder:e}=this;return v.bem2("share-sheet__options",{border:e})}},methods:{onSelect(e){const{index:t}=e.currentTarget.dataset,s=this.options[t];this.$emit("select",Object.assign(Object.assign({},s),{index:t}))}}},[["render",function(e,m,d,u,y,w){const k=h;return t(),s("div",{class:"press-share-sheet-options"},[o("div",{class:p(w.optionsClass)},[(t(!0),s(i,null,n(d.options,((e,i)=>(t(),s("div",{key:i,class:"press-share-sheet__option","data-index":i,onClick:m[0]||(m[0]=(...e)=>w.onSelect&&w.onSelect(...e))},[c(k,{class:"press-share-sheet__button","open-type":e.openType},{default:r((()=>[o("img",{src:y.computed.getIconURL(e.icon),class:"press-share-sheet__icon"},null,8,["src"]),e.name?(t(),s("div",{key:0,class:"press-share-sheet__name"},a(e.name),1)):l("v-if",!0),e.description?(t(),s("div",{key:1,class:"press-share-sheet__option-description"},a(e.description),1)):l("v-if",!0)])),_:2},1032,["open-type"])],8,["data-index"])))),128))],2)])}],["__scopeId","data-v-fc325bc4"]]);const C={isMulti:function(e){return null!=e&&null!=e[0]&&(Array.isArray(e)&&Array.isArray(e[0]))}};const q=e({i18n:{"zh-CN":{Custom:"自定义",qq:"QQ",name:"名称",link:"复制链接",title:"立即分享给好友",weibo:"微博",wechat:"微信",poster:"分享海报",qrcode:"二维码",multiLine:"展示多行选项",showSheet:"显示分享面板",withDesc:"展示描述信息",customIcon:"自定义图标",description:"描述信息",weappQrcode:"小程序码",wechatMoments:"朋友圈"},"en-US":{Custom:"Custom",qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}},components:{PressShareSheet:e({name:"PressShareSheet",options:{...k},components:{PressPopup:w,Options:g},props:{show:Boolean,overlayStyle:{type:String,default:""},zIndex:{type:Number,default:100},title:{type:String,default:""},cancelText:{type:String,default:"取消"},description:{type:String,default:""},options:{type:Array,default:()=>[]},overlay:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},duration:{type:Number,default:300},...S},emits:["click-overlay","cancel","select","close"],data:()=>({computed:C}),methods:{onClickOverlay(){this.$emit("click-overlay")},onCancel(){this.onClose(),this.$emit("cancel")},onSelect(e){this.$emit("select",e)},onClose(){this.$emit("close")}}},[["render",function(e,p,w,k,S,v){const f=y("options"),_=h,b=y("press-popup");return t(),m(b,{round:"",class:"press-share-sheet",show:w.show,position:"bottom",overlay:w.overlay,duration:w.duration,"z-index":w.zIndex,"overlay-style":w.overlayStyle,"close-on-click-overlay":w.closeOnClickOverlay,"safe-area-inset-bottom":w.safeAreaInsetBottom,onClose:v.onClose,onClickOverlay:v.onClickOverlay},{default:r((()=>[o("div",{class:"press-share-sheet__header"},[o("div",{class:"press-share-sheet__title"},[d(e.$slots,"title",{},void 0,!0)]),w.title?(t(),s("div",{key:0,class:"press-share-sheet__title"},a(w.title),1)):l("v-if",!0),o("div",{class:"press-share-sheet__description"},[d(e.$slots,"description",{},void 0,!0)]),w.description?(t(),s("div",{key:1,class:"press-share-sheet__description"},a(w.description),1)):l("v-if",!0)]),S.computed.isMulti(w.options)?(t(!0),s(i,{key:0},n(w.options,((e,s)=>(t(),m(f,{key:s,"show-border":0!==s,options:e,onSelect:v.onSelect},null,8,["show-border","options","onSelect"])))),128)):(t(),m(f,{key:1,options:w.options,onSelect:v.onSelect},null,8,["options","onSelect"])),c(_,{type:"button",class:"press-share-sheet__cancel",onClick:v.onCancel},{default:r((()=>[u(a(w.cancelText),1)])),_:1},8,["onClick"])])),_:3},8,["show","overlay","duration","z-index","overlay-style","close-on-click-overlay","safe-area-inset-bottom","onClose","onClickOverlay"])}],["__scopeId","data-v-195cecad"]]),PressCell:f},data(){return{demoList:[{title:this.t("basicUsage"),list:[{title:this.t("basicUsage"),type:"basic"}]},{title:this.t("Custom"),list:[{title:this.t("multiLine"),type:"multiLine"},{title:this.t("customIcon"),type:"customIcon"},{title:this.t("withDesc"),type:"description"}]}],showShare:!1,description:"",curOptions:[]}},computed:{options(){return[{name:this.t("wechat"),icon:"wechat",openType:"share"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("link"),icon:"link"},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]},multiLineOptions(){return[[{name:this.t("wechat"),icon:"wechat"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("qq"),icon:"qq"}],[{name:this.t("link"),icon:"link"},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]]},customIconOptions(){return[{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-fire.png"},{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-light.png"},{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-water.png"}]},descriptionOptions(){return[{name:this.t("wechat"),icon:"wechat"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("link"),icon:"link",description:this.t("description")},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]}},mounted(){this.curOptions=this.options},methods:{onShowShareSheet(e){let t="";switch(e){case"basic":this.curOptions=this.options;break;case"multiLine":this.curOptions=this.multiLineOptions;break;case"customIcon":this.curOptions=this.customIconOptions;break;case"description":this.curOptions=this.descriptionOptions,t=this.t("description")}this.showShare=!0,this.description=t},onSelect(e){console.log("[onSelect] val",e),this.showShare=!1},onClose(){this.showShare=!1}}},[["render",function(e,o,a,l,p,h){const d=y("press-cell"),u=y("demo-block"),w=y("press-share-sheet");return t(),s("div",{class:"demo-wrap"},[(t(!0),s(i,null,n(p.demoList,((e,o)=>(t(),m(u,{key:o,title:e.title},{default:r((()=>[(t(!0),s(i,null,n(e.list,(e=>(t(),m(d,{key:e.title,title:e.title,"is-link":"",onClick:t=>h.onShowShareSheet(e.type)},null,8,["title","onClick"])))),128))])),_:2},1032,["title"])))),128)),c(w,{show:p.showShare,title:e.t("title"),description:p.description,options:p.curOptions,onSelect:h.onSelect,onClose:h.onClose},null,8,["show","title","description","options","onSelect","onClose"])])}]]);export{q as default};