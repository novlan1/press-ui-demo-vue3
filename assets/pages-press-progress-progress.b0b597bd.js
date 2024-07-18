import{B as t}from"./color.3a05f6e0.js";import{b as e}from"./rect.23461412.js";import{s as o}from"./style.0f94ff97.js";import{u as r}from"./utils.bb2d8d10.js";import{_ as i,o as s,c as l,h as a,i as p,t as n,e as c,n as d,f as g,w as u,j as v}from"./index-43eb3ea0.js";import"./version.7ee5c281.js";import"./add-unit.0c57c089.js";import"./validator.84caa8d5.js";const f={pivotText:function(t,e){return t||`${e}%`},rootStyle:function(t){return o({height:t.strokeWidth?r.addUnit(t.strokeWidth):"",background:t.trackColor})},portionStyle:function(t){return o({background:t.inactive?"#cacaca":t.color,width:t.percentage?`${t.percentage}%`:""})},pivotStyle:function(t){return o({color:t.textColor,right:`${t.right}px`,background:t.pivotColor?t.pivotColor:t.inactive?"#cacaca":t.color})}};const h=i({i18n:{"zh-CN":{title2:"置灰",title3:"样式定制",strokeWidth:"线条粗细"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width"}},components:{PressProgress:i({name:"PressProgress",props:{inactive:Boolean,percentage:{type:Number,default:0,observer:"setLeft"},pivotText:{type:String,default:""},pivotColor:{type:String,default:""},trackColor:{type:String,default:""},showPivot:{type:Boolean,default:!0},color:{type:String,default:t},textColor:{type:String,default:"#fff"},strokeWidth:{type:[Number,String],default:4},customClass:{type:String,default:""}},emits:[],data:()=>({right:0,computed:f}),mounted(){this.setLeft()},methods:{setLeft(){Promise.all([e(this,".press-progress"),e(this,".press-progress__pivot")]).then((([t,e])=>{t&&e&&(this.right=e.width*(this.percentage-100)/100)}))}}},[["render",function(t,e,o,r,i,g){return s(),l("div",{class:d(["press-progress",o.customClass]),style:p(i.computed.rootStyle({strokeWidth:o.strokeWidth,trackColor:o.trackColor}))},[a("div",{class:"press-progress__portion",style:p(i.computed.portionStyle({percentage:o.percentage,inactive:o.inactive,color:o.color}))},[o.showPivot&&i.computed.pivotText(o.pivotText,o.percentage)?(s(),l("div",{key:0,style:p(i.computed.pivotStyle({textColor:o.textColor,pivotColor:o.pivotColor,inactive:o.inactive,color:o.color,right:i.right})),class:"press-progress__pivot"},n(i.computed.pivotText(o.pivotText,o.percentage)),5)):c("v-if",!0)],4)],6)}],["__scopeId","data-v-2fe68379"]])},data:()=>({progressStyle:"margin: 20px 0;"}),methods:{}},[["render",function(t,e,o,r,i,n){const c=v("press-progress"),d=v("demo-block");return s(),l("div",{class:"demo-wrap"},[g(d,{title:t.t("basicUsage")},{default:u((()=>[a("div",{style:p(i.progressStyle)},[g(c,{percentage:50})],4)])),_:1},8,["title"]),g(d,{title:t.t("strokeWidth")},{default:u((()=>[a("div",{style:p(i.progressStyle)},[g(c,{percentage:50,"stroke-width":8})],4)])),_:1},8,["title"]),g(d,{title:t.t("title2")},{default:u((()=>[a("div",{style:p(i.progressStyle)},[g(c,{percentage:50,inactive:""})],4)])),_:1},8,["title"]),g(d,{title:t.t("title3")},{default:u((()=>[a("div",{style:p(i.progressStyle)},[g(c,{"pivot-text":t.t("orange"),color:"#f2826a",percentage:25},null,8,["pivot-text"])],4),a("div",{style:p(i.progressStyle)},[g(c,{"pivot-text":t.t("red"),color:"#ee0a24",percentage:50},null,8,["pivot-text"])],4),a("div",{style:p(i.progressStyle)},[g(c,{percentage:75,"pivot-text":t.t("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])],4)])),_:1},8,["title"])])}]]);export{h as default};