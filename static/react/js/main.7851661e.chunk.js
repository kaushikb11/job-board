(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){e.exports=n(300)},153:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),i=(n(153),n(154),n(72)),l=n(134),u=n(101),s=n.n(u),m=n(135),p=n(73),d=n(74),h=n(79),y=n(75),f=n(80),v=n(36),w=function(e){var t=e.companies,n=e.activeCompanyId,a=e.handleClick;return c.a.createElement("div",{className:"Container"},t.map(function(e,t){var o=n===t?"primary":"secondary";return c.a.createElement(v.a,{type:o,onClick:function(){return a(t)}},e)}))},E=n(302),C=n(58),b=n(301),g=[{title:"Role",dataIndex:"title",width:500},{title:"Company",dataIndex:"company",width:400},{title:"Location",dataIndex:"location"}],x={textAlign:"center",marginTop:"120px"},k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={query:"",columnQuery:"title"},n.selectRow=function(e){window.open(e.link,"_blank")},n.searchText=function(e){n.setState({query:e.toLowerCase()})},n.handleChange=function(e){n.setState({columnQuery:e,query:""})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,n=E.a.Search,a=C.a.Option,o=this.state,r=o.columnQuery,i=o.query;return t=t?t.filter(function(e){return e[r].toString().toLowerCase().includes(i)}):null,c.a.createElement("div",null,c.a.createElement("div",null,t?c.a.createElement("h3",{style:{paddingTop:"10px"}},t.length," open roles"):""),c.a.createElement("div",{className:"table"},t?c.a.createElement("div",null,c.a.createElement(n,{placeholder:"Search",style:{width:300,paddingRight:"20px",paddingBottom:"15px"},onSearch:function(t){return e.searchText(t)},enterButton:!0}),c.a.createElement(C.a,{defaultValue:"title",style:{width:120,paddingBottom:"15px"},onChange:this.handleChange},c.a.createElement(a,{value:"location"},"Location"),c.a.createElement(a,{value:"title"},"Title")),c.a.createElement("br",null),c.a.createElement(b.a,{columns:g,dataSource:t,onRow:function(t){return{onClick:function(){e.selectRow(t)}}}})):c.a.createElement(v.a,{style:x,size:"large",shape:"circle",loading:!0})))}}]),t}(a.Component),O=function(){return c.a.createElement("div",{className:"text"},c.a.createElement("h2",null,"Select a Company to see Open Positions"))},j=(n(299),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={companies:["Twilio","AirBnB","Yext"],companiesKeys:["twilio","airbnb","yext"],cacheData:{},activeCompanyId:null},n.handleClick=function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({activeCompanyId:t});case 2:n.getJobsDataByCompany();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getJobsDataByCompany=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=n.state,a=t.companiesKeys,c=t.activeCompanyId,o=t.cacheData,r=null===e?a[c]:a[e];o.hasOwnProperty(r)||fetch("jobs/".concat(r),{method:"GET"}).then(function(e){return e.json()}).then(function(e){n.setState({cacheData:Object(l.a)({},o,Object(i.a)({},r,e))})}).catch(function(e){return null})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.companiesKeys.forEach(function(t,n){e.getJobsDataByCompany(n)})}},{key:"render",value:function(){var e=this.state,t=e.companies,n=e.activeCompanyId,a=e.cacheData,o=e.companiesKeys;return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement("h2",null,"Companies"),c.a.createElement(w,{companies:t,activeCompanyId:n,handleClick:this.handleClick})),c.a.createElement("div",null,null===n?c.a.createElement(O,null):c.a.createElement(k,{data:a[o[n]]})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,1,2]]]);
//# sourceMappingURL=main.7851661e.chunk.js.map