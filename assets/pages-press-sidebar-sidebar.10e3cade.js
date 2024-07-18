import{P as t,a as e}from"./press-sidebar-item.97b85dcb.js";import{P as i}from"./press-toast.a8e97081.js";import{_ as l,o as s,c as a,f as o,w as n,j as r}from"./index-43eb3ea0.js";import"./press-component.181873fd.js";import"./validator.84caa8d5.js";import"./relation.8b10893c.js";import"./parent-map.b443f4cc.js";import"./press-info.68d3dd51.js";import"./utils.bb2d8d10.js";import"./add-unit.0c57c089.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./press-loading-plus.e7ffc3ab.js";import"./press-overlay.4c76514c.js";import"./press-transition.e8aeacc8.js";import"./version.7ee5c281.js";import"./dialog-mixin.6ac42ef3.js";import"./component-handler.9abe3b3e.js";const d=l({i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:t,PressSidebarItem:e,PressToast:i},data:()=>({activeKey:0}),methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("selectTip")}${t+1}`)}}},[["render",function(t,e,i,l,d,p){const c=r("press-sidebar-item"),m=r("press-sidebar"),u=r("demo-block");return s(),a("div",{class:"demo-wrap"},[o(u,{title:t.t("basicUsage")},{default:n((()=>[o(m,{"active-key":d.activeKey},{default:n((()=>[o(c,{title:t.t("title")},null,8,["title"]),o(c,{title:t.t("title")},null,8,["title"]),o(c,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("showBadge")},{default:n((()=>[o(m,{"active-key":d.activeKey},{default:n((()=>[o(c,{title:t.t("title"),dot:""},null,8,["title"]),o(c,{title:t.t("title"),badge:"5"},null,8,["title"]),o(c,{title:t.t("title"),badge:"99+"},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("disabled")},{default:n((()=>[o(m,{"active-key":d.activeKey},{default:n((()=>[o(c,{title:t.t("title")},null,8,["title"]),o(c,{title:t.t("title"),disabled:""},null,8,["title"]),o(c,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("changeEvent")},{default:n((()=>[o(m,{"active-key":d.activeKey,onChange:p.onChange},{default:n((()=>[o(c,{title:`${t.t("title")} 1`},null,8,["title"]),o(c,{title:`${t.t("title")} 2`},null,8,["title"]),o(c,{title:`${t.t("title")} 3`},null,8,["title"])])),_:1},8,["active-key","onChange"])])),_:1},8,["title"])])}]]);export{d as default};