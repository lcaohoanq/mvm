import{a0 as u,u as l,r as n,a as g,j as s,L as f,e as c,V as r}from"./index-CoYWbXjZ.js";import{M}from"./MovieDetail-BLwYQP8I.js";import"./ScrollFloat-CERpD5nQ.js";function y(){const{movieId:e}=u(),d=l(),[i,m]=n.useState(null),{t}=g(),p=async()=>{try{console.log("MovieID: ",e);const a=await c.get(`/movie/${e}`,{headers:{"Content-Type":"application/json","Accept-Language":"ja"}});m(a.data.data),console.log("Movie: ",a.data.data)}catch(a){r.error(t("toast.error.movie.loading_infor")+a.message)}};n.useEffect(()=>{e&&p()},[e,t]);const v=async a=>{try{const o=await c.put(`/movie/${e}`,a);r.success(t("toast.success.movie.update")),console.log("Updated Movie: ",o.data.data),d(`/admin/ql-phim/${o.data.data.movieId}`)}catch(o){r.error(t("toast.error.movie.update")+o.message)}};return s.jsx("div",{children:i?s.jsx(M,{onSubmit:v,movie:i}):s.jsx(f,{})})}export{y as default};
