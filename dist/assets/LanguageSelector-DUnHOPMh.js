import{E as H,D as _,aA as x,t as m,r as I,G as T,aB as E,j as e,s as G,J as P,aj as A,K as R,T as s,ak as N,am as U,aC as z,c,u as X,a as B,B as d,b as V,I as f,aD as J,S as q,M as Y,aE as K,aF as Q,aG as Z,aH as ee}from"./index-Bx2V9Ji_.js";import{C as te}from"./Container-WB8DfVKj.js";import{G as h}from"./Grid-4rHGqyDh.js";function ne(n){return _("MuiLink",n)}const oe=H("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),re=({theme:n,ownerState:t})=>{const o=t.color,l=x(n,`palette.${o}.main`,!1)||x(n,`palette.${o}`,!1)||t.color,r=x(n,`palette.${o}.mainChannel`)||x(n,`palette.${o}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:m(l,.4)},S={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},se=n=>{const{classes:t,component:o,focusVisible:l,underline:r}=n,i={root:["root",`underline${A(r)}`,o==="button"&&"button",l&&"focusVisible"]};return R(i,ne,t)},ae=G(s,{name:"MuiLink",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`underline${A(o.underline)}`],o.component==="button"&&t.button]}})(N(({theme:n})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:o})=>t==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(n.palette).filter(U()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette[t].mainChannel} / 0.4)`:m(n.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / 0.4)`:m(n.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.secondaryChannel} / 0.4)`:m(n.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(n.vars||n).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oe.focusVisible}`]:{outline:"auto"}}}]}))),p=I.forwardRef(function(t,o){const l=T({props:t,name:"MuiLink"}),r=E(),{className:i,color:a="primary",component:j="a",onBlur:y,onFocus:C,TypographyClasses:F,underline:k="always",variant:w="inherit",sx:g,...L}=l,[D,M]=I.useState(!1),O=u=>{z(u.target)||M(!1),y&&y(u)},W=u=>{z(u.target)&&M(!0),C&&C(u)},b={...l,color:a,component:j,focusVisible:D,underline:k,variant:w},$=se(b);return e.jsx(ae,{color:a,className:P($.root,i),classes:F,component:j,onBlur:O,onFocus:W,ref:o,ownerState:b,variant:w,...L,sx:[...S[a]===void 0?[{color:a}]:[],...Array.isArray(g)?g:[g]],style:{...L.style,...k==="always"&&a!=="inherit"&&!S[a]&&{"--Link-underlineColor":re({theme:r,ownerState:b})}}})}),me=c([e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"},"0"),e.jsx("path",{d:"M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"},"1")],"AccountCircleOutlined"),ie=c(e.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),le=c(e.jsx("path",{d:"M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"}),"FastfoodOutlined"),ce=c(e.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),de=c(e.jsx("path",{d:"M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"}),"LocalActivityOutlined"),ge=c(e.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),ue=c(e.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),be=()=>{const n=X(),{t}=B();return e.jsx(d,{sx:{position:"relative",zIndex:1,background:"linear-gradient(to right, rgba(74, 20, 140, 0.9), rgba(235, 195, 50, 0.9))",backdropFilter:"blur(8px)",color:"white",padding:{xs:"20px 10px",sm:"30px 15px",md:"40px 20px"},"&::before":{content:'""',position:"absolute",inset:0,background:"inherit",zIndex:-1}},children:e.jsxs(te,{maxWidth:"lg",children:[e.jsxs(h,{container:!0,spacing:{xs:2,sm:3,md:4},justifyContent:"space-between",children:[e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h5",fontWeight:"bold",gutterBottom:!0,children:"EIGA"}),e.jsx(s,{variant:"body2",sx:{mb:2},children:t("footer.slogan")}),e.jsx(V,{onClick:()=>n("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"yellow",color:"black",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(de,{}),children:e.jsx("span",{children:t("footer.book_ticket")})}),e.jsx(V,{onClick:()=>n("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"#834bff",color:"white",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(le,{}),children:e.jsx("span",{children:t("footer.book_snacks")})}),e.jsxs(s,{variant:"subtitle2",gutterBottom:!0,children:[t("footer.social_media"),":"]}),e.jsxs(d,{sx:{display:"flex",gap:1},children:[e.jsx(f,{color:"inherit",size:"small",children:e.jsx(ie,{})}),e.jsx(f,{color:"inherit",size:"small",children:e.jsx(ue,{})}),e.jsx(f,{color:"inherit",size:"small",children:e.jsx(ce,{})})]})]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.account.title")}),["login","register","membership"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(p,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.account.${o}`)})},o)),e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,sx:{mt:3},children:t("footer.movies.title")}),["now_showing","coming_soon","special_screening"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(p,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.movies.${o}`)})},o))]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.theaters.title")}),["all_theaters","quoc_thanh","hai_ba_trung","binh_duong","da_lat"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(p,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.theaters.${o}`)})},o))]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.legal.title")}),["terms","privacy","faq","about_us","contact"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(p,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.legal.${o}`)})},o))]})]}),e.jsx(d,{sx:{mt:{xs:3,sm:4,md:5},textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(d,{component:"iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5400730334272!2d106.83740207489461!3d10.846466057898201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521af4730391f%3A0xfa0bd6efed6cc3f9!2sS10.06%20Origami%2C%20Vinhomes%20Grandpark!5e0!3m2!1svi!2s!4v1740818652811!5m2!1svi!2s",sx:{width:{xs:"100%",sm:"90%",md:"70%"},height:{xs:200,sm:300,md:400},border:0,borderRadius:"12px",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.2)",mt:2},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsx(d,{sx:{textAlign:"center",mt:{xs:3,sm:4},pt:2,borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(s,{variant:"body2",children:t("footer.copyright")})})]})})},v={vi:{name:"VN",icon:e.jsx(ee,{})},en:{name:"ENG",icon:e.jsx(Z,{})},jp:{name:"JP",icon:e.jsx(Q,{})}},fe=()=>{const{i18n:n}=B(),{currentLanguage:t,changeLanguage:o}=J(),l=r=>{const i=r.target.value;o(i)};return e.jsx(q,{value:t,onChange:l,displayEmpty:!0,renderValue:r=>{var i,a;return e.jsxs(d,{display:"flex",alignItems:"center",sx:{gap:1,color:"white"},children:[(i=v[r])==null?void 0:i.icon," ",(a=v[r])==null?void 0:a.name]})},sx:{backgroundColor:"transparent",minWidth:"50px",border:"none",boxShadow:"none","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:Object.entries(v).map(([r,{name:i,icon:a}])=>e.jsxs(Y,{value:r,children:[e.jsx(K,{children:a}),e.jsx(s,{children:i})]},r))})};export{me as A,be as F,p as L,ge as M,de as a,le as b,fe as c};
