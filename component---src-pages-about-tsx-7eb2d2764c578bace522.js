(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});a(53);var n=a(0),r=a(279),o=a(205),i=a.n(o),l=a(208),d=a(216),c=a(253),u=a.n(c),s=a(195),m=a(201),h=function(e){return n.createElement(i.a,Object.assign({},e,{maxWidth:767}))},g=function(e){return n.createElement(i.a,Object.assign({},e,{minWidth:768}))},b=function(e){var t=e.data;return n.createElement(r.a,{style:{padding:50,flexGrow:1}},n.createElement("h1",{style:{marginBottom:30,marginTop:0,marginLeft:30,marginRight:30,textAlign:"center"}},"I'm Daniel Berghäll"),n.createElement("img",{src:u.a,alt:"Daniel Berghäll"}),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.site.siteMetadata.about}}))},f=function(){return n.createElement(l.a,{onClickHandler:function(){return window.history.back()}})};t.default=function(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(m.a,{pageName:"About"}),n.createElement(g,null,n.createElement("div",{style:{backgroundColor:s.a.aboutPage.layout.backgroundColor,minHeight:"100vh"}},n.createElement("div",{style:{maxWidth:s.a.aboutPage.layout.cardMaxWidth,margin:"0 auto",paddingTop:40,paddingLeft:20,paddingRight:20,paddingBottom:40}},n.createElement(f,null),n.createElement(b,{data:t}),n.createElement(d.a,{networks:t.site.siteMetadata.networks})))),n.createElement(h,null,n.createElement(f,null),n.createElement(b,{data:t})))};var p="3954548464"},195:function(e,t,a){"use strict";var n={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:"#f7931e",borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{background:"linear-gradient(20deg, #f7931e, #ed1e79)"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:200,height:200},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:"#f7931e",backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}};t.a=n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(51),d=a.n(l);a.d(t,"a",function(){return d.a}),a.d(t,"d",function(){return l.withPrefix}),a.d(t,"c",function(){return l.navigate});a(198);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},198:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},199:function(e,t,a){"use strict";a.r(t);a(53);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(83),d=a(5),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},201:function(e,t,a){"use strict";var n=a(202),r=a(0),o=a(210),i=a.n(o),l=a(197),d=function(e){var t=e.pageName,a=e.data;return r.createElement(i.a,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,t+" |  "+a.site.siteMetadata.title),r.createElement("meta",{name:"description",content:a.site.siteMetadata.about}))};t.a=function(e,t){var a=e.pageName;return r.createElement(l.b,{query:"1550855807",render:function(e){return r.createElement(d,{data:e,pageName:a})},data:n})}},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Berghäll Portfolio",about:"\n      I'm a passionate web developer and Linux enthusiast from Finland who likes to tinker with new web technologies as well as IoT devices.\n      I specialize in things like WordPress, React and Vue.\n    "}}}}},203:function(e,t,a){"use strict";a.r(t);var n=a(204);a.d(t,"default",function(){return n.a})},206:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(207)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBack");t.default=o},207:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=o.default.memo(o.default.forwardRef(function(t,a){return o.default.createElement(i.default,(0,r.default)({},t,{ref:a}),e)}));0;return a.muiName=i.default.muiName,a};var r=n(a(1)),o=n(a(0)),i=n(a(203))},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=a(1),d=a.n(l),c=(a(4),a(52)),u=a(196),s=a(277),m=a(200),h=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,l=e.color,u=void 0===l?"default":l,h=e.component,g=void 0===h?"button":h,b=e.disabled,f=void 0!==b&&b,p=e.disableFocusRipple,w=void 0!==p&&p,v=e.focusVisibleClassName,y=e.size,k=void 0===y?"large":y,E=e.variant,C=void 0===E?"round":E,x=i()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return r.a.createElement(s.a,d()({className:Object(c.a)(n.root,o,"round"!==C&&n.extended,"primary"===u&&n.primary,"secondary"===u&&n.secondary,"large"!==k&&n["size".concat(Object(m.a)(k))],f&&n.disabled,"inherit"===u&&n.colorInherit),component:g,disabled:f,focusRipple:!w,focusVisibleClassName:Object(c.a)(n.focusVisible,v),ref:t},x),r.a.createElement("span",{className:n.label},a))}),g=Object(u.a)(function(e){return{root:d()({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}},{name:"MuiFab"})(h),b=a(206),f=a.n(b),p=a(195);t.a=function(e){var t=e.onClickHandler;return n.createElement(g,{style:{position:"absolute",marginTop:20,marginLeft:20,zIndex:50,color:p.a.fabButton.color||"#059ce2",backgroundColor:p.a.fabButton.backgroundColor||"white"},"aria-label":"Back",onClick:t},n.createElement(f.a,null))}},216:function(e,t,a){"use strict";var n=a(0),r=a(224),o=a(195);t.a=function(e){var t=e.networks;return n.createElement("ul",{style:{textAlign:"center",listStyleType:"none",margin:"40px 0 35px 0"}},t.map(function(e){return n.createElement("li",{key:e,style:{display:"inline-block",verticalAlign:"top",paddingRight:5,paddingLeft:5}},n.createElement(r.SocialIcon,{style:{width:o.a.networkButton.width,height:o.a.networkButton.height},fgColor:o.a.networkButton.color,bgColor:o.a.networkButton.backgroundColor,target:"_blank",url:e}))}))}},253:function(e,t,a){e.exports=a.p+"static/profile1-4f0f4a2144c9ec7f7f8b807bdfbe164d.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-tsx-7eb2d2764c578bace522.js.map