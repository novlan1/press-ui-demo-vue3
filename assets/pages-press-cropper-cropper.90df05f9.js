import{P as t}from"./press-popup-plus.35026328.js";import{T as e}from"./toolbar.c9abb96b.js";import{K as i,o as s,c as o,L as r,M as h,a,b as c,d as n,n as p,t as l,_ as u,P as d,f as g,j as f,i as m,N as w,h as v,e as C}from"./index-e317c8c7.js";import{P as x}from"./press-image.11f99f4f.js";const y={};y.getData=t=>new Promise(((e,i)=>{let s={};(function(t){let e=null;return new Promise(((i,s)=>{if(t.src)if(/^data\:/i.test(t.src))e=function(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/im)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var i=atob(t),s=i.length%2==0?i.length:i.length+1,o=new ArrayBuffer(s),r=new Uint16Array(o),h=0;h<s;h++)r[h]=i.charCodeAt(h);return o}(t.src),i(e);else if(/^blob\:/i.test(t.src)){var o=new FileReader;o.onload=function(t){e=t.target.result,i(e)},function(t,e){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="blob",i.onload=function(t){(200==this.status||0===this.status)&&e(this.response)},i.send()}(t.src,(function(t){o.readAsArrayBuffer(t)}))}else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=r.response,i(e),r=null},r.open("GET",t.src,!0),r.responseType="arraybuffer",r.send(null)}else s("img error")}))})(t).then((t=>{s.arrayBuffer=t;try{s.orientation=function(t){var e,i,s,o,r,h,a,c,n,p,l=new DataView(t),u=l.byteLength;if(255===l.getUint8(0)&&216===l.getUint8(1))for(n=2;n<u;){if(255===l.getUint8(n)&&225===l.getUint8(n+1)){a=n;break}n++}if(a&&(i=a+4,s=a+10,"Exif"===function(t,e,i){var s,o="";for(s=e,i+=e;s<i;s++)o+=String.fromCharCode(t.getUint8(s));return o}(l,i,4)&&(h=l.getUint16(s),((r=18761===h)||19789===h)&&42===l.getUint16(s+2,r)&&(o=l.getUint32(s+4,r),o>=8&&(c=s+o)))),c)for(u=l.getUint16(c,r),p=0;p<u;p++)if(n=c+12*p+2,274===l.getUint16(n,r)){n+=8,e=l.getUint16(n,r);break}return e}(t)}catch{s.orientation=-1}e(s)})).catch((t=>{i(t)}))}));const b=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i},O=i({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0,imgIsQqualCrop:!1}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10,validator:function(t){return Array.isArray(t)?Number(t[0])>=0&&Number(t[1])>=0:Number(t)>=0}},fillColor:{type:String,default:""}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:()=>!!window.ActiveXObject||"ActiveXObject"in window,passive(){return this.isIE?null:{passive:!1}},isRotateRightOrLeft(){return[1,-1,3,-3].includes(this.rotate)}},watch:{img(){this.checkedImg()},imgs(t){""!==t&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const o=new RegExp(t,"i");for(var r=0;r<e.length;r++)o.test(e[r])&&(i=e[r]);return s=i?i.split("/")[1].split("."):["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const t=this.getVersion("version");t[0]>13&&t[1]>1&&(e=-1)}else{const t=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(t){let i=t[1];i=i.split("_"),(i[0]>13||i[0]>=13&&i[1]>=4)&&(e=-1)}}let o=document.createElement("canvas"),r=o.getContext("2d");switch(r.save(),e){case 2:o.width=i,o.height=s,r.translate(i,0),r.scale(-1,1);break;case 3:o.width=i,o.height=s,r.translate(i/2,s/2),r.rotate(180*Math.PI/180),r.translate(-i/2,-s/2);break;case 4:o.width=i,o.height=s,r.translate(0,s),r.scale(1,-1);break;case 5:o.height=i,o.width=s,r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:o.width=s,o.height=i,r.translate(s/2,i/2),r.rotate(90*Math.PI/180),r.translate(-i/2,-s/2);break;case 7:o.height=i,o.width=s,r.rotate(.5*Math.PI),r.translate(i,-s),r.scale(-1,1);break;case 8:o.height=i,o.width=s,r.translate(s/2,i/2),r.rotate(-90*Math.PI/180),r.translate(-i/2,-s/2);break;default:o.width=i,o.height=s}r.drawImage(t,0,0,i,s),r.restore(),o.toBlob((t=>{let e=URL.createObjectURL(t);URL.revokeObjectURL(this.imgs),this.imgs=e}),"image/"+this.outputType,1)},checkedImg(){if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.imgIsQqualCrop=!1,this.clearCrop();let t=new Image;if(t.onload=()=>{if(""===this.img)return this.$emit("img-load",new Error("图片不能为空")),!1;let e=t.width,i=t.height;y.getData(t).then((s=>{this.orientation=s.orientation||1;let o=Number(this.maxImgSize);!this.orientation&&e<o&i<o?this.imgs=this.img:(e>o&&(i=i/e*o,e=o),i>o&&(e=e/i*o,i=o),this.checkOrientationImage(t,this.orientation,e,i))})).catch((t=>{this.$emit("img-load","error"),this.$emit("img-load-error",t)}))},t.onerror=t=>{this.$emit("img-load","error"),this.$emit("img-load-error",t)},"data"!==this.img.substr(0,4)&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var e=URL.createObjectURL(this.response);t.src=e},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i=this.touches[0].clientX,s=this.touches[0].clientY,o=t.touches[0].clientX,r=t.touches[0].clientY,h=this.touches[1].clientX,a=this.touches[1].clientY,c=t.touches[1].clientX,n=t.touches[1].clientY,p=Math.sqrt(Math.pow(i-h,2)+Math.pow(s-a,2)),l=Math.sqrt(Math.pow(o-c,2)+Math.pow(r-n,2))-p,u=1,d=(u=(u=u/this.trueWidth>u/this.trueHeight?u/this.trueHeight:u/this.trueWidth)>.1?.1:u)*l;if(!this.touchNow){if(this.touchNow=!0,l>0?e+=Math.abs(d):l<0&&e>Math.abs(d)&&(e-=Math.abs(d)),this.touches=t.touches,setTimeout((()=>{this.touchNow=!1}),8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,o="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.moveX,i=o-this.moveY,this.$nextTick((()=>{if(this.centerBox){let t,s,o,r,h=this.getImgAxis(e,i,this.scale),a=this.getCropAxis(),c=this.trueHeight*this.scale,n=this.trueWidth*this.scale;switch(this.rotate){case 1:case-1:case 3:case-3:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(c-n)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(n-c)/2,o=t-c+this.cropW,r=s-n+this.cropH;break;default:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,o=t-n+this.cropW,r=s-c+this.cropH}h.x1>=a.x1&&(e=t),h.y1>=a.y1&&(i=s),h.x2<=a.x2&&(e=o),h.y2<=a.y2&&(i=r)}this.x=e,this.y=i,this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}))},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta;i=navigator.userAgent.indexOf("Firefox")>0?30*i:i,this.isIE&&(i=-i);var s=this.coe,o=(s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth)*i;o<0?e+=Math.abs(o):e>Math.abs(o)&&(e-=Math.abs(o));let r=o<0?"add":"reduce";if(r!==this.coeStatus&&(this.coeStatus=r,this.coe=.2),this.scaling||(this.scalingSet=setTimeout((()=>{this.scaling=!1,this.coe=this.coe+=.01}),50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if((t*=i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick((()=>{var t=e-this.cropX,s=i-this.cropY;if(t>0?(this.cropW=t+this.cropChangeX>this.w?this.w-this.cropChangeX:t,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(t)>this.w?this.cropChangeX:Math.abs(t),this.cropOffsertX=this.cropChangeX+t>0?this.cropChangeX+t:0),this.fixed){var o=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];o+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.cropOffsertX=t>0?this.cropChangeX:this.cropChangeX-this.cropW):this.cropH=o,this.cropOffsertY=this.cropOffsertY}else s>0?(this.cropH=s+this.cropChangeY>this.h?this.h-this.cropChangeY:s,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(s)>this.h?this.cropChangeY:Math.abs(s),this.cropOffsertY=this.cropChangeY+s>0?this.cropChangeY+s:0)}))},changeCropSize(t,e,i,s,o){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=o,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,o=this.h,r=0,h=0;if(this.centerBox){let t=this.getImgAxis(),e=t.x2,i=t.y2;r=t.x1>0?t.x1:0,h=t.y1>0?t.y1:0,s>e&&(s=e),o>i&&(o=i)}const[a,c]=this.checkCropLimitSize();this.$nextTick((()=>{var t=e-this.cropX,n=i-this.cropY;if(this.canChangeX&&(1===this.changeCropTypeX?this.cropOldW-t<a?(this.cropW=a,this.cropOffsertX=this.cropOldW+this.cropChangeX-r-a):this.cropOldW-t>0?(this.cropW=s-this.cropChangeX-t<=s-r?this.cropOldW-t:this.cropOldW+this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX-t<=s-r?this.cropChangeX+t:r):(this.cropW=Math.abs(t)+this.cropChangeX<=s?Math.abs(t)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):2===this.changeCropTypeX&&(this.cropOldW+t<a?this.cropW=a:this.cropOldW+t>0?(this.cropW=this.cropOldW+t+this.cropOffsertX<=s?this.cropOldW+t:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-r?Math.abs(t+this.cropOldW):this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-r?this.cropChangeX-Math.abs(t+this.cropOldW):r))),this.canChangeY&&(1===this.changeCropTypeY?this.cropOldH-n<c?(this.cropH=c,this.cropOffsertY=this.cropOldH+this.cropChangeY-h-c):this.cropOldH-n>0?(this.cropH=o-this.cropChangeY-n<=o-h?this.cropOldH-n:this.cropOldH+this.cropChangeY-h,this.cropOffsertY=o-this.cropChangeY-n<=o-h?this.cropChangeY+n:h):(this.cropH=Math.abs(n)+this.cropChangeY<=o?Math.abs(n)-this.cropOldH:o-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):2===this.changeCropTypeY&&(this.cropOldH+n<c?this.cropH=c:this.cropOldH+n>0?(this.cropH=this.cropOldH+n+this.cropOffsertY<=o?this.cropOldH+n:o-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=o-this.cropChangeY+Math.abs(n+this.cropOldH)<=o-h?Math.abs(n+this.cropOldH):this.cropChangeY-h,this.cropOffsertY=o-this.cropChangeY+Math.abs(n+this.cropOldH)<=o-h?this.cropChangeY-Math.abs(n+this.cropOldH):h))),this.canChangeX&&this.fixed){var p=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];p<c?(this.cropH=c,this.cropW=this.fixedNumber[0]*c/this.fixedNumber[1],1===this.changeCropTypeX&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):p+this.cropOffsertY>o?(this.cropH=o-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],1===this.changeCropTypeX&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):this.cropH=p}if(this.canChangeY&&this.fixed){var l=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];l<a?(this.cropW=a,this.cropH=this.fixedNumber[1]*a/this.fixedNumber[0],this.cropOffsertY=this.cropOldH+this.cropChangeY-this.cropH):l+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=l}}))},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return s=Array.isArray(i)?i:[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},calculateSize(t,e,i,s,o,r){const h=t/e;let a=o,c=r;return a<i&&(a=i,c=Math.ceil(a/h)),c<s&&(c=s,a=Math.ceil(c*h),a<i&&(a=i,c=Math.ceil(a/h))),a<o&&(a=o,c=Math.ceil(a/h)),c<r&&(c=r,a=Math.ceil(c*h)),{width:a,height:c}},endCrop(){0===this.cropW&&0===this.cropH&&(this.cropping=!1);let[t,e]=this.checkCropLimitSize();const{width:i,height:s}=this.fixed?this.calculateSize(this.fixedNumber[0],this.fixedNumber[1],t,e,this.cropW,this.cropH):{width:t,height:e};i>this.cropW&&(this.cropW=i,this.cropOffsertX+i>this.w&&(this.cropOffsertX=this.w-i)),s>this.cropH&&(this.cropH=s,this.cropOffsertY+s>this.h&&(this.cropOffsertY=this.h-s)),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,o="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.cropOffsertX,i=o-this.cropOffsertY,this.cropX=e,this.cropY=i,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick((()=>{let t,o,r=i-this.cropX,h=s-this.cropY;if(e&&(r=this.cropOffsertX,h=this.cropOffsertY),t=r<=0?0:r+this.cropW>this.w?this.w-this.cropW:r,o=h<=0?0:h+this.cropH>this.h?this.h-this.cropH:h,this.centerBox){let e=this.getImgAxis();t<=e.x1&&(t=e.x1),t+this.cropW>e.x2&&(t=e.x2-this.cropW),o<=e.y1&&(o=e.y1),o+this.cropH>e.y2&&(o=e.y2-this.cropH)}this.cropOffsertX=t,this.cropOffsertY=o,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})}))},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},o=this.trueWidth*i,r=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(o-r)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(r-o)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=e.getContext("2d"),s=new Image,o=this.rotate,r=this.trueWidth,h=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;s.onload=()=>{if(0!==this.cropW){let t=1;this.high&!this.full&&(t=window.devicePixelRatio),1!==this.enlarge&!this.full&&(t=Math.abs(Number(this.enlarge)));let e=this.cropW*t,n=this.cropH*t,l=r*this.scale*t,u=h*this.scale*t,d=(this.x-a+this.trueWidth*(1-this.scale)/2)*t,g=(this.y-c+this.trueHeight*(1-this.scale)/2)*t;switch(p(e,n),i.save(),o){case 0:this.full?(p(e/this.scale,n/this.scale),i.drawImage(s,d/this.scale,g/this.scale,l/this.scale,u/this.scale)):i.drawImage(s,d,g,l,u);break;case 1:case-3:this.full?(p(e/this.scale,n/this.scale),d=d/this.scale+(l/this.scale-u/this.scale)/2,g=g/this.scale+(u/this.scale-l/this.scale)/2,i.rotate(90*o*Math.PI/180),i.drawImage(s,g,-d-u/this.scale,l/this.scale,u/this.scale)):(d+=(l-u)/2,g+=(u-l)/2,i.rotate(90*o*Math.PI/180),i.drawImage(s,g,-d-u,l,u));break;case 2:case-2:this.full?(p(e/this.scale,n/this.scale),i.rotate(90*o*Math.PI/180),d/=this.scale,g/=this.scale,i.drawImage(s,-d-l/this.scale,-g-u/this.scale,l/this.scale,u/this.scale)):(i.rotate(90*o*Math.PI/180),i.drawImage(s,-d-l,-g-u,l,u));break;case 3:case-1:this.full?(p(e/this.scale,n/this.scale),d=d/this.scale+(l/this.scale-u/this.scale)/2,g=g/this.scale+(u/this.scale-l/this.scale)/2,i.rotate(90*o*Math.PI/180),i.drawImage(s,-g-l/this.scale,d,l/this.scale,u/this.scale)):(d+=(l-u)/2,g+=(u-l)/2,i.rotate(90*o*Math.PI/180),i.drawImage(s,-g-l,d,l,u));break;default:this.full?(p(e/this.scale,n/this.scale),i.drawImage(s,d/this.scale,g/this.scale,l/this.scale,u/this.scale)):i.drawImage(s,d,g,l,u)}i.restore()}else{let t=r*this.scale,e=h*this.scale;switch(i.save(),o){case 0:p(t,e),i.drawImage(s,0,0,t,e);break;case 1:case-3:p(e,t),i.rotate(90*o*Math.PI/180),i.drawImage(s,0,-e,t,e);break;case 2:case-2:p(t,e),i.rotate(90*o*Math.PI/180),i.drawImage(s,-t,-e,t,e);break;case 3:case-1:p(e,t),i.rotate(90*o*Math.PI/180),i.drawImage(s,-t,0,t,e);break;default:p(t,e),i.drawImage(s,0,0,t,e)}i.restore()}t(e)},"data"!==this.img.substr(0,4)&&(s.crossOrigin="Anonymous"),s.src=this.imgs;const n=this.fillColor;function p(t,s){e.width=Math.round(t),e.height=Math.round(s),n&&(i.fillStyle=n,i.fillRect(0,0,e.width,e.height))}},getCropData(t){this.getCropChecked((e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))}))},getCropBlob(t){this.getCropChecked((e=>{e.toBlob((e=>t(e)),"image/"+this.outputType,this.outputSize)}))},showPreview(){if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout((()=>{this.isCanShow=!0}),16);let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let o=(this.x-this.cropOffsertX)/i,r=(this.y-this.cropOffsertY)/i;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${o}px, ${r}px, 0px)rotateZ(${90*this.rotate}deg)`},s.html=`\n      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">\n        <div style="width: ${t}px; height: ${e}px">\n          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:\n          scale(${i})translate3d(${o}px, ${r}px, 0px)rotateZ(${90*this.rotate}deg)">\n        </div>\n      </div>`,this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick((()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),setTimeout((()=>{this.showPreview()}),20)}))},t.onerror=()=>{this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i*=t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let o=s[0];if(-1!==o.search("px")){o=o.replace("px",""),e=parseFloat(o);const r=e/this.trueWidth;let h=1,a=s[1];-1!==a.search("px")&&(a=a.replace("px",""),i=parseFloat(a),h=i/this.trueHeight),t=Math.min(r,h)}if(-1!==o.search("%")&&(o=o.replace("%",""),e=parseFloat(o)/100*this.w,t=e/this.trueWidth),2===s.length&&"auto"===o){let e=s[1];-1!==e.search("px")&&(e=e.replace("px",""),i=parseFloat(e),t=i/this.trueHeight),-1!==e.search("%")&&(e=e.replace("%",""),i=parseFloat(e)/100*this.h,t=i/this.trueHeight)}}catch{t=1}}return t},goAutoCrop(t,e){if(""===this.imgs||null===this.imgs)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const t=Math.abs(this.rotate)%2>0;let e=(t?this.trueHeight:this.trueWidth)*this.scale,o=(t?this.trueWidth:this.trueHeight)*this.scale;i=e<i?e:i,s=o<s?o:s}var o=t||parseFloat(this.autoCropWidth),r=e||parseFloat(this.autoCropHeight);(0===o||0===r)&&(o=.8*i,r=.8*s),o=o>i?i:o,r=r>s?s:r,this.fixed&&(r=o/this.fixedNumber[0]*this.fixedNumber[1]),r>this.h&&(o=(r=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(o,r)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(e=(t=i.x2-i.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(t=(e=i.y2-i.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick((()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)}))},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.imgIsQqualCrop=!1,this.clearCrop(),this.$nextTick((()=>{this.checkedImg()}))},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let o=this.getImgAxis(t,e,i),r=this.getCropAxis();o.x1>=r.x1&&(s=!1),o.x2<=r.x2&&(s=!1),o.y1>=r.y1&&(s=!1),o.y2<=r.y2&&(s=!1),s||this.changeImgScale(o,r,i)}return s},changeImgScale(t,e,i){let s=this.trueWidth,o=this.trueHeight,r=s*i,h=o*i;if(r>=this.cropW&&h>=this.cropH)this.scale=i;else{const t=this.cropW/s,e=this.cropH/o,i=this.cropH<=o*t?t:e;this.scale=i,r=s*i,h=o*i}this.imgIsQqualCrop||(t.x1>=e.x1&&(this.isRotateRightOrLeft?this.x=e.x1-(s-r)/2-(r-h)/2:this.x=e.x1-(s-r)/2),t.x2<=e.x2&&(this.isRotateRightOrLeft?this.x=e.x1-(s-r)/2-(r-h)/2-h+this.cropW:this.x=e.x2-(s-r)/2-r),t.y1>=e.y1&&(this.isRotateRightOrLeft?this.y=e.y1-(o-h)/2-(h-r)/2:this.y=e.y1-(o-h)/2),t.y2<=e.y2&&(this.isRotateRightOrLeft?this.y=e.y2-(o-h)/2-(h-r)/2-r:this.y=e.y2-(o-h)/2-h)),(r<this.cropW||h<this.cropH)&&(this.imgIsQqualCrop=!0)}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,i,s){for(var o=atob(this.toDataURL(i,s).split(",")[1]),r=o.length,h=new Uint8Array(r),a=0;a<r;a++)h[a]=o.charCodeAt(a);e(new Blob([h],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},unmounted(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),H={key:0,class:"cropper-box"},W=["src"],X={class:"cropper-view-box"},Y=["src"],S={key:1};function M(){return new Promise((t=>{const e=document.createElement("input");e.style.visibility="hidden",e.type="file",e.accept="image/*",e.style.height="100%",e.style.width="100%",e.id="inputfile",document.body.appendChild(e),e.onchange=e=>{(function(t){return new Promise((e=>{const i=new FileReader;i.onload=t=>{let i;i="object"==typeof t.target.result?window.URL.createObjectURL(new Blob([t.target.result])):t.target.result,e(i)},i.readAsArrayBuffer(t)}))})(e.target.files[0]).then((e=>{t(e)}))},e.click()}))}const I=u({components:{PressCropper:u({name:"PressCropper",options:{styleIsolation:"shared"},components:{PressPopupPlus:t,PressButton:d,ToolBar:e,VueCropper:b(O,[["render",function(t,e,i,u,d,g){return s(),o("div",{class:"vue-cropper",ref:"cropper",onMouseover:e[28]||(e[28]=(...e)=>t.scaleImg&&t.scaleImg(...e)),onMouseout:e[29]||(e[29]=(...e)=>t.cancelScale&&t.cancelScale(...e))},[t.imgs?(s(),o("div",H,[r(a("div",{class:"cropper-box-canvas",style:c({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"})},[a("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,W)],4),[[h,!t.loading]])])):n("",!0),a("div",{class:p(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:e[0]||(e[0]=(...e)=>t.startMove&&t.startMove(...e)),onTouchstart:e[1]||(e[1]=(...e)=>t.startMove&&t.startMove(...e))},null,34),r(a("div",{class:"cropper-crop-box",style:c({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[a("span",X,[a("img",{style:c({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,Y)]),a("span",{class:"cropper-face cropper-move",onMousedown:e[2]||(e[2]=(...e)=>t.cropMove&&t.cropMove(...e)),onTouchstart:e[3]||(e[3]=(...e)=>t.cropMove&&t.cropMove(...e))},null,32),t.info?(s(),o("span",{key:0,class:"crop-info",style:c({top:t.cropInfo.top})},l(t.cropInfo.width)+" × "+l(t.cropInfo.height),5)):n("",!0),t.fixedBox?n("",!0):(s(),o("span",S,[a("span",{class:"crop-line line-w",onMousedown:e[4]||(e[4]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:e[5]||(e[5]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),a("span",{class:"crop-line line-a",onMousedown:e[6]||(e[6]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:e[7]||(e[7]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),a("span",{class:"crop-line line-s",onMousedown:e[8]||(e[8]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:e[9]||(e[9]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),a("span",{class:"crop-line line-d",onMousedown:e[10]||(e[10]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:e[11]||(e[11]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),a("span",{class:"crop-point point1",onMousedown:e[12]||(e[12]=e=>t.changeCropSize(e,!0,!0,1,1)),onTouchstart:e[13]||(e[13]=e=>t.changeCropSize(e,!0,!0,1,1))},null,32),a("span",{class:"crop-point point2",onMousedown:e[14]||(e[14]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:e[15]||(e[15]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),a("span",{class:"crop-point point3",onMousedown:e[16]||(e[16]=e=>t.changeCropSize(e,!0,!0,2,1)),onTouchstart:e[17]||(e[17]=e=>t.changeCropSize(e,!0,!0,2,1))},null,32),a("span",{class:"crop-point point4",onMousedown:e[18]||(e[18]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:e[19]||(e[19]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),a("span",{class:"crop-point point5",onMousedown:e[20]||(e[20]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:e[21]||(e[21]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),a("span",{class:"crop-point point6",onMousedown:e[22]||(e[22]=e=>t.changeCropSize(e,!0,!0,1,2)),onTouchstart:e[23]||(e[23]=e=>t.changeCropSize(e,!0,!0,1,2))},null,32),a("span",{class:"crop-point point7",onMousedown:e[24]||(e[24]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:e[25]||(e[25]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),a("span",{class:"crop-point point8",onMousedown:e[26]||(e[26]=e=>t.changeCropSize(e,!0,!0,2,2)),onTouchstart:e[27]||(e[27]=e=>t.changeCropSize(e,!0,!0,2,2))},null,32)]))],4),[[h,t.cropping]])],544)}],["__scopeId","data-v-a742df44"]])},props:{...{width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},cutWidth:{type:[String,Number],default:"50%"},cutHeight:{type:[String,Number],default:0},minWidth:{type:Number,default:50},minHeight:{type:Number,default:50},center:{type:Boolean,default:!0},src:String,disableScale:Boolean,disableRotate:{type:Boolean,default:!1},disableTranslate:Boolean,disableCtrl:Boolean,boundDetect:{type:Boolean,default:!1},freeBoundDetect:Boolean,keepRatio:Boolean,disablePreview:{type:Boolean,default:!1},showCtrlBorder:Boolean,resetCut:Boolean,fit:{type:Boolean,default:!0},imageCenter:Boolean,maxZoom:{type:Number,default:10},minZoom:{type:Number,default:1},angle:{type:Number,default:0},zoom:{type:Number,default:1},offset:{type:Array,default:()=>[0,0]},background:{type:String,default:"#000"},canvasBackground:{type:String,default:"#fff"},canvasZoom:{type:Number,default:1},fileType:{type:String,default:"png",validator:t=>["png","jpg"].includes(t)},quality:{type:Number,default:1},maskType:{type:String,default:"shadow"},circleView:Boolean},show:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0},title:{type:String,default:"裁剪图片"},cancelButtonText:{type:String,default:""},confirmButtonText:{type:String,default:""},toolbarClass:{type:String,default:""},isESport:{type:Boolean,default:!1},h5Option:{type:Object,default:()=>({})},delayShow:{type:Number,default:200}},data:()=>({showCropper:!1,timer:null,lastCropped:{}}),watch:{show:{handler(t){t?(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showCropper=!0}),this.delayShow)):(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showCropper=!1}),300))},immediate:!0}},mounted(){},methods:{afterDraw(...t){this.$emit("afterDraw",...t)},beforeDraw(...t){this.$emit("beforeDraw",...t)},cropped(t,e){this.$emit("cropped",t,e),this.lastCropped={imagePath:t,imageInfo:e}},onClose(){this.$emit("close")},confirm(){this.$refs.cropper.getCropData((t=>{this.$emit("confirm",t)}))},cancel(){this.$emit("cancel")}}},[["render",function(t,e,i,r,h,c){const p=C("ToolBar"),l=C("VueCropper"),u=C("PressButton"),d=C("press-popup-plus");return s(),g(d,{show:i.show,"wrap-class":"press-cropper","custom-class":"press-cropper__popup",onClose:c.onClose,onConfirm:c.confirm,onCancel:c.cancel},{default:f((()=>[i.showTitle?(s(),g(p,{key:0,title:i.title,"show-toolbar":!0,"cancel-button-text":i.cancelButtonText,"confirm-button-text":i.confirmButtonText,"custom-class":i.toolbarClass},null,8,["title","cancel-button-text","confirm-button-text","custom-class"])):n("v-if",!0),a("div",{class:"press-cropper__wrap"},[m(l,w({ref:"cropper"},i.h5Option),null,16)]),(s(),o("div",{key:1,class:"press-cropper__footer"},[m(u,{class:"press-cropper__button","custom-class":"press-cropper__cancel",type:i.isESport?"e-sport-border":"default",size:"small",onClick:c.cancel},{default:f((()=>[v(" 取消 ")])),_:1},8,["type","onClick"]),m(u,{class:"press-cropper__button","custom-class":"press-cropper__confirm",type:i.isESport?"e-sport-primary":"primary",size:"small",onClick:c.confirm},{default:f((()=>[v(" 确认 ")])),_:1},8,["type","onClick"])]))])),_:1},8,["show","onClose","onConfirm","onCancel"])}],["__scopeId","data-v-aa1a0b07"]]),PressButton:d,PressImage:x},data:()=>({src:"",show:!1,isESport:!1,h5Option:{autoCrop:!0,autoCropWidth:"80%",autoCropHeight:"80%",canMove:!0,canMoveBox:!0,centerBox:!0,enlarge:2,fixedBox:!0,info:!1,infoTrue:!0,mode:"contain",outputSize:1,outputType:"jpg"},parsedImage:""}),mounted(){this.initH5Option()},methods:{initH5Option(){const t=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;this.h5Option={...this.h5Option,autoCropWidth:t,autoCropHeight:Math.floor(1*t),aspectRatio:1,mode:`${t}px auto`,outputType:"png",centerBox:!0}},selectImg(){M().then((t=>{this.src=t,this.h5Option.img=this.src,console.log("[src]",this.src),this.show=!0}))},beforeDraw(t,e){t.setFillStyle("yellow"),e.zoom=2},afterDraw(t,e){t.fillText("我是一行文字水印",20,20),console.log(`当前画布大小：${e.width}*${e.height}`)},cropped(t,e){console.log("[cropped]",t,e)},confirm(...t){console.log("[confirm]",t),this.show=!1,this.parsedImage=t[0]},cancel(){this.show=!1}}},[["render",function(t,e,i,r,h,a){const c=C("PressButton"),p=C("PressCropper"),l=C("PressImage");return s(),o("div",{class:"demo-wrap"},[m(c,{type:"primary",block:"",onClick:a.selectImg},{default:f((()=>[v(" 上传图片 ")])),_:1},8,["onClick"]),m(p,{show:h.show,src:h.src,zoom:1,angle:0,"cut-width":"100%","bound-detect":!0,"disable-preview":!0,"disable-rotate":!0,"canvas-background":"black","is-e-sport":h.isESport,"h5-option":h.h5Option,onCropped:a.cropped,onAfterDraw:a.afterDraw,onBeforeDraw:a.beforeDraw,onCancel:a.cancel,onConfirm:a.confirm},null,8,["show","src","is-e-sport","h5-option","onCropped","onAfterDraw","onBeforeDraw","onCancel","onConfirm"]),h.parsedImage?(s(),g(l,{key:0,src:h.parsedImage,mode:"aspectFit","transition-style":"margin: 20px auto;display: flex;justify-content: center;","custom-style":"border: 1px solid #eee;"},null,8,["src"])):n("v-if",!0)])}],["__scopeId","data-v-a5c68906"]]);export{I as default};