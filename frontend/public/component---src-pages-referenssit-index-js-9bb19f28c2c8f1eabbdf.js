"use strict";(self.webpackChunkskyfall_frontend=self.webpackChunkskyfall_frontend||[]).push([[588],{6798:function(e,t,n){var a=n(7294),r=n(2745);t.Z=function(e){var t=e.background,n=e.title,c=e.content,l=e.link,s=e.landing,o=e.color,i=void 0===o?"white":o;return a.createElement("section",{className:s?"hero hero--landing mt-0 mb-5":"hero mt-0 mb-5",style:{backgroundImage:"url("+t+")"}},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12 d-flex flex-column justify-content-center align-items-center"},a.createElement("h1",{className:"hero--title hero--title--"+i},n),c&&a.createElement("div",{className:"hero--content hero--content--"+i,dangerouslySetInnerHTML:{__html:c}}),l&&a.createElement(r.Z,{textcontent:l.textcontent,href:l.href})))))}},8290:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),r=n(5444),c=n(7680),l=n(6798),s=n(2778),o=function(e){var t=e.reference;return a.createElement(r.Link,{to:"/referenssit/"+t.slug},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-head"},a.createElement(s.G,{image:t.image.localFile.childImageSharp.gatsbyImageData,alt:"cover image"}),a.createElement("h3",{id:"title",className:"card-body"},t.title))))},i=function(e){var t=e.references;return a.createElement("div",{className:"row d-flex justify-content-center"},t.map((function(e){return a.createElement("div",{key:"reference__right__"+e.node.slug,className:"col-6 col-sm-6 col-md-4"},a.createElement(o,{reference:e.node}))})))},m="1549536521",d=function(){var e=(0,r.useStaticQuery)(m);return a.createElement(c.Z,{seo:e.strapiReferencepage.Seo},a.createElement(l.Z,{background:e.strapiReferencepage.Hero.background,title:e.strapiReferencepage.Hero.title,color:"black"}),a.createElement("section",{className:"references my-5"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row d-flex justify-content-center"},a.createElement("div",{className:"col-12"},a.createElement("h2",{className:"my-5"},e.strapiReferencepage.title),a.createElement(i,{references:e.allStrapiReference.edges}))))))}}}]);
//# sourceMappingURL=component---src-pages-referenssit-index-js-9bb19f28c2c8f1eabbdf.js.map