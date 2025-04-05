import{c as H,j as e,a7 as B,u as G,g as R,a as J,J as Q,r as c,U as $,W as K,B as i,X,Y as Z,Z as ee,_ as C,$ as te,C as ne,T as o,aD as d,l as h,aE as v,aF as D,aG as I,aC as x,F as T,I as S,S as k,f as Y,m as ae,b as m,aH as se,E as M,o as le,p as ie,aI as re,e as de,V as oe}from"./index-BZsQtJZU.js";import{S as ce}from"./ScrollFloat-CppFvG2i.js";const he=H(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),ue=["P - Phim dành cho mọi lứa tuổi","K - Phim dành cho trẻ em dưới 13 tuổi","T13 - Phim dành cho khán giả từ 13 tuổi trở lên","T16 - Phim dành cho khán giả từ 16 tuổi trở lên","T18 - Phim dành cho khán giả từ 18 tuổi trở lên"],xe=["2D","3D","Phụ đề","Lồng tiếng"];function fe({onSubmit:P,movie:s}){var y;B();const O=G(),L=ue,W=xe,{userDetails:g}=R(),{t:A}=J(),{watch:me,control:r,handleSubmit:N,reset:p,setValue:ge}=Q({defaultValues:{movieName:"",image:"",fromDate:"",toDate:"",actors:"",director:"",rating:"",duration:(s==null?void 0:s.duration)||void 0,version:"",trailer:"",content:"",userId:(g==null?void 0:g.userId)||"",categoriesIds:((y=s==null?void 0:s.categories)==null?void 0:y.map(t=>t.categoryId))||[]}});c.useEffect(()=>{s&&p(s)},[s,p]);const V={cloudName:M.CLOUDINARY_CLOUD_NAME,uploadPreset:"movie_up"},[j,f]=c.useState((s==null?void 0:s.image)||""),[E,F]=c.useState([]),q=async()=>{try{const t=await de.get("category");console.log(t.data.data),F(t.data.data)}catch(t){oe.error("Lỗi khi tải thể loại: "+t.message)}};c.useEffect(()=>{q()},[A]);const w=t=>{const n={...t,fromDate:x(t.fromDate).toISOString(),toDate:x(t.toDate).toISOString()};P(n),b(!1)},[l,b]=c.useState(!s);return e.jsxs($,{disableCustomTheme:!1,children:[e.jsx(K,{enableColorScheme:!0}),e.jsxs(i,{sx:{display:"flex",height:"100vh"},children:[e.jsx(X,{}),e.jsxs(i,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(Z,{}),e.jsxs(i,{component:"main",sx:t=>({flexGrow:1,backgroundColor:ee(t.palette.background.default,1),overflowY:"auto",px:3,py:2}),children:[e.jsxs(C,{spacing:2,children:[e.jsx(te,{}),e.jsxs(ne,{maxWidth:"xl",sx:{pt:{xs:"64px",sm:"72px",md:"10px"},pb:{xs:4,sm:6,md:8},position:"relative",zIndex:1},children:[e.jsx(i,{sx:{textAlign:"center",mb:{xs:4,sm:5,md:1}},children:e.jsx(ce,{animationDuration:1,ease:"back.inOut(2)",scrollStart:"center bottom+=50%",scrollEnd:"bottom bottom-=40%",stagger:.08,children:e.jsx(o,{variant:"h3",fontWeight:"bold",sx:{textTransform:"uppercase"},children:s?"Chi Tiết Phim":"Thêm Phim Mới"})})}),e.jsxs("form",{onSubmit:N(w),children:[e.jsxs(C,{direction:"row",spacing:2,sx:{alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(i,{sx:{flex:1,maxWidth:750},children:[e.jsx(d,{name:"movieName",control:r,rules:{required:"Tên phim không được để trống"},render:({field:t,fieldState:{error:n}})=>e.jsx(h,{...t,fullWidth:!0,label:"Tên phim",margin:"dense",variant:"outlined",sx:{mt:3},error:!!n,helperText:n?n.message:"",InputProps:{readOnly:!l}})}),e.jsx(d,{name:"fromDate",control:r,rules:{required:"Vui lòng chọn ngày khởi chiếu"},render:({field:t,fieldState:{error:n}})=>e.jsx(v,{dateAdapter:D,children:e.jsx(I,{label:"Ngày khởi chiếu",...t,value:t.value?x(t.value,"YYYY-MM-DD"):null,onChange:a=>t.onChange((a==null?void 0:a.format("YYYY-MM-DD"))||""),slotProps:{textField:{size:"small",margin:"dense",error:!!n,helperText:n?n.message:"",fullWidth:!0}},format:"DD/MM/YYYY",readOnly:!l})})}),e.jsx(i,{children:e.jsx(d,{name:"toDate",control:r,rules:{required:"Vui lòng chọn ngày kết thúc"},render:({field:t,fieldState:{error:n}})=>e.jsx(v,{dateAdapter:D,children:e.jsx(I,{label:"Ngày kết thúc",...t,value:t.value?x(t.value,"YYYY-MM-DD"):null,onChange:a=>t.onChange((a==null?void 0:a.format("YYYY-MM-DD"))||""),slotProps:{textField:{size:"small",margin:"dense",error:!!n,helperText:n?n.message:"",fullWidth:!0}},format:"DD/MM/YYYY",readOnly:!l})})})}),e.jsx(d,{name:"rating",control:r,rules:{required:"Chọn phân loại độ tuổi"},render:({field:t,fieldState:{error:n}})=>e.jsxs(T,{fullWidth:!0,margin:"dense",variant:"outlined",error:!!n,children:[e.jsx(S,{id:"demo-simple-select-label",children:"Phân loại độ tuổi"}),e.jsx(k,{...t,labelId:"demo-simple-select-label",id:"demo-simple-select",disabled:!l,children:L.map(a=>e.jsx(Y,{value:a,children:a},a))}),n&&e.jsx(o,{variant:"caption",color:"error",children:n.message})]})}),e.jsx(d,{name:"version",control:r,rules:{required:"Chọn phiên bản"},render:({field:t,fieldState:{error:n}})=>e.jsxs(T,{fullWidth:!0,margin:"dense",variant:"outlined",error:!!n,children:[e.jsx(S,{id:"demo-simple-select-label",children:"Phiên bản"}),e.jsx(k,{...t,labelId:"demo-simple-select-label",id:"demo-simple-select",disabled:!l,children:W.map(a=>e.jsx(Y,{value:a,children:a},a))}),n&&e.jsx(o,{variant:"caption",color:"error",children:n.message})]})}),e.jsx(d,{name:"duration",control:r,rules:{min:{value:1,message:"Thời lượng không được để trống"}},render:({field:t,fieldState:{error:n}})=>e.jsx(h,{...t,fullWidth:!0,label:"Thời lượng",type:"number",margin:"dense",variant:"outlined",value:t.value,error:!!n,helperText:n?n.message:"",InputProps:{endAdornment:e.jsx(ae,{position:"end",children:"phút"}),readOnly:!l}})}),e.jsx(d,{name:"director",control:r,rules:{required:"Đạo diễn không được để trống"},render:({field:t,fieldState:{error:n}})=>e.jsx(h,{...t,fullWidth:!0,label:"Đạo diễn",margin:"dense",variant:"outlined",error:!!n,helperText:n?n.message:"",InputProps:{readOnly:!l}})})]}),e.jsx(i,{children:e.jsx(d,{name:"image",control:r,rules:{required:"Vui lòng cập nhật ảnh"},render:({field:t,fieldState:{error:n}})=>e.jsxs(i,{component:"section",sx:{p:2,width:250,maxHeight:"100%",border:"1px dashed grey",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs(i,{sx:{mt:1,mb:1,position:"relative"},children:[e.jsx("img",{src:t.value||j||"https://lh3.googleusercontent.com/proxy/eyweV2OAAOQOPKLAO51xBA1NJmnzv_6_Py10QJaddFLuSx42Ebf1OHUlMyxyW6G-acvTbxsT7phMBH7xTqdLyDw_5dW5kymvT-Q",alt:"Uploaded",style:{maxWidth:"100%",maxHeight:"100%"}}),j&&l&&e.jsx(m,{onClick:()=>{f(""),t.onChange("")},sx:{position:"absolute",top:5,right:5,minWidth:"auto",padding:0},color:"error",children:e.jsx(he,{})})]}),l&&e.jsx(se,{uwConfig:V,setPublicId:a=>{const u=`https://res.cloudinary.com/${M.CLOUDINARY_CLOUD_NAME}/image/upload/${a}`;f(u),t.onChange(u)}}),n&&e.jsx(o,{variant:"caption",color:"error",sx:{mt:1},children:n.message})]})})})]}),e.jsx(d,{name:"actors",control:r,rules:{required:"Diễn viên không được để trống"},render:({field:t,fieldState:{error:n}})=>e.jsx(h,{...t,fullWidth:!0,label:"Diễn viên",margin:"dense",variant:"outlined",sx:{mt:3},error:!!n,helperText:n?n.message:"",InputProps:{readOnly:!l}})}),e.jsx(d,{name:"trailer",control:r,rules:{required:"Trailer không được để trống"},render:({field:t,fieldState:{error:n}})=>e.jsx(h,{...t,fullWidth:!0,label:"Link trailer",margin:"dense",variant:"outlined",error:!!n,helperText:n?n.message:"",InputProps:{readOnly:!l}})}),e.jsx(d,{name:"categoriesIds",control:r,rules:{validate:t=>t.length>0||"Vui lòng chọn ít nhất 1 thể loại"},render:({field:t,fieldState:{error:n}})=>e.jsxs(i,{sx:{mt:2},children:[e.jsx(o,{variant:"h6",sx:{mb:1},children:"Thể loại"}),e.jsx(i,{sx:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)"},children:E.map((a,u)=>e.jsx(le,{control:e.jsx(ie,{checked:t.value.includes(a.categoryId),onChange:U=>{const _=U.target.checked?[...t.value,a.categoryId]:t.value.filter(z=>z!==a.categoryId);t.onChange(_)},disabled:!l}),label:a.name},u))}),n&&e.jsx(o,{variant:"caption",color:"error",children:n.message})]})}),e.jsx(d,{name:"content",control:r,defaultValue:"",rules:{required:"Nội dung không được để trống",validate:t=>t.trim()!==""||"Nội dung không được để trống"},render:({field:t,fieldState:{error:n}})=>e.jsxs(i,{sx:{mt:1,mb:2},children:[" ",e.jsxs(o,{variant:"h6",sx:{mb:1},children:[" ","Nội dung"]}),e.jsx(re,{value:t.value,onChange:a=>t.onChange(a),error:n==null?void 0:n.message,readOnly:!l})]})}),e.jsx(i,{sx:{display:"flex",justifyContent:"center",mt:3},children:l?e.jsx(m,{type:"submit",variant:"contained",children:s?"Cập Nhật":"Thêm Phim"}):null})]}),l?null:e.jsx(i,{sx:{display:"flex",justifyContent:"center",mt:1},children:e.jsx(m,{variant:"contained",onClick:()=>b(!0),children:"Chỉnh sửa"})})]})]}),e.jsx(m,{onClick:()=>O("/admin/ql-phim"),children:"Trở lại"})]})]})]})]})}export{fe as M};
