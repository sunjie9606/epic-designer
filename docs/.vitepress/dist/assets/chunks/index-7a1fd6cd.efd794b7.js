import{e as M,r as x,f as O,w as Z,o as p,c as r,d as y,q as S,M as F,Z as D,u as v,j as L,h as $,v as B,b as c,n as R,O as K,P as A,D as q,E as P,a0 as z,F as X,N as Y}from"../app.9ec52d9f.js";import{F as w,b as T,o as G}from"./index-3519e374.9c71cf1c.js";import{p as U}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.40cc991d.js";import{R as H}from"./vuedraggable.umd-6a5b6da9.78f40607.js";import{X as J}from"./tree.vue_vue_type_script_setup_true_lang-f93f11d5.964578b5.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const Q={class:"event-info"},W=["title"],ee={class:"event-btn"},te={class:"epic-action-editor-main"},le={class:"epic-editor-item"},ae={class:"w-36px text-lg"},ne={class:"flex-1"},oe={key:0},ie={key:1},ce={key:2},ue={class:"opr-box"},de=["onClick"],se=["onClick"],me=M({__name:"EActionEditorItem",props:{itemEvents:{type:Array,default:()=>[]},allEvents:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>[]},events:{type:Object,default:()=>({})}},emits:["add","edit","update:modelValue"],setup(E,{emit:h}){const m=E,k=L("pageSchema");function f(u){h("add",u)}function g(u){return T(k.schemas,u).label}function b(u,i){var e;const n=s(i);n[i]=m.events[i].filter((C,V)=>u!==V),(e=n[i])!=null&&e.length||delete n[i],h("update:modelValue",n)}function d(u,i,e){h("edit",u,i,e)}function s(u){const i={};return m.allEvents.forEach(e=>{if(!m.events[e.type].length||e.type===u)return!1;i[e.type]=m.events[e.type]}),i}return(u,i)=>(p(!0),r(F,null,D(E.itemEvents,e=>(p(),r("div",{key:e.type,class:"event-item"},[c("div",Q,[c("div",{class:"event-label",title:e.describe},A(e.describe),9,W),c("div",ee,[y(v(U),{name:"icon-tianjia1",onClick:n=>f(e.type)},null,8,["onClick"])])]),c("div",te,[y(v(H),{modelValue:m.events[e.type],"onUpdate:modelValue":n=>m.events[e.type]=n,"item-key":"id","component-data":{type:"transition-group"},group:"option-list",handle:".handle",animation:200},{item:S(({element:n,index:C})=>[c("div",le,[c("div",ae,[y(v(U),{class:"mr-2 text-lg cursor-move handle",name:"icon-tuozhuai"})]),c("div",ne,[n.type==="component"?(p(),r("div",oe,A(g(n.componentId)),1)):n.type==="public"?(p(),r("div",ie," \u516C\u5171\u51FD\u6570 ")):n.type==="custom"?(p(),r("div",ce," \u81EA\u5B9A\u4E49\u51FD\u6570 ")):X("",!0),K(" "+A(n.methodName),1)]),c("div",ue,[c("div",{class:"edit-btn",onClick:V=>d(C,e.type,n)},[y(v(U),{name:"icon-edit"})],8,de),c("div",{class:"del-btn",onClick:V=>b(C,e.type)},[y(v(U),{name:"icon-shanchu"})],8,se)])])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))}}),pe={class:"h-full flex flex-col"},ve=c("div",{class:"pb-2"}," \u81EA\u5B9A\u4E49\u51FD\u6570\u7F16\u8F91 ",-1),re=M({__name:"EScriptEdit",setup(E){const h=w.getComponent("monacoEditor"),m={theme:"vs-light",selectOnLineNumbers:!0,minimap:{enabled:!1}},k=x(null),f=L("pageSchema");return(g,b)=>(p(),r("div",pe,[ve,y(v(h),{ref_key:"monacoEditorRef",ref:k,modelValue:v(f).script,"onUpdate:modelValue":b[0]||(b[0]=d=>v(f).script=d),class:"editor flex-1",config:m,language:"javascript"},null,8,["modelValue"])]))}}),fe={class:"rounded bg-white epic-modal-action-main"},ye={class:"epic-modal-left-panel h-full flex flex-col"},he={class:"flex-1"},ge={class:"h-360px overflow-auto"},be={class:"epic-action-select h-240px flex flex-col"},Ie=c("div",{class:"mb-2"},"\u52A8\u4F5C\u9009\u62E9",-1),xe={class:"flex-1 overflow-auto"},ke=["onClick"],Ce={class:"text-center pt-42px text-gray-400"},Ve={class:"epic-modal-right-panel"},Ee={key:1,class:"text-center pt-42px text-gray-400"},Ne=M({__name:"EActionModal",emits:["add","edit"],setup(E,{expose:h,emit:m}){const k=w.getComponent("modal"),f=x(!0),g=L("pageSchema"),b=L("pageManager",{}),d=x(!1),s=x([]),u=x(null),i=O(()=>{var t;return e.actionItem.type==="component"?u.value?(t=w.getComponentConfings()[u.value.type].config.action)==null?void 0:t.map(a=>({label:a.describe,value:a.type})):[]:e.actionItem.type==="custom"?Object.entries(b.funcs.value).filter(([a,N])=>typeof N=="function").map(([a])=>({label:a,value:a})):e.actionItem.type==="public"?Object.entries(w.publicMethods).map(([a])=>({label:a,value:a})):[]}),e=$({actionItem:{type:"public",methodName:"test",componentId:null}});function n(){var t;d.value=!0,f.value=!0,e.actionItem.type="public",e.actionItem.componentId=null,(t=i.value)!=null&&t.length&&l(i.value[0].value)}function C(t){if(d.value=!0,f.value=!1,u.value=null,t.componentId){const a=T(g.schemas,t.componentId);u.value=a,s.value=[t.componentId]}Y(()=>{e.actionItem.componentId=t.componentId,e.actionItem.methodName=t.methodName,e.actionItem.type=t.type})}function V(){if(!e.actionItem.methodName){alert("\u8BF7\u5148\u9009\u62E9\u52A8\u4F5C\u65B9\u6CD5");return}m(f.value?"add":"edit",G(z(e.actionItem))),_()}function _(){d.value=!1,s.value=[]}function j(t){var a;e.actionItem.componentId=null,e.actionItem.type=t,u.value=null,e.actionItem.methodName=null,s.value=[],(a=i.value)!=null&&a.length&&l(i.value[0].value)}function o(t){var a;e.actionItem.componentId=t.id,e.actionItem.type="component",e.actionItem.methodName=null,u.value=t.record,(a=i.value)!=null&&a.length&&l(i.value[0].value)}function l(t){e.actionItem.methodName=t}return h({handleOpen:n,handleOpenEdit:C}),(t,a)=>(p(),B(v(k),{modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=N=>d.value=N),class:"w-1100px",width:"1100px",onClose:_,onOk:V,title:"\u52A8\u4F5C\u914D\u7F6E"},{default:S(()=>{var N;return[c("div",fe,[c("div",ye,[c("div",he,[c("div",{class:R(["fun-btn",{checked:e.actionItem.type==="public"}]),onClick:a[0]||(a[0]=I=>j("public"))}," \u516C\u5171\u51FD\u6570 ",2),c("div",{class:R(["fun-btn",{checked:e.actionItem.type==="custom"}]),onClick:a[1]||(a[1]=I=>j("custom"))}," \u81EA\u5B9A\u4E49\u51FD\u6570 ",2),K(" \u7EC4\u4EF6 "),c("div",ge,[y(v(J),{selectedKeys:s.value,"onUpdate:selectedKeys":a[2]||(a[2]=I=>s.value=I),options:v(g).schemas,onNodeClick:o},null,8,["selectedKeys","options"])])]),c("div",be,[Ie,c("div",xe,[(p(!0),r(F,null,D(i.value,I=>(p(),r("div",{class:R([{checked:I.value===e.actionItem.methodName},"action-item"]),onClick:we=>l(I.value),key:I.value},[c("span",null,A(I.label),1)],10,ke))),128)),q(c("div",Ce,"\u5F53\u524D\u7EC4\u4EF6\u6682\u65E0\u52A8\u4F5C",512),[[P,!((N=i.value)!=null&&N.length)]])])])]),c("div",Ve,[e.actionItem.type==="custom"?(p(),B(re,{key:0})):(p(),r("div",Ee,"\u6682\u65E0\u914D\u7F6E"))])])]}),_:1},8,["modelValue"]))}}),Fe=M({__name:"index",props:{eventList:{type:Array,default:()=>[]},modelValue:{type:Object}},emits:["update:modelValue"],setup(E,{emit:h}){const m=E,k=w.getComponent("Collapse"),f=w.getComponent("CollapseItem"),g=x(null);let b=0;const d=O({get(){return m.modelValue},set(o){h("update:modelValue",o)}}),s=x(["\u7EC4\u4EF6\u4E8B\u4EF6"]),u=O(()=>m.eventList.filter(o=>o.events.length));Z(()=>u.value,o=>{o.length&&(s.value=o[0].title)},{immediate:!0});const i=O(()=>m.eventList.map(o=>o.events).flat()),e=x({});i.value.forEach(o=>{e.value[o.type]=O({get(){var t;var l;return(t=(l=d.value)==null?void 0:l[o.type])!=null?t:[]},set(l){l&&l.length?d.value[o.type]=l.map(t=>z(t)):delete d.value[o.type]}})});let n="";function C(o){var l;(l=g.value)==null||l.handleOpen(),n=o}function V(o,l,t){var a;(a=g.value)==null||a.handleOpenEdit(t),b=o,n=l}function _(o){var l;e.value[n][b]=o,d.value[n]=[...(l=e.value[n])!=null?l:[]]}function j(o){var l,t;if(!d.value){d.value={[n]:[...(l=e.value[n])!=null?l:[],o]};return}d.value[n]=[...(t=e.value[n])!=null?t:[],o]}return(o,l)=>(p(),r(F,null,[y(v(k),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value=t),activeEey:s.value,"onUpdate:activeEey":l[2]||(l[2]=t=>s.value=t),"expanded-names":s.value,"onUpdate:expandedNames":l[3]||(l[3]=t=>s.value=t)},{default:S(()=>[(p(!0),r(F,null,D(u.value,t=>(p(),B(v(f),{key:t.title,title:t.title,header:t.title,name:t.title},{default:S(()=>[y(me,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=a=>d.value=a),"item-events":t.events,"all-events":i.value,events:e.value,onAdd:C,onEdit:V},null,8,["modelValue","item-events","all-events","events"])]),_:2},1032,["title","header","name"]))),128))]),_:1},8,["modelValue","activeEey","expanded-names"]),y(Ne,{ref_key:"EActionModalRef",ref:g,onAdd:j,onEdit:_},null,512)],64))}});export{Fe as default};
