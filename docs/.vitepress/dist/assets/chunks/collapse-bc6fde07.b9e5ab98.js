import{aj as s}from"./index.0d7c8eb8.js";import{e as p,R as c,g as l}from"../app.c22c6c8c.js";const m=p({props:{record:{type:Object,required:!0,default:()=>({})}},setup(r,{attrs:i,slots:t}){return()=>{var d;var o;const e={...r.record,title:(d=(o=r.record)==null?void 0:o.label)!=null?d:""},a=e.children;return delete e.children,c(s,e,{default:()=>[l(t,"edit-node",{},()=>a.map(n=>l(t,"node",{record:n})))]})}}});export{m as default};