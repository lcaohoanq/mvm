import{bg as h,bh as W,r as k,j as v,J as R,aj as c,K as G,bi as $,D as M,s as P,G as S}from"./index-Bx2V9Ji_.js";const T=$(),j=h("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:i}=a;return[s.root,s[`maxWidth${c(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),y=a=>W({props:a,name:"MuiContainer",defaultTheme:T}),D=(a,s)=>{const i=o=>M(s,o),{classes:u,fixed:p,disableGutters:l,maxWidth:t}=a,e={root:["root",t&&`maxWidth${c(String(t))}`,p&&"fixed",l&&"disableGutters"]};return G(e,i,u)};function L(a={}){const{createStyledComponent:s=j,useThemeProps:i=y,componentName:u="MuiContainer"}=a,p=s(({theme:t,ownerState:e})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((o,r)=>{const d=r,n=t.breakpoints.values[d];return n!==0&&(o[t.breakpoints.up(d)]={maxWidth:`${n}${t.breakpoints.unit}`}),o},{}),({theme:t,ownerState:e})=>({...e.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...e.maxWidth&&e.maxWidth!=="xs"&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}}));return k.forwardRef(function(e,o){const r=i(e),{className:d,component:n="div",disableGutters:m=!1,fixed:b=!1,maxWidth:f="lg",classes:N,...g}=r,x={...r,component:n,disableGutters:m,fixed:b,maxWidth:f},C=D(x,u);return v.jsx(p,{as:n,ownerState:x,className:R(C.root,d),ref:o,...g})})}const z=L({createStyledComponent:P("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:i}=a;return[s.root,s[`maxWidth${c(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),useThemeProps:a=>S({props:a,name:"MuiContainer"})});export{z as C};
