import{P as e}from"./press-sticky.ced8b7be.js";import{_ as t,v as s,R as o,o as a,c as n,d as i,w as r,l as d,e as l,t as c,x as h}from"./index-a6ed3ec5.js";import{P as p}from"./press-notice-bar.ce49f107.js";import"./bind-event.15bd312c.js";const f=t({i18n:{"zh-CN":{offsetTop:"吸顶距离",setContainer:"指定容器",hide:"隐藏头部",show:"显示头部"},"en-US":{offsetTop:"Offset Top",setContainer:"Set Container",hide:"Hide Head",show:"Show Head"}},components:{PressSticky:e,PressButton:s,PressNoticeBar:p},mixins:[{data:()=>({showHeader:!0}),mounted(){this.showHeader||this.setHeaderStyle("none")},methods:{onToggleShowHeader(){this.showHeader=!this.showHeader;let e="none";this.showHeader&&(e="block"),this.setHeaderStyle(e)},setHeaderStyle(e){const t=document.querySelector("uni-page-head")||document.querySelector(".uni-page-head-wrap");t&&(t.style.display=e)}}}],data(){const e=this;return{container(){var t;return null==(t=e.$refs)?void 0:t.container}}},mounted(){o((()=>{this.container=()=>this.$refs.container}))},methods:{}},[["render",function(e,t,s,o,p,f){const u=d("press-sticky"),m=d("demo-block"),y=d("press-button");return a(),n("div",{class:"demo-wrap"},[i(m,{title:e.t("basicUsage"),"section-style":"margin: 0;"},{default:r((()=>[i(u,null,{default:r((()=>[l("div",{class:"btn1"},c(e.t("basicUsage")),1)])),_:1})])),_:1},8,["title"]),i(m,{title:e.t("offsetTop"),"section-style":"margin: 0;"},{default:r((()=>[i(u,{"offset-top":50},{default:r((()=>[l("div",{class:"btn2"},c(e.t("offsetTop")),1)])),_:1})])),_:1},8,["title"]),i(m,{title:e.t("setContainer"),"section-style":"margin: 0;"},{default:r((()=>[l("div",{id:"container",ref:"container",style:{height:"150px",background:"#eee"}},[i(u,{container:p.container},{default:r((()=>[l("div",{class:"btn3"},c(e.t("setContainer")),1)])),_:1},8,["container"])],512)])),_:1},8,["title"]),i(y,{type:"e-sport-primary","custom-style":"position:relative;margin: 10px;padding: 0;",onClick:e.onToggleShowHeader},{default:r((()=>[h(c(e.showHeader?e.t("hide"):e.t("show")),1)])),_:1},8,["onClick"])])}],["__scopeId","data-v-90c19eb0"]]);export{f as default};