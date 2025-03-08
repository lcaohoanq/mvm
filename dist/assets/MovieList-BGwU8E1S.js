import{D as X,E as J,ae as Y,c as K,j as n,r as U,G as _,af as Z,ag as h,ah as aa,ai as ta,s as w,J as T,aj as I,K as q,ak as W,al as ea,t as z,am as G,B,an as sa,T as E,b as oa}from"./index-Bx2V9Ji_.js";import{G as D}from"./Grid-4rHGqyDh.js";import{C as na}from"./Container-WB8DfVKj.js";function ia(a){return X("MuiPagination",a)}J("MuiPagination",["root","ul","outlined","text"]);function ra(a={}){const{boundaryCount:t=1,componentName:e="usePagination",count:s=1,defaultPage:b=1,disabled:c=!1,hideNextButton:u=!1,hidePrevButton:p=!1,onChange:d,page:l,showFirstButton:f=!1,showLastButton:R=!1,siblingCount:C=1,...$}=a,[g,v]=Y({controlled:l,default:b,name:e,state:"page"}),m=(o,i)=>{l||v(i),d&&d(o,i)},S=(o,i)=>{const O=i-o+1;return Array.from({length:O},(A,L)=>o+L)},x=S(1,Math.min(t,s)),N=S(Math.max(s-t+1,t+1),s),P=Math.max(Math.min(g-C,s-t-C*2-1),t+2),y=Math.min(Math.max(g+C,t+C*2+2),s-t-1),M=[...f?["first"]:[],...p?[]:["previous"],...x,...P>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...S(P,y),...y<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...N,...u?[]:["next"],...R?["last"]:[]],k=o=>{switch(o){case"first":return 1;case"previous":return g-1;case"next":return g+1;case"last":return s;default:return null}};return{items:M.map(o=>typeof o=="number"?{onClick:i=>{m(i,o)},type:"page",page:o,selected:o===g,disabled:c,"aria-current":o===g?"page":void 0}:{onClick:i=>{m(i,k(o))},type:o,page:k(o),selected:!1,disabled:c||!o.includes("ellipsis")&&(o==="next"||o==="last"?g>=s:g<=1)}),...$}}function la(a){return X("MuiPaginationItem",a)}const r=J("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),ca=K(n.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),pa=K(n.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),H=(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],t[`size${I(e.size)}`],e.variant==="text"&&t[`text${I(e.color)}`],e.variant==="outlined"&&t[`outlined${I(e.color)}`],e.shape==="rounded"&&t.rounded,e.type==="page"&&t.page,(e.type==="start-ellipsis"||e.type==="end-ellipsis")&&t.ellipsis,(e.type==="previous"||e.type==="next")&&t.previousNext,(e.type==="first"||e.type==="last")&&t.firstLast]},da=a=>{const{classes:t,color:e,disabled:s,selected:b,size:c,shape:u,type:p,variant:d}=a,l={root:["root",`size${I(c)}`,d,u,e!=="standard"&&`color${I(e)}`,e!=="standard"&&`${d}${I(e)}`,s&&"disabled",b&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return q(l,la,t)},ua=w("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(W(({theme:a})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${r.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},variants:[{props:{size:"small"},style:{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)}}]}))),ga=w(ea,{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(W(({theme:a})=>({...a.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${r.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${r.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${r.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${r.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}},variants:[{props:{size:"small"},style:{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)}},{props:{shape:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"outlined"},style:{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${r.selected}`]:{[`&.${r.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}}}},{props:{variant:"text"},style:{[`&.${r.selected}`]:{[`&.${r.disabled}`]:{color:(a.vars||a).palette.action.disabled}}}},...Object.entries(a.palette).filter(G(["dark","contrastText"])).map(([t])=>({props:{variant:"text",color:t},style:{[`&.${r.selected}`]:{color:(a.vars||a).palette[t].contrastText,backgroundColor:(a.vars||a).palette[t].main,"&:hover":{backgroundColor:(a.vars||a).palette[t].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t].main}},[`&.${r.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t].dark},[`&.${r.disabled}`]:{color:(a.vars||a).palette.action.disabled}}}})),...Object.entries(a.palette).filter(G(["light"])).map(([t])=>({props:{variant:"outlined",color:t},style:{[`&.${r.selected}`]:{color:(a.vars||a).palette[t].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t].mainChannel} / 0.5)`:z(a.palette[t].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:z(a.palette[t].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}}}}))]}))),va=w("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(W(({theme:a})=>({fontSize:a.typography.pxToRem(20),margin:"0 -8px",variants:[{props:{size:"small"},style:{fontSize:a.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:a.typography.pxToRem(22)}}]}))),xa=U.forwardRef(function(t,e){const s=_({props:t,name:"MuiPaginationItem"}),{className:b,color:c="standard",component:u,components:p={},disabled:d=!1,page:l,selected:f=!1,shape:R="circular",size:C="medium",slots:$={},slotProps:g={},type:v="page",variant:m="text",...S}=s,x={...s,color:c,disabled:d,selected:f,shape:R,size:C,type:v,variant:m},N=Z(),P=da(x),y={slots:{previous:$.previous??p.previous,next:$.next??p.next,first:$.first??p.first,last:$.last??p.last},slotProps:g},[M,k]=h("previous",{elementType:ca,externalForwardedProps:y,ownerState:x}),[j,o]=h("next",{elementType:pa,externalForwardedProps:y,ownerState:x}),[i,O]=h("first",{elementType:aa,externalForwardedProps:y,ownerState:x}),[A,L]=h("last",{elementType:ta,externalForwardedProps:y,ownerState:x}),V=N?{previous:"next",next:"previous",first:"last",last:"first"}[v]:v,F={previous:M,next:j,first:i,last:A}[V],Q={previous:k,next:o,first:O,last:L}[V];return v==="start-ellipsis"||v==="end-ellipsis"?n.jsx(ua,{ref:e,ownerState:x,className:T(P.root,b),children:"…"}):n.jsxs(ga,{ref:e,ownerState:x,component:u,disabled:d,className:T(P.root,b),...S,children:[v==="page"&&l,F?n.jsx(va,{...Q,className:P.icon,as:F}):null]})}),ba=a=>{const{classes:t,variant:e}=a;return q({root:["root",e],ul:["ul"]},ia,t)},fa=w("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant]]}})({}),ya=w("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Pa(a,t,e){return a==="page"?`${e?"":"Go to "}page ${t}`:`Go to ${a} page`}const Ca=U.forwardRef(function(t,e){const s=_({props:t,name:"MuiPagination"}),{boundaryCount:b=1,className:c,color:u="standard",count:p=1,defaultPage:d=1,disabled:l=!1,getItemAriaLabel:f=Pa,hideNextButton:R=!1,hidePrevButton:C=!1,onChange:$,page:g,renderItem:v=i=>n.jsx(xa,{...i}),shape:m="circular",showFirstButton:S=!1,showLastButton:x=!1,siblingCount:N=1,size:P="medium",variant:y="text",...M}=s,{items:k}=ra({...s,componentName:"Pagination"}),j={...s,boundaryCount:b,color:u,count:p,defaultPage:d,disabled:l,getItemAriaLabel:f,hideNextButton:R,hidePrevButton:C,renderItem:v,shape:m,showFirstButton:S,showLastButton:x,siblingCount:N,size:P,variant:y},o=ba(j);return n.jsx(fa,{"aria-label":"pagination navigation",className:T(o.root,c),ownerState:j,ref:e,...M,children:n.jsx(ya,{className:o.ul,ownerState:j,children:k.map((i,O)=>n.jsx("li",{children:v({...i,color:u,"aria-label":f(i.type,i.page,i.selected),shape:m,size:P,variant:y})},O))})})}),ka=({movies:a,title:t,buttonText:e})=>{const[s,b]=U.useState(0),c=12,u=s*c,p=a.slice(u,u+c).map((l,f)=>n.jsx(D,{item:!0,xs:12,sm:6,md:3,children:n.jsxs(B,{className:"movie-card",children:[n.jsxs(sa,{to:"/",children:[n.jsx("img",{src:l.image,alt:l.title,className:"movie-image"}),n.jsxs(E,{variant:"h6",className:"movie-title",children:[n.jsx(B,{sx:{mb:2}}),l.title]})]}),n.jsx(B,{sx:{mb:2}}),n.jsx(oa,{variant:"contained",color:"warning",className:"book-button",sx:{position:"relative",overflow:"hidden",color:"black",transition:"color 0.5s ease-in-out","&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1}},children:n.jsx("span",{children:e})})]})},f)),d=Math.ceil(a.length/c);return n.jsxs(na,{sx:{mt:4,textAlign:"center"},children:[n.jsx(E,{variant:"h4",fontWeight:"bold",sx:{mb:2},children:t}),n.jsx(D,{container:!0,spacing:2,children:p}),n.jsx(Ca,{count:d,color:"secondary",page:s+1,onChange:(l,f)=>b(f-1),sx:{"& .Mui-selected":{height:"40px",width:"40px",borderRadius:"50%"},mt:4,mb:4,display:"flex",justifyContent:"center","& .MuiPaginationItem-root":{fontSize:"1.4rem",color:"white",margin:"0 10px"}}})]})};export{ka as M};
