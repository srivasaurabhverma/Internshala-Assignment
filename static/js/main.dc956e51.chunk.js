(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],[,,,,,,,,function(e,s,n){},function(e,s,n){},function(e,s,n){},,function(e,s,n){},function(e,s,n){},function(e,s,n){"use strict";n.r(s);var t=n(1),c=n.n(t),r=n(3),i=n.n(r),d=(n(8),n(9),n(10),n(0));var a=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{className:"about f",children:"About Us"}),Object(d.jsx)("div",{className:"privecy f",children:"Privacy Policy"}),Object(d.jsx)("div",{className:"tutorials f",children:"Tutorials"}),Object(d.jsx)("div",{className:"terms f",children:"Terms of Service"})]})},l=(n(12),function(){var e=document.getElementById("first").value,s=!1,n=!0;if(e!=document.getElementById("second").value)document.getElementById("err").innerText="Passwords do not match.",s=!0,document.getElementById("second").style.border="4px solid rgba(235, 87, 87, 1)";else if(e.length<8){s=!0,document.getElementById("err").innerText="Some Error Occurred",document.getElementById("second").style.border="4px solid rgba(235, 87, 87, 1)"}else{for(var t=0;t<e.length;t++)e[t]>="a"&&e[t]<="z"||e[t]>="A"&&e[t]<="Z"||(n=!1);if(1==n)document.getElementById("err").innerText="Some Error Occurred",document.getElementById("second").style.border="4px solid rgba(235, 87, 87, 1)"}0==s&&0==n&&(document.getElementById("tit").innerHTML="Password<span> Changed</span>",document.getElementById("main").innerHTML=' <p id="p_tag">Your password has been updated! Now get back \nin the driver seat, racers are waiting for you!</p>',document.getElementById("btn").innerHTML=' <button id="newbtn">\n            <h6 id="rst">JOIN A RACE</h6>\n          </button>')});var o=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form1",id:"form",children:[Object(d.jsx)("div",{className:"title2",id:"tit",children:"Password Reset"}),Object(d.jsxs)("div",{id:"main",children:[Object(d.jsxs)("div",{className:"new",children:[Object(d.jsx)("h3",{children:"NEW PASSWORD"}),Object(d.jsx)("input",{type:"password",name:"",id:"first"})]}),Object(d.jsxs)("div",{className:"new",children:[Object(d.jsx)("h3",{children:"RE-ENTER NEW PASSWORD"}),Object(d.jsx)("input",{type:"password",name:"",id:"second"}),Object(d.jsx)("p",{id:"err"})]})]}),Object(d.jsx)("div",{id:"btn",children:Object(d.jsx)("button",{className:"btnrest",onClick:l,children:Object(d.jsx)("h6",{id:"rst",children:"RESET PASSWORD"})})})]})})};n(13);var j=function(){return Object(d.jsx)("div",{className:"Navbar",children:Object(d.jsx)("nav",{class:"navbar navbar-expand-lg",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("a",{href:"#",class:"navbar-brand",id:"logo",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",height:"28",alt:"CoolBrand"})}),Object(d.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{class:"lies",id:"one",children:"Join a Race"}),Object(d.jsx)("li",{class:"lies",id:"two",children:"Leaderboard"})]}),Object(d.jsx)("button",{class:"btn btn-light",type:"submit",children:Object(d.jsx)("a",{children:" Login"})})]})]})})})};var u=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"formuse"}),Object(d.jsx)(j,{}),Object(d.jsx)(o,{}),Object(d.jsx)(a,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(s){var n=s.getCLS,t=s.getFID,c=s.getFCP,r=s.getLCP,i=s.getTTFB;n(e),t(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.dc956e51.chunk.js.map