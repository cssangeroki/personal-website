(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s,n=c(17),a=c.n(n),i=(c(44),c(1)),o=(c(45),c(10)),r=c(19),l=c(70),b=c(14),j=c(18),d=c(34),m={body:"#f0ead6",fontColor:"#2f2f2f",image:"url(../assets/brown_light)"},h={body:"#2f2f2f",fontColor:"#f0ead6",image:"url(../assets/brown_dark)"},u=Object(j.b)(s||(s=Object(d.a)(["\n    body{\n        background-color: ",";\n        transition: background-color 0.25s linear;\n        \n    }\n    *{\n        color: ",";\n        transition: color 0.5s linear;\n\n    }\n\n    .nav-menu{\n      background-color: ",";\n    }\n\n    .navbar-text{\n      color: ","\n    }\n\n    .card-container{\n      border: 7px solid ",";\n      background-color: ",";\n    }\n    \n\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.body}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.body})),x=(c(59),c(2));var O=function(){var e=Object(i.useState)("light"),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(x.jsxs)(j.a,{theme:"light"===c?m:h,children:[Object(x.jsx)(u,{}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsx)("p",{className:"navbar-text",children:"theme"}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{type:"checkbox"}),Object(x.jsx)("span",{className:"slider",onClick:function(){s("light"===c?"dark":"light")}})]})]})]})};c(61);var p=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),a=Object(o.a)(n,2),j=a[0],d=a[1];return Object(x.jsxs)("div",{className:"navbar-wrap",children:[Object(x.jsx)("div",{className:"navbar",children:Object(x.jsx)(r.b,{to:"#",className:"menu-bars",children:Object(x.jsx)(l.a,{rounded:!0,toggled:j,toggle:d,onToggle:function(){return s(!c)},className:"burger-icon"})})}),Object(x.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(x.jsxs)("ul",{id:"nav-items",className:"nav-menu-items",children:[Object(x.jsx)("li",{children:Object(x.jsx)(b.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,className:"navbar-text",children:"home."})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.Link,{to:"about",spy:!0,smooth:!0,className:"navbar-text",children:"about."})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.Link,{to:"project",spy:!0,smooth:!0,className:"navbar-text",children:"projects."})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.Link,{to:"contact",spy:!0,smooth:!0,className:"navbar-text",children:"socials."})}),Object(x.jsx)("li",{children:Object(x.jsx)(O,{})})]})})]})},f=c(3),g=(c(65),c(38)),v=c.n(g),y=c(8),N=c(12),k=c(39);c(67);var w=function(e){return Object(x.jsxs)("div",{className:"card-container",style:e.anim,children:[Object(x.jsx)("div",{className:"card-title",children:Object(x.jsxs)("h3",{children:[" ",e.title," "]})}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("p",{children:e.body})}),Object(x.jsx)("a",{href:e.route,children:Object(x.jsx)(N.b,{className:"card-icon",size:"4em"})})]})};var M=function(e){var t=Object(i.useState)(0),c=Object(o.a)(t,2),s=c[0],n=c[1],a=function(){return n(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{id:"home",className:y.isMobile?"home-style home-style-mobile":"home-style",children:Object(x.jsx)("h1",{children:Object(x.jsx)(v.a,{onInit:function(e){e.changeDelay(100).typeString("claudio").changeDelay(200).typeString(" koesnadi").start()}})})}),Object(x.jsxs)("div",{id:"about",className:y.isMobile?"about-style about-style-mobile":"about-style",children:[Object(x.jsxs)("div",{className:y.isMobile?"about-text about-text-mobile":"about-text",children:[Object(x.jsx)("h1",{className:y.isMobile?"about-header about-header-mobile":"about-header",children:"about me."}),"hey! my name's claudio and i'm a software engineer. i am extremely passionate about machine learning and artificial intelligence. currently knee-deep in building custom mechanical keyboards."]}),Object(x.jsx)("div",{className:y.isMobile?"picture-dark picture-dark-mobile":"picture-dark",style:{transform:"translateY(".concat(.1*s,"px)")}})]}),Object(x.jsx)("div",{id:"project",className:y.isMobile?"project-style project-style-mobile":"project-style",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:y.isMobile?"project-header project-header-mobile":"project-header",onClick:function(){console.log(s)},children:"top projects."}),Object(x.jsxs)("div",{className:y.isMobile?"project-cards project-cards-mobile":"project-cards",children:[Object(x.jsx)(w,{title:"pacman ai",body:"implemented searches such as bfs, dfs, and a* search to pacman and created various ai agents",anim:s>=1676?{transform:"0px"}:{transform:"translateX(".concat(.1*s-167.6,"px)")},route:"https://github.com/cssangeroki/CSE140-Artificial-Intelligence"}),Object(x.jsx)(w,{title:"yelp review",body:"using various machine learning models, we were able to predict the stars a person will give after a review is written",anim:s>=1676?{transform:"0px"}:{transform:"translateY(".concat(.05*s-83.8,"px)")},route:"https://github.com/cssangeroki/CSE142-Machine-Learning"}),Object(x.jsx)(w,{title:"rendezvous",body:"created a mobile app with flutter in order to find a midpoint between users and look at surrounding hotspots in yelp",anim:s>=1676?{transform:"0px"}:{transform:"translateY(".concat(167.6-.1*s,"px)")},route:"https://github.com/cssangeroki/Rendezvous"}),Object(x.jsx)(w,{title:"game ai",body:"created various ai agents in order to complete goals given in each project",anim:s>=1676?{transform:"0px"}:{transform:"translateX(".concat(83.8-.05*s,"px)")},route:"https://github.com/cssangeroki/CMPM146-Game-AI"})]})]})}),Object(x.jsx)("div",{id:"contact",className:y.isMobile?"contact-style contact-style-mobile":"contact-style",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"contact-header",children:"socials."}),Object(x.jsxs)("div",{className:y.isMobile?"contact-text contact-text-mobile":"contact-text",children:[Object(x.jsxs)("a",{href:"https://www.instagram.com/claudioksnd/",children:[Object(x.jsx)(N.c,{size:"1.5em",className:"social-icon"}),"Instagram"]}),Object(x.jsxs)("a",{href:"https://www.linkedin.com/in/csangeroki/",children:[Object(x.jsx)(N.d,{size:"1.5em",className:"social-icon"}),"LinkedIn"]}),Object(x.jsxs)("a",{href:"https://github.com/cssangeroki",children:[Object(x.jsx)(N.b,{size:"1.5em",className:"social-icon"}),"Github"]}),Object(x.jsxs)("a",{href:"mailto:claudkoes@gmail.com",children:[Object(x.jsx)(k.a,{size:"1.5em",className:"social-icon"}),"claudkoes@gmail.com"]})]}),Object(x.jsxs)("div",{className:"copyright",children:[Object(x.jsx)(N.a,{className:"copyright-icon"}),Object(x.jsx)("p",{children:"2021 Claudio Koesnadi"})]})]})})]})};var C=function(){return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(x.jsxs)("div",{children:[Object(x.jsxs)(r.a,{children:[Object(x.jsx)(p,{}),Object(x.jsx)(f.c,{children:Object(x.jsx)(f.a,{path:"/"})})]}),Object(x.jsx)(M,{})]})};a.a.render(Object(x.jsx)(C,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.ce945734.chunk.js.map