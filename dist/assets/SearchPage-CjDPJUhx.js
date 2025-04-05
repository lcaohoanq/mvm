import{a as z,u as A,a7 as D,r as a,j as e,L as W,B as r,H as B,C as E,T as s,G as v,d as L,b as x,M as U,i as _,e as N}from"./index-BZsQtJZU.js";import{A as G}from"./Aurora-D4q7lszs.js";import{S as H}from"./ScrollToTop-CwQMyPfg.js";import{C as $,P as Y}from"./PlayCircleOutlineOutlined-CIpNmYmP.js";import{S as q}from"./ScrollFloat-CppFvG2i.js";import{P as J}from"./Pagination-CbhNOyWP.js";import{f as y}from"./format-csk1fyom.js";import{p as w}from"./parseISO-DYw7kXTp.js";const oe=()=>{const{t:i}=z(),C=A(),S=D(),[n,k]=a.useState([]),[F,p]=a.useState(!0),[T,h]=a.useState(!1),[m,u]=a.useState(null),[g,M]=a.useState(1),l=8,c=new URLSearchParams(S.search).get("keyword")||"";a.useEffect(()=>{c&&(async()=>{try{p(!0);const t=await N.get(`movie/name-relative/${encodeURIComponent(c)}`);console.log("Search results:",t.data.data),k(t.data.data)}catch(t){console.error("Error fetching search results:",t)}finally{p(!1)}})()},[c]);const I=o=>{let t=o.replace("youtu.be","youtube.com/embed");t=t.replace("watch?v=","embed/"),t=t+"?autoplay=1",u(t),h(!0)},b=()=>{h(!1),u(null)},f=Math.ceil(n.length/l),j=g*l,R=j-l,O=n.slice(R,j),P=(o,t)=>{M(t),window.scrollTo({top:0,behavior:"smooth"})};return F?e.jsx(W,{}):e.jsxs(r,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[e.jsx(r,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:0,opacity:.4,pointerEvents:"none"},children:e.jsx(G,{colorStops:["#3A29FF","#FF94B4","#FF3232"],blend:1,amplitude:2.5,speed:1})}),e.jsx(B,{}),e.jsxs(E,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},position:"relative",zIndex:1},children:[e.jsx(r,{sx:{textAlign:"center",mb:{xs:4,sm:5,md:6}},children:e.jsx(q,{animationDuration:1,ease:"back.inOut(2)",scrollStart:"center bottom+=50%",scrollEnd:"bottom bottom-=40%",stagger:.08,children:e.jsx(s,{variant:"h3",fontWeight:"bold",sx:{color:"white",textTransform:"uppercase",fontSize:{xs:"1.75rem",sm:"2.25rem",md:"2.5rem"}},children:i("search_result")})})}),!n||n.length===0?e.jsx(r,{sx:{textAlign:"center",m:4,p:4,border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:2,backdropFilter:"blur(10px)",backgroundColor:"rgba(255, 255, 255, 0.05)"},children:e.jsx(s,{variant:"h6",sx:{color:"#834bff"},children:i("no_search_result")})}):e.jsxs(e.Fragment,{children:[e.jsx(v,{container:!0,spacing:3,children:O.map((o,t)=>e.jsx(v,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(r,{className:"movie-card",sx:{display:"flex",flexDirection:"column",height:"100%",backgroundColor:"rgba(28, 28, 28, 0.6)",borderRadius:"12px",overflow:"hidden",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-8px)",boxShadow:"0 12px 20px rgba(0,0,0,0.3)"}},children:[e.jsxs(r,{sx:{position:"relative"},children:[e.jsx(r,{sx:{position:"relative",overflow:"hidden",height:{xs:"200px",sm:"250px",md:"300px"},width:"100%"},children:e.jsx("img",{src:o.image,alt:o.movieName,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"contain",transition:"transform 0.5s ease"},onMouseOver:d=>{d.currentTarget.style.transform="scale(1.05)"},onMouseOut:d=>{d.currentTarget.style.transform="scale(1)"}})}),e.jsx(L,{icon:e.jsx($,{}),label:e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(s,{variant:"caption",sx:{fontWeight:"bold"},children:y(w(o.postDate),"MMM")}),e.jsx(s,{variant:"caption",children:y(w(o.postDate),"dd, yyyy")})]}),sx:{position:"absolute",top:0,left:0,backgroundColor:"orange",color:"white",fontWeight:"bold",borderRadius:"3px 0 3px 0","& .MuiSvgIcon-root":{color:"white",fontSize:"1rem"}}})]}),e.jsxs(r,{sx:{p:2.5,display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(s,{variant:"h6",sx:{color:"white",height:"3em",textAlign:"center",mb:2,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",fontSize:{xs:"1rem",sm:"1.1rem",md:"1.2rem"}},children:o.movieName}),e.jsxs(r,{sx:{display:"flex",gap:1,mt:"auto",justifyContent:"space-between"},children:[e.jsxs(x,{variant:"text",sx:{color:"#FFFFFF",display:"flex",alignItems:"center",gap:.5,"&:hover":{color:"#FFD700"}},onClick:()=>I(o.trailer),children:[e.jsx(Y,{}),e.jsx(s,{variant:"button",sx:{textDecoration:"underline",fontSize:{xs:"0.7rem",sm:"0.8rem"}},children:i("view_trailer")})]}),e.jsx(x,{variant:"contained",sx:{backgroundColor:"yellow",color:"black",fontWeight:"bold",transition:"transform 0.3s ease, background-color 0.3s ease","&:hover":{backgroundColor:"#FFD700",transform:"scale(1.05)"}},onClick:()=>C(`/ticket/${o.movieId}`),children:i("book_ticket")})]})]})]})},t))}),f>1&&e.jsx(r,{sx:{display:"flex",justifyContent:"center",mt:4},children:e.jsx(J,{count:f,color:"primary",page:g,onChange:P,sx:{"& .MuiPaginationItem-root":{color:"white",fontSize:"1.1rem",mx:.5},"& .Mui-selected":{backgroundColor:"rgba(255, 255, 255, 0.2) !important"}}})})]})]}),e.jsx(U,{open:T,onClose:b,closeAfterTransition:!0,sx:{display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(0, 0, 0, 0.8)"},children:e.jsxs(r,{sx:{position:"relative",width:"80%",maxWidth:"1000px",aspectRatio:"16/9",bgcolor:"transparent"},children:[e.jsx(x,{sx:{position:"absolute",top:10,right:10,color:"white",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",minWidth:"40px",height:"40px",zIndex:10,"&:hover":{backgroundColor:"rgba(255,0,0,0.7)"}},onClick:b,children:"✖"}),m&&e.jsx("iframe",{width:"100%",height:"100%",src:m,title:"Movie Trailer",frameBorder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,borderRadius:"10px"}})]})}),e.jsx(H,{}),e.jsx(_,{})]})};export{oe as default};
