(this.webpackJsonpreport_v2=this.webpackJsonpreport_v2||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){},188:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);for(var a=n(0),c=n.n(a),l=n(24),r=n.n(l),i=(n(183),n(31)),s=n(278),o=(n(140),n(59)),d=n(155),u=n(90),j=n(282),h=n(75),p=n(91),b=n(281),O=n(275),f=n(276),x=n(120),m=n(285),y=n(51),g=n(34),v=n(283),w=n(284),k=n(277),C=n(279),S=n(128),B=n(286),P=n(287),A=n(288),D=n(30),I=n.n(D),T=["AR","BG","CK","TR","MX","RO","PT","ID","GN"],N=[{title:"Date",dataIndex:"date",defaultSortOrder:"descend",sorter:function(e,t){return e.date-t.date},width:80},{title:"Total",dataIndex:"total",ellipsis:!0,align:"right",width:40},{title:"Valid",dataIndex:"valid",ellipsis:!0,align:"right",width:40},{title:"Valid%",dataIndex:"validP",ellipsis:!0,className:"color_1",align:"right",width:55},{title:"Unproc",dataIndex:"unproc",ellipsis:!0,align:"right",width:60},{title:"App hour",dataIndex:"appHour",ellipsis:!0,align:"right",width:70},{title:"Unproc%",dataIndex:"unprocP",ellipsis:!0,className:"color_1",align:"right",width:70},{title:"Proc.",dataIndex:"proc",ellipsis:!0,className:"color_2",align:"right",width:45},{title:"Drt. app.",dataIndex:"drtApp",ellipsis:!0,className:"color_2",align:"right",width:70},{title:"Cln App",dataIndex:"clnApp",ellipsis:!0,className:"color_3",align:"right",width:60},{title:"Work App.%",dataIndex:"workApp",ellipsis:!0,className:"color_1",align:"right",width:90},{title:"Plan Avg. check",dataIndex:"planAvgCheck",ellipsis:!0,className:"text_bold",align:"right",width:115},{title:"Ups",dataIndex:"ups",ellipsis:!0,className:"color_1",align:"right",width:40},{title:"Ups%",dataIndex:"upsP",ellipsis:!0,align:"right",width:50},{title:"Cross",dataIndex:"cross",ellipsis:!0,align:"right",width:50},{title:"Cross%",dataIndex:"crossP",ellipsis:!0,align:"right",width:60},{title:"Rej.",dataIndex:"rej",ellipsis:!0,className:"color_4",align:"right",width:38},{title:"Rej%",dataIndex:"rejP",ellipsis:!0,className:"color_4",align:"right",width:45},{title:"Decl",dataIndex:"decl",ellipsis:!0,className:"color_5",align:"right",width:40},{title:"Decl%",dataIndex:"declP",ellipsis:!0,className:"color_5",align:"right",width:55},{title:"Decl_dbl",dataIndex:"declDbl",ellipsis:!0,align:"right",width:70},{title:"Decl_dbl%",dataIndex:"declDblP",ellipsis:!0,align:"right",width:80},{title:"Num of connected",dataIndex:"numOfConnected",ellipsis:!0,align:"right",width:130},{title:"Connected",dataIndex:"connected",ellipsis:!0,align:"right",width:85}],R=[],G=0;G<9;G++)R.push({key:G,date:T[G],total:1e3,valid:600,validP:"50%",unproc:100,appHour:2,unprocP:"10%",proc:76,drtApp:"23%",clnApp:"34%",workApp:"16%",planAvgCheck:"2323,45",ups:4,upsP:"23%",cross:65,crossP:"33%",rej:22,rejP:"85%",decl:56,declP:"12%",declDbl:322,declDblP:"34%",numOfConnected:344,connected:"23%",children:[{key:G,date:I()([2021,6,23]).format("DD.MM.YYYY"),total:600,valid:200,validP:"30%",unproc:63,appHour:1,unprocP:"10%",proc:46,drtApp:"23%",clnApp:"34%",workApp:"16%",planAvgCheck:"2323,45",ups:4,upsP:"23%",cross:65,crossP:"33%",rej:22,rejP:"85%",decl:56,declP:"12%",declDbl:322,declDblP:"34%",numOfConnected:344,connected:"23%"},{key:G,date:I()([2021,6,21]).format("DD.MM.YYYY"),total:400,valid:400,validP:"20%",unproc:46,appHour:1,unprocP:"10%",proc:30,drtApp:"23%",clnApp:"34%",workApp:"16%",planAvgCheck:"2323,45",ups:4,upsP:"23%",cross:65,crossP:"33%",rej:22,rejP:"85%",decl:56,declP:"12%",declDbl:322,declDblP:"34%",numOfConnected:344,connected:"23%"}]});var L,W=["BG 10Bar Watch","BG CBDol","BG Bracelet Starry Sky","BG Combidress","RO Starryy Sky Watch","RO XTactical Watch","BG 10Bard Watch","BG CBDolf","BG Braceletr Starry Sky","BG Combidressg","RO Starry Sky Watch","RO XTacticall Watch","BG 10Barv Watch","BG CBDol4","BG Bracelett Starry Sky","BG Combidresse","RO Starryd Sky Watch","RO XTacticaly Watch","BG 10Bars Watch","BG CBDol7","BG Braceleto Starry Sky","BG Combidressa","RO Starryd Sky Watch","RO XTacticalz Watch","BG 10Bar5 Watch","BG CBDolh","BG Braceletdf Starry Sky","BG Combidresss","RO Starrya Sky Watch","RO XTacticalx Watch","BG 10Barz Watch","BG CBDolk","BG Braceletf Starry Sky","BG Combidressm","RO Starryl Sky Watch","RO XTacticalp Watch"],_=n(280),F=(n(184),n(7)),E=_.a.RangePicker,z="DD.MM.YYYY",M=function(e){var t=e.setPeriod,n=e.setGroup,a=e.setType,c=e.period,l=e.group,r=e.type;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{children:"Period:"}),Object(F.jsxs)("div",{className:"wrapper-period-select",children:[Object(F.jsx)(g.a,{onClick:function(){return t("today")},type:"today"===c?"primary":"default",children:"Today"}),Object(F.jsx)(g.a,{onClick:function(){return t("week")},type:"week"===c?"primary":"default",children:"Last Week"}),Object(F.jsx)(g.a,{onClick:function(){return t("month")},type:"month"===c?"primary":"default",children:"Last Month"})]}),Object(F.jsx)("div",{children:"Group: "}),Object(F.jsxs)("div",{className:"wrapper-period-select",children:[Object(F.jsx)(g.a,{onClick:function(){return n("day")},type:"day"===l?"primary":"default",children:"Day"}),Object(F.jsx)(g.a,{onClick:function(){return n("weeks")},type:"weeks"===l?"primary":"default",children:"Week's"}),Object(F.jsx)(g.a,{onClick:function(){return n("months")},type:"months"===l?"primary":"default",children:"Month's"}),Object(F.jsx)(g.a,{onClick:function(){return n("total")},type:"total"===l?"primary":"default",children:"Total"})]}),Object(F.jsx)("div",{children:"Type: "}),Object(F.jsxs)("div",{className:"wrapper-period-select",children:[Object(F.jsx)(g.a,{onClick:function(){return a("approved")},type:"approved"===r?"primary":"default",children:"Approved"}),Object(F.jsx)(g.a,{onClick:function(){return a("leads")},type:"leads"===r?"primary":"default",children:"Leads"}),Object(F.jsx)(g.a,{onClick:function(){return a("sendToCS")},type:"sendToCS"===r?"primary":"default",children:"Send to CS"})]})]})};!function(e){e.Today="today",e.Week="week",e.month="month"}(L||(L={}));var V=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(L.Week),r=Object(i.a)(l,2),s=r[0],o=r[1],d=Object(a.useState)("weeks"),u=Object(i.a)(d,2),j=u[0],h=u[1],p=Object(a.useState)("total"),b=Object(i.a)(p,2),O=b[0],f=b[1],x=Object(a.useState)([I()(new Date,z),I()(new Date,z)]),m=Object(i.a)(x,2),y=m[0],g=m[1],v=Object(a.useRef)(),w=function(e){var t=new Date;"today"===e&&g([I()(t,z),I()(t,z)]),"week"===e&&g([I()(t.getDate()-7,z),I()(t,z)]),"month"===e&&g([I()(new Date(t.getFullYear(),t.getMonth(),1),z),I()(new Date,z)]),o(e)},k=function(e){};return Object(a.useEffect)((function(){return document.addEventListener("click",k,!0),function(){document.removeEventListener("click",k,!0)}}),[]),Object(F.jsx)(E,{value:y,format:z,renderExtraFooter:function(){return Object(F.jsx)(M,{setPeriod:w,setGroup:h,setType:f,period:s,group:j,type:O})},onChange:function(e,t){o(""),h("")},open:n,onOpenChange:function(e){c(e)},ref:v})},Y=(n(188),u.a.Option),H=j.a.Title,X=[{name:"date",label:"Date",show:!0,component:function(){return Object(F.jsx)(V,{})}},{name:"geo",label:"Geo",show:!0,component:function(e){return Object(F.jsx)(J,Object(o.a)({},e))}},{name:"offer",label:"Offer",show:!0,component:function(){return Object(F.jsx)(q,{})}},{name:"productSubType",label:"Product sub type",show:!0,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"N/A",children:[Object(F.jsx)(Y,{value:"jack",children:"N/A"}),Object(F.jsx)(Y,{value:"jack",children:"Physics"}),Object(F.jsx)(Y,{value:"lucy",children:"Internal"})]})}},{name:"currencyType",label:"Currency type",show:!0,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"Local Currency",allowClear:!0,children:[Object(F.jsx)(Y,{value:"jack",children:"Local Currency"}),Object(F.jsx)(Y,{value:"lucy",children:"Euro"})]})}},{name:"leadType",label:"Lead type",show:!1,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"ALL",allowClear:!0,children:[Object(F.jsx)(Y,{value:"jack",children:"ALL"}),Object(F.jsx)(Y,{value:"lucy",children:"Common"})]})}},{name:"office",label:"Office",show:!1,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"N/A",allowClear:!0,children:[Object(F.jsx)(Y,{value:"jack",children:"Bogota"}),Object(F.jsx)(Y,{value:"lucy",children:"Moscow"})]})}},{name:"officeType",label:"Office type",show:!1,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"By Lead",allowClear:!0,children:[Object(F.jsx)(Y,{value:"jack",children:"By Lead"}),Object(F.jsx)(Y,{value:"lucy",children:"By Operator"})]})}},{name:"webmaster",label:"Webmaster",show:!1,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"All",children:[Object(F.jsx)(Y,{value:"jack",children:"Buyer"}),Object(F.jsx)(Y,{value:"jack",children:"External"}),Object(F.jsx)(Y,{value:"jack",children:"All"})]})}},{name:"TimeZone",label:"Time zone",show:!1,component:function(){return Object(F.jsxs)(u.a,{defaultValue:"Moscow time",allowClear:!0,children:[Object(F.jsx)(Y,{value:"jack",children:"Moscow time"}),Object(F.jsx)(Y,{value:"lucy",children:"Geo time"})]})}}],K=function(e){var t=e.filterFields,n=e.toggleFields;return Object(F.jsx)(h.a,{children:t.map((function(e,t){return Object(F.jsx)(h.a.Item,{children:Object(F.jsx)(p.a,{onChange:function(e){return n(e.target.checked,t)},checked:e.show,children:e.label})})}))})},U=function(e){var t=e.onLoad,n=e.setFilters,c=b.a.useForm(),l=Object(i.a)(c,1)[0],r=Object(a.useState)({}),s=Object(i.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(X),j=Object(i.a)(u,2),h=j[0],p=j[1],v=function(e,t){p(h.map((function(n,a){return a===t&&(n.show=e),n})))};return Object(F.jsxs)(b.a,{form:l,name:"advanced_search",className:"ant-advanced-search-form",onFinish:function(){t(!0),setTimeout((function(){n(o),t(!1)}),1e3)},layout:"vertical",children:[Object(F.jsxs)(O.a,{className:"header-filter",children:[Object(F.jsx)(f.a,{span:6,xs:9,sm:6,children:Object(F.jsx)(H,{level:4,children:"Geo Statistics"})}),Object(F.jsxs)(f.a,{span:18,xs:15,sm:18,style:{textAlign:"right"},children:[Object(F.jsx)(x.a,{overlay:function(){return Object(F.jsx)(K,{toggleFields:v,filterFields:h})},arrow:!0,children:Object(F.jsx)(m.a,{count:h.filter((function(e){return!e.show})).length,children:Object(F.jsx)(y.a,{title:"Select filters",children:Object(F.jsx)(g.a,{children:Object(F.jsx)(S.a,{})})})})}),Object(F.jsx)(y.a,{title:"Save settings",children:Object(F.jsx)(g.a,{style:{margin:"0 8px 0 10px"},children:Object(F.jsx)(B.a,{})})}),Object(F.jsx)(y.a,{title:"Reset view settings",children:Object(F.jsx)(g.a,{style:{margin:"0 8px 0 0"},onClick:function(){l.resetFields()},children:Object(F.jsx)(P.a,{})})}),Object(F.jsx)(y.a,{title:"Execute  query",children:Object(F.jsx)(g.a,{htmlType:"submit",children:Object(F.jsx)(A.a,{})})})]})]}),Object(F.jsx)(O.a,{gutter:16,children:h.map((function(e){return e.show&&Object(F.jsx)(f.a,{xs:12,sm:5,children:Object(F.jsx)(b.a.Item,{name:e.name,label:e.label,children:e.component({setFilterState:d})})})}))})]})},J=function(e){var t=e.setFilterState,n=Object(a.useState)([]),c=Object(i.a)(n,2),l=c[0],r=c[1];return Object(F.jsxs)(u.a,{mode:"multiple",allowClear:!0,placeholder:"Please select",maxTagCount:"responsive",onChange:function(e){var n=e.includes("all")?T:e;r(n),t({geo:n})},listHeight:500,defaultActiveFirstOption:!1,value:l,children:[Object(F.jsx)(Y,{value:"all",label:"All",className:"select_all",children:"All"}),T.map((function(e){return Object(F.jsx)(Y,{children:e},e)}))]})},q=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),r=Object(i.a)(l,2),s=r[0],o=r[1],d=function(e){o(e)};return Object(F.jsx)(u.a,{mode:"multiple",allowClear:!0,placeholder:"Please select",maxTagCount:"responsive",listHeight:0,onDropdownVisibleChange:function(){c(!0)},value:s.map((function(e){return e.name})),onClear:function(){o([])},dropdownStyle:{display:"none"},dropdownRender:function(e){return Object(F.jsx)(ee,{visible:n,setVisible:c,onSelect:d,values:s})},children:W.map((function(e){return Object(F.jsx)(Y,{children:e},e)}))})},Z=v.a.Search,Q=[{title:"Name",dataIndex:"name"}],$=W.map((function(e,t){return{key:t,name:e}})),ee=function(e){var t=e.visible,n=e.setVisible,c=e.onSelect,l=e.values,r=Object(a.useState)($),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(l.map((function(e){return e.key}))),h=Object(i.a)(j,2),p=h[0],b=h[1];Object(a.useEffect)((function(){b(l.map((function(e){return e.key})))}),[l]);var O=Object(a.useState)(!1),f=Object(i.a)(O,2),x=f[0],m=f[1],y={selectedRowKeys:p,onSelectAll:function(e,t){b(e?x?t.map((function(e){return e.key})):$.map((function(e){return e.key})):[])},onSelect:function(e,t,n){b(n.map((function(e){return e.key})))}},g=d.debounce((function(e){v(e.target.value)}),500),v=function(e){var t=[];e?(m(!0),t=$.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e)}))):(m(!1),t=$),u(t)};return Object(F.jsxs)(w.a,{title:"Offer",visible:t,onOk:function(){return c(p.map((function(e){return $.find((function(t){return t.key===e}))}))),void n(!1)},onCancel:function(){return n(!1)},children:[Object(F.jsx)(Z,{placeholder:"Text to search",onChange:g}),Object(F.jsx)(k.a,{}),Object(F.jsx)(C.a,{rowSelection:y,columns:Q,dataSource:o,bordered:!0,size:"small",tableLayout:"auto"})]})},te=n(161),ne=n(170),ae=n(163),ce=n(164),le=n(175),re=n(169),ie=n(176),se=n(165),oe=["onResize","width"],de=function(e){var t=e.onResize,n=e.width,a=Object(ie.a)(e,oe);return n?Object(F.jsx)(se.Resizable,{width:n,height:0,handle:Object(F.jsx)("span",{className:"react-resizable-handle",onClick:function(e){e.stopPropagation()}}),onResize:t,draggableOpts:{enableUserSelectHack:!1},children:Object(F.jsx)("th",Object(o.a)({},a))}):Object(F.jsx)("th",Object(o.a)({},a))},ue=function(e){Object(le.a)(n,e);var t=Object(re.a)(n);function n(){var e;Object(ae.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedRowKeys:[],columns:N,width:1600},e.components={header:{cell:de}},e.onSelectChange=function(t){e.setState({selectedRowKeys:t})},e.handleResize=function(t){return function(n,a){var c=a.size;e.setState((function(e){var n=e.columns,a=Object(ne.a)(n);return a[t]=Object(o.a)(Object(o.a)({},a[t]),{},{width:c.width}),{columns:a}}))}},e}return Object(ce.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data,n=70,a=this.state.columns.map((function(t,a){return n+=t.width,Object(o.a)(Object(o.a)({},t),{},{onHeaderCell:function(t){return{width:t.width,onResize:e.handleResize(a)}}})})),c={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange,selections:[C.a.SELECTION_ALL,C.a.SELECTION_INVERT,C.a.SELECTION_NONE]};return Object(F.jsx)(C.a,{components:this.components,rowSelection:c,columns:a,dataSource:t,scroll:{y:800,x:n},pagination:!1,bordered:!0,size:"small",tableLayout:"auto"})}}]),n}(c.a.Component),je=(n(270),function(e){var t=e.loadStatus,n=e.filters,a=R.filter((function(e){var t;return!(null===n||void 0===n||null===(t=n.geo)||void 0===t?void 0:t.length)||(null===n||void 0===n?void 0:n.geo.includes(e.date))}));return Object(F.jsx)(te.a,{size:"large",spinning:t,children:Object(F.jsx)(ue,{data:a})})}),he=(n(271),s.a.Header),pe=s.a.Content,be=s.a.Footer,Oe=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({}),r=Object(i.a)(l,2),o=r[0],d=r[1];return Object(F.jsxs)(s.a,{children:[Object(F.jsx)(he,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(F.jsx)("div",{className:"logo"})}),Object(F.jsx)(pe,{className:"site-layout",children:Object(F.jsxs)("div",{className:"site-layout-background",children:[Object(F.jsx)(U,{onLoad:c,setFilters:d}),Object(F.jsx)("br",{}),Object(F.jsx)(je,{loadStatus:n,filters:o})]})}),Object(F.jsx)(be,{style:{textAlign:"center"},children:"Absolut"})]})},fe=function(){return Object(F.jsx)(Oe,{})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};r.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[272,1,2]]]);
//# sourceMappingURL=main.64868c3b.chunk.js.map