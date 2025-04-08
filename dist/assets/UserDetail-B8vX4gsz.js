import{ac as W,ad as L,r as x,ae as $,j as e,cz as Pe,y as z,af as V,ag as _,bU as ge,cA as q,a1 as ae,c as X,l as y,W as Se,g as ke,a as Me,L as Re,aa as Ie,a8 as Ne,h as O,an as He,T as C,B as u,G as E,x as te,cB as Ae,cC as R,bP as I,cD as N,o as H,b as F,cE as t,m as le}from"./index-BUPix-ev.js";import{L as Be}from"./Lock-DVjABKim.js";import{u as Ue,b as We}from"./user.apis-DztKo1Pj.js";import{U as Le}from"./UserDetailLayout-Do05CNEs.js";import{u as $e}from"./useQuery-NlTOwUC4.js";import{T as ze,a as A}from"./Tabs-CTKeXtI2.js";import{R as ne,a as B}from"./RadioGroup-D1OCAbsE.js";import{a as ie,V as ce}from"./VisibilityOff-Df6NcTn7.js";import{S as Ve}from"./Snackbar-CwpuGNrf.js";import{A as _e}from"./Alert-R87I6AkX.js";import{f as de}from"./format-csk1fyom.js";import{p as Oe}from"./parseISO-DYw7kXTp.js";function Ee(o){return W("MuiTable",o)}L("MuiTable",["root","stickyHeader"]);const Fe=o=>{const{classes:s,stickyHeader:r}=o;return _({root:["root",r&&"stickyHeader"]},Ee,s)},Ge=z("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[s.root,r.stickyHeader&&s.stickyHeader]}})(ge(({theme:o})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...o.typography.body2,padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:s})=>s.stickyHeader,style:{borderCollapse:"separate"}}]}))),he="table",pe=x.forwardRef(function(s,r){const l=$({props:s,name:"MuiTable"}),{className:h,component:i=he,padding:b="normal",size:p="medium",stickyHeader:f=!1,...j}=l,a={...l,component:i,padding:b,size:p,stickyHeader:f},g=Fe(a),T=x.useMemo(()=>({padding:b,size:p,stickyHeader:f}),[b,p,f]);return e.jsx(Pe.Provider,{value:T,children:e.jsx(Ge,{as:i,role:i===he?null:"table",ref:r,className:V(g.root,h),ownerState:a,...j})})});function qe(o){return W("MuiTableBody",o)}L("MuiTableBody",["root"]);const Xe=o=>{const{classes:s}=o;return _({root:["root"]},qe,s)},De=z("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,s)=>s.root})({display:"table-row-group"}),Ke={variant:"body"},me="tbody",xe=x.forwardRef(function(s,r){const l=$({props:s,name:"MuiTableBody"}),{className:h,component:i=me,...b}=l,p={...l,component:i},f=Xe(p);return e.jsx(q.Provider,{value:Ke,children:e.jsx(De,{className:V(f.root,h),as:i,ref:r,role:i===me?null:"rowgroup",ownerState:p,...b})})});function Qe(o){return W("MuiTableHead",o)}L("MuiTableHead",["root"]);const Ye=o=>{const{classes:s}=o;return _({root:["root"]},Qe,s)},Je=z("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(o,s)=>s.root})({display:"table-header-group"}),Ze={variant:"head"},ue="thead",be=x.forwardRef(function(s,r){const l=$({props:s,name:"MuiTableHead"}),{className:h,component:i=ue,...b}=l,p={...l,component:i},f=Ye(p);return e.jsx(q.Provider,{value:Ze,children:e.jsx(Je,{as:i,className:V(f.root,h),ref:r,role:i===ue?null:"rowgroup",ownerState:p,...b})})});function es(o){return W("MuiTableRow",o)}const fe=L("MuiTableRow",["root","selected","hover","head","footer"]),ss=o=>{const{classes:s,selected:r,hover:l,head:h,footer:i}=o;return _({root:["root",r&&"selected",l&&"hover",h&&"head",i&&"footer"]},es,s)},os=z("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[s.root,r.head&&s.head,r.footer&&s.footer]}})(ge(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${fe.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${fe.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:ae(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:ae(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}))),je="tr",U=x.forwardRef(function(s,r){const l=$({props:s,name:"MuiTableRow"}),{className:h,component:i=je,hover:b=!1,selected:p=!1,...f}=l,j=x.useContext(q),a={...l,component:i,hover:b,selected:p,head:j&&j.variant==="head",footer:j&&j.variant==="footer"},g=ss(a);return e.jsx(os,{as:i,ref:r,className:V(g.root,h),role:i===je?null:"row",ownerState:a,...f})}),G=X(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle"),rs=X(e.jsx("path",{d:"M21 8V7l-3 2-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"}),"ContactMail"),ye=X(e.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");function as({readOnly:o,...s}){return e.jsx(y,{inputProps:{readOnly:o},sx:{"&:has([readonly]) ":{"& .MuiInputLabel-filled":{color:"#cecece"},"& .MuiFilledInput-root":{"&:before":{borderBottom:"1px solid #cecece"}}}},...s})}function fs(){const{userId:o}=Se(),{userDetails:s}=ke(),[r,l]=x.useState(0),[h,i]=x.useState({old:!1,new:!1,confirm:!1}),[b,p]=x.useState(""),[f,j]=x.useState(!1),{t:a}=Me(),[g,T]=x.useState(""),[k,D]=x.useState({oldPassword:"",newPassword:"",confirmPassword:""}),[m,K]=x.useState({}),{data:M,isLoading:ve,error:Q}=$e({queryKey:["bill"],queryFn:()=>We(o)});if(x.useEffect(()=>{s&&o===s.userId&&K({...s,birthDate:s.birthDate?de(Oe(s.birthDate),"yyyy-MM-dd"):"",ticket:{history:[],data:[]}})},[s,o]),ve)return e.jsx(Re,{});Q&&console.log("Error fetching bill:",Q);const Y=n=>{const{name:c,value:d}=n.target;D(v=>({...v,[c]:d})),(c==="confirmPassword"||c==="newPassword")&&(c==="confirmPassword"&&d!==k.newPassword||c==="newPassword"&&d!==k.confirmPassword?T("Mật khẩu không khớp"):T(""))},w=n=>{const{name:c,value:d}=n.target;K(v=>({...v,[c]:d}))},J=n=>{i({...h,[n]:!h[n]})},we=(n,c)=>{l(c)},Ce=()=>{p("Mật khẩu đã được cập nhật thành công!"),j(!0),D({oldPassword:"",newPassword:"",confirmPassword:""})},Te=async n=>{try{const c={...m,birthDate:m.birthDate?new Date(m.birthDate).toISOString():null};await Ue(n,c),p(a("user.profile.update_success")),j(!0)}catch{p(a("user.profile.update_failed")),j(!0)}},Z=()=>{j(!1)};return e.jsxs(Le,{children:[e.jsxs("div",{className:"relative min-h-[300px] bg-white shadow-md rounded-lg overflow-hidden",children:[e.jsx("div",{className:"h-60 relative",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1680783307371-749c26e0f5c3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Background",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"bg-white p-6 pt-8 relative",children:[e.jsx("div",{className:"absolute left-8 -top-12",children:e.jsx(Ie,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(O,{size:"small",sx:{bgcolor:"primary.main",color:"white"},children:e.jsx(He,{fontSize:"small"})}),children:e.jsx(Ne,{alt:m.fullName,src:(s==null?void 0:s.avatar)||"/api/placeholder/100/100",sx:{width:150,height:150,borderRadius:"50%",border:"4px solid transparent",backgroundColor:"white",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"scale(1.05)",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.2)",borderColor:"#4CAF50"}}})})}),e.jsxs("div",{className:"ml-48",children:[e.jsx(C,{variant:"h4",fontWeight:"bold",sx:{mb:1},color:"black",children:m.fullName}),e.jsxs(u,{sx:{display:"flex",justifyContent:"start",alignItems:"center",gap:2,mb:1},children:[e.jsx(rs,{color:"primary"}),e.jsx(C,{variant:"body2",sx:{mb:1},color:"black",children:m.email})]}),(s==null?void 0:s.role)===2||(s==null?void 0:s.role)===1?e.jsx(u,{sx:{display:"inline-block",bgcolor:(s==null?void 0:s.role)===2?"error.main":"info.main",color:"primary.contrastText",borderRadius:2,py:.5,px:2,mb:2},children:e.jsx(C,{variant:"body2",fontWeight:"medium",children:(s==null?void 0:s.role)===2?a("user.profile.admin"):a("user.profile.employee")})}):e.jsx(u,{sx:{display:"inline-block",bgcolor:"primary.light",color:"primary.contrastText",borderRadius:2,py:.5,px:2,mb:2},children:e.jsxs(C,{variant:"body2",fontWeight:"medium",children:[a("user.profile.cumulative_points"),": ",m.point]})})]})]})]}),e.jsx(u,{sx:{display:"flex",gap:{xs:2,sm:3,md:4},color:"white",position:"relative",minHeight:"100vh"},children:e.jsxs(E,{container:!0,spacing:3,sx:{mt:3},children:[e.jsx(E,{item:!0,xs:12,md:3,children:e.jsx(te,{elevation:2,sx:{p:2,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:2},children:e.jsxs(Ae,{component:"nav",sx:{width:"100%"},disablePadding:!0,children:[e.jsxs(R,{button:!0,selected:r===0,onClick:()=>l(0),sx:{borderRadius:1,mb:1},children:[e.jsx(I,{children:e.jsx(G,{color:r===0?"primary":"inherit"})}),e.jsx(N,{primary:a("user.profile.account_info"),primaryTypographyProps:{fontWeight:r===0?"bold":"normal",color:r===0?"primary":"text.secondary"}})," "]}),(s==null?void 0:s.role)===0&&e.jsxs(R,{button:!0,selected:r===1,onClick:()=>l(1),sx:{borderRadius:1,mb:1},children:[e.jsx(I,{children:e.jsx(G,{color:r===1?"primary":"inherit"})}),e.jsx(N,{primary:a("user.profile.history"),primaryTypographyProps:{fontWeight:r===1?"bold":"normal",color:r===1?"primary":"text.secondary"}})," "]}),(s==null?void 0:s.role)===0&&e.jsxs(R,{button:!0,selected:r===2,onClick:()=>l(2),sx:{borderRadius:1,mb:1},children:[e.jsx(I,{children:e.jsx(G,{color:r===2?"primary":"inherit"})}),e.jsx(N,{primary:a("user.profile.booked_tickets"),primaryTypographyProps:{fontWeight:r===2?"bold":"normal",color:r===2?"primary":"text.secondary"}})," "]}),(s==null?void 0:s.role)!==2&&e.jsxs(R,{button:!0,selected:r===3,onClick:()=>l(3),sx:{borderRadius:1,mb:1},children:[e.jsx(I,{children:e.jsx(Be,{color:r===3?"primary":"inherit"})}),e.jsx(N,{primary:a("user.profile.change_password"),primaryTypographyProps:{fontWeight:r===3?"bold":"normal",color:r===3?"primary":"text.secondary"}})]})]})})}),e.jsx(E,{item:!0,xs:12,md:9,children:e.jsxs(te,{elevation:2,sx:{p:3,borderRadius:2},children:[e.jsxs(ze,{value:r,onChange:we,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:[e.jsx(A,{label:a("user.profile.account_info")}),(s==null?void 0:s.role)===0&&e.jsx(A,{label:a("user.profile.history")}),(s==null?void 0:s.role)===0&&e.jsx(A,{label:a("user.profile.booked_tickets")}),(s==null?void 0:s.role)!==2&&e.jsx(A,{label:a("user.profile.change_password")})]}),r===0&&e.jsxs(u,{sx:{mt:3},children:[e.jsx(y,{label:a("user.field.full_name"),name:"fullName",value:m.fullName,onChange:w,fullWidth:!0,sx:{mb:2}}),e.jsx(y,{label:a("user.field.dob"),name:"birthDate",type:"date",value:m.birthDate||"",onChange:w,fullWidth:!0,sx:{mb:2},InputLabelProps:{shrink:!0},inputProps:{max:de(new Date,"yyyy-MM-dd")}}),e.jsxs(ne,{row:!0,name:"gender",value:m.gender,onChange:w,sx:{mb:2},children:[e.jsx(H,{value:"0",control:e.jsx(B,{}),label:a("user.field.male")}),e.jsx(H,{value:"1",control:e.jsx(B,{}),label:a("user.field.female")})]}),e.jsx(y,{label:a("user.field.username"),name:"userName",value:m.userName,onChange:w,fullWidth:!0,sx:{mb:2}}),e.jsx(as,{label:a("user.field.id_card"),name:"idCard",value:m.idCard,onChange:w,fullWidth:!0,sx:{mb:2},inputProps:{readOnly:!0}}),e.jsx(y,{label:a("user.field.phone"),name:"phone",value:m.phoneNumber,onChange:w,fullWidth:!0,sx:{mb:2}}),e.jsx(y,{label:a("user.field.address"),name:"address",value:m.address,onChange:w,fullWidth:!0,sx:{mb:2}}),(s==null?void 0:s.role)!==2&&e.jsx(u,{sx:{textAlign:"right"},children:e.jsx(F,{variant:"contained",color:"primary",startIcon:e.jsx(ye,{}),onClick:()=>(s==null?void 0:s.userId)&&Te(s.userId),children:a("common.button.action.update")})})]}),(s==null?void 0:s.role)===0&&r===1&&e.jsxs(u,{sx:{mt:3,display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(u,{sx:{display:"flex",alignItems:"center",gap:6,justifyContent:"center"},children:[e.jsx(C,{variant:"h6",children:"Từ ngày (*)"}),e.jsx(y,{type:"date",variant:"outlined",size:"small",sx:{width:200}})]}),e.jsxs(u,{sx:{display:"flex",alignItems:"center",gap:6,justifyContent:"center"},children:[e.jsx(C,{variant:"h6",children:"Đến ngày (*)"}),e.jsx(y,{type:"date",variant:"outlined",size:"small",sx:{width:200}})]}),e.jsxs(u,{sx:{display:"flex",alignItems:"center",gap:2,justifyContent:"center",flexDirection:"column",mt:0},children:[e.jsxs(ne,{row:!0,defaultValue:"lichSuCongDiem",sx:{display:"flex",flexDirection:"column"},children:[e.jsx(H,{value:"lichSuCongDiem",control:e.jsx(B,{}),label:"Lịch sử cộng điểm"}),e.jsx(H,{value:"lichSuDungDiem",control:e.jsx(B,{}),label:"Lịch sử dùng điểm"})]}),e.jsx(F,{variant:"contained",color:"primary",children:"Xem điểm"})]}),e.jsxs(pe,{children:[e.jsx(be,{children:e.jsxs(U,{children:[e.jsx(t,{children:"STT"}),e.jsx(t,{children:"Ngày tạo"}),e.jsx(t,{children:"Tên phim"}),e.jsx(t,{children:"Điểm cộng"}),e.jsx(t,{children:"Điểm trừ"})]})}),e.jsx(xe,{children:M&&M.map((n,c)=>{var d,v,P,S;return e.jsxs(U,{children:[e.jsx(t,{children:c+1}),e.jsx(t,{children:n.createdDate}),e.jsx(t,{children:((S=(P=(v=(d=n.ticketDetails)==null?void 0:d[0])==null?void 0:v.showTime)==null?void 0:P.movie)==null?void 0:S.movieName)||"N/A"}),e.jsx(t,{children:n.point})," ",e.jsx(t,{children:n.minusPoint})]},c)})})]})]}),(s==null?void 0:s.role)===0&&r===2&&e.jsx(u,{sx:{mt:3},children:e.jsxs(pe,{children:[e.jsx(be,{children:e.jsxs(U,{children:[e.jsx(t,{children:"STT"}),e.jsx(t,{children:"Tên phim"}),e.jsx(t,{children:"Ngày đặt"}),e.jsx(t,{children:"Ngày chiếu"}),e.jsx(t,{children:"Suất chiếu"}),e.jsx(t,{children:"Phòng chiếu"}),e.jsx(t,{children:"Giá vé"}),e.jsx(t,{children:"Trạng Thái"})]})}),e.jsx(xe,{children:M&&M.flatMap((n,c)=>n.ticketDetails.map((d,v)=>{var P,S,ee,se,oe,re;return e.jsxs(U,{children:[e.jsx(t,{children:c+v+1}),e.jsx(t,{children:((S=(P=d.showTime)==null?void 0:P.movie)==null?void 0:S.movieName)||"N/A"}),e.jsx(t,{children:n.createdDate}),e.jsx(t,{children:((se=(ee=d.showTime)==null?void 0:ee.startTime)==null?void 0:se.split("T")[0])||"N/A"}),e.jsx(t,{children:(oe=d.showTime)!=null&&oe.startTime?new Date(d.showTime.startTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"N/A"}),e.jsx(t,{children:((re=d.showTime)==null?void 0:re.room)||"N/A"}),e.jsx(t,{children:(n.amount/n.totalTicket).toFixed(0)}),e.jsx(t,{sx:{color:d.status===1?"green":"blue"},children:d.status===1?"Đã nhận vé":"Chưa nhận vé"})]},`${n.billId}-${d.ticketId}`)}))})]})}),(s==null?void 0:s.role)!==2&&r===3&&e.jsxs(u,{sx:{mt:3},children:[e.jsx(y,{label:"Mật khẩu mới",type:h.new?"text":"password",name:"newPassword",value:k.newPassword,onChange:Y,error:!!g,helperText:g,fullWidth:!0,sx:{mb:2},InputProps:{endAdornment:e.jsx(le,{position:"end",children:e.jsx(O,{onClick:()=>J("new"),children:h.new?e.jsx(ie,{}):e.jsx(ce,{})})})}}),e.jsx(y,{label:"Xác nhận mật khẩu mới",type:h.confirm?"text":"password",name:"confirmPassword",value:k.confirmPassword,onChange:Y,error:!!g,helperText:g,fullWidth:!0,sx:{mb:2},InputProps:{endAdornment:e.jsx(le,{position:"end",children:e.jsx(O,{onClick:()=>J("confirm"),children:h.confirm?e.jsx(ie,{}):e.jsx(ce,{})})})}}),e.jsx(u,{sx:{textAlign:"right"},children:e.jsx(F,{variant:"contained",color:"primary",startIcon:e.jsx(ye,{}),onClick:Ce,children:"Cập nhật mật khẩu"})})]})]})})]})}),e.jsx(Ve,{open:f,autoHideDuration:6e3,onClose:Z,children:e.jsx(_e,{onClose:Z,severity:"success",sx:{width:"100%"},children:b})})]})}export{fs as default};
