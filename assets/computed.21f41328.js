import{i as t}from"./utils.d8f13396.js";const s={displayColumns:function(t,s){return t.slice(0,+s)}};function a(){return s="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__area_data.json",new Promise(((a,n)=>{t()?fetch(s).then((t=>200===t.status?t.json():{})).then((t=>{a(t)})).catch((t=>{n(t)})):uni.request({url:s,data:{},method:"GET",sslVerify:!0,success:({data:t})=>{a(t)},fail:t=>{n(t)}})}));var s}export{s as c,a as g};