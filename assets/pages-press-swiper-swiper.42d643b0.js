import{_ as t,o as i,f as e,j as a,r as n,ai as r,ah as o,m as l,c as s,a as d,i as u,t as c,e as p}from"./index-c83a250c.js";import{S as m}from"./swiper.f58d797a.js";import{P as g}from"./press-slider.65f236ab.js";import"./touch.bcbb2f5b.js";import"./unit.35d12ca3.js";const v=t({components:{Swiper:t({name:"PressSwiper",components:{},mixins:[m],props:{...{indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1},navigation:{type:[Boolean,String],default:!1},navigationColor:{type:String,default:"#fff"},navigationActiveColor:{type:String,default:"rgba(53, 53, 53, 0.6)"}}},methods:{updateCurrent(...t){this.$emit("updateCurrent",...t)},updateCurrentItemId(...t){this.$emit("updateCurrentItemId",...t)},change(...t){this.$emit("change",...t)},animationfinish(...t){this.$emit("animationfinish",...t)},transition(...t){this.$emit("transition",...t)}}},[["render",function(t,o,l,s,d,u){const c=r;return i(),e(c,{"indicator-dots":t.indicatorDots,vertical:t.vertical,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,current:t.current,"indicator-color":t.indicatorColor,"indicator-active-color":t.indicatorActiveColor,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,"current-item-id":t.currentItemId,"skip-hidden-item-layout":t.skipHiddenItemLayout,"display-multiple-items":t.displayMultipleItems,"disable-touch":t.disableTouch,navigation:t.navigation,"navigation-color":t.navigationColor,"navigation-active-color":t.navigationActiveColor,"onUpdate:current":u.updateCurrent,"onUpdate:currentItemId":u.updateCurrentItemId,onChange:u.change,onAnimationfinish:u.animationfinish,onTransition:u.transition},{default:a((()=>[n(t.$slots,"default")])),_:3},8,["indicator-dots","vertical","autoplay","circular","interval","duration","current","indicator-color","indicator-active-color","previous-margin","next-margin","current-item-id","skip-hidden-item-layout","display-multiple-items","disable-touch","navigation","navigation-color","navigation-active-color","onUpdate:current","onUpdate:currentItemId","onChange","onAnimationfinish","onTransition"])}]]),SwiperItem:t({name:"PressSwiperItem",components:{},mixins:[m],props:{...{itemId:{type:String,default:""}}},data:()=>({})},[["render",function(t,r,l,s,d,u){const c=o;return i(),e(c,{"item-id":t.itemId},{default:a((()=>[n(t.$slots,"default")])),_:3},8,["item-id"])}]]),PressSwitch:l,PressSlider:g},data:()=>({background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}),methods:{changeIndicatorDots(){this.indicatorDots=!this.indicatorDots},changeAutoplay(){this.autoplay=!this.autoplay},intervalChange(t){console.log("e",t),this.interval=t},durationChange(t){console.log("e",t),this.duration=t}}},[["render",function(t,e,n,l,m,g){const v=o,h=r,f=p("PressSwitch"),y=p("PressSlider");return i(),s("div",{class:"demo-wrap"},[d("div",{class:"swiper-wrap"},[u(h,{class:"swiper",circular:"","indicator-dots":m.indicatorDots,autoplay:m.autoplay,interval:m.interval,duration:m.duration},{default:a((()=>[u(v,null,{default:a((()=>[d("div",{class:"swiper-item swiper-item--big-red"}," A ")])),_:1}),u(v,null,{default:a((()=>[d("div",{class:"swiper-item swiper-item--big-green"}," B ")])),_:1}),u(v,null,{default:a((()=>[d("div",{class:"swiper-item swiper-item--big-blue"}," C ")])),_:1})])),_:1},8,["indicator-dots","autoplay","interval","duration"])]),d("div",{class:"swiper-list"},[d("div",{class:"swiper-list-cell swiper-list-cell--pd"},[d("div",{class:"uni-list-cell-db"}," 指示点 "),u(f,{checked:m.indicatorDots,size:"20px",onChange:g.changeIndicatorDots},null,8,["checked","onChange"])]),d("div",{class:"swiper-list-cell swiper-list-cell--pd"},[d("div",{class:"uni-list-cell-db"}," 自动播放 "),u(f,{checked:m.autoplay,size:"20px",onChange:g.changeAutoplay},null,8,["checked","onChange"])])]),d("div",{class:"slider-wrap"},[d("div",{class:"slider-item"},[d("span",null,"幻灯片切换时长(ms)"),d("span",{class:"info"},c(m.duration),1)]),u(y,{value:m.duration,min:500,max:2e3,onChange:g.durationChange},null,8,["value","onChange"]),d("div",{class:"slider-item"},[d("span",null,"自动播放间隔时长(ms)"),d("span",{class:"info"},c(m.interval),1)]),u(y,{value:m.interval,min:2e3,max:1e4,onChange:g.intervalChange},null,8,["value","onChange"])])])}],["__scopeId","data-v-eedd013d"]]);export{v as default};