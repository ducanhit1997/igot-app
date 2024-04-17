(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32,879],{1184:function(e,r,t){Promise.resolve().then(t.bind(t,6974)),Promise.resolve().then(t.bind(t,6047)),Promise.resolve().then(t.bind(t,7985))},6974:function(e,r,t){"use strict";t.r(r),t.d(r,{OnboardPreview:function(){return d}});var s=t(7573),n=t(3264),a=t(4309),i=t(9133),o=t(159),c=t.n(o),l=t(5880);t(9585);let d=()=>{let{gender:e,name:r,workspace:t}=(0,n.x8)();return(0,s.jsxs)("div",{className:"min-w-[512px] p-6 rounded-3xl border-4 border-gray-100/90 bg-gradient-to-r from-white to-white/10 grid place-content-center space-y-4 text-center",children:[(0,s.jsx)("div",{className:"w-16 h-16 relative aspect-square bg-white rounded-full grid place-content-center mx-auto",children:function(e){switch(e){case"male":return(0,s.jsx)(l.default,{src:"/images/onboard/users/male.svg",fill:!0,className:"object-contain p-1",quality:100,priority:!0,alt:"Male"});case"female":return(0,s.jsx)(l.default,{src:"/images/onboard/users/female.svg",fill:!0,className:"object-contain p-1",priority:!0,quality:100,alt:"Female"});case"other":return(0,s.jsx)(l.default,{src:"/images/onboard/users/other.svg",fill:!0,className:"object-contain p-1",priority:!0,quality:100,alt:"Other"});default:return(0,s.jsx)(i.n5m,{className:"w-10 h-10"})}}(e)}),(0,s.jsx)("h3",{className:"text-xl font-semibold",children:r}),(!!t.name||!!t.company||!!t.team)&&(0,s.jsx)("div",{className:"rounded-3xl p-4 bg-gradient-to-b from-white/15 to-[#CEEADD] min-w-[440px] text-left",children:(0,s.jsxs)("div",{className:"backdrop-blur p-6 rounded-[calc(1.5rem-2px)] space-y-4",children:[(0,s.jsxs)("div",{className:"rounded-[40px] border-2 border-gray-50 divide-x-2 divide-gray-50 text-sm font-medium",children:[(0,s.jsx)("span",{className:"px-4 py-2 inline-block text-gray-900",children:t.name||"|"}),(0,s.jsxs)("span",{className:"px-4 py-2 inline-block text-gray-700",children:[c()(t.name)||(0,s.jsx)("span",{className:"text-gray-400",children:"workspace_id"}),".igot.ai"]})]}),(!!t.company||!!t.team)&&(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{className:"px-4 py-2 text-gray-900 font-medium",children:t.company||"|"}),!!t.team&&(0,s.jsxs)(a.qE.Group,{children:[Array.from({length:t.team<=3?t.team:3}).map((e,r)=>(0,s.jsx)(a.qE,{rounded:!0,stacked:!0},r)),t.team>3&&(0,s.jsx)(a.qE.Counter,{total:Number(t.team)-3,href:"#"})]})]})]})})]})}},6047:function(e,r,t){"use strict";t.r(r),t.d(r,{OnboardWrapper:function(){return a}});var s=t(7573),n=t(7754);t(9585);let a=e=>{let{children:r}=e,t=(0,n.usePathname)(),a=t.includes("/onboard/complete")?"/images/onboard/success.svg":"/onboard"===t?"/images/onboard/hero.svg":"/images/onboard/background.svg";return(0,s.jsx)("div",{style:{backgroundImage:"url('".concat(a,"')")},className:"bg-no-repeat bg-center bg-cover min-h-screen w-full",children:r})}},7985:function(e,r,t){"use strict";t.r(r),t.d(r,{QuestionsLayout:function(){return o}});var s=t(7573);t(9585);var n=t(6974),a=t(6670),i=t(7754);let o=e=>{let{children:r}=e,{back:t}=(0,i.useRouter)();return(0,s.jsxs)("div",{className:"container grid grid-cols-2 h-screen items-center",children:[(0,s.jsxs)("div",{className:"w-full max-w-lg space-y-6",children:[(0,s.jsxs)("button",{type:"button",onClick:t,className:"flex space-x-2 text-sm text-gray-500 items-center transition duration-300 hover:text-gray-700",children:[(0,s.jsx)(a.Z,{})," ",(0,s.jsx)("span",{children:"Back"})]}),r]}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(n.OnboardPreview,{})})]})}},3264:function(e,r,t){"use strict";t.d(r,{cn:function(){return p},x8:function(){return d}}),new URL("https://igot.ai");var s=t(6144),n=t.n(s),a=t(1885);let i={BASE_API_URL:t(8571).env.NEXT_PUBLIC_API_URL},o=a.Z.create({baseURL:i.BASE_API_URL,withCredentials:!0});o.interceptors.request.use(e=>e,e=>Promise.reject(e)),o.interceptors.response.use(e=>e.data,async e=>{var r,t,s,a,i,o,c;return(null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)&&n()(null===(c=e.response)||void 0===c?void 0:null===(o=c.data)||void 0===o?void 0:o.message),(null===(s=e.response)||void 0===s?void 0:s.status)===401||null===(a=e.response)||void 0===a||a.status,Promise.reject(null===(i=e.response)||void 0===i?void 0:i.data)}),t(5963);var c=t(6641),l=t(2791);let d=(0,c.Ue)((0,l.tJ)(e=>({name:"",gender:void 0,workspace:{name:"",company:"",team:0},setOnboardState:r=>e({...r})}),{name:"onboard-store"}));var u=t(7908),m=t(6290);function p(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,m.m6)((0,u.W)(r))}},5963:function(e,r,t){"use strict";let s;t.r(r),t.d(r,{ReactQueryProviders:function(){return l}});var n=t(7573),a=t(3802),i=t(6821);t(9585);var o=t(2162),c=t(6427);function l(e){let r=(s||(s=new a.S({defaultOptions:{queries:{staleTime:6e4}}})),s);return(0,n.jsx)(i.aH,{client:r,children:(0,n.jsxs)(o.V,{children:[e.children,(0,n.jsx)(c.t,{initialIsOpen:!1})]})})}}},function(e){e.O(0,[461,335,579,698,263,993,293,286,744],function(){return e(e.s=1184)}),_N_E=e.O()}]);