"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[63],{3148:function(n,e,r){r.d(e,{Hx:function(){return l},Vu:function(){return s},Wg:function(){return p},uV:function(){return f},vw:function(){return i}});var t=r(5861),a=r(4687),o=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="6c7bf07634a6f35c9bd58e8125654f91",i=function(){var n=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8444:function(n,e,r){r.d(e,{Z:function(){return l}});var t,a,o=r(7689),u=r(1087),c=r(168),i=r(5706),s=i.Z.ul(t||(t=(0,c.Z)(["\n    margin-top: 20px;\n    list-style: none;\n    padding: 0;\n"]))),p=i.Z.li(a||(a=(0,c.Z)(["\n    font-weight: 700;\n    font-size: 16px;\n\n    :hover,\n    :focus{\n        box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);\n    }\n    \na{\n    display: block;\n    padding: 10px 10px;\n    text-decoration: none;\n    color: #0e3131;\n\n    :hover,\n    :focus{\n        color:  rgb(144 59 213 / 54%);\n    }\n}\n"]))),f=r(184),l=function(n){var e=n.movies,r=(0,o.TH)();return(0,f.jsx)(s,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,f.jsx)(p,{children:(0,f.jsx)(u.rU,{state:{from:r},to:"/movies/".concat(e),children:t})},e)}))})}},6063:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t,a,o=r(5861),u=r(9439),c=r(4687),i=r.n(c),s=r(2791),p=r(1087),f=r(3148),l=r(8444),d=r(168),x=r(5706),v=x.Z.input(t||(t=(0,d.Z)(["\n  display: inline-block;\n  \n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  margin-right:10px;\n  padding: 4px 4px;\n \n  border-radius: 5px;\nbackground-color: #99d6e7;\nbox-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);\n\n  &::placeholder{\n  font: inherit;\n  font-size: 18px;\n  }\n"]))),h=x.Z.button(a||(a=(0,d.Z)(["\n  display: inline-block;\n  font-size: 20px;\n  border: 0;\n  padding: 4px 4px;\n  opacity: 0.6;\n  \n  cursor: pointer;\n  outline: none;\n  color: black;\n  border-radius: 5px;\n  background-color: #21809b;\n  box-shadow: 8px 10px 5px 2px rgba(0, 0, 255, .2);\n \n&:hover{\n  color: aqua;\n    opacity: 1;\n  }\n"]))),g=r(184),b=function(n){var e=n.setSearchParams,r=(0,s.useState)(""),t=(0,u.Z)(r,2),a=t[0],o=t[1];return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e({query:a})},children:[(0,g.jsx)(v,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies...",value:a,onChange:function(n){var e=n.target.value;o(e)}}),(0,g.jsx)(h,{type:"submit",disabled:!a,children:"Search"})]})},m=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=(0,p.lr)(),c=(0,u.Z)(a,2),d=c[0],x=c[1];return(0,s.useEffect)((function(){var n=d.get("query");if(n){var e=function(){var e=(0,o.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Vu)(n);case 3:r=e.sent,t(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{setSearchParams:x}),r.length>0&&(0,g.jsx)(l.Z,{movies:r})]})}}}]);
//# sourceMappingURL=63.3c40b74c.chunk.js.map