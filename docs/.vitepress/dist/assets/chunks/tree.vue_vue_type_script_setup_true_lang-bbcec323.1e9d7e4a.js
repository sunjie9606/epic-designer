import{i as N,Z as D,p as g,r as P,m as _,o as u,c as S,d as b,e as k,v as T,u as y,a6 as $,a7 as z,k as h,S as F,a8 as G,t as K,V,y as H,ac as B,C as U}from"../app.40ba1749.js";import{m as j}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.3c37508b.js";import{B as R}from"./index.7434e67a.js";import{R as J}from"./vuedraggable.umd-6a5b6da9.01edc059.js";const I=N({name:"ETreeNodeItem",__name:"treeNodeItem",props:{schema:{}},setup(f){const a=f,i=h("slots",{}),r=h("expandedKeys"),o=h("treeProps"),x=h("selectedKeys"),c=h("handleSelect"),p=_(()=>{var s;return r.value.includes((s=a.schema.id)!=null?s:"")}),v=N({setup(){return()=>{var l;var s;return B("span",{class:{text:!0,hover:o.hoverKey===a.schema.id,checked:x.value.includes(a.schema.id)},onClick:()=>c(a.schema.id,a.schema)},(l=(s=i["tree-node"])==null?void 0:s.call(i,a))!=null?l:B("span",{class:"text-padding"},{default:()=>{var t;var e;return[(t=a.schema.label)!=null?t:(e=R.getComponentConfingByType(a.schema.type))==null?void 0:e.defaultSchema.label,B("span",{class:"epic-node-type-text"},a.schema.type)]}}))}}});function n(){const s=a.schema.id;if(!s)return!1;r.value.includes(s)?r.value=r.value.filter(l=>l!==s):r.value.push(s)}function d(){var s;const l=a.schema.id;if(!l||!((s=a.schema.children)!=null&&s.length))return!1;r.value.push(l)}return d(),(s,l)=>{var e,t,m;return u(),S("li",{class:V(["epic-tree-node",{expanded:(e=a.schema.children)==null?void 0:e.length,"level-1":a.schema.type==="page"}])},[b("a",null,[(t=a.schema.children)!=null&&t.length&&a.schema.type!=="page"?(u(),S("span",{key:0,class:V(["icon-expanded",{expanded:p.value}]),onClick:n},[k(y(j),{name:"icon-youjiantou"})],2)):U("",!0),k(y(v))]),(m=a.schema.children)!=null&&m.length?(u(),K(A,{key:0,class:V(["epic-tree-sublist",{expanded:p.value}]),schemas:a.schema.children,"onUpdate:schemas":l[0]||(l[0]=C=>a.schema.children=C),parentSchema:a.schema},null,8,["class","schemas","parentSchema"])):U("",!0)],2)}}}),L={key:1},A=N({name:"ETreeNodes",__name:"treeNodes",props:{schemas:{},parentSchema:{}},emits:["update:schemas"],setup(f,{emit:a}){const i=h("designer"),r=h("treeProps"),o=f,x=a,c=_({get(){return o.schemas},set(n){x("update:schemas",n)}});function p(n){i.setDisableHover(!0),i.setCheckedNode(c.value[n])}function v(n){return n.type==="page"||n.immovable?"unmover-item":"draggable-item"}return(n,d)=>{var s,l;return(s=o.parentSchema)!=null&&s.childImmovable?(u(),S("ul",L,[(u(!0),S(F,null,G(c.value,e=>(u(),K(I,{key:e.id,schema:e},null,8,["schema"]))),128))])):(u(),K(y(J),H({key:0,modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=e=>c.value=e),"item-key":"id","component-data":{},class:"draggable-range"},{animation:200,tag:"ul",group:"tree-draggable",ghostClass:"moveing",draggable:".draggable-item",disabled:!y(r).draggable||((l=c.value[0])==null?void 0:l.type)==="page"},{onStart:d[1]||(d[1]=e=>p(e.oldIndex))}),{item:T(({element:e,index:t})=>[(u(),K(I,{class:V(v(e)),key:e.id,schema:e},null,8,["class","schema"]))]),_:1},16,["modelValue"]))}}}),O={class:"epic-tree h-full flex flex-col"},Q={class:"search-box px-10px py-6px"},Z={class:"epic-tree-main flex-1 overflow-auto h-0"},q={class:"text-center pt-42px text-gray-400"},ee=N({name:"ETree",__name:"tree",props:{options:{type:Array,default:()=>[]},hoverKey:{type:String,default:""},selectedKeys:{type:Array,default:()=>[]},draggable:{type:Boolean,default:!1}},emits:["update:selectedKeys","node-click"],setup(f,{emit:a}){const i=D();g("slots",i);const r=R.getComponent("input"),o=P(""),x=P([]),c=f,p=a,v=_({get(){return c.selectedKeys},set(l){p("update:selectedKeys",l)}}),n=_({get(){return d(c.options,o.value)},set(l){console.log(l)}});function d(l,e){const t=[];return l.forEach(m=>{var C;if((C=m.label)!=null&&C.includes(e))t.push(m);else if(m.children){const w=d(m.children,e);if(w.length>0){const E={...m};E.children=w,t.push(E)}}}),t}function s(l,e){v.value=[l],p("node-click",{id:l,componentSchema:e})}return g("expandedKeys",x),g("selectedKeys",v),g("treeProps",c),g("handleSelect",s),g("handleSelect",s),(l,e)=>(u(),S("div",O,[b("div",Q,[k(y(r),{placeholder:"\u641C\u7D22\u8282\u70B9",clearable:"",allowClear:"",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),value:o.value,"onUpdate:value":e[1]||(e[1]=t=>o.value=t)},{prefix:T(()=>[k(y(j),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),b("div",Z,[b("ul",null,[k(A,{schemas:n.value,"onUpdate:schemas":e[2]||(e[2]=t=>n.value=t)},null,8,["schemas"])]),$(b("div",q,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u6570\u636E",512),[[z,!n.value.length]])])]))}});export{ee as e};