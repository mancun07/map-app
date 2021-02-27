(this["webpackJsonpall-countries-app"]=this["webpackJsonpall-countries-app"]||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(3),a=n.n(s),i=(n(16),n(7)),l=n.n(i),o=n(8),u=n(5),j=n(2),b=Object(c.createContext)(),d=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),d=i[0],h=(i[1],Object(c.useState)(null)),O=Object(u.a)(h,2),f=O[0],x=O[1],p=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(b.Provider,{value:{countries:r,loading:d,current:f,fetchData:p,showDetailedInfo:function(e){x(e)},clearCurrent:function(){x(null)}},children:e.children})},h=n(11),O=function(e){var t=e.el,n=Object(c.useContext)(b),r=n.showDetailedInfo;n.countries;return Object(j.jsx)("div",{className:"marker",onClick:function(){return r(t)},children:Object(j.jsx)("i",{className:"fas fa-map-marker",style:{color:"yellow"}})})},f=n(10),x=function(e){var t,n=e.current,r=Object(c.useContext)(b).clearCurrent;return Object(j.jsxs)(f.a.div,{className:"extra-info",initial:{y:"-50vh"},animate:{y:0},transition:{duration:.5,type:"spring",stiffness:150},children:[Object(j.jsx)("h3",{style:{textAlign:"center"},children:"Extra info about chosen country:"}),Object(j.jsx)("img",{style:{width:"100px",display:"block",margin:"auto"},src:n.flag,alt:"Flag of the country"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("strong",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b: ",n.name]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("strong",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",(t=n.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("strong",{children:["\u0421\u0442\u043e\u043b\u0438\u0446\u0430: ",n.capital]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("strong",{children:["\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u044f\u0437\u044b\u043a: ",n.languages[0].name]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("strong",{children:["\u0412\u0430\u043b\u044e\u0442\u0430: ",n.currencies[0].name]})})]}),Object(j.jsx)("button",{className:"btn",onClick:function(){return r()},children:"Hide"})]})},p=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Learn main facts about chosen country (just by one click!)"})})},g=function(e){var t=e.center,n=e.zoom,r=Object(c.useContext)(b),s=r.fetchData,a=r.countries,i=r.current;return Object(c.useEffect)((function(){s(),console.log(a)}),[]),Object(j.jsx)("div",{className:"map-container",children:Object(j.jsxs)(h.a,{bootstrapURLKeys:{key:""},defaultCenter:t,defaultZoom:n,children:[Object(j.jsx)(p,{}),a&&a.map((function(e){return Object(j.jsx)(O,{lat:e.latlng[0],lng:e.latlng[1],el:e},e.numericCode)})),null!==i?Object(j.jsx)(x,{current:i}):""]})})};g.defaultProps={center:{lat:59.95,lng:30.33},zoom:1};var m=g;var v=function(){return Object(j.jsx)(d,{children:Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.f2c1940b.chunk.js.map