import{c as m}from"./p2ade_5I.js";import{P as w}from"./B02dSoAI.js";import{e as h,j as i,n as f,o as u,w as _,A as g,C as x,u as c,D as B,E as b,c as S,q as P,s as q,t as A,N as d}from"#entry";var O=h({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,a=["horizontal","vertical"];function r(s){return a.includes(s)}const o=i(()=>r(e.orientation)?e.orientation:"horizontal"),n=i(()=>o.value==="vertical"?e.orientation:void 0),v=i(()=>e.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(s,p)=>(u(),f(c(w),x({as:s.as,"as-child":s.asChild,"data-orientation":o.value},v.value),{default:_(()=>[g(s.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),$=O,j=h({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return(a,r)=>(u(),f($,B(b(e)),{default:_(()=>[g(a.$slots,"default")]),_:3},16))}}),z=j;const D=h({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(t){const e=t,a=i(()=>{const{class:r,...o}=e;return o});return(r,o)=>(u(),f(c(z),x(a.value,{class:c(m)("shrink-0 bg-border relative",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:_(()=>[e.label?(u(),S("span",{key:0,class:q(c(m)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},A(e.label),3)):P("",!0)]),_:1},16,["class"]))}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),I=t=>{const e=M(t);return e.charAt(0).toUpperCase()+e.slice(1)},N=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=({size:t,strokeWidth:e=2,absoluteStrokeWidth:a,color:r,iconNode:o,name:n,class:v,...s},{slots:p})=>d("svg",{...l,width:t||l.width,height:t||l.height,stroke:r||l.stroke,"stroke-width":a?Number(e)*24/Number(t):e,class:N("lucide",...n?[`lucide-${y(I(n))}-icon`,`lucide-${y(n)}`]:["lucide-icon"]),...s},[...o.map(C=>d(...C)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>(a,{slots:r})=>d(T,{...a,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=k("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=k("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);export{R as P,U as T,D as _,k as c};
