import{c as a,j as e,a as p,B as s}from"./index-B0N4umr3.js";import{S as h,a as b,b as d}from"./Stepper-Cnj2KS6U.js";import{C as m}from"./CancelOutlined-C_LdPdKt.js";import{C as x}from"./CheckCircleOutline-D0uz6DH2.js";const u=a(e.jsx("path",{d:"M15 5v7H9V5zm0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2m7 7h-3v3h3zM5 10H2v3h3zm15 5H4v6h2v-4h12v4h2z"}),"EventSeatOutlined"),S=a(e.jsx("path",{d:"M4 6.47 5.76 10H20v8H4zM22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z"}),"MovieOutlined"),g=a(e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"}),"PaymentOutlined"),H=({currentStep:r,paymentStatus:i})=>{const{t}=p(),n=[{label:t("step_tracker.select_show_time"),icon:e.jsx(S,{})},{label:t("step_tracker.select_seat"),icon:e.jsx(u,{})},{label:t("step_tracker.payment"),icon:e.jsx(g,{})}],c=i==="failure"?{label:t("step_tracker.failed"),icon:e.jsx(m,{})}:{label:t("step_tracker.success"),icon:e.jsx(x,{})};return e.jsx(s,{sx:{position:"absolute",right:0,top:0,backgroundColor:"rgba(18, 18, 18, 0.8)",backdropFilter:"blur(8px)",borderRadius:"12px",display:{xs:"none",md:"block"},padding:{xs:1,sm:2,md:3},mt:{xs:2,sm:3,md:4},width:{xs:"60%",md:"70%"},height:"fit-content",transition:"all 0.3s ease",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:e.jsx(h,{activeStep:r-1,orientation:"vertical",sx:{"& .MuiStepConnector-line":{minHeight:"40px",borderLeftColor:"rgba(255, 255, 255, 0.2)",transition:"border-color 0.3s ease"},"& .MuiStepLabel-label":{color:"gray",fontSize:"0.9rem",marginLeft:1,transition:"color 0.3s ease"},"& .MuiStepLabel-label.Mui-active":{color:"white !important",fontWeight:"bold"},"& .MuiStepLabel-label.Mui-completed":{color:"white !important"},"& .MuiStepLabel-iconContainer":{paddingRight:0},"& .MuiStep-root":{transition:"all 0.3s ease","&:hover":{"& .MuiStepLabel-label":{color:"rgba(255, 255, 255, 0.8)"}}}},children:[...n,c].map((l,o)=>e.jsx(b,{children:e.jsx(d,{StepIconComponent:()=>e.jsx(s,{sx:{color:o<r?o==3&&i=="failure"?"red":"#834bff":"gray",display:"flex",alignItems:"center",transition:"color 0.3s ease"},children:l.icon}),children:l.label})},o))})})};export{H as S};
