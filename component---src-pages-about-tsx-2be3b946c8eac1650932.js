(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});a(55);var o=a(0),r=a(306),n=a.n(r),i=a(288),l=a.n(i),u=a(293),d=a(307),c=a(282),s=function(e){return o.createElement(l.a,Object.assign({},e,{maxWidth:767}))},f=function(e){return o.createElement(l.a,Object.assign({},e,{minWidth:768}))},h=function(e){var t=e.data;return o.createElement(n.a,{style:{padding:50,flexGrow:1}},o.createElement("h1",{style:{marginBottom:30,marginTop:0,marginLeft:30,marginRight:30,textAlign:"center"}},"I'm Daniel Berghäll"),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.site.siteMetadata.about}}))},m=function(){return o.createElement(u.a,{onClickHandler:function(){return window.history.back()}})};t.default=function(e){var t=e.data;return o.createElement(o.Fragment,null,o.createElement(f,null,o.createElement("div",{style:{backgroundColor:c.a.aboutPage.layout.backgroundColor,minHeight:"100vh"}},o.createElement("div",{style:{maxWidth:c.a.aboutPage.layout.cardMaxWidth,margin:"0 auto",paddingTop:40,paddingLeft:20,paddingRight:20,paddingBottom:40}},o.createElement(m,null),o.createElement(h,{data:t}),o.createElement(d.a,{networks:t.site.siteMetadata.networks})))),o.createElement(s,null,o.createElement(m,null),o.createElement(h,{data:t})))};var p="3954548464"},282:function(e,t,a){"use strict";t.a={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:"#059ce2",borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{backgroundImage:"linear-gradient(20deg, #176786, #2E819D)"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:70,height:70},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:"#176786",backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}}},286:function(e,t,a){"use strict";var o=a(2);t.__esModule=!0,t.default=void 0;var r=o(a(300)),n=function(e){return(0,r.default)("displayName",e)};t.default=n},287:function(e,t,a){"use strict";var o=a(2);t.__esModule=!0,t.default=void 0;var r=o(a(301)),n=function(e,t){return t+"("+(0,r.default)(e)+")"};t.default=n},293:function(e,t,a){"use strict";var o=a(0),r=a(294),n=a.n(r),i=a(296),l=a.n(i),u=a(282);t.a=function(e){var t=e.onClickHandler;return o.createElement(n.a,{style:{position:"absolute",marginTop:20,marginLeft:20,zIndex:50,color:u.a.fabButton.color||"#059ce2",backgroundColor:u.a.fabButton.backgroundColor||"white"},"aria-label":"Back",onClick:t},o.createElement(l.a,null))}},294:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=o(a(295))},295:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a(11)),n=o(a(14)),i=o(a(6)),l=o(a(0)),u=(o(a(1)),o(a(281))),d=(a(18),o(a(128))),c=o(a(289)),s=a(284),f=function(e){return{root:(0,i.default)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}};function h(e){var t,a=e.children,o=e.classes,d=e.className,f=e.color,h=e.disabled,m=e.disableFocusRipple,p=e.focusVisibleClassName,g=e.size,b=e.variant,v=(0,n.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return l.default.createElement(c.default,(0,i.default)({className:(0,u.default)(o.root,(t={},(0,r.default)(t,o.extended,"extended"===b),(0,r.default)(t,o.primary,"primary"===f),(0,r.default)(t,o.secondary,"secondary"===f),(0,r.default)(t,o["size".concat((0,s.capitalize)(g))],"large"!==g),(0,r.default)(t,o.disabled,h),(0,r.default)(t,o.colorInherit,"inherit"===f),t),d),disabled:h,focusRipple:!m,focusVisibleClassName:(0,u.default)(o.focusVisible,p)},v),l.default.createElement("span",{className:o.label},a))}t.styles=f,h.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",type:"button",variant:"round"};var m=(0,d.default)(f,{name:"MuiFab"})(h);t.default=m},296:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(0)),n=(0,o(a(297)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBack");t.default=n},297:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(0)),n=o(a(298)),i=o(a(304));var l=function(e,t){var a=function(t){return r.default.createElement(i.default,t,e)};return a.displayName="".concat(t,"Icon"),(a=(0,n.default)(a)).muiName="SvgIcon",a};t.default=l},298:function(e,t,a){"use strict";var o=a(2);t.__esModule=!0,t.default=void 0;var r=o(a(299)),n=o(a(302)),i=(o(a(286)),o(a(287)),function(e){return(0,r.default)(function(e,t){return!(0,n.default)(e,t)})(e)});t.default=i},299:function(e,t,a){"use strict";var o=a(2);t.__esModule=!0,t.default=void 0;var r=o(a(9)),n=a(0),i=(o(a(286)),o(a(287)),function(e){return function(t){var a=(0,n.createFactory)(t);return function(t){function o(){return t.apply(this,arguments)||this}(0,r.default)(o,t);var n=o.prototype;return n.shouldComponentUpdate=function(t){return e(this.props,t)},n.render=function(){return a(this.props)},o}(n.Component)}});t.default=i},300:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e,t){return function(a){return a[e]=t,a}};t.default=o},301:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0};t.default=o},302:function(e,t,a){"use strict";var o=a(2);t.__esModule=!0,t.default=void 0;var r=o(a(303)).default;t.default=r},303:function(e,t,a){"use strict";var o=Object.prototype.hasOwnProperty;function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var i=0;i<a.length;i++)if(!o.call(t,a[i])||!r(e[a[i]],t[a[i]]))return!1;return!0}},304:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=o(a(305))},305:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a(6)),n=o(a(11)),i=o(a(14)),l=o(a(0)),u=(o(a(1)),o(a(281))),d=(a(18),o(a(128))),c=a(284),s=function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:24,transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:35}}};function f(e){var t,a=e.children,o=e.classes,d=e.className,s=e.color,f=e.component,h=e.fontSize,m=e.nativeColor,p=e.titleAccess,g=e.viewBox,b=(0,i.default)(e,["children","classes","className","color","component","fontSize","nativeColor","titleAccess","viewBox"]);return l.default.createElement(f,(0,r.default)({className:(0,u.default)(o.root,(t={},(0,n.default)(t,o["color".concat((0,c.capitalize)(s))],"inherit"!==s),(0,n.default)(t,o["fontSize".concat((0,c.capitalize)(h))],"default"!==h),t),d),focusable:"false",viewBox:g,color:m,"aria-hidden":p?"false":"true",role:p?"img":"presentation"},b),a,p?l.default.createElement("title",null,p):null)}t.styles=s,f.defaultProps={color:"inherit",component:"svg",fontSize:"default",viewBox:"0 0 24 24"},f.muiName="SvgIcon";var h=(0,d.default)(s,{name:"MuiSvgIcon"})(f);t.default=h},307:function(e,t,a){"use strict";var o=a(0),r=a(310),n=a(282);t.a=function(e){var t=e.networks;return o.createElement("ul",{style:{textAlign:"center",listStyleType:"none",margin:"40px 0 35px 0"}},t.map(function(e){return o.createElement("li",{key:e,style:{display:"inline-block",verticalAlign:"top",paddingRight:5,paddingLeft:5}},o.createElement(r.SocialIcon,{style:{width:n.a.networkButton.width,height:n.a.networkButton.height},fgColor:n.a.networkButton.color,bgColor:n.a.networkButton.backgroundColor,target:"_blank",url:e}))}))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-2be3b946c8eac1650932.js.map