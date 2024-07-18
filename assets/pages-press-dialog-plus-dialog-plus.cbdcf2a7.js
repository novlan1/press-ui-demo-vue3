import{P as e}from"./press-popup-plus.974d6763.js";import{P as t}from"./press-button.1db29ede.js";import{b as o}from"./button.49122d4f.js";import{R as s,G as n}from"./color.3a05f6e0.js";import{t as a}from"./function.30ad8366.js";import{a as l,d as i}from"./press-component.181873fd.js";import{u as r}from"./utils.bb2d8d10.js";import{t as c}from"./index.a21f0567.js";import{g as d}from"./dialog-mixin.6ac42ef3.js";import{_ as p,o as m,c as u,f as g,w as f,n as h,r as y,F as C,y as w,t as S,e as k,h as v,x as j,j as B,G as b}from"./index-43eb3ea0.js";import{a as _}from"./handler-helper.33469563.js";import{a as x,b as T}from"./index.d08a13cf.js";import{n as O}from"./validator.84caa8d5.js";import{i as P}from"./h5-handler.e662945a.js";import{P as I}from"./press-cell.a0845ac7.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./press-info.68d3dd51.js";import"./press-overlay.4c76514c.js";import"./press-transition.e8aeacc8.js";import"./version.7ee5c281.js";import"./press-loading-plus.e7ffc3ab.js";import"./press-loading.bae3cb19.js";import"./component-handler.9abe3b3e.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";const U={show:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},theme:{type:String,default:"default"},useSlot:Boolean,className:{type:String,default:""},customStyle:{type:String,default:""},asyncClose:Boolean,messageAlign:{type:String,default:""},beforeClose:{type:[null,Function],default:null},overlayStyle:{type:String,default:""},useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:{type:String,default:""},width:{type:[String,Number],default:""},zIndex:{type:Number,default:2e3},confirmButtonText:{type:String,default:c("confirm")},cancelButtonText:{type:String,default:c("cancel")},confirmButtonColor:{type:String,default:s},cancelButtonColor:{type:String,default:n},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},transition:{type:String,default:"scale"},...l};const A=p({name:"PressDialogPlus",options:{...i,styleIsolation:"shared"},components:{PressPopup:e,PressButton:t},mixins:[o,d(U)],props:U,emits:["close","confirm","cancel"],data:()=>({utils:r,loading:{confirm:!1,cancel:!1},callback:()=>{}}),watch:{dataShow:{handler(e){e||this.stopLoading()}}},methods:{onConfirm(){this.handleAction("confirm")},onCancel(){this.handleAction("cancel")},onClickOverlay(){this.close("overlay")},close(e){this.dataShow=!1,this.$nextTick((()=>{this.$emit("close",e);const{callback:t}=this;t&&t(e,this)}))},stopLoading(){this.loading.confirm=!1,this.loading.cancel=!1},handleAction(e){this.$emit(e,{dialog:this});const{dataAsyncClose:t,dataBeforeClose:o}=this;t||o?(this.loading[e]=!0,o&&a(o(e)).then((t=>{t?this.close(e):this.stopLoading()}))):this.close(e)}}},[["render",function(e,t,o,s,n,a){const l=B("press-button"),i=B("press-popup");return m(),u("div",{class:"press-dialog-index"},[g(i,{show:e.dataShow,"z-index":e.dataZIndex,overlay:e.dataOverlay,transition:e.dataTransition,"custom-class":"press-dialog press-dialog--"+e.dataTheme+" "+e.dataClassName,"custom-style":"width: "+n.utils.addUnit(e.dataWidth)+";"+e.dataCustomStyle,"overlay-style":e.dataOverlayStyle,"close-on-click-overlay":e.dataCloseOnClickOverlay,onClose:a.onClickOverlay},{default:f((()=>[e.dataTitle||e.dataUseTitleSlot?(m(),u("div",{key:0,class:h(n.utils.bem2("dialog__header",{isolated:!(e.dataMessage||e.dataUseSlot)}))},[e.dataUseTitleSlot?y(e.$slots,"title",{key:0},void 0,!0):e.dataTitle?(m(),u(C,{key:1},[w(S(e.dataTitle),1)],64)):k("v-if",!0)],2)):k("v-if",!0),e.dataUseSlot?y(e.$slots,"default",{key:1},void 0,!0):e.dataMessage?(m(),u("div",{key:2,class:h(n.utils.bem2("dialog__message",[e.dataTheme,e.dataMessageAlign,{hasTitle:e.dataTitle}]))},[v("span",{class:"press-dialog__message-text"},S(e.dataMessage),1)],2)):k("v-if",!0),(m(),u("div",{key:3,class:"press-hairline--top press-dialog__footer"},[e.dataShowCancelButton?(m(),j(l,{key:0,size:"large",loading:n.loading.cancel,class:"press-dialog__button press-hairline--right","custom-class":"press-dialog__cancel","custom-style":"color: "+e.dataCancelButtonColor,onClick:a.onCancel},{default:f((()=>[w(S(e.dataCancelButtonText),1)])),_:1},8,["loading","custom-style","onClick"])):k("v-if",!0),e.dataShowConfirmButton?(m(),j(l,{key:1,size:"large",class:"press-dialog__button",loading:n.loading.confirm,"custom-class":"press-dialog__confirm","custom-style":"color: "+e.dataConfirmButtonColor,"open-type":e.dataConfirmButtonOpenType,lang:e.lang,"business-id":e.businessId,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,onClick:a.onConfirm,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting},{default:f((()=>[w(S(e.dataConfirmButtonText),1)])),_:1},8,["loading","custom-style","open-type","lang","business-id","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","onClick","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting"])):k("v-if",!0)]))])),_:3},8,["show","z-index","overlay","transition","custom-class","custom-style","overlay-style","close-on-click-overlay","onClose"])])}],["__scopeId","data-v-ea1f6185"]]);let G=[];const D={show:!1,title:"",width:null,theme:"default",message:"",zIndex:100,overlay:!0,selector:"#press-dialog",className:"",asyncClose:!1,beforeClose:null,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:c("confirm"),cancelButtonText:c("cancel"),showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""};let z=Object.assign({},D);const M=e=>(e=Object.assign(Object.assign({},z),e),new Promise(((t,o)=>{const s=e.context||function(){const e=b();return e[e.length-1]}();let n=x(s,e.selector);if(delete e.context,delete e.selector,n||(n=P(A,"press-dialog")),n){const s={callback:(e,s)=>{"confirm"===e?t(s):o(s)},...e};T(n,s),O((()=>{T(n,{show:!0})})),G.push(n)}else console.warn("The press-dialog node is not found, please confirm whether the selector and context are correct")})));_({Dialog:M,queue:G,currentOptions:z,defaultOptions:D,updateQueue:function(e){G=e},updateCurrentOptions:function(e){z=e}});const N=e=>new Promise((t=>{"confirm"===e?setTimeout((()=>{t(!0)}),1e3):t(!0)}));const L=p({i18n:{"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",asyncClose:"异步关闭",roundButton:"圆角按钮样式",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",asyncClose:"Async Close",roundButton:"Round Button Style",componentCall:"Component Call"}},components:{PressDialogPlus:A,PressCell:I},data:()=>({show:!1}),methods:{onShowDialog(e){if("component"===e)return void(this.show=!0);let t=this.t("title"),o=!1,s=null;"noTitle"===e?t="":"cancel"===e?o=!0:"async"===e&&(o=!0,s=N),M.alert({context:this,title:t,showCancelButton:o,message:this.t("content"),beforeClose:s}).then((()=>{}))},getUserInfo(e){console.log("getUserInfo.res",e)},onClose(){this.show=!1}}},[["render",function(e,t,o,s,n,a){const l=B("press-cell"),i=B("demo-block"),r=B("press-dialog-plus");return m(),u("div",{class:"demo-wrap"},[g(i,{title:e.t("basicUsage")},{default:f((()=>[g(l,{title:e.t("alert1"),"is-link":"",onClick:t[0]||(t[0]=e=>a.onShowDialog("normal"))},null,8,["title"]),g(l,{title:e.t("alert2"),"is-link":"",onClick:t[1]||(t[1]=e=>a.onShowDialog("noTitle"))},null,8,["title"]),g(l,{title:e.t("confirm"),"is-link":"",onClick:t[2]||(t[2]=e=>a.onShowDialog("cancel"))},null,8,["title"])])),_:1},8,["title"]),g(i,{title:e.t("asyncClose")},{default:f((()=>[g(l,{title:e.t("asyncClose"),"is-link":"",onClick:t[3]||(t[3]=e=>a.onShowDialog("async"))},null,8,["title"])])),_:1},8,["title"]),g(i,{title:e.t("componentCall")},{default:f((()=>[g(l,{title:e.t("componentCall"),"is-link":"",onClick:t[4]||(t[4]=e=>a.onShowDialog("component"))},null,8,["title"])])),_:1},8,["title"]),g(r,{"use-slot":"",title:e.t("title"),show:n.show,"show-cancel-button":"","confirm-button-open-type":"getUserInfo",onClose:a.onClose,onGetuserinfo:a.getUserInfo},{default:f((()=>[v("img",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_260c4142c7225b5f73.jpeg",style:{width:"100%","margin-top":"16px"},mode:"aspectFit"})])),_:1},8,["title","show","onClose","onGetuserinfo"])])}]]);export{L as default};