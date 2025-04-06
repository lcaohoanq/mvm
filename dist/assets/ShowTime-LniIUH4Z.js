import{c as G,j as e,a0 as oe,r as o,a as H,L as ie,B as a,C as re,G as _,T as r,d as V,b as q,M as xe,e as K,a1 as he,F as me,S as ue,f as N,bX as pe,m as fe,a2 as O,a3 as U,aa as ge,g as ae,u as le,h as L,a5 as Z,V as $}from"./index-B0N4umr3.js";import{A as ye}from"./AccessTime-LRdfy_Jd.js";import{a as ee,v as be,T as je,b as we,R as te}from"./vi-xI9W0IrF.js";import{f as I}from"./format-csk1fyom.js";import{S as se}from"./StepTracker-D2zZHPvM.js";/* empty css                   */import{S as ve}from"./ShowTimeLayout-f6J52PpE.js";import"./Stepper-Cnj2KS6U.js";import"./CancelOutlined-C_LdPdKt.js";import"./CheckCircleOutline-D0uz6DH2.js";import"./UserDetailLayout-C7URJvNA.js";const Ce=G(e.jsx("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCityOutlined"),Se=G(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),Te=G(e.jsx("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"PlayCircleOutline"),ke=({onMovieLoad:p})=>{const{movieId:c}=oe(),[t,f]=o.useState(),[g,y]=o.useState(!1),[C,x]=o.useState(!0),{t:b}=H(),[u,M]=o.useState(),j=async()=>{try{x(!0);const h=await K.get(`Movie/${c}`);f(h.data.data),p&&p(h.data.data)}catch(h){console.error("Failed to fetch movie:",h)}finally{x(!1)}};o.useEffect(()=>{j()},[b]);const S=h=>{let s=h.replace("youtu.be","youtube.com/embed");s=s.replace("watch?v=","embed/"),s=s+"?autoplay=1",M(s),y(!0)},T=()=>y(!1),v=h=>{if(!h)return"N/A";const s={day:"2-digit",month:"2-digit",year:"numeric"};return new Date(h).toLocaleDateString("vi-VN",s)};return C?e.jsx(ie,{}):e.jsxs(a,{sx:{minHeight:"50vh",color:"white",mb:5},children:[e.jsx(re,{maxWidth:"lg",sx:{color:"white"},children:e.jsxs(_,{container:!0,spacing:4,sx:{alignItems:"stretch"},children:[e.jsx(_,{item:!0,xs:12,md:6,children:e.jsx(a,{component:"img",src:t==null?void 0:t.image,alt:t==null?void 0:t.movieName,sx:{width:"100%",height:"100%",borderRadius:.5,border:"1px solid",borderColor:"#f1f1f1",boxShadow:"0 0 20px rgba(0,0,0,0.5)",objectFit:"cover"}})}),e.jsxs(_,{item:!0,xs:12,md:6,sx:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{variant:"h4",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:t==null?void 0:t.movieName}),e.jsxs(a,{sx:{mb:3,fontWeight:"bold"},children:[e.jsx(V,{label:t==null?void 0:t.rating,color:"error",sx:{mb:1,mr:1}}),e.jsx(V,{icon:e.jsx(ye,{}),label:`${t==null?void 0:t.duration}'`,sx:{mr:1,mb:1,color:"black",backgroundColor:"yellow"}}),e.jsx(V,{label:t==null?void 0:t.categories.map(h=>h.name).join(", "),sx:{mr:1,mb:1,backgroundColor:"#e67e22",color:"white"}})]}),e.jsx(r,{variant:"h6",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:b("movie_detail.description")}),e.jsxs(a,{sx:{mb:3,textAlign:"justify",flexGrow:1},children:[e.jsxs(r,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.director")})," ",t==null?void 0:t.director]}),e.jsxs(r,{mb:1,variant:"body1",sx:{textAlign:"left"},fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.actors")})," ",t==null?void 0:t.actors]}),e.jsxs(r,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.release_date")})," ",v(t==null?void 0:t.fromDate)]}),e.jsx(r,{variant:"h6",fontWeight:"bold",mb:2,mt:4,fontFamily:"JetBrains Mono",children:b("movie_detail.content")}),e.jsx(r,{paragraph:!0,variant:"body1",sx:{textAlign:"justify"},fontFamily:"JetBrains Mono",children:t==null?void 0:t.content}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",mt:3},children:[e.jsx(Te,{sx:{color:"white",mr:1}}),e.jsx(q,{variant:"text",size:"large",onClick:()=>(t==null?void 0:t.trailer)&&S(t.trailer),sx:{color:"white",textTransform:"none",fontSize:"1.5rem",textDecoration:"underline","&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},children:b("view_trailer")})]})]})]})]})}),e.jsx(xe,{open:g,onClose:T,"aria-labelledby":"trailer-modal",sx:{display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(61, 14, 97, 0.95)"},children:e.jsx(a,{sx:{position:"relative",width:"80%",maxWidth:"1000px",aspectRatio:"16/9",bgcolor:"transparent"},children:e.jsx("iframe",{width:"100%",height:"100%",src:u,title:"Movie Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0}})})})]})},Fe=(p,c)=>{switch(p){case"hcm":return c("showtime_cinema.location.HCM");case"hn":return c("showtime_cinema.location.HaNoi");case"bd":return c("showtime_cinema.location.BinhDuong");case"bp":return c("showtime_cinema.location.BinhPhuoc");default:return c("showtime_cinema.location.Unknown")||"Unknown"}},P=new Map,Me=({movieId:p,onRoomSelect:c,onSelectDate:t,onSelectTime:f,onShowtimeAvailability:g})=>{const y=new Date,C=I(y,"dd/MM"),[x,b]=o.useState(C),[u,M]=o.useState("hcm"),[j,S]=o.useState(null),[T,v]=o.useState([]),[h,s]=o.useState(!1),{t:n,i18n:l}=H(),F=o.useRef(null),d=o.useMemo(()=>Array.from({length:4},(i,m)=>{const w=ee(y,m),W=I(w,"EEEE",{locale:l.language==="vi"?be:void 0});return{date:w,formatted:I(w,"dd/MM"),label:n(`${W.toLowerCase()}`)}}),[y,n,l.language]),X=o.useCallback((i,m)=>{m&&(b(m),t(m),S(null))},[t]),A=i=>P.get(i);o.useEffect(()=>{t(C)},[t,C]);const J=o.useCallback((i,m)=>{S({time:i,id:m}),f(i),c(m),sessionStorage.setItem("currentShowTimeId",m)},[f,c]);return o.useEffect(()=>{const i=d.find(z=>z.formatted===x);if(!i)return;const m=I(i.date,"yyyy-MM-dd"),w=I(ee(i.date,3),"yyyy-MM-dd"),W=I(i.date,"yyyy-MM-dd"),R=`${p}_${m}_${u}`;let B=!0;const ce=async()=>{const z=A(R);if(z){B&&(v(z),s(!1),g(z.length>0));return}s(!0);try{const Y=await K.get(`showtime/${p}/from/${m}/to/${w}/locate/${u.toUpperCase()}`);if(!B)return;const D=Y.data.data[W];if(!D||!D[u.toUpperCase()]||D[u.toUpperCase()].length===0){const k=[];v(k),P.set(R,k),g(!1);return}const E=D[u.toUpperCase()].map(k=>({name:k.nameTheater,address:k.addressTheater,times:k.listShowTime.map(Q=>({time:I(new Date(Q.startTime),"HH:mm"),showTimeId:Q.showTimeId}))})).filter(k=>k.name&&k.times&&k.times.length>0);v(E),P.set(R,E),g(E.length>0)}catch{const D=[];v(D),P.set(R,D),g(!1)}finally{B&&s(!1)}},de=setTimeout(()=>{ce()},300);return()=>{B=!1,clearTimeout(de)}},[u,x,d,p,g]),o.useEffect(()=>{const i=T.length>0;F.current!==i&&(F.current=i,g(i))},[T.length,g]),e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"h4",fontWeight:"bold",textAlign:"center",fontFamily:"JetBrains Mono",mb:2,sx:{letterSpacing:"1px",textTransform:"uppercase"},children:n("showtime_cinema.title.showtime_list")}),e.jsx(je,{value:x,exclusive:!0,onChange:X,sx:{display:"flex",justifyContent:"center",gap:2,mb:3},children:d.map((i,m)=>{const w=i.formatted===C;return e.jsxs(we,{value:i.formatted,sx:{border:"2px solid yellow !important",color:"yellow",backgroundColor:x===i.formatted?"yellow":"transparent","&.Mui-selected":{backgroundColor:"yellow",color:"#834bff",fontWeight:"bold"},"&.Mui-selected:hover":{backgroundColor:"yellow"},borderRadius:"12px",px:3,py:2,minWidth:"100px",position:"relative"},children:[w&&e.jsx(r,{variant:"caption",sx:{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",backgroundColor:"red",color:"white",borderRadius:"4px",px:.5,fontWeight:"bold",whiteSpace:"nowrap"},children:n("showtime_cinema.title.now_day")}),e.jsxs(a,{textAlign:"center",children:[e.jsx(r,{variant:"h6",fontWeight:"bold",mb:1,fontFamily:"JetBrains Mono",children:i.formatted}),e.jsx(r,{variant:"body2",children:i.label})]})]},m)})}),e.jsxs(_,{container:!0,alignItems:"center",justifyContent:"space-between",sx:{mr:2},children:[e.jsx(_,{item:!0,children:e.jsxs(r,{variant:"h4",fontWeight:"bold",sx:{textTransform:"uppercase"},children:["🎬 ",n("showtime_cinema.title.theater_list")]})}),e.jsx(_,{item:!0,children:e.jsx(me,{children:e.jsxs(ue,{value:u,onChange:i=>{M(i.target.value),S(null)},input:e.jsx(pe,{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(Se,{sx:{color:"yellow",fontSize:"1.8rem"}})})}),sx:{border:"2px solid yellow",color:"yellow",fontWeight:"bold",fontSize:"1rem",borderRadius:"10px",textTransform:"uppercase",textAlign:"center",px:3},children:[e.jsx(N,{value:"hcm",children:n("showtime_cinema.location.HCM")}),e.jsx(N,{value:"hn",children:n("showtime_cinema.location.HaNoi")}),e.jsx(N,{value:"bd",children:n("showtime_cinema.location.BinhDuong")}),e.jsx(N,{value:"bp",children:n("showtime_cinema.location.BinhPhuoc")})]})})})]}),h?e.jsx(ie,{}):e.jsx(a,{sx:{borderRadius:2},children:T.length>0?T.map((i,m)=>e.jsx(O,{sx:{backgroundColor:"#834bff",color:"white",borderRadius:"12px",p:2,mb:2},children:e.jsxs(U,{children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2,width:"100%"},children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Ce,{sx:{color:"yellow",fontSize:"1.8rem",mr:1}}),e.jsx(r,{variant:"h5",fontWeight:"bold",color:"yellow",children:"Rạp: "+i.name+" ( "+Fe(u,n)+" )"})]}),e.jsx(r,{variant:"h6",color:"white",children:"Địa chỉ: "+i.address})]}),e.jsx(ge,{sx:{mb:2}}),e.jsx(r,{variant:"h6",mb:1,children:"Khung giờ chiếu"}),e.jsx(a,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:i.times.map((w,W)=>e.jsx(q,{variant:"contained",sx:{backgroundColor:(j==null?void 0:j.id)===w.showTimeId?"yellow":"transparent",color:(j==null?void 0:j.id)===w.showTimeId?"black":"white",border:"1px solid white",fontWeight:"bold","&:hover":{backgroundColor:"yellow",color:"black"}},onClick:()=>J(w.time,w.showTimeId),children:w.time},W))})]})},m)):e.jsx(r,{variant:"h4",textAlign:"center",sx:{py:5},children:n("showtime_cinema.title.no_showtime")})})]})},De=he.memo(Me),ne={en:{locale:"en-US",currency:"USD"},jp:{locale:"ja-JP",currency:"JPY"},vi:{locale:"vi-VN",currency:"VND"}},Ie={VND:1,USD:39e-6,JPY:.0058},_e=({onNext:p})=>{const[c,t]=o.useState([]),{t:f,i18n:g}=H(),[y,C]=o.useState({locale:"vi-VN",currency:"VND"}),[x,b]=o.useState(!1),{isAuthenticated:u}=ae(),M=le();o.useEffect(()=>{const n=g.language.substring(0,2);C(ne[n]||ne.vi)},[g.language]),o.useEffect(()=>{(async()=>{try{const l=(await K.get("seattype")).data.data.map(F=>({...F,quantity:0}));t(l)}catch(n){console.error("Error fetching seat types:",n)}})()},[f]);const j=s=>{t(n=>n.map(l=>l.seatTypeId===s?{...l,quantity:l.quantity+1}:l))},S=s=>{t(n=>n.map(l=>l.seatTypeId===s&&l.quantity>0?{...l,quantity:l.quantity-1}:l))},T=(s,n)=>n==="VND"?s:s*Ie[n],v=s=>{const n=T(s,y.currency);return(y.currency==="JPY"?Math.round(n):n).toLocaleString(y.locale,{style:"currency",currency:y.currency})};o.useEffect(()=>{const s=c.some(n=>n.quantity>0);b(s)},[c]);const h=()=>{const n=c.filter(l=>l.quantity>0).map(({seatTypeId:l,typeName:F,quantity:d})=>({seatTypeId:l,typeName:F,quantity:d}));console.log(`Selected Seats: ${JSON.stringify(n,null,2)}`),u||localStorage.setItem("seatDetails",JSON.stringify(n)),p&&p(n)};return u?e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2},children:[e.jsx(r,{variant:"h4",sx:{fontWeight:"bold",textTransform:"uppercase",mb:{xs:2,sm:3,md:4},fontSize:{xs:"1.5rem",sm:"2rem",md:"2.125rem"}},children:f("ticket_price.ticket_selection")}),e.jsx(r,{variant:"body2",sx:{mb:{xs:2,sm:3,md:4},fontSize:{xs:"0.875rem",sm:"1rem"},color:"red",minHeight:"24px",opacity:x?0:1,visibility:x?"hidden":"visible",transition:"opacity 0.3s ease, visibility 0.3s ease"},children:"*Xin vui lòng chọn ít nhất một loại ghế để tiếp tục."}),e.jsxs(a,{sx:{width:"100%",maxWidth:"900px",margin:"0 auto",overflow:"hidden",position:"relative"},children:[e.jsx(a,{sx:{display:{xs:"flex",md:"none"},flexDirection:"column",gap:2,width:"100%",mb:2},children:c.map(s=>e.jsx(O,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,"&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(U,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,"&:last-child":{pb:2}},children:[e.jsxs(a,{sx:{textAlign:"left"},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:"bold"},children:s.typeName}),e.jsx(r,{variant:"h6",sx:{color:"#FFC107",fontWeight:"bold"},children:v(s.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[e.jsx(L,{onClick:()=>S(s.seatTypeId),sx:{color:s.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:s.quantity===0,size:"small",children:e.jsx(te,{fontSize:"small"})}),e.jsx(r,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:s.quantity}),e.jsx(L,{onClick:()=>j(s.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},s.seatTypeId))}),e.jsx(a,{sx:{display:{xs:"none",md:"flex"},flexDirection:"row",alignItems:"center",justifyContent:"center",gap:2,width:"100%",overflowX:"auto",pb:1},children:c.map(s=>e.jsx(O,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,flex:"1 0 auto",maxWidth:"220px","&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(U,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",p:2,"&:last-child":{pb:2},height:"100%"},children:[e.jsxs(a,{sx:{textAlign:"left",mb:2},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:"bold"},children:s.typeName}),e.jsx(r,{variant:"h5",sx:{color:"#FFC107",fontWeight:"bold"},children:v(s.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx(L,{onClick:()=>S(s.seatTypeId),sx:{color:s.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:s.quantity===0,size:"small",children:e.jsx(te,{fontSize:"small"})}),e.jsx(r,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:s.quantity}),e.jsx(L,{onClick:()=>j(s.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},s.seatTypeId))})]}),p&&e.jsx(a,{sx:{textAlign:"center",minHeight:"48px",mt:3},children:e.jsx(q,{variant:"contained",disabled:!x,sx:{opacity:x?1:0,pointerEvents:x?"auto":"none",transition:"opacity 0.3s ease-in-out",margin:"0 auto",backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5,md:2,lg:3},"&:hover":{backgroundColor:"#FFA000"},fontSize:{xs:"0.875rem",sm:"1rem"}},onClick:h,children:f("ticket_price.next")})})]}):e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2,alignItems:"center",justifyContent:"center",minHeight:"300px"},children:[e.jsx(r,{variant:"h5",sx:{mb:3},children:f("showtime_cinema.title.login_required")}),e.jsx(r,{variant:"body1",sx:{mb:4},children:f("showtime_cinema.title.please_login_to_continue")}),e.jsx(q,{variant:"contained",onClick:()=>{M("/auth/login",{state:{from:window.location.pathname}})},sx:{backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5},"&:hover":{backgroundColor:"#FFA000"}},children:f("login")})]})},Ve=()=>{const p=le(),{movieId:c}=oe(),{t}=H(),[f,g]=o.useState(null),[y,C]=o.useState(""),[x,b]=o.useState(null),[u,M]=o.useState(""),[j,S]=o.useState(!1),{isAuthenticated:T}=ae(),v=o.useCallback(d=>{M(d)},[]),h=o.useCallback(d=>{C(d)},[]),s=o.useCallback(d=>{b(d)},[]),n=o.useCallback(d=>{S(d)},[]),l=o.useCallback(d=>{g(d)},[]),F=o.useCallback(d=>{if(!x){$.error(t("toast.error.showtime.selection"));return}if(d.reduce((J,i)=>J+(i.quantity||0),0)===0){$.error(t("toast.error.ticket.selection"));return}T||$.success("You need to login to continue booking tickets");const A={showTimeId:u,selectedDate:y,selectedTime:x,tickets:d,movieData:f};console.log(`State pass: ${JSON.stringify(A,null,2)}`),setTimeout(()=>{p("/ticket/movie-seat",{state:A})},3e3)},[c,p,u,y,x,f]);return e.jsx(ve,{children:c?e.jsx(re,{maxWidth:"xl",sx:{pb:{xs:5,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(a,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsxs(a,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},width:{xs:"70%",sm:"70%",md:"70%",lg:"100%"},pb:4},children:[e.jsx(a,{sx:{display:{xs:"block",md:"none"},mb:2},children:e.jsx(se,{currentStep:1})}),e.jsx(ke,{onMovieLoad:l}),e.jsx(De,{movieId:c,onRoomSelect:v,onSelectDate:h,onSelectTime:s,onShowtimeAvailability:n}),j&&e.jsx(_e,{onNext:F})]}),e.jsx(a,{sx:{display:{sm:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:{xs:"100%",md:"300px"},flexShrink:0},children:e.jsx(se,{currentStep:1})})]})}):e.jsxs(a,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"white",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`},children:[e.jsx(r,{variant:"h4",fontWeight:"bold",sx:{mb:2},children:t("oops")}),e.jsx(r,{variant:"h6",sx:{p:4,border:2,borderColor:"red",color:"red",borderRadius:2},children:t("translation.footer.movies.not_existing")})]})})};export{Ve as default};
