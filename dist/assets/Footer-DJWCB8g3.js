import{D as S,z as _,aF as x,q as p,r as z,E as H,aG as T,j as e,s as R,G,ah as A,J as O,T as n,ai as P,ak as E,aH as V,c as u,u as N,a as U,B as c,b as I,e as g}from"./index-CkNQ7QnN.js";import{C as X}from"./Container-e79nwNFn.js";import{G as d}from"./Grid-DYKXpsw8.js";function q(o){return _("MuiLink",o)}const Y=S("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),J=({theme:o,ownerState:t})=>{const r=t.color,s=x(o,`palette.${r}.main`,!1)||x(o,`palette.${r}`,!1)||t.color,a=x(o,`palette.${r}.mainChannel`)||x(o,`palette.${r}Channel`);return"vars"in o&&a?`rgba(${a} / 0.4)`:p(s,.4)},B={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},K=o=>{const{classes:t,component:r,focusVisible:s,underline:a}=o,m={root:["root",`underline${A(a)}`,r==="button"&&"button",s&&"focusVisible"]};return O(m,q,t)},Q=R(n,{name:"MuiLink",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,t[`underline${A(r.underline)}`],r.component==="button"&&t.button]}})(P(({theme:o})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:r})=>t==="always"&&r.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(o.palette).filter(E()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":o.vars?`rgba(${o.vars.palette[t].mainChannel} / 0.4)`:p(o.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:p(o.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":o.vars?`rgba(${o.vars.palette.text.secondaryChannel} / 0.4)`:p(o.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(o.vars||o).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Y.focusVisible}`]:{outline:"auto"}}}]}))),h=z.forwardRef(function(t,r){const s=H({props:t,name:"MuiLink"}),a=T(),{className:m,color:i="primary",component:v="a",onBlur:y,onFocus:j,TypographyClasses:D,underline:C="always",variant:k="inherit",sx:f,...w}=s,[M,L]=z.useState(!1),F=l=>{V(l.target)||L(!1),y&&y(l)},$=l=>{V(l.target)&&L(!0),j&&j(l)},b={...s,color:i,component:v,focusVisible:M,underline:C,variant:k},W=K(b);return e.jsx(Q,{color:i,className:G(W.root,m),classes:D,component:v,onBlur:F,onFocus:$,ref:r,ownerState:b,variant:k,...w,sx:[...B[i]===void 0?[{color:i}]:[],...Array.isArray(f)?f:[f]],style:{...w.style,...C==="always"&&i!=="inherit"&&!B[i]&&{"--Link-underlineColor":J({theme:a,ownerState:b})}}})}),Z=u(e.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),ee=u(e.jsx("path",{d:"M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"}),"FastfoodOutlined"),te=u(e.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),oe=u(e.jsx("path",{d:"M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"}),"LocalActivityOutlined"),re=u(e.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),ie=()=>{const o=N(),{t}=U();return e.jsx(c,{sx:{position:"relative",zIndex:1,background:"linear-gradient(to right, rgba(74, 20, 140, 0.9), rgba(235, 195, 50, 0.9))",backdropFilter:"blur(8px)",color:"white",padding:{xs:"20px 10px",sm:"30px 15px",md:"40px 20px"},"&::before":{content:'""',position:"absolute",inset:0,background:"inherit",zIndex:-1}},children:e.jsxs(X,{maxWidth:"lg",children:[e.jsxs(d,{container:!0,spacing:{xs:2,sm:3,md:4},justifyContent:"space-between",children:[e.jsxs(d,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(n,{variant:"h5",fontWeight:"bold",gutterBottom:!0,children:"EIGA"}),e.jsx(n,{variant:"body2",sx:{mb:2},children:t("footer.slogan")}),e.jsx(I,{onClick:()=>o("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"yellow",color:"black",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(oe,{}),children:e.jsx("span",{children:t("footer.book_ticket")})}),e.jsx(I,{onClick:()=>o("/"),variant:"contained",fullWidth:!0,sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"#834bff",color:"white",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(ee,{}),children:e.jsx("span",{children:t("footer.book_snacks")})}),e.jsxs(n,{variant:"subtitle2",gutterBottom:!0,children:[t("footer.social_media"),":"]}),e.jsxs(c,{sx:{display:"flex",gap:1},children:[e.jsx(g,{color:"inherit",size:"small",children:e.jsx(Z,{})}),e.jsx(g,{color:"inherit",size:"small",children:e.jsx(re,{})}),e.jsx(g,{color:"inherit",size:"small",children:e.jsx(te,{})})]})]}),e.jsxs(d,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(n,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.account.title")}),["login","register","membership"].map(r=>e.jsx(n,{variant:"body2",gutterBottom:!0,children:e.jsx(h,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.account.${r}`)})},r)),e.jsx(n,{variant:"h6",fontWeight:"bold",gutterBottom:!0,sx:{mt:3},children:t("footer.movies.title")}),["now_showing","coming_soon","special_screening"].map(r=>e.jsx(n,{variant:"body2",gutterBottom:!0,children:e.jsx(h,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.movies.${r}`)})},r))]}),e.jsxs(d,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(n,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.theaters.title")}),["all_theaters","quoc_thanh","hai_ba_trung","binh_duong","da_lat"].map(r=>e.jsx(n,{variant:"body2",gutterBottom:!0,children:e.jsx(h,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.theaters.${r}`)})},r))]}),e.jsxs(d,{item:!0,xs:12,sm:6,md:3,children:[e.jsx(n,{variant:"h6",fontWeight:"bold",gutterBottom:!0,children:t("footer.legal.title")}),["terms","privacy","faq","about_us","contact"].map(r=>e.jsx(n,{variant:"body2",gutterBottom:!0,children:e.jsx(h,{href:"#",color:"inherit",sx:{textDecoration:"none"},children:t(`footer.legal.${r}`)})},r))]})]}),e.jsx(c,{sx:{mt:{xs:3,sm:4,md:5},textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(c,{component:"iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5400730334272!2d106.83740207489461!3d10.846466057898201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521af4730391f%3A0xfa0bd6efed6cc3f9!2sS10.06%20Origami%2C%20Vinhomes%20Grandpark!5e0!3m2!1svi!2s!4v1740818652811!5m2!1svi!2s",sx:{width:{xs:"100%",sm:"90%",md:"70%"},height:{xs:200,sm:300,md:400},border:0,borderRadius:"12px",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.2)",mt:2},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsx(c,{sx:{textAlign:"center",mt:{xs:3,sm:4},pt:2,borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx(n,{variant:"body2",children:t("footer.copyright")})})]})})};export{ie as F,h as L,oe as a,ee as b};
