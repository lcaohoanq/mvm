import{c as t,j as e,a as c,B as n}from"./index-CfB7U6qc.js";import{S as p,a as h,b}from"./Stepper-D_P4zype.js";const d=t(e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}),"CancelOutlined"),x=t(e.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline"),m=t(e.jsx("path",{d:"M15 5v7H9V5zm0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2m7 7h-3v3h3zM5 10H2v3h3zm15 5H4v6h2v-4h12v4h2z"}),"EventSeatOutlined"),u=t(e.jsx("path",{d:"M4 6.47 5.76 10H20v8H4zM22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z"}),"MovieOutlined"),S=t(e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"}),"PaymentOutlined"),g=({currentStep:a,paymentStatus:i})=>{const{t:o}=c(),r=[{label:o("step_tracker.select_show_time"),icon:e.jsx(u,{})},{label:o("step_tracker.select_seat"),icon:e.jsx(m,{})},{label:o("step_tracker.payment"),icon:e.jsx(S,{})},i==="success"?{label:o("step_tracker.success"),icon:e.jsx(x,{})}:{label:"Hủy Thanh Toán",icon:e.jsx(d,{sx:{color:"red"}})}];return e.jsx(n,{sx:{backgroundColor:"rgba(18, 18, 18, 0.8)",backdropFilter:"blur(8px)",borderRadius:"12px",mt:10,padding:3,height:"fit-content",position:"relative",transition:"all 0.3s ease",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:e.jsx(p,{activeStep:a-1,orientation:"vertical",sx:{"& .MuiStepConnector-line":{minHeight:"40px",borderLeftColor:"rgba(255, 255, 255, 0.2)",transition:"border-color 0.3s ease"},"& .MuiStepLabel-label":{color:"gray",fontSize:"0.9rem",marginLeft:1,transition:"color 0.3s ease"},"& .MuiStepLabel-label.Mui-active":{color:"white !important",fontWeight:"bold"},"& .MuiStepLabel-label.Mui-completed":{color:"white !important"},"& .MuiStepLabel-iconContainer":{paddingRight:0},"& .MuiStep-root":{transition:"all 0.3s ease","&:hover":{"& .MuiStepLabel-label":{color:"rgba(255, 255, 255, 0.8)"}}}},children:[...r].map((s,l)=>e.jsx(h,{children:e.jsx(b,{StepIconComponent:()=>e.jsx(n,{sx:{color:l<a?"#834bff":"gray",display:"flex",alignItems:"center",transition:"color 0.3s ease"},children:s.icon}),children:s.label})},l))})})};export{x as C,g as S};
