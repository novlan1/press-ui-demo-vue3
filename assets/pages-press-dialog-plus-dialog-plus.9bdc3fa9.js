import{P as t,D as o}from"./handler.fe0830b6.js";import{_ as e,p as l,o as n,c as s,i,j as a,e as c,a as r}from"./index-e77dc938.js";import"./handler-helper.33469563.js";import"./index.042971ec.js";import"./press-popup-plus.ade0238d.js";import"./color.3a05f6e0.js";const m=t=>new Promise((o=>{"confirm"===t?setTimeout((()=>{o(!0)}),1e3):o(!0)}));const u=e({i18n:{"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",asyncClose:"异步关闭",roundButton:"圆角按钮样式",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",asyncClose:"Async Close",roundButton:"Round Button Style",componentCall:"Component Call"}},components:{PressDialogPlus:t,PressCell:l},data:()=>({show:!1}),methods:{onShowDialog(t){if("component"===t)return void(this.show=!0);let e=this.t("title"),l=!1,n=null;"noTitle"===t?e="":"cancel"===t?l=!0:"async"===t&&(l=!0,n=m),o.alert({context:this,title:e,showCancelButton:l,message:this.t("content"),beforeClose:n}).then((()=>{console.log("dialog resolve")})).catch((()=>{console.log("dialog reject")}))},getUserInfo(t){console.log("getUserInfo.res",t)},onClose(){this.show=!1}}},[["render",function(t,o,e,l,m,u){const p=c("press-cell"),h=c("demo-block"),d=c("press-dialog-plus");return n(),s("div",{class:"demo-wrap"},[i(h,{title:t.t("basicUsage")},{default:a((()=>[i(p,{title:t.t("alert1"),"is-link":"",onClick:o[0]||(o[0]=t=>u.onShowDialog("normal"))},null,8,["title"]),i(p,{title:t.t("alert2"),"is-link":"",onClick:o[1]||(o[1]=t=>u.onShowDialog("noTitle"))},null,8,["title"]),i(p,{title:t.t("confirm"),"is-link":"",onClick:o[2]||(o[2]=t=>u.onShowDialog("cancel"))},null,8,["title"])])),_:1},8,["title"]),i(h,{title:t.t("asyncClose")},{default:a((()=>[i(p,{title:t.t("asyncClose"),"is-link":"",onClick:o[3]||(o[3]=t=>u.onShowDialog("async"))},null,8,["title"])])),_:1},8,["title"]),i(h,{title:t.t("componentCall")},{default:a((()=>[i(p,{title:t.t("componentCall"),"is-link":"",onClick:o[4]||(o[4]=t=>u.onShowDialog("component"))},null,8,["title"])])),_:1},8,["title"]),i(d,{"use-slot":"",title:t.t("title"),show:m.show,"show-cancel-button":"","confirm-button-open-type":"getUserInfo",onClose:u.onClose,onGetuserinfo:u.getUserInfo},{default:a((()=>[r("img",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_260c4142c7225b5f73.jpeg",style:{width:"100%","margin-top":"16px"},mode:"aspectFit"})])),_:1},8,["title","show","onClose","onGetuserinfo"])])}]]);export{u as default};