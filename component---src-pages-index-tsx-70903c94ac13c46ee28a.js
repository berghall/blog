(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,n){"use strict";n.r(e);var a,o,r,i,l=n(11),c=n.n(l),d=n(0),u=(n(53),n(254)),s=n(197),m=n(205),h=n.n(m),g=n(81),p=(n(255),n(256)),f=n(271),b=n(195),E=function(t){var e=t.author;return d.createElement(f.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},d.createElement(s.a,{to:"/"},d.createElement(p.a,{style:{alignItems:"baseline",width:b.a.author.avatar.width,height:b.a.author.avatar.height},src:Object(s.d)(e.image),alt:e.name})),d.createElement("h1",{style:{color:b.a.author.title.color,fontSize:b.a.author.title.fontSize,marginTop:20,marginBottom:20}},e.name),d.createElement("p",{style:{color:b.a.author.desc.color,fontSize:b.a.author.desc.fontSize,maxWidth:b.a.author.desc.maxWidth,margin:"auto",marginBottom:20,textAlign:"center"}},e.biography))},w=n(272),y=function(){return d.createElement("div",{style:{textAlign:"right"}},d.createElement(s.a,{to:"/about/",style:{textDecoration:"none"}},d.createElement(w.a,{variant:"outlined",style:{marginRight:30,marginTop:30,color:b.a.index.aboutButton.color,borderColor:b.a.index.aboutButton.borderColor,backgroundColor:b.a.index.aboutButton.backgroundColor,textTransform:"none",width:b.a.index.aboutButton.width}},"About")))},v=n(216),k=function(){return d.createElement("div",{style:{textAlign:"center",marginTop:40}},d.createElement(s.a,{to:"#children"},d.createElement("span",{style:{padding:10}},d.createElement("svg",{width:b.a.callToActionButton.width,height:b.a.callToActionButton.height,viewBox:"0 0 24 24","aria-hidden":"true",fill:"white"},d.createElement("path",{d:"M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"})))))},C=function(t){return d.createElement(h.a,Object.assign({},t,{maxWidth:767}))},x=function(t){return d.createElement(h.a,Object.assign({},t,{minWidth:768}))},S=Object(g.a)(function(){return{hero:{background:b.a.index.header.background,backgroundSize:"150% 150%",animation:"$gradient 10s ease infinite"},"@keyframes gradient":{"0%":{"background-position":"0% 50%"},"50%":{"background-position":"100% 50%"},"100%":{"background-position":"0% 50%"}}}}),B=function(t){var e=t.data,n=t.styles,a=S({});return d.createElement("div",{className:a.hero},d.createElement(y,null),d.createElement("div",{style:{paddingTop:n.paddingTop,paddingBottom:n.paddingBottom}},d.createElement(E,{author:e.site.siteMetadata.author}),d.createElement(v.a,{networks:e.site.siteMetadata.networks}),d.createElement(k,null)))},T=function(t){var e=t.children;return d.createElement("div",{id:"children",style:{flexGrow:1,margin:"0 auto",maxWidth:b.a.index.layout.cardSectionMaxWidth,padding:10,paddingTop:10}},e)},M=function(t){var e=t.data,n=t.styles,a=t.children;return d.createElement("div",{style:{backgroundColor:b.a.index.layout.backgroundColor}},d.createElement(B,{data:e,styles:n}),d.createElement(T,{children:a}))},A=function(t){var e=t.children;return d.createElement(s.b,{query:"1460482536",render:function(t){return d.createElement(d.Fragment,null,d.createElement(x,null,d.createElement(M,{data:t,styles:{paddingTop:75,paddingBottom:75}},e)),d.createElement(C,null,d.createElement(M,{data:t,styles:{paddingTop:50,paddingBottom:50}},e)))},data:u})},O=n(257),P=n(259),W=n.n(P),j=n(260),I=n.n(j),L=(n(261),n(225)),q={countOfInitiallyShownPosts:5,countOfPostsDynamicallyAdded:5,offsetHeightToTriggerLoading:20},R=new(a=function(){function t(){W()(this,"postsToShow",o,this)}return t.prototype.add=function(){this.postsToShow+=q.countOfPostsDynamicallyAdded},t}(),o=I()(a.prototype,"postsToShow",[L.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return q.countOfInitiallyShownPosts}}),I()(a.prototype,"add",[L.d],Object.getOwnPropertyDescriptor(a.prototype,"add"),a.prototype),a),z=function(t){var e=t.onClickHandler;return d.createElement("div",{style:{textAlign:"center"}},d.createElement(w.a,{onClick:e,style:{color:b.a.blogPost.showMoreButton.color,borderColor:b.a.blogPost.showMoreButton.borderColor,borderWidth:1,borderStyle:"solid",backgroundColor:b.a.blogPost.showMoreButton.backgroundColor,textTransform:"none",width:b.a.blogPost.showMoreButton.width}},"Load More"))},H=n(219),D=n.n(H),F=n(279),N=n(273),U=n(276),J=n(275),G=n(274),Q=n(215),V=function(t){var e=t.data;return d.createElement("div",{style:{marginTop:25,marginBottom:25}},d.createElement(F.a,null,d.createElement(N.a,null,d.createElement(s.a,{to:e.slug,style:{textDecoration:"none",color:"inherit"}},d.createElement(G.a,{avatar:d.createElement(p.a,{style:{backgroundColor:b.a.blogListElement.avatar.backgroundColor,color:b.a.blogListElement.avatar.color,textShadow:"none"}},e.title.charAt(0).toUpperCase()),title:e.title,subheader:e.date}),e.coverFluid?d.createElement(D.a,{fluid:e.coverFluid}):null,d.createElement(U.a,null,d.createElement(J.a,{component:"p"},e.description),d.createElement(Q.a,{labels:e.tags}))))))},Y=function(t){return d.createElement(h.a,Object.assign({},t,{maxWidth:767}))},$=function(t){return d.createElement(h.a,Object.assign({},t,{minWidth:768}))},_=Object(O.a)(r=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).ticking=!1,e.handleScroll=function(){e.ticking||(e.ticking=!0,requestAnimationFrame(function(){return e.update()}))},e}c()(e,t);var n=e.prototype;return n.update=function(){document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<q.offsetHeightToTriggerLoading&&R.add(),this.ticking=!1},n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){return d.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,R.postsToShow).map(function(t){return d.createElement("div",{key:t.id},d.createElement(V,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,tags:t.frontmatter.tags,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}))},e}(d.Component))||r,K=Object(O.a)(i=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).handleUpdate=function(){R.add()},e}return c()(e,t),e.prototype.render=function(){return d.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,R.postsToShow).map(function(t){return d.createElement("div",{key:t.id},d.createElement(V,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,tags:t.frontmatter.tags,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}),this.props.totalCount>R.postsToShow&&d.createElement(z,{onClickHandler:this.handleUpdate}))},e}(d.Component))||i,X=function(t){return d.createElement(d.Fragment,null,d.createElement($,null,d.createElement(_,{posts:t.posts,tags:t.tags,totalCount:t.totalCount})),d.createElement(Y,null,d.createElement(K,{posts:t.posts,tags:t.tags,totalCount:t.totalCount})))},Z=n(201);n.d(e,"query",function(){return et});var tt=function(t){function e(){return t.apply(this,arguments)||this}return c()(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges.map(function(t){return t.node}),e=this.props.data.allMarkdownRemark.totalCount,n=this.props.data.allMarkdownRemark.tags;this.props.data;return d.createElement(A,null,d.createElement(Z.a,{pageName:"Home"}),d.createElement(X,{posts:t,tags:n,totalCount:e}))},e}(d.Component),et=(e.default=tt,"2102171956")},195:function(t,e,n){"use strict";var a={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:"#f7931e",borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{background:"linear-gradient(20deg, #f7931e, #ed1e79)"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:200,height:200},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:"#f7931e",backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}};e.a=a},197:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(51),c=n.n(l);n.d(e,"a",function(){return c.a}),n.d(e,"d",function(){return l.withPrefix}),n.d(e,"c",function(){return l.navigate});n(198);var d=o.a.createContext({}),u=function(t){return o.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},198:function(t,e,n){var a;t.exports=(a=n(199))&&a.default||a},199:function(t,e,n){"use strict";n.r(e);n(53);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(83),c=n(5),d=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?o.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=d},201:function(t,e,n){"use strict";var a=n(202),o=n(0),r=n(210),i=n.n(r),l=n(197),c=function(t){var e=t.pageName,n=t.data;return o.createElement(i.a,null,o.createElement("html",{lang:"en"}),o.createElement("title",null,e+" |  "+n.site.siteMetadata.title),o.createElement("meta",{name:"description",content:n.site.siteMetadata.about}))};e.a=function(t,e){var n=t.pageName;return o.createElement(l.b,{query:"1550855807",render:function(t){return o.createElement(c,{data:t,pageName:n})},data:a})}},202:function(t){t.exports={data:{site:{siteMetadata:{title:"Daniel Berghäll Portfolio",about:"\n      I'm a passionate web developer and Linux enthusiast from Finland who likes to tinker with new web technologies as well as IoT devices.\n      I specialize in things like WordPress, React and Vue.\n    "}}}}},215:function(t,e,n){"use strict";var a=n(0),o=n(81),r=n(278),i=n(222),l=n.n(i),c=Object(o.a)(function(){return{root:{display:"flex",justifyContent:"left",flexWrap:"wrap",padding:"2px"}}});e.a=function(t){var e=t.labels,n=c({}),i=e.map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).map(function(t){var e,n=(e=t,Object(o.a)(function(){var t=e.toLowerCase();return{chip:{margin:"2px",background:l()({luminosity:"dark",format:"hex",seed:t}),color:"white",fontWeight:"bold"}}}))({});return a.createElement(r.a,{key:t,label:t,className:n.chip})});return a.createElement("div",{className:n.root},i)}},216:function(t,e,n){"use strict";var a=n(0),o=n(224),r=n(195);e.a=function(t){var e=t.networks;return a.createElement("ul",{style:{textAlign:"center",listStyleType:"none",margin:"40px 0 35px 0"}},e.map(function(t){return a.createElement("li",{key:t,style:{display:"inline-block",verticalAlign:"top",paddingRight:5,paddingLeft:5}},a.createElement(o.SocialIcon,{style:{width:r.a.networkButton.width,height:r.a.networkButton.height},fgColor:r.a.networkButton.color,bgColor:r.a.networkButton.backgroundColor,target:"_blank",url:t}))}))}},254:function(t){t.exports={data:{site:{siteMetadata:{title:"Daniel Berghäll Portfolio",author:{name:"Hello, I'm Daniel",image:"/img/me.png",biography:"Presenting an independent portfolio"},networks:["https://github.com/berghall","mailto:daniel.berghall@gmail.com","https://linkedin.com/in/daniel-berghäll-693169105"]}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-70903c94ac13c46ee28a.js.map