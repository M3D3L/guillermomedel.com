import{c as n}from"./vV6c201n.js";import{u}from"./C35Qikj1.js";import{i as l}from"#entry";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);function d(){const{fetchCollection:t}=u(),e=l(null),c=l(!0),r=l(!1);async function o(){c.value=!0,r.value=!1;try{const a=await t("menu",1,1,"","-created",null,null,!0);e.value=a.items[0]??null}catch{r.value=!0,e.value=null}finally{c.value=!1}}return{record:e,pending:c,loadError:r,load:o}}export{y as B,d as u};
