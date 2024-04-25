import{_ as e,o as t,c as s,z as r,B as o,h as i,w as a,k as d,e as n,d as l}from"./index-09cb8946.js";const h=e({i18n:{"zh-CN":{toggle:"切换"},"en-US":{toggle:"Toggle"}},components:{PressTeleport:e({name:"PressTeleport",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressTeleportWeb:e({name:"PressTeleportWeb",props:{to:{type:String,required:!0},where:{type:String,default:"after"},disabled:Boolean},data:()=>({nodes:[],waiting:!1,observer:null,parent:null}),computed:{classes(){return this.disabled?["teleporter"]:["teleporter","hidden"]}},watch:{to:"maybeMove",where:"maybeMove",disabled(e){e?(this.disable(),this.teardownObserver()):(this.bootObserver(),this.move())}},mounted(){this.nodes=Array.from(this.$el.childNodes),this.disabled||this.bootObserver(),this.maybeMove()},beforeDestroy(){this.disable(),this.teardownObserver()},methods:{maybeMove(){this.disabled||this.move()},move(){if(this.waiting=!1,this.parent=document.querySelector(this.to),!this.parent)return this.disable(),void(this.waiting=!0);"before"===this.where?this.parent.prepend(this.getFragment()):this.parent.appendChild(this.getFragment())},disable(){this.$el.appendChild(this.getFragment()),this.parent=null},getFragment(){const e=document.createDocumentFragment();return this.nodes.forEach((t=>e.appendChild(t))),e},onMutations(e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s],o=Array.from(r.addedNodes).filter((e=>!this.nodes.includes(e)));Array.from(r.removedNodes).includes(this.parent)?(this.disable(),this.waiting=!this.disabled):this.waiting&&o.length>0&&(t=!0)}t&&this.move()},bootObserver(){this.observer||(this.observer=new MutationObserver((e=>this.onMutations(e))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))},teardownObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}}},[["render",function(e,i,a,d,n,l){return t(),s("div",{class:o(l.classes)},[r(e.$slots,"default",{},void 0,!0)],2)}],["__scopeId","data-v-38d54926"]])},props:{to:{type:String,default:"body"},where:{type:String,default:"after"},disabled:Boolean},data:()=>({}),mounted(){},methods:{}},[["render",function(e,s,o,n,l,h){const b=d("PressTeleportWeb");return t(),i(b,{to:o.to,where:o.where,disabled:o.disabled},{default:a((()=>[r(e.$slots,"default")])),_:3},8,["to","where","disabled"])}]])},data:()=>({disabled:!1}),methods:{onToggle(){this.disabled=!this.disabled}}},[["render",function(e,r,o,i,h,b){const c=d("press-cell"),p=d("demo-block"),u=d("PressTeleport");return t(),s("div",{class:"demo-wrap"},[n("div",{class:"demo-inner"},[l(p,{title:e.t("basicUsage")},{default:a((()=>[l(c,{title:e.t("toggle"),"is-link":"",onClick:b.onToggle},null,8,["title","onClick"])])),_:1},8,["title"]),l(u,{to:"body",disabled:h.disabled},{default:a((()=>[n("div",{class:"demo-text"}," test ")])),_:1},8,["disabled"])])])}],["__scopeId","data-v-a74ca4b9"]]);export{h as default};