import{az as T,u as C,j as t,B as r,P as i,T as e,Y as d,b as k}from"./index-DZtaYlZS.js";import{S as c,C as w}from"./StepTracker-B89-jwKr.js";import{H as F,F as z}from"./Header-s1ujL9H0.js";import{H as N}from"./Home-zHfk0_fL.js";import{C as H}from"./Container-D8PCRmru.js";import{G as o}from"./Grid-DdXUmaHF.js";import"./Stepper-Bkj2XqRl.js";import"./Search-P2Cg3KsU.js";const A=()=>{const n=T(),l=C(),{selectedTime:x,selectedDate:h,paymentStatus:m}=n.state||{selectedTime:"Not selected",selectedDate:"Not selected",paymentStatus:"success"},{movieTitle:g="Phim Mặc Định",screen:p="Màn hình 1",showDate:b=h,showTime:u=x,seats:s=[],price:a=1e5,fullName:j="",email:f="",idNumber:y="",phone:v=""}=n.state||{},B=s.length*a,S=()=>{l("/")};return t.jsxs(r,{sx:{minHeight:"100vh",background:`linear-gradient(to bottom,
          rgba(11, 13, 26, 0.95) 0%,
          rgba(11, 13, 26, 0.85) 100%
        )`,position:"relative","&::before":{content:'""',position:"fixed",top:0,left:0,right:0,bottom:0,background:`radial-gradient(circle at 20% 30%, rgba(78, 46, 131, 0.4) 0%, rgba(78, 46, 131, 0) 50%),
                      radial-gradient(circle at 75% 15%, rgba(33, 64, 154, 0.4) 0%, rgba(33, 64, 154, 0) 50%),
                      linear-gradient(135deg, #0B0D1A 0%, #1A1E3C 50%, #3A1155 100%)`,zIndex:-1}},children:[t.jsx(F,{}),t.jsx(H,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"80px"},pb:{xs:4,sm:6,md:8},px:{xs:2,sm:3,md:4},position:"relative"},children:t.jsxs(r,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:[t.jsx(r,{sx:{display:{xs:"none",md:"block"},position:"sticky",top:"100px",alignSelf:"flex-start",height:"fit-content",width:"250px",flexShrink:0},children:t.jsx(c,{currentStep:4,paymentStatus:m})}),t.jsxs(r,{sx:{flex:1,display:"flex",flexDirection:"column",gap:{xs:2,sm:3,md:4},pb:4},children:[t.jsx(r,{sx:{display:{xs:"block",md:"none"},mb:2},children:t.jsx(c,{currentStep:4})}),t.jsxs(o,{container:!0,spacing:4,children:[t.jsx(o,{item:!0,xs:12,md:4,children:t.jsx(i,{sx:{p:2,backgroundColor:"rgba(28, 28, 28, 0.7)",borderRadius:2},children:t.jsx(r,{component:"img",src:"https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F01-2025%2Fden-am-hon-poster.png&w=2048&q=75",alt:"Movie Poster",sx:{width:"100%",borderRadius:1,objectFit:"cover",maxHeight:500,boxShadow:"0 8px 16px rgba(0,0,0,0.3)"}})})}),t.jsxs(o,{item:!0,xs:12,md:8,children:[t.jsxs(i,{sx:{p:3,backgroundColor:"rgba(28, 28, 28, 0.7)",color:"white",mb:3,borderRadius:2},children:[t.jsx(e,{variant:"h5",fontFamily:"JetBrains Mono",sx:{mb:3,color:"#90caf9"},children:"Thông Tin Đặt Vé"}),t.jsx(d,{sx:{mb:3,borderColor:"rgba(255,255,255,0.1)"}}),t.jsxs(o,{container:!0,spacing:3,children:[t.jsxs(o,{item:!0,xs:12,sm:6,children:[t.jsx(e,{variant:"h6",gutterBottom:!0,sx:{color:"primary.light",fontSize:"1rem",fontWeight:"bold",pb:1},children:"Thông Tin Phim"}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Tên phim:"})," ",g]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Màn hình:"})," ",p]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Ngày chiếu:"})," ",b]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Giờ chiếu:"})," ",u]})]}),t.jsxs(o,{item:!0,xs:12,sm:6,children:[t.jsx(e,{variant:"h6",gutterBottom:!0,sx:{color:"primary.light",fontSize:"1rem",fontWeight:"bold",pb:1},children:"Thông Tin Vé"}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Ghế:"})," ",s.join(", ")]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Giá:"})," ",a.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,sx:{color:"#ffc107",fontWeight:"bold",fontSize:"1.1rem",mt:1},children:[t.jsx("strong",{children:"Tổng cộng:"})," ",B.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]})]})]}),t.jsx(d,{sx:{my:3,borderColor:"rgba(255,255,255,0.1)"}}),t.jsxs(r,{children:[t.jsx(e,{variant:"h6",gutterBottom:!0,sx:{color:"primary.light",fontSize:"1rem",fontWeight:"bold",pb:1},children:"Thông Tin Khách Hàng"}),t.jsxs(o,{container:!0,spacing:2,children:[t.jsxs(o,{item:!0,xs:12,sm:6,children:[t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Họ tên:"})," ",j]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Email:"})," ",f]})]}),t.jsxs(o,{item:!0,xs:12,sm:6,children:[t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"CMND:"})," ",y]}),t.jsxs(e,{variant:"body1",gutterBottom:!0,children:[t.jsx("strong",{children:"Số điện thoại:"})," ",v]})]})]})]})]}),t.jsx(r,{sx:{display:"flex",justifyContent:"center",mt:4},children:t.jsx(k,{variant:"contained",color:"primary",onClick:S,startIcon:t.jsx(N,{}),sx:{px:4,py:1.5,fontSize:"1rem",borderRadius:2,textTransform:"none",fontWeight:"bold",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)",background:"linear-gradient(45deg, #1a237e 0%, #3949ab 100%)","&:hover":{background:"linear-gradient(45deg, #283593 0%, #5c6bc0 100%)"}},children:"Về Trang Chủ"})})]})]}),t.jsxs(i,{elevation:3,sx:{display:"flex",alignItems:"center",py:2,px:3,backgroundColor:"rgba(46, 125, 50, 0.15)",borderLeft:"4px solid #4caf50",borderRadius:1,mb:3,maxWidth:{xs:"100%",md:"80%"},mx:"auto",position:"relative",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.15)","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at top right, rgba(76, 175, 80, 0.15), transparent 70%)",zIndex:0}},children:[t.jsx(w,{sx:{fontSize:40,mr:2,color:"#4caf50",filter:"drop-shadow(0 0 6px rgba(76, 175, 80, 0.4))",zIndex:1}}),t.jsxs(r,{sx:{flex:1,zIndex:1},children:[t.jsx(e,{variant:"h6",fontWeight:"bold",gutterBottom:!1,fontFamily:"JetBrains Mono",sx:{mb:.5},color:"primary.light",children:"Đặt Vé Thành Công!"}),t.jsx(e,{variant:"body2",sx:{color:"rgba(255, 255, 255, 0.8)"},children:"Cảm ơn bạn đã đặt vé. Vui lòng kiểm tra email để xem thông tin vé."})]})]})]})]})}),t.jsx(z,{})]})};export{A as default};
