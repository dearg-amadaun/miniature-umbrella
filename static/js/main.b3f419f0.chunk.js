(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{75:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(25),n=a.n(i),r=a(8),l=a(14),o=a(16),d=a(18),b=a(40),j=a(15),u=a(47),h=a(41),m=a(70),x=(a(75),a(64)),O=a(54),p=a(62),f=a(34),k=a(63),g=a(49),v=a(2);f.b.add(p.a,k.a);var y=function(){return Object(v.jsx)("footer",{className:"mt-5",children:Object(v.jsx)(u.a,{fluid:!0,children:Object(v.jsxs)(x.a,{className:"border-top justify-content-between p-3",children:[Object(v.jsx)(O.a,{className:"p-0",md:3,sm:12,children:"Brendan Rottmund"}),Object(v.jsxs)(O.a,{className:"p-0 d-flex justify-content-end",md:3,children:[Object(v.jsx)(g.a,{icon:["fab","linkedin"]}),Object(v.jsx)(g.a,{icon:["fab","github"]}),Object(v.jsx)(g.a,{icon:["fas","envelope"]})]})]})})})},N=a(94),w=a(95),T=a(96),C=a(97);var S=function(e){return Object(v.jsx)(N.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(v.jsx)(w.a,{fluid:!0,children:Object(v.jsx)(T.a,{className:"justify-content-center py-5",children:Object(v.jsxs)(C.a,{md:8,sm:12,children:[e.title&&Object(v.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(v.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(v.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},A=a(22),B=a(55);var D=function(e){var t=Object(B.useSpring)({opacity:1,from:{opacity:0}});return Object(v.jsxs)(B.animated.div,{className:"my-card-info",style:t,children:[Object(v.jsx)("p",{className:"my-card-title",children:e.title}),Object(v.jsx)("p",{className:"my-card-sub-title",children:e.subTitle}),Object(v.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var I=function(e){return Object(v.jsxs)("div",{className:"d-inline-block my-card",onClick:function(t){return e.onClick(e.item)},children:[Object(v.jsx)("img",{className:"my-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(v.jsx)(D,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},F=a.p+"static/media/fitlist.e68be035.jpg",M=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleCardClick=function(e,t){var a=Object(A.a)(c.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),c.setState({items:a})},c.makeItems=function(e){return e.map((function(e){return Object(v.jsx)(I,{item:e,onClick:function(t){return c.handleCardClick(e.id,t)}},e.id)}))},c.state={items:[{id:0,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1},{id:1,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1},{id:2,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1},{id:3,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1},{id:4,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1},{id:5,title:"Fitness Tracker",subTitle:"A simple mongoDb based workout tracker.",imgSrc:F,link:"https://calm-harbor-58560.herokuapp.com/",selected:!1}]},c}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsx)(w.a,{fluid:!0,children:Object(v.jsx)(T.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component);var V=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(S,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(v.jsx)(M,{})]})};var H=function(e){return Object(v.jsx)(w.a,{fluid:!0,className:"rounded mx-auto d-block",children:Object(v.jsx)(T.a,{className:"justify-content-center ",children:Object(v.jsx)(C.a,{md:5,children:e.children})})})},J=a(65),L=a.p+"static/media/headshot.3548c5be.jpg";var P=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(J.a,{className:"rounded mx-auto d-block mt-5",src:L,alt:"Brendan",rounded:!0}),Object(v.jsxs)(H,{children:[Object(v.jsx)(S,{title:e.title}),Object(v.jsx)("p",{children:"As a skilled tradesman laid off during the height of the COVID crisis I decided to focus on retraining and setting myself on a new path. I took a risk and joined the Penn LPS Coding Bootcamp. Now as a full stack web developer I am continually striving to evolve what I know, write cleaner code, and learn new languages and skills to improve my abilities and add to my toolbox."}),Object(v.jsx)("p",{children:"Versed in HTML, CSS, Javascript, Bootstrap, JQuery, Node, and MYSQL. As well as progressive web apps, agile methodology, and database theory."}),Object(v.jsx)("p",{children:"Here you will find several small projects that showcase proficiency in a variety of areas including the above."})]})]})},R=a(98),E=a(99),Q=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Anchors "}),Object(v.jsxs)("p",{children:["Be sure to ",Object(v.jsxs)("strong",{children:["not use the standard ",Object(v.jsx)("code",{children:".btn"})," classes here"]}),"."]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(E.a,{active:!0,tag:"a",href:"#",action:!0,children:"Cras justo odio"}),Object(v.jsx)(E.a,{tag:"a",href:"#",action:!0,children:"Dapibus ac facilisis in"}),Object(v.jsx)(E.a,{tag:"a",href:"#",action:!0,children:"Morbi leo risus"}),Object(v.jsx)(E.a,{tag:"a",href:"#",action:!0,children:"Porta ac consectetur ac"}),Object(v.jsx)(E.a,{disabled:!0,tag:"a",href:"#",action:!0,children:"Vestibulum at eros"})]}),Object(v.jsx)("p",{}),Object(v.jsx)("h3",{children:"Buttons "}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(E.a,{active:!0,tag:"button",action:!0,children:"Cras justo odio"}),Object(v.jsx)(E.a,{tag:"button",action:!0,children:"Dapibus ac facilisis in"}),Object(v.jsx)(E.a,{tag:"button",action:!0,children:"Morbi leo risus"}),Object(v.jsx)(E.a,{tag:"button",action:!0,children:"Porta ac consectetur ac"}),Object(v.jsx)(E.a,{disabled:!0,tag:"button",action:!0,children:"Vestibulum at eros"})]})]})},Y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={title:"Brendan Rottmund",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"New skills,",subTitle:"New career,",text:"Bootcamp and beyond!"},about:{title:"About Me"},Contact:{title:"Contact Me"}},c}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsx)(b.a,{children:Object(v.jsxs)(u.a,{className:"p-0",fluid:!0,children:[Object(v.jsxs)(h.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(v.jsx)(h.a.Brand,{children:"Brendan Rottmund"}),Object(v.jsx)(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(v.jsx)(h.a.Collapse,{id:"navbar-toggle",children:Object(v.jsxs)(m.a,{className:"ml-auto",children:[Object(v.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"}),Object(v.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"}),Object(v.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(v.jsx)(j.a,{path:"/",exact:!0,render:function(){return Object(v.jsx)(V,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(v.jsx)(j.a,{path:"/about",render:function(){return Object(v.jsx)(P,{title:e.state.about.title})}}),Object(v.jsx)(j.a,{path:"/contact",render:function(){return Object(v.jsx)(Q,{title:e.state.Contact.title})}}),Object(v.jsx)(y,{})]})})}}]),a}(s.a.Component);a(90),a(91);n.a.render(Object(v.jsx)(Y,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.b3f419f0.chunk.js.map