import{c as v}from"./EHdjUluU.js";import{P as x}from"./DBFaznSh.js";import{e as f,g as i,l as h,o as u,w as _,q as y,x as C,u as c,y as k,z as B,c as b,i as S,n as P,t as q,K as d}from"#entry";var z=f({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,a=["horizontal","vertical"];function r(s){return a.includes(s)}const o=i(()=>r(e.orientation)?e.orientation:"horizontal"),n=i(()=>o.value==="vertical"?e.orientation:void 0),m=i(()=>e.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(s,p)=>(u(),h(c(x),C({as:s.as,"as-child":s.asChild,"data-orientation":o.value},m.value),{default:_(()=>[y(s.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),O=z,$=f({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return(a,r)=>(u(),h(O,k(B(e)),{default:_(()=>[y(a.$slots,"default")]),_:3},16))}}),A=$;const T=f({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(t){const e=t,a=i(()=>{const{class:r,...o}=e;return o});return(r,o)=>(u(),h(c(A),C(a.value,{class:c(v)("shrink-0 bg-border relative",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:_(()=>[e.label?(u(),b("span",{key:0,class:P(c(v)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},q(e.label),3)):S("",!0)]),_:1},16,["class"]))}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),j=t=>{const e=I(t);return e.charAt(0).toUpperCase()+e.slice(1)},L=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=({size:t,strokeWidth:e=2,absoluteStrokeWidth:a,color:r,iconNode:o,name:n,class:m,...s},{slots:p})=>d("svg",{...l,width:t||l.width,height:t||l.height,stroke:r||l.stroke,"stroke-width":a?Number(e)*24/Number(t):e,class:L("lucide",...n?[`lucide-${g(j(n))}-icon`,`lucide-${g(n)}`]:["lucide-icon"]),...s},[...o.map(w=>d(...w)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(t,e)=>(a,{slots:r})=>d(N,{...a,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=E("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);export{U as P,T as _,E as c};
