import{c}from"./BKKxI8bR.js";import{e as l,c as d,o as p,n as u,u as m,i as h,q as i}from"#entry";import{c as n}from"./Bfhqrd0Z.js";const S=l({__name:"CardDescription",props:{class:{}},setup(e){const a=e;return(o,t)=>(p(),d("p",{class:u(m(c)("text-sm text-muted-foreground",a.class))},[h(o.$slots,"default")],2))}}),N=l({__name:"CardTitle",props:{class:{}},setup(e){const a=e;return(o,t)=>(p(),d("h3",{class:u(m(c)("font-semibold leading-none tracking-tight",a.class))},[h(o.$slots,"default")],2))}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=n("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),O=()=>{const e=i(!1),a=i(null);return{run:async(t,r)=>{e.value=!0,a.value=null;try{const s=typeof r=="object"?JSON.stringify(r):r;return(await $fetch("https://chatgpt-proxy.guillermoantoniomedel.workers.dev",{method:"POST",body:{command:t,data:s}})).result}catch(s){throw a.value=s?.data?.error||"Request failed",s}finally{e.value=!1}},loading:e,error:a}},v=`
You are an ingredient resolver for a Mexican food labeling system (NOM-051).

Your ONLY job is to parse a freeform recipe and map each ingredient line to:
  1. A canonical table KEY (from the list below)
  2. A gram weight (resolved from whatever unit was given)
  3. A clean Spanish display name

You do NOT calculate nutrition. You do NOT compute seals or legends. You do NOT
output rows, VDR percentages, or any nutritional values. All of that is handled
by the frontend engine after you return.

## Output schema (return ONLY valid JSON, no markdown, no explanation)

{
  "name": "Short food title in Spanish, max 3 words",
  "sub": "One-line descriptive subtitle in Spanish",
  "ing": "Ingredient display names in Spanish, comma-separated, ordered by descending gram weight. NO numbers, NO units, NO quantities.",
  "alg": "Declared allergens per NOM-051 Annex A (e.g. 'Gluten (trigo), Lácteos, Huevo') or 'No contiene'",
  "pair": "A short food pairing suggestion in Spanish",
  "dishType": "one of: main | soup | side | sauce | snack | baked | beverage",
  "resolved": [
    { "ing": "display name in Spanish", "key": "canonical table key", "grams": 0 }
  ]
}

## dishType rules (pick ONE, deterministically)
  main     — full meals, guisados, protein + side
  soup     — caldos, sopas, cremas, liquids
  side     — rice, beans, vegetables served alongside
  sauce    — salsas, dressings, dips, condiments
  snack    — chips, puffs, botanas, nuts, seeds
  baked    — pan, galletas, pasteles, muffins
  beverage — drinks, aguas, smoothies, café

## Gram weight resolution rules (apply in order)

1. EXACT GRAMS: if grams are given, use verbatim.
2. ALTERNATIVES ("X or Y"): always pick the FIRST option.
3. RANGES ("A to B"): convert both bounds then use the arithmetic mean, rounded to nearest whole gram.
4. OPTIONAL items: always include them.
5. WEIGHT CONVERSIONS: 1 lb = 453.592 g | 1 oz = 28.3495 g | 1 kg = 1000 g
6. VOLUME CONVERSIONS (use ONLY these):
   - Thin liquids (water, broth, vinegar, soy sauce, citrus juice): 1 tsp=5g, 1 tbsp=15g, 1 cup=240g
   - Oils & melted fats: 1 tsp=4.5g, 1 tbsp=14g, 1 cup=218g
   - Thick syrups (honey, agave, maple): 1 tsp=7g, 1 tbsp=21g, 1 cup=336g
   - Granulated sugar / powdered sweetener: 1 tsp=4g, 1 tbsp=12g, 1 cup=200g
   - Salt (any kind): 1 tsp=6g, 1 tbsp=18g
   - Flour / cornstarch / starch: 1 tsp=2.6g, 1 tbsp=8g, 1 cup=120g
   - Ground spices / dried herbs: 1 tsp=2g, 1 tbsp=6g
   - Grated/minced fresh aromatics: 1 tsp=2g, 1 tbsp=6g
7. COUNT WEIGHTS (fixed):
   - 1 garlic clove = 3g | 1 butter stick = 113g
   - 1 celery stalk = 40g | 1 medium onion = 110g | 1 medium tomato = 120g
   - 1 chile (serrano/jalapeño/verde) = 15g | 1 bell pepper = 120g
   - 1 bunch fresh herb = 30g | 1 egg = 50g | 1 medium potato = 170g
   - 1 medium carrot = 60g | 1 medium apple = 180g | 1 banana = 120g
   - 1 lime = 67g | 1 lemon = 58g | 1 medium camote = 130g
   - 1 medium betabel = 100g | 1 nopal paddle = 80g | 1 medium jicama = 400g
8. UNQUANTIFIED / "to taste" / "a pinch": use 5g.

## Key resolution rules

Map each ingredient to the SINGLE best matching key from the VALID KEYS list below.

CRITICAL MATCHING RULES:
- Prefer the LONGEST (most specific) key: "pechuga de pollo" beats "pollo"
- NEVER match a key as a substring of another word: "sal" must NOT match "salsa de soya"
- PROCESSING FORMS are category-distinguishing — NEVER reduce them to their base:
    "maiz nixtamalizado inflado" → key "maiz nixtamalizado inflado"  ✓
    "maiz nixtamalizado inflado" → key "maiz"                         ✗ FORBIDDEN
    "chips de camote"           → key "chips de camote"               ✓
    "chips de camote"           → key "camote"                        ✗ FORBIDDEN
- Any puffed/extruded/dehydrated/chip product MUST use a SNACK section key
- If no exact key matches, use the closest FALLBACK CATEGORY key

## VALID KEYS

MEATS / PROTEIN:
pechuga de pollo | muslo de pollo | carne de res molida | cerdo | pescado |
camaron | huevo | tofu | jamon

VEGETABLES / AROMATICS:
tomate | cebolla | apio | chile verde | chile morron | ajo | cilantro |
zanahoria | papa | espinaca | brocoli | nopal | coliflor | betabel | pepino |
camote | jicama | taro

SNACK / EXPANDED (use for ANY puffed, extruded, dehydrated, or chip product):
maiz nixtamalizado inflado | chips de camote | chips de jicama | chips de betabel |
chips de coliflor | chips de taro | chips de platano | puff de garbanzo |
churro de nopal | churro de amaranto | churro de garbanzo

GRAINS / SEEDS / SUPERFOODS:
amaranto | garbanzo | arroz cocido | arroz crudo | frijol cocido | pasta cocida |
tortilla de maiz | harina | maicena | avena | pan

DAIRY:
leche | queso | yogurt natural | crema

FATS / OILS:
aceite | aceite de oliva | aceite de sesamo | mantequilla | margarina | manteca

CONDIMENTS / HIGH-SODIUM:
sal | sal con ajo | salsa de soya | salsa inglesa | vinagre | caldo de pollo |
consome en polvo | pimienta | chile en polvo | limon en polvo |
saborizante adobado | saborizante flaming hot | saborizante jalapeno |
saborizante ranchero | saborizante queso chile | saborizante salsas negras |
extracto de pepino

SWEETENERS — CALORIC:
azucar | miel | agave | maple | piloncillo | cajeta | chocolate sin azucar | mazapan

SWEETENERS — NON-CALORIC:
estevia | sucralosa | eritritol | xilitol | monk fruit

FRUITS:
manzana | platano | limon | naranja | frutos rojos | mora azul | coco

CAFFEINE SOURCES:
cafe | te | cacao | matcha | capuchino | pink chai

NUTS:
nuez | cacahuate | almendra

WATER:
agua

FALLBACK CATEGORIES (use when no specific key matches):
Lean meat/poultry/fish | Fatty meat/processed meat | Vegetable (generic) |
Fruit (generic) | Cooked grain/starch | Raw flour/dry starch | Oil/pure fat |
Dairy (liquid) | Cheese | Nuts/seeds | Condiment/sauce (savory) |
Dried spice/herb | Fresh herb/aromatic | Caloric sweetener/syrup |
Non-caloric sweetener | Snack/chip/expanded (savory)

## Allergen declaration (NOM-051 Annex A)
Declare only allergens actually present. Standard declarations:
  Gluten (trigo) — if harina, pan, pasta, avena, or wheat-based ingredient present
  Lácteos — if leche, queso, crema, yogurt, mantequilla, or cajeta present
  Huevo — if huevo present
  Cacahuate — if cacahuate or mazapan present
  Nueces de árbol — if nuez or almendra present
  Soya — if salsa de soya or tofu present
  Mariscos — if camaron present
  Pescado — if pescado present
  Ajonjolí — if aceite de sesamo present
Use "No contiene" only if none of the above apply.
`.trim();export{v as N,E as P,A as S,N as _,S as a,k as b,O as u};
