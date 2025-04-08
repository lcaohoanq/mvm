import{c as N,j as e,W as oe,r as o,a as P,L as re,B as a,C as ie,G as D,T as r,d as $,b as H,M as xe,e as X,R as he,F as me,S as ue,f as B,bX as pe,m as fe,X as O,Y as G,a9 as ge,g as ae,u as le,h as L,aB as Z,V as U}from"./index-B_QWfTc0.js";import{A as ye}from"./AccessTime-CIxWer1A.js";import{a as ee,v as be,T as je,b as ve}from"./vi--vjL-8Hv.js";import{f as I}from"./format-csk1fyom.js";import{S as te}from"./StepTracker-DLYzNICi.js";/* empty css                   */import{S as we}from"./ShowTimeLayout-DBfu12qk.js";import"./Stepper-1WSSae0k.js";import"./CancelOutlined-DWx9L_Pw.js";import"./CheckCircleOutline-DMV1F36D.js";import"./UserDetailLayout-BrbyFB18.js";const Ce=N(e.jsx("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCityOutlined"),Se=N(e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),Te=N(e.jsx("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"PlayCircleOutline"),se=N(e.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),ke=({onMovieLoad:y})=>{const{movieId:m}=oe(),[t,u]=o.useState(),[p,f]=o.useState(!1),[C,c]=o.useState(!0),{t:b}=P(),[g,F]=o.useState(),j=async()=>{try{c(!0);const d=await X.get(`Movie/${m}`);u(d.data.data),y&&y(d.data.data)}catch(d){console.error("Failed to fetch movie:",d)}finally{c(!1)}};o.useEffect(()=>{j()},[b]);const S=d=>{let s=d.replace("youtu.be","youtube.com/embed");s=s.replace("watch?v=","embed/"),s=s+"?autoplay=1",F(s),f(!0)},T=()=>f(!1),w=d=>{if(!d)return"N/A";const s={day:"2-digit",month:"2-digit",year:"numeric"};return new Date(d).toLocaleDateString("vi-VN",s)};return C?e.jsx(re,{}):e.jsxs(a,{sx:{minHeight:"50vh",color:"white",mb:5},children:[e.jsx(ie,{maxWidth:"lg",sx:{color:"white"},children:e.jsxs(D,{container:!0,spacing:4,sx:{alignItems:"stretch"},children:[e.jsx(D,{item:!0,xs:12,md:6,children:e.jsx(a,{component:"img",src:t==null?void 0:t.image,alt:t==null?void 0:t.movieName,sx:{width:"100%",height:"100%",borderRadius:.5,border:"1px solid",borderColor:"#f1f1f1",boxShadow:"0 0 20px rgba(0,0,0,0.5)",objectFit:"cover"}})}),e.jsxs(D,{item:!0,xs:12,md:6,sx:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{variant:"h4",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:t==null?void 0:t.movieName}),e.jsxs(a,{sx:{mb:3,fontWeight:"bold"},children:[e.jsx($,{label:t==null?void 0:t.rating,color:"error",sx:{mb:1,mr:1}}),e.jsx($,{icon:e.jsx(ye,{}),label:`${t==null?void 0:t.duration}'`,sx:{mr:1,mb:1,color:"black",backgroundColor:"yellow"}}),e.jsx($,{label:t==null?void 0:t.categories.map(d=>d.name).join(", "),sx:{mr:1,mb:1,backgroundColor:"#e67e22",color:"white"}})]}),e.jsx(r,{variant:"h6",fontWeight:"bold",mb:2,fontFamily:"JetBrains Mono",children:b("movie_detail.description")}),e.jsxs(a,{sx:{mb:3,textAlign:"justify",flexGrow:1},children:[e.jsxs(r,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.director")})," ",t==null?void 0:t.director]}),e.jsxs(r,{mb:1,variant:"body1",sx:{textAlign:"left"},fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.actors")})," ",t==null?void 0:t.actors]}),e.jsxs(r,{mb:1,variant:"body1",fontFamily:"JetBrains Mono",children:[e.jsx("strong",{children:b("movie_detail.release_date")})," ",w(t==null?void 0:t.fromDate)]}),e.jsx(r,{variant:"h6",fontWeight:"bold",mb:2,mt:4,fontFamily:"JetBrains Mono",children:b("movie_detail.content")}),(t==null?void 0:t.content)&&e.jsx(r,{paragraph:!0,variant:"body1",sx:{textAlign:"justify"},fontFamily:"JetBrains Mono",dangerouslySetInnerHTML:{__html:t.content}}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",mt:3},children:[e.jsx(Te,{sx:{color:"white",mr:1}}),e.jsx(H,{variant:"text",size:"large",onClick:()=>(t==null?void 0:t.trailer)&&S(t.trailer),sx:{color:"white",textTransform:"none",fontSize:"1.5rem",textDecoration:"underline","&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},children:b("view_trailer")})]})]})]})]})}),e.jsx(xe,{open:p,onClose:T,"aria-labelledby":"trailer-modal",sx:{display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(61, 14, 97, 0.95)"},children:e.jsx(a,{sx:{position:"relative",width:"80%",maxWidth:"1000px",aspectRatio:"16/9",bgcolor:"transparent"},children:e.jsx("iframe",{width:"100%",height:"100%",src:g,title:"Movie Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0}})})})]})},q=new Map,Fe=({movieId:y,onRoomSelect:m,onSelectDate:t,onSelectTime:u,onShowtimeAvailability:p})=>{const f=new Date,C=I(f,"dd/MM"),[c,b]=o.useState(C),[g,F]=o.useState("hcm"),[j,S]=o.useState(null),[T,w]=o.useState([]),[d,s]=o.useState(!1),{t:n,i18n:l}=P(),_=o.useRef(null),h=o.useMemo(()=>Array.from({length:4},(i,x)=>{const v=ee(f,x),W=I(v,"EEEE",{locale:l.language==="vi"?be:void 0});return{date:v,formatted:I(v,"dd/MM"),label:n(`${W.toLowerCase()}`)}}),[f,n,l.language]),Y=o.useCallback((i,x)=>{x&&(b(x),t(x),S(null))},[t]),E=i=>q.get(i);o.useEffect(()=>{t(C)},[t,C]);const J=o.useCallback((i,x)=>{S({time:i,id:x}),u(i),m(x),sessionStorage.setItem("currentShowTimeId",x)},[u,m]);return o.useEffect(()=>{const i=h.find(z=>z.formatted===c);if(!i)return;const x=I(i.date,"yyyy-MM-dd"),v=I(ee(i.date,3),"yyyy-MM-dd"),W=I(i.date,"yyyy-MM-dd"),A=`${y}_${x}_${g}`;let R=!0;const ce=async()=>{const z=E(A);if(z){R&&(w(z),s(!1),p(z.length>0));return}s(!0);try{const K=await X.get(`showtime/${y}/from/${x}/to/${v}/locate/${g.toUpperCase()}`);if(!R)return;const M=K.data.data[W];if(!M||!M[g.toUpperCase()]||M[g.toUpperCase()].length===0){const k=[];w(k),q.set(A,k),p(!1);return}const V=M[g.toUpperCase()].map(k=>({name:k.nameTheater,address:k.addressTheater,times:k.listShowTime.map(Q=>({time:I(new Date(Q.startTime),"HH:mm"),showTimeId:Q.showTimeId}))})).filter(k=>k.name&&k.times&&k.times.length>0);w(V),q.set(A,V),p(V.length>0)}catch{const M=[];w(M),q.set(A,M),p(!1)}finally{R&&s(!1)}},de=setTimeout(()=>{ce()},300);return()=>{R=!1,clearTimeout(de)}},[g,c,h,y,p]),o.useEffect(()=>{const i=T.length>0;_.current!==i&&(_.current=i,p(i))},[T.length,p]),e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"h4",fontWeight:"bold",textAlign:"center",fontFamily:"JetBrains Mono",mb:2,sx:{letterSpacing:"1px",textTransform:"uppercase"},children:n("showtime_cinema.title.showtime_list")}),e.jsx(je,{value:c,exclusive:!0,onChange:Y,sx:{display:"flex",justifyContent:"center",gap:2,mb:3},children:h.map((i,x)=>{const v=i.formatted===C;return e.jsxs(ve,{value:i.formatted,sx:{border:"2px solid yellow !important",color:"yellow",backgroundColor:c===i.formatted?"yellow":"transparent","&.Mui-selected":{backgroundColor:"yellow",color:"#834bff",fontWeight:"bold"},"&.Mui-selected:hover":{backgroundColor:"yellow"},borderRadius:"12px",px:3,py:2,minWidth:"100px",position:"relative"},children:[v&&e.jsx(r,{variant:"caption",sx:{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",backgroundColor:"red",color:"white",borderRadius:"4px",px:.5,fontWeight:"bold",whiteSpace:"nowrap"},children:n("showtime_cinema.title.now_day")}),e.jsxs(a,{textAlign:"center",children:[e.jsx(r,{variant:"h6",fontWeight:"bold",mb:1,fontFamily:"JetBrains Mono",children:i.formatted}),e.jsx(r,{variant:"body2",children:i.label})]})]},x)})}),e.jsxs(D,{container:!0,alignItems:"center",justifyContent:"space-between",sx:{mr:2},children:[e.jsx(D,{item:!0,children:e.jsxs(r,{variant:"h4",fontWeight:"bold",sx:{textTransform:"uppercase"},children:["🎬 ",n("showtime_cinema.title.theater_list")]})}),e.jsx(D,{item:!0,children:e.jsx(me,{children:e.jsxs(ue,{value:g,onChange:i=>{F(i.target.value),S(null)},input:e.jsx(pe,{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(Se,{sx:{color:"yellow",fontSize:"1.8rem"}})})}),sx:{border:"2px solid yellow",color:"yellow",fontWeight:"bold",fontSize:"1rem",borderRadius:"10px",textTransform:"uppercase",textAlign:"center",px:3},children:[e.jsx(B,{value:"hcm",children:n("showtime_cinema.location.HCM")}),e.jsx(B,{value:"hn",children:n("showtime_cinema.location.HaNoi")}),e.jsx(B,{value:"bd",children:n("showtime_cinema.location.BinhDuong")}),e.jsx(B,{value:"bp",children:n("showtime_cinema.location.BinhPhuoc")})]})})})]}),d?e.jsx(re,{}):e.jsx(a,{sx:{borderRadius:2},children:T.length>0?T.map((i,x)=>e.jsx(O,{sx:{backgroundColor:"#834bff",color:"white",borderRadius:"12px",p:2,mb:2},children:e.jsxs(G,{children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2,width:"100%"},children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Ce,{sx:{color:"yellow",fontSize:"1.8rem",mr:1}}),e.jsx(r,{variant:"h5",fontWeight:"bold",color:"yellow",children:n("showtime_cinema.title.theater")+": "+i.name})]}),e.jsx(r,{variant:"h6",color:"white",children:n("showtime_cinema.address")+": "+i.address})]}),e.jsx(ge,{sx:{mb:2}}),e.jsxs(r,{variant:"h6",mb:1,children:[n("showtime_cinema.title.showtime"),":"]}),e.jsx(a,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:i.times.map((v,W)=>e.jsx(H,{variant:"contained",sx:{backgroundColor:(j==null?void 0:j.id)===v.showTimeId?"yellow":"transparent",color:(j==null?void 0:j.id)===v.showTimeId?"black":"white",border:"1px solid white",fontWeight:"bold","&:hover":{backgroundColor:"yellow",color:"black"}},onClick:()=>J(v.time,v.showTimeId),children:v.time},W))})]})},x)):e.jsx(r,{variant:"h4",textAlign:"center",sx:{py:5},children:n("showtime_cinema.title.no_showtime")})})]})},Me=he.memo(Fe),ne={en:{locale:"en-US",currency:"USD"},jp:{locale:"ja-JP",currency:"JPY"},vi:{locale:"vi-VN",currency:"VND"}},Ie={VND:1,USD:39e-6,JPY:.0058},_e=({onNext:y})=>{const[m,t]=o.useState([]),{t:u,i18n:p}=P(),[f,C]=o.useState({locale:"vi-VN",currency:"VND"}),[c,b]=o.useState(!1),{isAuthenticated:g}=ae(),F=le();o.useEffect(()=>{const n=p.language.substring(0,2);C(ne[n]||ne.vi)},[p.language]),o.useEffect(()=>{(async()=>{try{const l=(await X.get("seattype")).data.data.map(_=>({..._,quantity:0}));t(l)}catch(n){console.error("Error fetching seat types:",n)}})()},[u]);const j=s=>{t(n=>n.map(l=>l.seatTypeId===s?{...l,quantity:l.quantity+1}:l))},S=s=>{t(n=>n.map(l=>l.seatTypeId===s&&l.quantity>0?{...l,quantity:l.quantity-1}:l))},T=(s,n)=>n==="VND"?s:s*Ie[n],w=s=>{const n=T(s,f.currency);return(f.currency==="JPY"?Math.round(n):n).toLocaleString(f.locale,{style:"currency",currency:f.currency})};o.useEffect(()=>{const s=m.some(n=>n.quantity>0);b(s)},[m]);const d=()=>{const s=m.filter(n=>n.quantity>0);y&&y(s)};return g?e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2},children:[e.jsx(r,{variant:"h4",sx:{fontWeight:"bold",textTransform:"uppercase",mb:{xs:2,sm:3,md:4},fontSize:{xs:"1.5rem",sm:"2rem",md:"2.125rem"}},children:u("ticket_price.ticket_selection")}),e.jsx(r,{variant:"body2",sx:{mb:{xs:2,sm:3,md:4},fontSize:{xs:"0.875rem",sm:"1rem"},color:"red",minHeight:"24px",opacity:c?0:1,visibility:c?"hidden":"visible",transition:"opacity 0.3s ease, visibility 0.3s ease"},children:"*Xin vui lòng chọn ít nhất một loại ghế để tiếp tục."}),e.jsxs(a,{sx:{width:"100%",maxWidth:"900px",margin:"0 auto",overflow:"hidden",position:"relative"},children:[e.jsx(a,{sx:{display:{xs:"flex",md:"none"},flexDirection:"column",gap:2,width:"100%",mb:2},children:m.map(s=>e.jsx(O,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,"&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(G,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,"&:last-child":{pb:2}},children:[e.jsxs(a,{sx:{textAlign:"left"},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:"bold"},children:s.typeName}),e.jsx(r,{variant:"h6",sx:{color:"#FFC107",fontWeight:"bold"},children:w(s.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[e.jsx(L,{onClick:()=>S(s.seatTypeId),sx:{color:s.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:s.quantity===0,size:"small",children:e.jsx(se,{fontSize:"small"})}),e.jsx(r,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:s.quantity}),e.jsx(L,{onClick:()=>j(s.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},s.seatTypeId))}),e.jsx(a,{sx:{display:{xs:"none",md:"flex"},flexDirection:"row",alignItems:"center",justifyContent:"center",gap:2,width:"100%",overflowX:"auto",pb:1},children:m.map(s=>e.jsx(O,{sx:{backgroundColor:"rgba(255,255,255,0.08)",color:"white",borderRadius:2,flex:"1 0 auto",maxWidth:"220px","&:hover":{transform:"scale(1.02)",transition:"0.3s ease-in-out"}},children:e.jsxs(G,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",p:2,"&:last-child":{pb:2},height:"100%"},children:[e.jsxs(a,{sx:{textAlign:"left",mb:2},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:"bold"},children:s.typeName}),e.jsx(r,{variant:"h5",sx:{color:"#FFC107",fontWeight:"bold"},children:w(s.price)})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx(L,{onClick:()=>S(s.seatTypeId),sx:{color:s.quantity>0?"#FFC107":"gray","&:hover":{color:"#FFC107"},p:{xs:1}},disabled:s.quantity===0,size:"small",children:e.jsx(se,{fontSize:"small"})}),e.jsx(r,{variant:"body1",sx:{fontWeight:"bold",mx:1,minWidth:"24px",textAlign:"center"},children:s.quantity}),e.jsx(L,{onClick:()=>j(s.seatTypeId),sx:{color:"white","&:hover":{color:"#FFC107"},p:{xs:1}},size:"small",children:e.jsx(Z,{fontSize:"small"})})]})]})},s.seatTypeId))})]}),y&&e.jsx(a,{sx:{textAlign:"center",minHeight:"48px",mt:3},children:e.jsx(H,{variant:"contained",disabled:!c,sx:{opacity:c?1:0,pointerEvents:c?"auto":"none",transition:"opacity 0.3s ease-in-out",margin:"0 auto",backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5,md:2,lg:3},"&:hover":{backgroundColor:"#FFA000"},fontSize:{xs:"0.875rem",sm:"1rem"}},onClick:d,children:u("ticket_price.next")})})]}):e.jsxs(a,{sx:{color:"white",padding:{xs:2,sm:3,md:6},textAlign:"center",display:"flex",flexDirection:"column",borderRadius:2,alignItems:"center",justifyContent:"center",minHeight:"300px"},children:[e.jsx(r,{variant:"h5",sx:{mb:3},children:u("showtime_cinema.title.login_required")}),e.jsx(r,{variant:"body1",sx:{mb:4},children:u("showtime_cinema.title.please_login_to_continue")}),e.jsx(H,{variant:"contained",onClick:()=>{F("/auth/login",{state:{from:window.location.pathname}})},sx:{backgroundColor:"#FFC107",color:"black",fontWeight:"bold",px:{xs:3,sm:4},py:{xs:1,sm:1.5},"&:hover":{backgroundColor:"#FFA000"}},children:u("login")})]})},Je=()=>{const y=le(),{movieId:m}=oe(),{t}=P(),[u,p]=o.useState(null),[f,C]=o.useState(""),[c,b]=o.useState(null),[g,F]=o.useState(""),[j,S]=o.useState(!1),{isAuthenticated:T}=ae(),w=o.useCallback(h=>{F(h)},[]),d=o.useCallback(h=>{C(h)},[]),s=o.useCallback(h=>{b(h)},[]),n=o.useCallback(h=>{S(h)},[]),l=o.useCallback(h=>{p(h)},[]),_=o.useCallback(h=>{if(!c){U.error(t("toast.error.showtime.selection"));return}if(h.reduce((E,J)=>E+(J.quantity||0),0)===0){U.error(t("toast.error.ticket.selection"));return}T||U.success("You need to login to continue booking tickets"),y("/ticket/movie-seat",{state:{showTimeId:g,selectedDate:f,selectedTime:c,tickets:h,movieData:u}})},[m,y,g,f,c,u]);return e.jsx(we,{children:m?e.jsx(ie,{maxWidth:"xl",sx:{pb:{xs:5,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:e.jsxs(a,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[e.jsxs(a,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},width:{xs:"70%",sm:"70%",md:"70%",lg:"100%"},pb:4},children:[e.jsx(a,{sx:{display:{xs:"block",md:"none"},mb:2},children:e.jsx(te,{currentStep:1})}),e.jsx(ke,{onMovieLoad:l}),e.jsx(Me,{movieId:m,onRoomSelect:w,onSelectDate:d,onSelectTime:s,onShowtimeAvailability:n}),j&&e.jsx(_e,{onNext:_})]}),e.jsx(a,{sx:{display:{sm:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:{xs:"100%",md:"300px"},flexShrink:0},children:e.jsx(te,{currentStep:1})})]})}):e.jsxs(a,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",color:"white",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`},children:[e.jsx(r,{variant:"h4",fontWeight:"bold",sx:{mb:2},children:t("oops")}),e.jsx(r,{variant:"h6",sx:{p:4,border:2,borderColor:"red",color:"red",borderRadius:2},children:t("translation.footer.movies.not_existing")})]})})};export{Je as default};
