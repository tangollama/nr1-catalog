(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!c(l))return!1;var s=e[l],f=t[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),a=n("y3w9"),c=n("0/R4"),u=n("eeVq"),l=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,f=u((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),p=!u((function(){s((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(p&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,d=o(c(u)?u:Object.prototype),b=Function.apply.call(e,d,t);return c(b)?b:d}})},INYr:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,T,O,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(m=h,O=T=function(e){function t(){return d(this,t),b(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=m.peek,T.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},O);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},UUlz:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"New Relic One Catalog Process","description":"How to submit, deploy, and update code to the New Relic One Catalog"}}}}')},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=n("q1tI"),f=n("E/Ix"),p=f.useMDXComponents,d=f.mdx,b=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),c=p(n),l=b(t),f=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:d},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,t]);return s.createElement(f,u({components:c},i))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var b=t instanceof RegExp,m=n instanceof RegExp;if(b!=m)return!1;if(b&&m)return t.toString()==n.toString();var T=o(t);if((u=T.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,T[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=T[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},frM3:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("A2+M"),a=n("qKvR"),c=n("txSG"),u=n("E/Ix"),l=(n("91GP"),function(e){var t=e.size,n=void 0===t?"1em":t;return Object(c.k)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,fill:"currentcolor",viewBox:"0 0 24 24",sx:{display:"block",margin:0}},Object(c.k)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))}),s=function(e){return Object(c.k)("button",Object.assign({title:"Toggle Menu"},e,{sx:{fontFamily:"inherit",fontSize:24,color:"inherit",bg:"transparent",width:32,height:32,p:1,m:0,border:0,appearance:"none",":focus":{outline:"2px solid"},"@media screen and (min-width: 40em)":{display:"none"}}}),Object(c.k)(l,null))},f=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("+ZDr")),p=n.n(f);n("lw3w"),n("emEt").default.enqueue,o.a.createContext({});var d=n("giIh"),b=n.n(d);var m={display:"block",px:2,py:2,color:"inherit",textDecoration:"none",fontSize:1,fontWeight:"bold","&.active":{color:"primary"}},T=function(e){var t=e.href,n=e.children,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","children"]);if(b()(t||""))return Object(c.k)("a",Object.assign({},r,{href:t,sx:m}),n);var o=r.to||t;return Object(c.k)(p.a,Object.assign({},r,{to:o,sx:m,activeClassName:"active"}),n)};n("t+Ps");var O={_frontmatter:{}};function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(u.mdx)("wrapper",Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,Object(u.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),Object(u.mdx)("img",Object.assign({parentName:"a"},{src:"https://github.com/newrelic/nr1-catalog/blob/docs/docs/docs/images/logo.png?raw=true",alt:"New Relic One Open Source Catalog Process"})))),Object(u.mdx)("ul",null,Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/newrelic/nr1-catalog"}),"GitHub"))))}h.isMDXComponent=!0;var y=function(e){return Object(c.k)("button",Object.assign({},e,{sx:{appearance:"none",fontFamily:"inherit",fontSize:1,fontWeight:"bold",m:0,px:2,py:2,color:"text",bg:"muted",border:0,borderRadius:2,":focus":{outline:"2px solid"}}}))},E=["light","dark","deep","swiss"],g={a:T},v={alignItems:"center",width:"100%",h1:{m:0},ul:{ml:"auto",display:"flex",listStyleType:"none"},li:{ml:3}},A=function(e){var t=e.menuOpen,n=e.setMenuOpen,r=e.nav,o=Object(c.l)(),i=o[0],a=o[1];return Object(c.k)(c.d,null,Object(c.k)(c.b,null,Object(c.k)(c.c,{sx:{justifyContent:"space-between"}},Object(c.k)(c.c,{sx:v},Object(c.k)(s,{onClick:function(e){if(n(!t),r.current){var o=r.current.querySelector("a");o&&o.focus()}}}),Object(c.k)(u.MDXProvider,{components:g},Object(c.k)(h,null)),Object(c.k)(y,{sx:{ml:2},onClick:function(e){var t=E.indexOf(i),n=E[(t+1)%E.length];a(n)}},i)))))},j=(n("INYr"),n("pIFo"),n("bWfx"),n("DNiP"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("rE2o"),n("LK8F"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("HAE/"),n("PE4B")),S=n.n(j);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var M=function(e){var t=e.onClick;return Object(c.k)(o.a.Fragment,null,Object(c.k)("div",{onClick:t,sx:{position:"fixed",top:0,right:0,bottom:0,left:0}}),Object(c.k)(a.a,{styles:Object(c.j)({body:{overflow:["hidden","auto"]}})}))},k=(o.a.forwardRef((function(e,t){var n=e.open,r=e.styles,o=void 0===r?{}:r,i=e.components,a=x(e,["open","styles","components"]);return Object(c.k)(c.h,{theme:{styles:S()({ul:{listStyle:"none",p:0,m:0,ul:{a:{pl:4}}},a:{display:"block",px:2,py:2,color:"inherit",textDecoration:"none",fontSize:1,fontWeight:"bold"}},o)}},n&&Object(c.k)(M,a),Object(c.k)(u.MDXProvider,{components:i},Object(c.k)("div",P({},a,{ref:t,sx:{position:["fixed","sticky"],top:0,left:0,bottom:[0,"auto"],zIndex:1,minWidth:0,width:256,maxHeight:["100vh","none"],overflowX:"visible",overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"transform .2s ease-out",transform:[n?"translateX(0)":"translate(-100%)","none"],bg:["background","transparent"]}}))))})),function(e){var t=e.open?"rotate(-180 8 8)":"rotate(0 8 8)";return Object(c.k)("button",P({title:"Expand Section"},e,{sx:{appearance:"none",display:"flex",alignItems:"center",p:2,m:0,border:0,borderRadius:0,color:"inherit",bg:"transparent",":hover,:focus":{color:"primary"}}}),Object(c.k)("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},Object(c.k)("g",{sx:{transformOrigin:"8 8",transition:"transform .1s ease-out"},transform:t},Object(c.k)("path",{stroke:"currentcolor",strokeWidth:"2",fill:"none",d:"M14 6 L8 12 L2 6"}))))}),I=o.a.forwardRef((function(e,t){var n=e.open,i=e.children,a=e.components,u=void 0===a?{}:a,l=e.className,s=x(e,["open","children","components","className"]),f=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=o.a.Children.toArray(t).reduce((function(t,r){var i=r.props&&r.props.mdxType;if(!r.props||!r.props.children)return t;if("a"===i)return[].concat(N(t),[r]);if(n>0&&"ul"===i){var a=t[t.length-1];return t[t.length-1]=o.a.cloneElement(a,{links:e(r.props.children)}),t}return[].concat(N(t),N(e(r.props.children,n+1)))}),[]);return r}(i),p=_(Object(r.useState)({}),2),d=p[0],b=p[1],m=u.a||"a",T=function(e){return function(t){t.stopPropagation(),b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,w({},e,!d[e])))}};return Object(c.k)("div",null,n&&Object(c.k)(M,s),Object(c.k)("div",{ref:t,className:l,sx:{position:["fixed","sticky"],top:0,left:0,bottom:[0,"auto"],zIndex:1,minWidth:0,width:256,maxHeight:["100vh","none"],overflowX:"visible",overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"transform .2s ease-out",transform:[n?"translateX(0)":"translate(-100%)","none"],bg:["background","transparent"]}},Object(c.k)("ul",{sx:{listStyle:"none",p:0,m:0}},f.map((function(e,t){return Object(c.k)("li",{key:t},Object(c.k)("div",{sx:{display:"flex",alignItems:"center"}},Object(c.k)(m,{href:e.props.href,children:e.props.children,className:e.props.className}),e.props.links&&Object(c.k)(k,{open:d[t],sx:{ml:"auto"},onClick:T(t)})),d[t]&&Object(c.k)("ul",{sx:{listStyle:"none",m:0,p:0,pl:3}},e.props.links.map((function(e,t){return Object(c.k)("li",{key:t},Object(c.k)(m,{href:e.props.href,children:e.props.children,className:e.props.className}))}))))})))))}));var C={_frontmatter:{}};function L(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(u.mdx)("wrapper",Object.assign({},C,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,Object(u.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),"Home")),Object(u.mdx)("ul",null,Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"add-checklist"}),"Add a Nerdpack")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"update-checklist"}),"Update a Nerdpack")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference"}),"Reference Guide"),Object(u.mdx)("ul",{parentName:"li"},Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#repo"}),"Project Structure")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#browsers"}),"Supported Browsers")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#code-guidelines"}),"Coding Guidelines")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#versioning"}),"Versioning and Changelogs")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#coding"}),"Code style")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#react"}),"React Best Practices")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#nerdstorage"}),"Using NerdStorage")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#testing"}),"Testing")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#security"}),"Security Requirements")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#legal"}),"Legal Requirements")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#design"}),"Design Requirements")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#guidelines"}),"Design Guidelines")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#naming"}),"Package Naming")),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"reference#documentation"}),"Documentation Guidelines")))),Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/newrelic/nr1-catalog/issues/new?assignees=&labels=question&template=question.md&title="}),"Contact Maintainers"))))}L.isMDXComponent=!0;var G={wrapper:I,a:T},H=function(e){return Object(c.k)(L,Object.assign({},e,{components:G,sx:{width:256,flex:"none",px:3,pt:3,pb:4,mt:[64,0]}}))},D=function(e){var t=e.children,n=Object(c.m)().theme.colors,o=void 0===n?{}:n,i=Object(r.useState)(!1),u=i[0],l=i[1],s=Object(r.useRef)(null),f={body:{margin:0,color:o.text,backgroundColor:o.background}};return Object(c.k)(c.g.root,null,Object(c.k)(a.a,{styles:f}),Object(c.k)(c.e,null,Object(c.k)(A,{nav:s,menuOpen:u,setMenuOpen:l}),Object(c.k)(c.f,null,Object(c.k)(c.b,{py:0,px:3},Object(c.k)("div",{ref:s,sx:{display:["block","flex"],mx:-3}},Object(c.k)(H,{open:u,sx:{display:[null,"block"]},onFocus:function(){return l(!0)},onBlur:function(){return l(!1)},onClick:function(){return l(!1)}}),Object(c.k)("div",{sx:{overflow:"hidden",px:3}},t))))))},B=n("UUlz"),F=n("TJpk"),U=function(e){var t=e.title,n=e.description,r=B.data.site.siteMetadata,i=t?t+" | "+r.title:r.title;return o.a.createElement(F.Helmet,null,o.a.createElement("title",null,i),o.a.createElement("meta",{name:"title",content:i}),o.a.createElement("meta",{name:"description",content:n||r.description}))},q=function(e){var t=e.data.doc,n=t.headings[0]&&t.headings[0].value;return o.a.createElement(D,null,o.a.createElement(U,{title:t.title||n,description:t.description||t.excerpt}),o.a.createElement(i.MDXRenderer,null,t.body))};n.d(t,"pageQuery",(function(){return X}));t.default=function(e){var t=e.data;return o.a.createElement(q,{data:t})};var X="1005468272"},giIh:function(e,t,n){"use strict";e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a `string`, got `"+typeof e+"`");return!/^[a-z]:\\/.test(e)&&/^[a-z][a-z\d+\-.]*:/.test(e)}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),i=n("IOVJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n("q1tI")),a=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},b=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var l=i[u],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},O=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){O(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||O:e.requestAnimationFrame||O,E="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,A=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,o),S(p,d);var b={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,u),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,f)},m={},T={};Object.keys(b).forEach((function(e){var t=b[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=b[e].oldTags)})),t&&t(),l(e,m,T)},j=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=j(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},_=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=x(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),i=j(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&E(v),e.defer?v=y((function(){A(e,(function(){v=null}))})):(A(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:_(c.TAG_NAMES.BASE,t,r),bodyAttributes:_(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:_(c.ATTRIBUTE_NAMES.HTML,o,r),link:_(c.TAG_NAMES.LINK,i,r),meta:_(c.TAG_NAMES.META,a,r),noscript:_(c.TAG_NAMES.NOSCRIPT,u,r),script:_(c.TAG_NAMES.SCRIPT,l,r),style:_(c.TAG_NAMES.STYLE,s,r),title:_(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:b([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-documentation-src-templates-doc-js-2edc6fdc9a8fbc9d407e.js.map