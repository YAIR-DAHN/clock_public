(function(){"use strict";var e={9903:function(e,t,n){var o=n(9242),a=n(3396),r=n.p+"img/logo_sharey_nisim.8921d57e.png",l=n.p+"img/logo_tzahi.93a7456a.png";const i=(0,a._)("img",{class:"logo",src:r,alt:"kolel logo"},null,-1),u=(0,a._)("img",{class:"logo vue",src:l,alt:"tzahi logo"},null,-1);function s(e,t){const n=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,u,(0,a._)("nav",null,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("בית")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("הוראות שימוש")])),_:1})]),(0,a.Wm)(o)],64)}var d=n(89);const c={},f=(0,d.Z)(c,[["render",s]]);var m=f,p=n(2483);const h={class:"home"};function g(e,t,n,o,r,l){const i=(0,a.up)("HomePage");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(i,{msg:"Welcome to Your Vue.js App"})])}const b=e=>((0,a.dD)("data-v-e4d26e18"),e=e(),(0,a.Cn)(),e),v=b((()=>(0,a._)("h1",null,"ברוכים הבאים למערכת ניהול נתוני שעון נוכחות",-1))),y=b((()=>(0,a._)("div",{id:"boxInput"},[(0,a._)("label",{for:"file-upload",class:"custom-file-upload"}," לחץ כאן לבחור קובץ ")],-1))),w={key:0,id:"loaders-box"},x=b((()=>(0,a._)("div",{class:"loader"},null,-1))),T=b((()=>(0,a._)("div",{class:"loader2"},null,-1))),k=[x,T],C={key:1,class:"success-message"},_=b((()=>(0,a._)("div",{id:"footer"},[(0,a._)("hr"),(0,a._)("p",null,'מערכת זאת נבנתה ע"י y.d. Systems')],-1)));function D(e,t,n,o,r,l){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[v,y,r.inLoad?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("input",{key:0,id:"file-upload",class:"file-upload",type:"file",onChange:t[0]||(t[0]=(...e)=>l.uploadFile&&l.uploadFile(...e)),accept:".dat"},null,32)),!r.inLoad&&r.dataInLocal?((0,a.wg)(),(0,a.j4)(i,{key:1,to:"/table",class:"upload-button"},{default:(0,a.w5)((()=>[(0,a.Uk)("הצג טבלאות")])),_:1})):(0,a.kq)("",!0)]),r.inLoad?((0,a.wg)(),(0,a.iD)("div",w,k)):(0,a.kq)("",!0),r.isUploadSuccessful?((0,a.wg)(),(0,a.iD)("div",C," הקובץ הועלה בהצלחה ")):(0,a.kq)("",!0),_],64)}var S=n(1076),N={data(){return{msg:"Vite + Vue",fileContent:"",isUploadSuccessful:!1,inLoad:!1,dataInLocal:!1,responseData:[]}},methods:{uploadFile(e){this.inLoad=!0;const t=e.target.files[0],n=new FormData;n.append("file",t);for(let[o,a]of n.entries())console.log(o,a);S.Z.post("https://clock-system.onrender.com/extractor/upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{console.log(e),this.responseData=e.data,localStorage.setItem("data",JSON.stringify(e.data)),this.inLoad=!1,this.isUploadSuccessful=!0,this.dataInLocal=!0,setTimeout((()=>{this.isUploadSuccessful=!1}),6e3)}))}},mounted(){localStorage.getItem("data")&&(this.dataInLocal=!0)}};const L=(0,d.Z)(N,[["render",D],["__scopeId","data-v-e4d26e18"]]);var O=L,j={name:"HomeView",components:{HomePage:O}};const A=(0,d.Z)(j,[["render",g]]);var E=A;const U={class:"Table"};function F(e,t,n,o,r,l){const i=(0,a.up)("ShowTable");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(i)])}var I=n(7139);const W={id:"Container"},B={id:"listContainer"},P=(0,a._)("h1",null,"רשימת אברכים",-1),Z=["onClick"],H={id:"noSelct"},V=(0,a._)("h1",null,[(0,a.Uk)("בכדי להציג את הנתונים "),(0,a._)("br"),(0,a.Uk)(" יש לבחור אברך להצגה "),(0,a._)("br"),(0,a.Uk)(" מתוך הרשימה מצד ימין")],-1),q=[V],z={id:"tebleContainer"};function Y(e,t,n,r,l,i){const u=(0,a.up)("active-table");return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",B,[P,(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.listNames,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a._)("button",{class:"button",onClick:e=>i.getUserData(t)},(0,I.zw)(e),9,Z)])))),128))])]),(0,a.wy)((0,a._)("div",H,q,512),[[o.F8,!l.showTable]]),(0,a.wy)((0,a._)("div",z,[(0,a._)("h1",null,(0,I.zw)(l.name),1),(0,a.Wm)(u,{id:"active-table",isCellTextEditable:!1,displayAddNewColumn:!1,displayAddNewRow:!1,data:l.data,headerStyles:{default:{backgroundColor:"#d6d6d630"}},files:{buttons:[{export:{fileName:"example_xlsx",formats:["xlsx"]}},{import:{fileName:"example_xlsx",formats:["xlsx"]}}]},customColumnsSettings:[{headerName:"תאריך",defaultText:"תאריך",cellStyle:{width:"100px","text-align":"center"},defaultColumnTypeName:"Date y-m-d"},{headerName:"ת. עברי",defaultText:"ת. עברי",cellStyle:{backgroundColor:"#f1f1f1",width:"120px","text-align":"center",fontWeight:"bold"}},{headerName:"יום",cellStyle:{backgroundColor:"#fdfdfd",width:"60px","text-align":"center"},defaultColumnTypeName:"Text"},{headerName:"כניסה 1",cellStyle:{backgroundColor:"#f8f8f8",width:"100px","text-align":"center"},defaultColumnTypeName:"Custom type"},{headerName:"יציאה 1",cellStyle:{backgroundColor:"#fdfdfd",width:"100px","text-align":"center"},defaultColumnTypeName:"Text"},{headerName:"כניסה 2",cellStyle:{backgroundColor:"#f8f8f8",width:"100px","text-align":"center"},defaultColumnTypeName:"Custom type 2"},{headerName:"יציאה 2",cellStyle:{backgroundColor:"#fdfdfd",width:"100px","text-align":"center"},defaultColumnTypeName:"Text"},{headerName:"כניסה 3",cellStyle:{backgroundColor:"#f8f8f8",width:"100px","text-align":"center"},defaultColumnTypeName:"Text"},{headerName:"יציאה 3",cellStyle:{backgroundColor:"#fdfdfd",width:"100px","text-align":"center"},defaultColumnTypeName:"Text"}],customColumnTypes:[{name:"Custom type",textValidation:{func:e=>this.isTimeGreaterThan(e,this.oneBonusTime),setTextToDefaultOnFail:!1,failedStyle:{color:"green",fontWeight:"bold"}}},{name:"Custom type 2",textValidation:{func:e=>this.isTimeGreaterThan(e,this.twoBonusTime),setTextToDefaultOnFail:!1,failedStyle:{color:"green",fontWeight:"bold"}}}],tableStyle:{borderRadius:"10px",border:"1px solid black",width:"95%",height:"100%",margin:"0 auto",boxSizing:"border-box",padding:"0",fontFamily:"sans-serif",textAlign:"center"}},null,8,["data","customColumnsSettings","customColumnTypes"])],512),[[o.F8,l.showTable]])])}n(560),n(9004);var G=n(7092);window.XLSX=G;var M={name:"App",data(){return{data:[],resData:[],listNames:{},showTable:!1,name:"",receivedData:[],oneBonusTime:"09:14:00",twoBonusTime:"14:35:00"}},methods:{getData(){this.resData=localStorage.getItem("data"),this.resData=JSON.parse(this.resData),this.getList()},getList(){let e={};for(let t=0;t<this.resData.length;t++)"לא מוגדר"!=this.resData[t][this.resData[t].length-1]&&(e[t]=this.resData[t][this.resData[t].length-1]);this.listNames=e,console.log("list",e)},getUserData(e){let t=[this.resData[e]],n=t[0][0],o=t[0].slice(-50),a=[n],r=o.length-2;for(let i=r;i>0;i--)a.push(o[i]);a.pop();let l=[];l.push(a),this.updateData(a),this.name=this.listNames[e]},updateData(e){const t=document.getElementById("active-table");t.updateData(e),this.showTable=!0},isTimeGreaterThan(e,t){const n=new Date(`1970-01-01T${e}Z`),o=new Date(`1970-01-01T${t}Z`);return"Invalid Date"==n||n>o}},mounted(){this.getData()}};const J=(0,d.Z)(M,[["render",Y]]);var K=J,R={name:"TableView",components:{ShowTable:K}};const X=(0,d.Z)(R,[["render",F]]);var $=X;const Q=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4851))},{path:"/table",name:"table",component:$}],ee=(0,p.p7)({history:(0,p.r5)(),routes:Q});var te=ee;(0,o.ri)(m).use(te).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],r=e[d][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.18ec0824.js"}}(),function(){n.miniCssF=function(e){return"css/about.a421af0e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="clock-front-end:";n.l=function(o,a,r,l){if(e[o])e[o].push(a);else{var i,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+r){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[a];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var l=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var l=n&&n.type,i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=i,r.parentNode&&r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=l,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){a=l[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var l=n.miniCssF(o),i=n.p+l;if(t(l,i))return a();e(o,i,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={443:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var l=n.p+n.u(t),i=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,a[1](i)}};n.l(l,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,l=o[0],i=o[1],u=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var d=u(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkclock_front_end"]=self["webpackChunkclock_front_end"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9903)}));o=n.O(o)})();
//# sourceMappingURL=app.218742b4.js.map