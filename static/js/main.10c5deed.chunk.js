(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n,a=c(0),r=c.n(a),o=c(17),s=c.n(o),i=(c(37),c(16)),l=c(32),d=c(6),b=c(25),j=c(15),m=(c(43),c(24)),O=c(1),u=c(49).v4,g=[{id:u(),content:"First task"},{id:u(),content:"Second task"},{id:u(),content:"Third task"},{id:u(),content:"Fourth task"},{id:u(),content:"Fifth task"},{id:u(),content:"sixth task"}],p=(n={},Object(j.a)(n,u(),{name:"Requested",items:g}),Object(j.a)(n,u(),{name:"To do",items:[]}),Object(j.a)(n,u(),{name:"In Progress",items:[]}),Object(j.a)(n,u(),{name:"Done",items:[]}),n),h=function(){var e=Object(a.useState)(p),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",width:"100%",backgroundColor:"#641339"},children:Object(O.jsx)(m.a,{onDragEnd:function(e){return function(e,t,c){if(e.destination){var n=e.source,a=e.destination;if(n.droppableId!==a.droppableId){var r,o=t[n.droppableId],s=t[a.droppableId],l=Object(b.a)(o.items),m=Object(b.a)(s.items),O=l.splice(n.index,1),u=Object(i.a)(O,1)[0];m.splice(a.index,0,u),c(Object(d.a)(Object(d.a)({},t),{},(r={},Object(j.a)(r,n.droppableId,Object(d.a)(Object(d.a)({},o),{},{items:l})),Object(j.a)(r,a.droppableId,Object(d.a)(Object(d.a)({},s),{},{items:m})),r)))}else{var g=t[n.droppableId],p=Object(b.a)(g.items),h=p.splice(n.index,1),x=Object(i.a)(h,1)[0];p.splice(a.index,0,x),c(Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},n.droppableId,Object(d.a)(Object(d.a)({},g),{},{items:p}))))}window.localStorage.setItem("result",JSON.stringify(e)),window.localStorage.setItem("columns",JSON.stringify(t))}}(e,c,n)},children:Object.entries(c).map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)("h2",{className:"text text-light",children:a.name}),Object(O.jsx)("div",{style:{marginRight:8,border:"5px solid yellow "},children:Object(O.jsx)(m.c,{droppableId:n,children:function(e,t){return Object(O.jsxs)("div",Object(d.a)(Object(d.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:t.isDraggingOver?"lightblue":"lightgrey",padding:4,width:250,minHeight:500},children:[a.items.map((function(e,t){return Object(O.jsx)(m.b,{draggableId:e.id,index:t,children:function(t,c){return Object(O.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(d.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"90px",backgroundColor:c.isDragging?"#263B4A":"#456C86",color:"white"},t.draggableProps.style),children:e.content}))}},e.id)})),e.placeholder]}))}},n)})]},n)}))})})},x=function(e){var t=e.logout,c=window.localStorage.getItem("userName"),n=window.localStorage.getItem("room");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",style:{position:"sticky"},children:Object(O.jsxs)("p",{className:"page-header",children:["Drag & drob & socket io assignment \ud83d\udd25 \u270c\ufe0f ",Object(O.jsx)("br",{}),"welcom player ".concat(c," in room number ").concat(n),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"btn btn-primary btn-sm btn-block mt-3",type:"button",onClick:t,children:"logout"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"Created By Ahmed Ibrahim"})]})})})},f=function(e){var t=e.userName,c=e.room,n=e.setUserName,a=e.setRoom,r=(e.loggedIn,e.setLoggedIn),o=e.socket;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{logout:function(){window.localStorage.clear(),o.emit("logout",{userName:t,room:c}),r(!1),n(""),a("")},userName:t,room:c}),Object(O.jsx)(h,{})]})},w=l.a.connect("http://localhost:3001");var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),j=b[0],m=b[1];Object(a.useEffect)((function(){u(),g()}),[j,s]);var u=function(){var e=window.localStorage.getItem("userName"),t=window.localStorage.getItem("room");e&&t?(w.emit("is_auth",{userName:e,room:t}),n(!0)):n(!1)},g=function(){return window.localStorage.getItem("columns")};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"App",children:c?Object(O.jsx)(f,{loggedIn:c,setLoggedIn:n,userName:j,room:s,setUserName:m,setRoom:l,socket:w}):Object(O.jsxs)("div",{className:"logIn",children:[Object(O.jsxs)("p",{className:"text-primary",children:[" ",JSON.stringify(c)]}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsxs)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-sm example",value:j,onChange:function(e){return m(e.target.value)},children:[" ",Object(O.jsx)("option",{children:"Select player "}),Object(O.jsx)("option",{value:"one",children:"One"}),Object(O.jsx)("option",{value:"two",children:"Two"})]}),Object(O.jsxs)("p",{className:"text-primary",children:[" ",JSON.stringify(j)]}),Object(O.jsxs)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-sm example",value:s,onChange:function(e){return l(e.target.value)},children:[" ",Object(O.jsx)("option",{children:"Select team "}),Object(O.jsx)("option",{value:"one",children:"One"}),Object(O.jsx)("option",{value:"two",children:"Two"})]}),Object(O.jsxs)("p",{className:"text-primary",children:[" ",JSON.stringify(s)]})]}),Object(O.jsx)("button",{className:"btn btn-block btn-primary mt-3",disabled:!j||!s||"Select player"===j||"Select team"===s,onClick:function(){window.localStorage.clear(),n(!0),window.localStorage.setItem("userName",JSON.stringify(j)),window.localStorage.setItem("room",JSON.stringify(s)),j&&s&&w.emit("join_room",{userName:j,room:s})},children:"Submit"})]})})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.10c5deed.chunk.js.map