(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{5250:function(e,a,n){Promise.resolve().then(n.bind(n,8520))},8520:function(e,a,n){"use strict";n.r(a);var r=n(7573),s=n(3264),t=n(4309),o=n(7659),i=n(9585);a.default=()=>{let{workspace:e,setOnboardState:a}=(0,s.x8)(),n=!e.name||!e.company||!e.team;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Let's setup your workspace!"}),(0,r.jsxs)("form",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(t.__,{htmlFor:"name",value:"Workspace name"}),(0,r.jsx)(t.oi,{id:"name",placeholder:"Write a catchy name",required:!0,value:e.name,onChange:n=>a({workspace:{...e,name:n.target.value}})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(t.__,{htmlFor:"company",value:"Company name"}),(0,r.jsx)(t.oi,{id:"company",placeholder:"Enter a name",required:!0,value:e.company,onChange:n=>a({workspace:{...e,company:n.target.value}})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(t.__,{htmlFor:"team",value:"Team size"}),(0,r.jsxs)(t.Ph,{id:"team",required:!0,placeholder:"Select team size",value:e.team,onChange:n=>a({workspace:{...e,team:Number(n.target.value)}}),children:[(0,r.jsx)("option",{children:"Select team size"}),Array.from({length:25}).map((e,a)=>(0,r.jsx)("option",{value:a+1,children:a+1},a+1))]})]})]}),(0,r.jsx)(o.default,{href:"/onboard/workspace",className:(0,s.cn)("inline-block",{"pointer-events-none cursor-not-allowed":n}),passHref:!0,"aria-disabled":n,tabIndex:n?-1:void 0,children:(0,r.jsx)(t.zx,{color:"dark",disabled:n,children:"Next"})})]})}},3264:function(e,a,n){"use strict";n.d(a,{cn:function(){return p},x8:function(){return d}}),new URL("https://igot.ai");var r=n(6144),s=n.n(r),t=n(1885);let o={BASE_API_URL:n(8571).env.NEXT_PUBLIC_API_URL},i=t.Z.create({baseURL:o.BASE_API_URL,withCredentials:!0});i.interceptors.request.use(e=>e,e=>Promise.reject(e)),i.interceptors.response.use(e=>e.data,async e=>{var a,n,r,t,o,i,l;return(null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message)&&s()(null===(l=e.response)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.message),(null===(r=e.response)||void 0===r?void 0:r.status)===401||null===(t=e.response)||void 0===t||t.status,Promise.reject(null===(o=e.response)||void 0===o?void 0:o.data)}),n(5963);var l=n(6641),c=n(2791);let d=(0,l.Ue)((0,c.tJ)(e=>({name:"",gender:void 0,workspace:{name:"",company:"",team:0},setOnboardState:a=>e({...a})}),{name:"onboard-store"}));var u=n(7908),m=n(6290);function p(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return(0,m.m6)((0,u.W)(a))}},5963:function(e,a,n){"use strict";let r;n.r(a),n.d(a,{ReactQueryProviders:function(){return c}});var s=n(7573),t=n(3802),o=n(6821);n(9585);var i=n(2162),l=n(6427);function c(e){let a=(r||(r=new t.S({defaultOptions:{queries:{staleTime:6e4}}})),r);return(0,s.jsx)(o.aH,{client:a,children:(0,s.jsxs)(i.V,{children:[e.children,(0,s.jsx)(l.t,{initialIsOpen:!1})]})})}}},function(e){e.O(0,[461,335,579,698,263,659,293,286,744],function(){return e(e.s=5250)}),_N_E=e.O()}]);