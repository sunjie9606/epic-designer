import{k as ce,I as Ce,l as ke,a5 as we,w as K,e as Y,d as V,g as C,R as _e,j as se,f as L,o as D,c as j,b as X,n as k,u as s,P as Se,q as M,v as Q,Q as Be,F as Z,s as de,B as Ie,r as R,N as xe,i as Ee,p as Me,D as Re,m as $e,W as Ae,E as Fe,y as De,ag as Le,a4 as Te}from"../app.9ec52d9f.js";import{ad as ze,n as te,ab as fe,ah as ne,ag as Pe,bH as Ne,Z as H,i as oe,d as J,bI as U,r as Oe,y as pe,_ as Ve,aQ as le,ax as Ye,a7 as G,a6 as ae,U as Xe,bJ as qe,t as me,b3 as re,a9 as We}from"./index-3519e374.9c71cf1c.js";import{P as je,K as He,A as Ue,L as Ke}from"./index-4593971e.c7b63386.js";import{S as Qe,l as Ze,C as Je}from"./focus-trap-7098bc90.00e6b267.js";import{g as Ge}from"./use-global-config-0cc90462.32da989a.js";const et=(...e)=>t=>{e.forEach(o=>{We(o)?o(t):o.value=t})},tt=(e,t,o)=>{let n={offsetX:0,offsetY:0};const l=a=>{const c=a.clientX,m=a.clientY,{offsetX:f,offsetY:p}=n,r=e.value.getBoundingClientRect(),g=r.left,_=r.top,T=r.width,z=r.height,P=document.documentElement.clientWidth,$=document.documentElement.clientHeight,A=-g+f,S=-_+p,B=P-g-T+f,N=$-_-z+p,I=F=>{const u=Math.min(Math.max(f+F.clientX-c,A),B),y=Math.min(Math.max(p+F.clientY-m,S),N);n={offsetX:u,offsetY:y},e.value.style.transform=`translate(${G(u)}, ${G(y)})`},v=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",v)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},d=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};ce(()=>{Ce(()=>{o.value?i():d()})}),ke(()=>{d()})},ot=()=>{},st=Array.isArray,nt=e=>typeof e=="function";let lt;function at(e,t=lt){t&&t.active&&t.effects.push(e)}const rt=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ve=e=>(e.w&w)>0,he=e=>(e.n&w)>0,ut=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=w},it=e=>{const{deps:t}=e;if(t.length){let o=0;for(let n=0;n<t.length;n++){const l=t[n];ve(l)&&!he(l)?l.delete(e):t[o++]=l,l.w&=~w,l.n&=~w}t.length=o}};let O=0,w=1;const ee=30;let b;class ct{constructor(t,o=null,n){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,at(this,n)}run(){if(!this.active)return this.fn();let t=b,o=q;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,q=!0,w=1<<++O,O<=ee?ut(this):ue(this),this.fn()}finally{O<=ee&&it(this),w=1<<--O,b=this.parent,q=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(ue(this),this.onStop&&this.onStop(),this.active=!1)}}function ue(e){const{deps:t}=e;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(e);t.length=0}}let q=!0;function dt(e,t){let o=!1;O<=ee?he(e)||(e.n|=w,o=!ve(e)):o=!e.has(b),o&&(e.add(b),b.deps.push(e))}function ft(e,t){const o=st(e)?e:[...e];for(const n of o)n.computed&&ie(n);for(const n of o)n.computed||ie(n)}function ie(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function pt(e){q&&b&&(e=W(e),dt(e.dep||(e.dep=rt())))}function mt(e,t){e=W(e);const o=e.dep;o&&ft(o)}class vt{constructor(t,o,n,l){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ct(t,()=>{this._dirty||(this._dirty=!0,mt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=n}get value(){const t=W(this);return pt(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ht(e,t,o=!1){let n,l;const i=nt(e);return i?(n=e,l=ot):(n=e.get,l=e.set),new vt(n,l,i||!l,o)}const yt=(e,t={})=>{we(e)||ze("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||te("popup"),n=ht(()=>o.bm("parent","hidden"));if(!fe||ne(document.body,n.value))return;let l=0,i=!1,d="0";const a=()=>{setTimeout(()=>{qe(document==null?void 0:document.body,n.value),i&&document&&(document.body.style.width=d)},200)};K(e,c=>{if(!c){a();return}i=!ne(document.body,n.value),i&&(d=document.body.style.width),l=Qe(o.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=Pe(document.body,"overflowY");l>0&&(m||f==="scroll")&&i&&(document.body.style.width=`calc(100% - ${l}px)`),Ne(document.body,n.value)}),Te(()=>a())},ye=e=>{if(!e)return{onClick:H,onMousedown:H,onMouseup:H};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:n=>{t=n.target===n.currentTarget},onMouseup:n=>{o=n.target===n.currentTarget}}},gt=oe({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:J([String,Array,Object])},zIndex:{type:J([String,Number])}}),bt={click:e=>e instanceof MouseEvent},Ct="overlay";var kt=Y({name:"ElOverlay",props:gt,emits:bt,setup(e,{slots:t,emit:o}){const n=te(Ct),l=c=>{o("click",c)},{onClick:i,onMousedown:d,onMouseup:a}=ye(e.customMaskEvent?void 0:l);return()=>e.mask?V("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:d,onMouseup:a},[C(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):_e("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const wt=kt,ge=Symbol("dialogInjectionKey"),be=oe({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:je},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),_t={close:()=>!0},St=["aria-label"],Bt=["id"],It=Y({name:"ElDialogContent"}),xt=Y({...It,props:be,emits:_t,setup(e){const t=e,{t:o}=He(),{Close:n}=Ke,{dialogRef:l,headerRef:i,bodyId:d,ns:a,style:c}=se(ge),{focusTrapRef:m}=se(Ze),f=et(m,l),p=L(()=>t.draggable);return tt(l,i,p),(r,g)=>(D(),j("div",{ref:s(f),class:k([s(a).b(),s(a).is("fullscreen",r.fullscreen),s(a).is("draggable",s(p)),s(a).is("align-center",r.alignCenter),{[s(a).m("center")]:r.center},r.customClass]),style:de(s(c)),tabindex:"-1"},[X("header",{ref_key:"headerRef",ref:i,class:k(s(a).e("header"))},[C(r.$slots,"header",{},()=>[X("span",{role:"heading",class:k(s(a).e("title"))},Se(r.title),3)]),r.showClose?(D(),j("button",{key:0,"aria-label":s(o)("el.dialog.close"),class:k(s(a).e("headerbtn")),type:"button",onClick:g[0]||(g[0]=_=>r.$emit("close"))},[V(s(Oe),{class:k(s(a).e("close"))},{default:M(()=>[(D(),Q(Be(r.closeIcon||s(n))))]),_:1},8,["class"])],10,St)):Z("v-if",!0)],2),X("div",{id:s(d),class:k(s(a).e("body"))},[C(r.$slots,"default")],10,Bt),r.$slots.footer?(D(),j("footer",{key:0,class:k(s(a).e("footer"))},[C(r.$slots,"footer")],2)):Z("v-if",!0)],6))}});var Et=me(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Mt=oe({...be,appendToBody:{type:Boolean,default:!1},beforeClose:{type:J(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Rt={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[pe]:e=>Ve(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},$t=(e,t)=>{const o=Ie().emit,{nextZIndex:n}=Ue();let l="";const i=le(),d=le(),a=R(!1),c=R(!1),m=R(!1),f=R(e.zIndex||n());let p,r;const g=Ge("namespace",Ye),_=L(()=>{const h={},E=`--${g.value}-dialog`;return e.fullscreen||(e.top&&(h[`${E}-margin-top`]=e.top),e.width&&(h[`${E}-width`]=G(e.width))),h}),T=L(()=>e.alignCenter?{display:"flex"}:{});function z(){o("opened")}function P(){o("closed"),o(pe,!1),e.destroyOnClose&&(m.value=!1)}function $(){o("close")}function A(){r==null||r(),p==null||p(),e.openDelay&&e.openDelay>0?{stop:p}=re(()=>I(),e.openDelay):I()}function S(){p==null||p(),r==null||r(),e.closeDelay&&e.closeDelay>0?{stop:r}=re(()=>v(),e.closeDelay):v()}function B(){function h(E){E||(c.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(h):S()}function N(){e.closeOnClickModal&&B()}function I(){fe&&(a.value=!0)}function v(){a.value=!1}function F(){o("openAutoFocus")}function u(){o("closeAutoFocus")}function y(h){var E;((E=h.detail)==null?void 0:E.focusReason)==="pointer"&&h.preventDefault()}e.lockScroll&&yt(a);function x(){e.closeOnPressEscape&&B()}return K(()=>e.modelValue,h=>{h?(c.value=!1,A(),m.value=!0,f.value=e.zIndex?f.value++:n(),xe(()=>{o("open"),t.value&&(t.value.scrollTop=0)})):a.value&&S()}),K(()=>e.fullscreen,h=>{t.value&&(h?(l=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=l)}),ce(()=>{e.modelValue&&(a.value=!0,m.value=!0,A())}),{afterEnter:z,afterLeave:P,beforeLeave:$,handleClose:B,onModalClick:N,close:S,doClose:v,onOpenAutoFocus:F,onCloseAutoFocus:u,onCloseRequested:x,onFocusoutPrevented:y,titleId:i,bodyId:d,closed:c,style:_,overlayDialogStyle:T,rendered:m,visible:a,zIndex:f}},At=["aria-label","aria-labelledby","aria-describedby"],Ft=Y({name:"ElDialog",inheritAttrs:!1}),Dt=Y({...Ft,props:Mt,emits:Rt,setup(e,{expose:t}){const o=e,n=Ee();ae({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!n.title)),ae({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!o.customClass));const l=te("dialog"),i=R(),d=R(),a=R(),{visible:c,titleId:m,bodyId:f,style:p,overlayDialogStyle:r,rendered:g,zIndex:_,afterEnter:T,afterLeave:z,beforeLeave:P,handleClose:$,onModalClick:A,onOpenAutoFocus:S,onCloseAutoFocus:B,onCloseRequested:N,onFocusoutPrevented:I}=$t(o,i);Me(ge,{dialogRef:i,headerRef:d,bodyId:f,ns:l,rendered:g,style:p});const v=ye(A),F=L(()=>o.draggable&&!o.fullscreen);return t({visible:c,dialogContentRef:a}),(u,y)=>(D(),Q(Le,{to:"body",disabled:!u.appendToBody},[V(De,{name:"dialog-fade",onAfterEnter:s(T),onAfterLeave:s(z),onBeforeLeave:s(P),persisted:""},{default:M(()=>[Re(V(s(wt),{"custom-mask-event":"",mask:u.modal,"overlay-class":u.modalClass,"z-index":s(_)},{default:M(()=>[X("div",{role:"dialog","aria-modal":"true","aria-label":u.title||void 0,"aria-labelledby":u.title?void 0:s(m),"aria-describedby":s(f),class:k(`${s(l).namespace.value}-overlay-dialog`),style:de(s(r)),onClick:y[0]||(y[0]=(...x)=>s(v).onClick&&s(v).onClick(...x)),onMousedown:y[1]||(y[1]=(...x)=>s(v).onMousedown&&s(v).onMousedown(...x)),onMouseup:y[2]||(y[2]=(...x)=>s(v).onMouseup&&s(v).onMouseup(...x))},[V(s(Je),{loop:"",trapped:s(c),"focus-start-el":"container",onFocusAfterTrapped:s(S),onFocusAfterReleased:s(B),onFocusoutPrevented:s(I),onReleaseRequested:s(N)},{default:M(()=>[s(g)?(D(),Q(Et,$e({key:0,ref_key:"dialogContentRef",ref:a},u.$attrs,{"custom-class":u.customClass,center:u.center,"align-center":u.alignCenter,"close-icon":u.closeIcon,draggable:s(F),fullscreen:u.fullscreen,"show-close":u.showClose,title:u.title,onClose:s($)}),Ae({header:M(()=>[u.$slots.title?C(u.$slots,"title",{key:1}):C(u.$slots,"header",{key:0,close:s($),titleId:s(m),titleClass:s(l).e("title")})]),default:M(()=>[C(u.$slots,"default")]),_:2},[u.$slots.footer?{name:"footer",fn:M(()=>[C(u.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):Z("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,At)]),_:3},8,["mask","overlay-class","z-index"]),[[Fe,s(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Lt=me(Dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Vt=Xe(Lt);export{$t as $,yt as C,wt as D,gt as E,Rt as F,Mt as I,Vt as W,bt as a,tt as b,ye as c,ge as k};
