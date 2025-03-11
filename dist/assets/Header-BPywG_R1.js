import{D as E,z as G,ay as p,q as g,r as f,E as P,az as X,j as e,s as N,G as U,ah as F,J as q,T as s,ai as J,ak as Y,aA as V,c as d,u as W,a as w,B as c,b,e as x,aB as K,S as Q,d as Z,aC as ee,aD as te,aE as ne,aF as oe,aG as re,aH as se,h as ae}from"./index-DusnYyTQ.js";import{C as B}from"./Container-CXKpPVaj.js";import{G as h}from"./Grid-CPCepTDX.js";import{S as ie}from"./Search-z6jiUDb3.js";function le(n){return G("MuiLink",n)}const ce=E("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),de=({theme:n,ownerState:t})=>{const o=t.color,a=p(n,`palette.${o}.main`,!1)||p(n,`palette.${o}`,!1)||t.color,r=p(n,`palette.${o}.mainChannel`)||p(n,`palette.${o}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:g(a,.4)},A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},xe=n=>{const{classes:t,component:o,focusVisible:a,underline:r}=n,i={root:["root",`underline${F(r)}`,o==="button"&&"button",a&&"focusVisible"]};return q(i,le,t)},ue=N(s,{name:"MuiLink",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`underline${F(o.underline)}`],o.component==="button"&&t.button]}})(J(({theme:n})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:o})=>t==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(n.palette).filter(Y()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette[t].mainChannel} / 0.4)`:g(n.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / 0.4)`:g(n.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.secondaryChannel} / 0.4)`:g(n.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(n.vars||n).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ce.focusVisible}`]:{outline:"auto"}}}]}))),m=f.forwardRef(function(t,o){const a=P({props:t,name:"MuiLink"}),r=X(),{className:i,color:l="primary",component:C="a",onBlur:k,onFocus:I,TypographyClasses:O,underline:L="always",variant:z="inherit",sx:v,...S}=a,[_,M]=f.useState(!1),$=u=>{V(u.target)||M(!1),k&&k(u)},T=u=>{V(u.target)&&M(!0),I&&I(u)},j={...a,color:l,component:C,focusVisible:_,underline:L,variant:z},R=xe(j);return e.jsx(ue,{color:l,className:U(R.root,i),classes:O,component:C,onBlur:$,onFocus:T,ref:o,ownerState:j,variant:z,...S,sx:[...A[l]===void 0?[{color:l}]:[],...Array.isArray(v)?v:[v]],style:{...S.style,...L==="always"&&l!=="inherit"&&!A[l]&&{"--Link-underlineColor":de({theme:r,ownerState:j})}}})}),he=d([e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"},"0"),e.jsx("path",{d:"M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"},"1")],"AccountCircleOutlined"),pe=d(e.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),D=d(e.jsx("path",{d:"M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"}),"FastfoodOutlined"),me=d(e.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),H=d(e.jsx("path",{d:"M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"}),"LocalActivityOutlined"),ge=d(e.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),fe=d(e.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),Ce=()=>{const n=W(),{t}=w();return e.jsx(c,{sx:{position:"relative",zIndex:1,background:"linear-gradient(to right, rgba(74, 20, 140, 0.9), rgba(235, 195, 50, 0.9))",backdropFilter:"blur(8px)",color:"white",padding:{xs:"20px 10px",sm:"30px 15px",md:"40px 20px"},"&::before":{content:'""',position:"absolute",inset:0,background:"inherit",zIndex:-1}},children:e.jsxs(B,{maxWidth:"lg",children:[e.jsxs(h,{container:!0,spacing:{xs:2,sm:3,md:4},justifyContent:"space-between",children:[e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h5",fontWeight:"bold",gutterBottom:!0,children:"EIGA"}),e.jsx(s,{variant:"body2",sx:{mb:2},children:t("footer.slogan")}),e.jsx(b,{onClick:()=>n("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"yellow",color:"black",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(H,{}),children:e.jsx("span",{children:t("footer.book_ticket")})}),e.jsx(b,{onClick:()=>n("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"#834bff",color:"white",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(D,{}),children:e.jsx("span",{children:t("footer.book_snacks")})}),e.jsxs(s,{variant:"subtitle2",gutterBottom:!0,children:[t("footer.social_media"),":"]}),e.jsxs(c,{sx:{display:"flex",gap:1},children:[e.jsx(x,{color:"inherit",size:"small",children:e.jsx(pe,{})}),e.jsx(x,{color:"inherit",size:"small",children:e.jsx(fe,{})}),e.jsx(x,{color:"inherit",size:"small",children:e.jsx(me,{})})]})]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.account.title")}),["login","register","membership"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(m,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.account.${o}`)})},o)),e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,sx:{mt:3},children:t("footer.movies.title")}),["now_showing","coming_soon","special_screening"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(m,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.movies.${o}`)})},o))]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.theaters.title")}),["all_theaters","quoc_thanh","hai_ba_trung","binh_duong","da_lat"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(m,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.theaters.${o}`)})},o))]}),e.jsxs(h,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(s,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.legal.title")}),["terms","privacy","faq","about_us","contact"].map(o=>e.jsx(s,{variant:"body2",gutterBottom:!0,children:e.jsx(m,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.legal.${o}`)})},o))]})]}),e.jsx(c,{sx:{mt:{xs:3,sm:4,md:5},textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(c,{component:"iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5400730334272!2d106.83740207489461!3d10.846466057898201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521af4730391f%3A0xfa0bd6efed6cc3f9!2sS10.06%20Origami%2C%20Vinhomes%20Grandpark!5e0!3m2!1svi!2s!4v1740818652811!5m2!1svi!2s",sx:{width:{xs:"100%",sm:"90%",md:"70%"},height:{xs:200,sm:300,md:400},border:0,borderRadius:"12px",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.2)",mt:2},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsx(c,{sx:{textAlign:"center",mt:{xs:3,sm:4},pt:2,borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(s,{variant:"body2",children:t("footer.copyright")})})]})})},y={vi:{name:"VN",icon:e.jsx(oe,{})},en:{name:"ENG",icon:e.jsx(ne,{})},jp:{name:"JP",icon:e.jsx(te,{})}},be=()=>{const{i18n:n}=w(),{currentLanguage:t,changeLanguage:o}=K(),a=r=>{const i=r.target.value;o(i)};return e.jsx(Q,{value:t,onChange:a,displayEmpty:!0,renderValue:r=>{var i,l;return e.jsxs(c,{display:"flex",alignItems:"center",sx:{gap:1,color:"white"},children:[(i=y[r])==null?void 0:i.icon," ",(l=y[r])==null?void 0:l.name]})},sx:{backgroundColor:"transparent",minWidth:"50px",border:"none",boxShadow:"none","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:Object.entries(y).map(([r,{name:i,icon:l}])=>e.jsxs(Z,{value:r,children:[e.jsx(ee,{children:l}),e.jsx(s,{children:i})]},r))})},ke=()=>{const n=W(),{t}=w(),[o,a]=f.useState(!1);return f.useEffect(()=>{const r=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),e.jsx(re,{position:"fixed",sx:{backgroundColor:o?"rgba(0, 0, 0, 0.8)":"transparent",backdropFilter:o?"blur(8px)":"none",boxShadow:o?2:"none",transition:"all 0.3s ease-in-out",padding:{xs:2,sm:2.5,md:3},margin:0,top:0,left:0,right:0,zIndex:1100},children:e.jsx(B,{maxWidth:"xl",children:e.jsxs(se,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:{xs:"56px",sm:"64px",md:"72px"},padding:0,margin:0},children:[e.jsx(c,{onClick:()=>n("/"),sx:{cursor:"pointer",display:"flex",alignItems:"center"},children:e.jsx("img",{src:"https://www.cinestar.com.vn/pictures/moi/9Logo/white-2018.png",alt:"Logo",style:{height:"40px",objectFit:"contain"}})}),e.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:{xs:1,sm:2,md:3},flex:1,justifyContent:"flex-end",maxWidth:{md:"calc(100% - 100px)"}},children:[e.jsx(b,{onClick:()=>n("/"),variant:"contained",sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"yellow",color:"black",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(H,{}),children:e.jsx("span",{children:t("book_ticket")})}),e.jsx(b,{onClick:()=>n("/"),variant:"contained",sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"#834bff",color:"white",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(D,{}),children:e.jsx("span",{children:t("book_snacks")})}),e.jsx(c,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",gap:2,flexGrow:0,flexShrink:1,justifyContent:"center",borderRadius:20,border:"none",ml:{md:2,lg:4}},children:e.jsx(ae,{variant:"outlined",size:"small",placeholder:t("search"),sx:{backgroundColor:"white",width:{md:"250px",lg:"300px"},border:0,borderRadius:"20px","& .MuiOutlinedInput-root":{borderRadius:"20px","& fieldset":{borderRadius:"20px"}}},InputProps:{endAdornment:e.jsx(x,{size:"small",children:e.jsx(ie,{})})}})}),e.jsx(x,{sx:{display:{xs:"flex",md:"none"},color:"white"},children:e.jsx(ge,{})}),e.jsxs(x,{color:"inherit",sx:{display:{xs:"none",md:"flex"},gap:1},onClick:()=>n("/auth/login"),children:[e.jsx(he,{}),e.jsx(s,{children:t("login")})]}),e.jsx(be,{})]})]})})})};export{Ce as F,ke as H,m as L};
