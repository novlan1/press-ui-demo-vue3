import{_ as t,v as e,o as a,j as s,w as l,e as n,d as o,x as i,l as u}from"./index-a6ed3ec5.js";import{P as r}from"./press-field.89f8be4b.js";const d=t({i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:r,PressButton:e},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:()=>({maxHeight:600,minHeight:50})}},data(){return{inputValue:this.value}},watch:{value:{handler(t){this.inputValue=t}}},mounted(){},methods:{onClearInput(){this.inputValue=""},onConfirmInput(){this.$emit("confirm",this.inputValue)}}},[["render",function(t,e,r,d,m,p){const c=u("PressField"),f=u("PressButton"),h=u("demo-block");return a(),s(h,{title:t.t("mockData"),"section-style":r.sectionStyle,"header-style":r.headerStyle},{default:l((()=>[n("div",{class:"input__wrap"},[o(c,{modelValue:m.inputValue,"onUpdate:modelValue":e[0]||(e[0]=t=>m.inputValue=t),type:"textarea",autosize:r.autosize,placeholder:"请输入数据"},null,8,["modelValue","autosize"]),n("div",{class:"input__buttons"},[o(f,{size:"small","custom-style":"margin-left: 0; margin-right: 8px",onClick:p.onClearInput},{default:l((()=>[i(" 清空 ")])),_:1},8,["onClick"]),o(f,{type:"primary","custom-style":"margin: 0;",size:"small",onClick:p.onConfirmInput},{default:l((()=>[i(" 确定 ")])),_:1},8,["onClick"])])])])),_:1},8,["title","section-style","header-style"])}],["__scopeId","data-v-7b74f988"]]);export{d as D};