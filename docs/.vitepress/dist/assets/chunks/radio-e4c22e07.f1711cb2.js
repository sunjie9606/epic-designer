import{_ as m,I as d,V as p}from"./index-8fe9ccd4.1923c9aa.js";import"./index.0d7c8eb8.js";import{e as s,R as a}from"../app.c22c6c8c.js";import"./use-form-item-f98c0fd5.ed93b2d3.js";const c=s({emits:["update:modelValue"],setup(i,{emit:u,attrs:n}){function r(e=null){u("update:modelValue",e)}return()=>{const e={...n,"onUpdate:modelValue":r};return a(p,e,{default:()=>{var l,o;return[e!=null&&e.radioButton?(l=e.options)==null?void 0:l.map(t=>a(m,{label:t.value},{default:()=>t.label})):(o=e.options)==null?void 0:o.map(t=>a(d,{label:t.value},{default:()=>t.label}))]}})}}});export{c as default};