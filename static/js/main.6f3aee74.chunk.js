(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r}),t.d(e,"c",function(){return a}),t.d(e,"e",function(){return c}),t.d(e,"f",function(){return i}),t.d(e,"d",function(){return u}),t.d(e,"h",function(){return l}),t.d(e,"i",function(){return d}),t.d(e,"g",function(){return s}),t.d(e,"j",function(){return f});var r="GET_NEWS_REQUEST",a="GET_NEWS_SUCCESS",o="GET_NEWS_ERROR",c="GET_PROFILE_REQUEST",i="GET_PROFILE_SUCCESS",u="GET_PROFILE_ERROR",l="POST_LOGIN_REQUEST",d="POST_LOGIN_SUCCESS",s="POST_LOGIN_ERROR",f="UNLOGIN"},36:function(n,e,t){n.exports=t(52)},41:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=(t(41),t(5)),u=t(12),l=t(11),d=t(6),s=t(24),f=t(14),g=t(1);function p(){var n=Object(i.a)(["\n    margin: auto;\n    text-decoration: none;\n    color: black;\n"]);return p=function(){return n},n}function E(){var n=Object(i.a)(["\n    margin: auto;\n    text-decoration: none;\n    color: black;\n"]);return E=function(){return n},n}var b=d.a.div(E()),h=Object(d.a)(l.b)(p());var v=Object(f.b)(function(n){return{login:n.login}},function(n){return{dispatch:n}},function(n,e){var t=e.dispatch;return Object(s.a)({},n,{unlogin:function(){t({type:g.j})}})})(function(n){return n.login.isLogin?a.a.createElement(b,{onClick:n.unlogin},"Unlogin"):a.a.createElement(h,{to:"/login/"},a.a.createElement(b,{className:"sign"},"Sign"))});function m(){var n=Object(i.a)(["\n    background-color: #00BCD4;\n"]);return m=function(){return n},n}function O(){var n=Object(i.a)(["\n    margin: auto;\n    text-decoration: none;\n    color: black;\n"]);return O=function(){return n},n}function y(){var n=Object(i.a)(["\n    display: flex;\n    height: 100%;\n    margin: 0;\n    padding: 0 15px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 23px;\n    background-color: #03A9F4;\n    text-decoration: none;\n"]);return y=function(){return n},n}function j(){var n=Object(i.a)(["\n    height: 60px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0px 15px;\n    list-style: none;\n    margin: 0;\n    background-color: #2196F3;\n    box-sizing: border-box;\n"]);return j=function(){return n},n}function w(){var n=Object(i.a)(["\n    top: 0;\n    position: sticky;\n"]);return w=function(){return n},n}var S=d.a.header(w()),x=d.a.ul(j()),_=d.a.li(y()),R=Object(d.a)(l.b)(O()),I=Object(d.a)(_)(m());var L=Object(f.b)(function(n){return{login:n.login}})(function(n){var e=n.login,t=e.isLogin?"/profile/".concat(e.id):"/login/";return a.a.createElement(S,null,a.a.createElement(x,null,a.a.createElement(_,null,a.a.createElement(R,{to:t},"Profile")),a.a.createElement(_,null,a.a.createElement(R,{to:"/news"},"News")),a.a.createElement(I,null,a.a.createElement(v,null))))});function T(){var n=Object(i.a)(["\n  width: 80%;\n  height: 100%;\n  background-color: #8BC34A;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n"]);return T=function(){return n},n}var k=a.a.lazy(function(){return t.e(4).then(t.bind(null,87))}),G=a.a.lazy(function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,88))}),N=a.a.lazy(function(){return t.e(5).then(t.bind(null,89))}),C=d.a.main(T());var U=function(){return a.a.createElement(l.a,null,a.a.createElement(L,null),a.a.createElement(C,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",component:k}),a.a.createElement(u.b,{path:"/login",component:G}),a.a.createElement(u.b,{path:"/news",component:k}),a.a.createElement(u.b,{path:"/profile/:id",component:N})))))},P=t(13);var z=Object(P.c)({articles:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.b:return[];case g.c:return[].concat(e.payload);case g.a:return[];default:return n}},newsIsLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case g.b:return!0;case g.c:case g.a:return!1;default:return n}},newsIsError:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.b:return{error:!1};case g.a:return{error:!0,payload:e.payload};default:return n}},profile:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.e:return{};case g.f:return Object.assign({},e.payload);case g.d:return{};default:return n}},profileIsLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case g.e:return!0;case g.f:case g.d:return!1;default:return n}},profileIsError:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.e:return{error:!1};case g.d:return{error:!0,payload:e.payload};default:return n}},login:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLogin:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.i:return Object.assign({isLogin:!0},e.payload);case g.j:return{isLogin:!1};default:return n}},loginIsError:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.h:return{error:!1};case g.g:return{error:!0,payload:e.payload};default:return n}}}),F=t(32),B=t.n(F),Q=t(33),W=Object(P.d)(z,Object(P.a)(Q.a,B.a));t(51);c.a.render(a.a.createElement(f.a,{store:W},a.a.createElement(U,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6f3aee74.chunk.js.map