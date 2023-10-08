import{e as V,i as F,p as m,r as U,f as N,o as h,c as _,b,d as k,q as P,u as v,D as I,E as R,j as p,v as E,n as K,m as q,R as S,F as D}from"../app.9ec52d9f.js";import{p as T}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.40cc991d.js";import{F as j}from"./index-3519e374.9c71cf1c.js";import{R as A}from"./vuedraggable.umd-6a5b6da9.78f40607.js";const $=V({name:"ETreeNodeItem",__name:"treeNodeItem",props:{schema:{}},setup(g){const a=g,u=p("slots",{}),r=p("expandedKeys"),y=p("treeProps"),l=p("selectedKeys"),f=p("handleSelect"),i=N(()=>{var e;return r.value.includes((e=a.schema.id)!=null?e:"")}),n=V({setup(){return()=>{var s;var e;return S("span",{class:{text:!0,hover:y.hoverKey===a.schema.id,checked:l.value.includes(a.schema.id)},onClick:()=>f(a.schema.id,a.schema)},(s=(e=u["tree-node"])==null?void 0:e.call(u,a))!=null?s:S("span",{class:"text-padding"},{default:()=>{var o;var t;return[(o=a.schema.label)!=null?o:(t=j.getComponentConfingByType(a.schema.type))==null?void 0:t.defaultSchema.label,S("span",{class:"epic-node-type-text"},a.schema.type)]}}))}}});function d(){const e=a.schema.id;if(!e)return!1;r.value.includes(e)?r.value=r.value.filter(s=>s!==e):r.value.push(e)}function c(){var e;const s=a.schema.id;if(!s||!((e=a.schema.children)!=null&&e.length))return!1;r.value.push(s)}return c(),(e,s)=>{var t,o,x;return h(),_("li",{class:K(["epic-tree-node",{expanded:(t=a.schema.children)==null?void 0:t.length,"level-1":a.schema.type==="page"}])},[b("a",null,[(o=a.schema.children)!=null&&o.length&&a.schema.type!=="page"?(h(),_("span",{key:0,class:K(["icon-expanded",{expanded:i.value}]),onClick:d},[k(v(T),{name:"icon-youjiantou"})],2)):D("",!0),k(v(n))]),(x=a.schema.children)!=null&&x.length?(h(),E(w,{key:0,class:K(["epic-tree-sublist",{expanded:i.value}]),schemas:a.schema.children,"onUpdate:schemas":s[0]||(s[0]=C=>a.schema.children=C)},null,8,["class","schemas"])):D("",!0)],2)}}}),w=V({name:"ETreeNodes",__name:"treeNodes",props:{schemas:{}},emits:["update:schemas"],setup(g,{emit:a}){const u=g,r=p("designer"),y=p("treeProps"),l=N({get(){return u.schemas},set(n){a("update:schemas",n)}});function f(n){r.setDisableHover(!0),r.setCheckedNode(l.value[n])}function i(n){return n.type==="page"?"unmover-item":"draggable-item"}return(n,d)=>(h(),E(v(A),q({modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=c=>l.value=c),"item-key":"id","component-data":{},class:"draggable-range"},{animation:200,group:"tree-draggable",ghostClass:"moveing",draggable:".draggable-item",disabled:!v(y).draggable||l.value[0].type==="page"},{onStart:d[1]||(d[1]=c=>f(c.oldIndex))}),{item:P(({element:c,index:e})=>[(h(),E($,{class:K(i(c)),key:c.id,schema:c},null,8,["class","schema"]))]),_:1},16,["modelValue"]))}}),z={class:"epic-tree"},G={class:"search-box px-10px py-6px"},H={class:"epic-tree-main"},J={class:"text-center pt-42px text-gray-400"},Q=V({name:"ETree",__name:"tree",props:{options:{type:Array,default:()=>[]},hoverKey:{type:String,default:""},selectedKeys:{type:Array,default:()=>[]},draggable:{type:Boolean,default:!1}},emits:["update:selectedKeys","node-click"],setup(g,{emit:a}){const u=g,r=F();m("slots",r);const y=j.getComponent("input"),l=U(""),f=U([]),i=N({get(){return u.selectedKeys},set(e){a("update:selectedKeys",e)}}),n=N({get(){return d(u.options,l.value)},set(e){console.log(e)}});function d(e,s){const t=[];return e.forEach(o=>{var x;if((x=o.label)!=null&&x.includes(s))t.push(o);else if(o.children){const C=d(o.children,s);if(C.length>0){const B={...o};B.children=C,t.push(B)}}}),t}function c(e,s){i.value=[e],a("node-click",{id:e,record:s})}return m("expandedKeys",f),m("selectedKeys",i),m("treeProps",u),m("handleSelect",c),m("handleSelect",c),(e,s)=>(h(),_("div",z,[b("div",G,[k(v(y),{placeholder:"\u641C\u7D22\u8282\u70B9",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),value:l.value,"onUpdate:value":s[1]||(s[1]=t=>l.value=t)},{prefix:P(()=>[k(v(T),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),b("div",H,[b("ul",null,[k(w,{schemas:n.value,"onUpdate:schemas":s[2]||(s[2]=t=>n.value=t)},null,8,["schemas"])]),I(b("div",J,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u6570\u636E",512),[[R,!n.value.length]])])]))}});export{Q as X};
