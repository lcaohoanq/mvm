import{u as h,r as o,j as e,A as f,t as j,B as s,v as S,w as T,x as v,y as g,H as k,V as n}from"./index-DktBxCPL.js";import{M as b,S as w,T as y}from"./TicketPrice-C-AoHrri.js";import{C}from"./Container-usQ74qut.js";import"./AccessTime-CB_GrNvH.js";import"./Grid-BpcGtJO2.js";function N({disableCustomTheme:r=!1}){const c=h(),[l,x]=o.useState(""),[a,d]=o.useState(null),i="321fb7db-6361-4c64-8e16-fedfec9736a4",m=t=>{if(!a){n.error("Vui lòng chọn suất chiếu!");return}if(t.reduce((p,u)=>p+(u.quantity||0),0)===0){n.error("Vui lòng chọn ít nhất 1 vé!");return}c("/ticket/movie-seat",{state:{movieId:i,selectedDate:l,selectedTime:a,tickets:t}})};return e.jsxs(f,{disableCustomTheme:r,children:[e.jsx(j,{enableColorScheme:!0}),e.jsxs(s,{sx:{display:"flex",height:"100vh"},children:[e.jsx(S,{}),e.jsxs(s,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(T,{}),e.jsx(s,{component:"main",sx:t=>({flexGrow:1,backgroundColor:v(t.palette.background.default,1),overflowY:"auto",px:3,py:2}),children:e.jsxs(g,{spacing:2,alignItems:"center",children:[e.jsx(k,{}),e.jsx(C,{sx:{paddingTop:{xs:"80px",sm:"90px",md:"100px"},position:"relative",zIndex:1,px:{xs:2,sm:3,md:4}},children:e.jsxs(s,{sx:{color:"white",mb:3,mt:2},children:[e.jsx(b,{}),e.jsx(w,{movieId:i,onSelectDate:t=>x(t),onSelectTime:t=>d(t)}),e.jsx(y,{onNext:m})]})})]})})]})]})]})}export{N as default};
