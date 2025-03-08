import{D as C,E as N,r as m,G as y,j as e,s as j,J as T,K as v,T as g,N as M,u as p,B as S,b as x,i as V,O as E,Q as w,R as b,U as k,L as R}from"./index-Bx2V9Ji_.js";import{u as F}from"./useQuery-BBy-xS3h.js";import{f as H}from"./mock.apis-pOjLT8Qx.js";import{M as L}from"./ManagementPageLayout-Bju9ivKM.js";import{M as U}from"./ManagementTable-WRUIfrZV.js";import"./TableContainer-CebXw2Nj.js";import"./TableRow-DS5SCR5G.js";function B(n){return C("MuiDialogContentText",n)}N("MuiDialogContentText",["root"]);const I=n=>{const{classes:a}=n,o=v({root:["root"]},B,a);return{...a,...o}},O=j(g,{shouldForwardProp:n=>M(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,a)=>a.root})({}),P=m.forwardRef(function(a,s){const o=y({props:a,name:"MuiDialogContentText"}),{children:i,className:t,...c}=o,l=I(c);return e.jsx(O,{component:"p",variant:"body1",color:"textSecondary",ref:s,ownerState:c,className:T(l.root,t),...o,classes:l})}),Q=({employees:n,onEdit:a,onDelete:s})=>{const o=p(),i=[{field:"MaNhanVien",headerName:"Mã Nhân Viên"},{field:"TenNhanVien",headerName:"Tên Nhân Viên"},{field:"SoCMND",headerName:"Số CMND"},{field:"Email",headerName:"Email"},{field:"SoDienThoai",headerName:"Số Điện Thoại"},{field:"DiaChi",headerName:"Địa Chỉ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(S,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",padding:"1rem",flexWrap:"wrap"},children:[e.jsx(g,{variant:"h5",sx:{textAlign:"left",flexGrow:1},children:"Danh sách thông tin nhân viên"}),e.jsx(x,{variant:"contained",color:"primary",sx:{flexShrink:0},onClick:()=>{o("/admin/ql-nhan-vien/them-moi")},children:"Thêm nhân viên"}),e.jsx(V,{label:"",variant:"outlined",size:"small",sx:{width:"300px",flexShrink:0}})]}),e.jsx(U,{data:n,columns:i,onEdit:t=>{console.log("Editing:",t),a(t)},onDelete:t=>{console.log("Deleting:",t),s(t)},actionColumn:{align:"center",headerName:"Hành động",width:"120px"}})]})},X=({isDialogOpen:n,handleCloseDialog:a,handleConfirmDelete:s,employeeData:o})=>o?e.jsxs(E,{open:n,onClose:a,children:[e.jsx(w,{children:"Xác nhận xóa nhân viên"}),e.jsx(b,{children:e.jsxs(P,{children:["Bạn có chắc chắn muốn xóa nhân viên ",o.TenNhanVien,"? Hành động này không thể hoàn tác."]})}),e.jsxs(k,{children:[e.jsx(x,{onClick:a,children:"Hủy"}),e.jsx(x,{onClick:s,color:"error",variant:"contained",children:"Xóa"})]})]}):null,$=()=>{const{data:n=[],isLoading:a,error:s}=F("NhanVienData",H),o=p(),[i,t]=m.useState(null),[c,l]=m.useState(!1),u=r=>{console.log("Handling edit for ID:",r),n.find(d=>d.MaNhanVien===r)&&o(`/admin/ql-nhan-vien/${r}`)},f=r=>{console.log("Handling delete for ID:",r);const h=n.find(d=>d.MaNhanVien===r);h&&(t(h),l(!0))},D=()=>{i&&console.log("Deleting employee:",i.MaNhanVien),l(!1),t(null)};return a?e.jsx(R,{}):s?e.jsx("div",{children:"Failed to fetch data"}):e.jsxs(L,{children:[e.jsx(Q,{employees:n,onEdit:u,onDelete:f}),e.jsx(X,{isDialogOpen:c,handleCloseDialog:()=>{l(!1),t(null)},handleConfirmDelete:D,employeeData:i})]})};export{$ as default};
