import{ad as j,ae as N,r as i,af as v,j as o,y as T,ag as k,ah as M,T as S,ai as I,aj as R,ak as E,al as B,am as G,b as m,u as _,a7 as A,a as F,V as h,B as x,a9 as U,d as L,an as O,ao as q,ap as H}from"./index-BZsQtJZU.js";import{u as P}from"./useQuery-CJQUG6ra.js";import{d as V,f as W,R as X}from"./user.apis-CCZmNTU9.js";import{M as z}from"./ManagementPageLayout-DPRmNrdR.js";import{G as g}from"./GridActionsCellItem-CqeRqgOz.js";function Q(t){return j("MuiDialogContentText",t)}N("MuiDialogContentText",["root"]);const K=t=>{const{classes:s}=t,n=M({root:["root"]},Q,s);return{...s,...n}},$=T(S,{shouldForwardProp:t=>I(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),J=i.forwardRef(function(s,a){const n=v({props:s,name:"MuiDialogContentText"}),{children:c,className:u,...l}=n,r=K(l);return o.jsx($,{component:"p",variant:"body1",color:"textSecondary",ref:a,ownerState:l,className:k(r.root,u),...n,classes:r})}),Y=({isDialogOpen:t,handleCloseDialog:s,handleConfirmDelete:a,employeeData:n})=>n?o.jsxs(R,{open:t,onClose:s,children:[o.jsx(E,{children:"Xác nhận xóa nhân viên"}),o.jsx(B,{children:o.jsxs(J,{children:["Bạn có chắc chắn muốn xóa nhân viên ",n.fullName,"? Hành động này không thể hoàn tác."]})}),o.jsxs(G,{children:[o.jsx(m,{onClick:s,children:"Hủy"}),o.jsx(m,{onClick:a,color:"error",variant:"contained",children:"Xóa"})]})]}):null,se=()=>{const t=_(),s=A(),{t:a}=F(),[n,c]=i.useState(null),[u,l]=i.useState(!1),{data:r,isLoading:p,error:d}=P({queryKey:["users","employees"],queryFn:async()=>{const e=await W(X.Employee);if(!e.isSuccess||!e.data)throw new Error(e.message||"Failed to fetch employees");return e.data}});i.useEffect(()=>{d&&h.error(d instanceof Error?d.message:"Failed to load employees")},[d,s]);const w=e=>t(`/admin/ql-nhan-vien/${e}`),y=e=>{const f=r==null?void 0:r.find(b=>b.userName===e);f&&(c(f),l(!0))},C=async()=>{if(n)try{await V(n.userId)&&h.success(a("toast.employee.deleteSuccess"))}catch{h.error(a("toast.employee.deleteFailed"))}l(!1),c(null)},D=i.useMemo(()=>[{field:"userName",headerName:a("common.table_header.user.username"),width:250,renderCell:e=>o.jsxs(x,{sx:{display:"flex",alignItems:"center",gap:2},children:[o.jsx(U,{src:e.row.avatar||"/default-avatar.png",alt:e.row.fullName}),o.jsx("span",{children:e.row.userName})]})},{field:"fullName",headerName:a("common.table_header.user.fullname"),width:180},{field:"email",headerName:a("common.table_header.user.email"),width:220},{field:"phoneNumber",headerName:a("common.table_header.user.phone"),width:130},{field:"status",headerName:a("common.table_header.user.status"),width:120,renderCell:e=>o.jsx(L,{label:e.row.status===1?"Active":"Inactive",color:e.row.status===1?"success":"error",sx:{fontWeight:"bold",borderRadius:"16px",minWidth:"80px"}})},{field:"address",headerName:a("common.table_header.user.address"),width:130},{field:"actions",headerName:a("common.table_header.actions"),type:"actions",width:100,getActions:e=>[o.jsx(g,{icon:o.jsx(O,{}),label:"Edit",onClick:()=>w(e.row.userId)}),e.row.status===1&&o.jsx(g,{icon:o.jsx(q,{}),label:"Delete",onClick:()=>y(e.row.userName),showInMenu:!0})]}],[a]);return o.jsxs(z,{children:[o.jsx(m,{sx:{marginBottom:"20px",marginLeft:"auto",color:"black",borderColor:"black"},onClick:()=>{t("/admin/ql-nhan-vien/them-moi")},children:"Thêm nhân viên"}),o.jsx(x,{sx:{width:"100%",height:600,"& .MuiDataGrid-root":{border:"none",backgroundColor:"white",borderRadius:2,boxShadow:1,"& .MuiDataGrid-columnHeaders":{color:"black",fontWeight:"bold"},"& .MuiDataGrid-cell":{borderBottom:"1px solid #f0f0f0"},"& .MuiDataGrid-row:hover":{backgroundColor:"#f5f5f5"}}},children:o.jsx(H,{rows:r||[],columns:D,loading:p,getRowId:e=>e.userId,initialState:{pagination:{paginationModel:{pageSize:10}}},pageSizeOptions:[5,10,25],disableRowSelectionOnClick:!0,autoHeight:!0})}),o.jsx(Y,{isDialogOpen:u,handleCloseDialog:()=>{l(!1),c(null)},handleConfirmDelete:C,employeeData:n})]})};export{se as default};
