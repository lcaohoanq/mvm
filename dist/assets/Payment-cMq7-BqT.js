import{a7 as xe,u as ue,a as he,g as pe,a6 as ge,r as a,j as e,B as l,H as be,C as fe,x as p,T as s,V as g,G as x,O as ye,o as je,p as ve,l as k,b as U,i as Se,e as Y}from"./index-BZsQtJZU.js";import{S as K}from"./StepTracker-CUuMLTQN.js";import{S as Q}from"./SeatCountdown-Ig18PwoG.js";import"./Stepper-DWCVRqzQ.js";import"./CancelOutlined-BJKoDfIG.js";import"./CheckCircleOutline-DssXacBJ.js";import"./AccessTime-BLOdMLf6.js";import"./EventSeat-DObcwZhr.js";const Ee=()=>{const X=xe(),b=ue(),{t:r}=he(),{userDetails:m}=pe(),{connection:u,isConnected:v}=ge(),[B,Z]=a.useState([]),[c,E]=a.useState(null),[ee,R]=a.useState(!1),{movieId:V,selectedTime:L="Not selected",selectedDate:P="Not selected",tickets:w=[],seats:W=[],showTimeId:te="",selectedSeatsInfo:n=[],movieData:d=null,roomName:F="",lastSelectionTime:f,resetCounter:C=0}=X.state||{},re=(d==null?void 0:d.movieName)||r("payment.movie.default"),oe=P,se=L,h=te||sessionStorage.getItem("currentShowTimeId")||"";a.useEffect(()=>{const t=o=>{if(u&&v&&h&&(n!=null&&n.length)){o.preventDefault(),o.returnValue="";const i=m==null?void 0:m.userId,j=JSON.stringify({ticketRequests:n.map(G=>({TicketId:G.ticketId,Version:G.version})),showtimeId:h,userId:i});return navigator.sendBeacon("/api/seats/release-pending",j),""}};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[u,v,h,n]),a.useEffect(()=>()=>{if(u&&v&&(n==null?void 0:n.length)>0){const t=m==null?void 0:m.userId,o=n.map(i=>({TicketId:i.ticketId,Version:i.version}));u.invoke("ReleasePendingSeats",o,h,t).catch(i=>console.error("Failed to release seats on unmount:",i))}},[u,v,n,h]);const ne=async()=>{if(u&&(n==null?void 0:n.length)>0)try{const t=m==null?void 0:m.userId,o=n.map(i=>({TicketId:i.ticketId,Version:i.version}));await u.invoke("ReleasePendingSeats",o,h,t),g.success(r("toast.success.seat.cancel_booking")),b(-1)}catch(t){console.error("Error releasing seats:",t),g.error(r("toast.error.seat.cancel_booking")),b(-1)}else b(-1)};a.useEffect(()=>{(async()=>{R(!0);try{const o=await Y.get("promotions"),i=o.data.data||o.data||[];Z(i),console.log("Loaded promotions:",i)}catch(o){console.error("Failed to load promotions",o),g.error(r("toast.error.promotion.loading"))}finally{R(!1)}})()},[]);const ie=a.useCallback(t=>{if(!c)return t;const o=t*(c.discount/100);return Math.max(0,t-o)},[c]),y=(w||[]).reduce((t,o)=>t+o.price*(o.quantity||0),0),_=ie(y),S=_,[I,ae]=a.useState(""),[T,le]=a.useState(""),[z,ce]=a.useState(""),[N,de]=a.useState(""),[O,H]=a.useState(!1),[M,D]=a.useState(!1),[$,A]=a.useState(!1),[q,J]=a.useState(!1),me=async()=>{let t=!1;if(I.trim()?H(!1):(H(!0),t=!0),T.trim()?D(!1):(D(!0),t=!0),z.trim()?A(!1):(A(!0),t=!0),N.trim()?J(!1):(J(!0),t=!0),!t)try{const o={totalTicket:w.length,amount:S,promotionId:(c==null?void 0:c.promotionId)||null,tickets:n.map(j=>j.ticketId)},i=await Y.post(`vnpay/createpaymenturl?money=${S}&description=${encodeURIComponent(`Payment for movie tickets: ${d==null?void 0:d.movieName}`)}&userId=${m==null?void 0:m.userId}`,o);sessionStorage.setItem("bookingInfo",JSON.stringify({selectedTime:L,selectedDate:P,tickets:w,seats:W,totalPrice:y,total:S,fullName:I,email:T,idNumber:z,phone:N,selectedSeatsInfo:n,lastSelectionTime:f,resetCounter:C,movieData:d,roomName:F,promotion:c})),window.location.href=i.data}catch(o){console.error(o),g.error(r("toast.error.ticket.booking"));return}};return e.jsxs(l,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[e.jsx(be,{}),e.jsx(fe,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(l,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsxs(l,{sx:{display:{xs:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:"250px",flexShrink:0},children:[f&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",mb:3},children:e.jsxs(p,{elevation:3,sx:{p:2,backgroundColor:"rgba(27, 38, 53, 0.8)",borderRadius:2},children:[e.jsx(s,{variant:"subtitle1",align:"center",sx:{mb:1,color:"#fbc02d"},children:r("payment.timer")}),e.jsx(Q,{seatId:"payment-timer",seatName:"Timer",startTime:f,resetTrigger:C,onTimeout:()=>{g.error(r("toast.error.seat.remainder")),b(`/ticket/${V}`,{replace:!0})}})]})}),e.jsx(K,{currentStep:3})]}),e.jsxs(l,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},pb:4},children:[e.jsxs(l,{sx:{display:{xs:"block",md:"none"},mb:2},children:[f&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",mb:3},children:e.jsxs(p,{elevation:3,sx:{p:2,backgroundColor:"rgba(27, 38, 53, 0.8)",borderRadius:2},children:[e.jsx(s,{variant:"subtitle1",align:"center",sx:{mb:1,color:"#fbc02d"},children:r("payment.timer")}),e.jsx(Q,{seatId:"payment-timer",seatName:"Timer",startTime:f,resetTrigger:C,onTimeout:()=>{g.error(r("toast.error.seat.remainder")),b(`/ticket/${V}`,{replace:!0})}})]})}),e.jsx(K,{currentStep:3})]}),e.jsx(s,{variant:"h4",fontWeight:"bold",align:"center",gutterBottom:!0,fontFamily:"JetBrains Mono",sx:{textTransform:"uppercase",mb:2,letterSpacing:"1.2px",lineHeight:"1.5"},children:r("payment.ticket.payment")}),e.jsxs(x,{container:!0,spacing:4,children:[e.jsx(x,{item:!0,xs:12,md:4,children:e.jsx(p,{sx:{p:2,backgroundColor:"rgba(28, 28, 28, 0.8)",color:"white"},children:e.jsx(l,{component:"img",src:d==null?void 0:d.image,alt:(d==null?void 0:d.movieName)||r("payment.movie.poster"),sx:{width:"100%",borderRadius:2,objectFit:"cover",maxHeight:500,mb:2}})})}),e.jsxs(x,{item:!0,xs:12,md:8,children:[e.jsx(p,{sx:{p:{xs:3,md:4},backgroundColor:"rgba(28, 28, 28, 0.8)",color:"white",mb:{xs:3,md:4}},children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsxs(x,{item:!0,xs:12,sm:6,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,sx:{fontSize:{xs:"1.3rem",md:"1.5rem"}},children:r("payment.movie.description")}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.movie.name")})," ",re]}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.movie.room")})," ",F]}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.showtime.day")})," ",oe]}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.showtime.hour")})," ",se]})]}),e.jsxs(x,{item:!0,xs:12,sm:6,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,sx:{fontSize:{xs:"1.3rem",md:"1.5rem"}},children:r("payment.ticket.infor")}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.ticket.seat")})," ",W.join(", ")||"Chưa chọn ghế"]}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.ticket.price")})," ",y.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]}),e.jsxs(s,{variant:"body1",gutterBottom:!0,sx:{color:"#fbc02d",fontWeight:"bold",fontSize:{xs:"1.2rem",md:"1.4rem"},mt:1},children:[e.jsx("strong",{children:r("payment.total_amount")})," ",S.toLocaleString("vi-VN",{style:"currency",currency:"VND"}),c&&e.jsxs(s,{component:"span",sx:{color:"#4caf50",ml:1,fontSize:{xs:"1rem",md:"1.1rem"}},children:["(",r("payment.promotion.used"),")"]})]}),e.jsxs(p,{sx:{p:{xs:2,md:3},backgroundColor:"rgba(28, 28, 28, 0.8)",color:"white",mb:{xs:3,md:4}},children:[e.jsx(s,{variant:"h6",gutterBottom:!0,sx:{fontSize:{xs:"1.3rem",md:"1.5rem"}},children:r("payment.promotion.title")}),ee?e.jsx(l,{sx:{display:"flex",justifyContent:"center",my:2},children:e.jsx(ye,{size:28,sx:{color:"#fbc02d"}})}):B.length===0?e.jsx(s,{variant:"body2",color:"text.secondary",sx:{fontStyle:"italic",fontSize:{xs:"1rem",md:"1.1rem"}},children:r("payment.promotion.notfound")}):e.jsx(l,{sx:{maxHeight:"250px",overflowY:"auto",pr:1,"&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",borderRadius:"4px"},"&::-webkit-scrollbar-thumb":{background:"rgba(255,255,255,0.2)",borderRadius:"4px","&:hover":{background:"rgba(255,255,255,0.3)"}}},children:B.map(t=>{const o=new Date(t.toDate)<new Date,i=(c==null?void 0:c.promotionId)===t.promotionId;return e.jsx(je,{disabled:o,control:e.jsx(ve,{checked:i,onChange:j=>{j.target.checked?o||E(t):E(null)},sx:{color:o?"grey":"white","&.Mui-checked":{color:"#fbc02d"}}}),label:e.jsxs(l,{sx:{backgroundColor:o?"rgba(0,0,0,0.2)":"transparent",p:1,borderRadius:1},children:[e.jsx(s,{variant:"body1",fontWeight:"bold",sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:t.promotionName}),e.jsxs(l,{sx:{display:"flex",gap:2,mb:1},children:[t.image&&e.jsx(l,{component:"img",src:t.image,sx:{width:80,height:50,objectFit:"cover",borderRadius:1}}),e.jsxs(s,{variant:"body2",sx:{color:o?"grey":"#fbc02d",fontSize:{xs:"1rem",md:"1.1rem"}},children:[r("payment.promotion.discount")," ",t.discount,"%"]})]}),e.jsxs(s,{variant:"caption",sx:{color:o?"grey":"#bdbdbd",fontSize:{xs:"0.9rem",md:"1rem"}},children:[r("payment.promotion.from")," ",new Date(t.fromDate).toLocaleDateString("vi-VN")," ",r("payment.promotion.to")," ",new Date(t.toDate).toLocaleDateString("vi-VN")]})]}),sx:{mb:2,alignItems:"flex-start",opacity:o?.5:1}},t.promotionId)})}),c&&e.jsxs(l,{sx:{mt:2,borderTop:"1px solid rgba(255,255,255,0.1)",pt:2},children:[e.jsxs(s,{variant:"body1",sx:{fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsx("strong",{children:r("payment.origin_price")})," ",y.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]}),e.jsxs(s,{variant:"body1",sx:{color:"#4caf50",fontSize:{xs:"1.1rem",md:"1.3rem"}},children:[e.jsxs("strong",{children:[r("payment.promotion.discount")," (",c.discount,"%):"]})," ",(y-_).toLocaleString("vi-VN",{style:"currency",currency:"VND"})]})]})]})]})]})}),e.jsxs(p,{sx:{p:{xs:3,md:4},backgroundColor:"rgba(28, 28, 28, 0.8)",color:"white"},children:[e.jsx(s,{variant:"h6",gutterBottom:!0,sx:{fontSize:{xs:"1.3rem",md:"1.5rem"}},children:r("payment.user_infor")}),e.jsxs(x,{container:!0,spacing:2,sx:{mb:2},children:[e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(k,{label:r("common.table_header.user.fullname"),variant:"outlined",fullWidth:!0,value:I,onChange:t=>ae(t.target.value),error:O,helperText:O?r("helperText.error.fullname"):"",sx:{maxWidth:"400px",input:{color:"white",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& label":{color:"rgba(255,255,255,0.7)",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255,255,255,0.3)"},"&:hover fieldset":{borderColor:"white"}}}})}),e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(k,{label:r("common.table_header.user.email"),variant:"outlined",fullWidth:!0,value:T,onChange:t=>le(t.target.value),error:M,helperText:M?r("helperText.error.email"):"",sx:{maxWidth:"400px",input:{color:"white",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& label":{color:"rgba(255,255,255,0.7)",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255,255,255,0.3)"},"&:hover fieldset":{borderColor:"white"}}}})}),e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(k,{label:r("auth.signup.fields.id_card"),variant:"outlined",fullWidth:!0,value:z,onChange:t=>ce(t.target.value),error:$,helperText:$?r("helperText.error.id_number"):"",sx:{maxWidth:"400px",input:{color:"white",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& label":{color:"rgba(255,255,255,0.7)",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255,255,255,0.3)"},"&:hover fieldset":{borderColor:"white"}}}})}),e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsx(k,{label:r("common.table_header.user.phone"),variant:"outlined",fullWidth:!0,value:N,onChange:t=>de(t.target.value),error:q,helperText:q?r("helperText.error.phone"):"",sx:{maxWidth:"400px",input:{color:"white",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& label":{color:"rgba(255,255,255,0.7)",fontSize:{xs:"1.1rem",md:"1.2rem"}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255,255,255,0.3)"},"&:hover fieldset":{borderColor:"white"}}}})})]}),e.jsxs(l,{sx:{textAlign:"center",mt:3},children:[e.jsx(U,{variant:"outlined",onClick:ne,sx:{color:"#fbc02d",borderColor:"#fbc02d",mr:2,px:4,py:1.2,fontSize:{xs:"1rem",md:"1.2rem"},borderRadius:2,"&:hover":{borderColor:"#ff9800",backgroundColor:"rgba(251, 192, 45, 0.1)"}},children:r("payment.back")}),e.jsx(U,{variant:"contained",onClick:me,sx:{background:"linear-gradient(135deg, #fbc02d 0%, #ff9800 100%)",color:"#121212",px:4,py:1.2,fontSize:{xs:"1rem",md:"1.2rem"},borderRadius:2,"&:hover":{background:"linear-gradient(135deg, #ff9800 0%, #fbc02d 100%)"}},children:r("payment.confirm")})]})]})]})]})]})]})}),e.jsx(Se,{})]})};export{Ee as default};
