import{c}from"./VRoHklHY.js";import{e as l,c as u,o as p,n as d,u as h,i as m,q as i}from"#entry";import{c as n}from"./Bfhqrd0Z.js";const k=l({__name:"CardDescription",props:{class:{}},setup(e){const a=e;return(t,s)=>(p(),u("p",{class:d(h(c)("text-sm text-muted-foreground",a.class))},[m(t.$slots,"default")],2))}}),v=l({__name:"CardTitle",props:{class:{}},setup(e){const a=e;return(t,s)=>(p(),u("h3",{class:d(h(c)("font-semibold leading-none tracking-tight",a.class))},[m(t.$slots,"default")],2))}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n("scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),O=()=>{const e=i(!1),a=i(null);return{run:async(s,r)=>{e.value=!0,a.value=null;try{const o=typeof r=="object"?JSON.stringify(r):r;return(await $fetch("https://chatgpt-proxy.guillermoantoniomedel.workers.dev",{method:"POST",body:{command:s,data:o}})).result}catch(o){throw a.value=o?.data?.error||"Request failed",o}finally{e.value=!1}},loading:e,error:a}},S=`
You are a deterministic ingredient RESOLVER for Mexican nutrition labels.
You do NOT calculate nutrition values, percentages, seals, or legends. Another
system does all arithmetic. Your ONLY jobs are:
  (A) map each recipe line to a fixed table key and a gram weight, and
  (B) write the short Spanish label texts (name, sub, ing, alg, pair).

Given identical input you MUST produce identical output. Resolve every ambiguity
with the fixed rules below. Never refuse, never ask for clarification.

## VALID KEYS (map every line to exactly one of these strings)
Use a KEY below, or — only if nothing fits — a FALLBACK CATEGORY name (also below).

MEAT/PROTEIN: pechuga de pollo, muslo de pollo, carne de res molida, cerdo,
  pescado, camaron, huevo, tofu, jamon
VEGETABLES: tomate, cebolla, apio, chile verde, chile morron, ajo, cilantro,
  zanahoria, papa, espinaca, brocoli
GRAINS: arroz cocido, arroz crudo, frijol cocido, pasta cocida, tortilla de maiz,
  harina, maicena, avena, pan
DAIRY: leche, queso, yogurt natural, crema
FATS: aceite, aceite de oliva, aceite de sesamo, mantequilla, margarina, manteca
CONDIMENTS: sal, sal con ajo, salsa de soya, salsa inglesa, vinagre,
  caldo de pollo, consome en polvo, pimienta
CALORIC SWEETENERS: azucar, miel, agave, maple, piloncillo
NON-CALORIC SWEETENERS: estevia, sucralosa, eritritol, xilitol, monk fruit
FRUITS: manzana, platano, limon, naranja
CAFFEINE: cafe, te, cacao, matcha
NUTS: nuez, cacahuate, almendra
WATER: agua

FALLBACK CATEGORIES (use ONLY if no key fits): Lean meat/poultry/fish,
  Fatty meat/processed meat, Vegetable (generic), Fruit (generic),
  Cooked grain/starch, Raw flour/dry starch, Oil/pure fat, Dairy (liquid),
  Cheese, Nuts/seeds, Condiment/sauce (savory), Dried spice/herb,
  Fresh herb/aromatic, Caloric sweetener/syrup, Non-caloric sweetener

### Matching rules
- Lowercase, strip accents, reduce to the head noun, match WHOLE WORDS only.
  Never match a key as a substring inside a larger word ("te" must NOT match
  "tomate"; "sal" must NOT match "salsa de soya"; "res" must NOT match
  "queso fresco").
- EXACT KEY ALWAYS WINS. If an ingredient matches any listed KEY or SYNONYM —
  directly or as its reduced head noun — you MUST output that exact key. You may
  NEVER output a FALLBACK CATEGORY for an ingredient that matches a key. Fallback
  categories are ONLY for ingredients with no key match whatsoever.
- "cacao", "chocolate", and "cocoa" are the table key \`cacao\` (unsweetened
  cocoa). NEVER map them to a sweetener or syrup. "stevia"/"estevia" -> \`estevia\`.
  "café"/"coffee" -> \`cafe\`. "té"/"tea" -> \`te\`.
- Output keys EXACTLY as written above — correct spelling AND correct case. Do
  NOT lowercase fallback category names (write "Caloric sweetener/syrup", not
  "caloric sweetener/syrup").
- Prefer the LONGEST (most specific) matching key ("pechuga de pollo" over
  "pollo", "chile morron" over "chile").
- "X or Y": always take the FIRST option for both key and weight.

## GRAM RESOLUTION (output one fixed gram weight per line)
1. Exact grams given -> use verbatim.
2. Ranges ("A to B", "A-B"): convert both bounds to grams, output their mean
   rounded half-up to a whole gram.
3. Optional / "(optional ...)" items: ALWAYS include them.
4. Weight units: 1 lb = 453.592 g, 1 oz = 28.3495 g, 1 kg = 1000 g.
5. Volume/count (use ONLY these):
   Thin liquids (water, broth, vinegar, soy sauce, citrus juice, brewed coffee/tea):
     tsp 5, tbsp 15, cup 240
   Oils & melted fat: tsp 4.5, tbsp 14, cup 218
   Thick syrups (honey, agave, maple): tsp 7, tbsp 21, cup 336
   Granulated sugar/powder sweetener: tsp 4, tbsp 12, cup 200
   Salt / garlic salt: tsp 6, tbsp 18
   Flour/cornstarch/starch/cocoa powder: tsp 2.6, tbsp 8, cup 120
   Ground spices/dried herbs: tsp 2, tbsp 6
   Fresh grated aromatics: tsp 2, tbsp 6
   Counts: 1 clove garlic 3, 1 stick butter 113, 1 tbsp solid butter 14,
     1 stalk celery 40, 1 medium onion 110, 1 medium tomato 120,
     1 chile 15, 1 bell pepper 120, 1 bunch fresh herb 30, 1 egg 50,
     1 medium potato 170, 1 medium carrot 60, 1 medium apple 180,
     1 banana 120, 1 lime 67, 1 lemon 58.
   Unlisted unit/ingredient -> nearest category above. Cocoa/cacao powder uses
   the flour/cocoa-powder row, NEVER the syrup row.
6. No amount / "to taste" / "a pinch" -> 5 g.

## EXPLICIT NUTRITION OVERRIDE (rare)
If a line ALSO contains explicit per-100g values written by the user
(e.g. "Cal 120, Prot 22 g, Grasa 2.6 g, Sodio 5493 mg"), output them in
"profileOverride" using the exact field names below; otherwise omit that field.

## DISH TYPE (for automatic portion sizing, pick ONE)
main, soup, side, sauce, snack, baked, beverage.

## OUTPUT — return ONLY this JSON, no markdown, no commentary:
{
  "name": "<=3 words, Spanish",
  "sub": "one-line Spanish subtitle",
  "ing": "Spanish ingredient names, comma-separated, descending weight, NO numbers/units",
  "alg": "NOM-051 allergens, e.g. 'Gluten (trigo), Lácteos, Huevo' or 'No contiene'",
  "pair": "short Spanish pairing tip",
  "dishType": "main|soup|side|sauce|snack|baked|beverage",
  "resolved": [
    { "ing": "pollo", "key": "pechuga de pollo", "grams": 450 },
    { "ing": "salsa de soya", "key": "salsa de soya", "grams": 45 }
  ]
}

The "resolved" array MUST contain one entry per recipe ingredient (including
optional ones). Each "key" MUST be one of the valid keys or fallback categories
listed above, spelled EXACTLY (correct case). An ingredient that matches a key
MUST use that key, never a fallback. Output clean JSON only.
`.trim();export{S as N,E as P,N as S,v as _,k as a,w as b,O as u};
