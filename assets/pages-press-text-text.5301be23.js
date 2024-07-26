import{_ as e,o as t,c as n,n as s,j as o,f as i,h as r,q as l,w as a,v as p,t as c,x as u,e as d,y as f}from"./index-66fd861e.js";import{a as m}from"./add-unit.9de8b2f7.js";import{t as y}from"./time.81a17f1c.js";import{s as h}from"./style.0f94ff97.js";import{P as g}from"./press-icon-plus.a1094e70.js";import{P as x}from"./press-link.b601fbf5.js";import"./press-info.8563e54c.js";import"./utils.d8f13396.js";import"./press-component.573dfcec.js";const S={props:{customStyle:{type:String,default:""},type:{type:String,default:""},show:{type:Boolean,default:!0},text:{type:[String,Number],default:""},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},mode:{type:String,default:""},href:{type:String,default:""},format:{type:[String,Function],default:""},call:{type:Boolean,default:!1},openType:{type:String,default:""},bold:{type:Boolean,default:!1},block:{type:Boolean,default:!1},lines:{type:[String,Number],default:""},color:{type:String,default:"#303133"},size:{type:[String,Number],default:15},iconStyle:{type:[Object,String],default:""},decoration:{type:String,default:"none"},margin:{type:[Object,String,Number],default:0},lineHeight:{type:[String,Number],default:""},align:{type:String,default:"left"},wordWrap:{type:String,default:"normal"}}};function b(e,t=15){return+parseFloat(Number(e).toPrecision(t))}function k(e){const t=e.toString().split(/[eE]/),n=(t[0].split(".")[1]||"").length-+(t[1]||0);return n>0?n:0}function _(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));const t=k(e);return t>0?b(Number(e)*Math.pow(10,t)):Number(e)}function v(e){(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn(`${e} 超出了精度限制，结果可能不正确`)}function N(e,t){const[n,s,...o]=e;let i=t(n,s);return o.forEach((e=>{i=t(i,e)})),i}function w(...e){if(e.length>2)return N(e,w);const[t,n]=e,s=_(t),o=_(n),i=k(t)+k(n),r=s*o;return v(r),r/Math.pow(10,i)}function M(...e){if(e.length>2)return N(e,M);const[t,n]=e,s=_(t),o=_(n);return v(s),v(o),w(s/o,b(Math.pow(10,k(n)-k(t))))}function T(e,t=0,n=".",s=","){e=`${e}`.replace(/[^0-9+-Ee.]/g,"");const o=isFinite(+e)?+e:0,i=isFinite(+t)?Math.abs(t):0,r=void 0===s?",":s,l=void 0===n?".":n;let a="";a=(i?`${function(e,t){const n=Math.pow(10,t);let s=M(Math.round(Math.abs(w(e,n))),n);return e<0&&0!==s&&(s=w(s,-1)),s}(o,i)}`:`${Math.round(o)}`).split(".");const p=/(-?\d+)(\d{3})/;for(;p.test(a[0]);)a[0]=a[0].replace(p,`$1${r}$2`);return(a[1]||"").length<i&&(a[1]=a[1]||"",a[1]+=new Array(i-a[1].length+1).join("0")),a.join(l)}let I=[];I=[{computed:{value(){const{text:e,mode:t,format:n,href:s}=this;return"price"===t?"function"==typeof n?n(e):T(e,2):"date"===t?"function"==typeof n?n(e):y(e,n||"yyyy-MM-dd"):"phone"===t?"function"==typeof n?n(e):"encrypt"===n?`${e.substr(0,3)}****${e.substr(7)}`:e:"name"===t?"function"==typeof n?n(e):"encrypt"===n?this.formatName(e):e:e}},methods:{formatName(e){let t="";if(2===e.length)t=`${e.substr(0,1)}*`;else if(e.length>2){let n="";for(let t=0,s=e.length-2;t<s;t++)n+="*";t=e.substr(0,1)+n+e.substr(-1,1)}else t=e;return t}}},S];const P=e({i18n:{"zh-CN":{theme:"自定义主题",phone:"电话",date:"日期",name:"姓名",link:"超链接",price:"金额",icon:"前后图标",ellipsis:"超出隐藏",openType:"小程序开放能力",primary:"主色",error:"错误",success:"成功",warning:"警告",info:"信息",oneName:"花木兰",checkMore:"查看更多",snow:"2002年的第一场雪",shareWX:"分享小程序",basicText:"朝花夕拾"},"en-US":{theme:"Theme",phone:"Phone Mode",date:"Date Mode",name:"Name",link:"Link",price:"Price",icon:"Icon",ellipsis:"Ellipsis",openType:"OpenType",primary:"Primary",error:"Error",success:"Success",warning:"Warning",info:"INfo",oneName:"AoBaMa",checkMore:"Check More",snow:"The Snow",shareWX:"Share To WeiXin",basicText:"Seize The Day"}},components:{PressText:e({name:"PressText",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:g,PressLink:x},mixins:I,emits:["click"],data:()=>({}),computed:{valueStyle(){const e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:m(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=m(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),h([e,this.customStyle])},parsedIconStyle(){return h([{fontSize:"15px",display:"flex",alignItems:"center"},this.iconStyle])},isNvue:()=>!1,isMp:()=>!1},methods:{styleUtil:h,clickHandler(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}},[["render",function(e,m,y,h,g,x){const S=d("PressIconPlus"),b=d("PressLink"),k=f;return e.show?(t(),n("div",{key:0,class:s(["press-text",[]]),style:o({margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"}),onClick:m[0]||(m[0]=u(((...e)=>x.clickHandler&&x.clickHandler(...e)),["stop"]))},["price"===e.mode?(t(),n("span",{key:0,class:s(["press-text__price",e.type&&`press-text__value--${e.type}`]),style:o(x.valueStyle)}," ￥ ",6)):i("v-if",!0),e.prefixIcon?(t(),n("div",{key:1,class:"press-text__prefix-icon"},[r(S,{name:e.prefixIcon,"custom-style":x.parsedIconStyle},null,8,["name","custom-style"])])):i("v-if",!0),"link"===e.mode?(t(),l(b,{key:2,text:e.value,href:e.href,underline:""},null,8,["text","href"])):e.openType&&x.isMp?(t(),l(k,{key:3,class:s(["press-reset-button","press-text__value",e.type&&`press-text__value--${e.type}`]),style:o(x.valueStyle),"data-index":e.index,openType:e.openType,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting},{default:a((()=>[p(c(e.value),1)])),_:1},8,["class","style","data-index","openType","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting"])):(t(),n("span",{key:4,class:s(["press-text__value",[e.type&&`press-text__value--${e.type}`,e.lines&&`press-line-${e.lines}`]]),style:o(x.valueStyle)},c(e.value),7)),e.suffixIcon?(t(),n("div",{key:5,class:"press-text__suffix-icon"},[r(S,{name:e.suffixIcon,"custom-style":x.parsedIconStyle},null,8,["name","custom-style"])])):i("v-if",!0)],4)):i("v-if",!0)}],["__scopeId","data-v-5599f277"]])},data:()=>({}),methods:{clickHandler(){this.onGTip("请在小程序内查看效果")}}},[["render",function(e,s,o,i,l,p){const c=d("PressText"),u=d("demo-block");return t(),n("div",{class:"demo-wrap"},[r(u,{title:e.t("basicUsage")},{default:a((()=>[r(c,{text:e.t("basicText")},null,8,["text"])])),_:1},8,["title"]),r(u,{title:e.t("theme"),"section-style":"display: flex;"},{default:a((()=>[r(c,{type:"primary",text:e.t("primary")},null,8,["text"]),r(c,{type:"error",text:e.t("error")},null,8,["text"]),r(c,{type:"success",text:e.t("success")},null,8,["text"]),r(c,{type:"warning",text:e.t("warning")},null,8,["text"]),r(c,{type:"info",text:e.t("info")},null,8,["text"])])),_:1},8,["title"]),r(u,{title:e.t("phone")},{default:a((()=>[r(c,{mode:"phone",text:"19012345678",call:""}),r(c,{mode:"phone",text:"19012345678",format:"encrypt"})])),_:1},8,["title"]),r(u,{title:e.t("date")},{default:a((()=>[r(c,{mode:"date",text:"1720633407953"})])),_:1},8,["title"]),r(u,{title:e.t("name")},{default:a((()=>[r(c,{mode:"name",text:e.t("oneName"),format:"encrypt"},null,8,["text"])])),_:1},8,["title"]),r(u,{title:e.t("link")},{default:a((()=>[r(c,{mode:"link",text:"Go to Press UI docs",href:"https://novlan1.github.io/press-ui/"})])),_:1},8,["title"]),r(u,{title:e.t("price")},{default:a((()=>[r(c,{mode:"price",text:"728732.32"})])),_:1},8,["title"]),r(u,{title:e.t("icon"),"section-style":"display: flex;"},{default:a((()=>[r(c,{"prefix-icon":"like-o","icon-style":"margin-right: 4px;",text:e.t("snow")},null,8,["text"]),r(c,{"suffix-icon":"arrow",text:e.t("checkMore")},null,8,["text"])])),_:1},8,["title"]),r(u,{title:e.t("ellipsis")},{default:a((()=>[r(c,{lines:2,text:e.t("longText")},null,8,["text"])])),_:1},8,["title"]),r(u,{title:e.t("openType")},{default:a((()=>[r(c,{text:e.t("shareWX"),"open-type":"share",type:"success",onClick:p.clickHandler},null,8,["text","onClick"])])),_:1},8,["title"])])}],["__scopeId","data-v-e6a60cfd"]]);export{P as default};