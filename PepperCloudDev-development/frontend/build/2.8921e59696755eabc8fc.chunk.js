webpackJsonp([2],{"./app/components/Layout/ContentWrapper.jsx":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),u=n.n(a),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.children;return this.props.unwrap&&(e=s("div",{className:"unwrap"},void 0,this.props.children)),s("div",{className:"content-wrapper"},void 0,e)}}]),t}(u.a.Component);t.a=l},"./app/containers/HomePage/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{onChangeUsername:function(t){return e(changeUsername(t.target.value))},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(loadRepos())}}}Object.defineProperty(t,"__esModule",{value:!0});var u=n("./app/components/Layout/ContentWrapper.jsx"),s=n("./node_modules/react/react.js"),c=n.n(s),l=n("./node_modules/react-helmet/lib/Helmet.js"),f=(n.n(l),n("./node_modules/react-intl/lib/index.es.js"),n("./node_modules/react-redux/lib/index.js")),p=(n.n(f),n("./node_modules/reselect/es/index.js")),d=n("./app/containers/HomePage/selectors.js"),y=n("./node_modules/react-bootstrap/es/index.js"),m=n("./app/containers/Base/selectors.js");n("./app/containers/HomePage/messages.js");n.d(t,"HomePage",function(){return v}),t.mapDispatchToProps=a;var T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=T("div",{className:"pull-right"},void 0,T(y.n,{id:"dropdown-tr",pullRight:!0},void 0,T(y.n.Toggle,{},void 0,"English"),T(y.n.Menu,{className:"animated fadeInUpShort"},void 0,T(y.c,{eventKey:"1","data-set-lang":"en"},void 0,"English"),T(y.c,{eventKey:"2","data-set-lang":"es"},void 0,"Spanish")))),g=T("small",{"data-localize":"dashboard.WELCOME"},void 0,"TODO"),E=T(y.d,{},void 0,T(y.e,{xs:12,className:"text-center"},void 0,T("h2",{className:"text-thin"},void 0,"Nice to see you"),T("p",{},void 0,"..."))),v=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){var e=this.props;e.loading,e.error,e.repos;return T(u.a,{},void 0,T("div",{className:"content-heading"},void 0,h,"Dashboard",g),E)}}]),t}(c.a.PureComponent),_=n.i(p.b)({repos:n.i(m.b)(),username:n.i(d.a)(),loading:n.i(m.c)(),error:n.i(m.d)()});t.default=n.i(f.connect)(_,a)(v)},"./app/containers/HomePage/messages.js":function(e,t,n){"use strict";var r=n("./node_modules/react-intl/lib/index.es.js");n.i(r.d)({startProjectHeader:{id:"eprx.containers.HomePage.start_project.header",defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"eprx.containers.HomePage.start_project.message",defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"eprx.containers.HomePage.tryme.header",defaultMessage:"Try me!"},trymeMessage:{id:"eprx.containers.HomePage.tryme.message",defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"eprx.containers.HomePage.tryme.atPrefix",defaultMessage:"@"}})},"./app/containers/HomePage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js");n.d(t,"a",function(){return i});var o=function(e){return e.get("home")},i=function(){return n.i(r.a)(o,function(e){return e.get("username")})}},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(l=f[i],!c(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n("./node_modules/react/react.js"),f=r(l),p=n("./node_modules/react-side-effect/lib/index.js"),d=r(p),y=n("./node_modules/deep-equal/index.js"),m=r(y),T=n("./node_modules/object-assign/index.js"),b=r(T),h=n("./node_modules/react-helmet/lib/HelmetConstants.js"),g=n("./node_modules/react-helmet/lib/PlainComponent.js"),E=r(g),v="data-react-helmet",_=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r[t])return r[t]}return null},j=function(e){var t=A(e,"title"),n=A(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,"defaultTitle");return t||r||""},S=function(e){return A(e,"onChangeClientState")||function(){}},P=function(e){return e.filter(function(e){return"undefined"!=typeof e[h.TAG_NAMES.HTML]}).map(function(e){return e[h.TAG_NAMES.HTML]}).reduce(function(e,t){return c({},e,t)},{})},O=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[h.TAG_NAMES.BASE]}).map(function(e){return e[h.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1)return t.concat(n)}return t},[])},w=function(e,t,n){var r={},o=n.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();t.indexOf(s)===-1||n===h.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===h.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==h.TAG_PROPERTIES.INNER_HTML&&u!==h.TAG_PROPERTIES.CSS_TEXT||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,b.default)({},r[u],o[u]);r[u]=s}return e},[]).reverse();return o},M=function(e){document.title=e||document.title},R=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute(v),r=n?n.split(","):[],o=[].concat(r),i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=e[u]||"";t.setAttribute(u,s),r.indexOf(u)===-1&&r.push(u);var c=o.indexOf(u);c!==-1&&o.splice(c,1)}for(var l=o.length-1;l>=0;l--)t.removeAttribute(o[l]);r.length===o.length?t.removeAttribute(v):t.setAttribute(v,r.join(","))},C=function(e,t){var n=document.head||document.querySelector("head"),r=n.querySelectorAll(e+"["+v+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if("innerHTML"===r)n.innerHTML=t.innerHTML;else if("cssText"===r)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(v,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},x=function(e){for(var t=Object.keys(e),n="",r=0;r<t.length;r++){var o=t[r],i="undefined"!=typeof e[o]?o+'="'+e[o]+'"':""+o;n+=i+" "}return n.trim()},N=function(e,t){var n="<"+e+" "+v+'="true">'+_(t)+"</"+e+">";return n},k=function(e,t){var n=t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){if("undefined"==typeof t[e])return e;var n=_(t[e]);return e+'="'+n+'"'}).join(" ").trim(),r=t.innerHTML||t.cssText||"",o=[h.TAG_NAMES.NOSCRIPT,h.TAG_NAMES.SCRIPT,h.TAG_NAMES.STYLE].indexOf(e)===-1;return"<"+e+" "+v+'="true" '+n+(o?"/>":">"+r+"</"+e+">")}).join("");return n},G=function(e,t){var n=[f.default.createElement(h.TAG_NAMES.TITLE,u({key:t},v,!0),t)];return n},L=function(e,t){var n=t.map(function(t,n){var r=u({key:n},v,!0);return Object.keys(t).forEach(function(e){var n=h.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),f.default.createElement(e,r)});return n},I=function(e,t){switch(e){case h.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t)},toString:function(){return N(e,t)}};case h.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return x(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return k(e,t)}}}},H=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,i=e.linkTags,a=e.scriptTags,u=e.noscriptTags,s=e.styleTags;return{htmlAttributes:I(h.TAG_NAMES.HTML,t),title:I(h.TAG_NAMES.TITLE,n),base:I(h.TAG_NAMES.BASE,r),meta:I(h.TAG_NAMES.META,o),link:I(h.TAG_NAMES.LINK,i),script:I(h.TAG_NAMES.SCRIPT,a),noscript:I(h.TAG_NAMES.NOSCRIPT,u),style:I(h.TAG_NAMES.STYLE,s)}},U=function(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,t),s(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,m.default)(this.props,e)}},{key:"render",value:function(){return f.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component);return t.propTypes={htmlAttributes:f.default.PropTypes.object,title:f.default.PropTypes.string,defaultTitle:f.default.PropTypes.string,titleTemplate:f.default.PropTypes.string,base:f.default.PropTypes.object,meta:f.default.PropTypes.arrayOf(f.default.PropTypes.object),link:f.default.PropTypes.arrayOf(f.default.PropTypes.object),script:f.default.PropTypes.arrayOf(f.default.PropTypes.object),noscript:f.default.PropTypes.arrayOf(f.default.PropTypes.object),style:f.default.PropTypes.arrayOf(f.default.PropTypes.object),onChangeClientState:f.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=H({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},D=function(e){return{htmlAttributes:P(e),title:j(e),baseTag:O([h.TAG_PROPERTIES.HREF],e),metaTags:w(h.TAG_NAMES.META,[h.TAG_PROPERTIES.NAME,h.TAG_PROPERTIES.CHARSET,h.TAG_PROPERTIES.HTTPEQUIV,h.TAG_PROPERTIES.PROPERTY],e),linkTags:w(h.TAG_NAMES.LINK,[h.TAG_PROPERTIES.REL,h.TAG_PROPERTIES.HREF],e),scriptTags:w(h.TAG_NAMES.SCRIPT,[h.TAG_PROPERTIES.SRC,h.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:w(h.TAG_NAMES.NOSCRIPT,[h.TAG_PROPERTIES.INNER_HTML],e),styleTags:w(h.TAG_NAMES.STYLE,[h.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:S(e)}},q=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,i=e.linkTags,a=e.scriptTags,u=e.noscriptTags,s=e.styleTags,c=e.onChangeClientState;R(t),M(n);var l={baseTag:C(h.TAG_NAMES.BASE,r),metaTags:C(h.TAG_NAMES.META,o),linkTags:C(h.TAG_NAMES.LINK,i),scriptTags:C(h.TAG_NAMES.SCRIPT,a),noscriptTags:C(h.TAG_NAMES.NOSCRIPT,u),styleTags:C(h.TAG_NAMES.STYLE,s)},f={},p={};Object.keys(l).forEach(function(e){var t=l[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(p[e]=l[e].oldTags)}),c(e,f,p)},W=(0,d.default)(D,q,H);t.default=U(W(E.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),c=r(s),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return null}}]),t}(c.default.Component);t.default=l,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),l=r(c),f=n("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),p=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){y=e(d.map(function(e){return e.props})),m.canUseDOM?t(y):n&&(y=n(y))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var d=[],y=void 0,m=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return y},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=y;return y=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(c,this.props)},a(t,null,[{key:"displayName",value:"SideEffect("+r(c)+")",enumerable:!0},{key:"canUseDOM",value:l.default.canUseDOM,enumerable:!0}]),t}(u.Component);return m}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=o.bind(t),a=0;a<n.length;a++)if(!i(n[a])||e[n[a]]!==t[n[a]])return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=r}});