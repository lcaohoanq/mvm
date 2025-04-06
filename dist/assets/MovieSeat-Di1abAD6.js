import{a4 as q,a6 as W,g as G,a as M,r as y,j as e,L,x as P,B as d,Z as w,T as C,b as E,V as f,e as O,a7 as H,u as U,U as z,W as D,X as Y,Y as X,_ as Z,$ as F}from"./index-B0N4umr3.js";import{E as R}from"./EventSeat-DqtIMzW3.js";const J=({showTimeId:A,selectedSeats:h,setSelectedSeats:$,groupConnected:T})=>{const c=q(),{connection:u}=W(),{userDetails:b}=G(),{t:g}=M(),[B,_]=y.useState([]),[N,k]=y.useState(!0),v=A||sessionStorage.getItem("currentShowTimeId")||"";y.useEffect(()=>{if(!u||!T)return;const t=(l,p)=>{console.log("Seat marked as pending:",l);const r=b==null?void 0:b.userId;p!==r&&(_(o=>o.map(a=>a.seatId===l?{...a,status:1}:a)),$(o=>{const a=o.find(n=>n.id===l);return a?(f.error(`${a.name} ${g("toast.error.someone_selected")}`),o.filter(n=>n.id!==l)):o}))},i=l=>{_(p=>p.map(r=>r.seatId===l?{...r,status:2}:r))},s=(l,p)=>{const r=b==null?void 0:b.userId;p!==r&&_(o=>o.map(a=>a.seatId===l?{...a,status:1}:a))},m=l=>{console.log("Received SeatAvailable event for:",l),_(p=>p.map(r=>r.seatId===l?{...r,status:0}:r)),$(p=>p.filter(r=>r.id!==l))};return u.on("SeatPending",t),u.on("SeatBought",i),u.on("SeatSelected",s),u.on("SeatAvailable",m),()=>{u.off("SeatPending",t),u.off("SeatBought",i),u.off("SeatSelected",s),u.off("SeatAvailable",m)}},[u,T,$]),y.useEffect(()=>{(async()=>{if(u&&h.length>0){const i=b==null?void 0:b.userId,s=h.map(m=>({TicketId:m.ticketId,Version:m.version}));try{await u.invoke("ReleasePendingSeats",s,v,i),$([]),f(g("toast.error.seat.cancel_booking_bc_back"),{position:"top-center"})}catch(m){console.error("Error releasing seats on return:",m)}}})()},[u]),y.useEffect(()=>{v&&(async()=>{var i;try{k(!0);const s=await O.get(`ticketdetail/showtime/${v}`);(i=s.data)!=null&&i.data?_(s.data.data):f.error(g("toast.error.seat.infor"))}catch{f.error(g("toast.error.seat.loading_list"))}finally{k(!1)}})()},[v]);const S=async t=>{if(!u){f.error(g("toast.server.connection"));return}if(t.status===1||t.status===2){const m=t.status===1?g("toast.error.seat.selecting"):g("toast.error.seat.bought");f.error(`${t.seat.atRow}${t.seat.atColumn} ${m} toast.error.seat.by_someone`);return}const i=`${t.seat.atRow}${t.seat.atColumn}`,s={id:t.seatId,name:i,version:t.version,ticketId:t.ticketId,roomName:t.seat.roomName,isMine:!0,selectedAt:Date.now()};try{const m=b==null?void 0:b.userId;let l=[...h];const p=h.findIndex(o=>o.ticketId===t.ticketId);p!==-1?h[p].id===t.seatId?l=l.filter(o=>o.ticketId!==t.ticketId):l[p]=s:l.push(s);const r=l.map(o=>({TicketId:o.ticketId,Version:o.version}));console.log("Selecting seat:",i,r,v,m),await u.invoke("SelectSeat",r,v,m),$(o=>{const a=o.find(n=>n.ticketId===t.ticketId);return a?a.id===t.seatId?(f.error(`${g("toast.error.seat.cancel_select")} ${i}`),o.filter(n=>n.ticketId!==t.ticketId)):(f.success(`${g("toast.success.seat.change_from")} ${a.name} ${g("toast.success.seat.change_to")} ${i}`),o.map(n=>n.ticketId===t.ticketId?s:n)):(f.success(`${g("toast.success.seat.select")} ${i}`),[...o,s])})}catch(m){f.error(g("toast.error.seat.cannot_selected")),console.error("Error selecting seat:",m)}};return N?e.jsx(L,{}):e.jsxs(P,{elevation:2,sx:{p:3,borderRadius:2,backgroundColor:c.palette.background.paper,color:c.palette.text.primary},children:[e.jsxs(d,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:2,mb:4,pb:2,borderBottom:`1px solid ${w(c.palette.divider,.7)}`},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(R,{sx:{color:c.palette.info.main}}),e.jsx(C,{variant:"body2",children:"Ghế VIP"})]}),e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(R,{sx:{color:"#ab47bc"}}),e.jsx(C,{variant:"body2",children:"Ghế Couple"})]}),e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(R,{sx:{color:c.palette.success.main}}),e.jsx(C,{variant:"body2",children:"Ghế đang chọn"})]}),e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(R,{sx:{color:c.palette.error.main}}),e.jsx(C,{variant:"body2",children:"Ghế đã bán"})]}),e.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(R,{sx:{color:c.palette.warning.main}}),e.jsx(C,{variant:"body2",children:"Ghế đã chọn"})]})]}),e.jsxs(d,{sx:{textAlign:"center",mb:4,mt:2},children:[e.jsx(d,{sx:{margin:"0 auto",width:"80%",height:"10px",backgroundColor:"#121212",borderRadius:"50% 50% 0 0",padding:"20px 0",position:"relative"}}),e.jsx(C,{variant:"h6",sx:{mt:1,color:c.palette.text.secondary,fontWeight:500},children:"Màn hình"})]}),e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",p:2},children:e.jsx(d,{sx:{maxWidth:600,display:"flex",flexDirection:"column",gap:2},children:Object.entries(B.reduce((t,i)=>(t[i.seat.atRow]||(t[i.seat.atRow]=[]),t[i.seat.atRow].push(i),t),{})).map(([t,i])=>e.jsx(d,{sx:{display:"flex",justifyContent:"center",gap:4},children:i.map(s=>{if(!s.seat.isActive)return e.jsxs(d,{sx:{minWidth:"50px",minHeight:"50px",p:.5,display:"flex",justifyContent:"center",alignItems:"center",border:"1px dashed rgba(255, 255, 255, 0.2)",borderRadius:"4px",opacity:.3,position:"relative"},children:[e.jsx(d,{sx:{position:"absolute",width:"90%",height:"1px",backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"rotate(45deg)"}}),e.jsxs(C,{variant:"body2",align:"center",sx:{color:"rgba(255, 255, 255, 0.5)",fontSize:"0.7rem"},children:[s.seat.atRow,s.seat.atColumn]})]},s.seatId);const m=h.some(V=>V.id===s.seatId&&V.isMine),l=s.status===1,p=s.status===2,r=s.seat.seatType.typeName,o=r==="VIP",a=r==="Couple";let n=c.palette.text.primary,j="transparent",x=c.palette.text.primary,I=!1;return m?(n=c.palette.success.main,j=w(c.palette.success.main,.1),x=c.palette.success.dark):p?(n=c.palette.error.main,j=w(c.palette.error.main,.1),x=c.palette.error.dark,I=!0):l?(n=c.palette.warning.main,j=w(c.palette.warning.main,.1),x=c.palette.warning.dark,I=!0):o?(n="#2196f3",j=w("#2196f3",.1),x="#1976d2"):a&&(n="#ab47bc",j=w("#ab47bc",.1),x="#8e24aa"),e.jsx(E,{variant:"outlined",disabled:I,onClick:()=>S(s),"data-seat-id":s.seatId,"data-status":s.status,sx:{minWidth:"50px",minHeight:"50px",backgroundColor:j,color:x,border:`1px solid ${n}`,p:.5,fontSize:"0.7rem",transition:"all 0.2s ease","&:hover":{backgroundColor:w(n,.15),borderColor:n},"&.Mui-disabled":{backgroundColor:j,color:x,borderColor:n,opacity:.6}},children:e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(R,{sx:{color:n}}),e.jsxs(C,{variant:"body2",align:"center",sx:{color:x},children:[s.seat.atRow,s.seat.atColumn]})]})},s.seatId)})},t))})})]})},ee=()=>{const A=H(),{t:h}=M(),$=U(),{connection:T,isConnected:c}=W(),{userDetails:u}=G(),{movieId:b,selectedTime:g,selectedDate:B,tickets:_,movieData:N}=A.state||{movieId:"",selectedTime:"Not selected",selectedDate:new Date().toISOString().split("T")[0],tickets:[],movieData:{}},[k]=y.useState(!1),v=sessionStorage.getItem("currentShowTimeId")||"",[S,t]=y.useState([]),[i,s]=y.useState(null),[m,l]=y.useState(0);y.useCallback(()=>{f.error(h("toast.error.seat.remainder")),t([])},[]);const p=y.useCallback(a=>{t(n=>{const j=typeof a=="function"?a(n):a;return j.length!==n.length&&(s(Date.now()),l(x=>x+1)),j})},[]),r=(_||[]).reduce((a,n)=>a+(n.quantity||0),0);y.useEffect(()=>{S.length===0&&s(null)},[S]);const o=async()=>{if(S.length!==r){f.error(`${h("toast.error.seat.max_selection")} ${r}`);return}if(!T){f.error("toast.error.server.connection");return}try{const a=u==null?void 0:u.userId,n=S.filter(x=>{const I=document.querySelector(`[data-seat-id="${x.id}"]`);return(I==null?void 0:I.getAttribute("data-status"))==="1"||(I==null?void 0:I.getAttribute("data-status"))==="2"});if(n.length>0){const x=n.map(I=>I.name).join(", ");f.error(`${x} ${h("toast.error.seat.someone_selected")}`);return}const j=S.map(x=>({TicketId:x.ticketId,Version:x.version}));await T.invoke("SetSeatPending",j,v,a),f.success(h("toast.success.change_direct.payment")),$("/admin/ql-ban-ve/payment",{state:{movieId:b,selectedDate:B,selectedTime:g,tickets:_,seats:S.map(x=>x.name),selectedSeatsInfo:S,showTimeId:v,lastSelectionTime:i,resetCounter:m,movieData:N,roomName:S[0].roomName}})}catch(a){console.error("Error when booking:",a),f.error(h("toast.error.seat.cannot_selected"))}};return e.jsxs(z,{disableCustomTheme:k,children:[e.jsx(D,{enableColorScheme:!0}),e.jsxs(d,{sx:{display:"flex",height:"100vh"},children:[e.jsx(Y,{}),e.jsxs(d,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(X,{}),e.jsx(d,{component:"main",sx:a=>({flexGrow:1,backgroundColor:w(a.palette.background.default,1),overflowY:"auto",px:3,py:2}),children:e.jsxs(Z,{spacing:3,children:[e.jsx(F,{}),e.jsxs(P,{elevation:2,sx:{width:"100%",borderRadius:2},children:[e.jsxs(d,{sx:{p:3,borderBottom:"1px solid",borderColor:"ActiveBorder",textAlign:"center"},children:[e.jsx(C,{variant:"h5",fontWeight:"bold",gutterBottom:!0,children:h("step_tracker.select_seat")}),e.jsx(C,{variant:"body2",color:"text.secondary",children:`${h("admin.ticket_management.select_max")} ${r} admin.ticket_management.for_showtime ${g}`})]}),e.jsxs(d,{sx:{p:3},children:[e.jsx(P,{elevation:1,sx:a=>({backgroundColor:w(a.palette.background.default,.6),p:3}),children:e.jsx(d,{sx:{maxWidth:"800px",mx:"auto",borderRadius:2,overflow:"hidden"},children:e.jsx(J,{showTimeId:v,selectedSeats:S,setSelectedSeats:p,groupConnected:c})})}),e.jsxs(d,{sx:{display:"flex",justifyContent:"flex-end",mt:3,gap:2},children:[e.jsx(E,{variant:"outlined",onClick:()=>$(-1),children:h("admin.ticket_management.come_back")}),e.jsx(E,{variant:"contained",color:"primary",onClick:o,children:h("admin.ticket_management.continue")})]})]})]})]})})]})]})]})};export{ee as default};
