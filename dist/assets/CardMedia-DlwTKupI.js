import{z as M,D as g,r as v,E as y,j as f,s as E,G as I,J as b}from"./index-CYV1e2PH.js";function x(o){return M("MuiCardMedia",o)}g("MuiCardMedia",["root","media","img"]);const N=o=>{const{classes:e,isMediaComponent:t,isImageComponent:s}=o;return b({root:["root",t&&"media",s&&"img"]},x,e)},R=E("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:s,isImageComponent:a}=t;return[e.root,s&&e.media,a&&e.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),S=["video","audio","picture","iframe","img"],k=["picture","img"],w=v.forwardRef(function(e,t){const s=y({props:e,name:"MuiCardMedia"}),{children:a,className:m,component:i="div",image:r,src:l,style:c,...p}=s,n=S.includes(i),u=!n&&r?{backgroundImage:`url("${r}")`,...c}:c,d={...s,component:i,isMediaComponent:n,isImageComponent:k.includes(i)},C=N(d);return f.jsx(R,{className:I(C.root,m),as:i,role:!n&&r?"img":void 0,ref:t,style:u,ownerState:d,src:n?r||l:void 0,...p,children:a})});export{w as C};
