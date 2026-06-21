import{_ as M}from"./C0GLtFMv.js";import{T as j,_ as N,a as T,b as $,c as R,i as A,g as P,d as V,e as q,U as I,B as O,u as W}from"./BzK3BkB5.js";import{_ as F,b as U}from"./BKKxI8bR.js";import{e as C,g as E,q as D,k as Y,c as d,o as c,F as B,r as L,f as G,w,b as a,u as s,a as e,d as k,t as r,h as S,s as H,v as Z}from"#entry";import{_ as J}from"./DlAUqK2U.js";import{u as K}from"./B_HFf86S.js";import"./D233EVwf.js";import"./Bfhqrd0Z.js";import"./BHwn9ywt.js";import"./DncX4IAT.js";import"./DGn6OB_D.js";import"./sYYMwmtL.js";import"./BRT0Dmlv.js";import"./ilG2dvav.js";const Q={class:"label-grid flex flex-wrap gap-3 justify-center"},X={class:"justify-center flex gap-0.5 bg-gray-100 p-1 left-8 absolute top-7 rounded-full"},tt={class:"text-[4.5px] leading-tight text-black m-0 font-bold"},et={class:"w-full flex flex-col items-center mt-1"},st={class:"flex justify-between items-center w-full px-2 h-5 mb-0.5"},ot={key:0,class:"flex-shrink-0 absolute top-4 right-9 mt-1 mr-1"},at={class:"w-12 mx-auto mt-2"},nt={class:"flex items-center gap-1 justify-center w-full px-2"},lt={class:"text-[5px] text-black mt-0.5 font-bold italic leading-none mx-0"},it={class:"w-full flex flex-col gap-0.5 px-2 my-auto"},rt={class:"text-[4px] leading-[1.2] text-black m-0 line-clamp-2 px-1 font-semibold"},ct={key:0,class:"flex flex-col gap-1 mt-0.5 px-1"},dt={class:"text-[4px] leading-none m-0"},pt={class:"text-[5.5px] mt-1 font-black max-w-20 mx-auto leading-none bg-black text-white px-1.5 py-0.5 rounded-sm"},mt={class:"flex flex-col space-y-0! justify-between items-center text-[4.5px] w-full px-4 text-black font-bold"},ft={class:"flex flex-col justify-center gap-0 text-semibold text-[6px] w-full px-1"},ut={class:"-mt-4"},xt=C({__name:"RoundLabel",props:{labelData:{}},setup(y){const _=y,g=E(),x=D({}),p=Y(()=>_.labelData);function h(l){const o=l===1?"Sello":"Sellos";return{lines:[String(l),o],ys:[20,29]}}function m(l){g.push(`/label-generator/${l.id}`)}function n(l){const o=x.value[l.id];if(!o)return;const b=(o.$el??o).outerHTML,i=document.createElement("iframe");i.style.cssText="position:fixed;width:0;height:0;border:0;opacity:0;",document.body.appendChild(i);const u=i.contentDocument;u.open(),u.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Barlow:wght@400;600&display=swap" rel="stylesheet" />
        <style>
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
          }

          @page {
            margin: 0;
            size: 2in 2in;
          }

          .label-card {
            font-family: 'Barlow', Arial, sans-serif;
            width: 100% !important;
            height: 100% !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 50% !important;
          }

          .label-card .font-black { font-family: 'Oswald', Impact, sans-serif; }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        </style>
      </head>
      <body>${b}</body>
    </html>
  `),u.close(),i.onload=()=>{setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print(),setTimeout(()=>document.body.removeChild(i),1e3)},800)}}return(l,o)=>{const v=N,b=T,i=R,u=q;return c(),d("div",Q,[(c(!0),d(B,null,L(s(p),t=>(c(),G(u,{key:t.id,onEdit:f=>m(t),onPrint:f=>n(t)},{default:w(()=>[a(s(F),{ref_for:!0,ref:f=>{f&&(s(x)[t.id]=f)},id:t.id,class:"label-card bg-white relative text-black items-center rounded-full aspect-square overflow-hidden p-3 text-center border-2 border-black",style:{width:"192px",height:"192px"}},{default:w(()=>[e("div",X,[a(s(j),{class:"w-1.5 h-1.5 text-amber-700 flex-shrink-0"}),e("p",tt,[o[0]||(o[0]=e("strong",{class:"font-black"},"Alérgenos:",-1)),k(" "+r(t.alg||"Ninguno"),1)])]),e("div",et,[e("div",st,[t.seals&&t.seals.length>0?(c(),d("div",ot,[a(v,{width:"32",height:"32",seal:h(t.seals.length)},null,8,["seal"])])):S("",!0)]),e("div",at,[a(b,{src:"/icons/tetakawi.svg"})]),o[1]||(o[1]=e("div",{class:"font-black text-[10px] tracking-[0.12em] leading-none mb-0.5 text-black"}," BREEZY MEALS ",-1)),e("div",nt,[a(s($),{class:"flex-1 max-w-[8px] bg-black"}),e("span",{class:"font-black tracking-[0.05em] leading-tight text-center text-black text-[11px]",style:H({fontSize:t.nameSize?`calc(${t.nameSize} * 0.85)`:"11px"})},r(t.name),5),a(s($),{class:"flex-1 max-w-[8px] bg-black"})]),e("p",lt,r(t.sub),1)]),e("div",it,[e("p",rt,[o[2]||(o[2]=e("strong",{class:"font-black"},"Ing:",-1)),k(" "+r(t.ing),1)]),t.leyendas&&t.leyendas.length>0?(c(),d("div",ct,[(c(!0),d(B,null,L(t.leyendas,(f,z)=>(c(),d("div",{key:z,class:"bg-black border border-white text-white px-1 py-0.5 text-center uppercase tracking-wide font-black",style:{"box-shadow":"0 0 0 1px black"}},[e("p",dt,r(f.text),1)]))),128))])):S("",!0)]),e("div",pt," Cont. Neto: "+r(t.total_size)+" g ",1),e("div",mt,[a(i,{value:s(A)(t.sku??t.id),width:.75,height:10},null,8,["value"]),e("span",ft,[e("span",null,"Cad: "+r(t?.expiration||s(P)(t)),1)]),e("span",ut,"Lote: "+r(s(V)(t)),1)])]),_:2},1032,["id"])]),_:2},1032,["onEdit","onPrint"]))),128))])}}}),_t=J(xt,[["__scopeId","data-v-7dff41fc"]]),gt={class:"no-print text-center mb-5"},Mt=C({__name:"labels",setup(y){const _=E(),{fetchCollection:g}=K(),{transformRecord:x}=W(),p=D([]),h=async()=>{try{const m=await g("labels",1,200,"","-created","",null,!0);p.value=(m?.items??[]).map(x)}catch(m){console.error("Error fetching labels:",m),p.value=[]}};return Z(()=>{h()}),(m,n)=>{const l=M;return c(),d("section",null,[a(l,{follow:!1}),e("div",gt,[n[2]||(n[2]=e("h1",{class:"font-black text-lg tracking-[0.2em] uppercase mb-0.5 mt-8"}," Breezy Meals ",-1)),n[3]||(n[3]=e("p",{class:"text-neutral-500 text-[8px] tracking-widest uppercase"}," Nutritional Labels ",-1)),a(s(U),{variant:"outline",size:"sm",class:"mt-4",onClick:n[0]||(n[0]=o=>s(_).push("/label-generator"))},{default:w(()=>[a(s(I),{class:"w-4 h-4 mr-2"}),n[1]||(n[1]=k(" Generar nueva etiqueta ",-1))]),_:1})]),a(_t,{labelData:s(p),class:"mb-4"},null,8,["labelData"]),a(O,{labelData:s(p)},null,8,["labelData"])])}}});export{Mt as default};
