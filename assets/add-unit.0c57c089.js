import{c as p}from"./validator.84caa8d5.js";const t=/^-?\d+(\.\d+)?$/;function r(p){if(null!=p)return t.test(`${p}`)?`${p}px`:p}function n(t,r=!1){return p(t)?r?`${t}px`:Number(t):/(rpx|upx)$/.test(t)?r?`${uni.upx2px(parseInt(t,10))}px`:Number(uni.upx2px(parseInt(t,10))):r?`${parseInt(t,10)}px`:parseInt(t,10)}export{r as a,n as g};