(this["webpackJsonpprisco.dev"]=this["webpackJsonpprisco.dev"]||[]).push([[0],{23:function(e,t,n){var a={"./backend.svg":47,"./frontend.svg":48,"./ios.svg":49};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=23},31:function(e,t,n){e.exports=n(75)},36:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){e.exports=n.p+"static/media/hero.14218926.svg"},46:function(e,t,n){},47:function(e,t,n){e.exports=n.p+"static/media/backend.2e713b5a.svg"},48:function(e,t,n){e.exports=n.p+"static/media/frontend.5b780cc4.svg"},49:function(e,t,n){e.exports=n.p+"static/media/ios.5693e29e.svg"},50:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),l=(n(36),n(16)),i=(n(37),n(38),n(4)),s=n(5),m=n(7),d=n(6),u=n(9),p=n(12),v=n(13);function h(){var e=Object(p.a)(["\n  top: 5%;\n  right: 0;\n  left: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: auto;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  padding: 0;\n  z-index: 999;\n  margin-top: auto;\n  margin-bottom: auto;\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (max-width: 992px) {\n    div {\n      width: 2rem;\n      height: 0.25rem;\n      background-color: var(--accent);\n      transition: transform 0.3s linear;\n      position: relative;\n      transform-origin: 1px;\n      margin-left: ",";\n\n      :first-child {\n        transform: ",";\n      }\n\n      :nth-child(2) {\n        opacity: ",";\n        transform: ",";\n      }\n\n      :nth-child(3) {\n        transform: ",";\n      }\n    }\n  }\n"]);return h=function(){return e},e}var g=v.a.button(h(),(function(e){return e.open?"62vw":"15px"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),f=function(e){var t=e.open,n=e.toggleMenu;return r.a.createElement(g,{open:t,onClick:n},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function E(){var e=Object(p.a)(["\n  position: fixed;\n  flex-direction: column;\n  background: var(--text);\n  height: 100vh;\n  text-align: right;\n  padding: 1.2rem;\n  overflow-y: auto;\n  font-size: 14pt;\n  font-weight: 500;\n  text-transform: uppercase;\n  top: 0;\n  right: 0;\n  transition: transform 0.2s ease-in-out;\n  box-shadow: ",";\n  width: 62%;\n  transform: ",";\n  display: flex;\n  overflow-x: hidden !important;\n  color: #f8f8f8;\n"]);return E=function(){return e},e}var b=v.a.div(E(),(function(e){return e.open?"5px 3px 10px rgba(0, 0, 0, 0.2)":"none"}),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),w=function(e){var t=e.open,n=e.links,a=e.toggleMenu;return r.a.createElement(b,{className:"sidebar",open:t},r.a.createElement("ul",{className:"nav h-100 d-flex flex-column justify-content-center"},n.map((function(e){return r.a.createElement("li",{className:"nav-item nav-link py-2",key:e.to},r.a.createElement("div",{className:"text-center"},r.a.createElement(u.NavHashLink,{className:"nav-item nav-link burger-link m-3",smooth:!0,to:"#".concat(e.to),key:e.to,onClick:a},e.text)))}))))},y=(n(43),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={scrollPos:0,show:!0,menuOpen:!1},a.burgerMenuRef=void 0,a.burgerMenuListener=function(e){a.burgerMenuRef.current&&!a.burgerMenuRef.current.contains(e.target)&&(a.setState({menuOpen:!a.state.menuOpen}),document.removeEventListener("mousedown",a.burgerMenuListener),document.removeEventListener("touchstart",a.burgerMenuListener))},a.toggleMenu=function(){var e=!a.state.menuOpen;e?(document.addEventListener("mousedown",a.burgerMenuListener),document.addEventListener("touchstart",a.burgerMenuListener)):(document.removeEventListener("mousedown",a.burgerMenuListener),document.removeEventListener("touchstart",a.burgerMenuListener)),a.setState({menuOpen:e})},a.burgerMenuRef=r.a.createRef(),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.links,t=this.state,n=t.show,a=t.menuOpen;return r.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light ".concat(n?"nav-active":"nav-hidden")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-nav d-flex flex-row w-100 justify-content-end"},r.a.createElement(u.HashLink,{className:"nav-item w-100 navbar-brand m-3",smooth:!0,to:"/#home"},"GP."),r.a.createElement("div",{className:"d-flex mobile-only",ref:this.burgerMenuRef},r.a.createElement(f,{open:a,toggleMenu:this.toggleMenu}),r.a.createElement(w,{open:a,links:e,toggleMenu:this.toggleMenu})),e.map((function(e){return r.a.createElement(u.NavHashLink,{className:"desktop-nav-item nav-item nav-link m-3 w-25",smooth:!0,to:"#".concat(e.to),key:e.to},e.text)})))))}}]),n}(a.Component)),N=(n(44),function(){return r.a.createElement("section",{id:"home",className:"hero-section"},r.a.createElement("div",{className:"container my-auto pb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-7 hero-left my-auto"},r.a.createElement("div",{className:"hero-text py-4"},r.a.createElement("h5",{className:"h1"},"Hi",r.a.createElement("span",{className:"dot"},".")),r.a.createElement("p",{className:"hero-paragraph"},"I'm Giovanni Prisco, a software engineer based in Salerno"," ",r.a.createElement("span",{role:"img","aria-label":"sun"},"\u2600\ufe0f")))),r.a.createElement("div",{className:"col-lg-5 col-md-12 mt-sm-0 pt-sm-0"},r.a.createElement("div",{className:"position-relative"},r.a.createElement("img",{className:"mx-auto d-block hero-img",src:n(45),alt:"Hero",width:"800"}))),r.a.createElement("div",{className:"col-md-12 col-lg-5  h-100"}))))}),k=(n(46),function(e){var t=e.sectionId;return r.a.createElement("section",{id:t},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:"h3 text-center"},"About Me"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"mt-3 about lead"},"Hello there! As I said, I am a software engineer, I like defining myself as a ",r.a.createElement("b",null,"Full-Stack Web Developer"),", in my job I'm able to work with backend as well as with frontend. \u200dI love what I do, it's ",r.a.createElement("b",null,"addictive"),".\u200d",r.a.createElement("br",null),r.a.createElement("br",null),"Computer programming has always been a passion for me and whether it regards developing a simple mobile application or building a complex system, I ",r.a.createElement("b",null,"thoroughly enjoy")," doing so.",r.a.createElement("br",null),r.a.createElement("br",null),"What I love the most about my job is to collaborate and stay in contact with many ",r.a.createElement("b",null,"creative")," people, for this reason I soon fell in love with my experience at the Apple Developer Academy in Naples.",r.a.createElement("br",null),r.a.createElement("br",null),"If you think you have some good ideas to share, I will be very happy to hear them from you, feel free to contact me"," ",r.a.createElement("span",{role:"img","aria-label":"confetti"},"\ud83e\udd73"),".\u200d",r.a.createElement("br",null),r.a.createElement("br",null),"Actually I'm studying ",r.a.createElement("b",null,"Computer Science")," at University of Salerno and I'm for the second year at Apple Developer Academy in Naples as a ",r.a.createElement("b",null,"Pier Student")," and ",r.a.createElement("b",null,"backend developer"),".",r.a.createElement("br",null),r.a.createElement("br",null),"When I'm not working alongside clients, I'm"," ",r.a.createElement("b",null,"constantly learning")," new things, whether it is for the University or for some personal projects. As a matter of fact, I'm always trying to expand my tool-belt while still trying to reach an expertise level in Web Development. Currently I'm diving deeper in the AI world and I recently got the"," ",r.a.createElement("i",null,'"AI\xa0Programming with Python" nanodegree')," from Udacity.")))))}),x=function(e){var t=e.tech;return r.a.createElement("div",{className:"col-12 my-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card-title"},t.title))),t.id%2===0&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-4 my-auto"},r.a.createElement("img",{className:"responsive-img",src:n(23)("./".concat(t.image,".svg")),alt:""})),r.a.createElement("div",{className:"col-md-12 col-lg-8 my-auto"},r.a.createElement("p",{className:"card-text mt-3 p-2 lead"},t.paragraph))),t.id%2!==0&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-8 my-auto"},r.a.createElement("p",{className:"card-text mt-3 p-2 lead"},t.paragraph)),r.a.createElement("div",{className:"col-md-12 col-lg-4 my-auto"},r.a.createElement("img",{className:"responsive-img",src:n(23)("./".concat(t.image,".svg")),alt:""})))))))},I=(n(50),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cards:[{id:1,title:"Front-end Web Development",paragraph:"One of my main skill is to design and develop responsive, high quality web applications using the newest and most performant technologies.",image:"frontend"},{id:2,title:"Back-end Web Development",paragraph:"In addition to developing frontend applications, I'm also able to design and develop robust and scalable backend systems allowing me to be as much flexible as possible when working on a full-stack project.",image:"backend"},{id:3,title:"iOS Mobile Development",paragraph:"My experience at the Apple Developer Academy gave me the opportunity to experiment with the newest Apple Technologies, especially for Machine Learning and Augmented Reality beyond UIKit and the brand new SwiftUI and I think they are awesome!",image:"ios"}]},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{id:this.props.sectionId},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"h3 text-center"},"Tech"))),r.a.createElement("div",{className:"row"},this.state.cards.map((function(e){return r.a.createElement(x,{tech:e,key:e.id})})))))}}]),n}(r.a.Component)),O=n(28),j=n(29),M=n(14),L=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={icons:[{id:1,icon:M.b,link:"https://www.linkedin.com/in/priscogiovanni/",description:"Linkedin"},{id:2,icon:M.a,link:"https://github.com/Gprisco",description:"GitHub"},{id:3,icon:M.c,link:"https://medium.com/@gprisco01",description:"Medium"},{id:4,icon:j.a,link:"mailto:giovanni@prisco.dev",description:"Email"}]},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{id:this.props.sectionId,className:"mt-4 pt-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:"h3 text-center mb-4"},"Reach me"))),r.a.createElement("div",{className:"row"},this.state.icons.map((function(e){return r.a.createElement("div",{key:e.id,className:"contact-link col-md-6 col-lg-3 text-center my-1"},r.a.createElement("div",{className:"row"},r.a.createElement("a",{className:"mx-auto",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(O.a,{icon:e.icon,size:"8x"}))),r.a.createElement("div",{className:"row mt-2 text-center"},r.a.createElement("p",{className:"lead w-100 icon-description"},e.description)))})))))}}]),n}(r.a.Component),A=(n(53),function(){return r.a.createElement("footer",{className:"mt-4 footer"},r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},"Developed with React"),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"footer-p"},"Illustrations by"," ",r.a.createElement("a",{href:"https://www.freepik.com",target:"_blank",rel:"noopener noreferrer"},"Freepik")))),r.a.createElement("div",{className:"col text-right"},"\xa9 Giovanni Prisco 2020"))))}),D=n(30),S=n.n(D),C=function(e){var t=e.className;return a.createElement("div",{style:{height:"100vh"},className:"w-100 text-center d-flex justify-content-center align-items-center preloader "+t},a.createElement(S.a,{type:"Plane",color:"#aa96ed",height:200,width:200}))},R=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={links:[{to:"about",text:"about"},{to:"tech-stack",text:"tech"},{to:"contacts",text:"reach me"}],loading:!0,showingLoader:!0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.onload=function(){e.setState({loading:!1})}}},{key:"componentDidUpdate",value:function(){var e=this;this.state.showingLoader&&setTimeout((function(){return e.setState({showingLoader:!1})}),350)}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.showingLoader,a=e.links;return n?r.a.createElement(C,{className:t?"":"op-0"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{links:a}),r.a.createElement(N,null),r.a.createElement(k,{sectionId:a[0].to}),r.a.createElement(I,{sectionId:a[1].to}),r.a.createElement(L,{sectionId:a[2].to}),r.a.createElement(A,null))}}]),n}(a.Component);var H=function(){return r.a.createElement(R,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.HashRouter,{hashType:"slash"},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.14ee3237.chunk.js.map