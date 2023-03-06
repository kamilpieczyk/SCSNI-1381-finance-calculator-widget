!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,i){return o=r()?Reflect.construct.bind():function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},o.apply(null,arguments)}function i(e){var r="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,a)}function a(){return o(e,arguments,t(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),n(a,e)},i(e)}var a=setTimeout;function c(e){return Boolean(e&&void 0!==e.length)}function u(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function l(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,s._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void d(t.promise,e)}f(t.promise,r)}else(1===e._state?f:d)(t.promise,e._value)}))):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof s)return e._state=3,e._value=t,void p(e);if("function"==typeof n)return void h((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,p(e)}catch(t){d(e,t)}var r,o}function d(e,t){e._state=2,e._value=t,p(e)}function p(e){2===e._state&&0===e._deferreds.length&&s._immediateFn((function(){e._handled||s._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)l(e,e._deferreds[t]);e._deferreds=null}function v(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1;try{e((function(e){n||(n=!0,f(t,e))}),(function(e){n||(n=!0,d(t,e))}))}catch(e){if(n)return;n=!0,d(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var n=new this.constructor(u);return l(this,new v(e,t,n)),n},s.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},s.all=function(e){return new s((function(t,n){if(!c(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},s.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var a=n.then;if("function"==typeof a)return void a.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var a=0;a<r.length;a++)i(a,r[a])}))},s.resolve=function(e){return e&&"object"==typeof e&&e.constructor===s?e:new s((function(t){t(e)}))},s.reject=function(e){return new s((function(t,n){n(e)}))},s.race=function(e){return new s((function(t,n){if(!c(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)s.resolve(e[r]).then(t,n)}))},s._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},s._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var y="undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV?"http://localhost:8080":"https://static.photoslurp.com/widget/v3";function m(e,t){if(null!=e){var n=e.length;if(Array.isArray(e)||"number"==typeof n)for(var r=0;r<n&&!1!==t.call(null,e[r],r);r++);else for(var o in e)if("__proto__"!==o&&!1===t.call(null,e[o],o))break}}function g(e){return!!e&&"object"==typeof e}var w=Array.isArray;function b(e){if(null==e)e={};else if(!g(e))return e;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return m(n,(function(t){null!=t&&m(t,(function(t,n){if(null!=t&&"__proto__"!==n){var r;if(g(t)){var o=e[n];w(t)&&!w(o)&&(o=[]),r=b(o,t)}else r=t;e[n]=r}}))})),e}var _,E=window.Photoslurp=window.Photoslurp||{},j=E.support=E.support||{};if("searchParams"in j)_=j.searchParams;else{_=!1;try{_=!!new URL(document.location+"").searchParams}catch(e){}j.searchParams=_}var P=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))},T=function(e,t,n,r){var o=new RegExp("(\\?|\\&)"+t+"\\=[^\\&]*(\\&|$)");if(o.test(e)&&null!=r){if(r)return e.toString().replace(o,(function(e,r,o){return r+P(t)+"="+P(n)+o}));if(!r)return console.error("Query parameter "+t+" is already defined: "+e),e}return e+(/\?/.test(e)?"&":"?")+P(t)+"="+P(n)};_&&(T=function(e,t,n,r){var o=new URL(e,window.location+""),i=o.searchParams;return r?i.set(t,n):!1===r&&i.has(t)?console.error("Query parameter "+t+" is already defined: "+e):i.append(t,n),o.search="?"+i,o+""});var S,C=Element.prototype,U=window.Photoslurp=window.Photoslurp||{},L=U.support=U.support||{};if("removeElement"in L)S=L.removeElement;else{S=function(e){C.remove.call(e)};var O=document.createElement("div");try{O.remove()}catch(e){S=function(e){var t=e.parentNode;t&&t.removeChild(e)}}L.removeElement=S}var R,A,F,N,x=S,k=window.Photoslurp=window.Photoslurp||{},q=k.support=k.support||{};if("nativeCode"in q){var B=q.nativeCode;R=B.addEventListener,A=B.fetch,F=B.XMLHttpRequest,N=B.setTimeout}else{var H=document.createElement("iframe");H.style.display="none",H.style.position="absolute",document.body.appendChild(H);var M=H.contentWindow;if(window.EventTarget){var W=M.EventTarget.prototype.addEventListener;R=function(e,t,n,r){W.call(e,t,n,r)}}else R=function(e,t,n,r){e.addEventListener(t,n,r)};F=M.XMLHttpRequest;var I=M.fetch,V=M.setTimeout;A=I?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return I.apply(window,t)}:null,N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return V.apply(window,t)},window.queueMicrotask&&x(H),q.nativeCode={addEventListener:R,fetch:A,XMLHttpRequest:F,setTimeout:N}}function X(e,t){var n=t.method,r=void 0===n?"GET":n,o=t.contentType,i=void 0===o?"application/json":o,a=t.data,c=void 0===a?{}:a,u=t.dataType,l=void 0===u?"text":u,f=t.timeout,d=void 0===f?15e3:f,p=t.signal;if(r=r.toUpperCase(),A){var v={method:r};return i&&(v.headers={"Content-Type":i}),"POST"!==r&&"PUT"!==r||(v.body=JSON.stringify(c)),p&&(v.signal=p),A(e,v).then((function(e){return s[e.ok?"resolve":"reject"](e)})).then((function(e){return"json"===l?e.json():e.text()}))}return new s((function(t,n){var o,a=new F,u=!1,s=0,f="error";m(["timeout","error","abort"],(function(e){R(a,e,(function(){f=e}))})),R(a,"load",(function(){var e=a.status;u=e>=200&&e<300||304===e})),R(a,"loadend",(function(r){var i;s=r.loaded,u?(i=a.response,t(o?JSON.parse(i):i)):n([f,e,a,s])})),a.open(r.toUpperCase(),e,!0),a.setRequestHeader("Content-type",i),a.responseType=l,o="json"===l&&!a.responseType,a.timeout=d,a.send(c||null)}))}var D="ps-widget",J=window.customElements,Q=window.Photoslurp=window.Photoslurp||{};function G(e){var t,n=""+Q.configsUrl+e+".json",r=window.photoSlurpWidgetSettings[e];r&&(t=r.lang)&&(n=function(e,t,n,r){return T(e,t,n,r)}(n,"lang",t));var o=Q.config[e];return!o||t&&!o.i18n[t]?X(n,{contentType:null,dataType:"json"}).then((function(n){var r=n.config,i=n.urls,a=n.i18n_texts;Q.staticUrl=i.staticFullUrl;var c=b({},a,r,{poweredByUrl:i.poweredByUrl,apiPhotoListUrl:i.apiPhotoListURL,analyticsUrl:i.analyticsURL,reportUrl:i.reportURL});c.i18n=o?o.i18n:{},t&&(c.i18n[t]=a);var u=c.parsedStyle;if(u){var s=document.createElement("style");s.textContent=u,document.head.appendChild(s)}return delete c.parsedStyle,Q.config[e]=c})).catch((function(e){return console.error("There was an error loading widget configuration",e)})):s.resolve(o)}function K(e,t){e=b({},e);var n=this.dataset.config,r=window.photoSlurpWidgetSettings[n];if(r){b(e,r);var o=r.lang;o&&e.i18n&&e.i18n[o]&&b(e,e.i18n[o])}var i=e,a=i.ctaHeading,c=i.ctaSubHeading;if(c&&!this.querySelector("p")){var u=document.createElement("p");u.className="ps-cta-subheading ps-ready-visible",u.style.visibility="hidden",u.textContent=c,this.insertAdjacentElement("afterbegin",u)}if(a&&!this.querySelector("h3")){var s=document.createElement("h3");s.className="ps-cta-heading ps-ready-visible",s.style.visibility="hidden",s.textContent=a,this.insertAdjacentElement("afterbegin",s)}delete e.useBetaVersion,delete e.widgetVersion,delete e.ctaHeading,delete e.ctaSubHeading,delete e.style,delete e.i18n;var l=e.feed_key;l&&(e.feedKey=l,delete e.feed_key),window.photoSlurpWidgetSettings[n]=e;var f=e.widgetType;if(f){var d=document.createElement("script");d.async=!0;var p=Q.staticUrl+"/widget-"+f+".js";t&&(p=p.replace("v3","v2").replace(".js","-jquery.js")),d.src=p,this.insertAdjacentElement("afterend",d)}}if(Q.config=Q.config||{},Q.configsUrl=Q.configsUrl||"https://api.photoslurp.com/v3/widgetconfigs/",Q.staticUrl=Q.staticUrl||y,s._immediateFn&&(s._immediateFn=function(e){N(e,0)}),window.photoSlurpWidgetSettings=window.photoSlurpWidgetSettings||{},J){var $=function(t){var r,o;function i(){var e;return(e=t.call(this)||this).isLoading=!1,e}o=t,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,n(r,o);var a,c,u,s=i.prototype;return s.connectedCallback=function(){this.loadConfig()},s.attributeChangedCallback=function(e,t,n){t&&n&&this.isConnected&&this.loadConfig()},s.disconnectedCallback=function(){this.photoslurpWidget&&(this.photoslurpWidget.destroy(),this.photoslurpWidget=null)},s.loadConfig=function(){var e=this,t=this.dataset.config;t&&!this.isLoading&&(this.isLoading=!0,G(t).then((function(t){e.init(t),e.isLoading=!1})))},s.init=function(e){K.call(this,e)},a=i,u=[{key:"observedAttributes",get:function(){return["data-config"]}}],(c=null)&&e(a.prototype,c),u&&e(a,u),Object.defineProperty(a,"prototype",{writable:!1}),i}(i(HTMLElement));Q.Base=Q.Base||$,J.get(D)||J.define(D,Q.Base)}else if(!Q.observer){var z=function(e){var t=e.dataset.config;t&&G(t).then((function(t){K.call(e,t,!window.Proxy)}))},Y=Node.ELEMENT_NODE;(Q.observer=new MutationObserver((function(e){e.forEach((function(e){var t=e.type,n=e.addedNodes;"childList"===t&&m(n,(function(e){var t=e.nodeType,n=e.tagName;t===Y&&n.toLowerCase()===D&&z(e)}))}))}))).observe(document.body,{childList:!0,subtree:!0});var Z=document.querySelectorAll(D);Array.prototype.forEach.call(Z,z)}}();