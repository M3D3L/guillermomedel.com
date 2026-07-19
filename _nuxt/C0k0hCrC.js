import{c as m}from"./DmrNP6qg.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=m("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),g={llevar:"Para llevar",aqui:"Para aquí",domicilio:"A domicilio"},u={greeting:`¡Hola! ¡Buen día! ☀️🌊
Aquí Breezy 🦭 compartiéndote el *Menú del Día* de *Breezy Market* 🌵🌮`,price:{one:"$120 MXN",two:"$180 MXN"},cta:"🛒 *¡HAZ TU PEDIDO AQUÍ!*",orderUrl:"https://breezy-meals.com/menu",cutoff:"⏰ _Ordena antes de las 4:00 PM para recibir tu comida calientita._",footer:"🌊 ¡Buen provecho desde San Carlos! 🦭"};function v(){function A({orderNumber:t,cart:n,mode:e,guisos:o,sides:i,bebidas:s,note:D,fulfillDate:f}){const a=[`🍽️ *Orden #${t}*`,`Tipo: ${g[e]}`,""],h=o.filter(r=>n[r]>0),d=i.filter(r=>n[r]>0),l=s.filter(r=>n[r]>0);h.length&&(a.push("🍖 *Guisos*"),h.forEach(r=>a.push(`• ${n[r]}× ${r}`))),d.length&&(a.push("","🥗 *Guarniciones*"),d.forEach(r=>a.push(`• ${n[r]}× ${r}`))),l.length&&(a.push("","🥤 *Bebidas*"),l.forEach(r=>a.push(`• ${n[r]}× ${r}`)));const $=D?.trim();return $&&a.push("",`📝 *Nota:* ${$}`),f&&a.push("",`📅 *Fecha de entrega:* ${f}`),a.join(`
`)}function E({guisos:t,sides:n,bebidas:e,date:o}){const i=[];return i.push(u.greeting,"","━━━━━━━━━━━━━━━━━━━━"),o&&i.push(`📅 *${o}*`,""),t.length&&(i.push("🍖 *GUISOS DEL DÍA*"),t.forEach(s=>i.push(`   • ${s}`)),i.push("")),n.length&&(i.push("🥗 *GUARNICIONES*"),i.push("_Elige hasta 2_"),n.forEach(s=>i.push(`   • ${s}`)),i.push("")),e.length&&(i.push("🥤 *BEBIDAS*"),e.forEach(s=>i.push(`   • ${s}`)),i.push("")),i.push("━━━━━━━━━━━━━━━━━━━━","","💰 *PRECIOS*","","🍽️ 1 guiso + 2 guarniciones + bebida",`*${u.price.one}*`,"","🍽️🍽️ 2 guisos + 2 guarniciones + bebida",`*${u.price.two}*`,"","━━━━━━━━━━━━━━━━━━━━","",u.cta,u.orderUrl,"",u.cutoff,"",u.footer),i.join(`
`)}function w(t,n){return n?`✅ ${t} vuelve a estar disponible`:`🚫 Se agotó: ${t}`}function O(t,n,e){let o=`✅ *Orden #${t} lista* (${g[n]})`;return n==="domicilio"&&e&&(o+=`

🚀 *DATOS PARA EL REPARTIDOR:*`,e.name.trim()&&(o+=`
👤 *Cliente:* ${e.name.trim()}`),e.phone.trim()&&(o+=`
📱 *WhatsApp:* ${e.phone.trim()}`),e.address.trim()&&(o+=`
🏠 *Dirección:* ${e.address.trim()}`)),o}function p(t,n){const e=encodeURIComponent(t),o=n?.replace(/\D/g,"");return o?`https://wa.me/${o}?text=${e}`:`https://api.whatsapp.com/send?text=${e}`}function c(){if(typeof navigator>"u")return!1;const t=navigator.userAgent||"";return!!(/iP(hone|ad|od)/.test(t)||/Mac/.test(t)&&(navigator.maxTouchPoints||0)>1)}function M(t,n){if(typeof window>"u")return;const e=p(t,n);if(c()){window.location.href=e;return}window.open(e,"_blank","noopener")||(window.location.href=e)}return{formatOrder:A,formatMenu:E,formatSoldOut:w,formatReady:O,waLink:p,isAppleDevice:c,openWhatsApp:M}}export{g as M,P as S,y as a,v as u};
