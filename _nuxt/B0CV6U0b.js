import{c as i}from"./61Ys1BB_.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),n=[{key:"guisos",label:"Guisos"},{key:"sides",label:"Guarniciones"},{key:"bebidas",label:"Bebidas"}],s=["llevar","aqui","domicilio"],d={llevar:"Llevar",aqui:"Aquí",domicilio:"Domicilio"},c=[{label:"Todas",value:"all"},{label:"Aquí",value:"aqui"},{label:"Llevar",value:"llevar"},{label:"Domicilio",value:"domicilio"}],b=()=>new Date().toISOString().slice(0,10);function p(e){return new Date(e.createdAt).toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"})}function g(e){return e==="aqui"?"border-t-blue-500":e==="domicilio"?"border-t-purple-500":"border-t-orange-500"}function m(e){return e==="aqui"?"bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200/40":e==="domicilio"?"bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400 border-purple-200/40":"bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400 border-orange-200/40"}function f(e,r,t){return(t[r]??[]).some(a=>e.cart&&e.cart[a]>0)}function k(e,r,t){return(t[r]??[]).filter(a=>e.cart&&e.cart[a]>0).map(a=>({name:a,qty:e.cart[a]}))}export{c as F,l as M,u as S,s as a,d as b,m as c,k as d,n as g,f as h,g as m,p as o,b as t};
