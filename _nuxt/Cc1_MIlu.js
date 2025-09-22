import{_ as E}from"./L6XTqvdH.js";import{_ as N}from"./Cdh0rzY-.js";import{_ as V,c as C}from"./DE30P0br.js";import{_ as q,m as B}from"./DZGBM9Vh.js";import{e as P,l as x,k as j,f as b,o as p,u as e,w as m,b as d,a as s,c as h,i as _,t as v,d as w,m as k,x as H,J as O,g as $,v as F,n as M,_ as z,j as S,z as R,r as D,F as L,q as A,h as W,E as G}from"#entry";import{_ as T,a as U}from"./y8jR_18Q.js";import{u as I}from"./uBJ0CUIU.js";import{_ as J}from"./CDImTW6d.js";const K={class:"w-full mt-6 md:w-3/4 md:pr-8 md:mt-0"},Q={class:"flex items-center gap-2 mb-2"},X={class:"text-xs text-muted-foreground"},Z={class:"text-lg font-bold"},ee=["innerHTML"],te={key:0,class:"relative md:w-1/3 w-full aspect-[16/9] card-styles overflow-hidden min-h-[160px]"},se=["src","alt"],oe=P({__name:"BlogHorizontal",props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(n){const o=n,l=j(),r=x(()=>new Date(o.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),i=x(()=>`${o.baseUrl||""}/blog${o.slug}`),f=x(()=>`${l.public.pocketbaseUrl}api/files/${o.collectionId}/${o.id}/${o.coverImage}`),u=x(()=>o?.description?.trim()||"");return(a,t)=>{const c=N;return p(),b(e(V),{class:"w-full"},{default:m(()=>[d(e(q),null,{default:m(()=>[d(c,{to:e(i),class:"flex flex-col-reverse items-start w-full h-full pt-6 md:flex-row"},{default:m(()=>[s("div",K,[s("div",Q,[s("span",X,v(e(r)),1)]),s("h3",Z,[d(c,{to:e(i),class:"transition-colors hover:text-primary"},{default:m(()=>[w(v(a.title),1)]),_:1},8,["to"])]),s("p",{class:"mt-2 text-sm text-muted-foreground line-clamp-3",innerHTML:e(u)},null,8,ee)]),a.coverImage?(p(),h("div",te,[e(f)?(p(),h("img",{key:0,src:e(f),alt:a.title,width:"600",height:"338",loading:"lazy",class:"object-cover w-full h-full transition-transform duration-500",decoding:"async"},null,8,se)):_("",!0)])):_("",!0)]),_:1},8,["to"])]),_:1})]),_:1})}}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=C("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=C("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=C("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=C("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),re=`<section>
    <h2>1. Information I Collect</h2>
    <p>I collect information to provide and improve my services, communicate with you, and understand how my website is used. The types of information I collect include:</p>
    
    <h3>Personal Information You Voluntarily Provide</h3>
    <ul>
      <li><strong>Newsletter Subscription:</strong> I collect your email address. You may also provide your name.</li>
      <li><strong>Blog Comments:</strong> I collect your name, email address, comment content, and optionally your website URL.</li>
      <li><strong>Contact Forms/Direct Communication:</strong> I collect your name, email address, and message content.</li>
    </ul>

    <h3>Automatically Collected Information (Usage Data)</h3>
    <ul>
      <li>IP address</li>
      <li>Browser type and version</li>
      <li>Operating system</li>
      <li>Referring and exit pages</li>
      <li>Dates and times of access</li>
      <li>Time spent on pages</li>
      <li>Clickstream data</li>
    </ul>
  </section>

  <section>
    <h2>2. How I Use Your Information</h2>
    <ul>
      <li>To provide and maintain the website</li>
      <li>To send newsletter updates</li>
      <li>To enable blog commenting</li>
      <li>To respond to inquiries</li>
      <li>To improve the website and content</li>
      <li>To protect against fraud and enforce terms</li>
    </ul>
  </section>

  <section>
    <h2>3. Sharing Your Information</h2>
    <p>I do not sell, rent, or trade your personal information. I may share it only in the following cases:</p>
    <ul>
      <li><strong>With Service Providers:</strong> For website operation, email marketing, and analytics.</li>
      <li><strong>For Legal Reasons:</strong> To comply with law, protect rights, investigate wrongdoing, or ensure safety.</li>
      <li><strong>With Your Consent:</strong> Only for purposes you explicitly agree to.</li>
    </ul>
  </section>

  <section>
    <h2>4. Data Retention</h2>
    <p>I retain data only as long as needed for the purpose it was collected, or for legal/reporting reasons:</p>
    <ul>
      <li><strong>Newsletter:</strong> Retained until you unsubscribe.</li>
      <li><strong>Blog Comments:</strong> May be kept indefinitely unless removal is requested.</li>
      <li><strong>Contact Submissions:</strong> Retained for a reasonable response window.</li>
      <li><strong>Usage Data:</strong> Typically retained briefly for analytics.</li>
    </ul>
  </section>

  <section>
    <h2>5. Your Choices and Rights</h2>
    <p>Depending on applicable laws, you may have the right to:</p>
    <ul>
      <li>Access your personal information</li>
      <li>Request corrections</li>
      <li>Request deletion ("right to be forgotten")</li>
      <li>Unsubscribe from newsletters</li>
      <li>Object to certain data processing</li>
      <li>Withdraw consent at any time</li>
    </ul>
    <p>To exercise any of these rights, please contact me at the email listed below.</p>
  </section>

  <section>
    <h2>6. Cookies and Tracking Technologies</h2>
    <p>My website may use cookies and similar technologies:</p>
    <ul>
      <li><strong>Necessary Cookies:</strong> Enable core site functionality.</li>
      <li><strong>Analytics Cookies:</strong> Understand usage and performance (e.g., Google Analytics).</li>
    </ul>
    <p>You can manage cookie preferences through your browser settings. Disabling cookies may affect site functionality.</p>
  </section>

  <section>
    <h2>7. Links to Other Websites</h2>
    <p>This site may contain links to third-party websites. I am not responsible for their privacy practices or content. Always review their policies.</p>
  </section>

  <section>
    <h2>8. Security of Your Information</h2>
    <p>I use reasonable measures to protect your data but cannot guarantee absolute security. Transmission over the internet involves risk.</p>
  </section>

  <section>
    <h2>9. Children's Privacy</h2>
    <p>This site is not intended for children under 13. I do not knowingly collect data from them. If you believe a child has provided data, contact me for removal.</p>
  </section>

  <section>
    <h2>10. Changes to This Privacy Policy</h2>
    <p>I may update this Privacy Policy. Changes will be posted on this page with a revised "Last Updated" date. Review it periodically for updates.</p>
  </section>

  <section>
    <h2>11. Contact Me</h2>
    <p>If you have questions or concerns about this policy, reach out at:</p>
    <address>
      Guillermo Medel<br />
      <a href="mailto:guillermoantoniomedel@gmail.com">guillermoantoniomedel@gmail.com</a>
    </address>
  </section>`,ce={class:"space-y-2"},de={class:"space-y-2"},ue={class:"flex items-center"},me={for:"newsletter-consent",class:"ml-2 text-sm"},pe={class:"border-t border-white/10"},ge={class:"flex flex-col items-center space-y-2 text-center"},fe={class:"flex space-x-2"},ye={class:"p-2 rounded-lg bg-primary-600/10"},he={class:"p-2 rounded-lg bg-primary-600/10"},be=P({__name:"NewsletterHero",setup(n){const o={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},l=k({email:"",name:"",consent:!1}),r=k(!1),i=k(null),f=I(),u=async()=>{if(!l.value.consent){i.value={type:"error",text:"Please agree to the privacy policy"};return}if(!l.value.email){i.value={type:"error",text:"Email is required"};return}r.value=!0,i.value=null;try{await f.createItem("newsletterSubs",{email:l.value.email,name:l.value.name||"",consent_given:!0,subscribed_at:new Date().toISOString()}),i.value={type:"success",text:"Thank you for subscribing!"},l.value={email:"",name:"",consent:!1}}catch(a){console.error("Subscription error:",a),a?.response?.data?.email?.code==="validation_not_unique"?i.value={type:"error",text:"This email is already subscribed"}:i.value={type:"error",text:"Subscription failed. Please try again later."}}finally{r.value=!1}};return(a,t)=>(p(),b(e(B).div,{variants:o},{default:m(()=>[d(e(V),null,{default:m(()=>[d(e(q),{class:"p-6 space-y-6"},{default:m(()=>[s("form",{onSubmit:F(u,["prevent"]),class:"space-y-4"},[s("div",ce,[d(e(T),{for:"newsletter-email"},{default:m(()=>[...t[3]||(t[3]=[w("Email Address",-1)])]),_:1}),d(e(U),{id:"newsletter-email",modelValue:e(l).email,"onUpdate:modelValue":t[0]||(t[0]=c=>e(l).email=c),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),s("div",de,[d(e(T),{for:"newsletter-name"},{default:m(()=>[...t[4]||(t[4]=[w("Name (Optional)",-1)])]),_:1}),d(e(U),{id:"newsletter-name",modelValue:e(l).name,"onUpdate:modelValue":t[1]||(t[1]=c=>e(l).name=c),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),s("div",ue,[H(s("input",{id:"newsletter-consent","onUpdate:modelValue":t[2]||(t[2]=c=>e(l).consent=c),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[O,e(l).consent]]),s("label",me,[t[6]||(t[6]=w(" I agree to receive emails and accept the ",-1)),d(J,{title:"Privacy Policy",description:"`This Privacy Policy explains how information may be collected, used, and shared when you visit this website, subscribe to a newsletter, or interact with any blog content.`",htmlContent:e(re)},{button:m(()=>[...t[5]||(t[5]=[s("span",{class:"cursor-pointer text-primary-500 hover:underline"},"privacy policy",-1)])]),_:1},8,["htmlContent"])])]),d(e($),{size:"lg",class:"w-full",disabled:e(r)},{default:m(()=>[w(v(e(r)?"Subscribing...":"Subscribe Now"),1)]),_:1},8,["disabled"])],32),e(i)?(p(),h("div",{key:0,class:M(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(i).type==="success","bg-red-900/50 text-red-300":e(i).type==="error"}])},v(e(i).text),3)):_("",!0),s("div",pe,[s("div",ge,[s("div",fe,[s("div",ye,[d(e(le),{class:"w-5 h-5 text-primary-400"})]),s("div",he,[d(e(ae),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),_e=z(be,[["__scopeId","data-v-0cb1a42e"]]),we={class:"flex flex-col w-full md:flex-row lg:flex-col"},ve={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},xe={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},Pe={class:"mt-3 text-sm line-clamp-3"},ke=P({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"}},setup(n){return(o,l)=>{const r=_e;return p(),h("div",we,[s("div",ve,[s("h2",xe,v(n.title),1),s("p",Pe,v(n.description),1)]),d(r,{class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"})])}}}),$e={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},Ce={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Ie={class:"lg:z-10 lg:sticky top-24"},Se=P({__name:"FixedRail",setup(n){const o={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(l,r)=>(p(),h("div",$e,[d(e(B).section,{variants:o,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:m(()=>[r[0]||(r[0]=s("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),S(l.$slots,"main")]),_:3}),s("aside",Ce,[s("div",Ie,[r[1]||(r[1]=s("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),S(l.$slots,"right")])])]))}}),Te={class:"grid w-full gap-4"},Ue=P({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"}},setup(n){const o=n,l=I(),r=k([]),i=async()=>{try{return await l.fetchCollection(o.type,1,6,"","-created","")}catch(u){return console.error("Error fetching posts:",u),[]}},f=async()=>{r.value=await i()};return R(async()=>{await f()}),(u,a)=>{const t=oe,c=ke,y=Se;return p(),b(y,null,{main:m(()=>[s("div",Te,[(p(!0),h(L,null,D(n.content,(g,Y)=>(p(),b(t,{key:g.id,title:g.title,description:g.description,created:g.created,slug:g.slug,"collection-id":g.collectionId,id:g.id,"cover-image":g.cover_image,index:Y,"base-url":n.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:m(()=>[d(c,{class:"z-10 sticky-position top-24"})]),_:1})}}}),Ne={key:0,class:"flex items-center justify-center"},Ve={class:"flex items-center gap-1"},qe={__name:"Pagination",props:{totalPages:{type:Number,required:!0},maxVisiblePages:{type:Number,default:5},showPagination:{type:Boolean,default:!1}},setup(n){const o=n,l=A(),r=W(),i=x(()=>parseInt(l.query.page)||1),f=x(()=>{const a=[];let t=1,c=o.totalPages;if(o.totalPages>o.maxVisiblePages){const y=Math.floor(o.maxVisiblePages/2),g=Math.ceil(o.maxVisiblePages/2)-1;i.value<=y?c=o.maxVisiblePages:i.value+g>=o.totalPages?t=o.totalPages-o.maxVisiblePages+1:(t=i.value-y,c=i.value+g)}for(let y=t;y<=c;y++)a.push(y);return a}),u=a=>{a<1||a>o.totalPages||r.push({query:{...l.query,page:a}})};return(a,t)=>n.showPagination&&n.totalPages>1?(p(),h("nav",Ne,[s("ul",Ve,[s("li",null,[d(e($),{variant:"outline",size:"sm",disabled:e(i)===1,onClick:t[0]||(t[0]=c=>u(e(i)-1))},{default:m(()=>[d(e(ie),{class:"w-4 h-4"}),t[2]||(t[2]=s("span",{class:"sr-only"},"Previous page",-1))]),_:1},8,["disabled"])]),(p(!0),h(L,null,D(e(f),c=>(p(),h("li",{key:c},[d(e($),{variant:"page",class:M(["px-4",e(i)===c?"bg-primary text-primary-foreground":""]),size:"sm",onClick:y=>u(c)},{default:m(()=>[w(v(c),1)]),_:2},1032,["class","onClick"])]))),128)),s("li",null,[d(e($),{variant:"outline",size:"sm",disabled:e(i)===n.totalPages,onClick:t[1]||(t[1]=c=>u(e(i)+1))},{default:m(()=>[d(e(ne),{class:"w-4 h-4"}),t[3]||(t[3]=s("span",{class:"sr-only"},"Next page",-1))]),_:1},8,["disabled"])])])])):_("",!0)}},Be={class:"container flex flex-col w-full mx-auto"},Me={class:"flex justify-start w-full mr-auto -mt-12 lg:-mt-20"},ze=P({__name:"BlogColumn",props:{title:{type:String,default:"Blog Articles & Tutorials"},description:{type:String,default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{type:Number,default:6},content:{type:Object},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{type:String,default:""},h1:{type:Boolean,default:!1},type:{type:String,default:"posts"}},setup(n){const o=n,l=I(),r=k({items:[],page:1,perPage:o.perPage,totalItems:0,totalPages:0}),i=A(),f=async(u,a)=>{try{return await l.fetchCollection(o.type,u,a,"","-created","")}catch(t){return console.error("Error fetching posts:",t),{items:[],page:1,perPage:a,totalItems:0,totalPages:0}}};return G(()=>i.query.page,async u=>{const a=u?parseInt(u,10):1;isNaN(a)||(r.value=await f(a,o.perPage))},{immediate:!0}),R(async()=>{const u=i.query.page?parseInt(i.query.page,10):1;r.value=await f(isNaN(u)?1:u,o.perPage)}),(u,a)=>{const t=E,c=Ue,y=N,g=qe;return p(),h("div",Be,[n.title||n.description?(p(),b(t,{key:0,class:"pb-16",title:n.title,description:n.description,h1:n.h1},null,8,["title","description","h1"])):_("",!0),e(r)?.items?.length?(p(),b(c,{key:1,class:"flex w-full mt-6",content:e(r).items,baseUrl:n.baseUrl},null,8,["content","baseUrl"])):_("",!0),s("div",Me,[n.showMore?(p(),b(y,{key:0,to:"/blog/",class:"z-50 flex flex-row justify-end w-full cursor-pointer lg:pr-16 lg:w-2/3"},{default:m(()=>[...a[0]||(a[0]=[w(" View All Posts ",-1)])]),_:1})):_("",!0),n.showPagination?(p(),b(g,{key:1,"total-pages":e(r)?.totalPages},null,8,["total-pages"])):_("",!0)])])}}}),Oe=z(ze,[["__scopeId","data-v-67f1c38f"]]);export{Oe as _};
