(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},23:function(e,t,n){},29:function(e){e.exports=JSON.parse('[{"id":"1","username":"timjuenemann","description":"Theo discovers the outdoor run","hashtags":["rabbit","bunny"],"soundName":"original sound - timjuenemann","videoURL":"/videos/video_theo.mp4","likeCount":254,"commentCount":0,"shareCount":14,"liked":false},{"id":"2","username":"timjuenemann","description":"This is evee digging","hashtags":["bunny","digging"],"soundName":"original sound - timjuenemann","videoURL":"/videos/video_evee.mp4","likeCount":463,"commentCount":0,"shareCount":39,"liked":false},{"id":"3","username":"timjuenemann","description":"Theo and evee eating some","hashtags":["salad"],"soundName":"original sound - timjuenemann","videoURL":"/videos/video_evee_theo.mp4","likeCount":42,"commentCount":0,"shareCount":3,"liked":false}]')},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),l=n.n(i),c=(n(22),n(1));n(23);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),f=a.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),m=function(e){var t=e.svgRef,n=e.title,r=u(e,["svgRef","title"]);return a.a.createElement("svg",o({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,s,f)},v=a.a.forwardRef((function(e,t){return a.a.createElement(m,o({svgRef:t},e))})),d=(n.p,n(3)),p=n(7),h=n(4),g=n(11),E=new g.b.Entity("videos"),b={activeView:0,videos:Object(g.a)(n(29),[E])},O=Object(p.b)({name:"screen",initialState:b,reducers:{likeVideo:function(e,t){var n=e.videos.entities.videos[t.payload];n.liked||(n.liked=!0,n.likeCount+=1)},unlikeVideo:function(e,t){var n=e.videos.entities.videos[t.payload];n.liked&&(n.liked=!1,n.likeCount-=1)},setActiveView:function(e,t){e.activeView=t.payload}}}),y=O.actions,j=y.likeVideo,w=y.unlikeVideo,C=y.setActiveView,k=function(e){return e.screen.videos.entities.videos},x=function(e){return e.screen.videos.result},S=Object(h.a)(x,(function(e){return e.screen.activeView}),(function(e,t){return e[t]})),z=O.reducer;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),_=a.a.createElement("path",{d:"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"}),P=function(e){var t=e.svgRef,n=e.title,r=M(e,["svgRef","title"]);return a.a.createElement("svg",R({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,L,_)},V=a.a.forwardRef((function(e,t){return a.a.createElement(P,R({svgRef:t},e))})),H=(n.p,n(15)),N=n(5),T=n.n(N);function B(e){var t=e.item;return a.a.createElement("div",{style:{display:"flex",alignContent:"flex-end",flexDirection:"column-reverse"}},a.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},a.a.createElement("div",{style:{fontSize:"1.1em",fontWeight:"bold"}},"@",t.username),a.a.createElement("div",{style:{marginTop:10,fontSize:"0.9em"}},t.description," ",t.hashtags.map((function(e){return a.a.createElement("span",{key:e},a.a.createElement("strong",null,"#",e)," ")}))),a.a.createElement("div",{style:{marginTop:16,fontSize:"0.9em",display:"flex"}},a.a.createElement(V,{height:16,width:16,fill:"#fff"}),a.a.createElement("div",{style:{marginLeft:6,width:180,whiteSpace:"nowrap"},className:T.a.marquee},a.a.createElement(H,{direction:"left",delay:1e3},t.soundName)))))}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M256,0C114.84,0,0,114.84,0,256s114.84,256,256,256s256-114.84,256-256S397.16,0,256,0z M435.852,248c4.416,0,8,3.584,8,8 c0,103.584-84.268,187.852-187.852,187.852c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8c94.756,0,171.852-77.092,171.852-171.852 C427.852,251.584,431.432,248,435.852,248z M404.108,248c4.416,0,8,3.584,8,8c0,86.08-70.032,156.108-156.108,156.108 c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8c77.256,0,140.108-62.852,140.108-140.108C396.108,251.584,399.692,248,404.108,248z  M371.784,248c4.416,0,8,3.584,8,8c0,68.252-55.532,123.784-123.784,123.784c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8 c59.432,0,107.784-48.352,107.784-107.784C363.784,251.584,367.368,248,371.784,248z M44.492,264c-4.416,0-8-3.584-8-8 c0-121.036,98.472-219.508,219.508-219.508c4.416,0,8,3.584,8,8s-3.584,8-8,8C143.784,52.492,52.492,143.784,52.492,256 C52.492,260.416,48.912,264,44.492,264z M76.148,264c-4.416,0-8-3.584-8-8c0-103.584,84.268-187.852,187.852-187.852 c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8C161.244,84.148,84.148,161.24,84.148,256C84.148,260.416,80.568,264,76.148,264z  M107.892,264c-4.416,0-8-3.584-8-8c0-86.08,70.032-156.108,156.108-156.108c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8 c-77.256,0-140.108,62.852-140.108,140.108C115.892,260.416,112.308,264,107.892,264z M140.216,264c-4.416,0-8-3.584-8-8 c0-68.252,55.532-123.784,123.784-123.784c4.416,0,8,3.584,8,8s-3.584,8-8,8c-59.432,0-107.784,48.352-107.784,107.784 C148.216,260.416,144.632,264,140.216,264z M176.288,256c0-43.952,35.756-79.712,79.712-79.712s79.712,35.76,79.712,79.712 c0,43.952-35.76,79.712-79.712,79.712C212.048,335.712,176.288,299.952,176.288,256z M256,475.508c-4.416,0-8-3.584-8-8 c0-4.416,3.584-8,8-8c112.216,0,203.508-91.292,203.508-203.508c0-4.416,3.584-8,8-8c4.416,0,8,3.584,8,8 C475.508,377.036,377.036,475.508,256,475.508z"}))),q=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M256,236.112c-10.968,0-19.892,8.92-19.892,19.888s8.92,19.888,19.892,19.888c10.964,0,19.888-8.92,19.888-19.888 C275.888,245.032,266.964,236.112,256,236.112z"}))),D=a.a.createElement("g",null),J=a.a.createElement("g",null),W=a.a.createElement("g",null),A=a.a.createElement("g",null),K=a.a.createElement("g",null),F=a.a.createElement("g",null),G=a.a.createElement("g",null),Q=a.a.createElement("g",null),X=a.a.createElement("g",null),Z=a.a.createElement("g",null),$=a.a.createElement("g",null),ee=a.a.createElement("g",null),te=a.a.createElement("g",null),ne=a.a.createElement("g",null),re=a.a.createElement("g",null),ae=function(e){var t=e.svgRef,n=e.title,r=U(e,["svgRef","title"]);return a.a.createElement("svg",I({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",fill:"#fff",ref:t},r),n?a.a.createElement("title",null,n):null,Y,q,D,J,W,A,K,F,G,Q,X,Z,$,ee,te,ne,re)},ie=a.a.forwardRef((function(e,t){return a.a.createElement(ae,I({svgRef:t},e))}));n.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var oe=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),ue=a.a.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),se=function(e){var t=e.svgRef,n=e.title,r=ce(e,["svgRef","title"]);return a.a.createElement("svg",le({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,oe,ue)},fe=a.a.forwardRef((function(e,t){return a.a.createElement(se,le({svgRef:t},e))}));n.p;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),pe=a.a.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),he=function(e){var t=e.svgRef,n=e.title,r=ve(e,["svgRef","title"]);return a.a.createElement("svg",me({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,de,pe)},ge=a.a.forwardRef((function(e,t){return a.a.createElement(he,me({svgRef:t},e))}));n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Oe=a.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),ye=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),je=function(e){var t=e.svgRef,n=e.title,r=be(e,["svgRef","title"]);return a.a.createElement("svg",Ee({transform:"scale(-1,1)",height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,Oe,ye)},we=a.a.forwardRef((function(e,t){return a.a.createElement(je,Ee({svgRef:t},e))}));n.p;function Ce(e){var t=e.item,n=Object(d.b)();return a.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},a.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},a.a.createElement(ke,{count:t.likeCount},t.liked?a.a.createElement(v,{onClick:function(){return n(w(t.id))},height:40,width:40,fill:"#fff"}):a.a.createElement(ge,{onClick:function(){return n(j(t.id))},height:40,width:40,fill:"#fff"})),a.a.createElement(ke,{count:t.commentCount},a.a.createElement(we,{height:35,width:35,fill:"#fff"})),a.a.createElement(ke,{count:t.shareCount},a.a.createElement(fe,{height:35,width:35,fill:"#fff"})),a.a.createElement(ie,{height:40,width:40,className:"rotatingRecord",style:{marginTop:30}})))}function ke(e){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontWeight:"bold",fontSize:".8em",marginTop:20}},a.a.createElement("div",{style:{cursor:"pointer"}},e.children),a.a.createElement("div",{style:{marginTop:5}},e.count))}function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ze,Re=a.a.createElement("path",{d:"M8 5v14l11-7z"}),Me=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Le=function(e){var t=e.svgRef,n=e.title,r=Se(e,["svgRef","title"]);return a.a.createElement("svg",xe({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,Re,Me)},_e=a.a.forwardRef((function(e,t){return a.a.createElement(Le,xe({svgRef:t},e))}));n.p;function Pe(e){var t,n,i=e.id,l=e.active,o=Object(d.c)(k)[i],u=Object(d.b)(),s=Object(r.useState)(null),f=Object(c.a)(s,2),m=f[0],p=f[1],h=Object(r.useState)(ze.pause),g=Object(c.a)(h,2),E=g[0],b=g[1];Object(r.useEffect)((function(){m&&(E!==ze.pause&&l?m.play():m.pause())}),[l,m,E]),Object(r.useEffect)((function(){b(l?ze.play:ze.pause)}),[l]);var O=Object(r.useState)({x:null,y:null}),y=Object(c.a)(O,2),w=y[0],C=y[1],x=Object(r.useState)(0),S=Object(c.a)(x,2),z=S[0],R=S[1];return a.a.createElement("div",{className:T.a.Video,onClick:function(e){1===e.detail?R(setTimeout((function(){b(E===ze.play?ze.pause:ze.play)}),200)):2===e.detail&&(clearTimeout(z),function(e){u(j(i)),C({x:e.nativeEvent.clientX,y:e.nativeEvent.clientY}),setTimeout((function(){C({x:null,y:null})}),400)}(e))}},a.a.createElement(v,{fill:"#fff",className:"dblClickHeart ".concat(w.x||w.y?"is-active":""),style:{position:"absolute",top:null!==(t=w.y)&&void 0!==t?t:0,left:null!==(n=w.x)&&void 0!==n?n:0,zIndex:100}}),a.a.createElement("div",{className:T.a.videoContainer},a.a.createElement("video",{ref:function(e){null!==e&&p(e)},className:T.a.videoElement,loop:!0,playsInline:!0},a.a.createElement("source",{src:"/tik-tok-clone"+o.videoURL,type:"video/mp4"}),"Your browser does not support HTML video."),E===ze.pause&&l?a.a.createElement("div",{className:T.a.playButtonContainer},a.a.createElement(_e,{height:80,width:80,fill:"#fff"})):null,a.a.createElement("div",{className:T.a.gridContainer},a.a.createElement("div",{className:T.a.grid},a.a.createElement(B,{item:o}),a.a.createElement(Ce,{item:o})))))}!function(e){e[e.play=0]="play",e[e.pause=1]="pause"}(ze||(ze={}));var Ve=function(){var e=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.useCallback)((function(e){e&&a(e)}),[]),l=Object(r.useState)(!1),o=Object(c.a)(l,2),u=o[0],s=o[1],f=Object(r.useState)(0),m=Object(c.a)(f,2),v=m[0],d=m[1];Object(r.useEffect)((function(){var e=function(){return s(!0)},t=function(){return s(!1)},r=function(e){u&&d((function(t){return t+e.movementY}))};if(n)return n.addEventListener("mousedown",e),window.addEventListener("mouseup",t),n.addEventListener("mousemove",r),function(){n.removeEventListener("mousedown",e),window.removeEventListener("mouseup",t),n.removeEventListener("mousemove",r)}}),[u,n]);var p=Object(r.useState)(0),h=Object(c.a)(p,2),g=h[0],E=h[1];Object(r.useEffect)((function(){var e=function(e){E(e.touches[0].clientY),s(!0)},t=function(){return s(!1)},r=function(e){var t=e.changedTouches[0].clientY;u&&d((function(e){return e+t-g})),E(t)};if(n)return n.addEventListener("touchstart",e),n.addEventListener("touchend",t),n.addEventListener("touchmove",r),function(){n.removeEventListener("touchstart",e),window.removeEventListener("touchend",t),n.removeEventListener("touchmove",r)}}),[u,n,g]);var b=Object(r.useState)(0),O=Object(c.a)(b,2),y=O[0],j=O[1],w=Object(r.useCallback)((function(){n&&j(n.getBoundingClientRect().height)}),[n]);Object(r.useEffect)((function(){w();var e=function(){return w()};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[w,n]);var C=y/8,k=Object(r.useState)(0),x=Object(c.a)(k,2),S=x[0],z=x[1],R=Object(r.useState)(0),M=Object(c.a)(R,2),L=M[0],_=M[1],P=function(e){return n?e<=0?(_(0),0):e>=n.scrollHeight-y?(_(Math.round((n.scrollHeight-y)/y)),n.scrollHeight-y):(_(Math.round(e/y)),e):S};return Object(r.useEffect)((function(){u||(-v>C?z((function(e){return P(e+y)})):v>C&&z((function(e){return P(e-y)})),d(0))}),[u]),Object(r.useEffect)((function(){n&&(u?n.scrollTo({top:S-v}):n.scrollTo({top:S,behavior:"smooth"}))}),[v,u,n,S]),[i,L]}(),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(d.b)();Object(r.useEffect)((function(){l(C(i))}),[i]);var o=Object(d.c)(x),u=Object(d.c)(S);return a.a.createElement("div",null,a.a.createElement("div",{className:"Screen",ref:n},o.map((function(e){return a.a.createElement(Pe,{key:e,id:e,active:e===u})}))))},He=n(16);function Ne(){document.ontouchmove=function(e){e.preventDefault()};var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};window.onresize=function(){e()},Object(r.useLayoutEffect)((function(){He.polyfill(),e()}));var t=Object(r.useState)(!1),n=Object(c.a)(t,2),i=n[0],l=n[1];return a.a.createElement("div",{className:"App"},i?a.a.createElement(Ve,null):a.a.createElement("div",null,a.a.createElement("h1",null,"TikTok Clone"),a.a.createElement("button",{onClick:function(){return l(!0)}},"Start app")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=Object(p.a)({reducer:{screen:z}});l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:Te},a.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports={Video:"Video_Video__BKwjK",videoContainer:"Video_videoContainer__1HPyR",videoElement:"Video_videoElement__2FcU9",gridContainer:"Video_gridContainer__3f6GN",grid:"Video_grid__tuvat",playButtonContainer:"Video_playButtonContainer__178qJ",marquee:"Video_marquee__1QHBZ"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9796b776.chunk.js.map