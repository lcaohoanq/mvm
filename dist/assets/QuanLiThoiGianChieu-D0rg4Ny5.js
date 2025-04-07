import{u as y,r as m,a as w,j as a,b as v,ao as N,B as u,T,aq as j,a7 as I,aK as S,L as b,e as C}from"./index-lVPGhRyu.js";import{u as E}from"./useQuery-DW2hZv_q.js";import{M as A}from"./ManagementPageLayout-BUKz1y7K.js";import{f as _}from"./format-csk1fyom.js";const M=({showTimes:e,onRefreshData:r})=>{const o=y(),[d,g]=m.useState(e),[n,l]=m.useState(!1);m.useEffect(()=>{g(e)},[e]),m.useEffect(()=>{r&&e.length===0&&(l(!0),r(),l(!1))},[r,e.length]);const{t:i}=w(),s=t=>{console.log("Handling click for showTimeId:",t),console.log("Available showTimes:",d),t?o(`/admin/ql-thoi-gian-chieu/${t}`):console.error("No showTimeId provided")},h=t=>{try{return _(new Date(t),"dd/MM/yyyy HH:mm")}catch{return t||"N/A"}},c=d.map(t=>{var x,p;return{...t,id:t.showTimeId,movieName:((x=t.movie)==null?void 0:x.movieName)||"N/A",roomName:((p=t.room)==null?void 0:p.roomName)||"N/A",formattedStartTime:h(t.startTime),formattedEndTime:h(t.endTime)}}),f=[{field:"movieName",headerName:i("admin.movie_management.detail.name"),flex:1,sortable:!0},{field:"roomName",headerName:i("admin.showtime_management.name"),width:180,sortable:!0},{field:"formattedStartTime",headerName:i("admin.showtime_management.start_time"),width:180,sortable:!0},{field:"formattedEndTime",headerName:i("admin.showtime_management.end_time"),width:180,sortable:!0},{field:"actions",headerName:"Chi tiết",width:120,sortable:!1,renderCell:t=>a.jsx(v,{variant:"outlined",size:"small",startIcon:a.jsx(N,{}),onClick:()=>s(t.row.showTimeId),children:"Chi tiết"})}];return a.jsxs(a.Fragment,{children:[a.jsxs(u,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",padding:"1rem"},children:[a.jsx(T,{variant:"h5",sx:{textAlign:"left",flexGrow:1},children:i("admin.showtime_management.showtime_list")}),a.jsx(v,{variant:"contained",color:"primary",sx:{flexShrink:0},onClick:()=>{o("/admin/ql-thoi-gian-chieu/them-thoi-gian-chieu")},children:i("admin.showtime_management.add_new")})]}),a.jsx(u,{sx:{height:500,width:"100%"},children:a.jsx(j,{rows:c,columns:f,pagination:!0,pageSizeOptions:[5,10,25,50],initialState:{pagination:{paginationModel:{pageSize:10,page:0}},sorting:{sortModel:[{field:"formattedStartTime",sort:"desc"}]}},getRowId:t=>t.id,density:"standard",disableRowSelectionOnClick:!0,autoHeight:!0,loading:n})})]})},D=async()=>{try{const e=await C.get("showtime");return e.data.isSuccess?e.data.data||[]:(console.error("API returned error:",e.data.message),[])}catch(e){return console.error("Error fetching showtimes:",e),[]}},L=e=>{var o,d;const r=e.startTime instanceof Date?e.startTime.toISOString():String(e.startTime);return{id:e.showTimeId,showTimeId:e.showTimeId,movieId:e.movieId,roomId:e.roomId,startTime:r,endTime:e.endTime,movie:{movieName:((o=e.movie)==null?void 0:o.movieName)||"N/A"},room:{roomName:((d=e.room)==null?void 0:d.roomName)||"N/A"}}},F=()=>{const e=y(),r=I(),o=S(),[d,g]=m.useState(null),{data:n=[],isLoading:l,error:i,refetch:s}=E("ThoiGianChieuData",D,{onError:c=>{console.error("Query error:",c)},retry:1,refetchInterval:3e4,refetchOnWindowFocus:!0});if(m.useEffect(()=>{r.state&&r.state.refresh&&(console.log("Refresh signal detected, refetching data..."),o.invalidateQueries("ThoiGianChieuData"),s(),r.state.message&&g(r.state.message),e(r.pathname,{replace:!0,state:{}}))},[r,o,s,e]),m.useEffect(()=>(s(),()=>{}),[s]),l)return a.jsx(b,{});const h=(n==null?void 0:n.map(L))||[];return a.jsxs(A,{children:[i?a.jsx(u,{sx:{textAlign:"center",mt:3,mb:2},children:a.jsx(T,{color:"error",variant:"body1",children:"Không thể tải dữ liệu lịch chiếu. Bạn vẫn có thể tạo mới lịch chiếu."})}):n.length===0?a.jsx(u,{sx:{textAlign:"center",mt:3,mb:2},children:a.jsx(T,{variant:"body1",children:"Không có dữ liệu lịch chiếu. Vui lòng tạo mới lịch chiếu."})}):null,a.jsx(M,{showTimes:h,onEdit:c=>{const f=n.find(t=>t.showTimeId===c);console.log("Found showtime:",f)},onRefreshData:()=>{o.invalidateQueries("ThoiGianChieuData"),s()}})]})};export{F as default};
