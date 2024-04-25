import{P as e}from"./press-popup-plus.4bf0a057.js";import{_ as t,y as o,ah as s,ai as n,J as l,o as i,c as a,d as c,w as r,e as p,B as d,z as m,F as u,g as h,a5 as y,h as f,j as g,t as k,I as C,k as w,u as P,a as b,v}from"./index-09cb8946.js";import{P as x}from"./press-picker-plus.78b89b10.js";import{P as S,a as O}from"./press-grid-item.e865f891.js";import"./number.df2f0694.js";import"./parent-map.a476e3d9.js";import"./relation.25345683.js";var _;const A=t({i18n:{"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}},components:{PressPopoverPlus:t({name:"PressPopoverPlus",options:{styleIsolation:"shared"},components:{PressPopup:e,PressIconPlus:o},mixins:[s,n(!1),(_={event:"touchstart",method:"onClickOutside"},{props:{closeOnClickOutside:{type:Boolean,default:!0}},data(){return{clickOutsideHandler:e=>{this.closeOnClickOutside&&!this.$el.contains(e.target)&&this[_.method]()}}},mounted(){document.addEventListener(_.event,this.clickOutsideHandler)},beforeDestroy(){document.removeEventListener(_.event,this.clickOutsideHandler)}})],props:{overlay:{type:Boolean,default:!1},trigger:{type:String,default:""},offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},getContainer:{type:[String,Function],default:"body"},closeOnClickAction:{type:Boolean,default:!0},zIndex:{type:Number,default:1},customStyle:{type:String,default:""},duration:{type:Number,default:200}},emits:["close","closed","input","open","opened","select","touchstart"],data:()=>({utils:l}),computed:{popoverStyle(){const{zIndex:e}=this;return`z-index: ${e}`},wrapperStyle(){const{customStyle:e}=this;return e},popupClass(){const{theme:e,placement:t}=this;return l.bem2("popover",[e,t])},popupCustomClass:()=>""},mounted(){},methods:{setData(e){Object.keys(e).forEach((t=>{this[t]=e[t]}))},onClickWrapper(){"click"===this.trigger&&this.emitModelValue(!this.realModelValue)},onTouchstart(e){e.stopPropagation(),this.$emit("touchstart",e)},onClickAction(e,t){e.disabled||(this.$emit("select",e,t),this.closeOnClickAction&&this.$emit("input",!1))},onClickOutside(){this.$emit("input",!1)},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")}}},[["render",function(e,t,o,s,n,l){const P=w("PressIconPlus"),b=w("PressPopup");return i(),a("div",{ref:"wrapper",class:d([n.utils.bem2("popover__wrapper")]),style:C(l.wrapperStyle),onClick:t[0]||(t[0]=y(((...e)=>l.onClickWrapper&&l.onClickWrapper(...e)),["stop"]))},[c(b,{ref:"popover",show:e.realModelValue,class:d([l.popupClass]),"wrap-class":l.popupCustomClass,overlay:o.overlay,position:"null",transition:"popover-zoom","lock-scroll":!1,duration:o.duration,"get-container":o.getContainer,"custom-style":l.popoverStyle,onBeforeLeave:l.onClose,onAfterLeave:l.onClosed,onBeforeEnter:l.onOpen,onAfterEnter:l.onOpened},{default:r((()=>[p("div",{class:d([n.utils.bem2("popover__arrow")])},null,2),p("div",{class:d([n.utils.bem2("popover__content")]),role:"menu"},[m(e.$slots,"default",{},(()=>[(i(!0),a(u,null,h(o.actions,((e,t)=>(i(),a("div",{key:t,class:d([n.utils.bem2("popover__action",{disabled:e.disabled,"with-icon":e.icon}),e.className]),onClick:y((o=>l.onClickAction(e,t)),["stop"])},[e.icon?(i(),f(P,{key:0,name:e.icon,"custom-class":"press-popover-action-icon"},null,8,["name"])):g("v-if",!0),p("div",{class:d([n.utils.bem2("popover__action-text"),"press-hairline--bottom"])},k(e.text),3)],10,["onClick"])))),128))]),!0)],2)])),_:3},8,["show","class","wrap-class","overlay","duration","get-container","custom-style","onBeforeLeave","onAfterLeave","onBeforeEnter","onAfterEnter"]),m(e.$slots,"reference",{},void 0,!0)],6)}],["__scopeId","data-v-5e8fcd8c"]]),PressButton:P,PressPickerPlus:x,PressPopupPlus:e,PressCell:b,PressGridItem:S,PressGrid:O},data:()=>({show:{showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1},showPicker:!1,currentPlacement:"top",placements:["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;"}),methods:{onPickerChange({value:e,index:t}){console.log("[onPickerChange]",e,t),setTimeout((()=>{this.show.placement=!0,this.currentPlacement=e}))},onSelect(e){console.log("[onSelect]",e),this.onGTip(e.text)},onOpen(){console.log("onOpen")},onClose(){console.log("onClose")},onOpened(){console.log("onOpened")},onClosed(){console.log("onClosed")}}},[["render",function(e,t,o,s,n,l){const d=w("PressButton"),m=w("PressPopoverPlus"),y=w("demo-block"),f=w("PressCell"),C=w("PressPickerPlus"),P=w("PressPopupPlus"),b=w("press-grid-item"),x=w("press-grid");return i(),a("div",{class:"demo-wrap demo-wrap--gray"},[c(y,{title:e.t("basicUsage"),"header-style":n.headerStyle,"section-style":n.sectionStyle},{default:r((()=>[c(m,{modelValue:n.show.lightTheme,"onUpdate:modelValue":t[1]||(t[1]=e=>n.show.lightTheme=e),trigger:"click",actions:e.t("actions"),placement:"bottom-start","custom-style":"margin-left: 16px;",onSelect:l.onSelect,onOpen:l.onOpen,onOpened:l.onOpened,onClose:l.onClose,onClosed:l.onClosed},{reference:r((()=>[c(d,{type:"primary",onClick:t[0]||(t[0]=e=>n.show.lightTheme=!n.show.lightTheme)},{default:r((()=>[v(k(e.t("lightTheme")),1)])),_:1})])),_:1},8,["modelValue","actions","onSelect","onOpen","onOpened","onClose","onClosed"]),c(m,{modelValue:n.show.darkTheme,"onUpdate:modelValue":t[3]||(t[3]=e=>n.show.darkTheme=e),trigger:"click",theme:"dark",actions:e.t("actions"),placement:"bottom","custom-style":"z-index: 1;margin-left: 16px;",onSelect:l.onSelect},{reference:r((()=>[c(d,{type:"primary",onClick:t[2]||(t[2]=e=>n.show.darkTheme=!n.show.darkTheme)},{default:r((()=>[v(k(e.t("darkTheme")),1)])),_:1})])),_:1},8,["modelValue","actions","onSelect"])])),_:1},8,["title","header-style","section-style"]),c(y,{title:e.t("placement"),"header-style":n.headerStyle,"section-style":n.sectionStyle},{default:r((()=>[c(f,{"is-link":"",title:e.t("choosePlacement"),onClick:t[4]||(t[4]=e=>{n.showPicker=!0})},null,8,["title"]),c(P,{show:n.showPicker,round:"",position:"bottom","get-container":"body","close-on-click-overlay":!0,onClose:t[6]||(t[6]=e=>n.showPicker=!1)},{default:r((()=>[p("div",{class:"demo-popover-box"},[c(m,{modelValue:n.show.placement,"onUpdate:modelValue":t[5]||(t[5]=e=>n.show.placement=e),theme:"dark",trigger:"click",actions:e.t("shortActions"),placement:n.currentPlacement,onSelect:l.onSelect},{reference:r((()=>[p("div",{class:"demo-popover-refer"})])),_:1},8,["modelValue","actions","placement","onSelect"])]),c(C,{columns:n.placements,onChange:l.onPickerChange},null,8,["columns","onChange"])])),_:1},8,["show"])])),_:1},8,["title","header-style","section-style"]),c(y,{title:e.t("actionOptions"),"header-style":n.headerStyle,"section-style":n.sectionStyle},{default:r((()=>[c(m,{modelValue:n.show.showIcon,"onUpdate:modelValue":t[8]||(t[8]=e=>n.show.showIcon=e),trigger:"click",actions:e.t("actionsWithIcon"),placement:"bottom-start","custom-style":"z-index: 2;margin-left: 16px;",onSelect:l.onSelect},{reference:r((()=>[c(d,{type:"primary",onClick:t[7]||(t[7]=e=>n.show.showIcon=!n.show.showIcon)},{default:r((()=>[v(k(e.t("showIcon")),1)])),_:1})])),_:1},8,["modelValue","actions","onSelect"]),c(m,{modelValue:n.show.disableAction,"onUpdate:modelValue":t[10]||(t[10]=e=>n.show.disableAction=e),trigger:"click",actions:e.t("actionsDisabled"),"custom-style":"z-index: 2;margin-left: 16px;",onSelect:l.onSelect},{reference:r((()=>[c(d,{type:"primary",onClick:t[9]||(t[9]=e=>n.show.disableAction=!n.show.disableAction)},{default:r((()=>[v(k(e.t("disableAction")),1)])),_:1})])),_:1},8,["modelValue","actions","onSelect"])])),_:1},8,["title","header-style","section-style"]),c(y,{title:e.t("customContent"),"header-style":n.headerStyle,"section-style":n.sectionStyle},{default:r((()=>[c(m,{modelValue:n.show.customContent,"onUpdate:modelValue":t[12]||(t[12]=e=>n.show.customContent=e),trigger:"click",placement:"bottom-start","custom-style":"z-index: 1;margin-left: 16px;",onSelect:l.onSelect},{default:r((()=>[g(' <press-grid\n            square\n            clickable\n            :border="false"\n            :column-num="3"\n            custom-style="width: 240px;"\n          >\n            <press-grid-item\n              v-for="i in 6"\n              :key="i"\n              icon="photo-o"\n              :text="t(\'option\')"\n              @click="show.customContent = false"\n            />\n          </press-grid> '),c(x,{"column-num":3,"custom-style":"width: 240px;"},{default:r((()=>[(i(),a(u,null,h(6,((t,o)=>c(b,{key:o,icon:"photo-o",text:e.t("option")},null,8,["text"]))),64))])),_:1})])),reference:r((()=>[c(d,{type:"primary",onClick:t[11]||(t[11]=e=>n.show.customContent=!n.show.customContent)},{default:r((()=>[v(k(e.t("customContent")),1)])),_:1})])),_:1},8,["modelValue","onSelect"])])),_:1},8,["title","header-style","section-style"])])}],["__scopeId","data-v-ab996a08"]]);export{A as default};