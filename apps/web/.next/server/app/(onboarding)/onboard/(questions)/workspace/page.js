(()=>{var e={};e.id=485,e.ids=[485],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7918:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>l,routeModule:()=>m,tree:()=>c}),r(9361),r(8013),r(9116),r(7824),r(71);var s=r(3282),a=r(5736),o=r(3906),n=r.n(o),i=r(6880),p={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>i[e]);r.d(t,p);let c=["",{children:["(onboarding)",{children:["onboard",{children:["(questions)",{children:["workspace",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9361)),"D:\\ReactJs\\igot-app\\apps\\web\\src\\app\\(onboarding)\\onboard\\(questions)\\workspace\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8013)),"D:\\ReactJs\\igot-app\\apps\\web\\src\\app\\(onboarding)\\onboard\\(questions)\\layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9116)),"D:\\ReactJs\\igot-app\\apps\\web\\src\\app\\(onboarding)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7824,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,154))).default(e),async e=>(await Promise.resolve().then(r.bind(r,805))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,1125))).default(e)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71)),"D:\\ReactJs\\igot-app\\apps\\web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7824,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,154))).default(e),async e=>(await Promise.resolve().then(r.bind(r,805))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,1125))).default(e)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}],l=["D:\\ReactJs\\igot-app\\apps\\web\\src\\app\\(onboarding)\\onboard\\(questions)\\workspace\\page.tsx"],d="/(onboarding)/onboard/(questions)/workspace/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(onboarding)/onboard/(questions)/workspace/page",pathname:"/onboard/workspace",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},840:(e,t,r)=>{Promise.resolve().then(r.bind(r,6116))},6116:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(3227),a=r(5628),o=r(6516),n=r(649),i=r(3677),p=r.n(i);let c=()=>{let{workspace:e,setOnboardState:t}=(0,a.x8)(),r=!e.name||!e.company||!e.team;return(0,s.jsxs)(p().Fragment,{children:[s.jsx("h3",{className:"text-2xl font-bold",children:"Let's setup your workspace!"}),(0,s.jsxs)("form",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(o.__,{htmlFor:"name",value:"Workspace name"}),s.jsx(o.oi,{id:"name",placeholder:"Write a catchy name",required:!0,value:e.name,onChange:r=>t({workspace:{...e,name:r.target.value}})})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(o.__,{htmlFor:"company",value:"Company name"}),s.jsx(o.oi,{id:"company",placeholder:"Enter a name",required:!0,value:e.company,onChange:r=>t({workspace:{...e,company:r.target.value}})})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(o.__,{htmlFor:"team",value:"Team size"}),(0,s.jsxs)(o.Ph,{id:"team",required:!0,placeholder:"Select team size",value:e.team,onChange:r=>t({workspace:{...e,team:Number(r.target.value)}}),children:[s.jsx("option",{children:"Select team size"}),Array.from({length:25}).map((e,t)=>s.jsx("option",{value:t+1,children:t+1},t+1))]})]})]}),s.jsx(n.default,{href:"/onboard/workspace",className:(0,a.cn)("inline-block",{"pointer-events-none cursor-not-allowed":r}),passHref:!0,"aria-disabled":r,tabIndex:r?-1:void 0,children:s.jsx(o.zx,{color:"dark",disabled:r,children:"Next"})})]})}},8013:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(9013);r(6321);var a=r(2569);let o=({children:e})=>s.jsx(a.RI,{children:e})},9361:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var s=r(3189);let a=(0,s.createProxy)(String.raw`D:\ReactJs\igot-app\apps\web\src\app\(onboarding)\onboard\(questions)\workspace\page.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,s.createProxy)(String.raw`D:\ReactJs\igot-app\apps\web\src\app\(onboarding)\onboard\(questions)\workspace\page.tsx#default`)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[522,466,201,488,649,912],()=>r(7918));module.exports=s})();