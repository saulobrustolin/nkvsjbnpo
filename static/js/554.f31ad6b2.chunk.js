"use strict";(self.webpackChunkapp_hcapp=self.webpackChunkapp_hcapp||[]).push([[554],{9852:function(a,e,n){n.r(e),n.d(e,{default:function(){return M}});var r=n(9439),t=n(2791),o=n(6843),i=n(4554),l=n(7621),s=n(9585),u=n(3044),c=n(9504),d=n(7924),v=n(6129),m=n(7785),h=n(2968),p=n(7913),f=n(5894),g=n(3709),Z=n(184);function M(a){var e=a.app,n=(0,h.Z)().language,M=(0,t.useState)([]),x=(0,r.Z)(M,2),b=x[0],y=x[1];(0,t.useEffect)((function(){var a=[{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""},{email:"",value:""}],e=["*****@gmail.com","*****@gmail.com","*****@gmail.com","*****@gmail.com","*****@outlook.com","*****@icloud.com"];a.map((function(a,n){var r="".concat((0,f.t_)(1)).substring(0,3);return a.email=(0,g.E)(r)+e[Math.floor(-4*Math.random())+5],a.value=(0,f.Jo)(1e3,7e3),a})),a.sort((function(a,e){return Number(a.value.replace(/\D/g,""))>Number(e.value.replace(/\D/g,""))?-1:0}));var n=JSON.parse(localStorage.getItem("rankingResults"));!n||new Date-new Date(null===n||void 0===n?void 0:n.timestamp)>864e5?(y(a),localStorage.setItem("rankingResults",JSON.stringify({results:a,timestamp:new Date}))):y(null===n||void 0===n?void 0:n.results)}),[e]);var R=function(a){return 0===a?"#eeac35":1===a?"#dba268":2===a?"#a8acb2":void 0};return(0,Z.jsx)(i.Z,{pt:4,pb:13,children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(s.Z,{avatar:(0,Z.jsx)(u.Z,{src:e.logo192}),title:e.name,subheader:p.Z[n].card.subHeader}),(0,Z.jsx)(c.Z,{children:b.map((function(a,e){return(0,Z.jsxs)(i.Z,{mb:3,children:[(0,Z.jsxs)(v.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(i.Z,{children:(0,Z.jsxs)(m.H5,{fontWeight:400,children:[e<3?(0,Z.jsx)(o.Z,{sx:{color:R(e),mr:"4px",mb:"-6px",fontSize:"22px"}}):(0,Z.jsxs)(m.Dr,{sx:{fontWeight:600,mr:"7px"},children:[e+1,"\xba"]})," ",a.email]})}),(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(m.H5,{children:a.value})})]}),e+1!==b.length&&(0,Z.jsx)(d.Z,{sx:{mt:3}})]},e)}))})]})})}},7913:function(a,e){e.Z={"pt-BR":{title:"Ranking",card:{subHeader:"Top 10 ganhos do dia"}},es:{title:"Ranking",card:{subHeader:"Top 10 ganadores del d\xeda"}}}},5894:function(a,e,n){n.d(e,{BJ:function(){return l},Jo:function(){return i},t_:function(){return o}});var r=["Gabriel","Gustavo","Julio","Ismael","Aquino","Geovane","Eva","Maria","Cecilia","Clara","Simone","Marie","Margaret","Valentina","Rosa","Nadia","Lucas","Diana","Ma\xedsa","Ol\xedvia","R\xf4mero","Fabio","Pedro","Guilherme","Izaias","Joana","Mary","Thiago","Evandro","Anita","Helen","Amelia","Naele","Fernanda","Catarina","Jo\xe3o","Lucas","Diana","Ma\xedsa","Ol\xedvia","R\xf4mero","Fabio","Pedro","Guilherme","Izaias","Luis","Luan","Jhonatan","Eduardo","Arthur","Antonio","Felipe","Elton","Iran","Alisson","Miguel","Marcos","Alexandre","Alerrandro","Eva","Maria","Cecilia","Clara","Simone","Ryan","Bruno","Flavio","Francisco","R\xf4mulo","Kelly","Marie","Margaret","Valentina","Rosa","Nadia","Joana","Mary","Thiago","Evandro","Anita","Helen","Amelia","Naele","Fernanda","Catarina","Carolina","Alex","Ryan","Angela","Michelle","Rita","N\xedsia","Lili","Katharine","Vit\xf3ria","Elizabeth","Anne","Ana","Alex","Margaret","Valentina","Rosa","Nadia","Joana","Mary","Thiago","Evandro","Ryan","Bruno","Flavio","Francisco","R\xf4mulo","Kelly","Margaret","Valentina","Rosa","Nadia","Joana","Mary","Thiago","Evandro","Anita","Helen","Amelia","Naele","Fernanda","Catarina","Carolina"],t={ja:"JPY","es-AR":"ARS","es-CL":"CLP","es-MX":"MXN","pt-BR":"BRL",en:"USD",es:"EUR"},o=function(a){for(var e=[];e.length<a;){var n=Math.floor(Math.random()*r.length);e.push(r[n])}return e},i=function(a,e){var n=Math.floor(Math.random()*(a-e+1))+e,r=Math.floor(-62*Math.random())+75,o=navigator.language||"pt-BR";return Number("".concat(n,".").concat(r)).toLocaleString(o,{style:"currency",currency:t[o]||t[o.split("-")[0]]||"BRL",minimumFractionDigits:2})},l=function(a){var e=[];a.filter((function(a){return!0===a.actived&&e.push(a),!0}));var n=Math.floor(Math.random()*e.length);return e[n].name}},6843:function(a,e,n){var r=n(4836);e.Z=void 0;var t=r(n(5649)),o=n(184),i=(0,t.default)((0,o.jsx)("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"}),"EmojiEvents");e.Z=i},9504:function(a,e,n){n.d(e,{Z:function(){return f}});var r=n(7462),t=n(3366),o=n(2791),i=n(8182),l=n(4419),s=n(6934),u=n(1402),c=n(5878),d=n(1217);function v(a){return(0,d.Z)("MuiCardContent",a)}(0,c.Z)("MuiCardContent",["root"]);var m=n(184),h=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(a,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=o.forwardRef((function(a,e){var n=(0,u.Z)({props:a,name:"MuiCardContent"}),o=n.className,s=n.component,c=void 0===s?"div":s,d=(0,t.Z)(n,h),f=(0,r.Z)({},n,{component:c}),g=function(a){var e=a.classes;return(0,l.Z)({root:["root"]},v,e)}(f);return(0,m.jsx)(p,(0,r.Z)({as:c,className:(0,i.Z)(g.root,o),ownerState:f,ref:e},d))}))},9585:function(a,e,n){n.d(e,{Z:function(){return y}});var r=n(4942),t=n(3366),o=n(7462),i=n(2791),l=n(8182),s=n(4419),u=n(890),c=n(1402),d=n(6934),v=n(5878),m=n(1217);function h(a){return(0,m.Z)("MuiCardHeader",a)}var p=(0,v.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=n(184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(a,e){var n;return(0,o.Z)((n={},(0,r.Z)(n,"& .".concat(p.title),e.title),(0,r.Z)(n,"& .".concat(p.subheader),e.subheader),n),e.root)}})({display:"flex",alignItems:"center",padding:16}),M=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(a,e){return e.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(a,e){return e.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(a,e){return e.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(a,e){var n=(0,c.Z)({props:a,name:"MuiCardHeader"}),r=n.action,i=n.avatar,d=n.className,v=n.component,m=void 0===v?"div":v,p=n.disableTypography,y=void 0!==p&&p,R=n.subheader,C=n.subheaderTypographyProps,j=n.title,N=n.titleTypographyProps,A=(0,t.Z)(n,g),H=(0,o.Z)({},n,{component:m,disableTypography:y}),S=function(a){var e=a.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,e)}(H),E=j;null==E||E.type===u.Z||y||(E=(0,f.jsx)(u.Z,(0,o.Z)({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},N,{children:E})));var T=R;return null==T||T.type===u.Z||y||(T=(0,f.jsx)(u.Z,(0,o.Z)({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),(0,f.jsxs)(Z,(0,o.Z)({className:(0,l.Z)(S.root,d),as:m,ref:e,ownerState:H},A,{children:[i&&(0,f.jsx)(M,{className:S.avatar,ownerState:H,children:i}),(0,f.jsxs)(b,{className:S.content,ownerState:H,children:[E,T]}),r&&(0,f.jsx)(x,{className:S.action,ownerState:H,children:r})]}))}))}}]);
//# sourceMappingURL=554.f31ad6b2.chunk.js.map