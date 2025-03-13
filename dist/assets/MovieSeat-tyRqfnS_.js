import{r as m,j as e,B as t,T as i,b as S,a0 as T,V as j,az as R,u as B}from"./index-B-d8ykXz.js";import{E as x}from"./EventSeat-CJ_Fdc07.js";import{S as v}from"./StepTracker-tEjuevnt.js";import{H as D,F as A}from"./Header-97jcHU_v.js";import{C as E}from"./Container-DJZ9rzAc.js";import"./Stepper-BrzRQ0eE.js";import"./Grid-DU_X7yuI.js";import"./Search-BocjW-Km.js";const N=({showTimeId:c,selectedSeats:o,setSelectedSeats:h})=>{const[g,f]=m.useState([]),[u,l]=m.useState(!0);m.useEffect(()=>{(async()=>{try{l(!0);const a=await T.get(`https://localhost:7119/api/ticketdetail/getbyroomid/${c}`);a.data&&a.data.data?f(a.data.data):j.error("Không tìm thấy thông tin ghế.")}catch{j.error("Lỗi khi tải danh sách ghế.")}finally{l(!1)}})()},[c]);const b=s=>{const a=`${s.seat.atRow}${s.seat.atColumn}`,r={id:s.seatId,name:a,version:s.version};o.some(n=>n.id===s.seatId)?h(o.filter(n=>n.id!==s.seatId)):h([...o,r])};return e.jsxs(t,{sx:{backgroundColor:"#0B0D1A",color:"white",pb:4,position:"relative"},children:[e.jsxs(t,{sx:{textAlign:"center",mb:2},children:[e.jsx(t,{sx:{margin:"0 auto",width:"80%",height:"70px",borderTop:"6px solid #fff",borderRadius:"50% 50% 0 0"}}),e.jsx(i,{variant:"h6",sx:{mt:-2,color:"white"},children:"Màn hình"})]}),e.jsxs(t,{sx:{position:"absolute",top:"50%",right:20,transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:2,padding:2,borderRadius:2},children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"red"}}),e.jsx(i,{variant:"body2",children:"Đã Đặt"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"white"}}),e.jsx(i,{variant:"body2",children:"Ghế Trống"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"green"}}),e.jsx(i,{variant:"body2",children:"Đang Chọn"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(x,{sx:{color:"blue"}}),e.jsx(i,{variant:"body2",children:"Ghế VIP"})]})]}),e.jsx(t,{sx:{display:"flex",justifyContent:"center",alignItems:"center",p:2},children:e.jsx(t,{sx:{maxWidth:600,display:"flex",flexDirection:"column",gap:2},children:Object.entries(g.reduce((s,a)=>(s[a.seat.atRow]||(s[a.seat.atRow]=[]),s[a.seat.atRow].push(a),s),{})).map(([s,a])=>e.jsx(t,{sx:{display:"flex",justifyContent:"center",gap:4},children:a.map(r=>{const n=o.some(I=>I.id===r.seatId),C=r.status!==0,w=r.seat.seatType.typeName==="VIP";let p="white",d="transparent",y=!1;return n?(p="green",d="rgba(0, 255, 0, 0.2)"):C?(p="red",d="rgba(255, 0, 0, 0.2)",y=!0):w&&(p="blue",d="rgba(0, 0, 255, 0.2)"),e.jsx(S,{variant:"outlined",disabled:y,onClick:()=>b(r),sx:{minWidth:"50px",minHeight:"50px",backgroundColor:d,color:"white",whiteSpace:"normal",p:.5,fontSize:"0.7rem",textTransform:"none","&:hover":{backgroundColor:n?"rgba(0, 255, 0, 0.4)":"rgba(255,255,255,0.2)"},"&.Mui-disabled":{backgroundColor:d,color:"white"}},children:e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(x,{sx:{color:p}}),e.jsxs(i,{variant:"body2",align:"center",children:[r.seat.atRow,r.seat.atColumn]})]})},r.seatId)})},s))})})]})},G=()=>{const c=R(),o=B(),{showTimeId:h,selectedTime:g,selectedDate:f,tickets:u}=c.state||{showTimeId:"",selectedTime:"Not selected",selectedDate:"Not selected",tickets:[]},[l,b]=m.useState([]),s=(u||[]).reduce((r,n)=>r+(n.quantity||0),0),a=()=>{if(l.length!==s){j.error(`Vui lòng chọn đúng ${s} ghế.`);return}o("/ticket/payment",{state:{selectedDate:f,selectedTime:g,tickets:u,seats:l.map(r=>r.name)}})};return e.jsxs(t,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[e.jsx(D,{}),e.jsx(E,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(t,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsx(t,{sx:{display:{xs:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:"250px",flexShrink:0},children:e.jsx(v,{currentStep:2})}),e.jsxs(t,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},pb:4},children:[e.jsx(t,{sx:{display:{xs:"block",md:"none"},mb:2},children:e.jsx(v,{currentStep:2})}),e.jsxs(t,{sx:{mt:2},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",gutterBottom:!0,align:"center",fontFamily:"JetBrains Mono",sx:{textTransform:"uppercase",mb:4},children:"Chọn Ghế"}),e.jsxs(t,{sx:{backgroundColor:"rgba(11, 13, 26, 0.6)",borderRadius:2,p:3,mb:4,boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.25)"},children:[e.jsx(N,{showTimeId:h,selectedSeats:l,setSelectedSeats:b}),e.jsx(i,{variant:"body2",sx:{mt:2,textAlign:"center",color:"primary.light"},children:`Bạn cần chọn đúng ${s} ghế.`})]}),e.jsx(t,{sx:{display:"flex",justifyContent:"center",mt:4},children:e.jsx(S,{variant:"contained",color:"primary",onClick:a,sx:{px:4,py:1,fontSize:"1rem",borderRadius:2},children:"Tiếp tục"})})]})]})]})}),e.jsx(A,{})]})};export{G as default};
