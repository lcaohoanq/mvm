import{c as M,j as t,r as g,P as v,k as ce,u as ee,g as ue,a as Y,B as C,T as A,l as R,m as w,n as te,h as re,o as z,p as he,q as pe,E as me,b as V,V as j,s as fe,F as ge,t as xe,v as be,w as ve,H as ye,x as je,y as oe,i as we}from"./index-BZsQtJZU.js";import{u as ne}from"./formik.esm-CirSGttK.js";import{c as ae,a as I,b as Ce}from"./index.esm-ChjHs5Nu.js";import{V as se,a as ie}from"./VisibilityOff-C8M4H1dn.js";import{L as le}from"./Lock-DrwtTz4s.js";import{S as Se,a as _e,b as ke}from"./Stepper-DWCVRqzQ.js";import{R as Le,a as Q}from"./RadioGroup-ChXLIw9c.js";import{H as Re}from"./Home-BgxGfOJZ.js";import{T as Ie,a as Ne}from"./Tabs-BmrH1Jz0.js";const Te=M(t.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment"),Be=M(t.jsx("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"}),"Badge"),Ee=M(t.jsx("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m4.6 9.99-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9"}),"Cake"),Oe=M(t.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),Pe=M(t.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone");var Ae=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function W(){return W=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},W.apply(this,arguments)}function Me(r,a){if(r==null)return{};var s={},n=Object.keys(r),o,c;for(c=0;c<n.length;c++)o=n[c],!(a.indexOf(o)>=0)&&(s[o]=r[o]);return s}function F(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fe(r,a){r.prototype=Object.create(a.prototype),r.prototype.constructor=r,U(r,a)}function U(r,a){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},U(r,a)}var q=function(r){Fe(a,r);function a(){var n;return n=r.call(this)||this,n.handleExpired=n.handleExpired.bind(F(n)),n.handleErrored=n.handleErrored.bind(F(n)),n.handleChange=n.handleChange.bind(F(n)),n.handleRecaptchaRef=n.handleRecaptchaRef.bind(F(n)),n}var s=a.prototype;return s.getCaptchaFunction=function(o){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[o]:this.props.grecaptcha[o]:null},s.getValue=function(){var o=this.getCaptchaFunction("getResponse");return o&&this._widgetId!==void 0?o(this._widgetId):null},s.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},s.execute=function(){var o=this.getCaptchaFunction("execute");if(o&&this._widgetId!==void 0)return o(this._widgetId);this._executeRequested=!0},s.executeAsync=function(){var o=this;return new Promise(function(c,N){o.executionResolve=c,o.executionReject=N,o.execute()})},s.reset=function(){var o=this.getCaptchaFunction("reset");o&&this._widgetId!==void 0&&o(this._widgetId)},s.forceReset=function(){var o=this.getCaptchaFunction("reset");o&&o()},s.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},s.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},s.handleChange=function(o){this.props.onChange&&this.props.onChange(o),this.executionResolve&&(this.executionResolve(o),delete this.executionReject,delete this.executionResolve)},s.explicitRender=function(){var o=this.getCaptchaFunction("render");if(o&&this._widgetId===void 0){var c=document.createElement("div");this._widgetId=o(c,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(c)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},s.componentDidMount=function(){this.explicitRender()},s.componentDidUpdate=function(){this.explicitRender()},s.handleRecaptchaRef=function(o){this.captcha=o},s.render=function(){var o=this.props;o.sitekey,o.onChange,o.theme,o.type,o.tabindex,o.onExpired,o.onErrored,o.size,o.stoken,o.grecaptcha,o.badge,o.hl,o.isolated;var c=Me(o,Ae);return g.createElement("div",W({},c,{ref:this.handleRecaptchaRef}))},a}(g.Component);q.displayName="ReCAPTCHA";q.propTypes={sitekey:v.string.isRequired,onChange:v.func,grecaptcha:v.object,theme:v.oneOf(["dark","light"]),type:v.oneOf(["image","audio"]),tabindex:v.number,onExpired:v.func,onErrored:v.func,size:v.oneOf(["compact","normal","invisible"]),stoken:v.string,hl:v.string,badge:v.oneOf(["bottomright","bottomleft","inline"]),isolated:v.bool};q.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function $(){return $=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},$.apply(this,arguments)}function Ve(r,a){if(r==null)return{};var s={},n=Object.keys(r),o,c;for(c=0;c<n.length;c++)o=n[c],!(a.indexOf(o)>=0)&&(s[o]=r[o]);return s}function qe(r,a){r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a}var k={},De=0;function He(r,a){return a=a||{},function(n){var o=n.displayName||n.name||"Component",c=function(l){qe(u,l);function u(y,i){var e;return e=l.call(this,y,i)||this,e.state={},e.__scriptURL="",e}var p=u.prototype;return p.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+De++),this.__scriptLoaderID},p.setupScriptURL=function(){return this.__scriptURL=typeof r=="function"?r():r,this.__scriptURL},p.asyncScriptLoaderHandleLoad=function(i){var e=this;this.setState(i,function(){return e.props.asyncScriptOnLoad&&e.props.asyncScriptOnLoad(e.state)})},p.asyncScriptLoaderTriggerOnScriptLoaded=function(){var i=k[this.__scriptURL];if(!i||!i.loaded)throw new Error("Script is not loaded.");for(var e in i.observers)i.observers[e](i);delete window[a.callbackName]},p.componentDidMount=function(){var i=this,e=this.setupScriptURL(),f=this.asyncScriptLoaderGetScriptLoaderID(),x=a,h=x.globalName,d=x.callbackName,m=x.scriptId;if(h&&typeof window[h]<"u"&&(k[e]={loaded:!0,observers:{}}),k[e]){var S=k[e];if(S&&(S.loaded||S.errored)){this.asyncScriptLoaderHandleLoad(S);return}S.observers[f]=function(b){return i.asyncScriptLoaderHandleLoad(b)};return}var E={};E[f]=function(b){return i.asyncScriptLoaderHandleLoad(b)},k[e]={loaded:!1,observers:E};var _=document.createElement("script");_.src=e,_.async=!0;for(var O in a.attributes)_.setAttribute(O,a.attributes[O]);m&&(_.id=m);var B=function(P){if(k[e]){var de=k[e],D=de.observers;for(var J in D)P(D[J])&&delete D[J]}};d&&typeof window<"u"&&(window[d]=function(){return i.asyncScriptLoaderTriggerOnScriptLoaded()}),_.onload=function(){var b=k[e];b&&(b.loaded=!0,B(function(P){return d?!1:(P(b),!0)}))},_.onerror=function(){var b=k[e];b&&(b.errored=!0,B(function(P){return P(b),!0}))},document.body.appendChild(_)},p.componentWillUnmount=function(){var i=this.__scriptURL;if(a.removeOnUnmount===!0)for(var e=document.getElementsByTagName("script"),f=0;f<e.length;f+=1)e[f].src.indexOf(i)>-1&&e[f].parentNode&&e[f].parentNode.removeChild(e[f]);var x=k[i];x&&(delete x.observers[this.asyncScriptLoaderGetScriptLoaderID()],a.removeOnUnmount===!0&&delete k[i])},p.render=function(){var i=a.globalName,e=this.props;e.asyncScriptOnLoad;var f=e.forwardedRef,x=Ve(e,["asyncScriptOnLoad","forwardedRef"]);return i&&typeof window<"u"&&(x[i]=typeof window[i]<"u"?window[i]:void 0),x.ref=f,g.createElement(n,x)},u}(g.Component),N=g.forwardRef(function(l,u){return g.createElement(c,$({},l,{forwardedRef:u}))});return N.displayName="AsyncScriptLoader("+o+")",N.propTypes={asyncScriptOnLoad:v.func},ce(N,n)}}var G="onloadcallback",ze="grecaptcha";function K(){return typeof window<"u"&&window.recaptchaOptions||{}}function We(){var r=K(),a=r.useRecaptchaNet?"recaptcha.net":"www.google.com";return r.enterprise?"https://"+a+"/recaptcha/enterprise.js?onload="+G+"&render=explicit":"https://"+a+"/recaptcha/api.js?onload="+G+"&render=explicit"}const Ue=He(We,{callbackName:G,globalName:ze,attributes:K().nonce?{nonce:K().nonce}:{}})(q),$e=r=>ae({email:I().trim().required(r("auth.login.validation.email_required")),password:I().trim().test("is-valid-password",r("auth.login.validation.password_length"),(a,s)=>s.parent.email==="admin"&&a==="admin"?!0:a!==void 0&&a.length>=8).required(r("auth.login.validation.password_required"))}),Ge=r=>ae({userName:I().required(r("auth.login.validation.username_required")),password:I().min(8,r("auth.login.validation.password_length")).required(r("auth.login.validation.password_required")),fullName:I().required(r("auth.signup.validation.fullname_required")),birthDate:Ce().required(r("auth.signup.validation.birthdate_required")),gender:I().required(r("auth.signup.validation.gender_required")),idCard:I().required(r("auth.signup.validation.id_card_required")),email:I().email(r("auth.signup.validation.email.invalid")).required(r("auth.signup.validation.email.required")),address:I().required(r("auth.signup.validation.address_required")),phoneNumber:I().required(r("auth.signup.validation.phone_required"))}),X={mb:3,"& .MuiOutlinedInput-root":{height:"50px","&.Mui-focused fieldset":{borderColor:"#e6c300"}},"& .MuiInputLabel-root":{color:"#666",fontSize:"0.95rem",transform:"translate(14px, 16px) scale(1)","&.Mui-focused":{color:"#000",transform:"translate(14px, -9px) scale(0.75)"},"&.MuiInputLabel-shrink":{transform:"translate(14px, -9px) scale(0.75)"}},"& .MuiInputBase-input":{padding:"14px"},"& .MuiFormHelperText-root":{marginLeft:"3px",marginTop:"3px"}},Ke=()=>{const[r,a]=g.useState(!1),[s,n]=g.useState(!1),[o,c]=g.useState(()=>localStorage.getItem("rememberMe")==="true"),N=ee(),{authLogin:l}=ue(),{t:u}=Y(),[p,y]=g.useState(null),i=g.useRef(null),e=()=>{a(!r)},f=m=>{const S=m.target.checked;c(S),localStorage.setItem("rememberMe",S.toString())},x=m=>{y(m)},h=()=>{console.log("Resetting captcha",i.current),i.current?(i.current.reset(),y(null)):console.error("ReCAPTCHA ref is not available")},d=ne({initialValues:{email:localStorage.getItem("rememberMe")==="true"&&localStorage.getItem("lastLoginEmail")||"",password:""},validationSchema:$e(u),onSubmit:async m=>{const S={email:m.email.trim(),password:m.password.trim()};if(!p){j.error(u("auth.login.captcha_required")),h();return}n(!0);const E=j.loading(u("auth.login.logging_in"));try{const _=await fe({...S});if(j.dismiss(E),_){const O=_.data.token;o?localStorage.setItem("lastLoginEmail",S.email):localStorage.removeItem("lastLoginEmail");const B=await l({accessToken:O.accessToken,expires:O.expires});j.success(u("auth.login.welcome_message",{name:B==null?void 0:B.fullName}));const b=localStorage.getItem("redirectTo")||"/";localStorage.removeItem("redirectTo"),N(b,{replace:!0})}else j.error("Wrong email or password"),console.log("Login fail"),h()}catch{j.dismiss(E),j.error(u("auth.login.wrong_credentials")),h()}finally{n(!1)}}});return t.jsxs("form",{onSubmit:d.handleSubmit,children:[t.jsxs(C,{sx:{mb:4},children:[t.jsx(A,{variant:"h6",sx:{mb:1,fontWeight:600,color:"#1a1a1a"},children:u("auth.login.welcome")}),t.jsx(A,{variant:"body2",sx:{color:"#666"},children:u("auth.login.subtitle")})]}),t.jsx(R,{fullWidth:!0,id:"email",name:"email",label:u("auth.login.email"),value:d.values.email,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.email&&!!d.errors.email,helperText:d.touched.email&&d.errors.email,sx:X,InputProps:{startAdornment:t.jsx(w,{position:"start",sx:{ml:1},children:t.jsx(te,{sx:{color:"#666"}})})}}),t.jsx(R,{fullWidth:!0,id:"password",name:"password",label:u("auth.login.password"),type:r?"text":"password",value:d.values.password,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.password&&!!d.errors.password,helperText:d.touched.password&&d.errors.password,sx:X,InputProps:{startAdornment:t.jsx(w,{position:"start",sx:{ml:1},children:t.jsx(le,{sx:{color:"#666"}})}),endAdornment:t.jsx(w,{position:"end",sx:{mr:1},children:t.jsx(re,{onClick:e,edge:"end",sx:{"&:hover":{backgroundColor:"rgba(230, 195, 0, 0.1)"}},children:r?t.jsx(se,{sx:{color:"#666"}}):t.jsx(ie,{sx:{color:"#666"}})})})}}),t.jsxs(C,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[t.jsx(z,{control:t.jsx(he,{checked:o,onChange:f,sx:{color:"#666","&.Mui-checked":{color:"#e6c300"},"&:hover":{backgroundColor:"rgba(230, 195, 0, 0.1)"}}}),label:t.jsx(A,{variant:"body2",sx:{color:"#666",fontSize:"0.875rem"},children:u("auth.login.remember_me")})}),t.jsx(pe,{to:"/auth/forgot-password",style:{fontSize:"0.875rem",color:"black",textDecoration:"none",transition:"color 0.2s"},children:u("auth.login.forgot_password")})]}),t.jsxs(C,{sx:{mb:3},children:[t.jsx(Ue,{ref:i,sitekey:me.RECAPTCHA_V2_SITE_KEY,onChange:x,theme:"light",size:"normal"}),!p&&t.jsx(A,{variant:"caption",sx:{color:"#666",mt:1,display:"block"},children:u("auth.login.please_complete_captcha")})]}),t.jsx(V,{variant:"contained",fullWidth:!0,type:"submit",disabled:s||!p,sx:{backgroundColor:p?"#e6c300":"#f5f5f5",color:p?"black":"#bdbdbd",py:1.5,height:"48px",borderRadius:1.5,textTransform:"none",fontSize:"1rem",fontWeight:500,boxShadow:2,transition:"all 0.2s","&:hover":{backgroundColor:p?"#e6c300":"#f5f5f5",boxShadow:p?4:1},"&:disabled":{backgroundColor:"#fafafa",color:"#bdbdbd"}},children:u(s?"auth.login.processing":p?"auth.login.login_button":"auth.login.complete_captcha_to_continue")})]})},T={mb:3,"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#e6c300"},"&.Mui-error fieldset":{borderColor:"#ff9800"}},"& .MuiInputLabel-root":{color:"#666","&.Mui-focused":{color:"#000"},"&.Mui-error":{color:"#ff9800"}},"& .MuiFormHelperText-root":{"&.Mui-error":{color:"#ff9800"}}},L={color:"#666"},Ye={mb:4,"& .MuiStepLabel-root .Mui-completed":{color:"#e6c300"},"& .MuiStepLabel-root .Mui-active":{color:"#e6c300"},"& .MuiStepLabel-label":{color:"#666","&.Mui-active":{color:"#000"},"&.Mui-completed":{color:"#000"}}},H={primary:{backgroundColor:"#e6c300",color:"black",py:1.5,px:4,borderRadius:1.5,textTransform:"none",fontSize:"1rem",fontWeight:500,boxShadow:2,"&:hover":{backgroundColor:"#ccad00",boxShadow:4},"&:disabled":{backgroundColor:"#e0e0e0",color:"#9e9e9e"}},secondary:{borderColor:"#e6c300",color:"black","&:hover":{borderColor:"#ccad00",backgroundColor:"rgba(230, 195, 0, 0.1)"},"&:disabled":{borderColor:"#e0e0e0",color:"#9e9e9e"}}},Je=()=>{const[r,a]=g.useState(!1),[s,n]=g.useState(!1),[o,c]=g.useState(0),N=ee(),{t:l}=Y(),u=[l("auth.signup.steps.account"),l("auth.signup.steps.personal"),l("auth.signup.steps.contact")],p=()=>{a(!r)},y=()=>{c(h=>h+1)},i=()=>{c(h=>h-1)},e=ne({initialValues:{userName:"",password:"",fullName:"",birthDate:"",gender:"",idCard:"",email:"",address:"",phoneNumber:""},validationSchema:Ge(l),onSubmit:async h=>{n(!0);const d=j.loading("Đang xác thực người dùng...");try{const m=await ve(h);j.dismiss(d),m.isSuccess?(j.success("Đăng ký tài khoản thành công!",{duration:3e3}),setTimeout(()=>{N("/")},1e3)):j.error(m.reason||m.message,{duration:5e3})}catch{j.dismiss(d),j.error("Đã xảy ra lỗi không mong muốn.",{duration:5e3})}finally{n(!1)}}}),f=()=>{const h=!!(e.errors.userName||e.errors.password),d=e.touched.userName||e.touched.password;return!!(e.values.userName&&e.values.password)&&(!d||!h)},x=()=>{const h=!!(e.errors.fullName||e.errors.birthDate||e.errors.gender||e.errors.idCard),d=e.touched.fullName||e.touched.birthDate||e.touched.gender||e.touched.idCard;return!!(e.values.fullName&&e.values.birthDate&&e.values.gender&&e.values.idCard)&&(!d||!h)};return t.jsxs("div",{className:"flex flex-col gap-5 justify-center items-center",children:[t.jsx(Se,{activeStep:o,sx:Ye,children:u.map(h=>t.jsx(_e,{children:t.jsx(ke,{children:h})},h))}),t.jsxs("form",{onSubmit:e.handleSubmit,children:[o===0&&t.jsxs(C,{children:[t.jsx(R,{fullWidth:!0,id:"userName",name:"userName",label:l("auth.signup.fields.username"),value:e.values.userName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.userName&&!!e.errors.userName,helperText:e.touched.userName&&e.errors.userName,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(te,{sx:L})})}}),t.jsx(R,{fullWidth:!0,id:"password",name:"password",label:l("auth.signup.fields.password"),type:r?"text":"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&!!e.errors.password,helperText:e.touched.password&&e.errors.password,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(le,{sx:L})}),endAdornment:t.jsx(w,{position:"end",children:t.jsx(re,{onClick:p,edge:"end",children:r?t.jsx(se,{sx:L}):t.jsx(ie,{sx:L})})})}})]}),o===1&&t.jsxs(C,{children:[t.jsx(R,{fullWidth:!0,id:"fullName",name:"fullName",label:l("auth.signup.fields.fullname"),value:e.values.fullName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.fullName&&!!e.errors.fullName,helperText:e.touched.fullName&&e.errors.fullName,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Be,{sx:L})})}}),t.jsx(R,{fullWidth:!0,id:"birthDate",name:"birthDate",label:l("auth.signup.fields.dob"),type:"date",InputLabelProps:{shrink:!0},value:e.values.birthDate,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.birthDate&&!!e.errors.birthDate,helperText:e.touched.birthDate&&e.errors.birthDate,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Ee,{sx:L})})}}),t.jsxs(ge,{component:"fieldset",sx:T,children:[t.jsx(xe,{children:l("auth.signup.fields.gender")}),t.jsxs(Le,{row:!0,name:"gender",value:e.values.gender,onChange:e.handleChange,children:[t.jsx(z,{value:"male",control:t.jsx(Q,{}),label:l("auth.signup.fields.male")}),t.jsx(z,{value:"female",control:t.jsx(Q,{}),label:l("auth.signup.fields.female")})]})]}),t.jsx(R,{fullWidth:!0,id:"idCard",name:"idCard",label:l("auth.signup.fields.id_card"),value:e.values.idCard,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.idCard&&!!e.errors.idCard,helperText:e.touched.idCard&&e.errors.idCard,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Te,{sx:L})})}})]}),o===2&&t.jsxs(C,{children:[t.jsx(R,{fullWidth:!0,id:"email",name:"email",label:l("auth.signup.fields.email"),value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&!!e.errors.email,helperText:e.touched.email&&e.errors.email,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Oe,{sx:L})})}}),t.jsx(R,{fullWidth:!0,id:"address",name:"address",label:l("auth.signup.fields.address"),value:e.values.address,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.address&&!!e.errors.address,helperText:e.touched.address&&e.errors.address,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Re,{sx:L})})}}),t.jsx(R,{fullWidth:!0,id:"phoneNumber",name:"phoneNumber",label:l("auth.signup.fields.phone_number"),value:e.values.phoneNumber,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.phoneNumber&&!!e.errors.phoneNumber,helperText:e.touched.phoneNumber&&e.errors.phoneNumber,sx:T,InputProps:{startAdornment:t.jsx(w,{position:"start",children:t.jsx(Pe,{sx:L})})}})]}),t.jsxs(C,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[t.jsx(V,{variant:"outlined",onClick:i,disabled:o===0,sx:H.secondary,children:l("auth.signup.buttons.back")}),o===u.length-1?t.jsx(V,{variant:"contained",type:"submit",disabled:s,sx:H.primary,children:l(s?"auth.signup.buttons.processing":"auth.signup.buttons.signup")}):t.jsx(V,{variant:"contained",onClick:y,disabled:o===0?!f():o===1?!x():!1,sx:H.primary,children:l("auth.signup.buttons.next")})]}),t.jsx(C,{sx:{mt:4,textAlign:"center"},children:t.jsxs(A,{variant:"body2",sx:{color:"#666"},children:[l("auth.signup.have_account")," ",t.jsx(be,{href:"/auth/login",underline:"hover",sx:{color:"#e6c300","&:hover":{color:"#ccad00"}},children:l("auth.signup.login_link")})]})})]})]})},Qe=oe(Ie)(({theme:r})=>({borderBottom:"none","& .MuiTabs-indicator":{display:"none"}})),Z=oe(Ne)(({theme:r})=>({color:"#666",fontSize:"1rem",fontWeight:600,textTransform:"none",padding:"12px 0",width:"50%",borderBottom:"3px solid transparent","&.Mui-selected":{color:"#000",borderBottom:"3px solid yellow"},"&:hover":{color:"#000",opacity:1}})),it=()=>{const[r,a]=g.useState(0),{t:s}=Y(),n=(o,c)=>{a(c)};return t.jsxs(C,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",background:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                    url('https://cinestar.com.vn/_next/image/?url=%2Fassets%2Fimages%2Fbg-cfriends.webp&w=1920&q=75')`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[t.jsx(ye,{}),t.jsx(C,{sx:{flex:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",position:"relative",minHeight:"calc(100vh - 200px)",py:{xs:4,md:8},px:{xs:2,sm:4,md:6}},children:t.jsxs(je,{elevation:3,sx:{width:"100%",maxWidth:r===0?"450px":"600px",borderRadius:2,transition:"all 0.3s ease",ml:{xs:0,sm:4,md:8},mt:{xs:0,sm:4,md:8},minHeight:"500px",overflow:"hidden"},children:[t.jsx(C,{sx:{borderBottom:1,borderColor:"divider",bgcolor:"rgba(255, 255, 255, 0.05)"},children:t.jsxs(Qe,{value:r,onChange:n,variant:"fullWidth",sx:{px:2,pt:1},children:[t.jsx(Z,{label:s("auth.login.title"),sx:{borderTopLeftRadius:8}}),t.jsx(Z,{label:s("auth.signup.title"),sx:{borderTopRightRadius:8}})]})}),t.jsx(C,{sx:{p:{xs:2,sm:3,md:4},minHeight:{xs:"calc(100vh - 200px)",md:"500px"},display:"flex",flexDirection:"column",backgroundColor:"#FFFFFF"},children:r===0?t.jsx(Ke,{}):t.jsx(Je,{})})]})}),t.jsx(we,{})]})};export{it as default};
