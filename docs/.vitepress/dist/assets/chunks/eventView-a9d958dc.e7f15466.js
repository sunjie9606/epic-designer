import{F as u,c as U,N as k,z as B}from"./index-3519e374.9c71cf1c.js";import{e as C,j as c,f as i,o as d,c as l,v as g,u as v,F as E}from"../app.9ec52d9f.js";const N={class:"epic-event-view"},M={key:0},j=C({__name:"eventView",setup(z){const p=c("pageSchema"),a=c("designer"),m=u.getComponent("EActionEditor"),f=u.getComponentConfings(),o=i(()=>a.state.checkedNode),b=i(()=>{var s,r;var t,e;const n=[{title:"\u751F\u547D\u5468\u671F",events:[{type:"vnodeBeforeMount",describe:"beforeMount"},{type:"vnodeMounted",describe:"mounted"},{type:"vnodeBeforeUpdate",describe:"beforeUpdate"},{type:"vnodeUpdated",describe:"updated"},{type:"vnodeBeforeUnmount",describe:"beforeUnmount"},{type:"vnodeUnmounted",describe:"unmounted"},{type:"vnodeErrorCaptured",describe:"errorCaptured"}]}],h=(r=(e=f[(s=(t=a.state.checkedNode)==null?void 0:t.type)!=null?s:""])==null?void 0:e.config.event)!=null?r:[];return n.unshift({title:"\u7EC4\u4EF6\u4E8B\u4EF6",events:h}),n});function y(t,e){k(t,e,o.value),B.push(p.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(t,e)=>(d(),l("aside",N,[o.value?(d(),l("div",M,[(d(),g(v(m),{key:o.value.id,"event-list":b.value,"model-value":v(U)("on",o.value),"onUpdate:modelValue":e[0]||(e[0]=n=>y(n,"on"))},null,8,["event-list","model-value"]))])):E("",!0)]))}});export{j as default};