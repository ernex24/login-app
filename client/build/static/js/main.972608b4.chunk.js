(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,a,t){e.exports=t(75)},70:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),l=t.n(r),i=t(2),o=t(5),s=t(1),m=t(3),u=t.n(m),p=t(9),d=t.n(p),b=t(12),E=t(6),g=t(13),v=(t(59),function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(),m=Object(s.a)(i,2),p=m[0],v=m[1],_=Object(n.useState)(),f=Object(s.a)(_,2),h=(f[0],f[1]),N=Object(n.useState)(!1),y=Object(s.a)(N,2),O=y[0],j=y[1],S=r.email,C=r.password,k=function(e){return l(Object(g.a)({},r,Object(E.a)({},e.target.name,e.target.value)))},w=function(){var a=Object(b.a)(d.a.mark((function a(t){var n,c,r,l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={email:S,password:C},a.prev=2,c={headers:{"Content-Type":"application/json"}},r=JSON.stringify(n),a.next=7,u.a.post("/api/login",r,c);case 7:l=a.sent,console.log(l),200===l.status&&(localStorage.setItem("token",JSON.stringify({token:l.data})),h(l.data.token),j(!0),e.hide()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),a.t0&&v("Error ocurred");case 15:case"end":return a.stop()}}),a,null,[[2,12]])})));return function(e){return a.apply(this,arguments)}}();return O?c.a.createElement(o.a,{to:"/profile"}):c.a.createElement(n.Fragment,null,c.a.createElement("form",{className:"login_container",onSubmit:function(e){return w(e)}},c.a.createElement("label",{className:"input_labels"},"Name:"),c.a.createElement("input",{className:"_input_login",type:"email",value:S,onChange:function(e){return k(e)},placeholder:"Email",name:"email",required:!0}),c.a.createElement("label",{className:"input_labels"},"Password:"),c.a.createElement("input",{className:"_input_login",type:"password",placeholder:"password",name:"password",value:C,onChange:function(e){return k(e)},minLength:"6",required:!0}),c.a.createElement("div",{className:"alert_error"},p),c.a.createElement("input",{className:"_input_button-primary",type:"submit",value:"Log In"})))}),_=function(e){var a=Object(n.useState)({name:"",email:"",password:"",password2:""}),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(),m=Object(s.a)(i,2),p=m[0],v=(m[1],Object(n.useState)(!1)),_=Object(s.a)(v,2),f=_[0],h=_[1],N=Object(n.useState)(),y=Object(s.a)(N,2),O=(y[0],y[1]),j=r.name,S=r.email,C=r.password,k=r.password2,w=function(e){return l(Object(g.a)({},r,Object(E.a)({},e.target.name,e.target.value)))},x=function(){var a=Object(b.a)(d.a.mark((function a(t){var n,c,r,l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),C===k){a.next=5;break}console.log("Password not match"),a.next=19;break;case 5:return n={name:j,email:S,password:C},a.prev=6,c={headers:{"Content-Type":"application/json"}},r=JSON.stringify(n),a.next=11,u.a.post("/api/register",r,c);case 11:l=a.sent,console.log(l),200===l.status&&(localStorage.setItem("token",JSON.stringify({token:l.data})),O(l.data.token),h(!0),e.hide()),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(6),console.error("Error");case 19:case"end":return a.stop()}}),a,null,[[6,16]])})));return function(e){return a.apply(this,arguments)}}();return f?c.a.createElement(o.a,{to:"/profile"}):c.a.createElement(n.Fragment,null,c.a.createElement("form",{className:"login_container",onSubmit:function(e){return x(e)}},c.a.createElement("label",{className:"input_labels"},"Name:"),c.a.createElement("input",{className:"_input_login",type:"text",value:j,onChange:function(e){return w(e)},placeholder:"Name",name:"name",required:!0}),c.a.createElement("label",{className:"input_labels"},"Email:"),c.a.createElement("input",{className:"_input_login",type:"email",value:S,onChange:function(e){return w(e)},placeholder:"Email",name:"email",required:!0}),c.a.createElement("label",{className:"input_labels"},"Password:"),c.a.createElement("input",{className:"_input_login",type:"password",placeholder:"Password",name:"password",value:C,onChange:function(e){return w(e)},minLength:"6",required:!0}),c.a.createElement("label",{className:"input_labels"},"Confirm Password:"),c.a.createElement("input",{className:"_input_login",type:"password",value:k,onChange:function(e){return w(e)},placeholder:"Confirm password",name:"password2",minLength:"6",required:!0}),c.a.createElement("div",{className:"alert_error"},p),c.a.createElement("input",{className:"_input_button-primary",type:"submit",value:"Register"})))},f=t(14),h={fontFamily:"sans-serif",textAlign:"center"},N=function(e){var a=e.isShowing,t=e.hide;return a?l.a.createPortal(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal-overlay"}),c.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:t},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal_body"},c.a.createElement("div",{className:"login_logo"},"Shoping_Hub"),c.a.createElement("div",{style:h},c.a.createElement(f.Tabs,{activeTab:{id:"tab1"}},c.a.createElement(f.Tabs.Tab,{id:"tab1",title:"Log in"},c.a.createElement(v,{isShowing:a,hide:t})),c.a.createElement(f.Tabs.Tab,{id:"tab2",title:"Register"},c.a.createElement(_,null)))))))),document.body):null},y=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1];return{isShowing:t,toggle:function(){c(!t)}}},O=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),m=Object(s.a)(l,2),p=(m[0],m[1]),d=Object(n.useState)(),b=Object(s.a)(d,2),E=(b[0],b[1]),g=Object(n.useState)(),v=Object(s.a)(g,2),_=v[0],f=v[1],h=Object(o.g)();Object(n.useEffect)((function(){O()}),[]);var O=function(){setInterval((function(){try{var e=JSON.parse(localStorage.getItem("token"));if(e){var a=e.token.token;E(a);var t={headers:{"X-Auth-Token":a}};u.a.get("/api/auth",t).then((function(e){200===e.status&&(r(e.data.name),p(e.data.email))}))}}catch(n){console.log(n),console.log("error")}}),300)},j=y(),S=j.isShowing,C=j.toggle;return c.a.createElement(n.Fragment,null,c.a.createElement(N,{isShowing:S,hide:C}),c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header_logo"},c.a.createElement(i.b,{to:"/"},"Shopping_Hub")),c.a.createElement("form",{className:"_search_form"},c.a.createElement("input",{className:"_input",value:_,type:"text",placeholder:"Search",name:"search",onChange:function(e){return function(e){return f(e.target.value)}(e)}}),c.a.createElement("input",{className:"_input_button-primary",type:"submit",value:"Search",onClick:function(e){h.push("/search")}})),c.a.createElement("ul",{className:"header_menu"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/postad"},"Sell a product")),t?c.a.createElement("li",null,c.a.createElement(i.b,{to:"/profile"},"Hi, ",t)):c.a.createElement("li",{onClick:C},"Login / Register"),t?c.a.createElement("li",{onClick:function(){return localStorage.removeItem("token"),r(null),void p(null)}},"Log out"):"")))},j=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){u.a.get("/api/ad/all/latest").then((function(e){r(e.data),console.log(e.data)}))}),[]);var l=Object(o.g)();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},Object.values(t).map((function(e,a){return c.a.createElement("div",{className:"card_container",key:e._id,onClick:function(){return l.push("/ad/".concat(e._id))}},c.a.createElement("img",{className:"card_image",src:e.image1}),c.a.createElement("div",{className:"card_description"},c.a.createElement("div",{className:"card_description_title"},e.title),c.a.createElement("div",{className:"card_description_price"},e.price," ",e.currency),c.a.createElement("div",{className:"card_description_description"},e.description),c.a.createElement(i.b,{to:"ad/".concat(e._id)})))}))))},S=function(e){var a=e.match,t=Object(n.useState)({}),r=Object(s.a)(t,2),l=r[0],i=r[1];Object(o.i)().id;Object(n.useEffect)((function(){u.a.get("/api/ad/".concat(a.params.slug)).then((function(e){i(e.data),console.log(e.data)}))}));var m=Object(o.g)();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},Object.values(l).map((function(e,a){return c.a.createElement("div",{className:"card_container",key:e._id,onClick:function(){return m.push("/ad/".concat(e._id))}},c.a.createElement("img",{className:"card_image",src:e.image1}),c.a.createElement("div",{className:"card_description"},c.a.createElement("div",{className:"card_description_title"},e.title),c.a.createElement("div",{className:"card_description_price"},e.price," ",e.currency),c.a.createElement("div",{className:"card_description_description"},e.description)))}))))},C=t(20),k=t.n(C),w=function(e){var a=e.match,t=Object(n.useState)({}),r=Object(s.a)(t,2),l=r[0],i=r[1];Object(o.i)().id;return Object(n.useEffect)((function(){u.a.get("/api/ad/find/".concat(a.params.slug)).then((function(e){i(e.data),console.log(e.data)}))}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card_container_ad"},c.a.createElement("div",{className:"card_description_ad"},c.a.createElement("div",null,l.user?l.user.name:l.user),c.a.createElement("div",{className:"card_description_title"},l.title),c.a.createElement("div",{className:"card_description_price"},l.price," ",l.currency),c.a.createElement("div",null,l.brand),c.a.createElement("div",{className:"card_description_description"},l.description),c.a.createElement("div",{className:"card_description_email"},c.a.createElement("label",null,"Contact: "),l.user?l.user.email:l.user),c.a.createElement("div",{className:"card_date_published"},c.a.createElement("label",null,"Date published: "),c.a.createElement(k.a,{format:"DD/MM/YYYY"},c.a.createElement("div",null,l.date)))),c.a.createElement("img",{className:"card_image_ad",src:l.image1}))))},x=(t(70),function(e){return c.a.createElement("div",{className:"header_category"},c.a.createElement("div",{className:"cta_category"},"What are you going to buy or sell today?"),c.a.createElement("ul",{className:"header_menu_category"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"All")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/cars"},"Cars")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/bikes"},"Bikes")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/fashion"},"Fashion")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/tv"},"Tv / Audio")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/cellphones"},"Cellphones")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/electronic"},"Electronic")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/collecting"},"Collecting")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/construction"},"Construction")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/services"},"Services")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/jobs"},"Jobs")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/category/others"},"Others"))))}),T=function(e){e.match;var a=Object(n.useState)(),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(),m=Object(s.a)(i,2),p=(m[0],m[1]),v=Object(n.useState)(),_=Object(s.a)(v,2),f=_[0],h=_[1],N=Object(n.useState)(),y=Object(s.a)(N,2),O=y[0],j=y[1],S=Object(n.useState)({category:"",subcategory:"",brand:"",model:"",year:"",title:"",price:"",currency:"",description:"",image1:"https://picsum.photos/300/300",image2:"https://picsum.photos/300/300",image3:"https://picsum.photos/300/300",image4:"https://picsum.photos/300/300"}),C=Object(s.a)(S,2),k=C[0],w=C[1],x=k.category,T=k.subcategory,F=k.brand,P=k.model,q=k.year,I=k.title,J=k.price,D=k.currency,A=k.description,M=k.image1,L=k.image2,B=k.image3,H=k.image4,Y=function(e){return w(Object(g.a)({},k,Object(E.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){X()}),[]);var X=function(e){try{var a=JSON.parse(localStorage.getItem("token"));if(a){var t=a.token.token;l(t)}else a||(p(""),l(!1))}catch(n){console.log(n),console.log("error")}};if(!1===r)return c.a.createElement(o.a,{to:"/"});var R=function(){var e=Object(b.a)(d.a.mark((function e(a){var t,n,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={category:x,subcategory:T,brand:F,model:P,year:q,title:I,price:J,currency:D,description:A,image1:M,image2:L,image3:B,image4:H},e.prev=2,n={headers:{"Content-Type":"application/json","X-Auth-Token":r}},c=JSON.stringify(t),e.next=7,u.a.post("/api/ad",c,n);case 7:l=e.sent,console.log(l),200===l.status&&(j(l),h(!0),console.log("post saved")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),e.t0&&console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a){return e.apply(this,arguments)}}();return!0===f?(console.log(O.data._id),c.a.createElement(o.a,{to:"/ad/".concat(O.data._id)})):c.a.createElement(n.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"container_profile"},c.a.createElement("div",{className:"card_profile"},c.a.createElement("div",{className:"card_description_title"}," What are you are going to sell today?"),c.a.createElement("form",{className:"login_container",onSubmit:function(e){return R(e)}},c.a.createElement("label",{className:"input_labels"},"Category:"),c.a.createElement("select",{className:"_select_login",name:"category",value:x,onChange:function(e){return Y(e)}},c.a.createElement("option",{value:"cars"},"Select Category"),c.a.createElement("option",{value:"bikes"},"Bikes"),c.a.createElement("option",{value:"fashion"},"Fashion"),c.a.createElement("option",{value:"cellphones"},"Cellphones"),c.a.createElement("option",{value:"electronic"},"Electronic"),c.a.createElement("option",{value:"collecting"},"Collecting"),c.a.createElement("option",{value:"services"},"Services"),c.a.createElement("option",{value:"jobs"},"Jobs"),c.a.createElement("option",{value:"others"},"Others")),c.a.createElement("label",{className:"input_labels"},"Sub category:"),c.a.createElement("select",{className:"_select_login",name:"subcategory",value:T,onChange:function(e){return Y(e)}},c.a.createElement("option",{value:"option1"},"Option 1"),c.a.createElement("option",{value:"option2"},"Option 2"),c.a.createElement("option",{value:"option3"},"Option 3")),c.a.createElement("label",{className:"input_labels"},"Brand:"),c.a.createElement("input",{className:"_input_login",value:F,type:"text",placeholder:"Brand of the product",name:"brand",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Model:"),c.a.createElement("input",{className:"_input_login",value:P,type:"text",placeholder:"Model of the product",name:"model",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Year:"),c.a.createElement("input",{className:"_input_login",value:q,type:"number",placeholder:"Year of the product",name:"year",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Title:"),c.a.createElement("input",{className:"_input_login",value:I,type:"text",placeholder:"What you want to sell?",name:"title",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Price:"),c.a.createElement("input",{className:"_input_login",value:J,type:"number",placeholder:"How much is the cost",name:"price",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Currency:"),c.a.createElement("input",{className:"_input_login",value:D,type:"text",placeholder:"Currency",name:"currency",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("label",{className:"input_labels"},"Description:"),c.a.createElement("input",{className:"_input_login",value:A,type:"text",placeholder:"Description: of the product",name:"description",onChange:function(e){return Y(e)},required:!0}),c.a.createElement("input",{className:"_input_button-primary",type:"submit",value:"Post new add"}))))))},F=(t(71),function(e){var a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var a={headers:{"X-Auth-Token":e.token}};u.a.get("/api/ad/find/user/".concat(e.userId),a).then((function(e){200===e.status&&(l(e.data),console.log(e.data))}))},m=Object(o.g)();return c.a.createElement("div",null,c.a.createElement("div",{className:"card_description_title"},"My products"),c.a.createElement("div",{className:"container_myproducts"},Object.values(r).map((function(e,a){return c.a.createElement("div",{className:"card_container",key:e._id,onClick:function(){return m.push("/ad/".concat(e._id))}},c.a.createElement("img",{className:"card_image",src:e.image1}),c.a.createElement("div",{className:"card_description"},c.a.createElement("div",{className:"card_description_title"},e.title),c.a.createElement("div",{className:"card_description_price"},e.price," ",e.currency),c.a.createElement("div",{className:"card_description_description"},e.description)))}))))}),P=function(e){var a,t=Object(n.useState)(),r=Object(s.a)(t,2),l=r[0],i=r[1],m=Object(n.useState)(),p=Object(s.a)(m,2),v=p[0],_=p[1],h=Object(n.useState)(!1),N=Object(s.a)(h,2),y=N[0],O=N[1],j=Object(n.useState)((a={email:"",image:"",name:""},Object(E.a)(a,"email",""),Object(E.a)(a,"bio",""),Object(E.a)(a,"country",""),Object(E.a)(a,"city",""),Object(E.a)(a,"postalcode",""),Object(E.a)(a,"phone",""),a)),S=Object(s.a)(j,2),C=S[0],k=S[1],w=C.email,x=(C.password,C.image),T=C.name,P=C.bio,q=C.country,I=C.city,J=C.postalcode,D=C.phone,A=function(e){return k(Object(g.a)({},C,Object(E.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){M()}),[]);var M=function(e){setInterval((function(){try{var e=JSON.parse(localStorage.getItem("token"));if(e){var a=e.token.token;i(a);var t={headers:{"X-Auth-Token":a}};u.a.get("/api/profile/me",t).then((function(e){200===e.status&&(_(e.data[0]),0!=e.data.length&&O(!0))}))}else e||(_(""),i(!1))}catch(n){console.log(n),console.log("error")}}),500)};if(!1===l)return c.a.createElement(o.a,{to:"/"});var L=function(){var e=Object(b.a)(d.a.mark((function e(a){var t,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={image:x,name:T,email:w,bio:P,country:q,city:I,postalcode:J,phone:D},e.prev=2,n={headers:{"Content-Type":"application/json","X-Auth-Token":l}},c=JSON.stringify(t),e.next=7,u.a.post("/api/profile",c,n);case 7:r=e.sent,console.log(r),200===r.status&&console.log("Profile Created"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),e.t0&&console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"container_profile"},c.a.createElement("div",{className:"card_profile"},c.a.createElement(f.Tabs,{activeTab:{id:"tab1"}},c.a.createElement(f.Tabs.Tab,{id:"tab1",title:"My Profile"},y?c.a.createElement("div",{className:"card_description_title"},"Hi, ",v?v.user.name:v," This is your personal profile"):c.a.createElement("div",{className:"card_description_title"},"Hi, ",v?v.user.name:v," First create your profile"),c.a.createElement("form",{className:"login_container",onSubmit:function(e){return L(e)}},c.a.createElement("div",{className:"profile_image"},c.a.createElement("label",{className:"input_labels"},"Profile picture:"),c.a.createElement("img",{className:"round-profile-image",src:v?v.image:v})),c.a.createElement("div",{className:"profile_image"},c.a.createElement("label",{className:"input_labels"},"Email:"),v?v.user.email:v),c.a.createElement("label",{className:"input_labels"},"Name:"),c.a.createElement("input",{className:"_input_login",type:"text",value:T,onChange:function(e){return A(e)},placeholder:v?v.user.name:v,name:"name"}),c.a.createElement("label",{className:"input_labels"},"Bio:"),c.a.createElement("input",{className:"_input_login",type:"text",value:P,onChange:function(e){return A(e)},placeholder:v?v.bio:v,name:"bio"}),c.a.createElement("label",{className:"input_labels"},"Country:"),c.a.createElement("input",{className:"_input_login",type:"text",value:q,onChange:function(e){return A(e)},placeholder:v?v.country:v,name:"country"}),c.a.createElement("label",{className:"input_labels"},"City:"),c.a.createElement("input",{className:"_input_login",type:"text",value:I,onChange:function(e){return A(e)},placeholder:v?v.city:v,name:"city"}),c.a.createElement("label",{className:"input_labels"},"Postal Code:"),c.a.createElement("input",{className:"_input_login",type:"text",value:J,onChange:function(e){return A(e)},placeholder:v?v.postalcode:v,name:"postalcode"}),c.a.createElement("label",{className:"input_labels"},"Phone:"),c.a.createElement("input",{className:"_input_login",type:"text",value:D,onChange:function(e){return A(e)},placeholder:v?v.phone:v,name:"phone"}),c.a.createElement("input",{className:"_input_button-primary",type:"submit",value:"Update My profile"}))),c.a.createElement(f.Tabs.Tab,{id:"tab2",title:"My Products"},c.a.createElement(F,{token:l,userId:v?v.user._id:v})))))))},q=t(35),I=t.n(q),J=function(e){e.match;var a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1],i=Object(o.h)(),m=I.a.parse(i.search);console.log(m.search);Object(o.i)().id;Object(n.useEffect)((function(){u.a.get("/api/ad/search/".concat(m.search)).then((function(e){l(e.data),console.log(e.data)}))}),[]);var p=Object(o.g)();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},Object.values(r).map((function(e,a){return c.a.createElement("div",{className:"card_container",key:e._id,onClick:function(){return p.push("/ad/".concat(e._id))}},c.a.createElement("img",{className:"card_image",src:e.image1}),c.a.createElement("div",{className:"card_description"},c.a.createElement("div",{className:"card_description_title"},e.title),c.a.createElement("div",{className:"card_description_price"},e.price," ",e.currency),c.a.createElement("div",{className:"card_description_description"},e.description)))}))))},D=function(){return c.a.createElement("h3",null,"404 - Not found")},A=function(e){return c.a.createElement(i.a,null,c.a.createElement(O,null),c.a.createElement(x,null),c.a.createElement("section",{className:"main_wrapper"},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:j}),c.a.createElement(o.b,{exact:!0,path:"/category/:slug",component:S}),c.a.createElement(o.b,{exact:!0,path:"/ad/:slug",component:w}),c.a.createElement(o.b,{exact:!0,path:"/login",component:v}),c.a.createElement(o.b,{exact:!0,path:"/profile",component:P}),c.a.createElement(o.b,{exact:!0,path:"/postad",component:T}),c.a.createElement(o.b,{exact:!0,path:"/search",component:J}),c.a.createElement(o.b,{component:D}))))};l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.972608b4.chunk.js.map