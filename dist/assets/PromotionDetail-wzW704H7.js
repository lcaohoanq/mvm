import{a0 as f,u as b,a as j,r as a,e as y,j as t,B as i,H as v,C as d,L as C,T as m,b as c,a2 as D,a3 as B,aC as p,i as F}from"./index-BZsQtJZU.js";import{A as Y}from"./Aurora-D4q7lszs.js";import{C as A}from"./CardMedia-DRsqB3Gf.js";const _=()=>{const{id:r}=f(),g=b(),{t:o}=j(),[e,u]=a.useState(null),[h,n]=a.useState(!0),[l,x]=a.useState("");return a.useEffect(()=>{r?y.get(`promotions/${r}`).then(s=>{u(s.data.data),n(!1)}).catch(s=>{console.error("Error fetching promotion:",s),x(o("promotion.detail.not_found")),n(!1)}):(x(o("promotion.detail.not_found")),n(!1))},[r,o]),t.jsxs(i,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[t.jsx(i,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:0,opacity:.4,pointerEvents:"none"},children:t.jsx(Y,{colorStops:["#3A29FF","#FF94B4","#FF3232"],blend:1,amplitude:2.5,speed:1})}),t.jsx(v,{}),h?t.jsx(d,{maxWidth:"md",sx:{mt:10,mb:7,py:6,textAlign:"center"},children:t.jsx(C,{})}):l||!e?t.jsxs(d,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative",zIndex:1},children:[t.jsx(m,{variant:"h6",gutterBottom:!0,children:l||o("promotion.detail.not_found")}),t.jsx(c,{onClick:()=>g("/promotions"),variant:"contained",sx:{mt:2},children:o("promotion.detail.back")})]}):t.jsx(d,{maxWidth:"lg",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative",zIndex:1},children:t.jsxs(D,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},mt:5},className:"promotion-card",children:[t.jsx(A,{component:"img",image:e.image||"https://thumbs.dreamstime.com/b/page-not-found-error-hand-drawn-ghost-doodle-vector-illustration-internet-connection-trouble-concept-105206287.jpg",alt:e.promotionName,sx:{width:{xs:"100%",md:"50%"},height:"auto",objectFit:"inherit"}}),t.jsxs(B,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:3},children:[t.jsx(m,{variant:"h5",color:"primary",gutterBottom:!0,children:e.promotionName}),t.jsxs(m,{variant:"subtitle2",gutterBottom:!0,children:[o("promotion.detail.period"),":"," ",p(e.fromDate).format("DD/MM/YYYY")," -"," ",p(e.toDate).format("DD/MM/YYYY")]}),t.jsx(i,{sx:{typography:"body1",mt:1},className:"quill-content",dangerouslySetInnerHTML:{__html:e.content}}),t.jsx(c,{variant:"contained",color:"secondary",sx:{mt:2,alignSelf:"start"},children:o("promotion.detail.book_now")})]})]})}),t.jsx(F,{})]})};export{_ as default};
