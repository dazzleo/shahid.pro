(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{179:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var r=a(0),n=a.n(r),o=(a(196),a(257)),l=a.n(o),i=a(186),d=a(187),s=a(184);var c=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.markdownRemark,e=(this.props.data.site.siteMetadata.title,this.props.data.site.siteMetadata.siteUrl),a=this.props.pageContext,r=a.previous,o=a.next,c=t.fields.readingTime;t.fields.slug,t.frontmatter.title;return n.a.createElement(d.a,null,n.a.createElement(i.h,{title:t.frontmatter.title,description:t.excerpt}),n.a.createElement(s.a,{card:!0},n.a.createElement(s.g,{color:"dark",variant:"h4"},t.frontmatter.title),n.a.createElement(i.d,{post:t,readingTime:c}),n.a.createElement("hr",null),n.a.createElement(s.g,{variant:"raw",html:t.html}),(r||o)&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",null),n.a.createElement(i.f,{previous:r,next:o})),n.a.createElement("hr",null),n.a.createElement(i.j,{url:e+"/"+t.fields.slug,title:t.frontmatter.title}),n.a.createElement("hr",null),n.a.createElement(l.a,{discussionId:t.frontmatter.discussionId})))},r}(n.a.Component);e.default=c;var m="3686214685"},257:function(t,e,a){"use strict";e.__esModule=!0;var r=d(a(234)),n=d(a(235)),o=d(a(247)),l=a(0),i=d(l);function d(t){return t&&t.__esModule?t:{default:t}}var s=!1;var c=function(t){function e(a){return(0,r.default)(this,e),(0,n.default)(this,t.call(this,a))}return(0,o.default)(e,t),e.prototype.componentDidMount=function(){var t=s;!function(){if(!s){var t=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src=window.talkyardScriptUrl||"https://c1.ty-cdn.net/-/talkyard-comments.min.js",window.talkyardServerUrl=window.talkyardServerUrl||"https://comments-demo.talkyard.io",e.appendChild(t),s=!0}}(),t&&window.talkyardReloadCommentsAndEditor&&window.talkyardReloadCommentsAndEditor()},e.prototype.componentWillUnmount=function(){window.talkyardRemoveCommentsAndEditor&&window.talkyardRemoveCommentsAndEditor()},e.prototype.render=function(){return i.default.createElement("div",{className:"talkyard-comments","data-discussion-id":this.props.discussionId||"","data-talkyard-page-id":this.props.talkyardPageId||this.props.edPageId||""},i.default.createElement("noscript",null,"Please enable Javascript to view comments."),i.default.createElement("p",{style:{marginTop:25,opacity:.9,fontSize:"96%"}},"Comments powered by ",i.default.createElement("a",{href:"https://www.talkyard.io"},"Talkyard"),"."))},e}(l.Component);e.default=c}}]);
//# sourceMappingURL=component---src-views-templates-blog-post-js-a18f92764ac5f656f9bb.js.map