import{P as t,D as e}from"./handler.253ca557.js";import{_ as o,p as n,o as i,c as l,F as s,k as a,i as h,e as c,f as m,j as r}from"./index-e317c8c7.js";import"./handler-helper.33469563.js";import"./index.2e78a04a.js";import"./press-field.f08dbdb1.js";import"./parent.59fa8a22.js";import"./scroll-view.030e0b40.js";const u=function(){return new Promise((t=>{setTimeout((()=>{t(!0)}),3e3)}))};const p=o({i18n:{"zh-CN":{customButton:"自定义按钮",customContent:"自定义内容",noCancel:"没有取消按钮",noCancelLoading:"没有取消+加载中",image:"图片",html:"HTML内容",field:"输入框",noMask:"点击蒙层不可关闭",longText:"长文本",onlyCaption:"仅限队长报名，发给队长来报名吧！",custom:"自定义",componentCall:"组件调用",multiple:"多例",longContent:()=>["念奴娇·赤壁怀古","大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。","遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。","<br/>","沁园春·雪","北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。","江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。","<br/>","沁园春·长沙","独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？","携来百侣曾游，忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。指点江山，激扬文字，粪土当年万户侯。曾记否，到中流击水，浪遏飞舟？"].join("<br/>")},"en-US":{customButton:"Custom Button",customContent:"Custom Content",noCancel:"No Cancel",noCancelLoading:"No Cancel and Loading",image:"Image",html:"HTML Content",field:"Input",noMask:"No Close By Mask",longText:"Long Text",onlyCaption:"Only the captain can sign up, send it to the captain to sign up!",custom:"Custom ",componentCall:"Component Call",multiple:"Multiple",longContent:()=>["Reflections on the Ancient Red Cliff--To the tune of Niannujiao","","The Great River flows,","Eastward waves sweeping away,","For thousands of years, gallant heroes.","West of the ancient fort, they say, stands","The Red Cliff of the Three-Kingdoms' Duke Zhou.","Rocks pierce the sky, shore-tearing","Waves swirl into piles of snow.","What a glorious sweep of land,","Once a stage for so many a hero!","","My thoughts drift to those years when Zhou","Had newly married the beautiful Qiao,","Vigour and valour aglow.","A feather fan and a silken hat,","He masterminded the fire-attack on the foe--","Over a casual chat","To see their fleet perish, blow by blow.","Back from my mental vagrancy in that bygone age,","I must laugh at myself: letting sentiments grow","Into grey hairs, too soon.","But isn't life a dream, after all？","Let me pledge this cup to the River,","To the Moon."].join("<br/>")}},components:{PressDialogComp:t,PressCell:n},data(){return{sectionStyle:"",show:!1,show2:!1,curType:"",dialogTypeList:[{title:this.t("basicUsage"),list:[{name:"normal",title:this.t("basicUsage")},{name:"noTouchMove",title:this.t("noMask")}]},{title:this.t("customContent"),list:[{name:"img",title:this.t("image")},{name:"html",title:this.t("html")},{name:"longText",title:this.t("longText")},{name:"field",title:this.t("field")}]},{title:this.t("customButton"),list:[{name:"noCancel",title:this.t("noCancel")},{name:"loading",title:this.t("loadingStatus")},{name:"noCancelLoading",title:this.t("noCancelLoading")}]},{title:this.t("componentCall"),list:[{name:"componentCall",title:this.t("componentCall")},{name:"multiple",title:this.t("multiple")}]}]}},methods:{onShowDialog(t){if(this.curType=t,"componentCall"===t)return void(this.show=!0);if("multiple"===t)return this.show=!0,void(this.show2=!0);let o=this.t("cancel"),n=1,i=null,l=this.t("onlyCaption"),s="",a="",h=!0,c=!1,m=!1,r="",p="";"noCancel"===t?o="":"loading"===t?(n=2,i=u):"noCancelLoading"===t?(n=2,o="",i=u):"html"===t?(l="",s=`<div>${this.t("custom")}<span style="color: red;">${this.t("content")}</span></div>`):"img"===t?a="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_19f9b1ecdd9332c7c0.jpg":"noTouchMove"===t?h=!1:"longText"===t?(l="",s=`<div style="max-height:100%;overflow:scroll;">${this.t("longContent")}</div>`,c=!0):"field"===t&&(m=!0,r="随便输点什么吧",l="",p="Press UI",h=!1,i=t=>t.inputValue?(this.onGTip(`内容: ${t.inputValue}`),!0):(this.onGTip("请输入内容"),!1)),e.show({context:this,title:this.t("title"),content:l,htmlContent:s,src:a,onLongPressImage:null,confirmText:this.t("confirm"),cancelText:o,dialogType:n,onConfirmClick:i,canTouchRemove:h,useScrollView:c,showField:m,fieldPlaceHolder:r,fieldValue:p}).then((()=>{"field"!==t&&this.onGTip("confirm")})).catch((()=>{this.onGTip("cancel")}))},onConfirm(t){this[t]=!1,"field"!==this.curType&&this.onGTip("confirm")},onCancel(t){this[t]=!1,this.onGTip("cancel")}}},[["render",function(t,e,o,n,u,p){const d=c("press-cell"),g=c("demo-block"),f=c("PressDialogComp");return i(),l("div",{class:"demo-wrap"},[(i(!0),l(s,null,a(u.dialogTypeList,((t,e)=>(i(),m(g,{key:e,title:t.title,"section-style":u.sectionStyle},{default:r((()=>[(i(!0),l(s,null,a(t.list,(t=>(i(),m(d,{key:t.name,title:t.title,"is-link":"",onClick:e=>p.onShowDialog(t.name)},null,8,["title","onClick"])))),128))])),_:2},1032,["title","section-style"])))),128)),h(f,{id:"tip-match-comm-tips-dialog",ref:"tip-match-comm-tips-dialog"},null,512),h(f,{title:t.t("title"),show:u.show,content:"Some fake news",onConfirm:e[0]||(e[0]=t=>p.onConfirm("show")),onCancel:e[1]||(e[1]=t=>p.onCancel("show"))},null,8,["title","show"]),h(f,{title:t.t("title"),show:u.show2,content:"Some fake news 2",onConfirm:e[2]||(e[2]=t=>p.onConfirm("show2")),onCancel:e[3]||(e[3]=t=>p.onCancel("show2"))},null,8,["title","show"])])}]]);export{p as default};