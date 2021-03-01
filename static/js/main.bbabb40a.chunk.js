(this["webpackJsonpall-countries-app"]=this["webpackJsonpall-countries-app"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),s=n.n(a),l=(n(17),n(6)),i=n.n(l),o=n(8),u=n(7),j=n(3),d=function(e,t){switch(t.type){case"GET_DATA":return Object(j.a)(Object(j.a)({},e),{},{countries:t.payload,loading:!1});case"GET_LANGUAGES":return Object(j.a)(Object(j.a)({},e),{},{langlist:t.payload,loading:!1});case"FILTER_BY_BIGGEST":return Object(j.a)(Object(j.a)({},e),{},{chosen:null,filtered:e.countries.filter((function(e){return e.population>t.payload}))});case"FETCH_LANG_DATA":return Object(j.a)(Object(j.a)({},e),{},{filtered:null,chosen:t.payload,loading:!1});case"SET_CURRENT":return Object(j.a)(Object(j.a)({},e),{},{current:t.payload});case"CLEAR_CURRENT":return Object(j.a)(Object(j.a)({},e),{},{current:null});case"SET_LOADING":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});default:return e}},b=n(1),h=Object(c.createContext)(),p=function(e){var t=Object(c.useReducer)(d,{countries:[],loading:!1,current:null,filtered:null,chosen:null,langlist:[]}),n=Object(u.a)(t,2),r=n[0],a=n[1],s=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),e.next=3,fetch("https://restcountries.eu/rest/v2/all");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a({type:"GET_DATA",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),e.next=3,fetch("https://restcountries.eu/rest/v2/all?fields=name;languages;");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a({type:"GET_LANGUAGES",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),e.next=3,fetch("https://restcountries.eu/rest/v2/lang/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a({type:"FETCH_LANG_DATA",payload:c});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){a({type:"SET_LOADING"})};return Object(b.jsx)(h.Provider,{value:{countries:r.countries,loading:r.loading,current:r.current,countriesbylanguage:r.countriesbylanguage,langlist:r.langlist,filtered:r.filtered,chosen:r.chosen,fetchData:s,showDetailedInfo:function(e){a({type:"SET_CURRENT",payload:e})},clearCurrent:function(){a({type:"CLEAR_CURRENT"})},filterByBiggest:function(e){a({type:"FILTER_BY_BIGGEST",payload:e})},fetchDataReduced:l,fetchLangData:j},children:e.children})},O=n(12),g=function(e){var t=e.el,n=Object(c.useContext)(h).showDetailedInfo;return Object(b.jsx)("div",{className:"marker",onClick:function(){return n(t)},children:Object(b.jsx)("i",{className:"fas fa-map-pin",style:{color:"yellow",padding:"10px"}})})},x=n(11),f=function(e){var t,n=e.current,r=Object(c.useContext)(h).clearCurrent;return Object(b.jsxs)(x.a.div,{className:"extra-info",initial:{y:"-50vh"},animate:{y:0},transition:{duration:.5,type:"spring",stiffness:150},children:[Object(b.jsx)("h3",{style:{textAlign:"center"},children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:"}),Object(b.jsx)("img",{style:{width:"100px",display:"block",margin:"auto"},src:n.flag,alt:"Flag of the country"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("strong",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b: ",n.name]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("strong",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",(t=n.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("strong",{children:["\u0421\u0442\u043e\u043b\u0438\u0446\u0430: ",n.capital]})}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{style:{color:"yellow"},children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u044f\u0437\u044b\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u044b:"}),Object(b.jsx)("br",{})," ",n.languages.map((function(e,t){return Object(b.jsxs)("span",{children:[e.name,t===n.languages.length-1?"":", "]},t)}))]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{style:{color:"yellow"},children:"\u0412\u0430\u043b\u044e\u0442\u0430:"})," ",n.currencies.map((function(e,t){return Object(b.jsxs)("div",{children:[e.name," ",!!e.symbol&&"(".concat(e.symbol,")")]},t)}))]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{style:{color:"yellow"},children:"\u0412\u0445\u043e\u0434\u0438\u0442 \u0432 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0431\u043b\u043e\u043a\u0438:"})," ",n.regionalBlocs.length?n.regionalBlocs.map((function(e,t){return Object(b.jsx)("div",{children:e.name},t)})):"---"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"\u041c\u0435\u0441\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:"})," ",n.timezones.map((function(e,t){return Object(b.jsxs)("span",{children:[e,t===n.timezones.length-1?"":", "]},t)}))]})]}),Object(b.jsx)("button",{className:"btn",onClick:function(){return r()},style:{boxShadow:"0px 0px 8px rgb(255,255,255)",background:"rgb(0,0,0)",width:"200px"},children:"\u0421\u043a\u0440\u044b\u0442\u044c"})]})},v=function(){return Object(b.jsxs)("div",{className:"loader-wrapper",children:[Object(b.jsx)("div",{className:"lds-dual-ring"}),Object(b.jsx)("h1",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0438\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})},y=function(e){var t=e.center,n=e.zoom,r=Object(c.useContext)(h),a=r.fetchData,s=r.fetchDataReduced,l=r.countries,i=r.current,o=r.loading,u=r.chosen,j=r.filtered;Object(c.useEffect)((function(){s(),a()}),[]),console.log(j);var d=l&&l.map((function(e,t){return Object(b.jsx)(g,{lat:e.latlng[0],lng:e.latlng[1],el:e},t)})),p=j&&j.map((function(e,t){return Object(b.jsx)(g,{lat:e.latlng[0],lng:e.latlng[1],el:e},t)})),x=u&&u.map((function(e,t){return Object(b.jsx)(g,{lat:e.latlng[0],lng:e.latlng[1],el:e},t)}));return Object(b.jsx)("div",{className:"map-container",children:o?Object(b.jsx)(v,{}):Object(b.jsxs)(O.a,{bootstrapURLKeys:{key:""},defaultCenter:t,defaultZoom:n,children:[!j&&!u&&d,j&&!u&&p,x,null!==i?Object(b.jsx)(f,{current:i}):""]})})};y.defaultProps={center:{lat:40.95,lng:20.33},zoom:1};var m=y,C=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(h),s=a.filterByBiggest,l=a.langlist,i=a.fetchLangData;return Object(b.jsxs)("div",{className:"navbar-wrapper",children:[Object(b.jsx)("div",{style:{padding:"5px"},className:"sidenav-trigger-wrapper",onClick:function(){return r(!n)},children:Object(b.jsx)("div",{className:"sidenav-trigger"})}),Object(b.jsxs)("ul",{className:"navbar ".concat(n?"navbar-is-opened":""),children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u044b:  "}),Object(b.jsxs)("select",{onChange:function(e){return s(e.target.value)},style:{padding:"5px"},children:[Object(b.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),Object(b.jsx)("option",{value:0,children:"\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"}),Object(b.jsx)("option",{value:1e7,children:"\u0411\u043e\u043b\u0435\u0435 10\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(b.jsx)("option",{value:3e7,children:"\u0411\u043e\u043b\u0435\u0435 30\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(b.jsx)("option",{value:5e7,children:"\u0411\u043e\u043b\u0435\u0435 50\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(b.jsx)("option",{value:1e8,children:"\u0411\u043e\u043b\u0435\u0435 100\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"})]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{htmlFor:"lang",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u044b, \u0433\u043e\u0432\u043e\u0440\u044f\u0449\u0438\u0435 \u043d\u0430 \u044d\u0442\u043e\u043c \u044f\u0437\u044b\u043a\u0435:  "}),Object(b.jsx)("select",{onChange:function(e){return i(e.target.value)},style:{padding:"5px"},name:"lang",id:"",children:l.map((function(e,t){return Object(b.jsx)("option",{value:e.languages[0].iso639_1,children:e.languages[0].name},t)}))})]})]})]})},E=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:"\u0423\u0437\u043d\u0430\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b \u043e \u0441\u0442\u0440\u0430\u043d\u0435 (\u0432\u0441\u0435\u0433\u043e \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0438\u043a\u043e\u043c!)"})})};var T=function(){return Object(b.jsx)(p,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{}),Object(b.jsx)(C,{}),Object(b.jsx)(m,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.bbabb40a.chunk.js.map