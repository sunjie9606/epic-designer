import{e as q,j as g,r as C,f as b,o as r,c as u,b as t,d as k,q as w,u as y,M as P,X as W,n as V,P as R,m as X,D as z,E as F,Z as B}from"../app.f47f61a8.js";import{R as G}from"./vuedraggable.umd-6a5b6da9.995dc650.js";import{R as N,e as _,a as S,L as H,C as I}from"./index-9f785207.e6578421.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const J={class:"epic-component-view flex flex-col"},K={class:"search-box px-10px pr-14px py-6px"},M=t("span",{class:"iconfont icon-chaxun"},null,-1),O={class:"flex flex-1 overflow-auto"},Q={class:"tabs-box"},T=["title","onClick"],Y={class:"h-full flex-1 overflow-auto py-2 box-border"},Z=["onClick"],A={class:"text-center pt-42px text-gray-400"},oe=q({__name:"index",setup($){const U=N.getComponent("input"),d=g("pageSchema"),p=g("designer"),m=N.getSchemaByGroup(),o=C(""),v={title:"\u5168\u90E8",list:[]},i=C(v),D=b(()=>[v,...m.value]),c=b(()=>{let l=i.value.list;if(i.value.title==="\u5168\u90E8"){const a=m.value.map(e=>e.list);l=[].concat(...a)}return o.value?l.filter(a=>{var e;return(e=a.label)==null?void 0:e.includes(o.value)}):l});function E(l){i.value=l}function L(l){return _({...B(l),id:S()})}function j(l){var x;var a;const e=H(d.schemas,(x=(a=p.state.checkedNode)==null?void 0:a.id)!=null?x:"root");if(!e)return!1;let{list:s,schema:n,index:f}=e;n.children&&!["row","tabs"].includes(n.type)&&(s=n.children,f=n.children.length-1);const h=_({...B(l),id:S()});s.splice(f+1,0,h),p.setCheckedNode(h),I.push(d.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(l,a)=>(r(),u("div",J,[t("div",K,[k(y(U),{placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),value:o.value,"onUpdate:value":a[1]||(a[1]=e=>o.value=e)},{prefix:w(()=>[M]),_:1},8,["modelValue","value"])]),t("div",O,[t("div",Q,[(r(!0),u(P,null,W(D.value,(e,s)=>(r(),u("div",{class:V(["tab cursor-pointer truncate",{checked:i.value.title===e.title}]),key:s,title:e.title,onClick:n=>E(e)},R(e.title),11,T))),128))]),t("div",Y,[k(y(G),X({modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{clone:L,"item-key":"id",class:"grid grid-cols-[auto_auto] px-10px gap-2"}),{item:w(({element:e})=>[t("div",{class:"source-componet-item flex items-center truncate",onClick:s=>j(e)},[t("span",{class:V(["iconfont",e.icon])},null,2),t("div",null,R(e.label),1)],8,Z)]),_:1},16,["modelValue"]),z(t("div",A,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u7EC4\u4EF6",512),[[F,!c.value.length]])])])]))}});export{oe as default};