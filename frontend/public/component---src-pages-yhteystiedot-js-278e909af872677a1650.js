(self.webpackChunkskyfall_frontend=self.webpackChunkskyfall_frontend||[]).push([[379],{7757:function(e,t,r){e.exports=r(5666)},6798:function(e,t,r){"use strict";var n=r(7294),a=r(2745);t.Z=function(e){var t=e.background,r=e.title,o=e.content,i=e.link,c=e.landing,l=e.color,u=void 0===l?"white":l;return n.createElement("section",{className:c?"hero hero--landing mt-0 mb-5":"hero mt-0 mb-5",style:{backgroundImage:"url("+t+")"}},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 d-flex flex-column justify-content-center align-items-center"},n.createElement("h1",{className:"hero--title hero--title--"+u},r),o&&n.createElement("div",{className:"hero--content hero--content--"+u,dangerouslySetInnerHTML:{__html:o}}),i&&n.createElement(a.Z,{textcontent:i.textcontent,href:i.href})))))}},1427:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(7294),a=r(5444),o=r(7680),i=r(6423);function c(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}var l=r(7757),u=r.n(l),s=function(e){var t=e.type,r=e.label,a=e.required,o=e.disabled,i=e.name,c=e.changeHandler,l=e.value;return n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:i,className:"form-label"},r),n.createElement("input",{id:i,type:t,name:i,className:"input form-control",onInput:function(e){return c(e)},value:l,required:a,disabled:o}))},m=function(e){var t=e.label,r=e.htmlFor,a=e.services,o=e.required,i=void 0===o||o,c=e.handleChange,l=e.service;return n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:r,className:"form-label"},t),n.createElement("select",{id:"subject",required:i,name:"subject",onChange:c,className:"form-select","aria-label":"Default select example"},l&&n.createElement("option",{value:l},l),a.length&&a.map((function(e){return n.createElement("option",{key:e.id,value:e.value},e.text)}))))},f=function(e){var t=e.value,r=e.required,a=e.rows,o=e.name,i=e.id,c=e.label,l=e.changeHandler;return n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:i,className:"form-label"},c),n.createElement("textarea",{id:i,name:o,rows:a||4,required:r,className:"textArea form-control",onChange:function(e){return l(e)},value:t}))},h=function(){return n.createElement("svg",{fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}))},p=function(){return n.createElement("svg",{fill:"currentColor",className:"bi bi-arrow-repeat button--bi-arrow-repeat",viewBox:"0 0 16 16"},n.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),n.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"}))},d=function(e){var t=e.type,r=e.size,o=e.children,i=e.disabled,c=e.link,l=e.href,u=e.loading,s=e.clickHandler;return n.createElement("div",{className:"form-group mt-3"},c?n.createElement(a.Link,{to:l,className:"button button--"+r},o,n.createElement(h,null)):u?n.createElement("button",{type:t,disabled:i,className:"button button--"+r},o,n.createElement(p,null)):"submit"===t?n.createElement("button",{type:t,disabled:i,className:"button button--"+r},o,n.createElement(h,null)):n.createElement("button",{type:t,disabled:i,className:"button button--"+r,onClick:s},o,n.createElement(h,null)))},v=function(){return n.createElement("svg",{fill:"#228C22",className:"bi bi-check-lg responseMessage--header__icon",viewBox:"0 0 16 16"},n.createElement("path",{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}))},y=function(e){var t=e.message,r=e.handleClick;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 col-md-12"},n.createElement("span",{className:"checkIcon"},n.createElement(v,null)),n.createElement("h3",null,"Thank you for contacting us!")),n.createElement("p",null,t),n.createElement(d,{buttonText:"Close",type:"button",size:"lg",clickHandler:r}))},g=function(e){var t=e.formData,r=e.services,a=(0,n.useState)((function(){return{firstname:"",lastname:"",email:"",message:"",service:"verkkokauppa",company:""}})),o=a[0],i=a[1],l=(0,n.useState)((function(){return!1})),h=l[0],p=l[1];console.log(o);var v=function(){var e,t=(e=u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch({}.API_URL+"/contacts",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)});case 3:i((function(){return{firstname:"",lastname:"",email:"",message:"",service:"verkkokauppa",company:""}})),p((function(){return!0}));case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,l,"next",e)}function l(e){c(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),g=function(e){i((function(){var t;return Object.assign({},o,((t={})[e.target.name]=e.target.value,t))}))};return n.createElement(n.Fragment,null,h?n.createElement(y,{message:"Kiitos yhteydenotostanne, vastaamme teille mahdollisimman pian!",handleClick:function(){p(!1)}}):n.createElement("form",{className:"form",onSubmit:function(e){return v(e)}},n.createElement("p",null,"* Tähdellä merkityt kentät ovat pakollisia."),t.Inputcomponent.map((function(e){return n.createElement(n.Fragment,{key:e.id},function(e,t){switch(e){case"text":case"email":return n.createElement(s,{type:e,name:t.htmlfor,label:t.inputlabel,changeHandler:g,required:t.required});case"select":return n.createElement(m,{name:t.htmlfor,label:t.inputlabel,services:r.values,changeHandler:g,required:t.required});case"textarea":return n.createElement(f,{name:t.htmlfor,label:t.inputlabel,changeHandler:g,required:t.required});default:return n.createElement("p",null,"error")}}(e.inputtype,e))})),n.createElement(d,{type:t.Button[0].type},t.Button[0].text)))},E=r(6798),b=r(8951),w="389437503",k=function(){var e=(0,a.useStaticQuery)(w);return n.createElement(o.Z,{seo:e.strapiContactpage.Seo},n.createElement(E.Z,{background:e.strapiContactpage.Hero.background,title:e.strapiContactpage.Hero.title,content:e.strapiContactpage.Hero.content,link:e.strapiContactpage.Hero.link,color:"black"}),n.createElement("section",{className:"services my-5"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row d-flex justify-content-center"},n.createElement("div",{className:"col-5"},n.createElement("h2",null,e.strapiContactpage.Contactinfo.title),n.createElement(i.Z,{listItemData:e.strapiContactpage.Contactinfo}),n.createElement(b.Z,{socialLinks:e.allStrapiSociallink.edges,side:"start"})),n.createElement("div",{className:"col-7"},n.createElement(g,{formData:e.strapiContactpage.Contactform,services:e.strapiContactpage.Contactform.services}))))))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n=m;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return H()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===m)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=u;var m="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function g(){}var E={};l(E,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,o)&&(E=w);var k=g.prototype=v.prototype=Object.create(E);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=s(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function S(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:H}}function H(){return{value:t,done:!0}}return y.prototype=g,l(k,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(N.prototype),l(N.prototype,i,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new N(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(k),l(k,c,"Generator"),l(k,o,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-pages-yhteystiedot-js-278e909af872677a1650.js.map