import{_ as t,s as e,o as l,c as s,i,j as o,e as a,a as n,h as u,t as c}from"./index-c83a250c.js";const r=t({i18n:{"zh-CN":{type:"加载类型",text:"加载文案",size:"自定义大小",color:"自定义颜色",vertical:"垂直排列",textColor:"自定义文本颜色"},"en-US":{type:"Type",text:"Text",size:"Size",color:"Color",vertical:"Vertical",textColor:"Text Color"}},components:{PressLoadingPlus:e},data:()=>({isOpen:!1,customStyle:"margin-left: 20px;"}),methods:{onSwitchChange(){this.isOpen=!this.isOpen}}},[["render",function(t,e,r,d,p,m){const y=a("press-loading-plus"),f=a("demo-block");return l(),s("div",{class:"demo-wrap"},[i(f,{title:t.t("type")},{default:o((()=>[n("div",null,[i(y)]),n("div",null,[i(y,{type:"spinner","custom-style":p.customStyle},null,8,["custom-style"])])])),_:1},8,["title"]),i(f,{title:t.t("color")},{default:o((()=>[n("div",null,[i(y,{color:"#1989fa"})]),n("div",null,[i(y,{type:"spinner",color:"#1989fa","custom-style":p.customStyle},null,8,["custom-style"])])])),_:1},8,["title"]),i(f,{title:t.t("size")},{default:o((()=>[n("div",null,[i(y,{size:"15"})]),n("div",null,[i(y,{type:"spinner",size:"38","custom-style":p.customStyle},null,8,["custom-style"])])])),_:1},8,["title"]),i(f,{title:t.t("text")},{default:o((()=>[i(y,{size:"24px"},{default:o((()=>[u(c(t.t("loading")),1)])),_:1})])),_:1},8,["title"]),i(f,{title:t.t("vertical")},{default:o((()=>[i(y,{size:"24px",vertical:""},{default:o((()=>[u(c(t.t("loading")),1)])),_:1})])),_:1},8,["title"])])}],["__scopeId","data-v-ee48b9b8"]]);export{r as default};