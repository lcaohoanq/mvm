import{W as U,u as V,r as s,j as e,L as W,C as L,B as i,T as g,ak as t,l,h as D,b as c,o as x,V as p}from"./index-B_QWfTc0.js";import{u as w}from"./useQuery-BJpiDE26.js";import{u as P,a as k}from"./user.apis-CQ52kz8D.js";import{M as E}from"./ManagementPageLayout-BNCoekW3.js";import{F as S}from"./FileUploadOutlined-SBEhn2Rd.js";import{R as B,a as j}from"./RadioGroup-BDpDNwsB.js";const G=()=>{const{id:m}=U(),b=V(),{data:a=null,isLoading:y,error:v}=w({queryKey:["memberDetail",m],queryFn:async()=>{const n=await k(m);if(!n.isSuccess||!n.data)throw new Error(n.message||"Failed to fetch member data");return n.data}}),[r,d]=s.useState(null),[C,h]=s.useState(null),u=s.useRef(null);if(s.useEffect(()=>{a&&a.avatar&&d(a.avatar)},[a]),s.useEffect(()=>{r&&console.log("Image URL updated:",r)},[r]),!a)return null;if(y)return e.jsx(W,{});if(v)return e.jsx("div",{children:"Failed to fetch data"});if(!a)return e.jsx("div",{children:"No employee data found"});const _=n=>{var f;const o=(f=n.target.files)==null?void 0:f[0];if(o){console.log(o);const R=URL.createObjectURL(o);d(R),h(o)}n.target.value=""},F=n=>{d(n.target.value)},I=()=>{d(null),h(null),u.current&&(u.current.value="")},N=async()=>{if(m)try{await P(m,{fullName:a.fullName,birthDate:a.birthDate,avatar:a.avatar,gender:a.gender,email:a.email,phoneNumber:a.phoneNumber,address:a.address}),console.log("Image to save:",C||r),p.success("Cập nhật thông tin thành công")}catch{p.error("Cập nhật thông tin thất bại")}};return e.jsx(E,{children:e.jsx(L,{maxWidth:"md",children:e.jsxs(i,{sx:{py:4},children:[e.jsx(g,{variant:"h4",component:"h1",sx:{mb:4},children:t("admin.member_management.title")}),e.jsxs(i,{sx:{mb:2},children:[e.jsx(l,{fullWidth:!0,margin:"normal",label:t("admin.member_management.image"),variant:"standard",value:r||"",onChange:F,InputProps:{endAdornment:e.jsxs(D,{component:"label",children:[e.jsx(S,{}),e.jsx("input",{ref:u,style:{display:"none"},type:"file",accept:"image/*",hidden:!0,onChange:_,name:"[licenseFile]"})]})}}),r&&e.jsxs(i,{sx:{mt:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(i,{component:"img",src:r,alt:"Preview",sx:{maxWidth:"100%",maxHeight:"200px",objectFit:"contain",border:"1px solid #ddd",borderRadius:"4px",mt:1}}),e.jsx(c,{size:"small",color:"error",onClick:I,sx:{mt:1},children:t("admin.member_management.remove_image")})]})]}),e.jsx(l,{label:t("admin.employee_management.detail.account"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.userName}),e.jsx(l,{label:t("admin.employee_management.detail.fullname"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.fullName}),e.jsx(l,{label:t("admin.employee_management.detail.birthday"),variant:"standard",fullWidth:!0,margin:"normal",type:"date",defaultValue:a.birthDate,InputLabelProps:{style:{top:"-1.5rem"}}}),e.jsxs(i,{sx:{display:"flex",gap:"2rem",alignItems:"center",justifyContent:"flex-start",my:2},children:[e.jsx(g,{children:t("admin.employee_management.detail.gender")}),e.jsxs(B,{defaultValue:a.gender||"Male",sx:{display:"flex",gap:10,flexDirection:"row"},children:[e.jsx(x,{value:"Male",control:e.jsx(j,{}),label:"Nam"}),e.jsx(x,{value:"Female",control:e.jsx(j,{}),label:"Nữ"})]})]}),e.jsx(l,{label:t("admin.employee_management.detail.email"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.email}),e.jsx(l,{label:t("admin.employee_management.detail.id_card"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.idCard}),e.jsx(l,{label:t("admin.employee_management.detail.phone"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.phoneNumber}),e.jsx(l,{label:t("admin.employee_management.detail.address"),variant:"standard",fullWidth:!0,margin:"normal",defaultValue:a.address}),e.jsxs(i,{sx:{mt:4,display:"flex",justifyContent:"flex-end",gap:2},children:[e.jsx(c,{onClick:()=>{b(-1)},color:"error",variant:"contained",children:t("admin.employee_management.come_back")}),e.jsx(c,{onClick:N,color:"primary",variant:"contained",children:t("admin.employee_management.save")})]})]})})})};export{G as default};
