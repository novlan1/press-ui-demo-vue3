import{_ as o,p as e,ai as t,o as n,c as l,i as s,j as i,e as a,a as c}from"./index-e317c8c7.js";const d=o({i18n:{"zh-CN":{embeddedContent:"嵌入内容"},"en-US":{embeddedContent:"Embedded"}},components:{PressCell:e,PressOverlay:t},data:()=>({options:{normal:!1,content:!1}}),methods:{onClickShow(o){this.options[o]=!0},onClickHide(o){this.options[o]=!1},noop(){}}},[["render",function(o,e,t,d,r,p){const k=a("press-cell"),C=a("demo-block"),h=a("press-overlay");return n(),l("div",{class:"demo-wrap"},[s(C,{title:o.t("basicUsage")},{default:i((()=>[s(k,{title:o.t("check"),"is-link":"",onClick:e[0]||(e[0]=o=>p.onClickShow("normal"))},null,8,["title"])])),_:1},8,["title"]),s(C,{title:o.t("embeddedContent")},{default:i((()=>[s(k,{title:o.t("check"),"is-link":"",onClick:e[1]||(e[1]=o=>p.onClickShow("content"))},null,8,["title"])])),_:1},8,["title"]),s(h,{show:r.options.normal,onClick:e[2]||(e[2]=o=>p.onClickHide("normal"))},null,8,["show"]),s(h,{show:r.options.content,onClick:e[3]||(e[3]=o=>p.onClickHide("content"))},{default:i((()=>[c("div",{class:"wrapper"},[c("div",{class:"block","catch:tap":"noop"})])])),_:1},8,["show"])])}],["__scopeId","data-v-f0875d9f"]]);export{d as default};