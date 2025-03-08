import{c as C,j as e,B as t,T as r,b as y,ay as k,u as S,r as I,V as B}from"./index-C48l0Kxn.js";import{E as x}from"./EventSeat-BfkLnhGi.js";import{S as D}from"./StepTracker-RzYsdeRS.js";import{F as w}from"./LanguageSelector-DvWeYh1g.js";import{C as T}from"./Container-CQurKiEl.js";import{G as u}from"./Grid-Dfs7uwso.js";import"./Stepper-BXV8CGxJ.js";const A=C(e.jsx("path",{d:"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.89-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81V14h12v-2.03c0-1.3.84-2.4 2-2.81V7c0-1.1-.9-2-2-2"}),"Weekend"),b=["A","B","C","D","E","F"],V=[1,2,3,4,5,6,7],E=({selectedSeats:i,setSelectedSeats:d})=>{const g=["A1","B2","C2","D2","A7","A6","C5","C6","C7"],m=["C3","C4","D3","D4"],h=s=>{i.includes(s)?d(i.filter(o=>o!==s)):d([...i,s])};return e.jsxs(t,{sx:{backgroundColor:"#0B0D1A",color:"white",pb:4},children:[e.jsxs(t,{sx:{textAlign:"center",mb:2},children:[e.jsx(t,{sx:{margin:"0 auto",width:"80%",height:"70px",borderTop:"6px solid #fff",borderRadius:"50% 50% 0 0"}}),e.jsx(r,{variant:"h6",sx:{mt:-2,color:"white"},children:"Màn hình"})]}),e.jsxs(t,{sx:{display:"flex",justifyContent:"center",gap:4,alignItems:"center"},children:[e.jsxs(t,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"red"}}),e.jsx(r,{variant:"body2",children:"Đã Đặt"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"white"}}),e.jsx(r,{variant:"body2",children:"Ghế Trống"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"green"}}),e.jsx(r,{variant:"body2",children:"Đang Chọn"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"blue"}}),e.jsx(r,{variant:"body2",children:"Ghế VIP"})]})]}),e.jsx(t,{sx:{maxWidth:600},children:e.jsx(t,{sx:{display:"flex",flexDirection:"column",gap:2},children:b.map((s,o)=>e.jsx(t,{sx:{display:"flex",justifyContent:"center",gap:3},children:V.map(c=>{const n=`${s}${c}`,p=i.includes(n),j=g.includes(n),v=m.includes(n);let a="white",l="transparent",f=!1;return p?(a="green",l="rgba(0, 255, 0, 0.2)"):j?(a="red",l="rgba(255, 0, 0, 0.2)",f=!0):v&&(a="blue",l="rgba(0, 0, 255, 0.2)"),e.jsx(y,{variant:"outlined",disabled:f,onClick:()=>h(n),sx:{minWidth:"50px",minHeight:"50px",backgroundColor:l,color:"white",whiteSpace:"normal",p:.5,fontSize:"0.7rem",textTransform:"none","&:hover":{backgroundColor:p?"rgba(0, 255, 0, 0.4)":"rgba(255,255,255,0.2)"},"&.Mui-disabled":{backgroundColor:l,color:"white"}},children:e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[o===b.length-1?e.jsx(A,{sx:{color:a}}):e.jsx(x,{sx:{color:a}}),e.jsx(r,{variant:"body2",align:"center",children:n})]})},n)})},s))})})]})]})},z=()=>{const i=k(),d=S(),{selectedTime:g,selectedDate:m,tickets:h}=i.state||{selectedTime:"Not selected",selectedDate:"Not selected",tickets:[]},[s,o]=I.useState([]),c=(h||[]).reduce((p,j)=>p+(j.quantity||0),0),n=()=>{if(s.length!==c){B.error(`Vui lòng chọn đúng ${c} ghế.`);return}d("/ticket/payment",{state:{selectedDate:m,selectedTime:g,tickets:h,seats:s}})};return e.jsxs(e.Fragment,{children:[e.jsx(t,{sx:{position:"sticky",top:0,zIndex:999},children:e.jsx(D,{currentStep:2})}),e.jsx(t,{sx:{backgroundColor:"#0B0D1A",color:"white",py:10,mt:5,textAlign:"center"},children:e.jsxs(T,{children:[e.jsxs(u,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",border:1,children:[e.jsx(u,{item:!0,xs:12,children:e.jsx(r,{variant:"h4",fontWeight:"bold",gutterBottom:!0,align:"center",fontFamily:"JetBrains Mono",sx:{textTransform:"uppercase",mb:4},children:"Chọn Ghế"})}),e.jsxs(u,{item:!0,xs:12,md:8,children:[e.jsx(E,{selectedSeats:s,setSelectedSeats:o}),e.jsx(r,{variant:"body2",sx:{mt:2},children:`Bạn cần chọn đúng ${c} ghế.`})]})]}),e.jsx(t,{sx:{mt:4},children:e.jsx(y,{variant:"contained",color:"primary",onClick:n,children:"Next"})})]})}),e.jsx(w,{})]})};export{z as default};
