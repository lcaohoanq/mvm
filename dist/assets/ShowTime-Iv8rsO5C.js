import{a0 as Z,r as o,a as N,j as e,L as ae,B as l,C as U,G as D,T as i,d as $,b as J,M as se,e as z,a1 as ie,F as le,S as ce,f as P,a2 as ee,a3 as te,h as K,a5 as de,V as H,u as he,H as xe,i as ue}from"./index-BZsQtJZU.js";import{A as me}from"./AccessTime-BLOdMLf6.js";import{a as Y,v as pe,T as ge,b as fe,R as be}from"./vi-BRixpBcs.js";import{f as F}from"./format-csk1fyom.js";import{S as O}from"./StepTracker-CUuMLTQN.js";import{S as ye,P as je,a as ve}from"./pagination-c9T8sHOp.js";import"./Stepper-DWCVRqzQ.js";import"./CancelOutlined-BJKoDfIG.js";import"./CheckCircleOutline-DssXacBJ.js";const we=({onMovieLoad:f})=>{const{movieId:x}=Z(),[t,C]=o.useState(),[u,m]=o.useState(!1),[k,b]=o.useState(!0),{t:p}=N(),[g,T]=o.useState(),v=async()=>{try{b(!0);const c=await z.get(`Movie/${x}`);C(c.data.data),f&&f(c.data.data),console.log("Movie detail:",c.data.data)}catch(c){console.error("Failed to fetch movie:",c)}finally{console.log(x+"haha"),b(!1)}};o.useEffect(()=>{v()},[p]);const r=c=>{let y=c.replace("youtu.be","youtube.com/embed");y=y.replace("watch?v=","embed/"),y=y+"?autoplay=1",T(y),m(!0)},a=()=>m(!1),s=c=>{if(!c)return"N/A";const y={day:"2-digit",month:"2-digit",year:"numeric"};return new Date(c).toLocaleDateString("vi-VN",y)};return k?e.jsx(ae,{}):e.jsxs(l,{sx:{backgroundColor:"#0B0D1A",minHeight:"50vh",color:"white"},children:[e.jsx(U,{maxWidth:"lg",sx:{mt:13,color:"white"},children:e.jsxs(D,{container:!0,spacing:4,sx:{alignItems:"stretch"},children:[e.jsx(D,{item:!0,xs:12,md:4,children:e.jsx(l,{component:"img",src:t==null?void 0:t.image,alt:t==null?void 0:t.movieName,sx:{width:"100%",height:"100%",borderRadius:2,boxShadow:"0 0 20px rgba(0,0,0,0.5)",objectFit:"cover"}})}),e.jsxs(D,{item:!0,xs:12,md:8,sx:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:t==null?void 0:t.movieName}),e.jsxs(l,{sx:{mb:3,fontWeight:"bold"},children:[e.jsx($,{label:t==null?void 0:t.rating,color:"error",sx:{mb:1,mr:1}}),e.jsx($,{icon:e.jsx(me,{}),label:`${t==null?void 0:t.duration}'`,sx:{mr:1,mb:1,color:"white"}}),e.jsx($,{label:t==null?void 0:t.categories.map(c=>c.name).join(", "),sx:{mr:1,mb:1,backgroundColor:"#e67e22",color:"white"}})]}),e.jsx(i,{variant:"h6",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:p("movie_detail.description")}),e.jsxs(l,{sx:{mb:3,textAlign:"justify",flexGrow:1},children:[e.jsxs(i,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:p("movie_detail.director")})," ",t==null?void 0:t.director]}),e.jsxs(i,{mb:1,variant:"body1",sx:{textAlign:"left"},fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:p("movie_detail.actors")})," ",t==null?void 0:t.actors]}),e.jsxs(i,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:p("movie_detail.release_date")})," ",s(t==null?void 0:t.fromDate)]}),e.jsx(i,{variant:"h6",fontWeight:"bold",mb:2,mt:4,fontFamily:"JetBrains Mono",children:p("movie_detail.content")}),e.jsx(i,{paragraph:!0,variant:"body1",sx:{textAlign:"justify"},fontFamily:"JetBrains Mono",children:t==null?void 0:t.content})]}),e.jsxs(l,{sx:{mt:"auto"},children:[e.jsx(J,{variant:"outlined",size:"large",onClick:()=>(t==null?void 0:t.trailer)&&r(t.trailer),sx:{color:"white",borderColor:"#e67e22",mr:2,position:"relative",overflow:"hidden",transition:"color 0.5s ease-in-out","&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"black"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1}},children:e.jsx("span",{children:p("movie_detail.trailer")})}),e.jsx(J,{variant:"contained",size:"large",sx:{backgroundColor:"#e67e22",position:"relative",overflow:"hidden",transition:"color 0.5s ease-in-out","&::before":{content:'""',position:"absolute",inset:0,background:"linear-gradient(to right, #e67e22,rgb(77, 91, 185))",transform:"translateX(-100%)",transition:"transform 0.5s ease-in-out",zIndex:0},"&:hover":{color:"white"},"&:hover::before":{transform:"translateX(0)"},"& span":{position:"relative",zIndex:1}},children:e.jsx("span",{children:p("movie_detail.book_now")})})]})]})]})}),e.jsx(se,{open:u,onClose:a,"aria-labelledby":"trailer-modal",sx:{display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(61, 14, 97, 0.95)"},children:e.jsx(l,{sx:{position:"relative",width:"80%",maxWidth:"1000px",aspectRatio:"16/9",bgcolor:"transparent"},children:e.jsx("iframe",{width:"100%",height:"100%",src:g,title:"Movie Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0}})})})]})},E=new Map,Ce=({movieId:f,onRoomSelect:x,onSelectDate:t,onSelectTime:C,onShowtimeAvailability:u})=>{const m=new Date,k=F(m,"dd/MM"),[b,p]=o.useState(k),[g,T]=o.useState("hcm"),[v,r]=o.useState(null),[a,s]=o.useState([]),[c,y]=o.useState(!1),{t:w,i18n:B}=N(),h=o.useRef(null),W=o.useMemo(()=>Array.from({length:4},(n,d)=>{const j=Y(m,d),I=F(j,"EEEE",{locale:B.language==="vi"?pe:void 0});return{date:j,formatted:F(j,"dd/MM"),label:w(`${I.toLowerCase()}`)}}),[m,w,B.language]),V=o.useCallback((n,d)=>{d&&(p(d),t(d),r(null))},[t]),q=n=>E.get(n);o.useEffect(()=>{t(k)},[t,k]);const oe=o.useCallback((n,d)=>{r({time:n,id:d}),C(n),x(d),sessionStorage.setItem("currentShowTimeId",d)},[C,x]);return o.useEffect(()=>{const n=W.find(_=>_.formatted===b);if(!n)return;const d=F(n.date,"yyyy-MM-dd"),j=F(Y(n.date,3),"yyyy-MM-dd"),I=F(n.date,"yyyy-MM-dd"),A=`${f}_${d}_${g}`;let R=!0;const re=async()=>{const _=q(A);if(_){R&&(s(_),y(!1),u(_.length>0));return}y(!0);try{const X=await z.get(`showtime/${f}/from/${d}/to/${j}/locate/${g.toUpperCase()}`);if(!R)return;const M=X.data.data[I];if(!M||!M[g.toUpperCase()]||M[g.toUpperCase()].length===0){const S=[];s(S),E.set(A,S),u(!1);return}const L=M[g.toUpperCase()].map(S=>({name:S.nameTheater,address:S.addressTheater,times:S.listShowTime.map(G=>({time:F(new Date(G.startTime),"HH:mm"),showTimeId:G.showTimeId}))})).filter(S=>S.name&&S.times&&S.times.length>0);s(L),E.set(A,L),u(L.length>0)}catch{const M=[];s(M),E.set(A,M),u(!1)}finally{R&&y(!1)}},ne=setTimeout(()=>{re()},300);return()=>{R=!1,clearTimeout(ne)}},[g,b,W,f,u]),o.useEffect(()=>{const n=a.length>0;h.current!==n&&(h.current=n,u(n))},[a.length,u]),e.jsx(l,{sx:{backgroundColor:"#0B0D1A",color:"white",py:5},children:e.jsxs(U,{maxWidth:"md",children:[e.jsx(i,{variant:"h4",fontWeight:"bold",textAlign:"center",fontFamily:"JetBrains Mono",mb:2,sx:{letterSpacing:"1px",textTransform:"uppercase"},children:w("showtime_cinema.title.showtime_list")}),e.jsx(ge,{value:b,exclusive:!0,onChange:V,sx:{display:"flex",justifyContent:"center",gap:2,mb:3},children:W.map((n,d)=>{const j=n.formatted===k;return e.jsxs(fe,{value:n.formatted,sx:{border:"2px solid yellow !important",color:"yellow",backgroundColor:b===n.formatted?"yellow":"transparent","&.Mui-selected":{backgroundColor:"yellow",color:"#834bff",fontWeight:"bold"},"&.Mui-selected:hover":{backgroundColor:"yellow"},"&:hover":{backgroundColor:"transparent"},borderRadius:"12px",px:3,py:2,minWidth:"100px",position:"relative"},children:[j&&e.jsx(i,{variant:"caption",sx:{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",backgroundColor:"red",color:"white",borderRadius:"4px",px:.5,fontWeight:"bold",whiteSpace:"nowrap"},children:w("showtime_cinema.title.now_day")}),e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"h6",fontWeight:"bold",mb:1,fontFamily:"JetBrains Mono",children:n.formatted}),e.jsx(i,{variant:"body2",children:n.label})]})]},d)})}),e.jsxs(D,{container:!0,alignItems:"center",justifyContent:"space-between",mb:3,children:[e.jsx(D,{item:!0,children:e.jsxs(i,{variant:"h4",fontWeight:"bold",children:["🎬 ",w("showtime_cinema.title.theater_list")]})}),e.jsx(D,{item:!0,children:e.jsx(le,{children:e.jsxs(ce,{value:g,onChange:n=>{T(n.target.value),r(null)},sx:{border:"2px solid yellow",color:"yellow",fontWeight:"bold",fontSize:"15px",borderRadius:"10px",px:3,backgroundColor:"transparent"},children:[e.jsx(P,{value:"hcm",children:w("showtime_cinema.location.HCM")}),e.jsx(P,{value:"hn",children:w("showtime_cinema.location.HaNoi")}),e.jsx(P,{value:"bd",children:w("showtime_cinema.location.BinhDuong")}),e.jsx(P,{value:"bp",children:w("showtime_cinema.location.BinhPhuoc")})]})})})]}),!c&&e.jsx(l,{sx:{borderRadius:"12px"},children:a.length>0?a.map((n,d)=>e.jsx(ee,{sx:{backgroundColor:"#834bff",color:"white",borderRadius:"12px",p:2,mb:2},children:e.jsxs(te,{children:[e.jsx(i,{variant:"h6",fontWeight:"bold",color:"yellow",mb:1,fontFamily:"JetBrains Mono",children:n.name}),e.jsx(i,{variant:"body2",mb:2,children:n.address}),e.jsx(l,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:n.times.map((j,I)=>e.jsx(J,{variant:"contained",sx:{backgroundColor:(v==null?void 0:v.id)===j.showTimeId?"yellow":"transparent",color:(v==null?void 0:v.id)===j.showTimeId?"black":"white",border:"1px solid white",fontWeight:"bold","&:hover":{backgroundColor:"yellow",color:"black"}},onClick:()=>oe(j.time,j.showTimeId),children:j.time},I))})]})},d)):e.jsx(i,{variant:"body1",textAlign:"center",sx:{py:5},children:w("showtime_cinema.title.no_showtime")})})]})})},ke=ie.memo(Ce),Q={en:{locale:"en-US",currency:"USD"},jp:{locale:"ja-JP",currency:"JPY"},vi:{locale:"vi-VN",currency:"VND"}},Se={VND:1,USD:39e-6,JPY:.0058},Te=({onNext:f})=>{const[x,t]=o.useState([]),{t:C,i18n:u}=N(),[m,k]=o.useState({locale:"vi-VN",currency:"VND"});o.useEffect(()=>{const a=u.language.substring(0,2);k(Q[a]||Q.vi)},[u.language]),o.useEffect(()=>{(async()=>{try{const s=(await z.get("seattype")).data.data.map(c=>({...c,quantity:0}));t(s)}catch(a){console.error("Error fetching seat types:",a)}})()},[C]);const b=r=>{t(a=>a.map(s=>s.seatTypeId===r?{...s,quantity:s.quantity+1}:s))},p=r=>{t(a=>a.map(s=>s.seatTypeId===r&&s.quantity>0?{...s,quantity:s.quantity-1}:s))},g=(r,a)=>a==="VND"?r:r*Se[a],T=r=>{const a=g(r,m.currency);return(m.currency==="JPY"?Math.round(a):a).toLocaleString(m.locale,{style:"currency",currency:m.currency})},v=()=>{const r=x.filter(a=>a.quantity>0);if(r.length===0){H.error("Vui lòng chọn ít nhất một vé.");return}f&&f(r)};return e.jsxs(l,{sx:{background:"linear-gradient(135deg, #1A1E3C 0%, #3A1155 100%)",color:"white",padding:{xs:3,sm:5,md:6},textAlign:"center"},children:[e.jsx(i,{variant:"h4",sx:{fontWeight:"bold",textTransform:"uppercase",mb:4},children:C("ticket_price.ticket_selection")}),e.jsx(l,{sx:{width:"100%",maxWidth:"900px",margin:"0 auto",overflow:"hidden",position:"relative"},children:e.jsx(ye,{slidesPerView:1,spaceBetween:50,pagination:{clickable:!0},breakpoints:{600:{slidesPerView:2},900:{slidesPerView:3}},autoplay:{delay:1e3},loop:x.length>4,modules:[je],style:{width:"100%",margin:"0 auto",paddingBottom:"10px"},children:x.map(r=>e.jsx(ve,{children:e.jsx(ee,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,textAlign:"center",p:3,"&:hover":{transform:"scale(1.05)",transition:"0.3s ease-in-out"}},children:e.jsxs(te,{children:[e.jsx(i,{variant:"h6",sx:{fontWeight:"bold"},children:r.typeName}),e.jsx(i,{variant:"body1",sx:{color:"#FFC107",fontWeight:"bold",mb:1},children:T(r.price)}),e.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:2},children:[e.jsx(K,{onClick:()=>p(r.seatTypeId),sx:{color:r.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"}},disabled:r.quantity===0,children:e.jsx(be,{})}),e.jsx(i,{variant:"h6",sx:{fontWeight:"bold",mx:2,minWidth:"30px"},children:r.quantity}),e.jsx(K,{onClick:()=>b(r.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"}},children:e.jsx(de,{})})]})]})})},r.seatTypeId))})}),f&&e.jsx(l,{sx:{mt:4},children:e.jsx(J,{variant:"contained",sx:{backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:4,py:1.5,"&:hover":{backgroundColor:"#FFA000"}},onClick:v,children:C("ticket_price.next")})})]})},Ee=()=>{const f=he(),{movieId:x}=Z(),{t}=N(),[C,u]=o.useState(null),[m,k]=o.useState(""),[b,p]=o.useState(null),[g,T]=o.useState(""),[v,r]=o.useState(!1),a=o.useCallback(h=>{T(h)},[]),s=o.useCallback(h=>{k(h)},[]),c=o.useCallback(h=>{p(h)},[]),y=o.useCallback(h=>{r(h)},[]),w=o.useCallback(h=>{u(h)},[]),B=o.useCallback(h=>{if(!b){H.error(t("toast.error.showtime.selection"));return}if(h.reduce((V,q)=>V+(q.quantity||0),0)===0){H.error(t("toast.error.ticket.selection"));return}f("/ticket/movie-seat",{state:{movieId:x,showTimeId:g,selectedDate:m,selectedTime:b,tickets:h,movieData:C}})},[x,f,g,m,b,C]);return x?e.jsxs(l,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[e.jsx(xe,{}),e.jsx(U,{maxWidth:"xl",sx:{pt:{xs:"70px",sm:"80px",md:"90px"},pb:{xs:5,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(l,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsx(l,{sx:{display:{xs:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:"250px",flexShrink:0},children:e.jsx(O,{currentStep:1})}),e.jsxs(l,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},pb:4},children:[e.jsx(l,{sx:{display:{xs:"block",md:"none"},mb:2},children:e.jsx(O,{currentStep:1})}),e.jsx(we,{onMovieLoad:w}),e.jsx(ke,{movieId:x,onRoomSelect:a,onSelectDate:s,onSelectTime:c,onShowtimeAvailability:y}),v&&e.jsx(Te,{onNext:B})]})]})}),e.jsx(ue,{})]}):e.jsxs(l,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"white",backgroundColor:"#0B0D1A"},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",sx:{mb:2},children:t("oops")}),e.jsx(i,{variant:"h6",sx:{p:4,border:2,borderColor:"red",color:"red",borderRadius:2},children:t("translation.footer.movies.not_existing")})]})};export{Ee as default};
