(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});a(53);var n=a(0),o=a(197),r=a(279),i=a(205),l=a.n(i),d=a(208),c=a(195),u=a(201),s=function(e){return n.createElement(l.a,Object.assign({},e,{maxWidth:767}))},h=function(e){return n.createElement(l.a,Object.assign({},e,{minWidth:768}))},m=function(e){e.data;return n.createElement(r.a,{style:{padding:50,flexGrow:1}},n.createElement("h1",{style:{marginTop:0,marginLeft:30,marginRight:30,textAlign:"center"}},"404 Not Found"))},b=function(){return n.createElement(d.a,{onClickHandler:function(){return Object(o.c)("/")}})};t.default=function(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(u.a,{pageName:"404 Not Found"}),n.createElement(h,null,n.createElement("div",{style:{backgroundColor:c.a.aboutPage.layout.backgroundColor,minHeight:"100vh"}},n.createElement("div",{style:{maxWidth:c.a.aboutPage.layout.cardMaxWidth,margin:"0 auto",paddingTop:40,paddingLeft:20,paddingRight:20,paddingBottom:40}},n.createElement(b,null),n.createElement(m,{data:t})))),n.createElement(s,null,n.createElement(b,null),n.createElement(m,{data:t})))};var g="2884435280"},195:function(e,t,a){"use strict";var n={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:"#f7931e",borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{background:"linear-gradient(20deg, #f7931e, #ed1e79)"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:256,height:256},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:"#f7931e",backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}};t.a=n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(51),d=a.n(l);a.d(t,"a",function(){return d.a}),a.d(t,"d",function(){return l.withPrefix}),a.d(t,"c",function(){return l.navigate});a(198);var c=o.a.createContext({}),u=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},198:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},199:function(e,t,a){"use strict";a.r(t);a(53);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(83),d=a(5),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},201:function(e,t,a){"use strict";var n=a(202),o=a(0),r=a(210),i=a.n(r),l=a(197),d=function(e){var t=e.pageName,a=e.data;return o.createElement(i.a,null,o.createElement("html",{lang:"en"}),o.createElement("title",null,t+" |  "+a.site.siteMetadata.title),o.createElement("meta",{name:"description",content:a.site.siteMetadata.about}))};t.a=function(e,t){var a=e.pageName;return o.createElement(l.b,{query:"1550855807",render:function(e){return o.createElement(d,{data:e,pageName:a})},data:n})}},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Berghäll Portfolio",about:"\n      I'm a passionate web developer from Finland who likes to tinker with new web technologies as well as IoT devices.\n      I specialize in things like WordPress, React and Vue.\n    "}}}}},203:function(e,t,a){"use strict";a.r(t);var n=a(204);a.d(t,"default",function(){return n.a})},206:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(207)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBack");t.default=r},207:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef(function(t,a){return r.default.createElement(i.default,(0,o.default)({},t,{ref:a}),e)}));0;return a.muiName=i.default.muiName,a};var o=n(a(1)),r=n(a(0)),i=n(a(203))},208:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=a(1),d=a.n(l),c=(a(4),a(52)),u=a(196),s=a(277),h=a(200),m=o.a.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,l=e.color,u=void 0===l?"default":l,m=e.component,b=void 0===m?"button":m,g=e.disabled,f=void 0!==g&&g,p=e.disableFocusRipple,v=void 0!==p&&p,w=e.focusVisibleClassName,y=e.size,k=void 0===y?"large":y,C=e.variant,E=void 0===C?"round":C,x=i()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.a.createElement(s.a,d()({className:Object(c.a)(n.root,r,"round"!==E&&n.extended,"primary"===u&&n.primary,"secondary"===u&&n.secondary,"large"!==k&&n["size".concat(Object(h.a)(k))],f&&n.disabled,"inherit"===u&&n.colorInherit),component:b,disabled:f,focusRipple:!v,focusVisibleClassName:Object(c.a)(n.focusVisible,w),ref:t},x),o.a.createElement("span",{className:n.label},a))}),b=Object(u.a)(function(e){return{root:d()({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}},{name:"MuiFab"})(m),g=a(206),f=a.n(g),p=a(195);t.a=function(e){var t=e.onClickHandler;return n.createElement(b,{style:{position:"absolute",marginTop:20,marginLeft:20,zIndex:50,color:p.a.fabButton.color||"#059ce2",backgroundColor:p.a.fabButton.backgroundColor||"white"},"aria-label":"Back",onClick:t},n.createElement(f.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-3477fc6234d5d0ac8dd2.js.map