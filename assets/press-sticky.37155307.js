import{u as t,v as e,_ as s,x as o,y as r,z as i,J as a,O as l,A as n,o as h,c,d as f,a as d,n as p,b as u,r as x,a9 as m}from"./index-e77dc938.js";import{B as y}from"./bind-event.c1019f65.js";const D={containerStyle:function(s){return t({height:s.fixed?e(s.height):"","z-index":s.zIndex})},wrapStyle:function(s){return t({transform:s.transform?`translate3d(0, ${s.transform}px, 0)`:"",top:s.fixed?e(s.offsetTop):"","z-index":s.zIndex})}},S=".press-sticky";const T=s({name:"PressSticky",options:{...o},mixins:[y((function(t){this.scroller||(this.scroller=m(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),t(this.scroller,"touchmove",this.onScroll,!0),this.onScroll()}))],props:{...r,zIndex:{type:Number,default:99},offsetTop:{type:Number,default:0},disabled:{type:Boolean},container:{type:[Function,null],default:null},scrollTop:{type:[Number,null],default:null}},emits:["scroll"],data(){return{height:0,fixed:!1,transform:0,scrollTopData:this.scrollTop}},computed:{containerStyle(){const{fixed:t,height:e,zIndex:s}=this;return D.containerStyle({fixed:t,height:e,zIndex:s})},wrapStyle(){const{fixed:t,offsetTop:e,transform:s,zIndex:o}=this;return D.wrapStyle({fixed:t,offsetTop:e,transform:s,zIndex:o})},wrapClass(){const{fixed:t}=this;return i.bem2("sticky-wrap",{fixed:t})}},watch:{offsetTop:{handler(){this.onScroll()}},disabled:{handler(){this.onScroll()}},container:{handler(){this.onScroll()}},scrollTop:{handler(t){this.onScroll({scrollTop:t}),this.scrollTopData=t}}},created(){},mounted(){this.scrollTopData=this.scrollTop,this.onScroll()},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},onScroll({scrollTop:t}={}){const{container:e,offsetTop:s,disabled:o}=this;o?this.setDataAfterDiff({fixed:!1,transform:0}):(this.scrollTopData=t||this.scrollTopData,"function"==typeof e&&e()?Promise.all([a(this,S),this.getContainerRect()]).then((([t,e])=>{t&&e&&s+t.height>e.height+e.top?this.setDataAfterDiff({fixed:!1,transform:e.height-t.height}):t&&s>=t.top?this.setDataAfterDiff({fixed:!0,height:t.height,transform:0}):this.setDataAfterDiff({fixed:!1,transform:0})})).catch((t=>{console.warn("error",t)})):a(this,S).then((t=>{l(t)&&(s>=t.top?(this.setDataAfterDiff({fixed:!0,height:t.height}),this.transform=0):this.setDataAfterDiff({fixed:!1}))})))},setDataAfterDiff(t){n((()=>{const e=Object.keys(t).reduce(((e,s)=>(t[s]!==this[s]&&(e[s]=t[s]),e)),{});Object.keys(e).length>0&&this.setData(e),this.$emit("scroll",{scrollTop:this.scrollTopData,isFixed:t.fixed||this.fixed})}))},getContainerRect(){let t;const e=this.container().getBoundingClientRect();return t=Promise.resolve(e),t}}},[["render",function(t,e,s,o,r,i){return h(),c("div",null,[f(" 注释不要写在第一行，否则 vue3 中的 this.$el 会取到注释 "),f(" 需要再加一个最外层，因为this.$el.querySelector找不到最外层的元素 "),d("div",{ref:"sticky",class:p(["press-sticky",t.customClass]),style:u(i.containerStyle)},[d("div",{class:p(i.wrapClass),style:u(i.wrapStyle)},[x(t.$slots,"default",{},void 0,!0)],6)],6)])}],["__scopeId","data-v-4625b3b4"]]);export{T as P};