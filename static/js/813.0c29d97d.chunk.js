"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[813],{8668:function(n,t,e){e.d(t,{s:function(){return x}});var r,i,a,o=e(7689),c=e(168),s=e(5397),u=e(1087),p=s.Z.ul(r||(r=(0,c.Z)(["\njustify-content: center;\npadding: 10px;\ndisplay: flex;\nflex-wrap: wrap;\ngap: 15px;\npadding-top: 10px;\n"]))),l=(0,s.Z)(u.rU)(i||(i=(0,c.Z)(["\ndisplay: block;\ntext-align: center;\nmargin-top: 10px;\npadding: 10px;\nfont-size: 16px;\ncolor: #8c6cbd;\n"]))),d=s.Z.p(a||(a=(0,c.Z)(["\nmargin-bottom: 10px;"]))),f=e(184),x=function(n){var t=n.popularFilms,e=(0,o.TH)();return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(p,{children:t.map((function(n){return(0,f.jsxs)(l,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,f.jsxs)(d,{children:[" ",n.title||n.name]}),(0,f.jsx)("img",{width:"300",src:"https://image.tmdb.org/t/p/w500".concat(n.backdrop_path),alt:""})]},n.id)}))})})}},4813:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i,a,o=e(9439),c=e(2791),s=e(1087),u=e(7520),p=e(7689),l=e(168),d=e(5397),f=d.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: center;"]))),x=d.Z.input(i||(i=(0,l.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n "]))),g=d.Z.button(a||(a=(0,l.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  color: #fff;\n  background-color: #a19ff5;"]))),h=e(184),m=function(n){var t=n.onSubmit,e=(0,c.useState)(""),r=(0,o.Z)(e,2),i=r[0],a=r[1],s=(0,p.TH)();return(0,h.jsxs)(f,{state:{from:s},onSubmit:function(n){n.preventDefault(),t(i)},children:[(0,h.jsx)(x,{type:"text",value:i,onChange:function(n){return a(n.target.value)}}),(0,h.jsx)(g,{type:"submit",children:"Search"})]})},b=e(8668),Z=e(665),j=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],i=(0,s.lr)(),a=(0,o.Z)(i,2),p=a[0],l=a[1],d=(0,c.useState)(!1),f=(0,o.Z)(d,2),x=f[0],g=f[1],j=(0,c.useState)(!1),v=(0,o.Z)(j,2),y=v[0],S=v[1];(0,c.useEffect)((function(){var n=p.get("query");n&&(S(!0),(0,u.Kd)(n).then((function(n){r(n.results),n.results.length,g(!0)})).catch((function(n){})).finally(S(!1)))}),[p]);return(0,h.jsxs)(h.Fragment,{children:[y&&(0,h.jsx)(Z.a,{}),(0,h.jsx)(m,{onSubmit:function(n){l({query:n})}}),e.length>0&&(0,h.jsx)(b.s,{popularFilms:e}),x&&(0,h.jsx)("p",{children:"Sorry, there is no result"})]})}}}]);
//# sourceMappingURL=813.0c29d97d.chunk.js.map