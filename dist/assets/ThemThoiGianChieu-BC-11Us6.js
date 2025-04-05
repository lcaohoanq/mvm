import{u as L,a7 as K,a as U,r as d,j as e,U as Z,W as O,B as l,X as V,Y as X,Z as T,_,$ as J,C as Q,T as c,b as f,aj as ee,ak as te,al as se,am as ae,F as oe,I as re,S as ie,f as ne,aE as le,aF as de,aC as w,e as S}from"./index-BZsQtJZU.js";import{A as ce}from"./AdminNowShowingMovies-OK-alF_i.js";import{D as he}from"./DateTimePicker-C5VsG9ha.js";import"./Tabs-BmrH1Jz0.js";const ue=()=>{var b;const M=L(),m=K(),{t:A}=U(),[v,y]=d.useState([]),[k,R]=d.useState([]),[j,x]=d.useState(!1),[I,i]=d.useState({text:"",type:""}),[F,g]=d.useState(!1),[P,W]=d.useState(""),[$,E]=d.useState(0),[a,h]=d.useState({movieId:"",roomId:"",startTime:""});d.useEffect(()=>{m.state&&m.state.roomId&&h(t=>({...t,roomId:m.state.roomId}));const s=async()=>{try{const t=await S.get("movie/showing/page/0/size/100");console.log("Movie API Response:",t.data),t.data&&t.data.items?y(t.data.items):Array.isArray(t.data)?y(t.data):t.data&&t.data.data?y(t.data.data):i({text:"Không tìm thấy phim nào đang chiếu",type:"error"})}catch(t){console.error("Failed to fetch movies:",t),i({text:"Không thể tải danh sách phim",type:"error"})}},r=async()=>{try{const t=await S.get("room");t.data.isSuccess?R(t.data.data):i({text:"Failed to load rooms: "+t.data.message,type:"error"})}catch(t){console.error("Failed to fetch rooms:",t),i({text:"Failed to load rooms",type:"error"})}};s(),r()},[m,A]);const Y=s=>{s&&h({...a,startTime:s.format("YYYY-MM-DDTHH:mm")})},z=s=>{const{name:r,value:t}=s.target;h({...a,[r]:t})},G=async()=>{var s,r,t;if(x(!0),i({text:"",type:""}),!a.movieId||!a.roomId||!a.startTime){x(!1),i({text:"Vui lòng điền đầy đủ thông tin lịch chiếu",type:"error"});return}try{const o=v.find(n=>n.movieId===a.movieId);if(!o){x(!1),i({text:"Không tìm thấy thông tin phim đã chọn",type:"error"});return}const p=new Date(a.startTime),q=o.duration||120,B=new Date(p.getTime()+q*6e4),C=n=>n?`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}T${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}:00.000Z`:"",D={movieId:a.movieId,roomId:a.roomId,startTime:C(p),endTime:C(B)};console.log("Sending payload:",D);const u=await S.post("showtime",D,{headers:{"Content-Type":"application/json",Accept:"application/json"},validateStatus:function(n){return n<500}});console.log("Response:",u),u.data&&u.data.isSuccess?(i({text:"Thời gian chiếu đã được thêm thành công!",type:"success"}),h({movieId:"",roomId:"",startTime:""})):i({text:`Failed to create showtime: ${((s=u.data)==null?void 0:s.message)||"Unknown error"}`,type:"error"})}catch(o){console.error("Error creating showtime:",o),o.response?console.error("Error response:",{data:o.response.data,status:o.response.status,headers:o.response.headers}):o.request&&console.error("Error request:",o.request);const p=((t=(r=o.response)==null?void 0:r.data)==null?void 0:t.message)||o.message||"Failed to create showtime. Please try again.";i({text:p,type:"error"})}finally{x(!1)}},H=()=>{M("/admin/ql-thoi-gian-chieu")},N=s=>{console.log("Selected movie ID:",s);const r=v.find(t=>t.movieId===s);console.log("Selected movie data:",r),r&&(E(r.duration||120),console.log("Setting duration to:",r.duration||120)),W(s),h(t=>({...t,movieId:s})),g(!1)};return e.jsxs(Z,{children:[e.jsx(O,{enableColorScheme:!0}),e.jsxs(l,{sx:{display:"flex",height:"100vh"},children:[e.jsx(V,{}),e.jsxs(l,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(X,{}),e.jsx(l,{component:"main",sx:s=>({flexGrow:1,backgroundColor:T(s.palette.background.default,1),overflowY:"auto",px:3,py:2}),children:e.jsxs(_,{spacing:2,alignItems:"center",children:[e.jsx(J,{}),e.jsxs(Q,{sx:{backgroundColor:"#f5f5f5",color:"#000000",py:3},children:[I.text&&e.jsx(c,{color:I.type==="error"?"error":"success",sx:{mt:2},children:I.text}),e.jsxs(l,{sx:{mt:2,display:"flex",gap:2,flexDirection:"row",alignItems:"center"},children:[e.jsx(c,{variant:"subtitle1",sx:{minWidth:100,textAlign:"right",paddingRight:2},children:"Chọn Phim"}),e.jsxs(l,{sx:{display:"flex",width:"100%",gap:2},children:[e.jsx(f,{variant:"contained",color:"primary",onClick:()=>g(!0),sx:{flexShrink:0},children:"Chọn phim"}),e.jsx(l,{sx:{flexGrow:1,display:"flex",alignItems:"center",bgcolor:a.movieId?T("#f5f5f5",.8):"transparent",px:2,py:1,borderRadius:1,border:"1px solid",borderColor:a.movieId?"primary.light":"divider"},children:e.jsx(c,{variant:"body1",sx:{fontWeight:a.movieId?"medium":"normal",color:a.movieId?"text.primary":"text.secondary"},children:a.movieId?((b=v.find(s=>s.movieId===a.movieId))==null?void 0:b.movieName)||"Phim đã chọn":"Chưa chọn phim"})})]})]}),e.jsxs(ee,{open:F,onClose:()=>g(!1),maxWidth:"lg",fullWidth:!0,children:[e.jsx(te,{children:"Chọn phim chiếu"}),e.jsx(se,{dividers:!0,children:e.jsx(ce,{onMovieSelect:N,selectedMovieId:P})}),e.jsx(ae,{children:e.jsx(f,{onClick:()=>g(!1),children:"Đóng"})})]}),e.jsxs(l,{sx:{mt:2,display:"flex",gap:2,flexDirection:"row",alignItems:"center"},children:[e.jsx(c,{variant:"subtitle1",sx:{minWidth:100,textAlign:"right",paddingRight:2},children:"Chọn Phòng"}),e.jsxs(oe,{fullWidth:!0,variant:"outlined",size:"small",children:[e.jsx(re,{id:"room-select-label",children:"Phòng"}),e.jsx(ie,{labelId:"room-select-label",id:"room-select",name:"roomId",value:a.roomId,onChange:z,label:"Phòng",children:k.map(s=>e.jsx(ne,{value:s.roomId,children:s.roomName||`Phòng ${s.roomId.substring(0,8)}`},s.roomId))})]})]}),e.jsxs(l,{sx:{mt:2,display:"flex",gap:2,flexDirection:"row",alignItems:"center"},children:[e.jsx(c,{variant:"subtitle1",sx:{minWidth:100,textAlign:"right",paddingRight:2},children:"Thời gian bắt đầu"}),e.jsx(le,{dateAdapter:de,children:e.jsx(he,{value:a.startTime?w(a.startTime):null,onChange:Y,referenceDate:w("2022-04-17T15:30")})}),e.jsxs(c,{children:["Stored value: ",a.startTime==null?"null":a.startTime]})]}),a.movieId&&e.jsxs(l,{sx:{mt:2,display:"flex",gap:2,flexDirection:"row",alignItems:"center"},children:[e.jsx(c,{variant:"subtitle1",sx:{minWidth:100,textAlign:"right",paddingRight:2},children:"Thời lượng"}),e.jsxs(c,{variant:"body1",sx:{bgcolor:"#e8f4fd",px:2,py:1,borderRadius:1,border:"1px solid",borderColor:"info.light",color:"text.primary"},children:[$," phút"]})]}),e.jsxs(l,{sx:{mt:3,display:"flex",justifyContent:"center",gap:2},children:[e.jsx(f,{variant:"outlined",color:"primary",size:"large",sx:{minWidth:150},onClick:H,disabled:j,children:"Hủy"}),e.jsx(f,{variant:"contained",color:"primary",size:"large",sx:{minWidth:150},onClick:G,disabled:j,children:j?"Đang xử lý...":"Thêm Thời Gian Chiếu"})]})]})]})})]})]})]})};export{ue as default};
