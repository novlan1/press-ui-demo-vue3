import{_ as e,z as a,o as t,c as s,a as i,r,n as d}from"./index-c83a250c.js";import{P as o}from"./relation.8b10893c.js";import{a as n}from"./parent-map.b443f4cc.js";const l=e({name:"PressCheckboxGroup",mixins:[o(n)],props:{max:{type:Number,default:0},value:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},direction:{type:String,default:"vertical"}},emits:["input","change"],data:()=>({}),computed:{groupClass(){const{direction:e}=this;return a.bem2("checkbox-group",[{horizontal:"horizontal"===e}])}},watch:{disabled:{handler(){this.updateChildren()}},value:{handler(){this.updateChildren()}}},created(){this.children=[]},methods:{updateChildren(){this.children.forEach((e=>this.updateChild(e)))},updateChild(e){const{value:a,disabled:t,direction:s}=this;e.setData({dataValue:-1!==a.indexOf(e.name),parentDisabled:t,direction:s})}}},[["render",function(e,a,o,n,l,p){return t(),s("div",{class:"press-checkbox-group-index"},[i("div",{class:d(p.groupClass)},[r(e.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-89efa252"]]);export{l as P};