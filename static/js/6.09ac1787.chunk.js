(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{88:function(t,e,n){"use strict";n.r(e);var r=n(23),a=n(54),c=n(55),o=n(57),i=n(56),u=n(58),s=n(5),l=n(0),p=n.n(l),f=n(14),m=n(59),d=n.n(m),b=n(60),h=n(1);var v=n(6),j=n(63),E=n.n(j);function O(){var t=Object(s.a)(["\n\tfont-size: 1em;\n\tline-height: 1.18em;\n"]);return O=function(){return t},t}function y(){var t=Object(s.a)(["\n\tfont-size: 1.95em;\n\tline-height: 1.2em;\n\tmargin-top: 0.6em;\n\tmargin-bottom: 2.41;\n"]);return y=function(){return t},t}function g(){var t=Object(s.a)(["\n\tbackground-color: #f1f3f4;\n\tpadding: 10px;\n\tfont-size: 22px;\n"]);return g=function(){return t},t}var w=v.a.article(g()),k=v.a.h3(y()),x=v.a.p(O()),z=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.data,e=t.title,n=t.text;return p.a.createElement(w,null,p.a.createElement("header",null,p.a.createElement(k,null,e)),p.a.createElement(x,null,n))}}]),e}(l.Component);z.defaultProps={data:{title:p.a.createElement(E.a,{count:3}),text:p.a.createElement(E.a,{count:5})}};var L=z;function I(){var t=Object(s.a)(["\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n"]);return I=function(){return t},t}function C(){var t=Object(s.a)(["\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 50px;\n"]);return C=function(){return t},t}function J(){var t=Object(s.a)(["\n\twidth: 70%;\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0 auto;\n"]);return J=function(){return t},t}var S=v.a.ul(J()),D=v.a.h2(C()),G=v.a.li(I()),M=[1,1].map(function(t,e){return p.a.createElement(G,{key:e},p.a.createElement(L,null))}),N=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.isError;if(n.error)return p.a.createElement(D,null,"Load Error: ",n.payload.toString());var r=this.props.articles.map(function(t){return p.a.createElement(G,{key:t.id},p.a.createElement(L,{data:t}))});return p.a.createElement("div",null,p.a.createElement(D,null,"News"),p.a.createElement(S,null,e?M:r))}}]),e}(l.Component);e.default=Object(f.b)(function(t){return{articles:t.articles,isError:t.newsIsError,isLoading:t.newsIsLoading}},function(t){return{dispatch:t}},function(t,e){var n=e.dispatch;return Object(r.a)({},t,{load:function(){n(function(){var t=Object(b.a)(d.a.mark(function t(e){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:h.b}),t.prev=1,t.next=4,fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news");case 4:return n=t.sent,t.next=7,n.json();case 7:if("ok"!==(n=t.sent).status){t.next=12;break}e({type:h.c,payload:n.data}),t.next=13;break;case 12:throw new Error(n.status);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),e({type:h.a,payload:t.t0});case 18:case"end":return t.stop()}},t,null,[[1,15]])}));return function(e){return t.apply(this,arguments)}}())}})})(N)}}]);
//# sourceMappingURL=6.09ac1787.chunk.js.map