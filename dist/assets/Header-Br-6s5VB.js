import{u as c,a as x,r as l,j as e,aq as p,ar as h,B as s,b as d,i as f,I as r,T as m}from"./index-Bx2V9Ji_.js";import{a as u,b as g,M as b,A as j,c as w}from"./LanguageSelector-DUnHOPMh.js";import{S as v}from"./Search-Cbu8oC4Y.js";import{C as I}from"./Container-WB8DfVKj.js";const L=()=>{const o=c(),{t:n}=x(),[t,i]=l.useState(!1);return l.useEffect(()=>{const a=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsx(p,{position:"fixed",sx:{backgroundColor:t?"rgba(0, 0, 0, 0.8)":"transparent",backdropFilter:t?"blur(8px)":"none",boxShadow:t?2:"none",transition:"all 0.3s ease-in-out",padding:{xs:2,sm:2.5,md:3},margin:0,top:0,left:0,right:0,zIndex:1100},children:e.jsx(I,{maxWidth:"xl",children:e.jsxs(h,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:{xs:"56px",sm:"64px",md:"72px"},padding:0,margin:0},children:[e.jsx(s,{onClick:()=>o("/"),sx:{cursor:"pointer",display:"flex",alignItems:"center"},children:e.jsx("img",{src:"https://www.cinestar.com.vn/pictures/moi/9Logo/white-2018.png",alt:"Logo",style:{height:"40px",objectFit:"contain"}})}),e.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:{xs:1,sm:2,md:3},flex:1,justifyContent:"flex-end",maxWidth:{md:"calc(100% - 100px)"}},children:[e.jsx(d,{onClick:()=>o("/"),variant:"contained",sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"yellow",color:"black",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(u,{}),children:e.jsx("span",{children:n("book_ticket")})}),e.jsx(d,{onClick:()=>o("/"),variant:"contained",sx:{display:{xs:"none",md:"flex"},fontWeight:"bold",position:"relative",overflow:"hidden",bgcolor:"#834bff",color:"white",transition:"color 0.5s ease-in-out",minWidth:"auto",px:2,"&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1,whiteSpace:"nowrap"}},startIcon:e.jsx(g,{}),children:e.jsx("span",{children:n("book_snacks")})}),e.jsx(s,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",gap:2,flexGrow:0,flexShrink:1,justifyContent:"center",borderRadius:20,border:"none",ml:{md:2,lg:4}},children:e.jsx(f,{variant:"outlined",size:"small",placeholder:n("search"),sx:{backgroundColor:"white",width:{md:"250px",lg:"300px"},border:0,borderRadius:"20px","& .MuiOutlinedInput-root":{borderRadius:"20px","& fieldset":{borderRadius:"20px"}}},InputProps:{endAdornment:e.jsx(r,{size:"small",children:e.jsx(v,{})})}})}),e.jsx(r,{sx:{display:{xs:"flex",md:"none"},color:"white"},children:e.jsx(b,{})}),e.jsxs(r,{color:"inherit",sx:{display:{xs:"none",md:"flex"},gap:1},onClick:()=>o("/auth/login"),children:[e.jsx(j,{}),e.jsx(m,{children:n("login")})]}),e.jsx(w,{})]})]})})})};export{L as H};
