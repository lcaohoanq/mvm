import{c as G,j as e,a0 as oe,r as s,a as q,L as ie,B as a,C as re,G as D,T as i,d as V,b as P,M as xe,e as K,a1 as he,F as me,S as ue,f as B,bX as pe,m as fe,a2 as $,a3 as O,aa as ge,g as ae,u as le,h as L,a5 as Z,V as U}from"./index-D3TcYPLx.js";import{A as ye}from"./AccessTime-DgcLRxZ-.js";import{a as ee,v as be,T as je,b as we,R as te}from"./vi-Cn29zwCw.js";import{f as I}from"./format-csk1fyom.js";import{S as ne}from"./StepTracker-CJnJRE5C.js";/* empty css                   */import{S as ve}from"./ShowTimeLayout-DuIbkhcD.js";import"./Stepper-BgMkqNmb.js";import"./CancelOutlined-BbdmITxn.js";import"./CheckCircleOutline-Dn_zmVCU.js";import"./UserDetailLayout-Dq0az9f8.js";const Ce=G(e.jsx("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCityOutlined"),Se=G(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),ke=G(e.jsx("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"PlayCircleOutline"),Te=({onMovieLoad:u})=>{const{movieId:l}=oe(),[t,f]=s.useState(),[g,y]=s.useState(!1),[C,d]=s.useState(!0),{t:b}=q(),[p,F]=s.useState(),j=async()=>{try{d(!0);const x=await K.get(`Movie/${l}`);f(x.data.data),u&&u(x.data.data)}catch(x){console.error("Failed to fetch movie:",x)}finally{d(!1)}};s.useEffect(()=>{j()},[b]);const S=x=>{let n=x.replace("youtu.be","youtube.com/embed");n=n.replace("watch?v=","embed/"),n=n+"?autoplay=1",F(n),y(!0)},k=()=>y(!1),v=x=>{if(!x)return"N/A";const n={day:"2-digit",month:"2-digit",year:"numeric"};return new Date(x).toLocaleDateString("vi-VN",n)};return C?e.jsx(ie,{}):e.jsxs(a,{sx:{minHeight:"50vh",color:"white",mb:5},children:[e.jsx(re,{maxWidth:"lg",sx:{color:"white"},children:e.jsxs(D,{container:!0,spacing:4,sx:{alignItems:"stretch"},children:[e.jsx(D,{item:!0,xs:12,md:6,children:e.jsx(a,{component:"img",src:t==null?void 0:t.image,alt:t==null?void 0:t.movieName,sx:{width:"100%",height:"100%",borderRadius:.5,border:"1px solid",borderColor:"#f1f1f1",boxShadow:"0 0 20px rgba(0,0,0,0.5)",objectFit:"cover"}})}),e.jsxs(D,{item:!0,xs:12,md:6,sx:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:t==null?void 0:t.movieName}),e.jsxs(a,{sx:{mb:3,fontWeight:"bold"},children:[e.jsx(V,{label:t==null?void 0:t.rating,color:"error",sx:{mb:1,mr:1}}),e.jsx(V,{icon:e.jsx(ye,{}),label:`${t==null?void 0:t.duration}'`,sx:{mr:1,mb:1,color:"black",backgroundColor:"yellow"}}),e.jsx(V,{label:t==null?void 0:t.categories.map(x=>x.name).join(", "),sx:{mr:1,mb:1,backgroundColor:"#e67e22",color:"white"}})]}),e.jsx(i,{variant:"h6",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:b("movie_detail.description")}),e.jsxs(a,{sx:{mb:3,textAlign:"justify",flexGrow:1},children:[e.jsxs(i,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.director")})," ",t==null?void 0:t.director]}),e.jsxs(i,{mb:1,variant:"body1",sx:{textAlign:"left"},fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.actors")})," ",t==null?void 0:t.actors]}),e.jsxs(i,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.release_date")})," ",v(t==null?void 0:t.fromDate)]}),e.jsx(i,{variant:"h6",fontWeight:"bold",mb:2,mt:4,fontFamily:"JetBrains Mono",children:b("movie_detail.content")}),e.jsx(i,{paragraph:!0,variant:"body1",sx:{textAlign:"justify"},fontFamily:"JetBrains Mono",children:t==null?void 0:t.content}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",mt:3},children:[e.jsx(ke,{sx:{color:"white",mr:1}}),e.jsx(P,{variant:"text",size:"large",onClick:()=>(t==null?void 0:t.trailer)&&S(t.trailer),sx:{color:"white",textTransform:"none",fontSize:"1.5rem",textDecoration:"underline","&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},children:b("view_trailer")})]})]})]})]})}),e.jsx(xe,{open:g,onClose:k,"aria-labelledby":"trailer-modal",sx:{display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(61, 14, 97, 0.95)"},children:e.jsx(a,{sx:{position:"relative",width:"80%",maxWidth:"1000px",aspectRatio:"16/9",bgcolor:"transparent"},children:e.jsx("iframe",{width:"100%",height:"100%",src:p,title:"Movie Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0}})})})]})},Fe=(u,l)=>{switch(u){case"hcm":return l("showtime_cinema.location.HCM");case"hn":return l("showtime_cinema.location.HaNoi");case"bd":return l("showtime_cinema.location.BinhDuong");case"bp":return l("showtime_cinema.location.BinhPhuoc");default:return l("showtime_cinema.location.Unknown")||"Unknown"}},N=new Map,Me=({movieId:u,onRoomSelect:l,onSelectDate:t,onSelectTime:f,onShowtimeAvailability:g})=>{const y=new Date,C=I(y,"dd/MM"),[d,b]=s.useState(C),[p,F]=s.useState("hcm"),[j,S]=s.useState(null),[k,v]=s.useState([]),[x,n]=s.useState(!1),{t:o,i18n:c}=q(),_=s.useRef(null),m=s.useMemo(()=>Array.from({length:4},(r,h)=>{const w=ee(y,h),W=I(w,"EEEE",{locale:c.language==="vi"?be:void 0});return{date:w,formatted:I(w,"dd/MM"),label:o(`${W.toLowerCase()}`)}}),[y,o,c.language]),X=s.useCallback((r,h)=>{h&&(b(h),t(h),S(null))},[t]),H=r=>N.get(r);s.useEffect(()=>{t(C)},[t,C]);const E=s.useCallback((r,h)=>{S({time:r,id:h}),f(r),l(h),sessionStorage.setItem("currentShowTimeId",h)},[f,l]);return s.useEffect(()=>{const r=m.find(z=>z.formatted===d);if(!r)return;const h=I(r.date,"yyyy-MM-dd"),w=I(ee(r.date,3),"yyyy-MM-dd"),W=I(r.date,"yyyy-MM-dd"),A=`${u}_${h}_${p}`;let R=!0;const ce=async()=>{const z=H(A);if(z){R&&(v(z),n(!1),g(z.length>0));return}n(!0);try{const Y=await K.get(`showtime/${u}/from/${h}/to/${w}/locate/${p.toUpperCase()}`);if(!R)return;const M=Y.data.data[W];if(!M||!M[p.toUpperCase()]||M[p.toUpperCase()].length===0){const T=[];v(T),N.set(A,T),g(!1);return}const J=M[p.toUpperCase()].map(T=>({name:T.nameTheater,address:T.addressTheater,times:T.listShowTime.map(Q=>({time:I(new Date(Q.startTime),"HH:mm"),showTimeId:Q.showTimeId}))})).filter(T=>T.name&&T.times&&T.times.length>0);v(J),N.set(A,J),g(J.length>0)}catch{const M=[];v(M),N.set(A,M),g(!1)}finally{R&&n(!1)}},de=setTimeout(()=>{ce()},300);return()=>{R=!1,clearTimeout(de)}},[p,d,m,u,g]),s.useEffect(()=>{const r=k.length>0;_.current!==r&&(_.current=r,g(r))},[k.length,g]),e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"h4",fontWeight:"bold",textAlign:"center",fontFamily:"JetBrains Mono",mb:2,sx:{letterSpacing:"1px",textTransform:"uppercase"},children:o("showtime_cinema.title.showtime_list")}),e.jsx(je,{value:d,exclusive:!0,onChange:X,sx:{display:"flex",justifyContent:"center",gap:2,mb:3},children:m.map((r,h)=>{const w=r.formatted===C;return e.jsxs(we,{value:r.formatted,sx:{border:"2px solid yellow !important",color:"yellow",backgroundColor:d===r.formatted?"yellow":"transparent","&.Mui-selected":{backgroundColor:"yellow",color:"#834bff",fontWeight:"bold"},"&.Mui-selected:hover":{backgroundColor:"yellow"},borderRadius:"12px",px:3,py:2,minWidth:"100px",position:"relative"},children:[w&&e.jsx(i,{variant:"caption",sx:{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",backgroundColor:"red",color:"white",borderRadius:"4px",px:.5,fontWeight:"bold",whiteSpace:"nowrap"},children:o("showtime_cinema.title.now_day")}),e.jsxs(a,{textAlign:"center",children:[e.jsx(i,{variant:"h6",fontWeight:"bold",mb:1,fontFamily:"JetBrains Mono",children:r.formatted}),e.jsx(i,{variant:"body2",children:r.label})]})]},h)})}),e.jsxs(D,{container:!0,alignItems:"center",justifyContent:"space-between",sx:{mr:2},children:[e.jsx(D,{item:!0,children:e.jsxs(i,{variant:"h4",fontWeight:"bold",sx:{textTransform:"uppercase"},children:["🎬 ",o("showtime_cinema.title.theater_list")]})}),e.jsx(D,{item:!0,children:e.jsx(me,{children:e.jsxs(ue,{value:p,onChange:r=>{F(r.target.value),S(null)},input:e.jsx(pe,{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(Se,{sx:{color:"yellow",fontSize:"1.8rem"}})})}),sx:{border:"2px solid yellow",color:"yellow",fontWeight:"bold",fontSize:"1rem",borderRadius:"10px",textTransform:"uppercase",textAlign:"center",px:3},children:[e.jsx(B,{value:"hcm",children:o("showtime_cinema.location.HCM")}),e.jsx(B,{value:"hn",children:o("showtime_cinema.location.HaNoi")}),e.jsx(B,{value:"bd",children:o("showtime_cinema.location.BinhDuong")}),e.jsx(B,{value:"bp",children:o("showtime_cinema.location.BinhPhuoc")})]})})})]}),x?e.jsx(ie,{}):e.jsx(a,{sx:{borderRadius:2},children:k.length>0?k.map((r,h)=>e.jsx($,{sx:{backgroundColor:"#834bff",color:"white",borderRadius:"12px",p:2,mb:2},children:e.jsxs(O,{children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2,width:"100%"},children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Ce,{sx:{color:"yellow",fontSize:"1.8rem",mr:1}}),e.jsx(i,{variant:"h5",fontWeight:"bold",color:"yellow",children:"Rạp: "+r.name+" ( "+Fe(p,o)+" )"})]}),e.jsx(i,{variant:"h6",color:"white",children:"Địa chỉ: "+r.address})]}),e.jsx(ge,{sx:{mb:2}}),e.jsx(i,{variant:"h6",mb:1,children:"Khung giờ chiếu"}),e.jsx(a,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:r.times.map((w,W)=>e.jsx(P,{variant:"contained",sx:{backgroundColor:(j==null?void 0:j.id)===w.showTimeId?"yellow":"transparent",color:(j==null?void 0:j.id)===w.showTimeId?"black":"white",border:"1px solid white",fontWeight:"bold","&:hover":{backgroundColor:"yellow",color:"black"}},onClick:()=>E(w.time,w.showTimeId),children:w.time},W))})]})},h)):e.jsx(i,{variant:"h4",textAlign:"center",sx:{py:5},children:o("showtime_cinema.title.no_showtime")})})]})},Ie=he.memo(Me),se={en:{locale:"en-US",currency:"USD"},jp:{locale:"ja-JP",currency:"JPY"},vi:{locale:"vi-VN",currency:"VND"}},_e={VND:1,USD:39e-6,JPY:.0058},De=({onNext:u})=>{const[l,t]=s.useState([]),{t:f,i18n:g}=q(),[y,C]=s.useState({locale:"vi-VN",currency:"VND"}),[d,b]=s.useState(!1),{isAuthenticated:p}=ae(),F=le();s.useEffect(()=>{const o=g.language.substring(0,2);C(se[o]||se.vi)},[g.language]),s.useEffect(()=>{(async()=>{try{const c=(await K.get("seattype")).data.data.map(_=>({..._,quantity:0}));t(c)}catch(o){console.error("Error fetching seat types:",o)}})()},[f]);const j=n=>{t(o=>o.map(c=>c.seatTypeId===n?{...c,quantity:c.quantity+1}:c))},S=n=>{t(o=>o.map(c=>c.seatTypeId===n&&c.quantity>0?{...c,quantity:c.quantity-1}:c))},k=(n,o)=>o==="VND"?n:n*_e[o],v=n=>{const o=k(n,y.currency);return(y.currency==="JPY"?Math.round(o):o).toLocaleString(y.locale,{style:"currency",currency:y.currency})};s.useEffect(()=>{const n=l.some(o=>o.quantity>0);b(n)},[l]);const x=()=>{const n=l.filter(o=>o.quantity>0);u&&u(n)};return p?e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2},children:[e.jsx(i,{variant:"h4",sx:{fontWeight:"bold",textTransform:"uppercase",mb:{xs:2,sm:3,md:4},fontSize:{xs:"1.5rem",sm:"2rem",md:"2.125rem"}},children:f("ticket_price.ticket_selection")}),e.jsx(i,{variant:"body2",sx:{mb:{xs:2,sm:3,md:4},fontSize:{xs:"0.875rem",sm:"1rem"},color:"red",minHeight:"24px",opacity:d?0:1,visibility:d?"hidden":"visible",transition:"opacity 0.3s ease, visibility 0.3s ease"},children:"*Xin vui lòng chọn ít nhất một loại ghế để tiếp tục."}),e.jsxs(a,{sx:{width:"100%",maxWidth:"900px",margin:"0 auto",overflow:"hidden",position:"relative"},children:[e.jsx(a,{sx:{display:{xs:"flex",md:"none"},flexDirection:"column",gap:2,width:"100%",mb:2},children:l.map(n=>e.jsx($,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,"&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(O,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,"&:last-child":{pb:2}},children:[e.jsxs(a,{sx:{textAlign:"left"},children:[e.jsx(i,{variant:"subtitle1",sx:{fontWeight:"bold"},children:n.typeName}),e.jsx(i,{variant:"h6",sx:{color:"#FFC107",fontWeight:"bold"},children:v(n.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[e.jsx(L,{onClick:()=>S(n.seatTypeId),sx:{color:n.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:n.quantity===0,size:"small",children:e.jsx(te,{fontSize:"small"})}),e.jsx(i,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:n.quantity}),e.jsx(L,{onClick:()=>j(n.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},n.seatTypeId))}),e.jsx(a,{sx:{display:{xs:"none",md:"flex"},flexDirection:"row",alignItems:"center",justifyContent:"center",gap:2,width:"100%",overflowX:"auto",pb:1},children:l.map(n=>e.jsx($,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,flex:"1 0 auto",maxWidth:"220px","&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(O,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",p:2,"&:last-child":{pb:2},height:"100%"},children:[e.jsxs(a,{sx:{textAlign:"left",mb:2},children:[e.jsx(i,{variant:"subtitle1",sx:{fontWeight:"bold"},children:n.typeName}),e.jsx(i,{variant:"h5",sx:{color:"#FFC107",fontWeight:"bold"},children:v(n.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx(L,{onClick:()=>S(n.seatTypeId),sx:{color:n.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:n.quantity===0,size:"small",children:e.jsx(te,{fontSize:"small"})}),e.jsx(i,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:n.quantity}),e.jsx(L,{onClick:()=>j(n.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},n.seatTypeId))})]}),u&&e.jsx(a,{sx:{textAlign:"center",minHeight:"48px",mt:3},children:e.jsx(P,{variant:"contained",disabled:!d,sx:{opacity:d?1:0,pointerEvents:d?"auto":"none",transition:"opacity 0.3s ease-in-out",margin:"0 auto",backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5,md:2,lg:3},"&:hover":{backgroundColor:"#FFA000"},fontSize:{xs:"0.875rem",sm:"1rem"}},onClick:x,children:f("ticket_price.next")})})]}):e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2,alignItems:"center",justifyContent:"center",minHeight:"300px"},children:[e.jsx(i,{variant:"h5",sx:{mb:3},children:f("showtime_cinema.title.login_required")}),e.jsx(i,{variant:"body1",sx:{mb:4},children:f("showtime_cinema.title.please_login_to_continue")}),e.jsx(P,{variant:"contained",onClick:()=>{F("/auth/login",{state:{from:window.location.pathname}})},sx:{backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5},"&:hover":{backgroundColor:"#FFA000"}},children:f("login")})]})},Ve=()=>{const u=le(),{movieId:l}=oe(),{t}=q(),[f,g]=s.useState(null),[y,C]=s.useState(""),[d,b]=s.useState(null),[p,F]=s.useState(""),[j,S]=s.useState(!1),{isAuthenticated:k}=ae(),v=s.useCallback(m=>{F(m)},[]),x=s.useCallback(m=>{C(m)},[]),n=s.useCallback(m=>{b(m)},[]),o=s.useCallback(m=>{S(m)},[]),c=s.useCallback(m=>{g(m)},[]),_=s.useCallback(m=>{if(!d){U.error(t("toast.error.showtime.selection"));return}if(m.reduce((H,E)=>H+(E.quantity||0),0)===0){U.error(t("toast.error.ticket.selection"));return}k||U.success("You need to login to continue booking tickets"),u("/ticket/movie-seat",{state:{showTimeId:p,selectedDate:y,selectedTime:d,tickets:m,movieData:f}})},[l,u,p,y,d,f]);return e.jsx(ve,{children:l?e.jsx(re,{maxWidth:"xl",sx:{pb:{xs:5,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(a,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsxs(a,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},width:{xs:"70%",sm:"70%",md:"70%",lg:"100%"},pb:4},children:[e.jsx(a,{sx:{display:{xs:"block",md:"none"},mb:2},children:e.jsx(ne,{currentStep:1})}),e.jsx(Te,{onMovieLoad:c}),e.jsx(Ie,{movieId:l,onRoomSelect:v,onSelectDate:x,onSelectTime:n,onShowtimeAvailability:o}),j&&e.jsx(De,{onNext:_})]}),e.jsx(a,{sx:{display:{sm:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:{xs:"100%",md:"300px"},flexShrink:0},children:e.jsx(ne,{currentStep:1})})]})}):e.jsxs(a,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"white",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`},children:[e.jsx(i,{variant:"h4",fontWeight:"bold",sx:{mb:2},children:t("oops")}),e.jsx(i,{variant:"h6",sx:{p:4,border:2,borderColor:"red",color:"red",borderRadius:2},children:t("translation.footer.movies.not_existing")})]})})};export{Ve as default};
