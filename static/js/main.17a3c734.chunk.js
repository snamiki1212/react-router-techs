(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n,r=t(0),o=t.n(r),i=t(14),l=t.n(i),c=(t(23),t(8)),s=t(2),m=t(5),d=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"lightgreen",height:"30px"}},o.a.createElement("span",null,"React-router-techs"),o.a.createElement("span",null,o.a.createElement(s.b,{to:"/"},"HOME"),"/",o.a.createElement(s.b,{to:"/about"},"ABOUT")))},p=function(){return o.a.createElement("div",{style:{backgroundColor:"lightgreen"}},"this app is created by nash >> ",o.a.createElement("a",{href:""},"github"),".")};!function(e){e[e.Backend=0]="Backend",e[e.Frontend=1]="Frontend",e[e.Mobile=2]="Mobile"}(n||(n={}));var u=[{id:1,name:"JavaScript",side:n.Frontend,memo:"JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."},{id:2,name:"PHP",side:n.Backend,memo:"PHP: Hypertext Preprocessor (or simply PHP) is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994 the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor."},{id:3,name:"React",side:n.Frontend,memo:"React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."},{id:4,name:"Laravel",side:n.Backend,memo:"Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model\u2013view\u2013controller (MVC) architectural pattern and based on Symfony. "},{id:5,name:"Swift",side:n.Mobile,memo:"Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. "}],f=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("p",null,"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u305f\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u30b5\u30f3\u30d7\u30eb"),u.map(function(e){var a="/".concat(e.id.toString());return o.a.createElement("li",{key:e.id},o.a.createElement(s.b,{to:a},e.name))}),o.a.createElement(p,null))},g=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("p",null,"\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u306freact-router\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u3082\u306e\u3067\u3059\u3002"),o.a.createElement(p,null))},b=Object(m.g)(function(e){e.history,e.location;var a=e.match,t=parseInt(a.params.id),r=u.find(function(e){return e.id===t});return void 0===r?o.a.createElement(m.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("p",null,o.a.createElement("span",null,"ID: ",r.id),o.a.createElement("span",null,"/ NAME: ",r.name),o.a.createElement("span",null,"/ SIDE: ",n[r.side])),o.a.createElement("p",{style:{width:"50%",margin:"auto"}},r.memo),o.a.createElement(p,null))}),E=(t(41),function(){function e(e){return Object(c.b)(e,{stiffness:130,damping:22})}return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,{basename:"example-react-router"},o.a.createElement(c.a,{atEnter:{opacity:0,scale:0},atLeave:{opacity:e(0),scale:e(7)},atActive:{opacity:e(1),scale:e(1)},mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},className:"switch-wrapper"},o.a.createElement(m.b,{path:"/about",component:g}),o.a.createElement(m.b,{path:"/:id",component:b}),o.a.createElement(m.b,{path:"/",component:f}),o.a.createElement(m.a,{to:"/"}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(s.a,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.17a3c734.chunk.js.map