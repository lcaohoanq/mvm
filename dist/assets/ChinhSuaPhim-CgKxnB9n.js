import{w as D,u as F,r as a,j as e,L as z,A as I,o as L,B as s,p as S,q as T,t as k,v as R,H as P,h as i,e as A,b as d,T as t,k as x,F as B,n as H,l as N}from"./index-DEjXvp86.js";import{u as U}from"./useQuery-D27YYA5l.js";import{c as G,d as E}from"./mock.apis-BEaqN8Z2.js";import{C as M}from"./Container-mUn0TD3k.js";import{F as O}from"./FileUploadOutlined-WWUbwBsM.js";import{R as q,a as u,F as Q}from"./RadioGroup-DueWhq4i.js";const Z=({disableCustomTheme:m=!1})=>{const{id:r}=D();F();const{data:j,isLoading:p,error:f}=U(["MovieDetailData",r],()=>E(r),{enabled:!!r}),[o,g]=a.useState("https://i.pinimg.com/550x/2e/74/01/2e74015286f261ee4fea125c17597640.jpg"),v=a.useRef(null),[c,b]=a.useState([]),[h,y]=a.useState([]),C=()=>{console.log("Upload")},w=l=>{y(n=>n.includes(l)?n.filter(W=>W!==l):[...n,l])};return a.useEffect(()=>{(async()=>{try{const n=await G();b(n)}catch(n){console.error("Failed to fetch categories:",n)}})()},[]),p?e.jsx(z,{}):f?e.jsx("div",{children:"Failed to fetch data"}):j?e.jsxs(I,{disableCustomTheme:m,children:[e.jsx(L,{enableColorScheme:!0}),e.jsxs(s,{sx:{display:"flex",height:"100vh"},children:[e.jsx(S,{}),e.jsxs(s,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(T,{}),e.jsx(s,{component:"main",sx:l=>({flexGrow:1,backgroundColor:k(l.palette.background.default,1),overflowY:"auto",px:3,py:2}),children:e.jsxs(R,{spacing:2,alignItems:"center",children:[e.jsx(P,{}),e.jsxs(M,{sx:{backgroundColor:"#f5f5f5",color:"#000000",py:3},children:[e.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:5},children:[e.jsx(i,{sx:{width:"30%",whiteSpace:"pre-line",overflow:"hidden",textOverflow:"ellipsis"},margin:"normal",label:"Hình ảnh",variant:"standard",value:o||"",multiline:!0,minRows:1,InputProps:{readOnly:!0,endAdornment:e.jsxs(A,{component:"label",children:[e.jsx(O,{}),e.jsx("input",{ref:v,style:{display:"none"},type:"file",accept:"image/*",hidden:!0,onChange:C,name:"[licenseFile]"})]})}}),o&&e.jsxs(s,{sx:{mt:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(s,{component:"img",src:o,alt:"Preview",sx:{maxWidth:"100%",maxHeight:"300px",objectFit:"contain",border:"1px solid #ddd",borderRadius:"4px",mt:1}}),e.jsx(d,{size:"small",color:"error",sx:{mt:1},onClick:()=>g(null),children:"Xóa hình"})]})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Tên phim"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Từ ngày"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small",type:"date"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Đến ngày"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small",type:"date"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Diễn viên"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Hãng phim"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Đạo diễn"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Thời lượng"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2,display:"flex",gap:2,flexDirection:"row",alignItems:"center"},children:[e.jsx(t,{variant:"subtitle1",sx:{minWidth:100,textAlign:"right",paddingRight:2},children:"Phiên bản"}),e.jsxs(q,{row:!0,children:[e.jsx(x,{value:"2D",control:e.jsx(u,{}),label:"2D"}),e.jsx(x,{value:"3D",control:e.jsx(u,{}),label:"3D"})]})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Trailer"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsx(s,{sx:{mt:3},children:e.jsxs(B,{component:"fieldset",variant:"standard",children:[e.jsx(H,{component:"legend",children:e.jsx(t,{variant:"subtitle1",children:"Thể Loại"})}),e.jsx(Q,{sx:{mt:1,display:"flex",flexDirection:"row",flexWrap:"wrap"},children:c.length>0?c.map(l=>e.jsx(x,{control:e.jsx(N,{checked:h.includes(l.categoryId),onChange:()=>w(l.categoryId),name:`category-${l.categoryId}`}),label:l.name,sx:{width:"33%",minWidth:"150px"}},l.categoryId)):e.jsx(t,{color:"text.secondary",children:"Loading categories..."})})]})}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Phòng chiếu"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Lịch chiếu"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"}),e.jsxs(d,{sx:{mt:2},variant:"contained",children:[" ","Thêm giờ chiếu"]})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Nội dung"}),e.jsx(i,{fullWidth:!0,variant:"outlined",multiline:!0,rows:4})]}),e.jsxs(s,{sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",children:"Mã NV"}),e.jsx(i,{fullWidth:!0,variant:"outlined",size:"small"})]}),e.jsx(s,{sx:{mt:3,display:"flex",justifyContent:"center"},children:e.jsx(d,{variant:"contained",color:"primary",size:"large",sx:{minWidth:200},onClick:()=>console.log("Selected categories:",h),children:"Lưu thông tin"})})]})]})})]})]})]}):e.jsxs("div",{children:["No movie found with ID: ",r]})};export{Z as default};
