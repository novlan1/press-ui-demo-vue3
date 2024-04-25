import{_ as t,a as i,K as s,T as l,o,c as e,d as a,w as n,k as c}from"./index-09cb8946.js";const d=t({i18n:{"zh-CN":{customTip:"自定义提示",text:"文字提示",loading:"加载提示",default:"默认",success:"成功提示",fail:"失败提示",dynamic:"动态更新提示",html:"HTML提示",toastTip:"我是提示文案，建议不超过十五字~",loadingTip:"加载中...",successTip:"成功文案",failTip:"失败文案",htmlTip:'我是提示文案，建议不超过<span style="color: #07A872">十五字</span>~',dynamicTip:t=>`倒计时 ${t} 秒`,noDestroy:"不消失"},"en-US":{customTip:"Custom Tip",text:"Show",loading:"Loading",default:"Default",success:"Success",fail:"Fail",dynamic:"Dynamic",html:"HTML",toastTip:"Some messages",loadingTip:"Loading...",successTip:"Success",failTip:"Fail",htmlTip:'Some <span style="color: #07A872">messages</span>',dynamicTip:t=>`${t} seconds`,noDestroy:"Not Destroy"}},components:{PressCell:i,PressToast:s},data:()=>({customStyle:"",timer:null}),methods:{onShowToast(){l(this.t("toastTip"))},onShowToastLoading(t,i=3e3){l.clear(),"normal"!==t?l.loading({message:this.t("loadingTip"),forbidClick:!!i,loadingType:"spinner",duration:i}):l.loading({message:this.t("loadingTip"),forbidClick:!!i,duration:i})},onShowToastSuccess(t){"success"!==t?l.fail(this.t("failTip")):l.success(this.t("successTip"))},onShowDynamicToast(){const t=l.loading({duration:0,forbidClick:!0,message:this.t("dynamicTip",3)});let i=3;clearInterval(this.timer),this.timer=setInterval((()=>{i-=1,i?t.set("dataMessage",this.t("dynamicTip",i)):(clearInterval(this.timer),l.clear())}),1e3)},onShowHtmlToast(){l({message:this.t("htmlTip"),duration:3e3,type:"html"})}}},[["render",function(t,i,s,l,d,m){const r=c("press-cell"),u=c("demo-block"),T=c("press-toast");return o(),e("div",{class:"demo-wrap"},[a(u,{title:t.t("text")},{default:n((()=>[a(r,{title:t.t("check"),"is-link":"",onClick:m.onShowToast},null,8,["title","onClick"])])),_:1},8,["title"]),a(u,{title:t.t("loading")},{default:n((()=>[a(r,{title:t.t("default"),"is-link":"",onClick:i[0]||(i[0]=t=>m.onShowToastLoading("normal"))},null,8,["title"]),a(r,{title:"Spinner","is-link":"",onClick:i[1]||(i[1]=t=>m.onShowToastLoading("spinner"))}),a(r,{title:t.t("noDestroy"),"is-link":"",onClick:i[2]||(i[2]=t=>m.onShowToastLoading("normal",0))},null,8,["title"])])),_:1},8,["title"]),a(u,{title:t.t("customTip")},{default:n((()=>[a(r,{title:t.t("success"),"is-link":"",onClick:i[3]||(i[3]=t=>m.onShowToastSuccess("success"))},null,8,["title"]),a(r,{title:t.t("fail"),"is-link":"",onClick:i[4]||(i[4]=t=>m.onShowToastSuccess("fail"))},null,8,["title"]),a(r,{title:t.t("dynamic"),"is-link":"",onClick:m.onShowDynamicToast},null,8,["title","onClick"]),a(r,{title:t.t("html"),"is-link":"",onClick:m.onShowHtmlToast},null,8,["title","onClick"])])),_:1},8,["title"]),a(T,{id:"press-toast",ref:"press-toast"},null,512)])}]]);export{d as default};