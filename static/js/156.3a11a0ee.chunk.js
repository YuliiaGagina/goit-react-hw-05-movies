"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[156],{8668:function(n,t,r){r.d(t,{s:function(){return d}});var e,a,u=r(1087),c=r(7689),i=r(168),s=r(5397),o=s.Z.ul(e||(e=(0,i.Z)(["\njustify-content: center;\npadding: 10px;\ndisplay: flex;\nflex-wrap: wrap;\ngap: 15px;\npadding-top: 10px;\n"]))),p=(0,s.Z)(u.rU)(a||(a=(0,i.Z)(["\ndisplay: block;\ntext-align: center;\nmargin-top: 10px;\npadding: 10px;\nfont-size: 16px;\ncolor: #8c6cbd;\n"]))),f=r(184),d=function(n){var t=n.popularFilms,r=(0,c.TH)();return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(o,{children:t.map((function(n){return(0,f.jsxs)(u.rU,{to:"/movies/".concat(n.id),children:[(0,f.jsx)(p,{state:{from:r},children:n.title||n.name}),(0,f.jsx)("img",{width:"300",src:"https://image.tmdb.org/t/p/w500".concat(n.backdrop_path),alt:""})]},n.id)}))})})}},156:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a,u=r(9439),c=r(2791),i=r(4390),s=r(8668),o=r(168),p=r(5397),f=p.Z.section(e||(e=(0,o.Z)(["\npadding-left: 20px\n"]))),d=p.Z.h2(a||(a=(0,o.Z)(["\nfont-size: 32px;\nfont-weight: 600;\nmargin-bottom: 20px;\ncolor: #a19ff5;\n"]))),l=r(184);var v=function(){var n=(0,c.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1];return(0,c.useEffect)((function(){(0,i.Cp)().then((function(n){var t=n.results;e(t)})).catch((function(n){return n.message}))}),[]),(0,l.jsxs)(f,{children:[(0,l.jsx)(d,{children:"Trending today"}),r&&(0,l.jsx)(s.s,{popularFilms:r})]})}},4390:function(n,t,r){r.d(t,{Cp:function(){return i},Kd:function(){return s},TI:function(){return f},k0:function(){return o},lW:function(){return p}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"fc9c8a8d778f1915a9b2d9762106d266",page:1};var i=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"),{params:{per_page:20,page:1}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=156.3a11a0ee.chunk.js.map